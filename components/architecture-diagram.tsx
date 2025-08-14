export function ArchitectureDiagram() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Agent */}
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-semibold mb-4">Basic Agent Architecture</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-2 border-black">
              <div className="font-medium mb-2">Agent</div>
              <div className="text-sm text-neutral-600">
                • Receives task
                <br />• Plans execution
                <br />• Uses tools directly
                <br />• Returns result
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-px h-8 bg-neutral-400"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Tool A", "Tool B", "Tool C"].map((tool) => (
                <div key={tool} className="bg-neutral-200 p-2 rounded text-center text-sm">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Orchestrator Agent */}
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-semibold mb-4">Orchestrator Architecture</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-2 border-black">
              <div className="font-medium mb-2">Orchestrator</div>
              <div className="text-sm text-neutral-600">
                • Analyzes complex task
                <br />• Breaks into subtasks
                <br />• Delegates to agents
                <br />• Coordinates results
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-px h-8 bg-neutral-400"></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Research Agent", "Analysis Agent"].map((agent) => (
                <div key={agent} className="bg-neutral-300 p-3 rounded">
                  <div className="font-medium text-sm mb-1">{agent}</div>
                  <div className="flex gap-1">
                    {["T1", "T2"].map((tool) => (
                      <div key={tool} className="bg-neutral-200 px-2 py-1 rounded text-xs">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Key Differences</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium mb-2">Complexity Handling</div>
            <div className="text-neutral-600">
              Basic agents work sequentially through tools. Orchestrators coordinate parallel specialized agents.
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Scalability</div>
            <div className="text-neutral-600">
              Basic agents hit limits with complex tasks. Orchestrators can manage unlimited specialized agents.
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Specialization</div>
            <div className="text-neutral-600">
              Basic agents are generalists. Orchestrators coordinate domain experts for better results.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
