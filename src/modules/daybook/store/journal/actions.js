import journalApi from '@/api/journalApi'


export const loadingEntries = async ( { commit } ) => {
    const { data } = await journalApi.get('/entries.json');

    if( !data ){
        commit('setEntries' , []);
        return;
    }

    const entries = [];
    for( let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        });
    }
    
    commit('setEntries', entries);
}

export const updateEntry = async ( {commit} , entry ) => {
    
    const id =  entry.id;
    const dataToSave = { ...entry };
    delete dataToSave.id;

    await journalApi.put(`/entries/${id}.json`, dataToSave);
    
    commit('updateEntry' , { ...entry } );
}

export const createEntry = async ( { commit } , entry ) => {

    
    const dataToSave = { ...entry };

    const { data } = await journalApi.post(`/entries.json`, dataToSave);

    entry = { ...entry, id : data.name };
    
    commit('createEntry' , entry );

    return data.name;

}

export const deleteEntry = async ( { commit } , id ) => {

    await journalApi.delete(`/entries/${id}.json`);
    commit('deleteEntry', id);

    return id;
}