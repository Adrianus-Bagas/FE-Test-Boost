"use client";

import dynamic from "next/dynamic";

import {ICreateForm} from "@/interfaces";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});

import "react-quill/dist/quill.snow.css";

export const TextArea = ({
  inputKey,
  value,
  handleChange,
  readOnly = false,
}: {
  inputKey: keyof ICreateForm;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (key: keyof ICreateForm, value: string) => void;
  readOnly?: boolean;
}) => {
  const modules = {
    toolbar: [
      [{header: [1, 2, 3, 4, 5, 6, false]}],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{size: []}],
      [{font: []}],
      [{align: ["right", "center", "justify"]}],
      [{list: "ordered"}, {list: "bullet"}],
      ["link", "image"],
      [{color: ["red", "#785412"]}],
      [{background: ["red", "#785412"]}],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  return (
    <>
      <ReactQuill
        formats={!readOnly ? formats : undefined}
        modules={!readOnly ? modules : undefined}
        readOnly={readOnly}
        theme="snow"
        value={value}
        onChange={handleChange ? (content) => handleChange(inputKey, content) : undefined}
      />
    </>
  );
};
