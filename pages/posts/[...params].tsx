import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

function ParamsPage({}: Props) {
  const route = useRouter();
  return (
    <div>
      <h1>Params Detail</h1>
      <p>Query: {JSON.stringify(route.query)}</p>
    </div>
  );
}

export default ParamsPage;
