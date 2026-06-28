import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/config'

interface EmailLinkProps {
  className?: string
  children?: React.ReactNode
}

export default function EmailLink({ className = '', children }: EmailLinkProps) {
  return (
    <a
      href={CONTACT_MAILTO}
      className={`text-[#5CA3E0] hover:text-[#4a92cf] hover:underline focus:outline-none focus:ring-2 focus:ring-[#5CA3E0]/40 rounded transition-colors ${className}`}
      aria-label={`Send email to ${CONTACT_EMAIL}`}
    >
      {children ?? CONTACT_EMAIL}
    </a>
  )
}
