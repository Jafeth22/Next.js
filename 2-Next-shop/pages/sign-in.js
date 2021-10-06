import { useState } from "react";
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
    const [status, setStatus] = useState({ loading: false, error: false });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ loading: true, error: false });
        await sleep(2000);
        try {
            const response = await fetchJson('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            setStatus({ loading: false, error: false });
            // console.log("Sign in: ", response)
            router.push('/');
        } catch (err) {
            setStatus({ loading: false, error: true });
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
                {status.error && (
                    <p className="text-red-700">
                        Invalid Credentials
                    </p>
                )}
                {status.loading ?
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