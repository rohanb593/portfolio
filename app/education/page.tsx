import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EducationPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-3 text-center sm:px-6 md:gap-12">
      <header className="max-w-3xl space-y-4 md:space-y-5">
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
          Education
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          Academic background and achievements from Queen Mary University of London and American International School of Lusaka.
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-6">
        <Card className="p-6 md:p-7 text-left">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Queen Mary University of London</CardTitle>
            <CardDescription className="text-base md:text-lg">BSc Computer Science with Management · London, UK · 2024 – 2028</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-base text-slate-700 md:text-lg">
              Year 1: First Class Honours (Average 74.7%)
            </p>
            <div>
              <p className="text-base font-semibold text-slate-900 md:text-lg mb-2">
                Selected modules
              </p>
              <ul className="space-y-1.5 text-base text-slate-700 md:text-lg">
                <li>• Object Oriented Programming – 71.4%</li>
                <li>• Fundamentals of Web Technology – 81.4%</li>
                <li>• Computer Systems and Networks – 62.5%</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7 text-left">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">American International School of Lusaka</CardTitle>
            <CardDescription className="text-base md:text-lg">International Baccalaureate · Lusaka, Zambia · 2021 – 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg">
              Economics (5), Mathematics (4), Biology (4), Geography (5), French (3), Literature (5).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


