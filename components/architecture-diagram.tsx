export function ArchitectureDiagram() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
      <svg viewBox="0 0 1200 800" className="w-full h-auto" style={{ maxHeight: "600px" }}>
        {/* Background */}
        <rect width="1200" height="800" fill="#fafafa" />

        {/* Title */}
        <text x="600" y="40" textAnchor="middle" className="text-xl font-bold" fill="#000">
          Multi-Agent System Architecture
        </text>

        {/* User Request Layer */}
        <rect x="50" y="80" width="1100" height="60" fill="#fff" stroke="#000" strokeWidth="2" rx="8" />
        <text x="600" y="115" textAnchor="middle" className="text-lg font-semibold" fill="#000">
          User Request Layer
        </text>

        {/* Orchestrator Agent */}
        <rect x="400" y="180" width="400" height="120" fill="#000" stroke="#000" strokeWidth="2" rx="8" />
        <text x="600" y="210" textAnchor="middle" className="text-lg font-bold" fill="#fff">
          Orchestrator Agent
        </text>
        <text x="600" y="235" textAnchor="middle" className="text-sm" fill="#fff">
          • Task Analysis & Decomposition
        </text>
        <text x="600" y="255" textAnchor="middle" className="text-sm" fill="#fff">
          • Agent Selection & Routing
        </text>
        <text x="600" y="275" textAnchor="middle" className="text-sm" fill="#fff">
          • Progress Monitoring & Coordination
        </text>

        {/* Message Queue */}
        <rect x="450" y="340" width="300" height="60" fill="#f5f5f5" stroke="#666" strokeWidth="1" rx="4" />
        <text x="600" y="375" textAnchor="middle" className="text-sm font-semibold" fill="#000">
          Message Queue / Event Bus
        </text>

        {/* Specialized Agents */}
        <g>
          {/* Data Agent */}
          <rect x="80" y="450" width="200" height="140" fill="#fff" stroke="#000" strokeWidth="2" rx="8" />
          <text x="180" y="480" textAnchor="middle" className="text-base font-semibold" fill="#000">
            Data Agent
          </text>
          <text x="180" y="505" textAnchor="middle" className="text-xs" fill="#666">
            Tools:
          </text>
          <text x="180" y="525" textAnchor="middle" className="text-xs" fill="#666">
            • Database Query
          </text>
          <text x="180" y="545" textAnchor="middle" className="text-xs" fill="#666">
            • API Calls
          </text>
          <text x="180" y="565" textAnchor="middle" className="text-xs" fill="#666">
            • Data Validation
          </text>

          {/* Analysis Agent */}
          <rect x="320" y="450" width="200" height="140" fill="#fff" stroke="#000" strokeWidth="2" rx="8" />
          <text x="420" y="480" textAnchor="middle" className="text-base font-semibold" fill="#000">
            Analysis Agent
          </text>
          <text x="420" y="505" textAnchor="middle" className="text-xs" fill="#666">
            Tools:
          </text>
          <text x="420" y="525" textAnchor="middle" className="text-xs" fill="#666">
            • Statistical Analysis
          </text>
          <text x="420" y="545" textAnchor="middle" className="text-xs" fill="#666">
            • ML Models
          </text>
          <text x="420" y="565" textAnchor="middle" className="text-xs" fill="#666">
            • Pattern Recognition
          </text>

          {/* Communication Agent */}
          <rect x="560" y="450" width="200" height="140" fill="#fff" stroke="#000" strokeWidth="2" rx="8" />
          <text x="660" y="480" textAnchor="middle" className="text-base font-semibold" fill="#000">
            Communication Agent
          </text>
          <text x="660" y="505" textAnchor="middle" className="text-xs" fill="#666">
            Tools:
          </text>
          <text x="660" y="525" textAnchor="middle" className="text-xs" fill="#666">
            • Email Service
          </text>
          <text x="660" y="545" textAnchor="middle" className="text-xs" fill="#666">
            • Slack/Teams
          </text>
          <text x="660" y="565" textAnchor="middle" className="text-xs" fill="#666">
            • SMS Gateway
          </text>

          {/* Reporting Agent */}
          <rect x="800" y="450" width="200" height="140" fill="#fff" stroke="#000" strokeWidth="2" rx="8" />
          <text x="900" y="480" textAnchor="middle" className="text-base font-semibold" fill="#000">
            Reporting Agent
          </text>
          <text x="900" y="505" textAnchor="middle" className="text-xs" fill="#666">
            Tools:
          </text>
          <text x="900" y="525" textAnchor="middle" className="text-xs" fill="#666">
            • Chart Generation
          </text>
          <text x="900" y="545" textAnchor="middle" className="text-xs" fill="#666">
            • PDF Export
          </text>
          <text x="900" y="565" textAnchor="middle" className="text-xs" fill="#666">
            • Dashboard Updates
          </text>
        </g>

        {/* External Services */}
        <rect x="50" y="650" width="1100" height="60" fill="#e5e5e5" stroke="#999" strokeWidth="1" rx="8" />
        <text x="600" y="685" textAnchor="middle" className="text-lg font-semibold" fill="#000">
          External Services & APIs
        </text>

        {/* Arrows */}
        {/* User to Orchestrator */}
        <path d="M 600 140 L 600 180" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Orchestrator to Queue */}
        <path d="M 600 300 L 600 340" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Queue to Agents */}
        <path d="M 550 400 L 180 450" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 580 400 L 420 450" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 620 400 L 660 450" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 650 400 L 900 450" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />

        {/* Agents to External Services */}
        <path d="M 180 590 L 180 650" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 420 590 L 420 650" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 660 590 L 660 650" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />
        <path d="M 900 590 L 900 650" stroke="#666" strokeWidth="1" markerEnd="url(#arrowhead)" />

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
          </marker>
        </defs>

        {/* Legend */}
        <g transform="translate(50, 720)">
          <text x="0" y="0" className="text-sm font-semibold" fill="#000">
            Legend:
          </text>
          <rect x="0" y="10" width="20" height="15" fill="#000" />
          <text x="30" y="22" className="text-xs" fill="#000">
            Orchestrator
          </text>
          <rect x="120" y="10" width="20" height="15" fill="#fff" stroke="#000" />
          <text x="150" y="22" className="text-xs" fill="#000">
            Specialized Agents
          </text>
          <rect x="280" y="10" width="20" height="15" fill="#f5f5f5" stroke="#666" />
          <text x="310" y="22" className="text-xs" fill="#000">
            Message Queue
          </text>
          <rect x="420" y="10" width="20" height="15" fill="#e5e5e5" stroke="#999" />
          <text x="450" y="22" className="text-xs" fill="#000">
            External Services
          </text>
        </g>
      </svg>
    </div>
  )
}
