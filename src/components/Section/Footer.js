export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="container p-4 text-center border-top mt-4">
      <span>© {year} Copyright</span>
    </footer>
  );
}
