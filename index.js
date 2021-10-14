function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction(fn) {
    return fn = function() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}