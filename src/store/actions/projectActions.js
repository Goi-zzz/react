export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('projeact').add({
            ...project,
            authFirstName: 'Net',
            authLastName: 'Ninja',
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJEACT-ERROR', err});
        })
        
    }
};