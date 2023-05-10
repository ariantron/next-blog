import Link from "next/link";
import {useRouter} from "next/router";

export default function Nav() {
    const router = useRouter()
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <Link className={router.pathname == "/" ? "active" : ""} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={router.pathname == "/about" ? "active" : ""} href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={router.pathname == "/blog" || router.pathname == "/blog/[slug]" ? "active" : ""} href="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}