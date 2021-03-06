# 2016年11月13号


### node 项目

- 初始化 node 项目 `npm init`, 生成 `package.json`
- 安装 webpack，babel 模块

```
npm install webpack --save-dev||-D
npm install --save-dev babel-loader babel-core
```

webpack 使用时，需要增加它的配置文件，在配置文件里，记录 webpack 各项配置，它的配置文件默认 `webpack.config.js`

```js
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
};

```

上面的配置文件中，有三大要素需要知道，具体语法可以不用死记：

- 输入文件 index.js ，里面是我们手写的 ES6 代码
- 输出文件 bundle.js ，里面的代码浏览器是可以原生支持的
- 指定的编译器 babel ，babel 使用方式是作为一个 webpack 的 loader


package.json scripts 字段，定义我们的命令

```js
"build": "./node_modules/.bin/webpack -w"
```

配置 babel-loader,添加 .babelrc 文件

```
npm install --save-dev babel-preset-latest
```


```js
{
  "presets": ["latest"]
}
```

参考书:http://es6.ruanyifeng.com/

nodejs + reactjs的学习：

- 模块化开发，import/export
- 面向对象编程，class 关键字的使用

### Object Oriented Programming    ---oop

参考书：http://haoqicat.com/o-o-js

### oop: 类和对象

class是多个对象object的抽象，对象是类的实例。
es6中
```
class Person{
  constructor(){         //constructor构造函数自动调用
    console.log('love')
  }
  sayHello(){         //sayHello函数不会自动调用
    console.log('ma')
  }
}
let he = new Person;
```
输出结果：love

es5中
```
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
        }
      } return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
         if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor; };
           }();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
    }
  }

var Person = function () {
  function Person() {
    _classCallCheck(this, Person);

    //constructor构造函数自动调用
    console.log('love');
  }

  _createClass(Person, [{
    key: 'sayHello',
    value: function sayHello() {
      //sayHello函数不会自动调用
      console.log('ma');
    }
  }]);

  return Person;
}();
```
es6中
```
class People {
  constructor(name){
    this.name = name;
  }
}
let ma = new People('mahe');
console.log('ma.name');
```
输出结果：mahe

es5中
```
var he = new Person();

var People = function People(name) {
  _classCallCheck(this, People);

  this.name = name;
};

var ma = new People('mahe');
console.log('ma.name');
```

es6中
```
class P {
  constructor(name,height){
    this.name = name;
    this.height = 160;
  }
}

let liu = new P('liuxicui');
console.log(liu.name);
console.log(liu.height);
```
输出结果：liuxicui    160
es5中
```
var P = function P(name, height) {
  _classCallCheck(this, P);

  this.name = name;
  this.height = 160;
};

var liu = new P('liuxicui');
console.log(liu.name);
console.log(liu.height);
```

es6中
```
class Ren {
  sayHello(name){
    console.log('Hello' + name);
  }
}
let me = new Ren;
me.sayHello('mahe');
```
输出结果：Hellomahe
es5中
```
ar Ren = function () {
  function Ren() {
    _classCallCheck(this, Ren);
  }

  _createClass(Ren, [{
    key: 'sayHello',
    value: function sayHello(name) {
      console.log('Hello' + name);
    }
  }]);

  return Ren;
}();

var me = new Ren();
me.sayHello('mahe');
```


let
```
for (i = 0;i < 3;i++){
  console.log('out' + i);
  for (i = 0;i < 2;i++){
    console.log('in' + i);
  }
}
```
