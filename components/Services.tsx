export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            My Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Services & Tools
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* UI/UX Design - Large Box */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-white dark:bg-card-dark rounded-3xl p-8 border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-icons-outlined text-9xl text-gray-900 dark:text-white">layers</span>
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 bg-gray-100 dark:bg-surface-dark rounded-2xl flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined text-3xl">
                  design_services
                </span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  UI/UX Design
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Crafting seamless and intuitive user interfaces for web and
                  mobile applications, focusing on user journey and
                  accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Graphics - Small Box */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-white dark:bg-card-dark rounded-3xl p-6 border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors flex flex-col justify-between">
            <div className="w-10 h-10 bg-gray-100 dark:bg-surface-dark rounded-xl flex items-center justify-center text-primary mb-3">
              <span className="material-icons-outlined text-2xl">brush</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Graphics
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Branding & visual identity.
              </p>
            </div>
          </div>

          {/* Illustration - Small Box Dark */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-gradient-to-br from-gray-900 to-black dark:from-surface-dark dark:to-black rounded-3xl p-6 border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10"></div>
            <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-primary mb-3 relative z-10">
              <span className="material-icons-outlined text-2xl">gesture</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white">Illustration</h4>
              <p className="text-sm text-gray-400 mt-1">
                Custom digital art assets.
              </p>
            </div>
          </div>

          {/* Tech Stack - Wide Box */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-white dark:bg-card-dark rounded-3xl p-6 border border-gray-200 dark:border-border-dark flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-border-dark flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-sm font-medium dark:text-gray-200">Figma</span>
              </div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-border-dark flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-sm font-medium dark:text-gray-200">Adobe XD</span>
              </div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-border-dark flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                <span className="text-sm font-medium dark:text-gray-200">Photoshop</span>
              </div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-border-dark flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="text-sm font-medium dark:text-gray-200">Illustrator</span>
              </div>
            </div>
          </div>

          {/* Experience - Wide Box Primary */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-primary text-white rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-bold">3+ Years</h4>
              <p className="opacity-90">Of Professional Experience</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10">
              <span className="material-icons-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
