import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data);
      }

      return data; 
    } catch (error) {
      return rejectWithValue({ error: "Network error" });
    }
  }
);

const authSlicer = createSlice({
  name: 'auth',
  initialState: { user: JSON.parse(localStorage.getItem('user')) || null, error: null, loading: false },
  reducers: {
    logOut : (state) =>{
      localStorage.clear();
       state.user = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || "Login failed";
      });
  }
});
export const {logOut} =authSlicer.actions;
export default authSlicer.reducer;
