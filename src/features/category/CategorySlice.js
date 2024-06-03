import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../http";
import axios from "axios";
// import axios from "axios";
// import { API_URL } from "../../http";

const initialState = {
	category: [],
	error: null,
	isLoading: false
}


export const getCategory = createAsyncThunk(
  'category/getCategory', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL + '/api/category');
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state, action) => {
			state.category = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCategory.pending, (state) => {
				state.isLoading = true; 
			})
			.addCase(getCategory.fulfilled, (state, action) => {
				state.category = action.payload; 
				state.isLoading = false; 
				state.error = null; 
			})
			.addCase(getCategory.rejected, (state, action) => {
				state.error = 'Помилка при отримані даних';
				state.isLoading = false;  
			});
	}
})

export const {setCategory} = categorySlice.actions
export default categorySlice.reducer