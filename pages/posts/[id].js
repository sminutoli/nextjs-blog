import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from "../../lib/posts";
import FirstPost from "./first-post";

export default function Post({ postData }) {
  return <FirstPost postData={postData} />;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}