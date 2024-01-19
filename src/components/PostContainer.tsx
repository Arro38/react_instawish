import React from "react";
import Post from "./Post";

export default function PostContainer({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
