import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Bot, Cog, Users, Zap, GitBranch, MessageSquare, Database, Search, FileText } from "lucide-react"

export default function MultiAgentSystemsGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-black rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <Badge variant="outline" className="text-xs font-medium">
              AI SYSTEMS GUIDE
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-black mb-3">Multi-Agent Systems: From Tools to Orchestration</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Understanding the evolution from basic tool-using agents to sophisticated orchestrator systems that
            coordinate multiple specialized agents.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">The Agent Evolution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              As AI systems become more complex, we've seen an evolution from simple chatbots to sophisticated
              multi-agent systems. The key distinction lies in how these systems handle complexity and specialization.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cog className="w-5 h-5 text-gray-600" />
                    <CardTitle className="text-lg">Basic Tool-Using Agent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A single agent that can call various tools and functions to complete tasks. All decision-making and
                    coordination happens within one system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <CardTitle className="text-lg">Orchestrator Agent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A meta-agent that manages and coordinates multiple specialized sub-agents, each with their own
                    expertise and capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* Architecture Comparison */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Architecture Comparison</h2>

          {/* Basic Agent Architecture */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
              <Cog className="w-5 h-5" />
              Basic Tool-Using Agent
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex flex-col items-center space-y-6">
                {/* User Input */}
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">User Query</span>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                {/* Single Agent */}
                <div className="bg-black text-white rounded-lg px-6 py-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <span className="font-semibold">Single Agent</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">Processes query & selects tools</p>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                {/* Tools */}
                <div className="flex gap-4">
                  <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Search className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-medium">Search</span>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Database className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-medium">Database</span>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <span className="text-xs font-medium">File System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orchestrator Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Multi-Agent Orchestrator System
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex flex-col items-center space-y-6">
                {/* User Input */}
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Complex User Query</span>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                {/* Orchestrator */}
                <div className="bg-black text-white rounded-lg px-6 py-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    <span className="font-semibold">Orchestrator Agent</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">Plans, delegates & coordinates</p>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                {/* Sub-agents */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold">Research Agent</span>
                    </div>
                    <p className="text-xs text-gray-500">Web search & data gathering</p>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold">Analysis Agent</span>
                    </div>
                    <p className="text-xs text-gray-500">Data processing & insights</p>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold">Writing Agent</span>
                    </div>
                    <p className="text-xs text-gray-500">Content generation & formatting</p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400" />

                {/* Coordination */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Coordinated Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* Key Differences */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Key Differences</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Basic Tool-Using Agent</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Single point of decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Limited by single context window</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Tools are external functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Sequential task execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Simpler to implement and debug</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Orchestrator Agent</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Distributed decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Each agent has specialized context</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Sub-agents are intelligent entities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Parallel and coordinated execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">More complex but more capable</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* Code Examples */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Implementation Examples</h2>

          {/* Basic Agent Code */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-black mb-4">Basic Tool-Using Agent</h3>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{`class BasicAgent:
    def __init__(self):
        self.tools = {
            'search': self.web_search,
            'database': self.query_database,
            'file_system': self.read_file
        }
    
    async def process_query(self, query: str):
        # Single agent decides which tools to use
        plan = self.create_plan(query)
        
        results = []
        for step in plan:
            tool_name = step['tool']
            params = step['params']
            
            # Execute tool sequentially
            result = await self.tools[tool_name](params)
            results.append(result)
        
        # Single agent synthesizes final response
        return self.synthesize_response(results)
    
    def web_search(self, query):
        # Tool implementation
        pass
    
    def query_database(self, query):
        # Tool implementation  
        pass`}</code>
              </pre>
            </div>
          </div>

          {/* Orchestrator Code */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Multi-Agent Orchestrator</h3>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{`class OrchestratorAgent:
    def __init__(self):
        self.agents = {
            'researcher': ResearchAgent(),
            'analyst': AnalysisAgent(), 
            'writer': WritingAgent()
        }
    
    async def process_query(self, query: str):
        # Orchestrator creates high-level plan
        plan = await self.create_execution_plan(query)
        
        # Delegate tasks to specialized agents
        tasks = []
        for step in plan:
            agent_name = step['agent']
            task = step['task']
            
            # Each agent works independently
            task_future = self.agents[agent_name].execute(task)
            tasks.append(task_future)
        
        # Coordinate and wait for results
        results = await asyncio.gather(*tasks)
        
        # Orchestrator synthesizes final output
        return await self.coordinate_response(results)

class ResearchAgent:
    async def execute(self, task):
        # Specialized research logic
        search_results = await self.web_search(task['query'])
        return self.analyze_sources(search_results)

class AnalysisAgent:
    async def execute(self, task):
        # Specialized analysis logic
        data = task['data']
        return self.perform_analysis(data)

class WritingAgent:
    async def execute(self, task):
        # Specialized writing logic
        content = task['content']
        return self.generate_response(content)`}</code>
              </pre>
            </div>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* When to Use Each */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">When to Use Each Approach</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-5 h-5" />
                  Use Basic Tool-Using Agent When:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tasks are straightforward and sequential</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">You need simple, predictable behavior</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Debugging and maintenance are priorities</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Limited computational resources</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Rapid prototyping and iteration</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Use Orchestrator Agent When:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tasks require specialized expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Complex workflows with dependencies</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Parallel processing capabilities needed</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Scalability and modularity are important</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Long-running, complex operations</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* Real-World Example */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-8">Real-World Scenario</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              Task: "Create a comprehensive market analysis report for a new product launch"
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Basic Agent Approach:</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-gray-400">1.</span>
                    <span>Search for market data</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400">2.</span>
                    <span>Query internal database</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400">3.</span>
                    <span>Analyze competitor information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400">4.</span>
                    <span>Generate report sections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-400">5.</span>
                    <span>Format final document</span>
                  </li>
                </ol>
                <p className="text-xs text-gray-500 mt-3">Sequential execution, single context, limited depth</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Orchestrator Approach:</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Research Agent:</span> Gathers market data, trends, regulations
                  </div>
                  <div>
                    <span className="font-medium">Analysis Agent:</span> Processes data, identifies patterns, creates
                    insights
                  </div>
                  <div>
                    <span className="font-medium">Competitive Agent:</span> Analyzes competitors, positioning, pricing
                  </div>
                  <div>
                    <span className="font-medium">Writing Agent:</span> Creates narrative, formats report, ensures
                    consistency
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Parallel execution, specialized expertise, comprehensive analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-black text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4 text-gray-200">
            <p className="leading-relaxed">
              <strong className="text-white">Basic tool-using agents</strong> are perfect for straightforward tasks
              where simplicity and predictability matter most. They're easier to build, debug, and maintain.
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Orchestrator agents</strong> shine when you need specialized expertise,
              parallel processing, and sophisticated coordination. They're more complex but can handle much more
              sophisticated workflows.
            </p>
            <p className="leading-relaxed">
              The choice between them depends on your specific use case, complexity requirements, and available
              resources. Start simple, then evolve to orchestration when the benefits justify the added complexity.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
