function outer(){
    var a = 2;

    function inner(){
        var b = 3;
        console.log(a + b)
    }

    inner()
}

outer()