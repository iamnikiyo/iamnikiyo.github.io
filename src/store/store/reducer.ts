const initialState = {heroAnimationStatus: false};

export default (state = initialState,action) => {
    if(action.type === 'HERO_ANIMATION_SUCCESS'){
        return {
            ... state,
            heroAnimationStatus: action.payload
        }
    }
    return state;
}

export const heroAnimationStatus = state =>  state.animationReducer.heroAnimationStatus;


