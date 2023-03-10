import Head from "next/head";
import Layout from "./Layout";
import Date from "./Date";
import utilStyles from "../styles/utils.module.css";

export default function Post({ postData = { title: '', date: ''} }) {
    return <Layout>
        <Head>
            <title>{ postData.title }</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>;
}