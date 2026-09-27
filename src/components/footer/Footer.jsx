import { useEffect, useRef } from "react";

export const Footer = () => {
  const footerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const r = footerRef.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / r.height));
      // later: drawAscii(canvasRef.current, p)
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative min-h-dvh flex flex-col bg-ink">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* PART 1: top row, moves up with the black area */}
      <div className="relative flex justify-between items-start px-24 pt-16 pb-12">
        <div className="flex flex-col items-start gap-3 w-120">
          <h3 className="text-paper font-display text-heading-m font-bold">
            gertners.dev
          </h3>
          <p className="text-paper font-body text-body-m font-normal">
            Written, drawn and self-hosted by Arvids Gertners. Sensors, code,
            and whatever I broke this week.
          </p>
        </div>
        <div className="flex items-start gap-16">
          <div className="flex flex-col items-start gap-3">
            <p className="text-highlight font-mono text-label font-bold uppercase">
              site
            </p>
            <p className="text-paper font-body text-body-m font-normal">Home</p>
            <p className="text-paper font-body text-body-m font-normal">
              Projects
            </p>
            <p className="text-paper font-body text-body-m font-normal">
              Writing
            </p>
            <p className="text-paper font-body text-body-m font-normal">
              About
            </p>
            <p className="text-paper font-body text-body-m font-normal">
              Contact
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-highlight font-mono text-label font-bold uppercase">
              elsewhere
            </p>
            <p className="text-paper font-body text-body-m font-normal">
              GitHub
            </p>
            <p className="text-paper font-body text-body-m font-normal">
              Email
            </p>
          </div>
        </div>
      </div>

      {/* PART 2: copyright bar, stays at the bottom of the screen */}
      <div className="flex flex-1 flex-col justify-end">
        <div className="sticky bottom-0 mx-24 flex justify-between items-start border-t-3 border-paper pt-6 pb-16">
          <p className="text-paper font-mono text-label font-normal">
            © 2026 Arvids Gertners
          </p>
          <p className="text-paper font-mono text-label font-normal">
            Node + Express on a VPS · last deploy 2026-09-24
          </p>
        </div>
      </div>
    </footer>
  );
};
