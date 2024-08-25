import React from 'react'
import "./generalLayout.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LanguageProvider from '../../providers/LanguageProvider'


const GeneralLayout = ({ children }) => {
    return (
        <div className='max-w-[1920px] mx-auto bg-LightGray_2'>
            <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>


        </div>
    )
}

export default GeneralLayout