import { Layout } from "@/components/Layout";
import { Posts } from "@/components/Posts";
import { Post } from "@/types/PostType";
import { NextPage } from "next";

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/db/fetchPosts`
    );

    const json = await res.json();
    const posts = json.data;
    return {
      props: { posts },
    };
  } catch (err) {
    console.log("err => ", err);
    return {
      props: { posts: [] },
    };
  }
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main className="">
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </main>
  );
};

export default Home;
