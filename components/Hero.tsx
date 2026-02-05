import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Background Blob */}
      <div className="absolute top-20 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 dark:opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Available for freelance
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Samuel</span> Gebrezgiher
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              A passionate Graphics & UI/UX Designer crafting intuitive, visually stunning, and user-centric digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform duration-200"
              >
                View Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors"
              >
                Contact Me
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">Expertise in</p>
              <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Replaced with generic icons or use the URLs if valid */}
                <img src="/figma-icon.svg" alt="Figma Icon" className="w-10 h-10" />
                
                <img src="/adobe-photoshop-icon.svg" alt="Adobe Photoshop" className="w-10 h-10" />
                
                <img src="/adobe-illustrator-icon.svg" alt="Adobe Illustrator" className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl transform scale-90"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_QvUxyJsJ0ifG7MeppTH_ErFWcyDZdT_nCIgsZie29dL8Oh4LNf5HQYEvwyhzor2PTLV8A3B1EIfMMeoy2-EcL9PocU60Hm8T2sv6WllGcwyLCg3A2AMWww9xlpIdK8eq27dWV-iIg6bns96ph9Kft0LhC9tUxWCjlYKA6y4Kxc3T9kg-yl_INF4HJabLSgKGDDa22EoTfbMs3QPihts7emlapniESPyZh6TXNLZ17o318n7Zv-OfLxFPNYpntSC9g5SnMz4gKs"
                alt="3D Avatar Representation of Samuel"
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl ring-1 ring-white/10 grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating Card */}
              <div
                className="absolute bottom-10 -left-4 md:-left-10 z-20 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black">
                  <span className="material-icons-outlined text-lg">emoji_events</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Pro Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
