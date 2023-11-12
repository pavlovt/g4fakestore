import { Models, RematchDispatch, RematchRootState, init } from '@rematch/core';
import products from './products';

export interface RootModel extends Models<RootModel> {
  products: typeof products
}

export const models: RootModel = {
  products,
}

export const store = init<RootModel>({
  models,
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>