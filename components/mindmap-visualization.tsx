"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MindmapVisualization() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-black">Multi-Agent System Structure</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive mindmap showing the components and relationships in multi-agent systems
        </p>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl text-black">System Components Mindmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-8 rounded-lg overflow-x-auto">
            <div className="min-w-[800px] relative">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black text-white rounded-full w-32 h-32 flex items-center justify-center text-center">
                  <div>
                    <div className="font-bold text-lg">Multi-Agent</div>
                    <div className="text-sm">System</div>
                  </div>
                </div>
              </div>

              {/* Architecture Branch */}
              <div className="absolute top-16 left-16">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-purple-800 mb-2">Architecture Types</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Centralized</div>
                    <div className="bg-white rounded p-2">Decentralized</div>
                    <div className="bg-white rounded p-2">Hierarchical</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute top-16 left-48 w-32 h-0.5 bg-gray-400"></div>
              </div>

              {/* Agent Types Branch */}
              <div className="absolute top-16 right-16">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-blue-800 mb-2">Agent Types</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Orchestrator</div>
                    <div className="bg-white rounded p-2">Specialist</div>
                    <div className="bg-white rounded p-2">Tool-using</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute top-16 right-48 w-32 h-0.5 bg-gray-400"></div>
              </div>

              {/* Communication Branch */}
              <div className="absolute bottom-16 left-16">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-green-800 mb-2">Communication</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Message Passing</div>
                    <div className="bg-white rounded p-2">Event-driven</div>
                    <div className="bg-white rounded p-2">Shared Memory</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute bottom-16 left-48 w-32 h-0.5 bg-gray-400"></div>
              </div>

              {/* Coordination Branch */}
              <div className="absolute bottom-16 right-16">
                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-orange-800 mb-2">Coordination</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Task Planning</div>
                    <div className="bg-white rounded p-2">Resource Allocation</div>
                    <div className="bg-white rounded p-2">Conflict Resolution</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute bottom-16 right-48 w-32 h-0.5 bg-gray-400"></div>
              </div>

              {/* Benefits Branch */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-teal-800 mb-2">Benefits</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Scalability</div>
                    <div className="bg-white rounded p-2">Specialization</div>
                    <div className="bg-white rounded p-2">Fault Tolerance</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute top-1/2 left-48 w-32 h-0.5 bg-gray-400 transform -translate-y-1/2"></div>
              </div>

              {/* Challenges Branch */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 w-48">
                  <h3 className="font-bold text-red-800 mb-2">Challenges</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">Complexity</div>
                    <div className="bg-white rounded p-2">Coordination</div>
                    <div className="bg-white rounded p-2">Debugging</div>
                  </div>
                </div>
                {/* Connection line */}
                <div className="absolute top-1/2 right-48 w-32 h-0.5 bg-gray-400 transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
