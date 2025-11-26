import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-3 text-center sm:px-6 md:gap-12">
      <header className="max-w-3xl space-y-4 md:space-y-5">
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
          Experience
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          Practical experience building internal tools, managing infrastructure, and delivering data-driven insights
          across London and Lusaka.
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-6">
        <Card className="p-6 md:p-7">
          <CardHeader>
            <div className="flex flex-col gap-3">
              <div>
                <CardTitle className="text-xl md:text-2xl mb-2">Corporate IT Solutions</CardTitle>
                <CardDescription className="text-base md:text-lg">Summer Intern · Lusaka, Zambia · Jun 2025 – Aug 2025</CardDescription>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="text-sm md:text-base px-3 py-1">Python</Badge>
                <Badge className="text-sm md:text-base px-3 py-1">Streamlit</Badge>
                <Badge className="text-sm md:text-base px-3 py-1">MySQL</Badge>
                <Badge className="text-sm md:text-base px-3 py-1">Networking</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-base text-slate-700 md:text-lg text-left">
              <li>
                • Built a licence management system in Python/Streamlit to centralise tracking for 50+ multi-vendor
                software licences.
              </li>
              <li>
                • Developed a full-stack inventory management system for a hardware store, automating checkout and
                reducing item lookup times by 25%.
              </li>
              <li>
                • Configured and deployed 10+ network devices (firewalls, switches, APs), segmenting the network into 5 VLANs.
              </li>
              <li>
                • Helped manage 20TB of NAS storage and supported VMware and Veeam-based virtual machine infrastructure.
              </li>
              <li>
                • Contributed to securing 100+ endpoints with Sophos Anti-Virus.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <div className="flex flex-col gap-3">
              <div>
                <CardTitle className="text-xl md:text-2xl mb-2">James Fletcher</CardTitle>
                <CardDescription className="text-base md:text-lg">Summer Intern · London, UK · Jun 2024 – Jul 2024</CardDescription>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="text-sm md:text-base px-3 py-1">Python</Badge>
                <Badge className="text-sm md:text-base px-3 py-1">Streamlit</Badge>
                <Badge className="text-sm md:text-base px-3 py-1">APIs</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-base text-slate-700 md:text-lg text-left">
              <li>
                • Engineered a full-stack web application with a Streamlit front-end and Python back-end to analyse
                repository metrics (stars, forks, code lines) for hundreds of projects.
              </li>
              <li>
                • Delivered API-based insights around 90% faster, reducing manual data collection and streamlining
                developer evaluation.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


