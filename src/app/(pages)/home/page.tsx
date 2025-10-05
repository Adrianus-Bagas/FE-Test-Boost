"use client";

import {useAtom, useAtomValue} from "jotai";
import {useEffect} from "react";

import {Alert, PostCard} from "@/components";
import {alertMessageAtom, postsAtom} from "@/store";

export default function Home() {
  const posts = useAtomValue(postsAtom);
  const [alertMessage, setAlertMessage] = useAtom(alertMessageAtom);

  useEffect(() => {
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  }, []);

  return (
    <>
      <div className="py-4">
        {alertMessage && <Alert message={alertMessage} />}
        <p className="text-center font-bold text-4xl">Blog App</p>
        <p className="text-center">(Click card to see detail)</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center auto-rows-fr">
        {posts.map((post) => (
          <div key={post.id} className="h-full flex">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
