export function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: 'var(--border-default)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Brand */}
          <div className="text-left">
            <h3 className="font-bold text-lg glow-text">DiaryBeast</h3>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Discord
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Docs
            </a>
          </div>

          {/* Right - Legal & Base */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <span style={{ color: 'var(--text-muted)' }}>Built on Base</span>
            <a
              href="#"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
