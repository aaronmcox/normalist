export default (destination, source) => {
    const newAllIds = destination.allIds.slice(0);
    const newById = Object.assign({}, destination.byId);

    source.allIds.forEach(id => {
        if( typeof destination.byId[id] === "undefined" ) {
            newAllIds.push(id);
        }
        newById[id] = source.byId[id];
    });

    return Object.assign({}, destination, { allIds: newAllIds, byId: newById });
};
