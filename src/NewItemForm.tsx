import { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
    const refInput = useFocus();
    const handelAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onAdd(text);
      }
    };

    return (
      <NewItemFormContainer>
        <NewItemInput
          ref={refInput}
          value={text}
          onKeyDown={handelAddText}
          onChange={(e) => setText(e.target.value)}
        />
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemFormContainer>
    );
};
