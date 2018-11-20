const set = (normalist, newElement, idKey = "id") => {
    const { allIds, byId, ...extraData } = normalist;

    const newById = Object.assign({}, byId);
    newById[newElement[idKey]] = Object.assign({}, newElement);

    let newAllIds;
    if( typeof byId[newElement[idKey]] === "undefined" ) {
        newAllIds = allIds.slice(0);
        newAllIds.push(newElement[idKey]);
    } else {
        newAllIds = allIds;
    }

    return {
        allIds: newAllIds,
        byId: newById,
        ...extraData
    };
};


export default set;