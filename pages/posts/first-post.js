import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost({ postData = { title: '', date: ''} }) {
    return <Layout>
        <Head>
            <title>{ postData.title }</title>
        </Head>
        <h1>{ postData.title }</h1>
        <p>{ postData.date }</p>
    </Layout>;
}