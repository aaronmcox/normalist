/**
 *
 * @param {Object} normalist
 * @param {Object} normalist.byId
 * @param {number|string} id
 * @returns {Object}
 */
function get({byId}, id) {
    return byId[id];
}

export default get;