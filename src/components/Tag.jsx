const colors = {
  highlight: "bg-highlight",
  accent: "bg-accent",
  paper: "bg-paper",
  white: "bg-white",
};

export const Tag = ({ children, color = "white", ...props }) => {
  return (
    <div
      className={`inline-flex py-1 px-2 items-center border-[3px] border-ink ${colors[color]} shadow-brutal hover:rotate-2 transition-all ease-in-out`}
    >
      <p className="text-ink font-mono text-label uppercase" {...props}>
        {children}
      </p>
    </div>
  );
};
