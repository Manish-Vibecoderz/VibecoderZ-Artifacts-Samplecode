"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CodeExamples() {
  const [activeExample, setActiveExample] = useState<"basic" | "orchestrator">("basic")

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-black">Code Implementation Examples</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how these architectures translate into actual code implementations
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <Button
          onClick={() => setActiveExample("basic")}
          variant={activeExample === "basic" ? "default" : "outline"}
          className="interactive"
        >
          Basic Agent Code
        </Button>
        <Button
          onClick={() => setActiveExample("orchestrator")}
          variant={activeExample === "orchestrator" ? "default" : "outline"}
          className="interactive"
        >
          Orchestrator Code
        </Button>
      </div>

      {activeExample === "basic" ? <BasicAgentCode /> : <OrchestratorCode />}
    </section>
  )
}

function BasicAgentCode() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Basic Agent Implementation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`class BasicAgent {
  constructor() {
    this.tools = {
      search: new SearchTool(),
      calculator: new CalculatorTool(),
      writer: new WriterTool(),
      analyzer: new AnalyzerTool()
    };
  }

  async processTask(userRequest) {
    // Single agent handles everything sequentially
    console.log("Processing:", userRequest);
    
    // Determine which tools to use
    const plan = this.createPlan(userRequest);
    
    let result = null;
    for (const step of plan) {
      switch (step.action) {
        case 'search':
          result = await this.tools.search.execute(step.query);
          break;
        case 'calculate':
          result = await this.tools.calculator.execute(step.data);
          break;
        case 'write':
          result = await this.tools.writer.execute(step.content);
          break;
        case 'analyze':
          result = await this.tools.analyzer.execute(step.input);
          break;
      }
    }
    
    return result;
  }

  createPlan(request) {
    // Simple linear planning
    return [
      { action: 'search', query: request },
      { action: 'analyze', input: 'search_results' },
      { action: 'write', content: 'analysis_output' }
    ];
  }
}

// Usage
const agent = new BasicAgent();
const result = await agent.processTask("Research AI trends and write a summary");`}</code>
          </pre>
        </div>

        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-black text-lg">Key Characteristics:</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Single Responsibility:</strong> One agent manages all tools and logic
            </li>
            <li>
              <strong>Sequential Processing:</strong> Tasks executed one after another
            </li>
            <li>
              <strong>Direct Tool Access:</strong> Agent directly calls tool methods
            </li>
            <li>
              <strong>Simple State Management:</strong> All state contained within one class
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function OrchestratorCode() {
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Orchestrator System Implementation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`class OrchestratorAgent {
  constructor() {
    this.agents = {
      researcher: new ResearchAgent(),
      analyzer: new AnalysisAgent(),
      writer: new WritingAgent()
    };
  }

  async processTask(userRequest) {
    console.log("Orchestrator received:", userRequest);
    
    // Break down complex task into subtasks
    const taskPlan = await this.createTaskPlan(userRequest);
    
    // Delegate to specialist agents
    const results = await this.executeTaskPlan(taskPlan);
    
    // Synthesize final result
    return await this.synthesizeResults(results);
  }

  async createTaskPlan(request) {
    // Intelligent task decomposition
    return {
      research: {
        agent: 'researcher',
        task: 'Find latest AI trends and developments',
        priority: 1
      },
      analysis: {
        agent: 'analyzer', 
        task: 'Analyze research findings for key insights',
        priority: 2,
        dependsOn: ['research']
      },
      writing: {
        agent: 'writer',
        task: 'Create comprehensive summary report',
        priority: 3,
        dependsOn: ['research', 'analysis']
      }
    };
  }

  async executeTaskPlan(plan) {
    const results = {};
    const completed = new Set();
    
    // Execute tasks based on dependencies and priorities
    while (completed.size < Object.keys(plan).length) {
      for (const [taskId, task] of Object.entries(plan)) {
        if (completed.has(taskId)) continue;
        
        // Check if dependencies are met
        const canExecute = !task.dependsOn || 
          task.dependsOn.every(dep => completed.has(dep));
        
        if (canExecute) {
          console.log(\`Delegating \${taskId} to \${task.agent}\`);
          
          // Delegate to specialist agent
          results[taskId] = await this.agents[task.agent]
            .execute(task.task, results);
          
          completed.add(taskId);
        }
      }
    }
    
    return results;
  }

  async synthesizeResults(results) {
    // Combine outputs from all agents
    return {
      research_data: results.research,
      key_insights: results.analysis,
      final_report: results.writing,
      metadata: {
        agents_used: Object.keys(this.agents),
        execution_time: Date.now()
      }
    };
  }
}

// Specialist Agent Example
class ResearchAgent {
  constructor() {
    this.tools = [new SearchTool(), new ScrapeTool()];
  }

  async execute(task, context = {}) {
    console.log("Research Agent executing:", task);
    
    // Specialized research logic
    const searchResults = await this.tools[0].search(task);
    const detailedData = await this.tools[1].scrape(searchResults.urls);
    
    return {
      sources: searchResults.urls,
      data: detailedData,
      timestamp: Date.now()
    };
  }
}

// Usage
const orchestrator = new OrchestratorAgent();
const result = await orchestrator.processTask(
  "Research AI trends and write a comprehensive summary"
);`}</code>
          </pre>
        </div>

        <div className="space-y-4 text-gray-700">
          <h3 className="font-semibold text-black text-lg">Key Advantages:</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Task Decomposition:</strong> Complex tasks broken into specialized subtasks
            </li>
            <li>
              <strong>Parallel Execution:</strong> Independent tasks can run simultaneously
            </li>
            <li>
              <strong>Specialized Agents:</strong> Each agent optimized for specific domains
            </li>
            <li>
              <strong>Dependency Management:</strong> Smart execution order based on task dependencies
            </li>
            <li>
              <strong>Result Synthesis:</strong> Orchestrator combines outputs intelligently
            </li>
            <li>
              <strong>Scalability:</strong> Easy to add new specialist agents
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
