import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../../styles/post.module.css";
import Post from "@/app/interfaces/post";
import Constants from "@/app/constants";

export default function Post({post}: { post: Post }) {
    const router = useRouter();
    return (
        <>
            <p>
                <Link href="/blog">
                    <small>&laquo; back to all blog posts</small>
                </Link>
            </p>
            <h2 className={styles.title}>{post.title}</h2>
            <img src={post.image_url} alt={post.title}/>
            <p>{post.content}</p>
            <button className={styles.button} onClick={() => router.push("/blog")}>
                Click me to programmatically navigate or redirect
            </button>
        </>
    );
}

export async function getStaticPaths() {
    const response = await fetch(Constants().POSTS_API_URL);
    const data = await response.json();

    const thePaths = data.posts.map((pet: { slug: string }) => {
        return {params: {slug: pet.slug}};
    });

    return {
        paths: thePaths,
        fallback: false,
    };
}

export async function getStaticProps(context: {
    params: { slug: string };
}) {
    const response = await fetch(Constants().POSTS_API_URL);
    const data = await response.json();
    const thePost = data.posts.filter(
        (post: { slug: string }) => post.slug === context.params.slug
    )[0];

    return {
        props: {
            post: thePost,
            title: thePost.title,
        },
    };
}