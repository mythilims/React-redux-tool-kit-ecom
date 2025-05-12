import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ProductList = createAsyncThunk('Product',
    async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = res.json();
            return data;
        } catch {
           console.log('api fail');
           
        }
    }
)

const ProductSlice = createSlice({
    name: 'Product',
    initialState: { list: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
            addCase(ProductList.pending, (state) => {
                state.list = [];
            })
            .addCase(ProductList.fulfilled, (state, action) => {
                state.list = action.payload.products;
            })
            .addCase(ProductList.rejected, (state) => {
                state.list = [];
            })
    }
})

export default ProductSlice.reducer;