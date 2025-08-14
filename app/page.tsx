"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Cpu, Network, Users, Code, GitBranch, Zap } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Understanding AI Agents",
    subtitle: "From Simple Tools to Complex Orchestration",
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <Cpu className="w-24 h-24 text-gray-600" />
        </div>
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to
            achieve specific goals.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Think of agents as intelligent workers that can use tools, process information, and execute tasks
              independently.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Basic Tool-Using Agents",
    subtitle: "Single Agent with Multiple Capabilities",
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -right-2 -top-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
              <Code className="w-3 h-3 text-white" />
            </div>
            <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
              <Network className="w-3 h-3 text-white" />
            </div>
            <div className="absolute -left-2 -top-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Characteristics:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Single decision-making entity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Direct access to multiple tools (APIs, databases, calculators)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Handles all reasoning and execution internally</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Multi-Agent Systems",
    subtitle: "Multiple Specialized Agents Working Together",
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Key Benefits:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Specialization:</strong> Each agent excels at specific tasks
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Scalability:</strong> Add new agents without rebuilding existing ones
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Parallel Processing:</strong> Multiple agents can work simultaneously
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "The Orchestrator Agent",
    subtitle: "The Conductor of the Multi-Agent Symphony",
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            {/* Central orchestrator */}
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            {/* Surrounding agents */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="w-px h-6 bg-gray-300 mx-auto"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-px h-6 bg-gray-300 mx-auto"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <Network className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
            </div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="flex items-center">
                <div className="w-6 h-px bg-gray-300"></div>
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Orchestrator Responsibilities:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>Task decomposition and planning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>Agent selection and delegation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>Result coordination and synthesis</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Architecture Comparison",
    subtitle: "Single Agent vs Multi-Agent with Orchestrator",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Single Agent */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Single Agent</h4>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div className="text-xs text-gray-600 text-center">
                All tools and logic
                <br />
                in one agent
              </div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Multi-Agent */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Multi-Agent System</h4>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs text-gray-600 text-center">Orchestrator</div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-xs text-gray-600 text-center">Specialized Agents</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">When to Use Each:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-700">Single Agent:</strong>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• Simple, well-defined tasks</li>
                <li>• Limited tool requirements</li>
                <li>• Quick prototyping</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-700">Multi-Agent:</strong>
              <ul className="text-gray-600 mt-1 space-y-1">
                <li>• Complex, multi-step workflows</li>
                <li>• Specialized expertise needed</li>
                <li>• Scalable systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Code Example: Orchestrator in Action",
    subtitle: "How an Orchestrator Delegates Tasks",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            {`class OrchestratorAgent {
  constructor() {
    this.agents = {
      researcher: new ResearchAgent(),
      writer: new WriterAgent(),
      reviewer: new ReviewAgent()
    };
  }

  async processTask(task) {
    // 1. Analyze and decompose the task
    const plan = await this.createExecutionPlan(task);
    
    // 2. Delegate to specialized agents
    const results = {};
    
    for (const step of plan.steps) {
      const agent = this.agents[step.agentType];
      results[step.id] = await agent.execute(step.task);
    }
    
    // 3. Coordinate and synthesize results
    return this.synthesizeResults(results, plan);
  }

  async createExecutionPlan(task) {
    if (task.type === 'research_report') {
      return {
        steps: [
          { id: 'research', agentType: 'researcher', 
            task: 'Gather information on: ' + task.topic },
          { id: 'write', agentType: 'writer', 
            task: 'Create report from research data' },
          { id: 'review', agentType: 'reviewer', 
            task: 'Review and improve the report' }
        ]
      };
    }
  }
}`}
          </pre>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Key Insight:</strong> The orchestrator doesn't do the work itself—it plans, delegates, and
            coordinates. Each specialized agent focuses on what it does best.
          </p>
        </div>
      </div>
    ),
  },
]

export default function MultiAgentSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Slide Container */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-6 min-h-[500px] flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">{slides[currentSlide].title}</h1>
            <p className="text-lg text-gray-600">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Content */}
          <div className="flex-1 flex items-center justify-center">{slides[currentSlide].content}</div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-500">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  )
}
