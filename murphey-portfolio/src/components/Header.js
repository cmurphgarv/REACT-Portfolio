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