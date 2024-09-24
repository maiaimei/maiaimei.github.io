(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{763:function(s,t,n){"use strict";n.r(t);var a=n(7),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"使用python查询一个fqdn的所有ip地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用python查询一个fqdn的所有ip地址"}},[s._v("#")]),s._v(" 使用Python查询一个FQDN的所有IP地址")]),s._v(" "),n("p",[s._v("可以使用Python的"),n("code",[s._v("dns.resolver")]),s._v("模块，这是"),n("code",[s._v("dnspython")]),s._v("库的一部分。以下是一个简单的Python脚本，用于查询FQDN的所有IPv4和IPv6地址：")]),s._v(" "),n("p",[s._v("首先，确保安装了"),n("code",[s._v("dnspython")]),s._v("库：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dnspython\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后，新建一个Python文件query_fqdn_ips.py，编写以下脚本：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" dns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver\n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("query_fqdn_ips")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询A记录（IPv4）")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        answers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" rdata "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" answers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"IPv4: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rdata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" dns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NoAnswer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"No A (IPv4) records found for ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('."')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询AAAA记录（IPv6）")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        answers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AAAA'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" rdata "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" answers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"IPv6: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rdata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" dns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NoAnswer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"No AAAA (IPv6) records found for ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('."')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用示例")]),s._v("\nfqdn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'example.com'")]),s._v("\nquery_fqdn_ips"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fqdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("最后，运行query_fqdn_ips.py")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("python query_fqdn_ips.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);