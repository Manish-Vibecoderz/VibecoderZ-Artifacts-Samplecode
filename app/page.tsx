import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Network, Zap, Code, GitBranch, Users } from "lucide-react"

export default function MultiAgentSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Multi-Agent Systems
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Understanding Agent
            <br />
            <span className="text-muted-foreground">Orchestration</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn the fundamental difference between basic tool-using agents and sophisticated orchestrator agents that
            coordinate multiple specialized systems.
          </p>
          <Button size="lg" className="group">
            Explore Architecture
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Key Differences Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Differences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Agent */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Bot className="h-6 w-6" />
                  <CardTitle>Basic Agent</CardTitle>
                </div>
                <CardDescription>Single-purpose agent that uses tools directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Direct tool execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Linear task processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Limited context awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Single domain expertise</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orchestrator Agent */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Network className="h-6 w-6" />
                  <CardTitle>Orchestrator Agent</CardTitle>
                </div>
                <CardDescription>Meta-agent that coordinates multiple specialized agents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Delegates to sub-agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Parallel task coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Cross-domain integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Strategic planning & routing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>

          <div className="space-y-12">
            {/* Basic Agent Architecture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Basic Agent Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-2">
                        <span className="text-primary-foreground font-bold">User</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Input</span>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary border-2 border-border rounded-lg flex items-center justify-center mb-2">
                        <Bot className="h-6 w-6" />
                      </div>
                      <span className="text-sm text-muted-foreground">Agent</span>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <div className="flex gap-2">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-muted border rounded flex items-center justify-center mb-2">
                          <Code className="h-4 w-4" />
                        </div>
                        <span className="text-xs text-muted-foreground">Tool A</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-muted border rounded flex items-center justify-center mb-2">
                          <Zap className="h-4 w-4" />
                        </div>
                        <span className="text-xs text-muted-foreground">Tool B</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orchestrator Architecture */}
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Orchestrator Agent Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="py-8">
                  <div className="flex flex-col items-center gap-6">
                    {/* Top Level */}
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-2">
                          <span className="text-primary-foreground font-bold">User</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Complex Task</span>
                      </div>
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      <div className="text-center">
                        <div className="w-20 h-16 bg-primary/10 border-2 border-primary rounded-lg flex items-center justify-center mb-2">
                          <Network className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">Orchestrator</span>
                      </div>
                    </div>

                    {/* Delegation Lines */}
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-border"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-16 h-px bg-border"></div>
                      <div className="w-16 h-px bg-border"></div>
                      <div className="w-16 h-px bg-border"></div>
                    </div>

                    {/* Sub-Agents */}
                    <div className="flex gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-secondary border-2 border-border rounded-lg flex items-center justify-center mb-2">
                          <Bot className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">Data Agent</span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-secondary border-2 border-border rounded-lg flex items-center justify-center mb-2">
                          <Users className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">UI Agent</span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-secondary border-2 border-border rounded-lg flex items-center justify-center mb-2">
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">Logic Agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Examples</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Basic Agent Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Agent Implementation</CardTitle>
                <CardDescription>Direct tool usage pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`class BasicAgent {
  constructor(tools) {
    this.tools = tools;
  }

  async execute(task) {
    // Direct tool selection
    const tool = this.selectTool(task);
    
    // Execute directly
    const result = await tool.run(task);
    
    return result;
  }

  selectTool(task) {
    // Simple tool matching
    return this.tools.find(t => 
      t.canHandle(task)
    );
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>

            {/* Orchestrator Code */}
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-lg">Orchestrator Implementation</CardTitle>
                <CardDescription>Multi-agent coordination pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`class OrchestratorAgent {
  constructor(subAgents) {
    this.subAgents = subAgents;
  }

  async execute(complexTask) {
    // Break down task
    const subtasks = this.decompose(complexTask);
    
    // Delegate to specialists
    const promises = subtasks.map(subtask => {
      const agent = this.selectAgent(subtask);
      return agent.execute(subtask);
    });
    
    // Coordinate results
    const results = await Promise.all(promises);
    return this.synthesize(results);
  }

  selectAgent(subtask) {
    return this.subAgents.find(agent => 
      agent.specializes(subtask.domain)
    );
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">When to Use Each Approach</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Basic Agents Are Ideal For:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Simple, focused tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Single-domain problems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Predictable workflows</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Low latency requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Resource-constrained environments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Prototype development</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Orchestrators Excel At:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Complex, multi-step workflows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Cross-domain integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Dynamic task routing</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Scalable system architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Fault tolerance & recovery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">Enterprise applications</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            Understanding these architectural patterns helps you choose the right approach for your multi-agent system
            requirements.
          </p>
        </div>
      </footer>
    </div>
  )
}
