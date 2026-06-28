import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
        variant === 'default' &&
          'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300',
        variant === 'blue' &&
          'bg-[#5CA3E0]/10 text-[#5CA3E0] border border-[#5CA3E0]/20',
        variant === 'green' &&
          'bg-[#14754E]/10 text-[#14754E] dark:text-[#2E9D6A] border border-[#14754E]/20',
        variant === 'outline' &&
          'border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400',
        className
      )}
    >
      {children}
    </span>
  )
}
