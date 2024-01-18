export const formatName = (name) => {
  const nameSplit = name.split(" ");
  const lastWord = nameSplit.pop();
  const firstLine = nameSplit.join(" ");
  return (
    <>
      {firstLine} <br /> {lastWord}
    </>
  );
};
