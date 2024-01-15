export default function Layout({ children }) {
  return (
    <main>
      <div>This might be the default content</div>
      <div>{children}</div>
    </main>
  );
}
