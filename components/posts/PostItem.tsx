/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  body: string;
  id: number;
};

const PostItem = ({ title, body, id }: Props) => {
  return (
    <div className="card m-2 box-border rounded-lg border p-2 shadow-sm">
      <Link href={`/posts/${encodeURIComponent(id)}`}>
        <h2 className="cursor-pointer font-mono text-2xl font-bold hover:underline">
          #{id} {title}
        </h2>
      </Link>
      <p className="font-mono">{body}</p>
      <div className="actions"></div>
    </div>
  );
};

export const SkeletonPosts = () => {
  return (
    <div className="card m-2 box-border rounded-lg border p-2 shadow-sm">
      <div className="mb-5 h-4 w-52 animate-pulse rounded-lg bg-gray-200"></div>
      <div className="flex flex-col gap-y-2">
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
};
export default PostItem;
