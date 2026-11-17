export function Title({ title, size, fs }) {
  return (
    <h1 className={`${size} ${fs}`}>
      {title}
    </h1>
  );
}