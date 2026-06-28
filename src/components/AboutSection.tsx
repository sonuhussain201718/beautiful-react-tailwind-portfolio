import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Backend & Frontend Developer & Tech Creator
            </h3>
            {/* <p className="text-muted-foreground">
              With over 5 years of experiance in web development, I specialize
              in creating responsive, accessible, and perfomant web applications
              using modern technologies
            </p> */}

            <p className="text-muted-foreground">
              I'm a passionate Backend Developer with over 5 years of
              professional experience designing and developing scalable
              server-side applications. My expertise includes building REST
              APIs, microservices, database design, authentication systems,
              payment integrations, and cloud deployments. Throughout my career,
              I have worked on fintech, government, and travel management
              projects, where I developed secure backend services, optimized
              databases, implemented logging and monitoring, and collaborated
              with cross-functional teams using Agile methodologies. I enjoy
              solving complex backend challenges, improving application
              performance, and continuously learning modern technologies to
              deliver reliable and efficient software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Designing scalable RESTful APIs and microservices using
                    Node.js, Express.js, and NestJS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Database Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Designing and optimizing PostgreSQL, MongoDB, and Oracle
                    databases with high-performance queries and secure data
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps </h4>
                  <p className="text-muted-foreground">
                    Docker, Azure DevOps, GitHub Actions, CI/CD pipelines,
                    logging, monitoring, and deployment automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
