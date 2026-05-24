import { useState } from 'react'
import FadeUp from '../components/animations/FadeUp.jsx'
import Section from '../components/Section.jsx'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'srivastawtanya4@gmail.com',
    href: 'mailto:srivastawtanya4@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/Tanya-sri30',
    href: 'https://github.com/Tanya-sri30',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/tanya-kumari-5b633b310',
    href: 'https://www.linkedin.com/in/tanya-kumari-5b633b310',
  },
  {
    label: 'STATUS',
    value: 'Available for opportunities',
  },
]

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Enter a valid email.'
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      setFormData(initialForm)
      setErrors({})
    }, 750)
  }

  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-transparent"
      containerClassName="relative z-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[rgba(17,17,17,0.08)]"
      />

      <div className="grid gap-8 border-b border-[rgba(17,17,17,0.08)] pb-10 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
        <FadeUp as="p" className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
          CONTACT
        </FadeUp>

        <FadeUp delay={0.06} className="max-w-3xl">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-[color:var(--color-text-primary)] sm:text-4xl">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-secondary)]">
            Open to internships, collaborations, AI/ML opportunities, and meaningful conversations around technology and learning.
          </p>
        </FadeUp>
      </div>

      <div className="grid gap-10 py-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:py-12">
        <FadeUp delay={0.12} className="space-y-10">
          <div className="space-y-7">
            {contactLinks.map((item) => (
              <div key={item.label} className="border-b border-[rgba(17,17,17,0.08)] pb-6 last:border-b-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="group mt-3 inline-flex max-w-full items-center gap-2 text-base leading-7 text-[color:var(--color-text-primary)] underline decoration-transparent underline-offset-4 transition duration-500 ease-out hover:text-[color:var(--color-accent-primary)] hover:decoration-[rgba(217,107,43,0.32)]"
                  >
                    <span className="truncate">{item.value}</span>
                    <span className="text-[color:var(--color-text-muted)] transition duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-[color:var(--color-accent-primary)]">
                      -&gt;
                    </span>
                  </a>
                ) : (
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-text-primary)]">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <p className="max-w-sm text-base leading-7 text-[color:var(--color-text-secondary)]">
            Usually building something, learning something, or debugging something.
          </p>
        </FadeUp>

        <FadeUp delay={0.18}>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <ContactField
                label="Name"
                value={formData.name}
                error={errors.name}
                onChange={(value) => handleChange('name', value)}
              />
              <ContactField
                label="Email"
                type="email"
                value={formData.email}
                error={errors.email}
                onChange={(value) => handleChange('email', value)}
              />
            </div>

            <ContactField
              label="Subject"
              value={formData.subject}
              error={errors.subject}
              onChange={(value) => handleChange('subject', value)}
            />

            <ContactField
              label="Message"
              textarea
              value={formData.message}
              error={errors.message}
              onChange={(value) => handleChange('message', value)}
            />

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[color:var(--color-text-muted)]">
                {status === 'sent' ? 'Message sent.' : 'All fields are required before sending.'}
              </p>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-accent-primary)] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,107,43,0.16)] transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </FadeUp>
      </div>

      <FadeUp
        delay={0.24}
        className="flex flex-col gap-4 border-t border-[rgba(17,17,17,0.08)] pt-8 text-sm text-[color:var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between"
      >
        <span>&copy; 2026 Tanya Srivastava</span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent-green)] animate-pulse" />
          AVAILABLE FOR WORK
        </span>
      </FadeUp>
    </Section>
  )
}

function ContactField({ label, value, onChange, error, type = 'text', textarea = false }) {
  const fieldId = `contact-${label.toLowerCase()}`
  const fieldClassName = [
    'w-full rounded-xl border bg-[rgba(255,255,255,0.45)] px-4 py-3.5 text-base text-[color:var(--color-text-primary)] outline-none transition duration-500 ease-out',
    'border-[rgba(17,17,17,0.08)] placeholder:text-[color:var(--color-text-muted)] focus:border-[rgba(217,107,43,0.4)] focus:bg-[rgba(255,255,255,0.7)]',
    error && 'border-red-500/35 bg-red-500/[0.04]',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label htmlFor={fieldId} className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={fieldId}
          rows="6"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClassName} mt-3 min-h-40 resize-y`}
          aria-invalid={error ? 'true' : 'false'}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClassName} mt-3 min-h-12`}
          aria-invalid={error ? 'true' : 'false'}
        />
      )}
      {error && <span className="mt-2 block text-sm text-red-700">{error}</span>}
    </label>
  )
}

export default ContactSection
