import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <p className="section-title">Projects</p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Selected work
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          A mix of full-stack applications, internal tools, and learning projects that show how I approach real-world
          problems with code.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>License Management System</CardTitle>
            <CardDescription>Python · Streamlit · MySQL</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-700">
              Web app to track and manage software licences from multiple vendors, giving IT a centralised view of
              expiry dates, vendors, and usage.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge>Dashboards</Badge>
              <Badge>CRUD</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Management System</CardTitle>
            <CardDescription>HTML · CSS · JavaScript · MySQL</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-700">
              Full-stack inventory tracking web app for a hardware store, supporting product lookup, basic checkout
              flows, and stock visibility.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge>Full-stack</Badge>
              <Badge>Retail</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Repository Scout</CardTitle>
            <CardDescription>Python · Streamlit · GitHub API</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-700">
              Tool that analyses GitHub repositories by stars, forks and code size to support data-driven comparisons
              for developer evaluation.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge>APIs</Badge>
              <Badge>Analytics</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Horse Race Simulator</CardTitle>
            <CardDescription>Java · Swing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-700">
              Graphical horse racing game with betting mechanics and random race outcomes; built to practise Java,
              Swing UI, and event-driven programming.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge>OOP</Badge>
              <Badge>Desktop</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blog & Portfolio Website</CardTitle>
            <CardDescription>HTML · CSS · PHP · MySQL · JavaScript</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-700">
              Responsive personal website with integrated blog, using PHP/MySQL for content management and a custom
              front-end for posts and projects.
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              <Badge>Blog</Badge>
              <Badge>PHP</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


