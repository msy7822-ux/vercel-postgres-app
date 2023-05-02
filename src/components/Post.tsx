import React from "react";
import { Post } from "@/types/PostType";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";

export const PostRecord: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/deletePost`, {
      method: "POST",
      body: JSON.stringify({ id: event.currentTarget.value }),
    });

    router.reload();
  };

  return (
    <div className="flex items-center justify-between p-3 bg-[#DBDFEA]">
      <div className="flex items-center gap-3 text-[#645CAA] font-semibold">
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.description}</p>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 cursor-pointer text-white text-sm font-bold bg-[#cb4949] p-1 rounded-sm"
        value={post.id}
        onClick={handleDelete}
      >
        <IoMdRemoveCircleOutline color="white" />
        削除
      </button>
    </div>
  );
};
