

// export const myMutation = (state) => {
    // return state.algo
// }

export const setEntries = ( state , entries) => {
    
    state.entries = [ ...state.entries, ...entries ];
    state.isLoading = false;

}

export const updateEntry = (  state , entry ) => {
    
    // state.entries = state.entries.map( entry => ( entry.id === data.id ) ? { ...data }  : entry )
    const idx = state.entries.map( e => e.id ).indexOf(entry.id);
    state.entries[idx] = entry;
}

export const createEntry = (  state, entry ) => {

    state.entries.unshift(entry);
}

export const deleteEntry = ( state , id ) => {
    state.entries = state.entries.filter( entry => entry.id !== id );
    // state.entries = {...entries};
}

export const clearEntries = ( state ) => {
    state.entries = [];
    // state.entries = {...entries};
}