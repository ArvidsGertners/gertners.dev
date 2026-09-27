import { SectionHeader } from "../../../ui/SectionHeader";
import { IllustrationSlot } from "../../../ui/IllustrationSlot";
import { TagLabel } from "../../../ui/TagLabel";

export const About = () => {
  return (
    <div className="flex p-6 md:p-12 lg:p-24 flex-col items-start gap-12 self-stretch">
      <SectionHeader
        eyebrow={`03 - About`}
        title={`A bit of everything, on purpose`}
      ></SectionHeader>
      <div className="flex flex-col items-start gap-12 self-stretch">
        <IllustrationSlot className="h-120 w-100 border-[3px] rotate-2 self-center lg:self-start" />
        <div className="flex flex-col items-start gap-6 grow shrink-0 basis-0 ">
          <p className="text-body-l font-body font-normal leading-normal">
            I'm Arvids. I finished my Abitur and I'm about to start a three-year
            dual study programme — half lecture hall, half real engineering work
            — focused on sensors, IoT and mechatronics.
          </p>
          <p className="text-body-l font-body font-normal leading-normal">
            Outside of that I build software mostly to understand what's
            underneath: a Minecraft server panel, a nutrition CLI, this website
            and its admin panel. I also build PCs, flash ESP32 boards, and spend
            far too long comparing sim-racing wheels.
          </p>
          <p className="text-body-l font-body font-normal leading-normal">
            This site is where I write things down so I don't have to figure
            them out twice.
          </p>
          <div className="flex pt-6 flex-col items-start gap-3 self-stretch border-t-3">
            <p className="text-ink-muted font-mono text-label uppercase">
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
    </div>
  );
};
