export default function Projects() {
  const projects = [
    {
      category: "Dashboard Design",
      title: "Analytics Platform",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkSCDGXj7x57ElZ2wtkKcEkqs6OaiyESFF6hAGcT2b6uyYBrJjXEvUzLUBds0oj5dygPhrKzKuVsO2HkzTcXtSs9AkLId8TEyf3pYntrACZbPXK8s0fnA4JL-M1CqDQAWtq8PIKbL-NCzDMY_M_0ejAwkwtFYhU1ymcpq5QvcauTJD5a7HGYBD4uvPu68_lhc8bnFEYYRiSOXGHAHzjoQngFXYNw37O6lVedzRATL1jjQ0RTV7A4IM9s-mekao_XX5pW190NxK2WY",
      mt: false
    },
    {
      category: "Mobile App",
      title: "Fitness Tracker",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4QVJIp6q8uOgODCeSJ3MtiCK6JPZ4dWYKh1wk9uXzgJ4mmM2HVsm3mKEmkDnrjPn7hk6ewN6VPklfZU6738nXCJOv6h60q5SfKh3xnorgIb_majbRBH9XKUPnpckQgA4AN99Rhn8-Q3zXW7jmXe2aK5rnknJbVh6DkntZf03vWop0XjuqIOF3yoVvqtLRiwDG5Og4GL-Y2cJMhkhT6UyGjPRQY_LMmAnliXAtPmjQgxIQk3EohWEa-jvfUnEPsomgBTVlwEOBYPQ",
      mt: true
    },
    {
      category: "Web Design",
      title: "E-Commerce Redesign",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOwlF7TZKgaLJJIC7XQozEsl3_iqipvU8LZZJGkdXsAi3Tiq4JP_XB4k-bv063zOnAPmvkGarl37Uq-JWeRlNoTP-Nj1VkO6oxs_a5-I27nAOKMVtDcr6ZltIl9sJmoq_dlnQcmKBpVCbLobk0yCdvtNDDLYEldrJWTLAk9-jaAMRVXXIezlQLCJ9XriNiSh9NYVT4cLXUa9YIU-YD_0CefRdtX_ky9wMpeZNQrhkPKPdlQnbuzHFnmXNsIwa9x1JfkRiAI0FJn48",
      mt: false
    },
    {
      category: "Branding",
      title: "Tech Startup Identity",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAojsrYSXYJQR5GGtqk22IoaMteN0bIIkIsBPFTcO3wRIvTxl_kcJXHZ6vqiljB5j_WnVRrRC7wdx7scY0lK5waUgzVwRCSfuUHEaRs9INqSaIdxcWv2wDr3BGtuqBpoSIRwigwCr4dKIJ0lEYJ9hnVliTMVJSVvBPuYoHChhfmfSWOYZtwdzvXL5XYv89DxLzJzaVlWuUAwsgFIGu2GPU4MXHR-tS99TKgjfXnk74v7lbI_zkIG0b3VFH42BqL_oBMg9c2lng43Fg",
      mt: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#080808] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              Recent Projects
            </h3>
          </div>
          <button className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
            See All Projects
            <span className="material-icons-outlined text-sm">arrow_outward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-card-dark ${
                project.mt ? "md:mt-16" : ""
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
