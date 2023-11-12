import { createModel } from '@rematch/core'
import { api, conf } from 'core'
import type { RootModel } from './index'
import { TProduct } from './models'

type TState = { data: TProduct[] }

const InitialState: TState = {
  data: [],
}

const products = createModel<RootModel>()({
  state: InitialState,
  reducers: {
    setMany(state, payload: TState) {
      const { data } = payload

      return {
        ...state,
        data,
      }
    },
    clearData() {
      return InitialState
    },
  },
  effects: (dispatch: any) => ({
    clearState() {
      dispatch.units.clearData()
    },
    async getMany() {
      try {
        const response: TProduct[] = await api.get(conf.apis.products)

        dispatch.posts.setPosts({
          data: response,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getOne(id: number) {
      try {
        const response: TProduct = await api.get(`${conf.apis.products}/${id}`)

        dispatch.products.setMany({
          data: response,
        })
      } catch (error) {
        console.log(error)
      }
    },
  }),
})

export default products
