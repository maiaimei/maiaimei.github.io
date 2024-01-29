(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{716:function(e,s,t){"use strict";t.r(s);var a=t(7),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"pytest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pytest"}},[e._v("#")]),e._v(" pytest")]),e._v(" "),t("p",[e._v("pytest是基于python的测试框架。")]),e._v(" "),t("p",[e._v("官网："),t("a",{attrs:{href:"https://docs.pytest.org/en/7.4.x/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.pytest.org/en/7.4.x/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("特色：")]),e._v(" "),t("ol",[t("li",[e._v("按照约定自动收集用例")]),e._v(" "),t("li",[e._v("作用于测试对象的多种标记功能")]),e._v(" "),t("li",[e._v("自定义fixture")]),e._v(" "),t("li",[e._v("多种执行方式")]),e._v(" "),t("li",[e._v("可视化测试报告")]),e._v(" "),t("li",[e._v("控制台打印执行记录")])]),e._v(" "),t("p",[e._v("两个文件，conftest.py 和 pytest.ini")]),e._v(" "),t("ol",[t("li",[e._v("conftest.py文件，conftest.py中定义的fixture，不用导入测试模块，可以直接在测试模块中以str或函数方法参数使用")]),e._v(" "),t("li",[e._v("pytest.ini文件，pytest执行方案配置。常用：addopts,markers,python_function等。")])]),e._v(" "),t("h3",{attrs:{id:"测试发现约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试发现约定"}},[e._v("#")]),e._v(" 测试发现约定")]),e._v(" "),t("p",[t("code",[e._v("pytest")]),e._v(" 将在当前目录及其子目录中运行所有文件名为 "),t("code",[e._v("test_*.py")]),e._v(" 或 "),t("code",[e._v("*_test.py")]),e._v(" 的文件。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/bonus_scene/p/13629896.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.cnblogs.com/bonus_scene/p/13629896.html"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"执行测试用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行测试用例"}},[e._v("#")]),e._v(" 执行测试用例")]),e._v(" "),t("p",[e._v("运行全部测试用例：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("pytest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("运行指定测试用例：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("pytest -k 关键字\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("pytest")]),e._v(" 默认不输出任何打印信息，如果要看打印信息，需要在运行时添加-s的指令。")]),e._v(" "),t("h2",{attrs:{id:"web自动化测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web自动化测试"}},[e._v("#")]),e._v(" Web自动化测试")]),e._v(" "),t("h3",{attrs:{id:"安装selenium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装selenium"}},[e._v("#")]),e._v(" 安装selenium")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" selenium\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装webdriver-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装webdriver-helper"}},[e._v("#")]),e._v(" 安装webdriver-helper")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pip install webdriver-helper")]),e._v("\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("webdriver_helper")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".5 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 解决 ImportError: cannot import name 'get_webdriver' from 'webdriver_helper' (unknown location)")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("webdriver-helper 是一个 python 第三方库，用来更加便捷的使用 selenium，完成浏览器自动化控制的辅助工具。")]),e._v(" "),t("p",[e._v("因为 chrome 频繁自动更新，浏览器驱动随时可能失效，导致代码跑不起来。")]),e._v(" "),t("p",[e._v("有了 webdriver-helper 就再也不用关心浏览器和浏览器驱动的匹配问题了。")]),e._v(" "),t("p",[e._v("目前有两个版本：")]),e._v(" "),t("p",[e._v("第一个是免费版，版本代号 1.*, 这个版本可以帮助你免去寻找、匹配、下载合适的浏览器驱动。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" webdriver-helper"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".*\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("第二个是付费版本，版本代号 2.*，是在免费版的基础上进行了改进和增强。")]),e._v(" "),t("h3",{attrs:{id:"安装pytest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装pytest"}},[e._v("#")]),e._v(" 安装pytest")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pytest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);