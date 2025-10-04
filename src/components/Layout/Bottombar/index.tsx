"use client";

import {usePathname, useRouter} from "next/navigation";

import {HomeIcon, PlusIcon} from "@/assets/icons";
import {menus} from "@/constants/menus";

export const Bottombar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-full h-[56px] bg-black fixed bottom-0 z-10 inline-block py-2">
        <div className="flex justify-evenly items-center">
          {menus.map((i, index) => (
            <div
              key={index}
              className={`${i.path === pathname && pathname !== "/" ? "opacity-100" : "opacity-50"} bg-black p-1 cursor-pointer basis-1/3`}
              onClick={() => router.push(i.path)}
            >
              {i.title === "Home" && (
                <div className="flex justify-center">
                  <HomeIcon className="w-6 h-6" />
                </div>
              )}
              {i.title === "Create Post" && (
                <div className="flex justify-center">
                  <PlusIcon className="w-6 h-6 flex justify-center" />
                </div>
              )}
              <div className="text-white px-1 text-[10px] text-center">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
