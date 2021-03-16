const bar = 'Hi';
function foo(){
    let bar ='foo'
    // this.bar = 'dsds'
    anotherFn()
}

function anotherFn(){
    // console.log(this)
    console.log(this.bar )
}


foo();
