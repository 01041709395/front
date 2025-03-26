//일급 객체 
function foo(arg) {
return arg();
}

function bar() {
    console.log('bar');
}

foo(bar)(); // bar

//arguments 객체
function pool(argv){
console.log(arguments);
}

pool(1,2,3,4);

//생성자 함수
const hong = new Function("console.log('hong1')")

// 화살표 함수
const seok = () => {
    console.log('seok1');
}

//즉시실행 함수 
(function moon() {
    console.log('moon');
})();

//재귀 함수
function store (argg) {
    if(argg === 3) return; // 조건문이 true일때 빠져나가야할 함수
console.log(argg);
store(argg + 1);
}
store(1);

//중첩 함수
function sung(as) {
    function gae() {
        console.log(as);
    }
    gae();
}
sung(1);

//콜백 함수
function good(agr) {
    agr();
}
good( () => {
    console.log(1);
});