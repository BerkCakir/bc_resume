"use client";

import { Linkedin, Mail, Database, Code2, Server, MapPin, Cloud, Github as Git, Brain, TestTube, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Berk CAKIR
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Geldrop, the Netherlands</span>
          </div>
          <p className="text-base text-muted-foreground">
            Senior Software Engineer with over 15 years of experience specializing in .NET technologies and 
            enterprise-level software development. Proven track record in designing and implementing large-scale 
            solutions, particularly in healthcare, logistics and supply chain management domains. Expertise in 
            microservices architecture, cloud technologies, and database optimization, with significant experience 
            in both SQL and NoSQL databases. Demonstrated success in improving system performance, 
            implementing critical business solutions, and integrating complex systems for major automotive 
            manufacturers. Strong background in modern development practices including CI/CD, containerization, 
            and event-driven architectures. Skilled in cross-cultural collaboration, combining technical expertise 
            with effective communication to deliver high-quality software solutions. Adept at both frontend and 
            backend development, with strength in C#, .NET, WPF, and cloud technologies.
          </p>
          <div className="flex gap-4 items-center">
            <a href="mailto:cakirberk@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="http://www.linkedin.com/in/berk-cakir/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code2 className="h-5 w-5" />
                Core Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">.NET Core</Badge>
                <Badge variant="secondary">.NET Framework</Badge>
                <Badge variant="secondary">WPF</Badge>
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="h-5 w-5" />
                Data & Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">MS SQL</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Redis</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Server className="h-5 w-5" />
                Infrastructure & DevOps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">MS Azure DevOps</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Bamboo Pipelines</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Brain className="h-5 w-5" />
                Architecture & Patterns
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">REST</Badge>
                <Badge variant="secondary">Web Services</Badge>
                <Badge variant="secondary">Event Sourcing</Badge>
                <Badge variant="secondary">EventFlow</Badge>
                <Badge variant="secondary">Agile</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TestTube className="h-5 w-5" />
                Testing & Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">MS Test</Badge>
                <Badge variant="secondary">NUnit</Badge>
                <Badge variant="secondary">XUnit</Badge>
                <Badge variant="secondary">Moq</Badge>
                <Badge variant="secondary">Specflow</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Git className="h-5 w-5" />
                Tools & Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">BitBucket</Badge>
                <Badge variant="secondary">Jira</Badge>
                <Badge variant="secondary">Kafka</Badge>
                <Badge variant="secondary">RabbitMQ</Badge>
                <Badge variant="secondary">DevExpress</Badge>
                <Badge variant="secondary">SQL Server Reporting Services</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-2">
                <Briefcase className="h-5 w-5 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <span className="text-lg font-semibold">ICT Group</span>
                    <span className="text-base text-muted-foreground">03.2022 - Present</span>
                  </div>
                  <span className="text-base text-muted-foreground">Eindhoven, the Netherlands</span>
                  <div className="mt-4 space-y-2">
                    <div className="pl-4 border-l-2 border-muted">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <span className="text-base">Laborie</span>
                        <span className="text-base text-muted-foreground">03.2024 - 12.2024</span>
                      </div>
                      <span className="text-base text-muted-foreground">Enschede, the Netherlands</span>
                    </div>
                    <div className="pl-4 border-l-2 border-muted">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <span className="text-base">Vanderlande</span>
                        <span className="text-base text-muted-foreground">03.2022 - 02.2024</span>
                      </div>
                      <span className="text-base text-muted-foreground">Veghel, the Netherlands</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-2">
                <Briefcase className="h-5 w-5 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <span className="text-lg font-semibold">Dogus Technology</span>
                    <span className="text-base text-muted-foreground">11.2014 - 02.2022</span>
                  </div>
                  <span className="text-base text-muted-foreground">Istanbul, Türkiye</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-2">
                <Briefcase className="h-5 w-5 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <span className="text-lg font-semibold">Garanti Technology</span>
                    <span className="text-base text-muted-foreground">10.2008 - 01.2014</span>
                  </div>
                  <span className="text-base text-muted-foreground">Istanbul, Türkiye</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-5 w-5 mt-1.5" />
                  <div className="flex-1">
                    <div className="text-lg">Bachelor's Degree in Computer Science</div>
                    <div className="text-base text-muted-foreground">2003-2008</div>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Middle East Technical University, Ankara, Türkiye
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-5 w-5 mt-1.5" />
                  <div className="flex-1">
                    <div className="text-lg">Master of Business Administration</div>
                    <div className="text-base text-muted-foreground">2009-2012</div>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Bilgi University, Istanbul, Türkiye
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}