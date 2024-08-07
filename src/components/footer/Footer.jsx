import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">DHP</h1>
            {/* <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skill" className="footer__link">Skill</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul> */}
            <div className="footer__social">
                <h1 className="footer__social-link">
                    Thank you for reading my portfolio
                </h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
