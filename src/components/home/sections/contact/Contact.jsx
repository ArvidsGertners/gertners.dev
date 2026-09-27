import { ButtonPrimary } from "../../../ui/ButtonPrimary";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";
import { ArrowIcon } from "../../../ui/ArrowIcon";
import { IllustrationSlot } from "../../../ui/IllustrationSlot";

export const Contact = () => {
  return (
    <section id="contact" className="px-gutter pb-section">
      <div className="flex items-center gap-16 border-3 border-ink bg-accent p-8 shadow-brutal-lg md:px-16 md:py-18">
        <div className="flex flex-col items-start gap-4 md:grow md:basis-0 md:gap-6">
          <p className="font-mono text-label uppercase text-ink">
            04 - Contact
          </p>
          <h2 className="text-heading-xl text-ink md:text-display-l">
            Got a sensor problem or a half-finished idea?
          </h2>
          <p className="font-body text-body-m text-ink md:hidden">
            Email is best. I usually reply within a few days.
          </p>
          <p className="hidden font-body text-body-m text-ink md:block">
            Email is the best way to reach me. I read everything and usually
            reply within a few days.
          </p>
          <div className="flex flex-col gap-4 self-stretch md:flex-row md:self-auto">
            <ButtonPrimary
              href="mailto:hello@gertners.dev"
              className="bg-ink text-paper hover:text-ink"
            >
              hello@gertners.dev
              <ArrowIcon />
            </ButtonPrimary>
            <ButtonSecondary href="https://github.com/">
              GitHub
              <ArrowIcon />
            </ButtonSecondary>
          </div>
        </div>
        <IllustrationSlot className="hidden h-75 w-2/5 max-w-94 shrink-0 -rotate-2 border-3 shadow-brutal-lg md:block" />
      </div>
    </section>
  );
};
