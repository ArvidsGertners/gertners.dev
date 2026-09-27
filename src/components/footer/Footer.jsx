export const Footer = () => {
  return (
    <div className="flex py-16 px-gutter flex-col items-start gap-12 self-stretch bg-ink">
      <div className="flex flex-col gap-10 self-stretch md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-start gap-3 w-full md:w-120">
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
            <p className="text-paper font-body text-body-m font-normal">
              RSS feed
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-6 items-start self-stretch border-t-3 border-paper md:flex-row md:justify-between">
        <p className="text-paper font-mono text-label font-normal">
          © 2026 Arvids Gertners
        </p>
        <p className="text-paper font-mono text-label font-normal">
          Node + Express on a VPS · last deploy 2026-09-24
        </p>
      </div>
    </div>
  );
};
