import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="section-title">Experience</p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Internships and hands-on roles
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Practical experience building internal tools, managing infrastructure, and delivering data-driven insights
          across London and Lusaka.
        </p>
      </header>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <CardTitle>Corporate IT Solutions</CardTitle>
                <CardDescription>Summer Intern · Lusaka, Zambia · Jun 2025 – Aug 2025</CardDescription>
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge>Python</Badge>
                <Badge>Streamlit</Badge>
                <Badge>MySQL</Badge>
                <Badge>Networking</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-xs text-slate-700">
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

        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <CardTitle>James Fletcher</CardTitle>
                <CardDescription>Summer Intern · London, UK · Jun 2024 – Jul 2024</CardDescription>
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge>Python</Badge>
                <Badge>Streamlit</Badge>
                <Badge>APIs</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-xs text-slate-700">
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


