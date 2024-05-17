import Link from "next/link"
import Products from "./Products"
export default function HomePage(){
    return (
        <div>
            <Link href="/product"> Products </Link>
            <Link href="/movies"> Movies </Link>
            <Link href="/about"> About </Link>
        </div>
    )
}