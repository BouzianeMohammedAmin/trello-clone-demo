import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card text={task.text} id={task.id} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another Card  "
        onAdd={(e) => console.log(e)}
        dark
      />
    </ColumnContainer>
  );
};
