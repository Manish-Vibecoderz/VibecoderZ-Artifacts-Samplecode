import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { SystemDesignTable } from "@/components/system-design-table"
import { CodeExamples } from "@/components/code-examples"

export default function MultiAgentArchitecture() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Multi-Agent System Architecture</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Understanding the difference between basic tool-using agents and orchestrator agents
          </p>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-6">System Architecture Overview</h2>
            <ArchitectureDiagram />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-6">System Components</h2>
            <SystemDesignTable />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-6">Implementation Examples</h2>
            <CodeExamples />
          </section>
        </div>
      </div>
    </div>
  )
}
