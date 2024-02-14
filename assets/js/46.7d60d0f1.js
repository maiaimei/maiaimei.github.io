(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{666:function(s,e,a){"use strict";a.r(e);var t=a(7),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、安装准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装准备"}},[s._v("#")]),s._v(" 一、安装准备")]),s._v(" "),a("h3",{attrs:{id:"_1、前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、前提条件"}},[s._v("#")]),s._v(" 1、前提条件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Docker可以运行在Windows、Mac、CentOS、Ubuntu等操作系统上")])]),s._v(" "),a("li",[a("p",[s._v("Docker支持以下的CentOS版本：")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("CentOS 7 (64-bit)")]),s._v(" "),a("li",[s._v("CentOS 6.5 (64-bit) 或更高的版本")])])]),s._v(" "),a("li",[a("p",[s._v("目前，CentOS 仅发行版本中的内核支持 Docker")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("Docker 运行在 CentOS 7 上，要求系统为64位、系统内核版本为 3.10 以上。")]),s._v(" "),a("li",[s._v("Docker 运行在 CentOS-6.5 或更高的版本的 CentOS 上，要求系统为64位、系统内核版本为 2.6.32-431 或者更高版本。")])])])]),s._v(" "),a("h3",{attrs:{id:"_2、查看系统内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看系统内核"}},[s._v("#")]),s._v(" 2、查看系统内核")]),s._v(" "),a("p",[s._v("uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3、查看已安装的centos版本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看已安装的centos版本信息"}},[s._v("#")]),s._v(" 3、查看已安装的CentOS版本信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、centos7安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、centos7安装docker"}},[s._v("#")]),s._v(" 二、CentOS7安装docker")]),s._v(" "),a("p",[s._v("官网：http://www.docker.com")]),s._v(" "),a("p",[s._v("安装手册：https://docs.docker.com/install/linux/docker-ce/centos（CE-社区版）")]),s._v(" "),a("h3",{attrs:{id:"_1、安装需要的软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装需要的软件包"}},[s._v("#")]),s._v(" 1、安装需要的软件包")]),s._v(" "),a("p",[s._v("yy -utils提供了yy-config-manager相关功能，device-mapper-persistent-data和lvm2是设备映射器驱动程序所需要的。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               device-mapper-persistent-data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               lvm2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_2、设置docker下载镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置docker下载镜像"}},[s._v("#")]),s._v(" 2、设置docker下载镜像")]),s._v(" "),a("p",[s._v("推荐阿里云下载地址")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3、更新yum软件包索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、更新yum软件包索引"}},[s._v("#")]),s._v(" 3、更新yum软件包索引")]),s._v(" "),a("p",[s._v("我们在更新或配置yum源之后，通常都会使用yum makecache 生成缓存，这个命令是将软件包信息提前在本地缓存一份，用来提高搜索安装软件的速度")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum makecache fast\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4、安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装docker-ce"}},[s._v("#")]),s._v(" 4、安装docker ce")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5、启动docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、启动docker"}},[s._v("#")]),s._v(" 5、启动docker")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl start docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6、版本验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、版本验证"}},[s._v("#")]),s._v(" 6、版本验证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_7、设置开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、设置开机启动"}},[s._v("#")]),s._v(" 7、设置开机启动")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看服务是否自动启动（是：enabled | 否：disabled）")]),s._v("\nsystemctl list-unit-files"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" docker.service \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动：如不是enabled可以运行如下命令设置自启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载服务配置")]),s._v("\nsystemctl daemon-reload \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果希望不进行自启动，运行如下命令设置")]),s._v("\nsystemctl disable docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载服务配置")]),s._v("\nsystemctl daemon-reload \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"三、卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、卸载"}},[s._v("#")]),s._v(" 三、卸载")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl stop docker \nyum remove -y docker-ce\nrm -rf /var/lib/docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);