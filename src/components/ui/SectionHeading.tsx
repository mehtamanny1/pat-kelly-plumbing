interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl font-bold tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? 'text-blue-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
