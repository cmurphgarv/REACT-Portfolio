import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/Header.css';

export function Header({ onNavItemClick }) {
    return (
        <div className='headerContainer'>

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CHARLOTTE MURPHEY</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            {
                                NAV_PAGES.map(page => {
                                    return (
                                        <li class="nav-item" key={page.pageName}
                                            onClick={() => onNavItemClick(page.pageName)}>
                                            {page.pageName}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export const NAV_PAGES = [
    {
        pageName: 'About Me',
        component: <AboutMe />,
    },
    {
        pageName: 'Portfolio',
        component: <Portfolio />,
    },
    {
        pageName: 'Resume',
        component: <Resume />,
    },
    {
        pageName: 'Contact',
        component: <Contact />,
    }
];