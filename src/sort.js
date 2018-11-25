
function sort(normalist, compareFn) {
    if( typeof compareFn !== "function" ) {
        throw new TypeError(`${compareFn} is not a function.`);
    }

    const {allIds, byId} = normalist;

    const newAllIds = allIds
        .map(id => ([id, byId[id]]))
        .sort((elemArray0, elemArray1) => compareFn(elemArray0[1], elemArray1[1]))
        .map(elemArray => elemArray[0]);

    return Object.assign({}, normalist, { allIds: newAllIds});
}

export default sort;