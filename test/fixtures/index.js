var barbazz = require('./lib/barbazz');

var Foo = require('./Foo');
exports.Foo = Foo;

function run(foo) {
    var foo = foo || new exports.Foo();
    barbazz.bazz(barbazz.bar(foo));
    return foo;
}
exports.run = run;
