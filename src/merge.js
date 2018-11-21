export default (destination, source) => {
    const newAllIds = destination.allIds.slice(0);
    const newById = Object.assign({}, destination.byId);
    const { allIds, byId, ...rest } = source;

    for(const id of allIds) {
        if( typeof destination.byId[id] === "undefined" ) {
            newAllIds.push(id);
        }
        newById[id] = byId[id];
    }

    return Object.assign({}, destination, { allIds: newAllIds, byId: newById }, rest);
};
