(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{742:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),a("p",[t._v("拉取后缀带"),a("code",[t._v("management")]),t._v("的镜像，这种镜像才有"),a("code",[t._v("Web")]),t._v("管理界面。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker pull rabbitmq:3.10.6-management\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"运行镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像"}},[t._v("#")]),t._v(" 运行镜像")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker run -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--name some-rabbit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--hostname my-rabbit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v(":5672 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15672")]),t._v(":15672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /opt/rabbitmq:/var/lib/rabbitmq "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RABBITMQ_DEFAULT_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("guest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RABBITMQ_DEFAULT_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("guest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--restart always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nrabbitmq:3.10.6-management\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("在浏览器中访问：http://192.168.1.20:15672/，账号和密码均是guest")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://registry.hub.docker.com/_/rabbitmq?tab=description",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://registry.hub.docker.com/_/rabbitmq?tab=description"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/zxd1435513775/article/details/85007980",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/zxd1435513775/article/details/85007980"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);