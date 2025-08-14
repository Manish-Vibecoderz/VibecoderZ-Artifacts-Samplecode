import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Cog, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function MultiAgentSystemPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Multi-Agent System Architecture</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Understanding the evolution from basic tool-using agents to sophisticated orchestrator systems
          </p>
        </div>
      </header>

      {/* Architecture Visualization */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">System Architecture Comparison</h2>
          <div className="relative">
            <Image
              src="/images/multi-agent-architecture.png"
              alt="Multi-agent system architecture diagram"
              width={1200}
              height={600}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Differences</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Agent */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bot className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl">Basic Tool-Using Agent</CardTitle>
                    <CardDescription>Single agent with direct tool access</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Badge variant="outline" className="text-sm">
                    Direct Tool Access
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Single Decision Point
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Linear Processing
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Makes decisions and executes tools directly</li>
                    <li>• Limited to its own knowledge and capabilities</li>
                    <li>• Simple, predictable workflow</li>
                    <li>• Good for focused, single-domain tasks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Orchestrator Agent */}
            <Card className="border-2 border-black">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-2xl">Orchestrator Agent</CardTitle>
                    <CardDescription>Manages and coordinates specialized agents</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Badge className="bg-black text-white text-sm">Agent Management</Badge>
                  <Badge className="bg-black text-white text-sm">Task Delegation</Badge>
                  <Badge className="bg-black text-white text-sm">Parallel Processing</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delegates tasks to specialized sub-agents</li>
                    <li>• Combines expertise from multiple domains</li>
                    <li>• Complex coordination and planning</li>
                    <li>• Scalable for multi-faceted problems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Implementation Examples</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-5 h-5" />
                  Basic Agent Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`class BasicAgent {
  constructor(tools) {
    this.tools = tools;
  }

  async execute(task) {
    // Agent directly decides and uses tools
    const analysis = await this.analyze(task);
    
    if (analysis.needsWebSearch) {
      return await this.tools.webSearch(task.query);
    }
    
    if (analysis.needsCalculation) {
      return await this.tools.calculator(task.expression);
    }
    
    return await this.tools.textGeneration(task.prompt);
  }
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Orchestrator Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`class OrchestratorAgent {
  constructor() {
    this.agents = {
      research: new ResearchAgent(),
      analysis: new AnalysisAgent(),
      writing: new WritingAgent()
    };
  }

  async execute(complexTask) {
    // Break down task into subtasks
    const plan = await this.createExecutionPlan(complexTask);
    
    const results = {};
    
    // Delegate to specialized agents
    for (const step of plan.steps) {
      const agent = this.agents[step.agentType];
      results[step.id] = await agent.execute(step.task);
    }
    
    // Synthesize results
    return await this.synthesizeResults(results, plan);
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Use Each */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">When to Use Each Approach</h2>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-gray-400">
              <CardHeader>
                <CardTitle>Use Basic Agents When:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Task is well-defined and single-domain</li>
                  <li>• You need predictable, linear processing</li>
                  <li>• Simplicity and speed are priorities</li>
                  <li>• Limited resources or complexity constraints</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-black">
              <CardHeader>
                <CardTitle>Use Orchestrator Agents When:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Task requires multiple specialized skills</li>
                  <li>• You need parallel processing capabilities</li>
                  <li>• Complex planning and coordination required</li>
                  <li>• Scalability and modularity are important</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>Multi-Agent System Architecture Guide</p>
        </div>
      </footer>
    </div>
  )
}
