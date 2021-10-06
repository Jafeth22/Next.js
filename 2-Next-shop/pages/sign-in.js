import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field";
import Button from "../components/Button";
import { fetchJson } from "../lib/api";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function SingInPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
     * useQueryClient = It returns the queryClient (in this case is our custom useUser hook), it can be access from any component
     */
    const queryClient = useQueryClient();
    const mutation = useMutation(() => fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }));

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sleep(2000);
        try {
            const user = await mutation.mutateAsync();
            // Here we write the value directly into the cache, after we sign-in
            queryClient.setQueriesData('user', user);
            // This code is replace in the mutation function
            // const response = await fetchJson('/api/login', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email, password })
            // });
            console.log("Sign in: ", user)
            router.push('/');
        } catch (err) {
            // mutation.isError will be true
        }
    }

    return (
        <Page title="Sign In">
            <form onSubmit={handleSubmit} >
                <Field label="Email">
                    <Input
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Field>
                <Field label="Password">
                    <Input
                        type="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Field>
                {mutation.isError && (
                    <p className="text-red-700">
                        Invalid Credentials
                    </p>
                )}
                {mutation.isLoading ?
                    (<p>Loading...</p>)
                    : (
                        <Button type="submit">
                            Sign in
                        </Button>
                    )
                }
            </form>
        </Page>
    );
}

export default SingInPage;