import {PostCard} from "@/components";
import {defaultPosts} from "@/constants/dummies";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center">
        {defaultPosts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
