
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";



export interface uiState_I {
    modals: {

    }

}

const initialState: uiState_I = {
    modals: {

    }
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {

        // on_handler_EvaluatePostulationModal: (state, { payload }: PayloadAction<EvaluatePostulation_Modal_Props_I>) => {

        //     const { status, vacant_id, postulation_id } = payload;

        //     state.modals.public.vacants.vacant_evaluatePostulation = {
        //         status,
        //         vacant_id,
        //         postulation_id
        //     }

        // },
        on_restoreDefault: (state) => {
            state = initialState;
        },
    }
});

export const {

    on_restoreDefault

} = uiSlice.actions;
