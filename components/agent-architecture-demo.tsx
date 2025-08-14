"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AgentArchitectureDemo() {
  const [activeDemo, setActiveDemo] = useState<"basic" | "orchestrator">("basic")

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-black">Architecture Comparison</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See the fundamental difference between basic agents and orchestrator-based systems
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <Button
          onClick={() => setActiveDemo("basic")}
          variant={activeDemo === "basic" ? "default" : "outline"}
          className="interactive"
        >
          Basic Agent
        </Button>
        <Button
          onClick={() => setActiveDemo("orchestrator")}
          variant={activeDemo === "orchestrator" ? "default" : "outline"}
          className="interactive"
        >
          Orchestrator System
        </Button>
      </div>

      {activeDemo === "basic" ? <BasicAgentDiagram /> : <OrchestratorDiagram />}
    </section>
  )
}

function BasicAgentDiagram() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Basic Agent Architecture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="flex flex-col items-center space-y-6">
            {/* User */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <span className="font-medium text-black">User</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-0.5 h-8 bg-gray-400"></div>

            {/* Single Agent */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">A</span>
                </div>
                <span className="font-medium text-black">Single Agent</span>
              </div>

              {/* Tools */}
              <div className="flex justify-center gap-3 mt-4">
                {["Search", "Calculate", "Write", "Analyze"].map((tool) => (
                  <div key={tool} className="bg-white border border-gray-300 rounded px-3 py-1 text-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-black text-lg">Characteristics:</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Single point of processing - one agent handles everything</li>
            <li>Direct tool usage - agent directly calls available tools</li>
            <li>Linear execution - tasks processed sequentially</li>
            <li>Limited scalability - bottlenecked by single agent capacity</li>
            <li>Simple coordination - no inter-agent communication needed</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function OrchestratorDiagram() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Orchestrator System Architecture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="flex flex-col items-center space-y-6">
            {/* User */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <span className="font-medium text-black">User</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-0.5 h-8 bg-gray-400"></div>

            {/* Orchestrator */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-purple-800 font-bold text-xl">O</span>
                </div>
                <span className="font-medium text-black">Orchestrator Agent</span>
                <p className="text-sm text-gray-600 mt-1">Plans, delegates, coordinates</p>
              </div>
            </div>

            {/* Arrows to specialist agents */}
            <div className="flex justify-center space-x-8">
              <div className="w-0.5 h-8 bg-gray-400"></div>
              <div className="w-0.5 h-8 bg-gray-400"></div>
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>

            {/* Specialist Agents */}
            <div className="flex justify-center gap-6">
              {[
                { name: "Research Agent", color: "green", tools: ["Search", "Scrape"] },
                { name: "Analysis Agent", color: "blue", tools: ["Calculate", "Model"] },
                { name: "Writing Agent", color: "orange", tools: ["Generate", "Edit"] },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className={`bg-${agent.color}-50 border-2 border-${agent.color}-200 rounded-lg p-4 shadow-sm`}
                >
                  <div className="text-center">
                    <div
                      className={`w-14 h-14 bg-${agent.color}-200 rounded-full mx-auto mb-2 flex items-center justify-center`}
                    >
                      <span className={`text-${agent.color}-800 font-bold`}>{agent.name[0]}</span>
                    </div>
                    <span className="font-medium text-black text-sm">{agent.name}</span>
                    <div className="flex flex-col gap-1 mt-2">
                      {agent.tools.map((tool) => (
                        <div key={tool} className="bg-white border border-gray-300 rounded px-2 py-1 text-xs">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-black text-lg">Characteristics:</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Hierarchical structure - orchestrator manages specialist agents</li>
            <li>Task decomposition - complex tasks broken into specialized subtasks</li>
            <li>Parallel execution - multiple agents can work simultaneously</li>
            <li>Specialized expertise - each agent optimized for specific domains</li>
            <li>Coordination layer - orchestrator handles planning and result synthesis</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
