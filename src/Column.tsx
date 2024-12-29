import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="First Container" />
      <Card text="Second Container" />
      <Card text="Third Container" />
      <AddNewItem
        toggleButtonText="+ Add another Card  "
        onAdd={() => console.log("On add items ")}
        dark
      />
    </ColumnContainer>
  );
};
