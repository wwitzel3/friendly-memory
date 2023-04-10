import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";

const SinglePostPage: NextPage = () => {
  const { isLoaded: userLoaded } = useUser();
  api.posts.getAll.useQuery();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Post</title>
        <meta name="description" content="a single post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-400 md:max-w-2xl">
          Single Post Page
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
