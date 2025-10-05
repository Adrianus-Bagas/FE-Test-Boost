import {ICreateForm} from "@/interfaces";

export const Input = ({
  label,
  inputKey,
  value,
  handleChange,
  type,
}: {
  label: string;
  inputKey: keyof ICreateForm;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (key: keyof ICreateForm, value: string) => void;
  type: "input" | "textarea";
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <p>{label}</p>
        {type === "input" ? (
          <input
            className="border-2 border-black p-1"
            type="text"
            value={value}
            onChange={(event) => handleChange(inputKey, event.target.value)}
          />
        ) : (
          <textarea
            className="border-2 border-black p-1"
            rows={5}
            value={value}
            onChange={(event) => handleChange(inputKey, event.target.value)}
          />
        )}
      </div>
    </>
  );
};
