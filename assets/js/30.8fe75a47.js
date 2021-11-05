(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{578:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[s._v("#")]),s._v(" Node.js")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js 中文网"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://maiaimei.github.io/articles/devops/nodejs.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js的安装及配置 | 初冬十月の笔记"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"从命令行运行-node-js-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从命令行运行-node-js-脚本"}},[s._v("#")]),s._v(" 从命令行运行 Node.js 脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("node app.js\nnode ./src/app.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"读取环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取环境变量"}},[s._v("#")]),s._v(" 读取环境变量")]),s._v(" "),a("p",[s._v("Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。")]),s._v(" "),a("p",[s._v("package.json")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production VERSION=1.0.1 node ./src/app.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("app.js")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("当前环境：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("系统版本：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"从命令行接受参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从命令行接受参数"}},[s._v("#")]),s._v(" 从命令行接受参数")]),s._v(" "),a("p",[s._v("Node.js 的 process 核心模块提供了argv 属性，该属性承载了在启动进程时设置的所有参数。参数可以是独立的，也可以具有键和值。")]),s._v(" "),a("p",[s._v("package.json")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node ./src/app.js name=tom age=18"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("app.js")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出结果：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\nodejs\\node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node 命令的完整路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\code\\exercise\\第三方模块\\src\\app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正被执行的文件的完整路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tom "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其他的参数从第三个位置开始")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"cross-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-env"}},[s._v("#")]),s._v(" cross-env")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[s._v("cross-env"),a("OutboundLink")],1),s._v(" 用于跨平台设置和使用环境变量。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev cross-env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"nodemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[s._v("#")]),s._v(" nodemon")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/nodemon",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodemon"),a("OutboundLink")],1),s._v(" 可以监听指定目录的文件更改并自动重启服务，即热部署。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nodemon\n\nnodemon app.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"json-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-server"}},[s._v("#")]),s._v(" json-server")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("json-server"),a("OutboundLink")],1),s._v(" 用于创建零编码的Restful API 服务器。")]),s._v(" "),a("h2",{attrs:{id:"koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa"}},[s._v("#")]),s._v(" Koa")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/koa",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/koa"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[s._v("#")]),s._v(" axios")]),s._v(" "),a("p",[s._v("axios 是基于 Promise 的 HTTP 客户端，可以用于浏览器和 node.js 环境。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/axios/axios"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/axios",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/axios"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"lodash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lodash"}},[s._v("#")]),s._v(" lodash")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/lodash"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://lodash.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://lodash.com/docs/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"log4js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log4js"}},[s._v("#")]),s._v(" log4js")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/log4js",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/log4js"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[s._v("#")]),s._v(" Vue")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV15741177Eh",target:"_blank",rel:"noopener noreferrer"}},[s._v("最全最新Vue、Vuejs教程，从入门到精通"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue cli"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);