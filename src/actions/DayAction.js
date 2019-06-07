export const toggleAvail = (time, avail) => {
    return {
        type: 'TOGGLE_AVAIL',
        time: time,
        avail: avail

    }
};
