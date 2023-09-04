//101-call_me_moby.js
function ex_x_times(x, theFunction){
    x.forEach(function (item){
        theFunction(item);
    })
}

module.exports = {
    ex_x_times: ex_x_times
};