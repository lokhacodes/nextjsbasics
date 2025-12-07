import  Link from "next/link";
export default function Home() {
    return (
        <>
            <h1>Welcome to home page!</h1>
            <p><Link href="/blog">Blog</Link> </p>
            <p><Link href = "/products">Products</Link></p>
            <p><Link href="/articles/breaking-news-123?lang=en">Read in English </Link></p>
            <p><Link href="/articles/breaking-news-123?lang=bn">Read in Bengali </Link></p>
        </>
    );
}