(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{531:function(s,a,t){s.exports=t.p+"assets/img/20211125194246.6d40796e.jpg"},532:function(s,a,t){s.exports=t.p+"assets/img/20211125194553.c77e9c0a.jpg"},578:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"vmware-安装-centos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vmware-安装-centos"}},[s._v("#")]),s._v(" VMware 安装 Centos")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载 VMware Workstation Pro | CN"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.runoob.com/w3cnote/vmware-install-centos7.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VMware安装Centos7超详细过程"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("如果是最小化安装，则需要安装以下工具：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y net-tools\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("虚拟机设置静态 IP，请参考"),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1g4411E7wX",target:"_blank",rel:"noopener noreferrer"}},[s._v("虚拟机安装linux系统之centos6.5配置网络详细教程！"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("1、编辑 -> 虚拟网络编辑器，记住子网IP、网关IP。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(531),alt:""}})]),s._v(" "),n("p",[s._v("2、网络和Internet设置 -> 更改适配器选项，将VMnet8的IP、子网掩码、默认网关修改与虚拟机一致。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(532),alt:""}})]),s._v(" "),n("p",[s._v("3、修改虚拟机配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ifcfg-ens33\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("添加或修改以下内容")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"Ethernet"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("BOOTPROTO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"static"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("ONBOOT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"yes"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("IPADDR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.27.101")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("GATEWAY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.27.2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("NETMASK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("255.255.255.0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("DNS1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("114.114.114.114")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("DNS2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8.8.8.8")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("重启网络服务")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("检查配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("测试外网连接")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" baidu.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"linux-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-命令"}},[s._v("#")]),s._v(" Linux 命令")]),s._v(" "),n("p",[s._v("可以使用 "),n("a",{attrs:{href:"https://github.com/electerm/electerm/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("electerm"),n("OutboundLink")],1),s._v("、Xshell 连接 Linux 系统。")]),s._v(" "),n("h3",{attrs:{id:"系统管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统管理"}},[s._v("#")]),s._v(" 系统管理")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关机")]),s._v("\npoweroff\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看操作系统信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用情况")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘使用情况")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -hl\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h4",{attrs:{id:"防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[s._v("#")]),s._v(" 防火墙")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nsystemctl status firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙")]),s._v("\nsystemctl start firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂时关闭防火墙")]),s._v("\nsystemctl stop firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭防火墙")]),s._v("\nsystemctl disable firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\nsystemctl restart firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已经开放的端口号")]),s._v("\nfirewall-cmd --list-all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定端口号是否已经开放")]),s._v("\nfirewall-cmd --query-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放指定端口号")]),s._v("\nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭指定端口号")]),s._v("\nfirewall-cmd --permanent --remove-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("端口号/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\nfirewall-cmd --reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h4",{attrs:{id:"进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时显示进程动态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep 进程名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"网络通讯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络通讯"}},[s._v("#")]),s._v(" 网络通讯")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看ip")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主机名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\nhostnamectl\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改主机名")]),s._v("\nhostnamectl set-hostname "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("newhostname"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"文件管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[s._v("#")]),s._v(" 文件管理")]),s._v(" "),n("h4",{attrs:{id:"tee"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tee"}},[s._v("#")]),s._v(" tee")]),s._v(" "),n("p",[s._v("读取标准输入数据，并将内容输出到文件")]),s._v(" "),n("p",[s._v("-a 追加，不加表示覆盖")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" test.txt\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a test.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"vim"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" vim")]),s._v(" "),n("p",[s._v("全选：按 esc 后，然后按 ggvG")]),s._v(" "),n("p",[s._v("gg：是让光标移到首行，在vim才有效，vi中无效")]),s._v(" "),n("p",[s._v("v：是进入Visual(可视）模式")]),s._v(" "),n("p",[s._v("G：光标移到最后一行")]),s._v(" "),n("p",[s._v("d：删除选中内容")]),s._v(" "),n("p",[s._v("y：复制选中内容")]),s._v(" "),n("h3",{attrs:{id:"文件传输"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[s._v("#")]),s._v(" 文件传输")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("h4",{attrs:{id:"bin-sh-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bin-sh-c"}},[s._v("#")]),s._v(" /bin/sh -c")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" test.txt\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root.root test.txt\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" test.txt\n-bash: test.txt: Permission denied "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 sudo 只是让 echo 命令具有了 root 权限，但是没有让 “>” 和 “>>” 命令也具有 root 权限，所以 bash 会认为这两个命令都没有向 test.txt 文件写入信息的权限。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决方案一：利用 “sh -c” 命令，它可以让 bash 将一个字串作为完整的命令来执行")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo “test” >> test.txt'")]),s._v("\n\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a test.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"eof、-、-、-、"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eof、-、-、-、"}},[s._v("#")]),s._v(" EOF、>、>>、<、<<")]),s._v(" "),n("p",[s._v("EOF是END Of File的缩写，表示自定义终止符。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始")])]),s._v("\n…\nEOF")]),s._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("<   : 输入重定向")]),s._v(" "),n("p",[s._v("<< : 标准输入来自命令行的一对分隔号的中间内容")]),s._v(" "),n("p",[s._v(">   : 输出重定向")]),s._v(" "),n("p",[s._v(">> : 输出重定向，进行追加，不会覆盖之前内容")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://4uv4xvt5.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);