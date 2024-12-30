import { createContext, Dispatch, FC, useContext } from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { Action } from "./Action";
import { useImmerReducer } from "use-immer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "card0",
      tasks: [
        {
          id: "c0",
          text: "col0",
        },
        {
          id: "c1",
          text: "col1",
        },
      ],
    },
    {
      id: "1",
      text: "card1",
      tasks: [
        {
          id: "c2",
          text: "col2",
        },
        {
          id: "c3",
          text: "col3",
        },
      ],
    },
    {
      id: "2",
      text: "card2",
      tasks: [
        {
          id: "c4",
          text: "col4",
        },
        {
          id: "c5",
          text: "col5",
        },
      ],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateProviderType = {
  children?: React.ReactNode;
};

export const AppStateProvider: FC<AppStateProviderType> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
