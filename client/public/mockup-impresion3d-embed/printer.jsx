const Printer = () => {
  return (
    <div className="printer-media">
      <div className="printer-video-frame">
        <div className="printer-video-wrap">
          <video
            className="printer-video"
            src="assets/Impresion 3D.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

window.Printer = Printer;
