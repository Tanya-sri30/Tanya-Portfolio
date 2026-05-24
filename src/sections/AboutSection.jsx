import FadeUp from '../components/animations/FadeUp.jsx'
import Section from '../components/Section.jsx'

const aboutRows = [
  {
    label: 'WHO I AM',
    content:
      'Computer Science student specializing in AI & ML, currently learning through projects, experimentation, and continuous curiosity.',
    status: 'ONGOING',
  },
  {
    label: 'CURRENTLY',
    content:
      'Building machine learning projects, improving development workflows, and slowly understanding how intelligent systems work beyond tutorials.',
    status: '2026',
  },
  {
    label: 'LEARNING PHILOSOPHY',
    content:
      'I learn best by building things, getting stuck, fixing problems at 2AM, and figuring out why the solution finally worked the next morning.',
    status: 'STILL DEBUGGING',
  },
  {
    label: 'OUTSIDE OF TECH',
    content:
      'Outside of coding, I enjoy reading, exploring random ideas, observing design details, and starting projects before fully understanding how difficult they are.',
    status: 'BALANCED CHAOS',
  },
  {
    label: 'CURRENTLY EXPLORING',
    content:
      'Machine learning, system design, open source, and how technology can create more thoughtful experiences.',
    status: 'IN PROGRESS',
  },
  {
    label: 'PERSONAL NOTE',
    content: 'Still learning. Still building. Occasionally debugging life too.',
    status: 'ALWAYS ACTIVE',
  },
]

function AboutSection() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-[color:var(--color-background)] py-20 lg:py-28"
      containerClassName="relative z-10"
    >
      <div className="grid gap-8 border-y border-white/[0.08] py-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16 lg:py-12">
        <FadeUp as="p" className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          ABOUT
        </FadeUp>

        <FadeUp
          as="h2"
          delay={0.06}
          className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[color:var(--color-text-primary)] sm:text-4xl"
        >
          A few things about me, currently.
        </FadeUp>
      </div>

      <div className="divide-y divide-white/[0.08]">
        {aboutRows.map((row, index) => (
          <FadeUp
            key={row.label}
            delay={0.08 + index * 0.04}
            className="grid gap-5 py-12 lg:grid-cols-[0.28fr_1fr_0.22fr] lg:gap-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {row.label}
            </p>

            <p className="max-w-2xl text-lg font-normal leading-[1.7] text-zinc-200">
              {row.content}
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 lg:pt-2 lg:text-right">
              {row.status}
            </p>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}

export default AboutSection
