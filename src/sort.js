
function sort(normalist, compareFn) {
    if( typeof compareFn !== "function" ) {
        throw new TypeError(`${compareFn} is not a function.`);
    }

    const {allIds, byId} = normalist;

    const newAllIds = allIds
        .map(id => ([id, byId[id]]))
        .sort(([id0, element0], [id1, element1]) => compareFn(element0, element1))
        .map(([id]) => id);

    return Object.assign({}, normalist, { allIds: newAllIds});
}

export default sort;