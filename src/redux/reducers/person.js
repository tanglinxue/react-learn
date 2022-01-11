import { ADD_PERSON } from "../constant";

const initState = [{
    name: 'tang',
    age: 20,
    id: '01'
}]
export default function personReducer(preState = initState, action) {
  console.log('@@@')
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}
