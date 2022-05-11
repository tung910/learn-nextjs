/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Layout from '../components/layouts';
import type { Iposts } from './api/posts';
import PostItem, { SkeletonPosts } from '../components/posts/PostItem';

const Home: NextPage = (/*{  posts } */) => {
  const [posts, setPosts] = useState<{ data: Iposts[]; loading: boolean; ctn: number }>({
    data: [],
    loading: true,
    ctn: 10,
  });
  useEffect(() => {
    fetcher(`https://jsonplaceholder.typicode.com/posts?_limit=${posts.ctn}`).then((res) => {
      return setPosts({
        ...posts,
        loading: false,
        data: [...posts.data, ...res],
      });
    });
  }, [posts.ctn]);

  const handleLoadMore = () => {
    setPosts({
      ...posts,
      loading: true,
      ctn: +posts.ctn + 10,
    });
  };

  return (
    <Layout title="Home">
      <div className="card-list mx-auto w-full text-ellipsis py-2.5">
        {posts.loading
          ? Array(8)
              .fill('')
              .map((item, index) => <SkeletonPosts key={index} />)
          : posts.data.map((item, index) => {
              if (!item) return null;
              return <PostItem key={index} id={item.id} title={item.title} body={item.body} />;
            })}
        {posts.data.length != 550 && (
          <button
            onClick={handleLoadMore}
            className="mx-auto flex rounded-xl bg-blue-700 px-4 py-3 text-white transition-all hover:bg-blue-600"
          >
            Load more
          </button>
        )}
      </div>
    </Layout>
  );
};
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
/* export async function getStaticProps() {
  const data = await fetcher('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data,
    },
  };
} */

export default Home;
