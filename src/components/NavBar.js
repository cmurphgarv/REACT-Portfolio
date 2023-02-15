import { Header, NAV_PAGES } from './Header';
import Footer from './Footer';
import React, { Component, useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/NavBar.css'

export default function NavBar() {
    const [currentPage, setCurrentPage] = useState(NAV_PAGES[0].pageName);

    const onNavItemClick = (pageName) => {
        setCurrentPage(pageName);
    }

    const renderCurrentPage = () => {

        for (const navItem of NAV_PAGES) {
            if (currentPage === navItem.pageName) {
                return navItem.component;
            }
        }
    }
    return (
        <div>
            <Header onNavItemClick={onNavItemClick}/>
            <section class="container-fluid g-0">{renderCurrentPage()}</section>
            <Footer />
        </div>
    )
};