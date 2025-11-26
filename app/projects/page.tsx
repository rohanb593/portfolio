import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-3 text-center sm:px-6 md:gap-12">
      <header className="max-w-3xl space-y-4 md:space-y-5">
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
          Projects
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          A mix of full-stack applications, internal tools, and learning projects that show how I approach real-world
          problems with code.
        </p>
      </header>

      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2">
        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">License Management System</CardTitle>
            <CardDescription className="text-base md:text-lg">Python · Streamlit · MySQL</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg mb-4">
              Web app to track and manage software licences from multiple vendors, giving IT a centralised view of
              expiry dates, vendors, and usage.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">Dashboards</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">CRUD</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Inventory Management System</CardTitle>
            <CardDescription className="text-base md:text-lg">HTML · CSS · JavaScript · MySQL</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg mb-4">
              Full-stack inventory tracking web app for a hardware store, supporting product lookup, basic checkout
              flows, and stock visibility.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">Full-stack</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Retail</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">GitHub Repository Scout</CardTitle>
            <CardDescription className="text-base md:text-lg">Python · Streamlit · GitHub API</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg mb-4">
              Tool that analyses GitHub repositories by stars, forks and code size to support data-driven comparisons
              for developer evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">APIs</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Analytics</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Horse Race Simulator</CardTitle>
            <CardDescription className="text-base md:text-lg">Java · Swing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg mb-4">
              Graphical horse racing game with betting mechanics and random race outcomes; built to practise Java,
              Swing UI, and event-driven programming.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">OOP</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Desktop</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Blog & Portfolio Website</CardTitle>
            <CardDescription className="text-base md:text-lg">HTML · CSS · PHP · MySQL · JavaScript</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base text-slate-700 md:text-lg mb-4">
              Responsive personal website with integrated blog, using PHP/MySQL for content management and a custom
              front-end for posts and projects.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">Blog</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">PHP</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


