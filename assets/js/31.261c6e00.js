(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{666:function(s,t,a){s.exports=a.p+"assets/img/20240731205642.f474c67c.jpg"},667:function(s,t,a){s.exports=a.p+"assets/img/20240802225707.8e207dff.jpg"},760:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("首先，看一下电子邮件在互联网上的投递流程：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(666),alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(667),alt:""}})]),s._v(" "),e("ol",[e("li",[s._v("发件人调用用户代理编辑要发送的邮件。")]),s._v(" "),e("li",[s._v("发件人点击”发送邮件“按钮，把发送邮件的工作全部交给用户代理来完成。用户代理通过SMTP协议将邮件发送给发送方的邮件服务器（在这个过程中，用户代理充当SMTP客户，而发送方的邮件服务器则充当SMTP服务器）。")]),s._v(" "),e("li",[s._v("发送方的邮件服务器收到用户代理发来的邮件后，就把收到的邮件临时存放在邮件缓存队列中，等待时机成熟的时候再把邮件发送到接收方的邮件服务器（等待时间的长短取决于邮件服务器的处理能力和队列中待发送的信件的数量 ）。")]),s._v(" "),e("li",[s._v("若时机成熟了，发送方的邮件服务器则向接收方的邮件服务器发送邮件缓存中的邮件。在发送邮件之前，发送方的邮件服务器的SMTP客户与接收方的邮件服务器的SMTP服务器需要事先建立TCP连接，之后再将队列中的邮件发送出去。值得注意的是，邮件不会在因特网中的某个中间邮件服务器落地 。")]),s._v(" "),e("li",[s._v("接收邮件服务器中的SMTP服务器进程在收到邮件后，把邮件放入收件人的用户邮箱中，等待收件人进行读取。")]),s._v(" "),e("li",[s._v("收件人在打开收信时，运行在PC机中的用户代理，使用POP3（或IMAP）协议读取发送给自己的邮件。 注意，在这个过程中，收件人是POP3（或IMAP）客户，而接收邮件服务器则是POP3（或IMAP）服务器，箭头的方向是从邮件服务器指向接收用户，因为这是一个“拉 ”的操作 。")])]),s._v(" "),e("p",[s._v("https://blog.csdn.net/suhuaiqiang_janlay/article/details/78765613")]),s._v(" "),e("h2",{attrs:{id:"mail-server与dns之间的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mail-server与dns之间的关系"}},[s._v("#")]),s._v(" Mail server与DNS之间的关系")]),s._v(" "),e("p",[s._v("当一封邮件要发送出去时，邮件主机会先分析那封邮件的目标主机的DNS，先取得MX（Mail eXchanger，邮件交换）标志（其中，MX标志可能会有多部主机），然后以最优先MX主机为准将邮件发送出去。所以，若要为用户提供指定testmail域的电子邮件系统，需要先在DNS服务器中增加A记录和MX记录。\n@IN MX 10 mail.testmail.com\nmail IN A 192.168.200.20\n配置解析记录后，主机名即为mail.testmail.com，而邮件域为@testmail.com。")]),s._v(" "),e("h2",{attrs:{id:"邮件传输所需要的组件以及相关协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#邮件传输所需要的组件以及相关协议"}},[s._v("#")]),s._v(" 邮件传输所需要的组件以及相关协议")]),s._v(" "),e("p",[s._v("（1）工作流程\n邮件的正常传输是需要很多接口的，比如必须要先向某台邮件服务器注册，以取得一个合法的电子邮件权限后，才能够发送邮件出去。传输过程中包含了多个邮件重要组件。\n（2）相关组件\nMUA（Mial User Agent）邮件用户代理人\n收取邮件主机的电子邮件，以及提供用户浏览与编写邮件\nMTA（Mail Transfer Agent）邮件发送代理人\n使用简单邮件传输协议（SMTP）；转发邮件\nMDA（Mail Delivery Agent）邮件传送代理人\n分析由MTA所收到的邮件表头或内容等数据，来决定这封邮件的去向。\n（3）邮件应用协议\n简单邮件传输协议（SMTP）：\n用于发送或中转发出的电子邮件，占用tcp 25端口\n第三版邮件协议（POP3）：\n用于把服务器上的邮件存储到本地主机，占用tcp110端口\n第四版互联网信息访问协议（IMAP4）：\n用于再本地主机上访问邮件，占用tcp143端口")]),s._v(" "),e("h2",{attrs:{id:"常用的邮件系统框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的邮件系统框架"}},[s._v("#")]),s._v(" 常用的邮件系统框架")]),s._v(" "),e("p",[s._v("一个最基础的电子邮件系统肯定要能提供发件服务和收件服务，为此需要使用基于SMTP协议的Postfix服务程序提供发件服务功能，并使用基于POP3协议的Dovecot服务程序提供收件服务功能，这样一来，用户就可以使用Outlook Express或Foxmail等客户端服务程序正常收发邮件了。\n1、MTA服务器：Postfix\n2、MRA服务器：Dvecot\n3、MUA软件：客户端的收发邮件软件\n应用Mail sever有两种主要方式：直接登录Linux主机来操作MTA，或者通过客户端的MUA软件来收发邮件。")]),s._v(" "),e("h2",{attrs:{id:"安装和配置-dovecot-imap-和-pop3-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置-dovecot-imap-和-pop3-服务器"}},[s._v("#")]),s._v(" 安装和配置 Dovecot IMAP 和 POP3 服务器")]),s._v(" "),e("p",[s._v("Dovecot 是一个高性能邮件发送代理(MDA)，专注于安全性。您可以使用 IMAP 或 POP3 兼容电子邮件客户端连接到 Dovecot 服务器，并读取或下载电子邮件。")]),s._v(" "),e("h3",{attrs:{id:"安装-dovecot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-dovecot"}},[s._v("#")]),s._v(" 安装 Dovecot")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dovecot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://doc.dovecot.org/installation_guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://doc.dovecot.org/installation_guide/"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"配置-dovecot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-dovecot"}},[s._v("#")]),s._v(" 配置 Dovecot")]),s._v(" "),e("p",[e("code",[s._v("dovecot")]),s._v(" 软件包提供主配置文件 "),e("code",[s._v("/etc/dovecot/dovecot.conf")]),s._v(" 和 "),e("code",[s._v("/etc/dovecot/conf.d/")]),s._v(" 目录中的多个配置文件。Dovecot 会在您启动服务时组合文件来构建配置。")]),s._v(" "),e("p",[s._v("多个配置文件的主要优点是对设置进行分组并提高可读性。如果您希望使用单个配置文件，可以维护 "),e("code",[s._v("/etc/dovecot/dovecot.conf")]),s._v(" 中的所有设置，并从 "),e("code",[s._v("该文件")]),s._v(" 中删除所有 "),e("code",[s._v("include_try")]),s._v(" 语句。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://doc.dovecot.org/configuration_manual/config_file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://doc.dovecot.org/configuration_manual/config_file/"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://doc.dovecot.org/configuration_manual/basic_configuration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://doc.dovecot.org/configuration_manual/basic_configuration/"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://doc.dovecot.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://doc.dovecot.org/"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.redhat.com/zh_hans/documentation/red_hat_enterprise_linux/9/html/deploying_mail_servers/index",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.redhat.com/zh_hans/documentation/red_hat_enterprise_linux/9/html/deploying_mail_servers/index"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),e("p",[s._v("PAM（Pluggable Authentication Module）可插拔认证模块。")]),s._v(" "),e("p",[s._v("用Postfix构建的邮件系统至少有两种工作模式：")]),s._v(" "),e("ol",[e("li",[s._v("利用本地Linux账号进行邮件收发，比如本地系统有用户root或someone，那么就有root@example.com和someone@example.com两个email地址。")]),s._v(" "),e("li",[s._v("为了管理的方便和系统安全，Postfix的用户管理采用了虚拟用户方式，即Postfix单独设立了许多用户，他们各自在系统中映射有独立的硬盘空间。但同时这些用户又跟本地Linux系统内固有的真实账号没有关联。")])]),s._v(" "),e("p",[s._v("以下是在CentOS上搭建邮件服务器的基本步骤和示例配置：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安装Postfix和Dovecot：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postfix dovecot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("配置Postfix（主配置文件位于"),e("code",[s._v("/etc/postfix/main.cf")]),s._v("）：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置您的域名")]),s._v("\nmyhostname "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mail.example.com\nmydomain "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" example.com\nmyorigin "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mydomain")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置邮件存储路径")]),s._v("\nhome_mailbox "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Maildir/\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定允许的邮件大小")]),s._v("\nmailbox_size_limit "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmessage_size_limit "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("104857600")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于发送邮件的网络接口")]),s._v("\ninet_interfaces "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" all\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许的邮局协议")]),s._v("\nmydestination "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myhostname")]),s._v(", localhost."),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mydomain")]),s._v(", localhost, "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$mydomain")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要转发的邮件域")]),s._v("\nrelay_domains "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" *\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置网络范围以允许接收邮件")]),s._v("\nmynetworks "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.0/8 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/128\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用SMTP认证")]),s._v("\nsmtpd_sasl_type "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dovecot\nsmtpd_sasl_path "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" private/auth\nsmtpd_sasl_auth_enable "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nsmtpd_recipient_restrictions "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" permit_mynetworks,permit_sasl_authenticated,reject_unauth_destination\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重载配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" postfix reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("配置Dovecot（主配置文件位于"),e("code",[s._v("/etc/dovecot/dovecot.conf")]),s._v("）：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使POP3和IMAP可用")]),s._v("\nprotocols "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" imap pop3 lmtp\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于SASL的认证")]),s._v("\ndisable_plaintext_auth "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置邮件存储路径")]),s._v("\nmail_location "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" maildir:~/Maildir\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启Dovecot服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart dovecot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("确保Postfix和Dovecot服务开机自启：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postfix\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" dovecot\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("配置防火墙允许SMTP和IMAP服务：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("imap\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("测试邮件服务器：")]),s._v(" "),e("p",[s._v("使用如"),e("code",[s._v("telnet")]),s._v("或"),e("code",[s._v("swaks")]),s._v("等工具来测试邮件服务器的发送和接收功能。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("使用telnet测试SMTP：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("telnet localhost "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\nhelo mail.example.com\nmail from:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("from@example.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nrcpt to:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("to@example.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\ndata\nSubject: "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" email\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nquit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用telnet或其他邮件客户端测试IMAP/POP3。")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);