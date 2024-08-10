import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
            <h1>Logo</h1>
        </div> 
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul__li">
                    <a href="#test" className="header__nav__ul__li__a">Lorem</a>
                </li>
                <li className="header__nav__ul__li">
                    <a href="#test" className="header__nav__ul__li__a">Lorem</a>
                </li>
                <li className="header__nav__ul__li">
                    <a href="#test" className="header__nav__ul__li__a">Lorem</a>
                </li>
                <li className="header__nav__ul__li">
                    <a href="#test" className="header__nav__ul__li__a">Lorem</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header