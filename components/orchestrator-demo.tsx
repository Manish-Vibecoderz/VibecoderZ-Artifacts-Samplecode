"use client"

import { useState } from "react"

interface LogEntry {
  timestamp: string
  message: string
  type: "orchestrator" | "agent" | "tool" | "result" | "coordination"
  agent?: string
}

export function OrchestratorDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [task, setTask] = useState("Plan a complete business strategy for launching a new product")

  const addLog = (message: string, type: LogEntry["type"] = "orchestrator", agent?: string) => {
    setLogs((prev) => [
      ...prev,
      {
        timestamp: new Date().toLocaleTimeString(),
        message,
        type,
        agent,
      },
    ])
  }

  const simulateOrchestrator = async () => {
    setIsRunning(true)
    setLogs([])

    addLog("🎯 Orchestrator Agent started", "orchestrator")
    await delay(800)

    addLog("📋 Analyzing complex task: " + task, "orchestrator")
    await delay(1000)

    addLog("🧠 Breaking down into specialized subtasks:", "orchestrator")
    await delay(800)
    addLog("  → Market research and competitor analysis", "orchestrator")
    addLog("  → Financial modeling and projections", "orchestrator")
    addLog("  → Marketing strategy development", "orchestrator")

    await delay(1000)
    addLog("🚀 Delegating to specialized agents...", "coordination")

    // Simulate parallel agent execution
    const agentPromises = [
      simulateAgent("Research Agent", "market analysis", 2000),
      simulateAgent("Finance Agent", "financial modeling", 2500),
      simulateAgent("Marketing Agent", "strategy development", 1800),
    ]

    await Promise.all(agentPromises)

    await delay(800)
    addLog("🔄 Collecting results from all agents", "coordination")
    await delay(1000)

    addLog("🧩 Synthesizing comprehensive strategy:", "orchestrator")
    await delay(800)
    addLog("  • Market opportunity: $50M TAM, 15% growth rate", "result")
    addLog("  • Financial projection: Break-even in 18 months", "result")
    addLog("  • Go-to-market: Digital-first, B2B focus", "result")

    await delay(500)
    addLog("✅ Complete business strategy delivered", "orchestrator")

    setIsRunning(false)
  }

  const simulateAgent = async (agentName: string, taskType: string, duration: number) => {
    await delay(500)
    addLog(`Started ${taskType}`, "agent", agentName)

    await delay(duration * 0.3)
    addLog(`Using specialized tools for ${taskType}`, "tool", agentName)

    await delay(duration * 0.4)
    addLog(`Processing data and generating insights`, "agent", agentName)

    await delay(duration * 0.3)
    addLog(`Completed ${taskType}`, "result", agentName)
  }

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  return (
    <div className="space-y-6">
      <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
        <h3 className="text-xl font-semibold mb-4">Orchestrator Agent Simulation</h3>
        <p className="text-neutral-600 mb-4">
          Watch how an orchestrator breaks down complex tasks and coordinates multiple specialized agents working in
          parallel.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Complex Task to Execute:</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              disabled={isRunning}
            />
          </div>

          <button
            onClick={simulateOrchestrator}
            disabled={isRunning}
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isRunning ? "Orchestrating..." : "Run Orchestrator"}
          </button>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="bg-white border border-neutral-200 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Orchestration Log</h4>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <span className="text-neutral-400 font-mono">{log.timestamp}</span>
                {log.agent && <span className="text-purple-600 font-medium min-w-[120px]">[{log.agent}]</span>}
                <span
                  className={`${
                    log.type === "orchestrator"
                      ? "text-black font-medium"
                      : log.type === "agent"
                        ? "text-blue-600"
                        : log.type === "tool"
                          ? "text-orange-600"
                          : log.type === "coordination"
                            ? "text-purple-600 font-medium"
                            : log.type === "result"
                              ? "text-green-600"
                              : "text-neutral-700"
                  }`}
                >
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-neutral-100 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">How Orchestrator Agents Work:</h4>
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• Analyzes complex, multi-domain tasks</li>
          <li>• Breaks tasks into specialized subtasks</li>
          <li>• Delegates to domain-expert agents simultaneously</li>
          <li>• Coordinates parallel execution and manages dependencies</li>
          <li>• Synthesizes results from multiple agents into cohesive output</li>
          <li>• Scales to handle unlimited complexity through specialization</li>
        </ul>
      </div>
    </div>
  )
}
