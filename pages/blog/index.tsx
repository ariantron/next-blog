import Link from "next/link"
import Post from "@/app/interfaces/post";
import Constants from "@/app/constants";

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
    const response = await fetch(Constants().POSTS_API_URL)
    const data = await response.json()

    return {
        props: {
            posts: data.posts,
            title: "Blog"
        }
    }
}