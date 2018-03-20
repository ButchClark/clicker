export const incValue = () => {
    console.log(`> actions.incValue() - calling return asynch(dispatch)...`)
    return async (dispatch) => {
        dispatch({ type: "INCREMENT"})
    }
}

export default incValue