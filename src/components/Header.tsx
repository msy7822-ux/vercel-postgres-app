import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#8294C4] p-6 flex justify-between items-center text-white">
      <Link href="/" className="text-base font-bold">
        Vercel Postgres Post
      </Link>
      <button
        type="button"
        className="cursor-pointer flex items-center gap-2"
        onClick={() => router.replace("/create")}
      >
        <AiOutlinePlus color="white" />
        新規追加
      </button>
    </div>
  );
};
