import Link from "next/link"

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
                        <p>{post.content}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
    const data = await response.json()

    return {
        props: {
            posts: data.posts
        }
    }
}