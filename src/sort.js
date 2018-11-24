
function sort(normalist, compareFn, idKey = "id") {
    if( typeof compareFn !== "function" ) {
        throw new TypeError(`${compareFn} is not a function.`);
    }

    const {allIds, byId} = normalist;
    const newAllIds =
        allIds
        .map(id => byId[id])
        .sort(compareFn)
        .map(element => element[idKey]);

    return Object.assign({}, normalist, { allIds: newAllIds});
}

export default sort;