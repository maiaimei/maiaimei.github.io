(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{748:function(s,e,t){"use strict";t.r(e);var a=t(7),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"pytest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pytest"}},[s._v("#")]),s._v(" pytest")]),s._v(" "),t("p",[s._v("pytest是基于python的测试框架。")]),s._v(" "),t("p",[s._v("官网："),t("a",{attrs:{href:"https://docs.pytest.org/en/7.4.x/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.pytest.org/en/7.4.x/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("特色：")]),s._v(" "),t("ol",[t("li",[s._v("按照约定自动收集用例")]),s._v(" "),t("li",[s._v("作用于测试对象的多种标记功能")]),s._v(" "),t("li",[s._v("自定义fixture")]),s._v(" "),t("li",[s._v("多种执行方式")]),s._v(" "),t("li",[s._v("可视化测试报告")]),s._v(" "),t("li",[s._v("控制台打印执行记录")])]),s._v(" "),t("p",[s._v("两个文件，conftest.py 和 pytest.ini")]),s._v(" "),t("ol",[t("li",[s._v("conftest.py文件，conftest.py中定义的fixture，不用导入测试模块，可以直接在测试模块中以str或函数方法参数使用")]),s._v(" "),t("li",[s._v("pytest.ini文件，pytest执行方案配置。常用：addopts,markers,python_function等。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装pytest")]),s._v("\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pytest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -U 升级已安装的pytest")]),s._v("\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U pytest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查version")]),s._v("\npytest --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"测试发现约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试发现约定"}},[s._v("#")]),s._v(" 测试发现约定")]),s._v(" "),t("p",[t("code",[s._v("pytest")]),s._v(" 将在当前目录及其子目录中运行所有文件名为 "),t("code",[s._v("test_*.py")]),s._v(" 或 "),t("code",[s._v("*_test.py")]),s._v(" 的文件。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/bonus_scene/p/13629896.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/bonus_scene/p/13629896.html"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"执行测试用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行测试用例"}},[s._v("#")]),s._v(" 执行测试用例")]),s._v(" "),t("p",[s._v("运行全部测试用例：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pytest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行指定测试用例：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pytest -k 关键字\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("pytest")]),s._v(" 默认不输出任何打印信息，如果要看打印信息，需要在运行时添加-s的指令。")]),s._v(" "),t("h2",{attrs:{id:"web自动化测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web自动化测试"}},[s._v("#")]),s._v(" Web自动化测试")]),s._v(" "),t("h3",{attrs:{id:"安装selenium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装selenium"}},[s._v("#")]),s._v(" 安装selenium")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" selenium\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装webdriver-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装webdriver-helper"}},[s._v("#")]),s._v(" 安装webdriver-helper")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pip install webdriver-helper")]),s._v("\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("webdriver_helper")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".5 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决 ImportError: cannot import name 'get_webdriver' from 'webdriver_helper' (unknown location)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("webdriver-helper 是一个 python 第三方库，用来更加便捷的使用 selenium，完成浏览器自动化控制的辅助工具。")]),s._v(" "),t("p",[s._v("因为 chrome 频繁自动更新，浏览器驱动随时可能失效，导致代码跑不起来。")]),s._v(" "),t("p",[s._v("有了 webdriver-helper 就再也不用关心浏览器和浏览器驱动的匹配问题了。")]),s._v(" "),t("p",[s._v("目前有两个版本：")]),s._v(" "),t("p",[s._v("第一个是免费版，版本代号 1.*, 这个版本可以帮助你免去寻找、匹配、下载合适的浏览器驱动。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webdriver-helper"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第二个是付费版本，版本代号 2.*，是在免费版的基础上进行了改进和增强。")])])}),[],!1,null,null,null);e.default=n.exports}}]);