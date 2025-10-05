export const Alert = ({message}: {message: string}) => {
  return (
    <>
      <div className="bg-green-500 w-fit p-2">{message}</div>
    </>
  );
};
