"use client"

import { useState } from "react"

interface LogEntry {
  timestamp: string
  message: string
  type: "info" | "tool" | "result"
}

export function BasicAgentDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [task, setTask] = useState("Analyze the weather forecast for planning a weekend trip")

  const addLog = (message: string, type: LogEntry["type"] = "info") => {
    setLogs((prev) => [
      ...prev,
      {
        timestamp: new Date().toLocaleTimeString(),
        message,
        type,
      },
    ])
  }

  const simulateBasicAgent = async () => {
    setIsRunning(true)
    setLogs([])

    addLog("🤖 Basic Agent started")
    await delay(800)

    addLog("📋 Analyzing task: " + task)
    await delay(1000)

    addLog("🔧 Using Weather API tool", "tool")
    await delay(1200)
    addLog("📊 Retrieved weather data: Sunny, 75°F, 10% rain chance", "result")

    await delay(800)
    addLog("🔧 Using Location Analysis tool", "tool")
    await delay(1000)
    addLog("📍 Found 3 suitable outdoor locations within 50 miles", "result")

    await delay(800)
    addLog("🔧 Using Recommendation Engine tool", "tool")
    await delay(1200)
    addLog("💡 Generated recommendation: Perfect weather for hiking at Blue Ridge Trail", "result")

    await delay(500)
    addLog("✅ Task completed successfully")

    setIsRunning(false)
  }

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  return (
    <div className="space-y-6">
      <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
        <h3 className="text-xl font-semibold mb-4">Basic Agent Simulation</h3>
        <p className="text-neutral-600 mb-4">
          Watch how a basic agent processes a task by using tools sequentially, one after another.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Task to Execute:</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              disabled={isRunning}
            />
          </div>

          <button
            onClick={simulateBasicAgent}
            disabled={isRunning}
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isRunning ? "Running..." : "Run Basic Agent"}
          </button>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="bg-white border border-neutral-200 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Execution Log</h4>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <span className="text-neutral-400 font-mono">{log.timestamp}</span>
                <span
                  className={`${
                    log.type === "tool"
                      ? "text-blue-600"
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
        <h4 className="font-semibold mb-2">How Basic Agents Work:</h4>
        <ul className="text-sm text-neutral-600 space-y-1">
          <li>• Receives a single task to complete</li>
          <li>• Plans which tools to use in sequence</li>
          <li>• Executes tools one by one, waiting for each to complete</li>
          <li>• Combines results to provide final answer</li>
          <li>• Limited by sequential processing and single-domain focus</li>
        </ul>
      </div>
    </div>
  )
}
