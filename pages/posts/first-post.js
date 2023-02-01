import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return <>
        <Head>
            <title>My First Post</title>
        </Head>
        <h1>First Postre</h1>
        <Link href="/">Back to home</Link>
    </>;
}