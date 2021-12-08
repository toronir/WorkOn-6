import { createStore } from "redux";
const initState = {
    posts: [],
    users: [],
}


export const addPost = (newPostText)=>  ({type: 'ADD_POST', post:newPostText})

const reducer = (state = initState, action) => {
    if (action.type === 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }


    return state;
}
const store = createStore(reducer)


store.subscribe(() => {
    const globalState = store.getState()

})


export default store;