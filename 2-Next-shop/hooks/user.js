import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchJson } from '../lib/api';

const USER_QUERY_KEY = 'user';

export function useSignIn() {
    // useQueryClient = It returns the queryClient (in this case is our custom useUser hook), it can be access from any component
    const queryClient = useQueryClient();
    const mutation = useMutation(({ email, password }) =>
        fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }));
    return {
        signIn: async (email, password) => {
            try {
                const user = await mutation.mutateAsync({ email, password });
                // Here we write the value directly into the cache, after we sign-in
                queryClient.setQueryData(USER_QUERY_KEY, user);
                return true;
            } catch (error) {
                return false;
            }
        },
        signInError: mutation.isError,
        signInLoading: mutation.isLoading
    }
}

export function useSignOut(){
    const queryClient = useQueryClient();
    const mutation = useMutation(() => fetchJson('/api/logout'));
    return async () => {
        await mutation.mutateAsync();
        queryClient.setQueryData(USER_QUERY_KEY, undefined);
    }
}

export function useUser() {
    /**
 * user = Key word to identify the query, it is useful to cath the data
 */
    const query = useQuery(USER_QUERY_KEY, async () => {
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