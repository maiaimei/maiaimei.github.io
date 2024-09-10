(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{652:function(t,s,a){t.exports=a.p+"assets/img/20240129222804.76035e79.png"},653:function(t,s,a){t.exports=a.p+"assets/img/20240129222922.6abddee6.png"},744:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.python.org/"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cainiaojc.com/python/python-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cainiaojc.com/python/python-tutorial.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("检查是否安装Python")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("python --version\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("为不同平台上安装 Python 的方法访问"),n("a",{attrs:{href:"https://www.runoob.com/python/python-install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/python/python-install.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("以下为在 Unix & Linux 平台上安装 Python 的简单步骤：")]),t._v(" "),n("ul",[n("li",[t._v("打开 WEB 浏览器访问"),n("a",{attrs:{href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.python.org/downloads/source/"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("选择适用 于Unix/Linux 的源码压缩包。")]),t._v(" "),n("li",[t._v("下载及解压压缩包。")]),t._v(" "),n("li",[t._v("如果你需要自定义一些选项修改"),n("em",[t._v("Modules/Setup")])]),t._v(" "),n("li",[t._v("执行 ./configure 脚本")]),t._v(" "),n("li",[t._v("make")]),t._v(" "),n("li",[t._v("make install")]),t._v(" "),n("li",[t._v("在 bash shell (Linux): 输入"),n("code",[t._v('export PATH="$PATH:/usr/local/bin/python"')]),t._v("，按下 Enter设置环境变量")])]),t._v(" "),n("p",[t._v("执行以上操作后，Python 会安装在 /usr/local/bin 目录中，Python 库安装在 /usr/local/lib/pythonXX，XX 为你使用的 Python 的版本号。")]),t._v(" "),n("p",[t._v("安装Python时，pip通常会被同时安装。pip, Package Installer for Python，Python包管理器。")]),t._v(" "),n("p",[t._v("检查是否安装pip")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("pip --version\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("安装python-pip及python-devel程序包")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-pip\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-devel\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("升级pip，解决“WARNING: There was an error checking the latest version of pip.”")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("python -m pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U --force-reinstall pip\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("使用pip命令安装、升级或卸载Python库")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 库名\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 库名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("版本 \t\t   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定版本安装")]),t._v("\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade 库名 \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级已安装的库")]),t._v("\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U 库名 \t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级已安装的库")]),t._v("\npip uninstall 库名 \t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载已安装的库")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h2",{attrs:{id:"在idea中配置python环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在idea中配置python环境"}},[t._v("#")]),t._v(" 在IDEA中配置Python环境")]),t._v(" "),n("p",[t._v("File -> Project Structure -> SDKs -> Add Python SDK...")]),t._v(" "),n("p",[n("img",{attrs:{src:a(652),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(653),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"pip生成requirement配置文件-快速安装配置环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pip生成requirement配置文件-快速安装配置环境"}},[t._v("#")]),t._v(" pip生成requirement配置文件，快速安装配置环境")]),t._v(" "),n("p",[t._v("在当前目录下生成requirements.txt文件")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("pip freeze "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./requirements.txt\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("根据requirements.txt文件安装配置环境")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -r ./requirements.txt\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"模块的理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块的理解"}},[t._v("#")]),t._v(" 模块的理解")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.python.org/3/tutorial/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("module"),n("OutboundLink")],1),t._v("是Python中的一个重要概念。")]),t._v(" "),n("p",[n("strong",[t._v("module")]),t._v("将一组相关功能封装在一个"),n("strong",[t._v("文件")]),t._v("中，从而实现代码的复用和模块化开发。")]),t._v(" "),n("p",[t._v("Python内置很多module，例如math、datetime、os等，同时也支持用户自定义module。")]),t._v(" "),n("p",[t._v("module的导入方式：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" math\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" math "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sqrt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqrt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" math "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqrt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h2",{attrs:{id:"包的理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包的理解"}},[t._v("#")]),t._v(" 包的理解")]),t._v(" "),n("p",[t._v("将相似的模块放在同一个目录中，目录必须包含一个名为 _"),n("em",[t._v("init")]),t._v("_.py 的文件，该目录被Python视为一个"),n("a",{attrs:{href:"https://docs.python.org/3/tutorial/modules.html#packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("包"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),n("p",[t._v("使用 type() 函数来判断一个变量或值属于哪个类。")]),t._v(" "),n("p",[t._v("使用 isinstance() 函数用于检查对象是否属于特定的类。")]),t._v(" "),n("p",[t._v("数字(Number)：整数、浮点数和复数")]),t._v(" "),n("p",[t._v("字符串(String)：使用单引号或双引号来表示字符串。使用三引号 ''' 或 \"\"\" 来表示多行字符串。")]),t._v(" "),n("p",[t._v("列表(List)：是项目的有序序列。用逗号分隔的项目放在方括号内[ ]。列表中的项目允许不是同一类型。")]),t._v(" "),n("p",[t._v("元组(Tuple)：是项目的有序序列。用逗号分隔的项目放在括号内()。元组中的项目允许不是同一类型。元组是不可变的。元组一旦创建就不能修改。")]),t._v(" "),n("p",[t._v("集合(Set)：是无序集合，索引没有意义，切片运算符 [] 不起作用。用逗号分隔的项目放在大括号内{}。可以在两个集合上执行集合操作，例如：并集，交集等。")]),t._v(" "),n("p",[t._v("字典(Dictionary)：键值对的无序集合。使用大括号 {} 定义字典，每一项都是形式为 key:value 。键 和 值 可以是任何类型。")]),t._v(" "),n("h2",{attrs:{id:"下划线的用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下划线的用法"}},[t._v("#")]),t._v(" 下划线的用法")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("模式")]),t._v(" "),n("th",[t._v("举例")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("单前导下划线")]),t._v(" "),n("td",[t._v("_var")]),t._v(" "),n("td",[t._v("命名约定，私有的，仅供内部使用，通常不会由Python解释器强制执行。")])]),t._v(" "),n("tr",[n("td",[t._v("单末尾下划线")]),t._v(" "),n("td",[t._v("var_")]),t._v(" "),n("td",[t._v("规避重名，按约定使用以避免与Python关键字的命名冲突")])]),t._v(" "),n("tr",[n("td",[t._v("双前导下划线")]),t._v(" "),n("td",[t._v("__var")]),t._v(" "),n("td",[t._v("在类上下文中使用，防止变量在子类中被重写，触发”名称修饰“，由Python解释器强制执行")])]),t._v(" "),n("tr",[n("td",[t._v("双前导和末尾下划线")]),t._v(" "),n("td",[t._v("__var__")]),t._v(" "),n("td",[t._v("若是变量，则该变量不会被Python解释器修改。"),n("br"),t._v("若是函数，则该函数是Python的“特殊函数”或”魔术方法/魔法函数“。"),n("br"),t._v("例如："),n("br"),t._v("_"),n("em",[t._v("init")]),t._v("_()函数在面向对象编程(OOP)中称为构造函数，每当实例化该类的新对象时，都会调用此特殊函数，通常使用它来初始化所有变量。")])]),t._v(" "),n("tr",[n("td",[t._v("单下划线")]),t._v(" "),n("td",[t._v("_")]),t._v(" "),n("td",[t._v("有时用作临时或无意义变量的名称")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);