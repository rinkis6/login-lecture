"use strict";


const hello = (req,res) => {
    res.render("home/index");

};//hello 라는 컨트롤러 함수를 만들고, 이를 외부에서 사용해 준다.
// == function hello(req,res) { res.render("home/index");};

const login = (req,res) => {
    res.render("home/login");
};

module.exports ={ 
    hello, // = hello, hello
    login, // = login, login
};
//object는 key와 value로 구성이 되어있는데,
// key만 입력해두면 value 값은 자동으로 key 값으로 채워준다.