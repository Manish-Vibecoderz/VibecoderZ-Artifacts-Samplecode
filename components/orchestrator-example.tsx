"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Play } from "lucide-react"

// Simulated agent implementations
class ResearchAgent {
  async execute(task: any) {
    // Simulate research work
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      findings: ["Market size: $50B", "Growth rate: 15% YoY", "Key competitors: 5 major players"],
      sources: 3,
    }
  }
}

class AnalysisAgent {
  async execute(task: any) {
    // Simulate analysis work
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return {
      insights: ["Strong market opportunity", "Competitive landscape is fragmented"],
      confidence: 0.85,
    }
  }
}

class WritingAgent {
  async execute(task: any) {
    // Simulate writing work
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {
      content: "Based on our research and analysis, the market presents a significant opportunity...",
      wordCount: 250,
    }
  }
}

class OrchestratorAgent {
  constructor() {
    this.agents = {
      research: new ResearchAgent(),
      analysis: new AnalysisAgent(),
      writing: new WritingAgent(),
    }
  }

  async createExecutionPlan(task: string) {
    return {
      steps: [
        { id: "research", agentType: "research", task: `Research: ${task}`, dependencies: [] },
        { id: "analysis", agentType: "analysis", task: `Analyze: ${task}`, dependencies: ["research"] },
        { id: "writing", agentType: "writing", task: `Write report: ${task}`, dependencies: ["research", "analysis"] },
      ],
    }
  }

  async execute(complexTask: string, onProgress: (step: string, result: any) => void) {
    const plan = await this.createExecutionPlan(complexTask)
    const results: Record<string, any> = {}

    // Execute steps in dependency order
    for (const step of plan.steps) {
      onProgress(step.id, { status: "running" })
      const agent = this.agents[step.agentType as keyof typeof this.agents]
      results[step.id] = await agent.execute(step.task)
      onProgress(step.id, { status: "completed", result: results[step.id] })
    }

    return this.synthesizeResults(results)
  }

  async synthesizeResults(results: Record<string, any>) {
    return {
      summary: "Market research report completed successfully",
      components: Object.keys(results).length,
      totalSources: results.research?.sources || 0,
      confidence: results.analysis?.confidence || 0,
      finalOutput: results.writing?.content || "",
    }
  }
}

export default function OrchestratorExample() {
  const [isRunning, setIsRunning] = useState(false)
  const [stepStatus, setStepStatus] = useState<Record<string, any>>({})
  const [finalResult, setFinalResult] = useState<any>(null)

  const orchestrator = new OrchestratorAgent()

  const runExample = async () => {
    setIsRunning(true)
    setStepStatus({})
    setFinalResult(null)

    const task = "AI-powered productivity tools market"

    try {
      const result = await orchestrator.execute(task, (step, status) => {
        setStepStatus((prev) => ({
          ...prev,
          [step]: status,
        }))
      })

      setFinalResult(result)
    } catch (error) {
      console.error("Orchestration failed:", error)
    } finally {
      setIsRunning(false)
    }
  }

  const steps = [
    { id: "research", name: "Research Agent", description: "Gathering market data and trends" },
    { id: "analysis", name: "Analysis Agent", description: "Processing and analyzing findings" },
    { id: "writing", name: "Writing Agent", description: "Generating final report" },
  ]

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-5 h-5" />
          Interactive Orchestrator Demo
        </CardTitle>
        <CardDescription>Watch how an orchestrator agent delegates tasks to specialized sub-agents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button onClick={runExample} disabled={isRunning} className="w-full bg-black text-white hover:bg-gray-800">
          {isRunning ? "Running Orchestration..." : "Start Market Research Task"}
        </Button>

        {/* Step Progress */}
        <div className="space-y-4">
          {steps.map((step, index) => {
            const status = stepStatus[step.id]
            const isCompleted = status?.status === "completed"
            const isRunning = status?.status === "running"

            return (
              <div key={step.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : isRunning ? (
                    <Clock className="w-6 h-6 text-blue-600 animate-spin" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{step.name}</h4>
                    {isRunning && <Badge variant="outline">Running</Badge>}
                    {isCompleted && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>

                  {isCompleted && status.result && (
                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                      <pre>{JSON.stringify(status.result, null, 2)}</pre>
                    </div>
                  )}
                </div>

                {index < steps.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400" />}
              </div>
            )
          })}
        </div>

        {/* Final Result */}
        {finalResult && (
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Orchestration Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Summary:</strong> {finalResult.summary}
                </p>
                <p>
                  <strong>Components Used:</strong> {finalResult.components}
                </p>
                <p>
                  <strong>Sources Analyzed:</strong> {finalResult.totalSources}
                </p>
                <p>
                  <strong>Confidence Score:</strong> {(finalResult.confidence * 100).toFixed(1)}%
                </p>
                <div className="mt-4 p-3 bg-white rounded border">
                  <strong>Generated Content:</strong>
                  <p className="mt-1 text-gray-700">{finalResult.finalOutput}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
