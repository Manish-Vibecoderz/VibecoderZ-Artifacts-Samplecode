"use client"

export default function MultiAgentMindmap() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-black">Multi-Agent System Architecture</h1>

      <svg viewBox="0 0 1000 700" className="w-full h-auto bg-white rounded-2xl shadow-lg border border-gray-100">
        {/* Subtle background grid */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f8f9fa" strokeWidth="1" />
          </pattern>

          {/* Gradient definitions */}
          <linearGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>

          <linearGradient id="primaryGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#00000020" />
          </filter>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection lines with improved styling */}
        <g stroke="#6b7280" strokeWidth="3" fill="none" opacity="0.7">
          {/* Main branches from center - curved paths */}
          <path d="M 500 350 Q 350 275 250 250" strokeWidth="4" />
          <path d="M 500 350 Q 650 275 750 250" strokeWidth="4" />
          <path d="M 500 350 Q 350 425 250 450" strokeWidth="4" />
          <path d="M 500 350 Q 650 425 750 450" strokeWidth="4" />

          {/* Basic Agent sub-branches */}
          <path d="M 250 250 Q 175 200 120 180" strokeWidth="2" />
          <path d="M 250 250 Q 175 300 120 320" strokeWidth="2" />

          {/* Orchestrator sub-branches */}
          <path d="M 750 250 Q 825 200 880 180" strokeWidth="2" />
          <path d="M 750 250 Q 825 300 880 320" strokeWidth="2" />
          <path d="M 750 250 Q 750 175 750 120" strokeWidth="2" />

          {/* Tools sub-branches */}
          <path d="M 250 450 Q 175 500 120 520" strokeWidth="2" />
          <path d="M 250 450 Q 325 500 380 520" strokeWidth="2" />

          {/* Benefits sub-branches */}
          <path d="M 750 450 Q 825 500 880 520" strokeWidth="2" />
          <path d="M 750 450 Q 675 500 620 520" strokeWidth="2" />
        </g>

        {/* Central node - enhanced */}
        <g filter="url(#dropshadow)">
          <circle cx="500" cy="350" r="80" fill="url(#centerGradient)" stroke="#ffffff" strokeWidth="3" />
          <text x="500" y="340" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter">
            Multi-Agent
          </text>
          <text x="500" y="365" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter">
            Systems
          </text>
        </g>

        {/* Primary branches - enhanced styling */}

        {/* Basic Agent branch */}
        <g filter="url(#dropshadow)">
          <ellipse cx="250" cy="250" rx="70" ry="35" fill="url(#primaryGradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="250" y="255" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Inter">
            Basic Agent
          </text>
        </g>

        {/* Orchestrator branch */}
        <g filter="url(#dropshadow)">
          <ellipse cx="750" cy="250" rx="70" ry="35" fill="url(#primaryGradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="750" y="255" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Inter">
            Orchestrator
          </text>
        </g>

        {/* Tools branch */}
        <g filter="url(#dropshadow)">
          <ellipse cx="250" cy="450" rx="60" ry="35" fill="url(#primaryGradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="250" y="455" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Inter">
            Tools
          </text>
        </g>

        {/* Benefits branch */}
        <g filter="url(#dropshadow)">
          <ellipse cx="750" cy="450" rx="60" ry="35" fill="url(#primaryGradient)" stroke="#ffffff" strokeWidth="2" />
          <text x="750" y="455" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Inter">
            Benefits
          </text>
        </g>

        {/* Sub-nodes with improved styling */}

        {/* Basic Agent sub-nodes */}
        <g>
          <ellipse cx="120" cy="180" rx="55" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="120" y="185" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Direct Tools
          </text>
        </g>
        <g>
          <ellipse cx="120" cy="320" rx="55" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="120" y="325" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Sequential
          </text>
        </g>

        {/* Orchestrator sub-nodes */}
        <g>
          <ellipse cx="880" cy="180" rx="55" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="880" y="185" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Delegates
          </text>
        </g>
        <g>
          <ellipse cx="880" cy="320" rx="55" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="880" y="325" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Coordinates
          </text>
        </g>
        <g>
          <ellipse cx="750" cy="120" rx="50" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="750" y="125" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Parallel
          </text>
        </g>

        {/* Tools sub-nodes */}
        <g>
          <ellipse cx="120" cy="520" rx="45" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="120" y="525" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Search
          </text>
        </g>
        <g>
          <ellipse cx="380" cy="520" rx="45" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="380" y="525" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Calculate
          </text>
        </g>

        {/* Benefits sub-nodes */}
        <g>
          <ellipse cx="880" cy="520" rx="55" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="880" y="525" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Scalability
          </text>
        </g>
        <g>
          <ellipse cx="620" cy="520" rx="65" ry="25" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2" />
          <text x="620" y="525" textAnchor="middle" fontSize="13" fontWeight="500" fontFamily="Inter" fill="#374151">
            Specialization
          </text>
        </g>
      </svg>
    </div>
  )
}
