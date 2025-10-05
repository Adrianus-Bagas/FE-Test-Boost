"use client";

import {useRouter} from "next/navigation";
import {useSetAtom} from "jotai";

import {IPost} from "@/interfaces";
import {timeConverter} from "@/utils/timeConverter";
import {selectedPostAtom} from "@/store";
import {Author} from "@/components";

export const PostCard = ({post}: {post: IPost}) => {
  const router = useRouter();
  const setSelectedPost = useSetAtom(selectedPostAtom);

  const handleClick = () => {
    setSelectedPost(post);
    router.push(`/${post.id}`);
  };

  return (
    <div
      className="bg-black text-white p-3 cursor-pointer flex flex-col justify-between"
      onClick={handleClick}
    >
      <div>
        <div className="flex justify-between items-center">
          <p className="text-xs">{post.category.name}</p>
          <Author
            containerClassName="flex justify-center items-center gap-1"
            iconClassName="w-2 h-2"
            text={post.author}
            textClassName="text-xs"
          />
        </div>
        <div className="text-center">
          <p className="py-2">{post.title}</p>
          <div className="bg-white p-2 text-black">
            <p>{post.summary}</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <p className="text-right text-xs">{timeConverter(post.createdAt)}</p>
      </div>
    </div>
  );
};
