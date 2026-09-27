export const IllustrationSlot = ({ className = "h-45", src, alt = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden border-b-[3px] bg-highlight ${className}`}
    >
      {src && (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      )}
    </div>
  );
};
