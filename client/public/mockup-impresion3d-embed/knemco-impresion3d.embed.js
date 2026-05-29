(function () {
  const SCRIPT_ATTR = "data-knemco-embed";

  function getBaseUrl(scriptEl) {
    const src = scriptEl && scriptEl.src ? scriptEl.src : "";
    if (!src) return "";
    return src.slice(0, src.lastIndexOf("/") + 1);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("No se pudo cargar: " + src));
      document.head.appendChild(s);
    });
  }

  async function loadText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se pudo cargar: " + url);
    return res.text();
  }

  class KnemcoImpresion3D extends HTMLElement {
    async connectedCallback() {
      if (this._mounted) return;
      this._mounted = true;

      const root = this.attachShadow({ mode: "open" });
      const hostWrap = document.createElement("div");
      hostWrap.className = "knemco-host";
      const mount = document.createElement("div");
      mount.id = "root";
      hostWrap.appendChild(mount);
      root.appendChild(hostWrap);

      const currentScript = document.currentScript || document.querySelector("script[" + SCRIPT_ATTR + "]");
      const base = getBaseUrl(currentScript);

      const cssFiles = ["styles.css", "styles-v2.css", "styles-v4.css", "styles-v5.css"];
      const cssParts = await Promise.all(cssFiles.map((f) => loadText(base + f)));
      const style = document.createElement("style");
      style.textContent = cssParts.join("\n\n");
      root.appendChild(style);

      const fitStyle = document.createElement("style");
      fitStyle.textContent = `
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
        .knemco-host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #ecebe3;
        }
        .stage {
          transform: scale(0.66);
          transform-origin: top center;
          width: 152%;
          margin-left: -26%;
          margin-top: -18px;
        }
        @media (max-width: 1024px) {
          .stage {
            transform: scale(0.58);
            width: 170%;
            margin-left: -35%;
          }
        }
      `;
      root.appendChild(fitStyle);

      if (!window.React) {
        await loadScript("https://unpkg.com/react@18.3.1/umd/react.development.js");
      }
      if (!window.ReactDOM) {
        await loadScript("https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js");
      }
      if (!window.Babel) {
        await loadScript("https://unpkg.com/@babel/standalone@7.29.0/babel.min.js");
      }

      const assetsBase = base.replace(/\/$/, "") + "/assets";
      hostWrap.style.setProperty("--knemco-assets", assetsBase);

      const sources = ["icons.jsx", "printer-v4.jsx", "cards.jsx", "app-embed.jsx"];
      for (const file of sources) {
        let code = await loadText(base + file);
        code = code.replaceAll('src="assets/gear.png"', 'src="' + assetsBase + '/gear.png"');
        code = code.replaceAll('src="assets/printer-head.png"', 'src="' + assetsBase + '/printer-head.png"');
        const transpiled = window.Babel.transform(code, { presets: ["react"] }).code;
        window.eval(transpiled);
      }

      if (typeof window.KNEMCO_RENDER === "function") {
        this._root = window.KNEMCO_RENDER(mount);
      }
    }
  }

  if (!customElements.get("knemco-impresion3d")) {
    customElements.define("knemco-impresion3d", KnemcoImpresion3D);
  }
})();
