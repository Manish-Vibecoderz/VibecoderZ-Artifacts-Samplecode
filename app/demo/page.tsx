import OrchestratorExample from "@/components/orchestrator-example"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Live Orchestrator Demo</h1>
          <p className="text-xl text-gray-600">See how an orchestrator agent coordinates multiple specialized agents</p>
        </div>

        <div className="flex justify-center">
          <OrchestratorExample />
        </div>
      </div>
    </div>
  )
}
