import { useEffect, useState } from 'react'

const phrases = [
  'AI/ML STUDENT',
  'LATE NIGHT DEBUGGER',
  'SYSTEMS BUILDER',
  'OPEN TO OPPORTUNITIES',
]

function TypingLabel({ className = '' }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(phrases[0].length)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const atEnd = characterCount === currentPhrase.length
    const atStart = characterCount === 0
    const delay = atEnd && !isDeleting ? 1200 : isDeleting ? 42 : 68

    const timeoutId = window.setTimeout(() => {
      if (atEnd && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (atStart && isDeleting) {
        setIsDeleting(false)
        setPhraseIndex((current) => (current + 1) % phrases.length)
        return
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [characterCount, isDeleting, phraseIndex])

  return (
    <span className={className} aria-label={phrases[phraseIndex]}>
      {phrases[phraseIndex].slice(0, characterCount)}
      <span className="typing-caret" aria-hidden="true" />
    </span>
  )
}

export default TypingLabel
