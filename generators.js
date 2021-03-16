function* gen() {
    console.log('Sid')
    yield null;
    console.log(' is here!!')
    yield null;
    console.log(' is here1')
    yield null;
    console.log(' is here2')
}

var it = gen();
it.next();
it.next();
    
