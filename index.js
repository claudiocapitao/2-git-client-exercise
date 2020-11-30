
function isMultiple(number, multiple) {

    if (multiple % number == 0) {
        return true;
    }

    return false;
};

module.exports = isMultiple;