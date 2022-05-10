import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

function PostDetail({}: Props) {
  const route = useRouter();
  return (
    <div>
      <h1>Post Detail</h1>
      <p>Query: {JSON.stringify(route.query)}</p>
    </div>
  );
}

export default PostDetail;
