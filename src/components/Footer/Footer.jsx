function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-xl font-bold mb-3">Dev.Guenay</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Full Stack Developer focused on clean code and modern web applications.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </li>
            <li
              onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Projects
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
        <li>
            <a href="mailto:guenay.a.k@outlook.de" className="hover:text-white transition-colors">
                guenay.a.k@outlook.de
            </a>
            </li>
            <li>
            <a href="https://github.com/dev-gunay" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
            </a>
            </li>
            <li>
            {/* <a href="https://linkedin.com/in/deinprofil" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
            </a>  --- > vorerst kein LinkedIn da noch nicht eingerichtet */}
            </li>
            <li>
            <a href="tel:+4915906436847" className="hover:text-white transition-colors">
                +49 1590 6436847
            </a>
        </li>
        </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Dev.Guenay — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;