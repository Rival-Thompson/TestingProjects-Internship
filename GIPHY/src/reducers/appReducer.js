/**
 * Created by rival on 31/01/2017.
 */

const initState = {
    giphys:[],
    selected:null
};

export default function appReducer(state = initState,action) {
    switch(action.type){
        case "UPDATE_IMAGES":
            return Object.assign({},state,{
               giphys:action.gifs
            });

        case "UPDATE_SELECTED":
            return Object.assign({},state,{
                selected:action.url});


        default:
            return state;
    }

}