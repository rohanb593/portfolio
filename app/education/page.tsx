export default function EducationPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <p className="section-title">Education</p>
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(1.8rem,3.2vw,2.4rem)]">
          Academic background
        </h1>
      </header>

      <section className="space-y-4 text-base text-slate-700 md:text-lg">
        <div>
          <h2 className="font-semibold text-slate-900">
            Queen Mary University of London
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            BSc Computer Science with Management · London, UK · 2024 – 2028
          </p>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            Year 1: First Class Honours (Average 74.7%)
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-700 md:text-base">
            Selected modules
          </p>
          <ul className="mt-1 space-y-1 text-sm md:text-base">
            <li>• Object Oriented Programming – 71.4%</li>
            <li>• Fundamentals of Web Technology – 81.4%</li>
            <li>• Computer Systems and Networks – 62.5%</li>
          </ul>
        </div>

        <div className="pt-2">
          <h2 className="font-semibold text-slate-900">
            American International School of Lusaka
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            International Baccalaureate · Lusaka, Zambia · 2021 – 2023
          </p>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            Economics (5), Mathematics (4), Biology (4), Geography (5), French (3), Literature (5).
          </p>
        </div>
      </section>
    </div>
  );
}


