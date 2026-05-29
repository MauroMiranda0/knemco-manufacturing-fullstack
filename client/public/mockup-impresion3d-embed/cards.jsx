// Spec, Process, Time, Dimension, Quality, Banner cards
const { useEffect, useState, useRef } = React;

// In-view hook with safety fallback so reveals always trigger
const useInView = (delay = 0) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const trigger = () => { timer = setTimeout(() => setShown(true), delay); };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { trigger(); io.disconnect(); }
      });
    }, { threshold: 0.05 });
    io.observe(el);
    // safety: force-reveal after 800ms even if observer never fires (e.g. offscreen iframe)
    const fallback = setTimeout(() => { setShown(true); io.disconnect(); }, 800 + delay);
    return () => { io.disconnect(); clearTimeout(timer); clearTimeout(fallback); };
  }, [delay]);
  return [ref, shown];
};

const Reveal = ({ children, variant = "fade-up", delay = 0, className = "" }) => {
  const [ref, shown] = useInView(delay);
  return (
    <div ref={ref} className={`${variant} ${className} ${shown ? "in" : ""}`}>
      {children}
    </div>
  );
};

// --- Spec card ---
const SpecCard = ({ icon, label, value, small, dot }) => (
  <div className="spec">
    <div className="icon"><Icon name={icon} size={22} /></div>
    <div className="meta">
      <span className="label">{label}</span>
      {small ? (
        <span className="value small" dangerouslySetInnerHTML={{ __html: value }} />
      ) : (
        <span className="value">
          {dot && <span className="material-dot" />}
          {value}
        </span>
      )}
    </div>
  </div>
);

// --- Process steps ---
const ProcessCard = ({ activeStep }) => {
  const steps = ["Diseño 3D", "Laminado", "Impresión", "Acabado", "Entrega"];
  return (
    <div className="process">
      <div className="head">Proceso de Impresión</div>
      <ol>
        {steps.map((s, i) => (
          <li key={i} className={i < activeStep ? "done" : ""}>
            <span className="bullet" />
            <span className="label">{i + 1}. {s.toUpperCase()}</span>
            <span className="check">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3,8.5 7,12 13,4" />
              </svg>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

// --- Time card ---
const TimeCard = ({ progress }) => (
  <div className="time-card">
    <div className="head">Tiempo Estimado</div>
    <div className="time">
      <Icon name="clock" size={26} />
      <span className="val">2h 45m</span>
    </div>
    <div className="bar-wrap">
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%`, transition: "width 1.6s cubic-bezier(0.2, 0.9, 0.3, 1)" }} />
      </div>
      <span className="pct">{Math.round(progress)}%</span>
    </div>
  </div>
);

// --- Dimensions ---
const DimCard = () => (
  <div className="dim">
    <div className="head">Dimensiones</div>
    <div className="body">
      <div className="icon"><Icon name="cube" size={36} /></div>
      <div className="rows">
        <div className="row"><span>Alto</span><span>45 mm</span></div>
        <div className="row"><span>Ancho</span><span>60 mm</span></div>
        <div className="row"><span>Profundidad</span><span>60 mm</span></div>
      </div>
    </div>
  </div>
);

// --- Quality ---
const QualCard = ({ filled }) => (
  <div className="qual">
    <div className="head">Calidad</div>
    <div className="stars">
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{
          opacity: i < filled ? 1 : 0.18,
          transform: i < filled ? "scale(1)" : "scale(0.85)",
          transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s`,
          display: "inline-block"
        }}>
          <Icon name="star" size={18} />
        </span>
      ))}
    </div>
    <div className="word">Excelente</div>
  </div>
);

// --- Banner ---
const Banner = () => (
  <div className="banner">
    <div className="icon"><Icon name="cube" size={26} /></div>
    <div className="text">Transformamos tus ideas <b>en objetos reales</b></div>
  </div>
);

Object.assign(window, { Reveal, SpecCard, ProcessCard, TimeCard, DimCard, QualCard, Banner });
