import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

export function App() {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => {
        return <Column id={list.id} text={list.text} key={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another List  "
        onAdd={(e) => console.log(e)}
      />
    </AppContainer>
  );
}
