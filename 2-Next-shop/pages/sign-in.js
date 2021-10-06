import { useState } from "react";
import { useRouter } from "next/router";
import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field";
import Button from "../components/Button";
import { useSignIn } from "../hooks/user"

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function SingInPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, signInError, signInLoading } = useSignIn();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sleep(2000);
        const valid = await signIn(email, password);
        if (valid) {
            router.push('/');
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
                {signInError && (
                    <p className="text-red-700">
                        Invalid Credentials
                    </p>
                )}
                {signInLoading ?
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