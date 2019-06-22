export const toggleAvail = id => {
    return {
        type: 'TOGGLE_AVAIL',
        id
    }
};

export const resetCal = () => ({
    type: 'RESET_CAL'
});
