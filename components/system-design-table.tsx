export function SystemDesignTable() {
  const components = [
    {
      component: "User Request Layer",
      type: "Interface",
      responsibility: "Receives and validates user requests",
      technology: "REST API / GraphQL",
      scalability: "Load balancer + API Gateway",
    },
    {
      component: "Orchestrator Agent",
      type: "Core Logic",
      responsibility: "Task decomposition, agent selection, workflow coordination",
      technology: "Node.js / Python with state management",
      scalability: "Horizontal scaling with shared state store",
    },
    {
      component: "Message Queue",
      type: "Communication",
      responsibility: "Asynchronous message passing between agents",
      technology: "Redis Pub/Sub, RabbitMQ, or Apache Kafka",
      scalability: "Clustered queue with partitioning",
    },
    {
      component: "Data Agent",
      type: "Specialized Worker",
      responsibility: "Database operations, data retrieval and validation",
      technology: "Database drivers, ORM, data validation libraries",
      scalability: "Connection pooling, read replicas",
    },
    {
      component: "Analysis Agent",
      type: "Specialized Worker",
      responsibility: "Statistical analysis, ML inference, pattern recognition",
      technology: "Python with pandas, scikit-learn, TensorFlow",
      scalability: "GPU clusters, model serving infrastructure",
    },
    {
      component: "Communication Agent",
      type: "Specialized Worker",
      responsibility: "External notifications, email, messaging",
      technology: "SMTP, Slack/Teams APIs, SMS gateways",
      scalability: "Rate limiting, queue-based sending",
    },
    {
      component: "Reporting Agent",
      type: "Specialized Worker",
      responsibility: "Report generation, visualization, export",
      technology: "Chart.js, D3.js, PDF generation libraries",
      scalability: "Template caching, async generation",
    },
    {
      component: "External Services",
      type: "Dependencies",
      responsibility: "Third-party APIs, databases, cloud services",
      technology: "Various APIs and cloud services",
      scalability: "Circuit breakers, retry logic, caching",
    },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black border-b border-gray-200">
                Component
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black border-b border-gray-200">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black border-b border-gray-200">
                Responsibility
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black border-b border-gray-200">
                Technology Stack
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black border-b border-gray-200">
                Scalability Considerations
              </th>
            </tr>
          </thead>
          <tbody>
            {components.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-25"}>
                <td className="px-6 py-4 text-sm font-medium text-black border-b border-gray-100">{item.component}</td>
                <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100">{item.type}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">{item.responsibility}</td>
                <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100">{item.technology}</td>
                <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-100">{item.scalability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
