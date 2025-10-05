"use client";

import {useAtom} from "jotai";
import {useEffect} from "react";

import {FormLayout} from "@/components";
import {createPostFormAtom} from "@/store";

export default function Create() {
  const [createForm, setCreateForm] = useAtom(createPostFormAtom);

  useEffect(() => {
    const existForm = localStorage.getItem("createForm");

    if (!existForm) {
      localStorage.setItem(
        "createForm",
        JSON.stringify({
          ...createForm,
          step: "1 - Blog Metadata",
        }),
      );
    } else {
      setCreateForm(JSON.parse(existForm));
    }
  }, []);

  return (
    <div className="pt-4">
      {createForm.step !== "blank" && (
        <>
          <div className="text-center text-4xl font-bold py-4">
            <p>Create Post</p>
            <p>Step {createForm.step}</p>
          </div>
          <FormLayout />
        </>
      )}
    </div>
  );
}
