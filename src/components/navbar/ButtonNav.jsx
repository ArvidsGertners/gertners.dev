import { NavLink } from "react-router-dom";

export const ButtonNav = ({ to, children, ...props }) => {
  // Box is always there (transparent) so hover never changes the layout.
  // -mx cancels px-6 + border-3 so the text lines up like a plain link.
  const base =
    "inline-block font-mono text-label uppercase text-ink border-3 px-6 py-3 -mx-[27px]";

  const interactive =
    "border-transparent hover:border-ink hover:bg-highlight hover:-translate-0.5 hover:shadow-brutal-lg";

  const motion =
    "transition-[translate,box-shadow,background-color] duration-75 ease-in-out motion-reduce:transition-none";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${base} ${motion} border-ink bg-accent shadow-brutal`
          : `${base} ${motion} ${interactive}`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
