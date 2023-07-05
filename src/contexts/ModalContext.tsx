import {
  ElementType,
  FC,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { AppModal } from "../components/AppModal";
import { Dispatch } from "react";

const stateInitialValue: State = {
  modals: [],
};

const dispatchInitialValue: Dispatch<Action> = () => null;

export const StateContext = createContext(stateInitialValue);
export const DispatchContext = createContext(dispatchInitialValue);

export const useModalState = () => useContext(StateContext);
export const useModalDispatch = () => useContext(DispatchContext);

export const ModalProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, stateInitialValue);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
        {state.modals.map(({ id, Component }) => (
          <AppModal key={id}>
            <Component
              closeModal={() =>
                dispatch({ type: "CLOSE_MODAL", payload: { id, Component } })
              }
            />
          </AppModal>
        ))}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

interface Props {
  children: ReactNode;
}

export type ModalComponent = ElementType<{
  closeModal: () => void;
}>;

interface Modals {
  id: string;
  Component: ModalComponent;
}

interface State {
  modals: Modals[];
}

interface Action {
  type: "CREATE_MODAL" | "CLOSE_MODAL";
  payload: Modals;
}

export const modalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CREATE_MODAL":
      return {
        ...state,
        modals: [...state.modals, action.payload],
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modals: state.modals.filter((modal) => modal.id !== action.payload.id),
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};
