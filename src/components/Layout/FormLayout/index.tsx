import {useAtom} from "jotai";

import {Button, Dropdown, Input} from "@/components";
import {ICreateForm} from "@/interfaces";
import {createPostFormAtom} from "@/store";

export const FormLayout = () => {
  const [createForm, setCreateForm] = useAtom(createPostFormAtom);

  const handleChangeForm = (newForm: ICreateForm) => {
    setCreateForm(newForm);
    localStorage.setItem("createForm", JSON.stringify(newForm));
  };

  const handleChangeInput = (key: keyof ICreateForm, value: string) => {
    const newForm = {
      ...createForm,
      [key]: value,
    };

    handleChangeForm(newForm);
  };

  const handleClickButton = (type: "back" | "next") => {
    let newForm: ICreateForm = createForm;

    if (createForm.step.includes("1")) {
      newForm = {
        ...createForm,
        step: "2 - Blog Summary & Category",
      };
    }
    if (createForm.step.includes("2")) {
      newForm = {
        ...createForm,
        step: type === "next" ? "3 - Blog Content" : "1 - Blog Metadata",
      };
    }
    if (createForm.step.includes("3")) {
      newForm = {
        ...createForm,
        step: type === "next" ? "4 - Review & Submit" : "2 - Blog Summary & Category",
      };
    }
    if (createForm.step.includes("4")) {
      newForm = {
        ...createForm,
        step: "3 - Blog Content",
      };
    }
    handleChangeForm(newForm);
  };

  const disabledNextButton = () => {
    if (createForm.step.includes("1")) {
      return !createForm.author || !createForm.title;
    }
    if (createForm.step.includes("2")) {
      return !createForm.categoryId || !createForm.summary;
    }
    if (createForm.step.includes("3")) {
      return !createForm.content;
    }

    return false;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-3">
        {createForm.step.includes("1") && (
          <div className="w-full md:w-1/2">
            <Input
              handleChange={handleChangeInput}
              inputKey="title"
              label="Title"
              type="input"
              value={createForm.title}
            />
            <Input
              handleChange={handleChangeInput}
              inputKey="author"
              label="Author"
              type="input"
              value={createForm.author}
            />
          </div>
        )}
        {createForm.step.includes("2") && (
          <div className="w-full md:w-1/2">
            <Input
              handleChange={handleChangeInput}
              inputKey="summary"
              label="Summary"
              type="textarea"
              value={createForm.summary}
            />
            <Dropdown
              handleChange={handleChangeInput}
              inputKey="categoryId"
              label="Category"
              value={createForm.categoryId}
            />
          </div>
        )}
        <div className="flex gap-3">
          <Button
            className="bg-black text-white p-2"
            disabled={createForm.step.includes("1")}
            handleClick={() => handleClickButton("back")}
            label="Back"
          />
          <Button
            className="bg-black text-white p-2"
            disabled={disabledNextButton()}
            handleClick={() => handleClickButton("next")}
            label="Next"
          />
        </div>
      </div>
    </>
  );
};
