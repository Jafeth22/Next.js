import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch';

function NavBar() {
    return ( 
        <nav /* className="NavBar" */>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
            <ThemeSwitch />
            {/* This is to create a style for this section */}
            <style jsx>{`
            nav{
                display: flex;
                // This is to create a space between btn and the options
                justify-content: space-between;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }
            li{
                display: inline;
            }
            li:not(:first-child){
                margin: 0.5rem;
            } 
            `}</style>
        </nav>
    )
}

export default NavBar;