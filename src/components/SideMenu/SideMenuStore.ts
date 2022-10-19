import { Action, createHook, createStore } from "react-sweet-state";

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
let useSideMenu = createHook(store);
export default useSideMenu;
