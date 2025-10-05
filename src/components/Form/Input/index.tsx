import {ICreateForm} from "@/interfaces";

export const Input = ({
  label,
  inputKey,
  value,
  handleChange,
  type,
  readOnly = false,
}: {
  label: string;
  inputKey: keyof ICreateForm;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (key: keyof ICreateForm, value: string) => void;
  type: "input" | "textarea";
  readOnly?: boolean;
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <p>{label}</p>
        {type === "input" ? (
          <input
            className="border-2 border-black p-1"
            readOnly={readOnly}
            type="text"
            value={value}
            onChange={
              handleChange ? (event) => handleChange(inputKey, event.target.value) : undefined
            }
          />
        ) : (
          <textarea
            className="border-2 border-black p-1"
            readOnly={readOnly}
            rows={5}
            value={value}
            onChange={
              handleChange ? (event) => handleChange(inputKey, event.target.value) : undefined
            }
          />
        )}
      </div>
    </>
  );
};
