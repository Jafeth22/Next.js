import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field";
import Button from "../components/Button";

function SingInPage(){
    return (
        <Page title="Sing In">
            <form>
                <Field label="Email">
                    <Input type="email" />
                </Field>
                <Field label="Password">
                    <Input type="password" />
                </Field>
                <Button type="submit">
                    Sign in
                </Button>
            </form>
        </Page>
    );
}

export default  SingInPage;