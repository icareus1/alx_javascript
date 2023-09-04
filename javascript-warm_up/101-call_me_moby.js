//101-call_me_moby.js
function callMeMoby(x, theFunction){
    x.forEach(function (item){
        theFunction(item);
    })
}

module.exports = {
    callMeMoby: callMeMoby
};