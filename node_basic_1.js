// 1-1. 스코프, 호이스팅

let firstNumber = 1;
let secondNumber = 1;

{
    let firstNumber = 2;
    {
        let firstNumber = 3;
        console.log(firstNumber);
        console.log(secondNumber);
    }
    console.log(firstNumber);
    console.log(secondNumber);
}

// 1-2. const 
// 중복 선언 불가. 데이터 변경 불가. 

// 1-3. let 
// 중복 선언 불가. 데이터 변경 가능. 블록 스코프에서 지역 변수로 호이스팅 가능. 

// 1-4. var 
// 중복 선언 가능. 함수 내부에서만 지역 변수로 호이스팅 가능. 

// 2. 익명함수, 선언적 함수
// 2-1. 익명함수의 정의 
// 재사용하지 않을 목적(일회성)으로 사용하는 함수. 변수명에 함수 코드를 저장하는 방식으로 사용.

// 화살표 함수(Arrow function) 표현 방식
let integerSum = (num1, num2, num3) => {
    let sum = num1 + num2 + num3;
    console.log(`매개변수로 받은 3개 정수의 합 : ${sum}`);
}

integerSum(100, 2231, 442);

// 2-2. 선언적 함수
// 일반적으로 함수 선언 키워드인 function을 이용하여 함수를 선언하고 정의하는 함수. 

// 3. 화살표 함수
// 화살표 함수 표현(Arrow function expression)은 함수 표현 코드를 좀 더 간결하게 작성하고자 하는 방법이며, 
// 이를 통해 만들어진 함수가 화살표 함수.
// 함수가 수행할 수 있는 코드가 보통 한 줄로 끝날 때 자주 사용.
// 화살표 함수에서는 this로 바인딩할 수 없다. 따라서 화살표 함수를 통해 메소드를 정의하는 것은 적절하지 않다. 

// 일반 함수
let sum1 = function(a, b) {
    return a + b;
}

// 화살표 함수
let sum2 = (a, b) => a + b;

// 3-1. 화살표 함수 작성 방법 
// 1) 매개변수 지정 방식
() => { ... } // 매개변수가 없을 경우
x => { ... } // 매개변수가 한 개인 경우, 소괄호 생략 가능. 
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호 생략 불가.

// 함수 몸체 지정 방법 
x => { return x * x } // single line block
x => x * x // 함수 몸체가 한줄의 구문이라면 중괄호를 ㅅ행략할 수 있으며 암묵적으로 return 된다. 위 표현과 동일하다. 
