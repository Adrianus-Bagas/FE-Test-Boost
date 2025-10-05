"use client";

import {useAtomValue} from "jotai";

import {PostCard} from "@/components";
import {postsAtom} from "@/store";

export default function Home() {
  const posts = useAtomValue(postsAtom);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center pt-10 auto-rows-fr">
        {posts.map((post) => (
          <div key={post.id} className="h-full flex">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
