import { withRouter } from 'next/router'

function handleClick(e) {
  // Close other open lists
  // for (const withActiveState of document.querySelectorAll('.nav__title--active')) {
  //   const isParent = withActiveState.parentNode.contains(e.target);
  //   if( ! isParent) {
  //     withActiveState.classList.remove('nav__title--active');
  //   }
  // }

  e.target.classList.toggle('nav__title--active');
}

function NavTitle({ router, href, children }) {
  const isActive = router.pathname.toLowerCase().startsWith(href)
  return (
    <span onClick={handleClick} className={`nav__title ${isActive ? 'nav__title--active' : ''}`}>{children}</span>
  )
}

export default withRouter(NavTitle)
