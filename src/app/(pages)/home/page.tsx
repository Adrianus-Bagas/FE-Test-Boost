import {PostCard} from "@/components";
import {defaultPosts} from "@/constants/dummies";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center pt-10 auto-rows-fr">
        {defaultPosts.map((post) => (
          <div key={post.id} className="h-full flex">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
