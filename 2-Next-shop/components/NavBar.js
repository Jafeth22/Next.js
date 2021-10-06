// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Link from 'next/link'
import { fetchJson } from '../lib/api';

function NavBar() {
    /**
     * user = Key word to identify the query, it is useful to cath the data
     */
    const query = useQuery('user', async () => {
        try {
            return await fetchJson('/api/user');
        } catch (error) { 
            return undefined;
        }
    }, {
        cacheTime: Infinity, //When the data should be removed from the cache to free up the memory
        staleTime: 30_000, //It will keep the user's information during this time, X miliseconds, it means it won't do any request on that time, it will keep the data in Cache memory
        
    });
    const user = query.data;

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