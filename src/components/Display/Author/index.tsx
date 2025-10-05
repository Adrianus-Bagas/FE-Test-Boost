import {AuthorIcon} from "@/assets/icons";

export const Author = ({
  iconFill,
  containerClassName,
  iconClassName,
  textClassName,
  text,
}: {
  iconFill?: string;
  containerClassName: string;
  iconClassName: string;
  textClassName: string;
  text: string;
}) => {
  return (
    <>
      <div className={containerClassName}>
        <AuthorIcon className={iconClassName} fill={iconFill} />
        <p className={textClassName}>{text}</p>
      </div>
    </>
  );
};
