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
  const containerRef = useRef(null)
  const [positions, setPositions] = useState({})

  useEffect(() => {
    if (containerRef.current) {
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
  }, [])

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

  return (
    <Section id="skills" spacing="spacious">
      <SectionIntro
        eyebrow="SKILLS & TECH STACK"
        title="Technical ecosystem."
        description="A focused technical ecosystem across machine learning, data workflows, web systems, and developer tooling."
      />

      <div className="mt-10">
        <div
          ref={containerRef}
          className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
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
                      stroke={highlighted ? '#7dd3fc' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={highlighted ? '1.5' : '1'}
                      opacity={highlighted ? '0.65' : '0.42'}
                    />
                  )
                }
                return null
              })
            )}
          </svg>

          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8">
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              {techData.languages.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
                  onHover={setHoveredTech}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              {techData.frameworks.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
                  onHover={setHoveredTech}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
              {techData.tools.map((tech, index) => (
                <TechNode
                  key={tech.name}
                  tech={tech}
                  isHighlighted={isHighlighted(tech.name)}
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

function TechNode({ tech, isHighlighted, onHover, delay }) {
  const nodeRef = useRef(null)

  return (
    <div
      ref={nodeRef}
      className={`tech-node flex flex-col items-center transition duration-500 ease-out ${
        isHighlighted ? '-translate-y-1' : ''
      }`}
      data-tech={tech.name}
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl border bg-white/[0.03] transition duration-500 ease-out ${
          isHighlighted ? 'border-[rgba(125,211,252,0.32)] bg-[rgba(125,211,252,0.08)]' : 'border-white/10'
        }`}
      >
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${tech.icon}`}
          alt={tech.name}
          className="h-10 w-10 opacity-85 saturate-[0.85] transition duration-500 ease-out"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />
        <div className="hidden text-2xl font-semibold text-[color:var(--color-accent-primary)]">{tech.name.charAt(0)}</div>
      </div>
      <span
        className={`mt-2 text-center text-xs font-medium transition-colors duration-500 ${
          isHighlighted ? 'text-[color:var(--color-accent-primary)]' : 'text-zinc-500'
        }`}
      >
        {tech.name}
      </span>
    </div>
  )
}

export default SkillsSection
