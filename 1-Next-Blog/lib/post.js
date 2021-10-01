import { readFile } from 'fs/promises';

export async function getPost(slug){
    //slug = Part of the URL that identifies a specific post
    const data = await readFile(`content/posts/${slug}.json`, 'utf8')
    return JSON.parse(data);
}

