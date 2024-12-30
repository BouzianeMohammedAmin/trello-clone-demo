import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./state/Action";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card text={task.text} id={task.id} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another Card  "
        onAdd={(item) => dispatch(addTask(item, id))}
        dark
      />
    </ColumnContainer>
  );
};
