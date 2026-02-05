export default function Marquee() {
  return (
    <div className="w-full bg-surface-light dark:bg-card-dark py-6 overflow-hidden border-y border-gray-200 dark:border-border-dark">
      <div className="whitespace-nowrap flex gap-10 items-center animate-marquee">
        {/* Duplicate content to ensure seamless loop */}
        {Array(4).fill(null).map((_, i) => (
          <div key={i} className="flex gap-10 items-center">
            <span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 uppercase">
              User Interface
            </span>
            <span className="text-primary text-2xl">★</span>
            <span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 uppercase">
              Product Design
            </span>
            <span className="text-primary text-2xl">★</span>
            <span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 uppercase">
              Web Application
            </span>
            <span className="text-primary text-2xl">★</span>
            <span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 uppercase">
              Mobile App
            </span>
            <span className="text-primary text-2xl">★</span>
            <span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 uppercase">
              Prototyping
            </span>
            <span className="text-primary text-2xl">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
