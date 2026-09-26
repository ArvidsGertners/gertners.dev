import { NavLink } from "react-router-dom";

export const ButtonSecondary = ({
  to,
  type = "button",
  children,
  ...props
}) => {
  const base =
    "inline-block font-mono text-label uppercase text-ink border-3 border-ink px-6 py-3 shadow-brutal";

  const interactive =
    "hover:-translate-0.5 hover:shadow-brutal-lg hover:bg-accent";

  const motion =
    "transition-[translate,box-shadow,background-color] duration-75 ease-in-out motion-reduce:transition-none";

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${base} ${motion} bg-accent`
            : `${base} ${motion} ${interactive} bg-white`
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
        className={`${base} ${interactive} bg-paper`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
