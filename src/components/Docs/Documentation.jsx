import { useState } from "react";
import { Introduction } from "./sections/Introduction";
import { Installation } from "./sections/Installation";
import { Usage } from "./sections/Usage";
import { Theming } from "./sections/Theming";
import { SidebarLink } from "./components/SidebarLink";

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          ChocoUI Documentation
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Everything you need to build beautiful interfaces
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <nav className="md:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-1">
            <SidebarLink
              active={activeTab === "introduction"}
              onClick={() => setActiveTab("introduction")}
            >
              Introduction
            </SidebarLink>
            <SidebarLink
              active={activeTab === "installation"}
              onClick={() => setActiveTab("installation")}
            >
              Installation
            </SidebarLink>
            <SidebarLink
              active={activeTab === "usage"}
              onClick={() => setActiveTab("usage")}
            >
              Basic Usage
            </SidebarLink>
            <SidebarLink
              active={activeTab === "theming"}
              onClick={() => setActiveTab("theming")}
            >
              Theming
            </SidebarLink>
          </div>
        </nav>

        <main className="flex-1">
          {activeTab === "introduction" && <Introduction />}
          {activeTab === "installation" && <Installation />}
          {activeTab === "usage" && <Usage />}
          {activeTab === "theming" && <Theming />}
          {activeTab === "components" && <Components />}
        </main>
      </div>
    </div>
  );
};
