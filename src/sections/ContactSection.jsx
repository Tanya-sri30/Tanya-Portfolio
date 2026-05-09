import { useState } from 'react'
import Section from '../components/Section.jsx'
import SectionIntro from '../components/ui/SectionIntro.jsx'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i

function ContactSection() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [resumeState, setResumeState] = useState('idle')

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

  const handleResumeDownload = () => {
    if (resumeState === 'downloading') return

    setResumeState('downloading')
    window.setTimeout(() => {
      setResumeState('downloaded')
      window.setTimeout(() => setResumeState('idle'), 1600)
    }, 700)
  }

  return (
    <Section id="contact" spacing="spacious" className="contact-section bg-[#0f0f0f] relative overflow-hidden">
      <div className="contact-shell">
        <SectionIntro
          title="Let's work together."
          description="Open to internships, collaborations, and new product design challenges that demand craft, clarity, and speed."
          titleClassName="max-w-4xl text-4xl sm:text-5xl lg:text-6xl"
          descriptionClassName="text-[0.98rem] leading-8 text-[rgba(255,255,255,0.78)]"
        />

        <div className="contact-grid">
          <div className="contact-panel contact-links-panel">
            <p className="contact-panel-label">CONTACT LINKS</p>
            <div className="contact-copy text-[0.96rem] text-slate-300">
              <p className="mb-4">
                Connect with me directly through LinkedIn, GitHub, or download my resume.
              </p>
            </div>

            <div className="contact-links">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/tanya-kumari-5b633b310/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>LinkedIn</span>
                <span>linkedin.com/in/tanya-kumari-5b633b310</span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/Tanya-sri30"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>GitHub</span>
                <span>github.com/Tanya-sri30</span>
              </a>
              <a
                className="contact-link"
                href="mailto:srivastawtanya4@gamail.com"
              >
                <span>Email</span>
                <span>srivastawtanya4@gamail.com</span>
              </a>
            </div>

            <button
              type="button"
              className="resume-button"
              onClick={handleResumeDownload}
            >
              {resumeState === 'downloading'
                ? 'Preparing CV...'
                : resumeState === 'downloaded'
                ? 'Downloaded ✓'
                : 'Download Resume/CV'}
            </button>
          </div>

          <div className="contact-panel contact-form-panel">
            <p className="contact-panel-label">WRITE A NOTE</p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span className="contact-field-label">Name</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className={`contact-input ${errors.name ? 'contact-input-error' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && <span className="contact-error">{errors.name}</span>}
                </label>
                <label className="contact-field">
                  <span className="contact-field-label">Email</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className={`contact-input ${errors.email ? 'contact-input-error' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && <span className="contact-error">{errors.email}</span>}
                </label>
              </div>

              <label className="contact-field w-full">
                <span className="contact-field-label">Subject</span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(event) => handleChange('subject', event.target.value)}
                  className={`contact-input ${errors.subject ? 'contact-input-error' : ''}`}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && <span className="contact-error">{errors.subject}</span>}
              </label>

              <label className="contact-field w-full">
                <span className="contact-field-label">Message</span>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className={`contact-textarea ${errors.message ? 'contact-input-error' : ''}`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && <span className="contact-error">{errors.message}</span>}
              </label>

              <div className="contact-form-footer">
                <div className="contact-status">
                  {status === 'sent' ? (
                    <span className="contact-success">MESSAGE SENT ✓</span>
                  ) : (
                    <span className="contact-hint">All fields are required before sending.</span>
                  )}
                </div>
                <button type="submit" className="send-button" disabled={status === 'sending'}>
                  {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Tanya Kumari. All rights reserved.</span>
          <span className="contact-availability">
            <span className="contact-availability-pulse" /> AVAILABLE FOR WORK
          </span>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
