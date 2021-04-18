export const initialState = {
    user:null,
    playlists: [],
    playing:false,
    discover_weekly: null,
    item:null,
    // token:'BQCjLl72_RY95YjZTZaU7TYLfxTCO7LvGgv7PUJz04u9DuOdQFTL7St_6bB_dKc9OY1lyLo3f0lV45AGBC_hkrxLmDKZtNntg81fMg-zCzzSMJSSDT-ftfpC8mhwL5BxSfV9PpZAPTBumYBCVomWfQtKwNChDmU',

};

// token is set like this just for debugging purpose
//TODO: Change token to null after project is done

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':{
            return{
                ...state,
                playlists: action.playlists,
            }
        }
        case "SET_DISCOVER_WEEKLY":
        return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
            default:
                return state
    }
}

export default reducer;