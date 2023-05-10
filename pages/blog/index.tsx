import Link from "next/link"
import Head from "next/head";

interface Post {
    slug: string;
    title: string;
    content: string;
}

export default function Blog({posts}: { posts: Post[] }) {
    return (
        <>
            <h2>The Blog</h2>
            {posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.content.substring(0,100)}...</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://raw.githubusercontent.com/ariantron/next-blog/master/data/posts.json")
    const data = await response.json()

    return {
        props: {
            posts: data.posts,
            title: "Blog"
        }
    }
}