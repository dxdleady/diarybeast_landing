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
              href="https://x.com/_DiaryBeast"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Twitter
            </a>
            <a
              href="https://drive.google.com/file/d/1nubV7HVtVwNBdnDv_3jWaW6xyOMQxr42/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Pitch
            </a>
            <a
              href="https://github.com/dxdleady/diarybeast_front"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Docs
            </a>
            <a
              href="https://x.com/0x10Shabsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-all"
              style={{ color: 'var(--text-secondary)' }}
            >
              Contact me
            </a>
          </div>

          {/* Right - Legal & Base */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-end items-center">
            <div className="flex items-center gap-2">
              <span style={{ color: 'var(--text-muted)' }}>Built on</span>
              <a
                href="https://base.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-all flex items-center gap-1"
              >
                <img
                  src="/assets/base.png"
                  alt="Base"
                  className="h-4 w-auto"
                />
                <span style={{ color: 'var(--text-secondary)' }}>Base</span>
              </a>
            </div>
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
