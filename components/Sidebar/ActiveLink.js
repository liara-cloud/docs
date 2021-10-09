import Link from "next/link";
import { withRouter } from 'next/router'

function ActiveLink({ children, router, href, textStyle }) {
  const isActive = router.pathname.toLowerCase() === href.toLowerCase()
  return (
    <Link href={href}>
      <a className={`nav__link ${isActive ? 'nav__link--active' : ''}`}>
        <span style={{ display: 'inline-block', ...textStyle }}>{children}</span>
      </a>
    </Link>
  )
}

export default withRouter(ActiveLink)
