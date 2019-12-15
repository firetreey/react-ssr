# react-ssr
> a simple react-ssr demo

## 作业思路
- Promise.prototype.finally() -- 在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数

## summary
- 同构
    - 一句话来说就是在服务端和客户端都可以运行的同一套代码程序。
    - react同构一般包括ssr（服务端渲染）和csr（客户端渲染）两部分。
- ssr优势
    - 更好的首屏性能，不需要提前先下载一堆 CSS 和 JS 后才看到页面
    - 更利于 SEO，蜘蛛可以直接抓取已渲染的内容

## port
- 8080
## Commands
- ### Project setup
```
npm install
```
- ### Start and hot-reloads by one command
```
npm run start
```
- ### Pack and hot-reloads for server
```
npm run dev:server
```
- ### Pack and hot-reloads for client
```
npm run dev:client
```
- ### Compiles and hot-reloads the project
```
npm run start
```
