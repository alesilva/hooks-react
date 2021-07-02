import { reducer } from './reducers'
import {} from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
}

export {
    reducer,
    initialState,
}
