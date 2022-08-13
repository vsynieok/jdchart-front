import { Action, createStore } from "react-sweet-state";

interface SideMenuState {
  currentOption: number;
}

const initialState: SideMenuState = {
  currentOption: -1,
};

const actions = {
  setCurrentOption:
    (id: number): Action<SideMenuState> =>
    ({ setState }) => {
      setState({
        currentOption: id,
      });
    },
};

let store = createStore({ initialState, actions });
export default store;
