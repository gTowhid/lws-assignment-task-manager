export default function Project({ project }) {
  const { projectName, colorClass } = project;

  return (
    <div className="checkbox-container">
      <input type="checkbox" className={colorClass} checked />
      <p className="label">{projectName}</p>
    </div>
  );
}
