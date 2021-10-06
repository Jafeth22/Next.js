// import { useEffect, useState } from 'react';
import Link from 'next/link'
import { fetchJson } from '../lib/api';
import { useUser } from '../hooks/user';

function NavBar() {
    const user = useUser();

    // All this is replaced by useQuery
    // const [user, setUser] = useState();
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const user = await fetchJson('/api/user')
    //             setUser(user);
    //         } catch (error) {
                
    //         }
    //     })();
    // }, []);

    const handleSignOut = async () => {
        await fetchJson('/api/logout');
        // setUser(undefined);
    }

    console.log('[NavBar] user', user);
    return (
        <nav className="px-2 py-1 text-sm" >
            <ul className="flex gap-2" >
                <li className="text-lg font-extrabold">
                    <Link href="/">
                        <a>
                            Next Shop
                        </a>
                    </Link>
                </li>
                <li role="separator" className="flex-1" />
                {user ? (
                    <>
                        <li>{user.name}</li>
                        <li>
                            <button onClick={handleSignOut} >
                                Sign Out
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link href="/sign-in">
                            <a>
                                Sign-In
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;