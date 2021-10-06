import { useQuery } from 'react-query'
import { fetchJson } from '../lib/api';

export function useUser() {
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
    return query.data;
}