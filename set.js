const set = (normalist, newElement, idKey = "id") => {
    const newById = Object.assign({}, normalist.byId);
    newById[newElement[idKey]] = Object.assign({}, newElement);

    let newAllIds;
    if( typeof normalist.byId[newElement[idKey]] === "undefined" ) {
        newAllIds = normalist.allIds.slice(0);
        newAllIds.push(newElement[idKey]);
    } else {
        newAllIds = normalist.allIds;
    }

    return Object.assign({}, normalist, { allIds: newAllIds, byId: newById });
};


export default set;