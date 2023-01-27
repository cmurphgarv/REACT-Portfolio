import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
//import style from '../styles/Header';

export function Header({ onNavItemClick }) {
    return (
        <div>
            <h1>Hello</h1>
            <nav>
                <ul>
                    {
                        NAV_PAGES.map(page => {
                            return (
                                <li key={page.pageName}
                                onClick={() => onNavItemClick(page.pageName)}>
                                    {page.pageName}
                                </li>
                            )
                        })
                    }
                </ul>
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
        pageName: 'Contact',
        component: <Contact />,
    },
    {
        pageName: 'Resume',
        component: <Resume />,
    }
];