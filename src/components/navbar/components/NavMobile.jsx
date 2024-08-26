import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from "./navItems";
import Hamburger from './Hamburger';
import { useTranslation } from 'react-i18next';
import i18n from "../../../core/config/i18n";
import SwitchLanguage from './SwitchLanguage';
import useNavDesktop from '../hooks/useNavDesktop';

const NavMobile = () => {
    // Constants for i18n
    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);
    const { alpha } = useNavDesktop();

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };

    return (
        <nav className='w-full fixed top-0 left-0 z-50'>
            {/* HEADER */}
            <div className='h-20 bg-DarkBlue flex justify-between items-center px-5'>
                <div className='z-50'> {/* Asegura que el botón de hamburguesa esté siempre en el frente */}
                    <Hamburger 
                        menuOpen={menuOpen} 
                        setMenuOpen={setMenuOpen} 
                        hamburgerCheckbox={hamburgerCheckbox} 
                        setHamburgerCheckbox={setHamburgerCheckbox} 
                        onClick={handleMenuToggle} 
                    />
                </div>
                <div className=''>
                    <h2 className='title-principal text-center'>Residencia Cigomáticos</h2>
                </div>
                <div className='z-50'>
                    <SwitchLanguage />
                </div>
            </div>
            
            {/* MENÚ */}
            <div className={`fixed z-40 top-20 right-0 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'} transition-transform duration-500 ease-in-out w-full h-screen p-9 bg-DarkBlue opacity-90`}>
                {menuOpen && (
                    <ul className=''>
                        {navItems.map((item, index) => (
                            <li
                                className='w-full p-3 text-center text-xl font-MontserratAlternate font-Regular text-White gap-5'
                                key={index}
                            >
                                <Link className="linkTo textLinks" to={item.link} onClick={handleMenuToggle}>
                                    {t(item.label)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default NavMobile;
