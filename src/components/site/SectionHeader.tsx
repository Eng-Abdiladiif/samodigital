interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => (
  <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""}`}>
    {label && <span className="section-label">{label}</span>}
    <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] text-balance max-w-3xl">
      {title}
    </h2>
    {description && (
      <p className={`text-muted-foreground max-w-xl ${align === "center" ? "mx-auto" : ""}`}>
        {description}
      </p>
    )}
  </div>
);
