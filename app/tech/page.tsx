import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-3 text-center sm:px-6 md:gap-12">
      <header className="max-w-3xl space-y-4 md:space-y-5">
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
          Tech Stack
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          A mix of languages and tools from university projects and internships, with a focus on building maintainable,
          practical applications.
        </p>
      </header>

      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Programming languages</CardTitle>
            <CardDescription className="text-base md:text-lg">Core languages I use regularly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">Java</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Python</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">HTML</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">CSS</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">JavaScript</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">PHP</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">SQL</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Frameworks & tools</CardTitle>
            <CardDescription className="text-base md:text-lg">What I build with day-to-day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="text-sm md:text-base px-3 py-1">Streamlit</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Swing</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Tkinter</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">MySQL</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">phpMyAdmin</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">Git</Badge>
              <Badge className="text-sm md:text-base px-3 py-1">GitHub</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 md:p-7">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2">Strengths</CardTitle>
            <CardDescription className="text-base md:text-lg">How I like to work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Problem solving</Badge>
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Adaptability</Badge>
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Communication</Badge>
              <Badge variant="outline" className="text-sm md:text-base px-3 py-1">Teamwork</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full max-w-4xl p-6 md:p-7">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl mb-2">Education context</CardTitle>
          <CardDescription className="text-base md:text-lg">
            How my degree supports the stack
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base text-slate-700 md:text-lg text-left">
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


