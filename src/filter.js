/**
 * @param {Object} normalist
 * @param {(int[]|string[])} normalist.allIds
 * @param {Object} normalist.byId
 * @param {function(Object):boolean} filterFunc
 * @returns {Object[]}
 */
function filter({allIds, byId}, filterFunc) {
    const filteredElements = [];
    allIds.forEach(id => {
        const element = byId[id];
        if( filterFunc(element)) {
            filteredElements.push(element);
        }
    });
    return filteredElements;
}

export default filter;
