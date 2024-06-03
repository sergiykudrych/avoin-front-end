import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../features/products/ProductSlice'
import CategorySlice from '../features/category/CategorySlice'
import UserSlice from '../features/user/UserSlice'
import NotificationSlice from '../features/notification/NotificationSlice'
import CartSlice from '../features/cart/CartSlice'

export const store = configureStore({
	reducer: {
		products: ProductSlice,
		category: CategorySlice,
		user: UserSlice,
		notification: NotificationSlice,
		cart: CartSlice
	},
})