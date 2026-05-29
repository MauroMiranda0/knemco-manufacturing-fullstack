const { useEffect, useState } = React;

const App = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    setStep(0); setProgress(0); setStars(0); setAnimated(false);
    const t = [];
    t.push(setTimeout(() => setAnimated(true), 900));
    t.push(setTimeout(() => setStep(1), 1300));
    t.push(setTimeout(() => setStep(2), 1700));
    t.push(setTimeout(() => setStep(3), 2100));
    t.push(setTimeout(() => setProgress(68), 1500));
    t.push(setTimeout(() => setStars(5), 2400));
    return () => t.forEach(clearTimeout);
  }, [replayKey]);

  return (
    <>
      <div className="bg-grain" />
      <main className="stage" key={replayKey}>
        <Reveal variant="fade-up" delay={0}>
          <div className="topbar">
            <span><span className="dot" />Sistema activo / KNEMCO PRINT LAB</span>
            <span>EXP_03 · BUILD 2026</span>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={120}>
          <header className="header">
            <h1>Impresión 3D<span className="accent">de idea a realidad.</span></h1>
            <div className="rule" />
            <p>Tecnología, precisión y creatividad para dar vida a tus proyectos — desde el archivo CAD hasta la pieza terminada.</p>
          </header>
        </Reveal>

        <div className="grid">
          <div className="stack">
            <Reveal variant="fade-left" delay={300}><SpecCard icon="precision" label="Precisión" value="± 0.2 mm" /></Reveal>
            <Reveal variant="fade-left" delay={380}><SpecCard icon="layer" label="Altura de capa" value="0.20 mm" /></Reveal>
            <Reveal variant="fade-left" delay={460}><SpecCard icon="speed" label="Velocidad" value="60 mm/s" /></Reveal>
            <Reveal variant="fade-left" delay={540}><SpecCard icon="temp" label="Temperatura" small value="Extrusor: <b>210 °C</b><br/>Cama: <b>60 °C</b>" /></Reveal>
            <Reveal variant="fade-left" delay={620}><SpecCard icon="spool" label="Material" value="PLA" dot /></Reveal>
          </div>

          <div className="center">
            <Reveal variant="zoom-in" delay={200}><Printer animated={animated} /></Reveal>
            <Reveal variant="fade-up" delay={900}><Banner /></Reveal>
          </div>

          <div className="stack">
            <Reveal variant="fade-right" delay={300}><ProcessCard activeStep={step} /></Reveal>
            <Reveal variant="fade-right" delay={420}><TimeCard progress={progress} /></Reveal>
            <Reveal variant="fade-right" delay={540}><DimCard /></Reveal>
            <Reveal variant="fade-right" delay={660}><QualCard filled={stars} /></Reveal>
          </div>
        </div>
      </main>

      <button className="replay" onClick={() => setReplayKey(k => k + 1)}>
        <Icon name="replay" size={14} /> Reproducir
      </button>
    </>
  );
};

window.KNEMCO_RENDER = (mountNode) => {
  const root = ReactDOM.createRoot(mountNode);
  root.render(<App />);
  return root;
};
