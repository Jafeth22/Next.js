import { readdir, readFile } from 'fs/promises';
import marked from 'marked'
import matter from 'gray-matter'

export async function getPost(slug) {
    //slug = Part of the URL that identifies a specific post
    const source = await readFile(`content/posts/${slug}.md`, 'utf8')
    /**
     * data = properties contained
     * content = Rest of the file, in these case, Markdown format
     */
    const { data: { title, date }, content } = matter(source)
    const html = marked(content)
    return {
        title: title,
        date: date,
        body: html
    }
}

export async function getSlugs() {
    const suffix = '.md'
    const files = await readdir('content/posts')
    return files.filter((fileFound) => fileFound.endsWith(suffix))
            .map((file) => file.slice(0, -suffix.length));
}

export async function getPosts(){
    const slugs = await getSlugs();
    const posts = [];
    for (const slug of slugs) {
        const post = await getPost(slug);
        posts.push({slug, ...post});
    }
    return posts;
}

