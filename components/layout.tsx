import {useRouter} from "next/router"
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Header from "@/components/header";

export default function Layout({children}: { children: any }) {
    const router = useRouter()

    return (
        <>
            <div>
                <Header/>
                <Nav/>
            </div>
            {children}
            <Footer/>
        </>
    )
}
