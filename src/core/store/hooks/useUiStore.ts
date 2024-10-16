
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers_I } from "../store";
import { on_restoreDefault, uiState_I } from "../reducers/ui/uiSlice";



interface useHookStore_I {
    state: uiState_I;

    emit_restoreDefault: () => void;

}

export const useUiStore = (): useHookStore_I => {

    const dispatch = useDispatch();

    const state = useSelector<Reducers_I, uiState_I>(({ _global }) => _global.ui , shallowEqual);


    const emit_restoreDefault = () => {
        dispatch(on_restoreDefault());
    }

    return {
        state,

        // Methods
        emit_restoreDefault

    }

}


