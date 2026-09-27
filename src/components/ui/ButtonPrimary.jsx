import { NavLink } from "react-router-dom";

export const ButtonPrimary = ({ to, type = "button", children, ...props }) => {
  const base =
    "inline-flex font-mono text-label uppercase text-ink border-3 border-ink px-6 py-3 shadow-brutal";

  const interactiveLink =
    "hover:-translate-0.5 hover:shadow-brutal-lg hover:bg-accent";

  const interactive =
    "hover:-translate-0.5 hover:shadow-brutal-lg hover:bg-highlight";

  const motion =
    "transition-[translate,box-shadow,background-color] duration-75 ease-in-out motion-reduce:transition-none";

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${base} ${motion} bg-highlight`
            : `${base} ${motion} ${interactive} bg-accent`
        }
        {...props}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <>
      <button
        type={type}
        className={`${base} ${motion} ${interactive} bg-accent`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
