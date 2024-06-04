import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { API_URL } from '../../http';

const initialState = {
  user: {},
  isAuth: false,
  error: null,
  isLoading: false,
};

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await AuthService.logout();
    return null;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const registration = createAsyncThunk('user/registration', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.registration(email, password);
    return response;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const checkAuth = createAsyncThunk('user/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/api/refresh`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    setLogout: (state, action) => {
      // Оновлення стану після розлогінення користувача
      localStorage.removeItem('token'); // Видалення токену з локального сховища
      state.isAuth = false;
      state.user = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Додавання обробки для асинхронного екшену login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuth = true;
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      });

    // Додавання обробки для асинхронного екшену registration
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        // Оновлення стану після успішної реєстрації
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuth = true;
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      });
    // Додавання обробки для асинхронного екшену checkAuth
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        // Оновлення стану після успішної реєстрації
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuth = true;
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
