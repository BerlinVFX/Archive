export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border text-center">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Designed & Developed by BERLIN © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
