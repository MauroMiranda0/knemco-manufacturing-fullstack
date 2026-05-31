const { useEffect, useState } = React;

const App = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setStep(0);
    setProgress(0);
    const t = [];
    t.push(setTimeout(() => setStep(1), 1300));
    t.push(setTimeout(() => setStep(2), 1700));
    t.push(setTimeout(() => setStep(3), 2100));
    t.push(setTimeout(() => setProgress(68), 1500));
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <main className="stage">
      <div className="grid">
        <div className="stack">
          <Reveal variant="fade-left" delay={300}><SpecCard icon="precision" label="PrecisiÃ³n" value="Â± 0.2 mm" /></Reveal>
          <Reveal variant="fade-left" delay={380}><SpecCard icon="layer" label="Altura de capa" value="0.20 mm" /></Reveal>
          <Reveal variant="fade-left" delay={460}><SpecCard icon="speed" label="Velocidad" value="60 mm/s" /></Reveal>
          <Reveal variant="fade-left" delay={540}><SpecCard icon="temp" label="Temperatura" small value="Extrusor: <b>210 Â°C</b><br/>Cama: <b>60 Â°C</b>" /></Reveal>
          <Reveal variant="fade-left" delay={620}><SpecCard icon="spool" label="Material" value="PLA" dot /></Reveal>
        </div>

        <div className="center">
          <Reveal variant="zoom-in" delay={200}><Printer /></Reveal>
        </div>

        <div className="stack">
          <Reveal variant="fade-right" delay={300}><ProcessCard activeStep={step} /></Reveal>
          <Reveal variant="fade-right" delay={420}><TimeCard progress={progress} /></Reveal>
          <Reveal variant="fade-right" delay={540}><DimCard /></Reveal>
        </div>
      </div>
    </main>
  );
};

window.KNEMCO_RENDER = (mountNode) => {
  const root = ReactDOM.createRoot(mountNode);
  root.render(<App />);
  return root;
};
