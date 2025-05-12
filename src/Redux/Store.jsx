import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Slicer/AuthSlice'
import ProductSlice from './Slicer/ProductSlice'
import AddCardSlicer from './Slicer/AddCardSlicer';

const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        Product: ProductSlice,
        cardItem: AddCardSlicer
    }
})

export default Store;