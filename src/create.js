
const createEmptyNormalist = () => ({ allIds: [], byId: {} });

/**
 *
 * @param {Object[]} [array]
 * @param {string} [idKey="id"]
 * @param {Object} [extraData]
 * @returns {Object} created normalist
 */
function create(array, idKey = "id", extraData) {
    if( typeof array === "undefined") {
        return createEmptyNormalist();
    }

    return array.reduce((normalist, element) => {
        if (normalist.byId[idKey] === undefined) {
            normalist.allIds.push(element[idKey]);
            normalist.byId[element[idKey]] = element;
        }
        return normalist;
    }, { ...createEmptyNormalist(), ...extraData });
}

export default create;
