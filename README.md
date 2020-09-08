# perma-printer
print and show the animation of your code

## Install

<img align="center" src="https://gitlab.com/cervoneluca/openbits/-/raw/master/assets/logo-black.png" height="50px" alt="OpenBits logo" title="OpenBits Logo"> This package is only served through OpenBits. 

To install OpenBits run: 

```shell
npm install openbits -g
```

Then login into openbits by following these <a href="https://www.npmjs.com/package/openbits" target="_blank">instructions</a>.

When OpenBits is set up, then install perma-printer as following: 

```shell
openbits install perma-printer
```

## Usage

Import the package: 

```Javascript
import batRandom from 'batrandom';
```

Create a bat-thing by doing the following:

```javascript
const batThing = batRandom('noun');
console.log(batThing);

// will print bat-something

const batThing = batRandom('adjective');
console.log(batThing);

// will print bat-somehow
```



## Contribute

If you really want to contribute to this project, you need to tell me the answer to all questions. 




安装依赖文件
``` bash
npm install
```

打包文件
``` bash
npm start
```

起服务
``` bash
npm run server
```

修改配置说明：

resume 文件存放简历或者其他静态资源

source/code.js 存放需要打印并展示样式的代码（CSS/JS）

source/app.js 是主代码，可以修改一些比如说打印速度、高亮色等配置