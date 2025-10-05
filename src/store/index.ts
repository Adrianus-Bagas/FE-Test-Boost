import {atom} from "jotai";

import {ICreateForm, IPost} from "@/interfaces";
import {defaultPosts} from "@/constants/dummies";
import {initialCreateForm} from "@/constants/initialForm";

export const postsAtom = atom<IPost[]>(defaultPosts);
export const selectedPostAtom = atom<IPost | null>(null);
export const createPostFormAtom = atom<ICreateForm>(initialCreateForm);
export const alertMessageAtom = atom<string>("");
