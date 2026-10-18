export function SectionHeading({ number, label, title, description }: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>
    </div>;
}
