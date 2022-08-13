import { ReactNode } from "react";
import { Action, createStore } from "react-sweet-state";

interface ContentSpaceState {
  currentPage: ReactNode;
  isLoading: boolean;
}

const initialState: ContentSpaceState = {
  currentPage: null,
  isLoading: false,
};

const actions = {
  setPage:
    (element: ReactNode): Action<ContentSpaceState> =>
    ({ setState }) => {
      setState({
        currentPage: element,
      });
    },
};

let store = createStore({ initialState, actions });
export default store;
