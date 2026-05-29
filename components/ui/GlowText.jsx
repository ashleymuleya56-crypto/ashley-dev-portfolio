export function GlowText({ children, className = '' }) {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  )
}