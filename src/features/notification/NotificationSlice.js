import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	type: '',
	message: '',
}

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotification: (state, action) => {
			state.type = action.payload.type
			state.message = action.payload.message
		}
	}
})

export const {setNotification} = notificationSlice.actions
export default notificationSlice.reducer