import { FlexCol } from "../Flex";

export const Chest = ({
  chestSvg,
  name,
}: {
  chestSvg?: JSX.Element;
  name: string;
}) => {
  return (
    <FlexCol style={{ cursor: "pointer" }}>
      {name}
      {chestSvg}
    </FlexCol>
  );
};
