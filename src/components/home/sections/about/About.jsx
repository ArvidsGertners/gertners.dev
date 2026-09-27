import { SectionHeader } from "../../../ui/SectionHeader";
import { IllustrationSlot } from "../../../ui/IllustrationSlot";
import { TagLabel } from "../../../ui/TagLabel";

export const About = () => {
  return (
    <section
      id="about"
      className="flex px-gutter py-section flex-col items-start gap-section-gap self-stretch"
    >
      <SectionHeader
        eyebrow={`03 - About`}
        title={`A bit of everything, on purpose`}
      ></SectionHeader>
      <div className="flex flex-col items-start gap-8 self-stretch md:flex-row md:gap-12">
        <IllustrationSlot className="h-60 w-full border-[3px] md:h-120 md:w-2/5 md:max-w-100 md:shrink-0 md:rotate-2 md:self-start" />
        <div className="flex flex-col items-start gap-6 self-stretch md:grow md:basis-0">
          {/* Mobile gets one shortened paragraph instead of the three below. */}
          <p className="text-body-m font-body font-normal md:hidden">
            I'm Arvids. I finished my Abitur and I'm about to start a three-year
            dual study programme focused on sensors, IoT and mechatronics.
            Outside of that I build software to understand what's underneath.
          </p>
          <p className="hidden text-body-l font-body font-normal md:block">
            I'm Arvids. I finished my Abitur and I'm about to start a three-year
            dual study programme — half lecture hall, half real engineering work
            — focused on sensors, IoT and mechatronics.
          </p>
          <p className="hidden text-body-l font-body font-normal md:block">
            Outside of that I build software mostly to understand what's
            underneath: a Minecraft server panel, a nutrition CLI, this website
            and its admin panel. I also build PCs, flash ESP32 boards, and spend
            far too long comparing sim-racing wheels.
          </p>
          <p className="hidden text-body-l font-body font-normal md:block">
            This site is where I write things down so I don't have to figure
            them out twice.
          </p>
          <div className="flex flex-col items-start gap-3 self-stretch md:pt-6 md:border-t-3">
            <p className="hidden text-ink-muted font-mono text-label uppercase md:block">
              currently using
            </p>
            <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
              <TagLabel>Node.js</TagLabel>
              <TagLabel>Express.js</TagLabel>
              <TagLabel>Python</TagLabel>
              <TagLabel>PostgreSQL</TagLabel>
              <TagLabel>Figma</TagLabel>
              <TagLabel>a bit of rust</TagLabel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
