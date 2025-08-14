export default function AgentTasksSheet() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-2">Multi-Agent System Tasks</h1>
        <p className="text-gray-600 mb-8">Different types of agents and their typical tasks</p>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">
                  Agent Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">
                  Primary Function
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">
                  Example Tasks
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black border-r border-gray-300">
                  Tools Used
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Basic Tool Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Direct task execution</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Search web, send email, calculate math
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Web search, email API, calculator
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Low</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Research Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Information gathering</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Market research, fact checking, data collection
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Web scraper, APIs, databases
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Medium</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Writing Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Content creation</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Blog posts, reports, documentation
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  LLM, grammar checker, plagiarism detector
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Medium</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Code Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Software development</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Write code, debug, test, deploy
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  IDE, compiler, git, testing frameworks
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">High</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Analysis Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Data processing</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Statistical analysis, pattern recognition
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Python, R, SQL, visualization tools
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">High</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-black text-white">
                <td className="px-4 py-3 text-sm font-bold border-r border-gray-600">Orchestrator Agent</td>
                <td className="px-4 py-3 text-sm border-r border-gray-600">Manage other agents</td>
                <td className="px-4 py-3 text-sm border-r border-gray-600">Task planning, delegation, coordination</td>
                <td className="px-4 py-3 text-sm border-r border-gray-600">Agent APIs, workflow engine, monitoring</td>
                <td className="px-4 py-3 text-sm">Very High</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">
                  Customer Service Agent
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Handle inquiries</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Answer questions, process returns, escalate issues
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  CRM, knowledge base, ticketing system
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Medium</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Monitoring Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">System oversight</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Health checks, alert generation, log analysis
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Monitoring tools, alerting systems, logs
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Medium</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Scheduler Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Task timing</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Cron jobs, event triggers, workflow timing
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  Cron, task queues, event systems
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Low</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black border-r border-gray-200 font-medium">Integration Agent</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">Connect systems</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  API bridging, data transformation, sync
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                  REST APIs, webhooks, message queues
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
