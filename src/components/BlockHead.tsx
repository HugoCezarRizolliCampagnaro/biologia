export function BlockHead({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="block-head">
      <h3 className="block-title">{title}</h3>
      {hint && <p className="block-hint">{hint}</p>}
    </div>
  );
}
