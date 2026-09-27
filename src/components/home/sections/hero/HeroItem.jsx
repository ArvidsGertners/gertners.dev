import { ButtonPrimary } from "../../../ui/ButtonPrimary";
import { ButtonSecondary } from "../../../ui/ButtonSecondary";
import { TagLabel } from "../../../ui/TagLabel";

export const HeroItem = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-8 grow shrink-0 basis-0">
        <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
          <TagLabel color="highlight">Dual Student</TagLabel>
          <TagLabel color="paper">Germany</TagLabel>
          <TagLabel color="paper">Informatics</TagLabel>
        </div>
        <h1 className="font-display text-display-xl h-full spacing tracking-tight">
          Arvids Gertners
        </h1>
        <p className="self-stretch font-body text-lg">
          Dual student in Germany. Still figuring out exactly what I want to
          specialize in — right now that means a bit of everything.
        </p>
        <div className="flex items-start gap-4">
          <ButtonPrimary>Read the Blog</ButtonPrimary>
          <ButtonSecondary>See Projects</ButtonSecondary>
        </div>
      </div>
    </>
  );
};
