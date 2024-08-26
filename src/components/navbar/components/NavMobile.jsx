import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"
import Hamburger from './Hamburger';

import { useTranslation } from 'react-i18next'
import i18n from "../../../core/config/i18n";
import SwitchLanguage from './SwitchLanguage';


const NavMobile = () => {
    //Constants for i18n
    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);


    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };



    return (
        <nav className='border-2 border-indigo-600 '>
                {/* HEADER */}
                < div className={menuOpen ? "navMobile__header expanded" : "navMobile__header"}>
                    <div className="navMobile__header__content">
                        <div>
                            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                        </div>
                        <div>
                            <p className='titleSec3'>Dra. María Elena Levín</p>
                        </div>
                        <SwitchLanguage />
                        {/* <div>
                            <select value={locale} onChange={handleChange}>
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>
                        </div> */}
                    </div>
                </div>


                <div className={menuOpen ? "navMobile__body visible" : "navMobile__body"}>

                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    {/* < Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle} >{item.label}</Link> */}
                                    < Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle} >{t(item.label)}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </nav >
    )
}

export default NavMobile