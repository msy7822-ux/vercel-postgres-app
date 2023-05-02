import React from "react";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

const CreatePage = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const router = useRouter();

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/createPost`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });

    router.replace("/");
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <Layout>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
        <label htmlFor="title" className="font-bold text-[#645CAA]">
          タイトル
        </label>
        <input
          type="text"
          name="title"
          className="border w-full p-2"
          onChange={handleOnChangeTitle}
        />

        <label htmlFor="description" className="font-bold text-[#645CAA]">
          説明
        </label>
        <input
          type="text"
          name="description"
          className="border w-full p-2"
          onChange={handleOnChangeDescription}
        />

        <button type="submit">作成する</button>
      </form>
    </Layout>
  );
};

export default CreatePage;
