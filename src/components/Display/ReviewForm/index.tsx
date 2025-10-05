import {Dropdown, Input, TextArea} from "@/components/Form";
import {ICreateForm} from "@/interfaces";

export const ReviewForm = ({createForm}: {createForm: ICreateForm}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="w-full md:w-1/2">
          <Input readOnly inputKey="title" label="Title" type="input" value={createForm.title} />
          <Input readOnly inputKey="author" label="Author" type="input" value={createForm.author} />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            readOnly
            inputKey="summary"
            label="Summary"
            type="textarea"
            value={createForm.summary}
          />
          <Dropdown disabled inputKey="categoryId" label="Category" value={createForm.categoryId} />
        </div>
        <div className="w-full md:w-1/2">
          <TextArea readOnly inputKey="content" value={createForm.content} />
        </div>
      </div>
    </>
  );
};
