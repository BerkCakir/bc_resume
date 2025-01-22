"use client";

import { Linkedin, Mail, Database, Code2, Server, MapPin, Cloud, Github as Git, Brain, TestTube } from "lucide-react";
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
          <p className="text-xl text-muted-foreground">
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
              <CardTitle className="flex items-center gap-2">
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
                <Badge variant="secondary">DevExpress</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
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
                <Badge variant="secondary">SSRS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
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
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Architecture & Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
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
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Testing & Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
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
              <CardTitle className="flex items-center gap-2">
                <Git className="h-5 w-5" />
                Tools & Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">BitBucket</Badge>
                <Badge variant="secondary">Jira</Badge>
                <Badge variant="secondary">Kafka</Badge>
                <Badge variant="secondary">RabbitMQ</Badge>
                <Badge variant="secondary">Hangfire</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Resource Planning System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Led the development of a comprehensive ERP system using .NET Core,
                SQL Server, and Azure services. Implemented microservices architecture
                and handled complex business logic.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge>.NET Core</Badge>
                <Badge>SQL Server</Badge>
                <Badge>Azure</Badge>
                <Badge>Microservices</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Management Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Designed and implemented a secure financial management platform with
                real-time reporting capabilities using ASP.NET Core, Entity Framework,
                and SQL Server.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge>ASP.NET Core</Badge>
                <Badge>Entity Framework</Badge>
                <Badge>SQL Server</Badge>
                <Badge>Azure AD</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}