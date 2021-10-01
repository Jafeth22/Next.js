import { readFile } from 'fs/promises';
import marked from 'marked'
import matter from 'gray-matter' 

export async function getPost(slug){
    //slug = Part of the URL that identifies a specific post
    const source = await readFile(`content/posts/${slug}.md`, 'utf8')
    /**
     * data = properties contained
     * content = Rest of the file, in these case, Markdown format
     */
    const { data: {title, date}, content } = matter(source)
    const html = marked(content)
    return {  
        title: title,
        date: date,
        body: html 
    }
}

