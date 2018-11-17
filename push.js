const push = ({allIds, byId}, newElement, idKey = "id") => {
    if( typeof byId[newElement[idKey]] === "undefined" ) {
        allIds.push(newElement[idKey]);
    }
    byId[newElement[idKey]] = newElement;
};


export default push;