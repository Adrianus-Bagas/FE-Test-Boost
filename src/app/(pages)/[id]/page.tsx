"use client";

import {useAtom, useAtomValue} from "jotai";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {Author} from "@/components";
import {postsAtom, selectedPostAtom} from "@/store";
import {timeConverter} from "@/utils/timeConverter";

export default function Detail({params: {id}}: {params: {id: string}}) {
  const posts = useAtomValue(postsAtom);
  const [selectedPost, setSelectedPost] = useAtom(selectedPostAtom);
  const router = useRouter();

  useEffect(() => {
    if (!selectedPost) {
      const existPost = posts.find((post) => post.id === parseInt(id));

      if (existPost) {
        setSelectedPost(existPost);
      } else {
        router.replace("/home");
      }
    }
  }, []);

  return (
    <>
      {selectedPost && (
        <div className="pt-4">
          <p className="text-center text-4xl font-bold py-4">{selectedPost.title}</p>
          <p>{timeConverter(selectedPost.createdAt)}</p>
          <div className="flex items-center gap-2">
            <Author
              containerClassName="flex items-center gap-2 py-4"
              iconClassName="w-3 h-3"
              iconFill="black"
              text={selectedPost.author}
              textClassName="text-base"
            />
            <p>|</p>
            <p>{selectedPost.category.name}</p>
          </div>
          <div className="border border-black p-2 md:w-1/2 my-2">
            <p>{selectedPost.summary}</p>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{__html: selectedPost.content}}
              className="text-justify md:w-3/4"
            />
          </div>
        </div>
      )}
    </>
  );
}
