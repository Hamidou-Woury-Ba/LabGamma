import Link from "next/link"
import Products from "./Products"
export default function HomePage(){
    return (
        <div className="p-10 ">
            <h1 className="text-lg">Lab Gamma</h1>
            <Link href="/product" className="pr-5  hover:bg-red-600  ..."> Products </Link>
            <Link href="/movies" className="pr-5  hover:bg-red-600 ..."> Movies </Link>
            <Link href="/about" className="pr-5  hover:bg-red-600  ..."> About </Link>
        </div>
    )
}