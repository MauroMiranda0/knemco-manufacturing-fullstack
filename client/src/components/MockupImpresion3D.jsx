import { useEffect } from 'react';

const EMBED_SCRIPT_ID = 'knemco-impresion3d-embed-script';
const EMBED_SCRIPT_SRC = '/mockup-impresion3d-embed/knemco-impresion3d.embed.js';

const MockupImpresion3D = () => {
  useEffect(() => {
    const existingScript = document.getElementById(EMBED_SCRIPT_ID);

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = EMBED_SCRIPT_ID;
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.setAttribute('data-knemco-embed', 'true');
    document.body.appendChild(script);

    return () => {
      const mountedScript = document.getElementById(EMBED_SCRIPT_ID);
      if (mountedScript) {
        mountedScript.remove();
      }
    };
  }, []);

  return <knemco-impresion3d />;
};

export default MockupImpresion3D;
