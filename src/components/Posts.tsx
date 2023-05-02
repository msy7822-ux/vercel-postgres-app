import { Post } from "@/types/PostType";
import React from "react";
import { PostRecord } from "./Post";

export const Posts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <div key={post.id}>
          <PostRecord post={post} />
        </div>
      ))}
    </div>
  );
};
