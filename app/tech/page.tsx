import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechPage() {
  return (
    <div className="space-y-7">
      <header className="space-y-2">
        <p className="section-title">Tech stack</p>
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(1.8rem,3.2vw,2.4rem)]">
          Tools and technologies I work with
        </h1>
        <p className="max-w-2xl text-base text-slate-700 md:text-lg">
          A mix of languages and tools from university projects and internships, with a focus on building maintainable,
          practical applications.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Programming languages</CardTitle>
            <CardDescription>Core languages I use regularly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 text-sm md:text-base">
              <Badge>Java</Badge>
              <Badge>Python</Badge>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>PHP</Badge>
              <Badge>SQL</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frameworks & tools</CardTitle>
            <CardDescription>What I build with day-to-day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 text-sm md:text-base">
              <Badge>Streamlit</Badge>
              <Badge>Swing</Badge>
              <Badge>Tkinter</Badge>
              <Badge>MySQL</Badge>
              <Badge>phpMyAdmin</Badge>
              <Badge>Git</Badge>
              <Badge>GitHub</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Strengths</CardTitle>
            <CardDescription>How I like to work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 text-sm md:text-base">
              <Badge variant="outline">Problem solving</Badge>
              <Badge variant="outline">Adaptability</Badge>
              <Badge variant="outline">Communication</Badge>
              <Badge variant="outline">Teamwork</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Education context</CardTitle>
          <CardDescription>
            How my degree supports the stack
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 md:text-base">
            I&apos;m studying BSc Computer Science with Management at Queen Mary University of London, currently with a
            First Class average (74.7%) in Year 1. Key modules include Object Oriented Programming (71.4%), Fundamentals
            of Web Technology (81.4%), and Computer Systems and Networks (62.5%), which underpin the tools and
            technologies listed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


