(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{708:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 中文网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/article/devops/nodejs.html"}},[t._v("Node.js安装与配置 | 初冬十月の笔记")])],1),t._v(" "),a("h3",{attrs:{id:"从命令行运行-node-js-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从命令行运行-node-js-脚本"}},[t._v("#")]),t._v(" 从命令行运行 Node.js 脚本")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("node app.js\nnode ./src/app.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"读取环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取环境变量"}},[t._v("#")]),t._v(" 读取环境变量")]),t._v(" "),a("p",[t._v("Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。")]),t._v(" "),a("p",[t._v("package.json")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production VERSION=1.0.1 node ./src/app.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("app.js")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("当前环境：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("系统版本：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"从命令行接受参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从命令行接受参数"}},[t._v("#")]),t._v(" 从命令行接受参数")]),t._v(" "),a("p",[t._v("Node.js 的 process 核心模块提供了argv 属性，该属性承载了在启动进程时设置的所有参数。参数可以是独立的，也可以具有键和值。")]),t._v(" "),a("p",[t._v("package.json")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./src/app.js name=tom age=18"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("app.js")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\nodejs\\node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node 命令的完整路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\code\\exercise\\第三方模块\\src\\app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正被执行的文件的完整路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tom "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他的参数从第三个位置开始")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"cross-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-env"}},[t._v("#")]),t._v(" cross-env")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-env"),a("OutboundLink")],1),t._v(" 用于跨平台设置和使用环境变量。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev cross-env\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"nodemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[t._v("#")]),t._v(" nodemon")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/nodemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),a("OutboundLink")],1),t._v(" 可以监听指定目录的文件更改并自动重启服务，即热部署。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g nodemon\n\nnodemon app.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"json-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-server"}},[t._v("#")]),t._v(" json-server")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("json-server"),a("OutboundLink")],1),t._v(" 用于创建零编码的Restful API 服务器。")]),t._v(" "),a("h2",{attrs:{id:"koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa"}},[t._v("#")]),t._v(" Koa")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/koa",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/koa"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),a("p",[t._v("axios 是基于 Promise 的 HTTP 客户端，可以用于浏览器和 node.js 环境。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/axios/axios"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/axios"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"lodash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lodash"}},[t._v("#")]),t._v(" lodash")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/lodash"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://lodash.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lodash.com/docs/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"log4js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log4js"}},[t._v("#")]),t._v(" log4js")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/log4js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/log4js"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV15741177Eh",target:"_blank",rel:"noopener noreferrer"}},[t._v("最全最新Vue、Vuejs教程，从入门到精通"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue cli"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"test-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-framework"}},[t._v("#")]),t._v(" Test Framework")]),t._v(" "),a("h3",{attrs:{id:"jest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jest"}},[t._v("#")]),t._v(" Jest")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jestjs.io/zh-Hans/docs/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jestjs.io/zh-Hans/docs/getting-started"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"mocha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocha"}},[t._v("#")]),t._v(" mocha")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mochajs.org/"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"nock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nock"}},[t._v("#")]),t._v(" nock")]),t._v(" "),a("p",[t._v("HTTP server mocking and expectations library for Node.js")]),t._v(" "),a("p",[t._v("Nock can be used to test modules that perform HTTP requests in isolation.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/nock",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/nock"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);