import {ICreateForm} from "@/interfaces";

export const Input = ({
  label,
  inputKey,
  value,
  handleChange,
}: {
  label: string;
  inputKey: keyof ICreateForm;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (key: keyof ICreateForm, value: string) => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <p>{label}</p>
        <input
          className="border-2 border-black p-1"
          type="text"
          value={value}
          onChange={(event) => handleChange(inputKey, event.target.value)}
        />
      </div>
    </>
  );
};
