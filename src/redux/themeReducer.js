
const initialstate={
    theme: "light"
};

export function themeReducer(state=initialstate, action){    
    switch(action.type){
        case "LIGHT":
            return {...state, theme: "light"};
            case "DARK":
                return {...state, theme: "dark"};
        default: 
            return state;
    }
}

