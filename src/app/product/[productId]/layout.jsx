export default function Layout({ children }) {
  return (
    <main>
      <div>{children}</div>
      <div>This static stuff</div>
    </main>
  );
}
