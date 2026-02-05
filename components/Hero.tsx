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
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVCL9ah1hSb2DhanlL6vmXI83hvI1s7hd18DsBl4zloP1Gjudf9Ch3iDkf7qNmsvbshW0ZuXRkZ63oUTJLA_wxHWwRuk9J8hR12BsqoLX67bDGEhr0qPRTxvEjPvXTtdKPClKF4l6LpjxaNHKBA1ASEUMjjm7Qgw6M93WAGHVLG-0-lO1m_uwOp3ukV7yaeVrmVPr2o1kk6j3IhLtZAjg2Kcg21h2OKzdNwTQIAXbX_N8Lpi7BkfEoCyDx1uDif3NsOPdnDcYsy9E"
                    alt="Figma"
                    className="h-8 w-8"
                />
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJx3N25UUj5vAJfnTcbL-AR0TN184zAaeJefx-aFX8gqMF051HxOMexGl58M9k7njBugvTH03xrv_08pg10D9gZ4V1U1h15-zaHoeXEtRn_RuFm50qTEcasTlGFX8TqOhXh4qL1YZsJ579dZxxb7XfiHWsG77jhwHPQUTdmP7LZ13HQvdDqSp1pqBtQmeThJp-s34wT2WTTI_6HgCkgxfG1k-sp2JuxnPftxaGoNUJHprdCYAwSsmVe_VH2hbeAMA6M4BkT-mCOKY"
                    alt="Photoshop"
                    className="h-8 w-8"
                />
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALbwmXLC9UAT1aE1p_2SZvC5d_CaMV84PxtnuJvfonspnbC3xOwh48cmGClxMmHEWi6aSmc4YFZCtALiG_ZNuVAa3f3Q-QT8iGeMOGMuuPV20Aqo9k7I31YR5vRwNDykYjxl2UrQhtdKGFka1CTncTHiOPBRnHIaVerRYHzod9981Rr8t9qJBqFNszs1KoHkVV4YPK-W_3FyHi2gKi1x0wxQTclldOy0rfpbwlgB6vuyYWOdFoN1ceZPfkEqRG_-lycFEhkLe1DRI"
                    alt="Illustrator"
                    className="h-8 w-8 dark:invert"
                />
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
