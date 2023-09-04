//102-add_me_maybe.js
function addMeMaybe(number, theFunction){
    number += 1
    theFunction(number);
}

module.exports = {
    addMeMaybe: addMeMaybe
};