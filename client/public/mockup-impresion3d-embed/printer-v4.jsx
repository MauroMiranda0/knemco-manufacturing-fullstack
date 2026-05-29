// v4 — Single-image printer: only the head/extruder, sweeping horizontally.
//   • The whole head image moves left/right on the rail
//   • Nozzle glows + drips filament at the tip
//   • Scan-line beam pulses below where the nozzle prints
const { useEffect, useRef } = React;

const Printer = ({ animated }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!animated) return;
    const total = 224;
    const cycleMs = 9000;
    const startedAt = performance.now();
    let raf;
    const tick = () => {
      const t = ((performance.now() - startedAt) % cycleMs) / cycleMs;
      const p = Math.min(1, t / 0.65);
      const n = Math.max(1, Math.round(p * total));
      if (layerRef.current) layerRef.current.textContent = String(n).padStart(3, "0");
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  return (
    <div className="printer-stage photo-v4">
      <div className={"printer-frame-v4 " + (animated ? "on" : "")}>

        {/* Build-bed concentric rings sit far below the head */}
        <div className="bed-rings-v4">
          <span className="ring r1" />
          <span className="ring r2" />
          <span className="ring r3" />
        </div>

        {/* The printed gear — stays put on the bed while the head moves above */}
        <div className="gear-layer-v4">
          <img className="gear-img-v4" src="assets/gear.png" alt="" draggable="false" />
        </div>

        {/* Scan beam — emanates from below the moving nozzle */}
        <div className="scan-line-v4" />

        {/* Head image — single layer, sweeps in X */}
        <div className="head-layer-v4">
          <div className="head-anchor-v4">
            <img className="printer-img-v4" src="assets/printer-head.png" alt="" draggable="false" />
            <span className="nozzle-glow-v4" />
            <span className="drip-v4 d1" />
            <span className="drip-v4 d2" />
            <span className="drip-v4 d3" />
          </div>
        </div>

      </div>

      <div className="hud hud-tl">
        <span className="hud-dot" />
        <span>X-AXIS · ACTIVE</span>
      </div>
      <div className="hud hud-br">
        <span>LAYER <b className="layer-count" ref={layerRef}>001</b> / 224</span>
      </div>
    </div>
  );
};

window.Printer = Printer;
