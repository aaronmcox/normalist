/***
 * 
 * @param {Object} normalist
 * @param {string[] | number[]} normalist.allIds
 * @param {Object} normalist.byId
 * @param {function} testingFn
 * @returns {Object | undefined}
 * @throws {TypeError} throws when testingFn is not a function
 */
function find ({allIds, byId}, testingFn) {
    if( typeof testingFn !== "function") {
        throw new TypeError(`${testingFn} is not a function`);
    }

    for( const id of allIds ) {
        if( testingFn(byId[id]) ) {
            return byId[id];
        }
    }
    return undefined;
}

export default find;