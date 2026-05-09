import { useState, useRef, useEffect } from 'react'
import Section from '../components/Section.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'

const techData = {
  languages: [
    { name: 'Python', icon: 'python/python-original.svg', connections: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'PyTorch'] },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg', connections: ['React', 'Node.js'] },
    { name: 'R', icon: 'r/r-original.svg', connections: [] },
    { name: 'Java', icon: 'java/java-original.svg', connections: [] },
    { name: 'C++', icon: 'cplusplus/cplusplus-original.svg', connections: [] },
    { name: 'HTML', icon: 'html5/html5-original.svg', connections: [] },
    { name: 'CSS', icon: 'css3/css3-original.svg', connections: [] },
    { name: 'SQL', icon: 'postgresql/postgresql-original.svg', connections: [] },
  ],
  frameworks: [
    { name: 'NumPy', icon: 'numpy/numpy-original.svg', connections: ['Python'] },
    { name: 'Pandas', icon: 'pandas/pandas-original.svg', connections: ['Python'] },
    { name: 'Matplotlib', icon: 'matplotlib/matplotlib-original.svg', connections: ['Python'] },
    { name: 'Scikit-learn', icon: 'scikitlearn/scikitlearn-original.svg', connections: ['Python'] },
    { name: 'PyTorch', icon: 'pytorch/pytorch-original.svg', connections: ['Python'] },
    { name: 'React', icon: 'react/react-original.svg', connections: ['JavaScript'] },
    { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', connections: ['JavaScript'] },
  ],
  tools: [
    { name: 'Git', icon: 'git/git-original.svg', connections: ['GitHub'] },
    { name: 'GitHub', icon: 'github/github-original.svg', connections: ['Git'] },
    { name: 'VS Code', icon: 'vscode/vscode-original.svg', connections: [] },
    { name: 'Google Colab', icon: 'googlecolab/googlecolab-original.svg', connections: [] },
    { name: 'Jupyter', icon: 'jupyter/jupyter-original.svg', connections: [] },
    { name: 'Postman', icon: 'postman/postman-original.svg', connections: [] },
  ],
}

const allTech = [...techData.languages, ...techData.frameworks, ...techData.tools]

function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState(null)
  const [isExploded, setIsExploded] = useState(false)
  const containerRef = useRef(null)
  const [positions, setPositions] = useState({})

  useEffect(() => {
    if (containerRef.current && !isExploded) {
      const container = containerRef.current
      const nodes = container.querySelectorAll('.tech-node')
      const newPositions = {}

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        newPositions[node.dataset.tech] = {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        }
      })

      setPositions(newPositions)
    }
  }, [isExploded])

  const getConnectedTech = (techName) => {
    const tech = allTech.find(t => t.name === techName)
    return tech ? tech.connections : []
  }

  const isConnected = (tech1, tech2) => {
    return getConnectedTech(tech1).includes(tech2) || getConnectedTech(tech2).includes(tech1)
  }

  const isHighlighted = (techName) => {
    if (!hoveredTech) return false
    return hoveredTech === techName || isConnected(hoveredTech, techName)
  }

  const handleExplode = () => {
    setIsExploded(true)
    setTimeout(() => setIsExploded(false), 2000)
  }

  return (
    <Section id="skills" spacing="spacious">
      <SectionIntro
        eyebrow="SKILLS & TECH STACK"
        description="Interactive visualization of my technical ecosystem"
      />

      <div className="mt-12">
        <div
          ref={containerRef}
          className="relative w-full h-[600px] rounded-lg overflow-hidden cursor-pointer"
          onClick={handleExplode}
          style={{ fontFamily: 'monospace' }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {Object.entries(positions).map(([tech1, pos1]) =>
              Object.entries(positions).map(([tech2, pos2]) => {
                if (tech1 < tech2 && isConnected(tech1, tech2)) {
                  const highlighted = isHighlighted(tech1) || isHighlighted(tech2)
                  return (
                    <line
                      key={`${tech1}-${tech2}`}
                      x1={pos1.x}
                      y1={pos1.y}
                      x2={pos2.x}
                      y2={pos2.y}
                      stroke={highlighted ? '#00ffff' : '#333'}
                      strokeWidth={highlighted ? '3' : '1'}
                      opacity={highlighted ? '1' : '0.3'}
                    />
                  )
                }
                return null
              })
            )}
          </svg>

          {/* Tech Categories */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            {/* Languages */}
            <div className="flex justify-center gap-8 flex-wrap">
              {techData.languages.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
                  isExploded={isExploded}
                  onHover={setHoveredTech}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Frameworks & Libraries */}
            <div className="flex justify-center gap-8 flex-wrap">
              {techData.frameworks.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
                  isExploded={isExploded}
                  onHover={setHoveredTech}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Tools & Platforms */}
            <div className="flex justify-center gap-8 flex-wrap">
              {techData.tools.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
                  isExploded={isExploded}
                  onHover={setHoveredTech}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

function TechNode({ tech, isHighlighted, isExploded, onHover, delay }) {
  const nodeRef = useRef(null)

  useEffect(() => {
    if (isExploded && nodeRef.current) {
      const angle = Math.random() * 2 * Math.PI
      const distance = 200 + Math.random() * 200
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      nodeRef.current.style.transform = `translate(${x}px, ${y}px) scale(0.5)`
      nodeRef.current.style.transition = 'transform 1s ease-out'

      setTimeout(() => {
        if (nodeRef.current) {
          nodeRef.current.style.transform = 'translate(0, 0) scale(1)'
          nodeRef.current.style.transition = 'transform 0.5s ease-in'
        }
      }, 1000)
    }
  }, [isExploded])

  return (
    <div
      ref={nodeRef}
      className={`tech-node flex flex-col items-center transition-all duration-300 ${
        isHighlighted ? 'scale-110' : 'scale-100'
      }`}
      data-tech={tech.name}
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      style={{
        transitionDelay: `${delay}s`,
        filter: isHighlighted ? 'drop-shadow(0 0 10px #00ffff)' : 'none',
      }}
    >
      <div
        className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isHighlighted ? 'bg-[#1a1a1a] border-2 border-cyan-400' : 'bg-[#1a1a1a] border border-gray-600'
        }`}
      >
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${tech.icon}`}
          alt={tech.name}
          className="w-10 h-10"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />
        <div className="hidden text-cyan-400 text-2xl font-bold">{tech.name.charAt(0)}</div>
      </div>
      <span
        className={`mt-2 text-xs font-mono text-center transition-colors duration-300 ${
          isHighlighted ? 'text-cyan-400' : 'text-gray-400'
        }`}
      >
        {tech.name}
      </span>
    </div>
  )
}

export default SkillsSection