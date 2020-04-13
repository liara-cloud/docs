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
    scrollToTop();
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

function scrollToTop() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -50);
    requestAnimationFrame(scrollToTop);
  }
}

export default withRouter(ActiveLink)
