function Label({ classes, variant = 'default', className = "", ...props }) {
  return <span className={`label--${variant} ${className}`} {...props} />
}

export default Label
