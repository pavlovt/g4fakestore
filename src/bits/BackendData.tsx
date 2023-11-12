import { take } from 'lodash-es'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState, models } from 'store'

const BackendData = () => {
  const dispatch = useDispatch<Dispatch>()
  const products = useSelector((state: RootState) => state.products.data)

  useEffect(() => {
    dispatch.products.getAll()
  }, [dispatch.products])

  return (
    <ul>
      {take(products, 5).map((product: models.products) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export default BackendData
