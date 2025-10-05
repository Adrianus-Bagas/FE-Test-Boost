import {atom} from "jotai";

import {IPost} from "@/interfaces";
import {defaultPosts} from "@/constants/dummies";

export const postsAtom = atom<IPost[]>(defaultPosts);
export const selectedPostAtom = atom<IPost | null>(null);
