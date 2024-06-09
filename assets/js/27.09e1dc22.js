(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{636:function(s,a,t){s.exports=t.p+"assets/img/file-permissions-rwx.59eec2ed.jpg"},637:function(s,a,t){s.exports=t.p+"assets/img/rwx-standard-unix-permission-bits.12da5439.png"},738:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Linux有两种类型的用户：人类用户和系统用户。")]),s._v(" "),n("p",[s._v("每位用户都有一个唯一的标识号(Unique Identity，简称 UID)，以及至少一个组标识号(Group Identification,简称 GID)。")]),s._v(" "),n("p",[s._v("所有用户都有一个主组，而且可以是多个组的成员。")]),s._v(" "),n("p",[s._v("每位人类用户都有一个自己的主目录，用于保存个人文件。用户主目录位于"),n("code",[s._v("/home")]),s._v("，并以所有者命名")]),s._v(" "),n("p",[s._v("用户可以属于多个组，这些额外的组称为补充组（附加组）。")]),s._v(" "),n("p",[s._v("组中的用户拥有该组的所有权限。权限可以控制文件和命令的访问，是系统安全的基础。")]),s._v(" "),n("p",[s._v("系统用户代表系统服务和进程。系统用户需要用户账号来控制它们的权限，但这些账号不能用来登录，"),n("code",[s._v("/home")]),s._v("中也没有系统用户的目录。")]),s._v(" "),n("p",[s._v("人类用户又分为两类：root用户（又称超级用户）和普通用户（又称非特权用户）。")]),s._v(" "),n("p",[s._v("普通用户的权限只够管理自己的文件和运行允许普通用户使用的命令。")]),s._v(" "),n("p",[s._v("普通用户也可以被赋予有限的或完整的root权限。")]),s._v(" "),n("p",[s._v("在Linux系统中，"),n("code",[s._v("/etc/passwd")]),s._v("文件包含了系统上所有用户的信息。该文件的每一行代表一个用户，行的内容遵循如下格式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("用户名:密码占位符:用户ID:组ID:用户描述:用户主目录:默认使用的shell\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例如，一个"),n("code",[s._v("/etc/passwd")]),s._v("文件中的实际行可能看起来像这样：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("root:x:0:0:root:/root:/bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意，密码字段现在通常是一个"),n("code",[s._v("x")]),s._v("，表示密码数据被移动到"),n("code",[s._v("/etc/shadow")]),s._v("中了。")]),s._v(" "),n("p",[s._v("在Linux系统中，"),n("code",[s._v("/etc/group")]),s._v("文件包含了系统上所有用户组的信息。该文件的每一行代表一个用户组，并包含了用户组的相关信息，行的内容遵循如下格式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("组名:x:组ID:用户列表（多个用户用逗号分隔）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("x 是占位符，表示密码不可用，因为用户组密码存储在"),n("code",[s._v("/etc/gshadow")])]),s._v(" "),n("h2",{attrs:{id:"用户管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[s._v("#")]),s._v(" 用户管理")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印出指定用户名的用户和组信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"useradd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useradd"}},[s._v("#")]),s._v(" useradd")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户账号。使用 useradd 指令创建的账号，保存在 /etc/passwd 文本文件中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 指定用户登入时的起始目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -d /home/username username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 指定用户的主组。每个用户只能有一个主组。主组是用户登录系统时的默认组。创建新用户时，如果没有明确指定主组，系统会默认创建一个与用户名相同的组作为主组。用户的主组不能被删除，如果用户被删除，且其主组没有其他用户，该主组也会被自动删除。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g groupname username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -G 指定用户的附加组。用户可以属于多个附加组。附加组允许用户共享文件和目录。附加组可以直接被删除，无需关心是否还有其他用户属于该组。用户被删除时，其所属的附加组不会受到影响。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G groupname username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"userdel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#userdel"}},[s._v("#")]),s._v(" userdel")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 删除用户登入目录以及目录中所有文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" -r username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"usermod"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usermod"}},[s._v("#")]),s._v(" usermod")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -l 修改用户账号名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -l new_username old_username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -L 锁定用户密码，使密码无效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -L username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 修改用户登入时的起始目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -d /home/username username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 修改用户的主组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -g groupname username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -G 修改用户的附加组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G groupname username\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 将用户添加到补充组。仅与-G选项一起使用。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G groupname username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"passwd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#passwd"}},[s._v("#")]),s._v(" passwd")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改当前用户密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置指定用户密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定用户，用户不能登录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -l username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解锁用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -u username\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -d username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"组管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组管理"}},[s._v("#")]),s._v(" 组管理")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" groupname\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"groupadd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#groupadd"}},[s._v("#")]),s._v(" groupadd")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户组。使用 groupadd 指令创建的组，保存在 /etc/group 文本文件中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" groupname\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"groupdel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#groupdel"}},[s._v("#")]),s._v(" groupdel")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v(" groupname\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"groupmod"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#groupmod"}},[s._v("#")]),s._v(" groupmod")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupmod")]),s._v(" -n new_groupname old_groupname\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"授权管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#授权管理"}},[s._v("#")]),s._v(" 授权管理")]),s._v(" "),n("h3",{attrs:{id:"chmod"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[s._v("#")]),s._v(" chmod")]),s._v(" "),n("p",[s._v("chmod， change mode的缩写，即更改模式。\n权限的八进制表示")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("模式")]),s._v(" "),n("th",[s._v("表示")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("4")]),s._v(" "),n("td",[s._v("读取")])]),s._v(" "),n("tr",[n("td",[s._v("2")]),s._v(" "),n("td",[s._v("写入")])]),s._v(" "),n("tr",[n("td",[s._v("1")]),s._v(" "),n("td",[s._v("执行")])]),s._v(" "),n("tr",[n("td",[s._v("0")]),s._v(" "),n("td",[s._v("没有权限")])])])]),s._v(" "),n("p",[s._v("权限的符号表示")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("模式")]),s._v(" "),n("th",[s._v("表示")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("r")]),s._v(" "),n("td",[s._v("读取（read）")])]),s._v(" "),n("tr",[n("td",[s._v("w")]),s._v(" "),n("td",[s._v("写入（write）")])]),s._v(" "),n("tr",[n("td",[s._v("x")]),s._v(" "),n("td",[s._v("执行（execute）")])])])]),s._v(" "),n("p",[s._v("所有者的符号表示")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("模式")]),s._v(" "),n("th",[s._v("表示")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("u")]),s._v(" "),n("td",[s._v("用户（user）")])]),s._v(" "),n("tr",[n("td",[s._v("g")]),s._v(" "),n("td",[s._v("组（group）")])]),s._v(" "),n("tr",[n("td",[s._v("o")]),s._v(" "),n("td",[s._v("其他人（other）")])]),s._v(" "),n("tr",[n("td",[s._v("a")]),s._v(" "),n("td",[s._v("所有人（all）")])])])]),s._v(" "),n("p",[s._v("运算符表示")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("运算符")]),s._v(" "),n("th",[s._v("表示")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("+")]),s._v(" "),n("td",[s._v("添加权限")])]),s._v(" "),n("tr",[n("td",[s._v("-")]),s._v(" "),n("td",[s._v("删除现有权限")])]),s._v(" "),n("tr",[n("td",[s._v("=")]),s._v(" "),n("td",[s._v("添加新权限，并删除任何未指定的权限位")])])])]),s._v(" "),n("p",[n("img",{attrs:{src:t(636),alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(637),alt:""}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ugo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件或目录\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# r=4 w=2 x=1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" 文件或目录\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件拥有者，只有root有权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 用户或组 文件\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件 file1.txt 设为所有人皆可读取")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" ugo+r file1.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+r file1.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v(" file1.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件 file1.txt,file2.txt 设为所有者及所属组可写，其他人不可写")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" ug+w,o-w file1.txt file2.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("440")]),s._v(" file1.txt file2.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为 ex1.py 文件拥有者增加可执行权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+x ex1.py\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" ex1.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"chown"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[s._v("#")]),s._v(" chown")]),s._v(" "),n("p",[s._v("Linux chown（英文全拼："),n("strong",[s._v("change owner")]),s._v("）命令用于设置文件所有者和文件关联组的命令。")]),s._v(" "),n("p",[s._v("chown 需要超级用户 root 的权限才能执行此命令。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 /var/run/httpd.pid 的所有者设置 root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root /var/run/httpd.pid\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件 file1.txt 的拥有者设为 runoob，群体的使用者 runoobgroup")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" runoob:runoobgroup file1.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"su-sudo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#su-sudo"}},[s._v("#")]),s._v(" su/sudo")]),s._v(" "),n("p",[s._v("Linux su（英文全拼：switch user）命令用于变更为其他使用者的身份，除 root 外，需要键入该使用者的密码。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换用户的同时切换目标用户的工作环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - username\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。")]),s._v(" "),n("p",[s._v("使用权限：在 /etc/sudoers 中有出现的使用者。")]),s._v(" "),n("h3",{attrs:{id:"login-logout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#login-logout"}},[s._v("#")]),s._v(" login/logout")]),s._v(" "),n("p",[s._v("Linux logout命令用于退出系统。")]),s._v(" "),n("p",[s._v("logout指令让用户退出系统，其功能和login指令相互对应。")])])}),[],!1,null,null,null);a.default=e.exports}}]);