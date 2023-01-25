import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';

export default function NavBar() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const onNavItemClick = (itemName) => {
        setCurrentPage(itemName);
    }

    const renderCurrentPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />
        } else if (currentPage === 'Contact') {
            return <Contact />
        } else if (currentPage === 'Resume') {
            return <Resume />
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
    }
    return (
        <div>
            <Header onNavItemClick={onNavItemClick}/>
            <section>{renderCurrentPage()}</section>
            <Footer />
        </div>
    )
};