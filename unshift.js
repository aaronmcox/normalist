const unshift = ({allIds, byId}, element, idKey = "id") => {
    if( typeof byId[element[idKey]] === "undefined" ) {
        allIds.unshift(element[idKey]);
    }
    byId[element[idKey]] = element;
    return allIds.length;
};

export default unshift;