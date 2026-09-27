import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const ButtonPrimary = ({
  to,
  href,
  type = "button",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-between gap-4 whitespace-nowrap font-mono text-label uppercase text-ink border-3 border-ink px-6 py-3 shadow-brutal";

  const interactive =
    "hover:-translate-0.5 hover:shadow-brutal-lg hover:bg-highlight";

  const motion =
    "transition-[translate,box-shadow,background-color] duration-75 ease-in-out motion-reduce:transition-none";

  // NavLink treats "/#contact" as active on every "/" page, so hash links
  // get no active state.
  if (to?.includes("#")) {
    return (
      <Link
        to={to}
        className={twMerge(base, motion, "bg-accent", interactive, className)}
        {...props}
      >
        {children}
      </Link>
    );
  }
  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? twMerge(base, motion, "bg-highlight", className)
            : twMerge(base, motion, "bg-accent", interactive, className)
        }
        {...props}
      >
        {children}
      </NavLink>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={twMerge(base, motion, "bg-accent", interactive, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={twMerge(base, motion, "bg-accent", interactive, className)}
      {...props}
    >
      {children}
    </button>
  );
};
