export default function Header({ onNavItemClick }) {
    return (
        <div>
            <h1>Hello</h1>
            <nav>
                <ul>
                    {
                        NAV_ITEM_NAMES.map(item => {
                            return (
                                <li key={item.itemName}
                                onClick={() => onNavItemClick(item.itemName)}>
                                    {item.itemName}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
};

export const NAV_ITEM_NAMES = [
    {
        itemName: 'About Me'
    },
    {
        itemName: 'Portfolio'
    },
    {
        itemName: 'Contact'
    },
    {
        itemName: 'Resume'
    }
];