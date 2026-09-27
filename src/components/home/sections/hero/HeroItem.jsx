import { ButtonPrimary } from "../../../ui/ButtonPrimary";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";
import { ArrowIcon } from "../../../ui/ArrowIcon";
import { TagLabel } from "../../../ui/TagLabel";

export const HeroItem = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-6 md:grow md:basis-0 md:gap-8">
        <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
          <TagLabel color="highlight">Dual Student</TagLabel>
          <TagLabel color="paper">Germany</TagLabel>
          <TagLabel color="paper">Informatics</TagLabel>
        </div>
        <h1 className="font-display text-display-l md:text-display-xl">
          Arvids Gertners
        </h1>
        <p className="self-stretch font-body text-body-m md:text-body-l">
          Dual student in Germany. Still figuring out exactly what I want to
          specialize in — right now that means a bit of everything.
        </p>
        <div className="flex flex-col gap-3 self-stretch md:flex-row md:gap-4 md:self-auto">
          <ButtonPrimary>
            Read the Blog
            <ArrowIcon />
          </ButtonPrimary>
          <ButtonSecondary>See Projects</ButtonSecondary>
        </div>
      </div>
    </>
  );
};
