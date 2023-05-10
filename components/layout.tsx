import {useRouter} from "next/router"
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Layout({children}: { children: any }) {
    const router = useRouter()

    return (
        <>
            <div>
                <h1>Next Blog</h1>
                <Nav/>
            </div>
            {children}
            <Footer/>
        </>
    )
}
