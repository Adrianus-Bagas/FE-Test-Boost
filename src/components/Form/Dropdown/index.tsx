import {categories} from "@/constants/categories";
import {ICreateForm} from "@/interfaces";

export const Dropdown = ({
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
        <select
          className="border-2 border-black p-1"
          value={value}
          onChange={(event) => handleChange(inputKey, event.target.value)}
        >
          <option selected value="">
            ------
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
