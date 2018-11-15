
export default (array, idKey = "id", extraData = {}) => array.reduce((associalist, element) => {
    if( associalist.byId[idKey] === undefined ) {
        associalist.allIds.push(element[idKey]);
        associalist.byId[element[idKey]] = element;
    }
    return associalist;
}, { allIds: [],  byId: {}, ...extraData});
