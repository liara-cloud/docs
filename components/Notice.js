export default function Notice({ variant = "info", ...props }) {
  return <div className={`notice notice--${variant}`} {...props} />;
}
