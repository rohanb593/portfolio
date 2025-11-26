export default function EducationPage() {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <p className="section-title">Education</p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Academic background
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-700">
        <div>
          <h2 className="font-semibold text-slate-900">
            Queen Mary University of London
          </h2>
          <p className="text-xs text-slate-600">
            BSc Computer Science with Management · London, UK · 2024 – 2028
          </p>
          <p className="mt-2 text-xs text-slate-700">
            Year 1: First Class Honours (Average 74.7%)
          </p>
          <p className="mt-2 text-xs font-semibold text-slate-700">
            Selected modules
          </p>
          <ul className="mt-1 space-y-1 text-xs">
            <li>• Object Oriented Programming – 71.4%</li>
            <li>• Fundamentals of Web Technology – 81.4%</li>
            <li>• Computer Systems and Networks – 62.5%</li>
          </ul>
        </div>

        <div className="pt-2">
          <h2 className="font-semibold text-slate-900">
            American International School of Lusaka
          </h2>
          <p className="text-xs text-slate-600">
            International Baccalaureate · Lusaka, Zambia · 2021 – 2023
          </p>
          <p className="mt-2 text-xs text-slate-700">
            Economics (5), Mathematics (4), Biology (4), Geography (5), French (3), Literature (5).
          </p>
        </div>
      </section>
    </div>
  );
}


