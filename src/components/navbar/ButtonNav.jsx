import { Link, useLocation } from "react-router-dom";

export const ButtonNav = ({ to, children, ...props }) => {
  // Links are same-page anchors ("/#about"), so NavLink would mark all of them
  // active on "/". Compare the hash instead.
  const { pathname, hash } = useLocation();
  const isActive = `${pathname}${hash}` === to;

  // Box is always there (transparent) so hover never changes the layout.
  // -mx cancels px-6 + border-3 so the text lines up like a plain link.
  const base = "text-label uppercase text-ink";

  const interactive = "hover:underline";

  const motion =
    "transition-all duration-75 ease-in-out motion-reduce:transition-none";

  return (
    <Link
      to={to}
      className={
        isActive
          ? `${base} ${motion} underline`
          : `${base} ${motion} ${interactive}`
      }
      {...props}
    >
      {children}
    </Link>
  );
};
