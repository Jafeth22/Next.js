import cookie from 'cookie';
import { fetchJson } from "../../lib/api";

const { CMS_URL } = process.env;

/**
 * This is working on SERVER side
 */
async function handlerLogin(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    const { email, password } = req.body;
    try {
        const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: email, password })
        });
        res.status(200)
        .setHeader('Set-Cookie', cookie.serialize('jwt', jwt, {
            path: '/api',
            httpOnly: true //Tells the browser to only send the cookie as a header when making request to the server, but hide it from js code runnning in the browser
        }))
        .json({
            id: user.id,
            name: user.username,
        });
    } catch (err) {
        res.status(401).end();
    }
}

export default handlerLogin;