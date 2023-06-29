import { configureStore, createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "articles";
const initialState = localStorage.getItem(LOCAL_STORAGE_KEY)
	? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
	: [];

const articles = createSlice({
	name: "articleReducer",
	initialState,
	reducers: {
		add: (state, action) => {
			const newState = [action.payload, ...state];
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
			return newState;
		},
		remove: (state, action) => {
			const newState = state.filter((item) => item.id !== action.payload);
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
			return newState;
		},
	},
});

const store = configureStore({ reducer: articles.reducer });

export const { add, remove } = articles.actions;
export default store;
