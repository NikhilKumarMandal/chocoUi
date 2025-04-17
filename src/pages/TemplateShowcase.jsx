import React from "react";

const templates = [
  {
    id: 1,
    title: "Modern Dashboard",
    description:
      "A clean and modern dashboard template with dark mode support.",
    image:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "A clean and modern dashboard template with dark mode support",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["Next.js", "Tailwind CSS", "Prisma"],
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "Showcase your work with this elegant portfolio template.",
    image:
      "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["React", "Framer Motion", "CSS Modules"],
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A feature-rich blog template with markdown support.",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["Next.js", "MDX", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Admin Panel",
    description: "Comprehensive admin panel with charts and data tables.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["React", "Recharts", "Material UI"],
  },
  {
    id: 6,
    title: "Landing Page",
    description: "High-converting landing page template with animations.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    downloadUrl: "#",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

const ExternalLinkIcon = () => (
  <svg
    className="h-4 w-4 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 3h7m0 0v7m0-7L10 14m-7 7h7m-7 0v-7m0 7l14-14"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="h-4 w-4 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
    />
  </svg>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
    {children}
  </span>
);

const TemplateCard = ({ template }) => {
  return (
    <div className="flex flex-col overflow-hidden border-2 hover:border-blue-500/50 transition-all duration-300 rounded-lg">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold">{template.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{template.description}</p>
      </div>
      <div className="p-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {template.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
      <div className="p-4 border-t flex gap-4">
        <a
          href={template.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 text-center flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
        >
          <ExternalLinkIcon />
          Live Demo
        </a>
        <a
          href={template.downloadUrl}
          className="w-1/2 text-center flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </div>
  );
};

const TemplateShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
};

export default TemplateShowcase;
