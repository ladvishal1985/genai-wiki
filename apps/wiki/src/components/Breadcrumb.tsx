import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  to?: string
}

interface Props {
  crumbs: Crumb[]
}

export default function Breadcrumb({ crumbs }: Props) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span>/</span>}
          {crumb.to ? (
            <Link to={crumb.to} className="hover:text-gray-700 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-600">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
