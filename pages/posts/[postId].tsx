import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layouts';

type Props = {};

function PostDetail({}: Props) {
  const route = useRouter();
  return (
    <Layout title="Detail">
      <div className="mx-auto w-full">
        <h1>Post Detail</h1>
        <p>Query: {JSON.stringify(route.query)}</p>
      </div>
    </Layout>
  );
}

export default PostDetail;
