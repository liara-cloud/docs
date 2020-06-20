import { withRouter } from 'next/router'

function ActiveLink({ children, router, href, textStyle }) {
  const isActive = router.pathname.toLowerCase() === href.toLowerCase()
  return (
    <a href={href} className={`nav__link ${isActive ? 'nav__link--active' : ''}`}>
      <span style={{ display: 'inline-block', ...textStyle }}>{children}</span>
    </a>
  )
}

export default withRouter(ActiveLink)
