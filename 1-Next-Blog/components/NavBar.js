import Link from 'next/link'

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
            {/* This is to create a style for this section */}
            <style jsx>{`
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