import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export function App() {
  return (
    <AppContainer>
      <Column text="Hello"></Column>
      <AddNewItem
        toggleButtonText="+ Add another List  "
        onAdd={() => console.log("On add items ")}
      />
    </AppContainer>
  );
}
