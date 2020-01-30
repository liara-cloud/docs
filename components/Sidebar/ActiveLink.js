import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, icon, textStyle }) => {
  const isActive = router.pathname === href

  const style = {
    marginRight: 10,
    color: isActive ? '#218be5' : '#222',
    fontWeight: isActive ? 'bold' : 'normal',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {icon && <img
        alt=""
        src={`/static/platformicons/${icon}`}
        className={`platform-icon ${isActive ? 'active' : ''}`}
      />}
      <span style={{ display: 'inline-block', ...textStyle }}>{children}</span>
    </a>
  )
}

export default withRouter(ActiveLink)
