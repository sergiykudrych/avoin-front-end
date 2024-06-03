import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../http";

const initialState = {
	products: [],
	error: null,
	isLoading: false
}


export const getProducts = createAsyncThunk(
  'products/getProducts', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL + '/api/products');
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;  
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.products = action.payload; 
				state.isLoading = false; 
				state.error = null; 
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.error = 'Помилка при отримані даних';
				state.isLoading = false;  
			});
	}
})

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer