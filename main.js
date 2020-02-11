function foo(){
    var a = 1;

    function bar(){
        var b = 2;

        function baz(){
            var c = 3;

            console.log(a, b, c)
        }

        baz()
    }
    bar()

}
foo()