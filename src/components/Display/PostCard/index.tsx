"use client";

import {useRouter} from "next/navigation";

import {AuthorIcon} from "@/assets/icons";
import {IPost} from "@/interfaces";

export const PostCard = ({post}: {post: IPost}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${post.id}`);
  };

  return (
    <div className="bg-black text-white p-3 cursor-pointer" onClick={handleClick}>
      <p className="text-right text-xs">{post.createdAt}</p>
      <div className="text-center">
        <p>{post.title}</p>
        <div className="flex justify-center items-center gap-2">
          <AuthorIcon className="w-3 h-3" />
          <p>{post.author}</p>
        </div>
      </div>
    </div>
  );
};
