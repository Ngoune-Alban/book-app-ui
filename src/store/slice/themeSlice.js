import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: ''
    },
    reducers: {
        changeTheme: state => {
            let theme = state.value;
            if (theme === 'black') state.value = '';
            else state.value = 'black';
            // store the new value in localStorage

        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer

export const selectTheme = state => state.theme.value
