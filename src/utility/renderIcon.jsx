import icon from '../Data/icon.json'

export default function renderIcon (iconName, className = 'w-6 h-6') {
  if (!icon[iconName]) {
    return <span className={className}>?</span> // fallback if icon not found
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: icon[iconName] }}
    />
  )
}
