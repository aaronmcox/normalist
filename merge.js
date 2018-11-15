export default (destination, source) => {
    const { allIds, byId, ...rest } = destination;
    const newAllIds = allIds.slice(0);
    const newById = Object.assign({}, byId);

    source.allIds.forEach(id => {
        if( typeof byId[id] === "undefined" ) {
            newAllIds.push(id);
        }
        newById[id] = source.byId[id];
    });

    return Object.assign({}, { allIds: newAllIds, byId: newById }, rest);
};
