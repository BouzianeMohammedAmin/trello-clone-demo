import { createContext, FC, useContext } from "react";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

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
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateProviderType = {
  children?: React.ReactNode;
};


export const AppStateProvider: FC<AppStateProviderType> = ({ children }) => {
  const { lists } = appData;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
    return useContext(AppStateContext);
}
