import { Link, useLocation } from "react-router-dom";

export const ButtonNav = ({ to, children, ...props }) => {
  // Links are same-page anchors ("/#about"), so NavLink would mark all of them
  // active on "/". Compare the hash instead.
  const { pathname, hash } = useLocation();
  const isActive = `${pathname}${hash}` === to;

  // Box is always there (transparent) so hover never changes the layout.
  // -mx cancels px-6 + border-3 so the text lines up like a plain link.
  const base =
    "inline-block font-mono text-label uppercase text-ink border-3 px-6 py-3 -mx-[27px]";

  const interactive =
    "border-transparent hover:border-ink hover:bg-highlight hover:-translate-0.5 hover:shadow-brutal-lg";

  const motion =
    "transition-[translate,box-shadow,background-color] duration-75 ease-in-out motion-reduce:transition-none";

  return (
    <Link
      to={to}
      className={
        isActive
          ? `${base} ${motion} border-ink bg-accent shadow-brutal`
          : `${base} ${motion} ${interactive}`
      }
      {...props}
    >
      {children}
    </Link>
  );
};
