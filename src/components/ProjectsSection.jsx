import { ArrowRight, ExternalLink, GitBranchPlus } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Alex Tour & Travel Platform",
    description:
      "Developed scalable backend services for a travel and booking platform. Built secure REST APIs, implemented authentication, integrated third-party services, optimized database performance, and contributed to a microservices-based architecture supporting customer bookings and business operations.",
    image: "/projects/Alex.png",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "Microservices",
      "JWT",
      "Redis",
      "Git",
      "CI/CD",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "IPPB Core Banking Integration",
    description:
      "Worked on India Post Payments Bank (IPPB) backend systems by integrating Core Banking System (CBS) with ISO 8583 financial messaging. Developed secure transaction APIs, ensured end-to-end transaction confirmation, and optimized Oracle and PostgreSQL database operations.",
    image: "/projects/IPPB.png",
    tags: [
      "Node.js",
      "Express.js",
      "Oracle DB",
      "TypeORM",
      "PostgreSQL",
      "ISO 8583",
      "Redis",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "UPSC NGRP Portal",
    description:
      "Developed and maintained backend modules for the National Government Records Portal (NGRP). Managed PostgreSQL and MongoDB databases, implemented replication, automated backups, and optimized large-scale government data processing.",
    image: "/projects/UPSC.jpg",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Database Replication",
      "Backup Automation",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "UPSC One-Time Registration (OTR)",
    description:
      "Designed and maintained secure backend APIs for the UPSC One-Time Registration system. Focused on user authentication, database management, API optimization, and reliable data processing for large-scale government applications.",
    image: "/projects/otr.jpg",
    tags: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "Timesheet Management System",
    description:
      "Built a web-based employee timesheet management system with project allocation, attendance tracking, reporting, and analytics. Developed backend APIs and optimized PostgreSQL queries for improved performance.",
    image: "/projects/timesheet.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Accounting Tools",
    description:
      "Developed backend modules for financial management, including invoice generation, expense tracking, tax calculation, and reporting. Focused on secure APIs and optimized PostgreSQL database operations.",
    image: "/projects/accounting.png",
    tags: ["Node.js", "PostgreSQL", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 7,
    title: "Insurance Portal",
    description:
      "Developed secure backend services for an insurance management platform handling policies, claims, and customer accounts. Designed RESTful APIs and optimized PostgreSQL database performance.",
    image: "/projects/tmill.jpg",
    tags: ["Node.js", "PostgreSQL", "REST API", "Secure APIs"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 8,
    title: "Track & Trace System",
    description:
      "Implemented backend services for a real-time logistics and supply chain tracking solution. Developed APIs for shipment tracking, inventory updates, and data synchronization using MongoDB and PostgreSQL.",
    image: "/projects/track.png",
    tags: ["Node.js", "MongoDB", "PostgreSQL", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured
          <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the enterprise-grade projects I've contributed to
          throughout my career. These projects demonstrate my expertise in
          designing scalable backend architectures, developing secure RESTful
          APIs, optimizing databases, and delivering high-performance solutions
          across fintech, government, and travel domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <FaGithub size={20} />{" "}
                    </a>{" "}
                    {/* Github icon should come( not showing in lucide-react ) */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sonuhussain201718"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
