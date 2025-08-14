"use client"

import { useState } from "react"
import { BasicAgentDemo } from "@/components/basic-agent-demo"
import { OrchestratorDemo } from "@/components/orchestrator-demo"
import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function MultiAgentDemo() {
  const [activeTab, setActiveTab] = useState<"architecture" | "basic" | "orchestrator">("architecture")

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Multi-Agent Systems Explorer</h1>
          <p className="text-neutral-600 text-lg">
            Understand the difference between basic agents and orchestrator agents
          </p>
        </header>

        <nav className="mb-8">
          <div className="flex gap-1 bg-neutral-100 p-1 rounded-lg">
            {[
              { id: "architecture", label: "Architecture" },
              { id: "basic", label: "Basic Agent" },
              { id: "orchestrator", label: "Orchestrator" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <main>
          {activeTab === "architecture" && <ArchitectureDiagram />}
          {activeTab === "basic" && <BasicAgentDemo />}
          {activeTab === "orchestrator" && <OrchestratorDemo />}
        </main>
      </div>
    </div>
  )
}
