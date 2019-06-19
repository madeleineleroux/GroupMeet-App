export const toggleAvail = (time) => {
    return {
        type: 'TOGGLE_AVAIL',
        time: time
    }
}

export const clearAvail = () => {
    return {
        type: 'CLEAR_AVAIL',
    }
}
