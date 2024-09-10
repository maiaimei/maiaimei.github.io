(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{628:function(s,a,t){s.exports=t.p+"assets/img/20240718223749.0ec49c75.jpg"},732:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"shell-脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本"}},[s._v("#")]),s._v(" Shell 脚本")]),s._v(" "),e("p",[s._v("Shell 脚本的第一行一般是：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。")]),s._v(" "),e("p",[s._v("Linux 的 Shell 种类众多，常见的有：")]),s._v(" "),e("ul",[e("li",[s._v("Bourne Shell（/usr/bin/sh或/bin/sh）")]),s._v(" "),e("li",[s._v("Bourne Again Shell（/bin/bash）")]),s._v(" "),e("li",[s._v("C Shell（/usr/bin/csh）")]),s._v(" "),e("li",[s._v("K Shell（/usr/bin/ksh）")]),s._v(" "),e("li",[s._v("Shell for Root（/sbin/sh）")]),s._v(" "),e("li",[s._v("……")])]),s._v(" "),e("h2",{attrs:{id:"运行-shell-脚本的两种方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-shell-脚本的两种方法"}},[s._v("#")]),s._v(" 运行 Shell 脚本的两种方法")]),s._v(" "),e("h3",{attrs:{id:"作为可执行程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为可执行程序"}},[s._v("#")]),s._v(" 作为可执行程序")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./test.sh "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使脚本具有执行权限")]),s._v("\n./test.sh "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("注意，一定要写成 ./test.sh，而不是 test.sh，运行其它二进制的程序也一样，直接写 test.sh，linux 系统会去 PATH 里寻找有没有叫 test.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 test.sh 是会找不到命令的，要用 ./test.sh 告诉系统说，就在当前目录找。")]),s._v(" "),e("h3",{attrs:{id:"作为解释器参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作为解释器参数"}},[s._v("#")]),s._v(" 作为解释器参数")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/bin/sh ./test.sh "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./test.sh "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(628),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"shell-变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-变量"}},[s._v("#")]),s._v(" Shell 变量")]),s._v(" "),e("p",[s._v("Shell 变量名只能包含字母、数字和下划线，不能以数字开头。")]),s._v(" "),e("p",[s._v("变量名与等号之间不能有空格。等号两侧避免使用空格：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正确的赋值")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("variable_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有可能会导致错误")]),s._v("\nvariable_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("使用一个定义过的变量，只要在变量名前面加美元符号即可，如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$variable_name")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${variable_name}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界。推荐给所有变量加上花括号，避免不必要的错误，如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("skill")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Java Python Shell"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解释器会把$skillScript当成一个变量（其值为空）")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am good at '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$skillScript")]),s._v('"')]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am good at '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${skill}")]),s._v('Script"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("已定义的变量，可以被重新定义，如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("variable_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("new_value "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用变量的时候才加美元符（$）")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"字符串变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串变量"}},[s._v("#")]),s._v(" 字符串变量")]),s._v(" "),e("p",[e("strong",[s._v("字符串变量")]),s._v("：使用单引号 ' 或双引号 \" 来定义字符串，例如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, World!'")]),s._v("\n或者\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World!"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的。")]),s._v(" "),e("p",[s._v("双引号里可以有变量，可以出现转义字符。")]),s._v(" "),e("p",[s._v("拼接字符串：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("your_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用双引号拼接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, "')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" !"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your_name}")]),s._v(' !"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_2")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用单引号拼接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello, '")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$your_name")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' !'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("greeting_4")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello, ${your_name} !'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原样输出hello, ${your_name} !")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$greeting_4")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("获取字符串长度：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcd"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("string}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等价于 ${#string[0]}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"整数变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整数变量"}},[s._v("#")]),s._v(" 整数变量")]),s._v(" "),e("p",[e("strong",[s._v("整数变量")]),s._v("： 在一些Shell中，你可以使用 "),e("strong",[s._v("declare")]),s._v(" 或 "),e("strong",[s._v("typeset")]),s._v(" 命令来声明整数变量。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_integer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"数组变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组变量"}},[s._v("#")]),s._v(" 数组变量")]),s._v(" "),e("p",[e("strong",[s._v("数组变量：")]),s._v(" Shell 也支持数组，允许你在一个变量中存储多个值。")]),s._v(" "),e("p",[s._v('在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("数组名"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值1 值2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 值n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("例如：")]),s._v(" "),e("div",{staticClass:"language-she line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("array_name=(value0 value1 value2 value3)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("array_name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nvalue0\nvalue1\nvalue2\nvalue3\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("整数索引数组：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_array")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Bash 支持关联数组，可以使用任意的字符串、或者整数作为下标来访问数组元素。")]),s._v(" "),e("p",[s._v("关联数组使用 declare 命令来声明，语法格式如下：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -A array_name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("-A")]),s._v(" 选项就是用于声明一个关联数组。")]),s._v(" "),e("p",[s._v("关联数组的键是唯一的。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -A associative_array\nassociative_array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John"')]),s._v("\nassociative_array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("读取数组元素值的一般格式是：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${数组名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("下标"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("例如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("valuen")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("数组常用脚本：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("A\narray_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("B\narray_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("C\narray_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取数组中的所有元素")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组的元素为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组的元素为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在数组前加一个感叹号 ! 可以获取数组的所有键，例如：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组的键为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组的键为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取得数组元素的个数")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组元素的个数为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数组元素的个数为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取得数组单个元素的长度")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第n个数组元素的长度为: '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("array_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h3",{attrs:{id:"环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),e("p",[e("strong",[s._v("环境变量：")]),s._v(" 这些是由操作系统或用户设置的特殊变量，用于配置 Shell 的行为和影响其执行环境。")]),s._v(" "),e("p",[s._v("例如，PATH 变量包含了操作系统搜索可执行文件的路径：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"特殊变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊变量"}},[s._v("#")]),s._v(" 特殊变量")]),s._v(" "),e("p",[e("strong",[s._v("特殊变量：")]),s._v(" 有一些特殊变量在 Shell 中具有特殊含义。例如：")]),s._v(" "),e("p",[s._v("我们在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为 $n，n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数。")]),s._v(" "),e("p",[e("strong",[s._v("$0")]),s._v(" 表示脚本的名称，")]),s._v(" "),e("p",[e("strong",[s._v("$1")]),s._v(" 表示脚本的第一个参数，"),e("strong",[s._v("$2")]),s._v(" 表示脚本的第二个参数，如此类推。")]),s._v(" "),e("p",[e("strong",[s._v("$#")]),s._v(" 表示传递给脚本的参数数量。")]),s._v(" "),e("p",[e("strong",[s._v("$@")]),s._v(" 表示传递给脚本的全部参数。")]),s._v(" "),e("p",[e("strong",[s._v("$?")]),s._v(" 表示上一个命令的退出状态。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell-passing-arguments.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.runoob.com/linux/linux-shell-passing-arguments.html"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"shell-基本运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-基本运算符"}},[s._v("#")]),s._v(" Shell 基本运算符")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell-basic-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.runoob.com/linux/linux-shell-basic-operators.html"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.runoob.com/linux/linux-shell.html"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);