import {atom} from "jotai";

import {IPost} from "@/interfaces";

export const selectedPostAtom = atom<IPost | null>(null);
