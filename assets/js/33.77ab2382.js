(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{588:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("可以使用 "),t("a",{attrs:{href:"https://github.com/electerm/electerm/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("electerm"),t("OutboundLink")],1),s._v("、Xshell 连接 Linux 系统。")]),s._v(" "),t("h2",{attrs:{id:"系统管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[s._v("#")]),s._v(" 系统管理")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关机")]),s._v("\npoweroff\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看操作系统信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理缓存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/vm/drop_caches\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -hl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[s._v("#")]),s._v(" 防火墙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nsystemctl status firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙")]),s._v("\nsystemctl start firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂时关闭防火墙")]),s._v("\nsystemctl stop firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭防火墙")]),s._v("\nsystemctl disable firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\nsystemctl restart firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已经开放的端口号")]),s._v("\nfirewall-cmd --list-all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定端口号是否已经开放")]),s._v("\nfirewall-cmd --query-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放指定端口号")]),s._v("\nfirewall-cmd --permanent --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭指定端口号")]),s._v("\nfirewall-cmd --permanent --remove-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时显示进程动态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep 进程名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_22172133/article/details/81263736",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux的基本操作——crond定时任务"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond status\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态\t")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond start\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond stop\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond restart\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" crond reload\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("系统任务调度")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@gitlab ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/crontab")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sbin:/bin:/usr/sbin:/usr/bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For details see man 4 crontabs")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example of job definition:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .---------------- minute (0 - 59)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  .------------- hour (0 - 23)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  .---------- day of month (1 - 31)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  |")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# *  *  *  *  * user-name  command to be executed")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("用户任务调度")])]),s._v(" "),t("p",[s._v("所有用户定义的任务调度保存在 /var/spool/cron 目录中，以用户名命名。")]),s._v(" "),t("h2",{attrs:{id:"网络通讯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络通讯"}},[s._v("#")]),s._v(" 网络通讯")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主机名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\nhostnamectl\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改主机名")]),s._v("\nhostnamectl set-hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("newhostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"文件管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[s._v("#")]),s._v(" 文件管理")]),s._v(" "),t("h3",{attrs:{id:"tee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tee"}},[s._v("#")]),s._v(" tee")]),s._v(" "),t("p",[s._v("读取标准输入数据，并将内容输出到文件")]),s._v(" "),t("p",[s._v("-a 追加，不加表示覆盖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" test.txt\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" vim")]),s._v(" "),t("p",[s._v("全选：按 esc 后，然后按 ggvG")]),s._v(" "),t("p",[s._v("gg：是让光标移到首行，在vim才有效，vi中无效")]),s._v(" "),t("p",[s._v("v：是进入Visual(可视）模式")]),s._v(" "),t("p",[s._v("G：光标移到最后一行")]),s._v(" "),t("p",[s._v("d：删除选中内容")]),s._v(" "),t("p",[s._v("y：复制选中内容")]),s._v(" "),t("h2",{attrs:{id:"文件传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[s._v("#")]),s._v(" 文件传输")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"备份压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份压缩"}},[s._v("#")]),s._v(" 备份压缩")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 指定备份文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -x 从备份文件中还原文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -z 通过gzip指令处理备份文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 显示指令执行过程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf test.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将test.zip解压到test中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" test.zip -d "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("h3",{attrs:{id:"bin-sh-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bin-sh-c"}},[s._v("#")]),s._v(" /bin/sh -c")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" test.txt\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root.root test.txt\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" test.txt\n-bash: test.txt: Permission denied "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 sudo 只是让 echo 命令具有了 root 权限，但是没有让 “>” 和 “>>” 命令也具有 root 权限，所以 bash 会认为这两个命令都没有向 test.txt 文件写入信息的权限。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决方案一：利用 “sh -c” 命令，它可以让 bash 将一个字串作为完整的命令来执行")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /bin/sh -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo “test” >> test.txt'")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"eof、-、-、-、"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eof、-、-、-、"}},[s._v("#")]),s._v(" EOF、>、>>、<、<<")]),s._v(" "),t("p",[s._v("EOF是END Of File的缩写，表示自定义终止符。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始")])]),s._v("\n…\nEOF")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("<   : 输入重定向")]),s._v(" "),t("p",[s._v("<< : 标准输入来自命令行的一对分隔号的中间内容")]),s._v(" "),t("p",[s._v(">   : 输出重定向")]),s._v(" "),t("p",[s._v(">> : 输出重定向，进行追加，不会覆盖之前内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://4uv4xvt5.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);