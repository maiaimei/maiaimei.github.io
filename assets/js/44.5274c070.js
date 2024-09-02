(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{648:function(t,s,a){t.exports=a.p+"assets/img/20220203154924.d32369fb.jpg"},744:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"vmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vmware"}},[t._v("#")]),t._v(" VMware")]),t._v(" "),n("h3",{attrs:{id:"vmware安装及配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vmware安装及配置"}},[t._v("#")]),t._v(" VMware安装及配置")]),t._v(" "),n("p",[t._v("点击"),n("a",{attrs:{href:"https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 VMware Workstation Pro | CN"),n("OutboundLink")],1),t._v("，下载完成后安装VMware。")]),t._v(" "),n("p",[t._v("如果是最小化安装，则需要安装以下工具：")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y net-tools\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("如果虚拟机无法ping通宿主机，在控制面板-系统和安全-Windows Defender 防火墙，点击高级设置，选择入站规则，把虚拟机监控(回显请求-ICMPv4-In)的规则启用即可。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(648),alt:""}})]),t._v(" "),n("p",[t._v("VMware提供了三种网络工作模式：桥接模式（Bridged）、网络地址转换模式（NAT）、仅主机模式（Host-Only）。")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("桥接模式（Bridged）")]),t._v("：\n"),n("ul",[n("li",[t._v("在这种模式下，虚拟机的网络配置与物理机处于同一网段，虚拟机可以直接访问物理机的网络资源，反之亦然。")]),t._v(" "),n("li",[t._v("虚拟机与物理机之间的通信类似于它们连接到一个交换机上，可以实现相互访问而不干扰。")]),t._v(" "),n("li",[t._v("虚拟机的IP地址需要与物理机在同一个网段内，如果虚拟机需要联网，则网关与DNS需要与物理机的网卡保持一致。")]),t._v(" "),n("li",[t._v("桥接模式的优点是提供了最大的灵活性和网络访问权限，但缺点是可能会消耗更多的IP资源，如果网络环境对IP管理比较严格，则不太适用。")])])]),t._v(" "),n("li",[n("strong",[t._v("网络地址转换模式（NAT）")]),t._v("：\n"),n("ul",[n("li",[t._v("NAT模式允许虚拟机通过物理机的网卡访问外部网络，同时保护虚拟机的IP地址不被外部网络直接访问。")]),t._v(" "),n("li",[t._v("在这种模式下，虚拟机通过物理机的NAT功能进行网络地址转换，实现与外部网络的通信。")]),t._v(" "),n("li",[t._v("NAT模式的优点是节省IP资源，适用于网络环境对IP管理较严格的情况，缺点是虚拟机的网络访问可能受到一定的限制。")])])]),t._v(" "),n("li",[n("strong",[t._v("仅主机模式（Host-Only）")]),t._v("：\n"),n("ul",[n("li",[t._v("仅主机模式创建了一个封闭的虚拟网络，其中只包含主机和虚拟机之间的通信。")]),t._v(" "),n("li",[t._v("在这种模式下，虚拟机只能与主机进行通信，无法访问外部网络。")]),t._v(" "),n("li",[t._v("适用于需要隔离虚拟机与外部网络的场景，例如内部测试或开发环境。")])])])]),t._v(" "),n("h3",{attrs:{id:"centos7安装及配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装及配置"}},[t._v("#")]),t._v(" Centos7安装及配置")]),t._v(" "),n("p",[t._v("点击查看"),n("a",{attrs:{href:"https://www.runoob.com/w3cnote/vmware-install-centos7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMware安装Centos7超详细过程"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("在CentOS 7系统中，网络设置涉及多个方面，包括网络模式选择、静态IP配置、动态IP配置（使用DHCP）、以及网络服务的重启和验证。以下是一些关键步骤和考虑因素：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("网络模式选择：VMware支持三种虚拟机网络模式：桥接模式、网络地址转换模式、仅主机模式。每种模式都有其特定的用途和限制。例如，桥接模式允许虚拟机与宿主机在同一网段内，可以访问外部网络；网络地址转换模式则通过虚拟机的NAT功能访问外部网络，但无法直接访问局域网内的其他机器。")])]),t._v(" "),n("li",[n("p",[t._v("静态IP配置：若要为CentOS 7系统分配一个固定的IP地址，需要编辑网络配置文件"),n("code",[t._v("/etc/sysconfig/network-scripts/ifcfg-<interface_name>")]),t._v("，其中<interface_name>是网络接口名称。在文件中添加或修改以下配置信息：")]),t._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DEVICE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<interface_name>\t\t# 网卡名称")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"Ethernet" \t\t\t# 网卡类型-以太网卡')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ONBOOT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"yes"\t\t\t\t# 是否启动该网卡，CentOS系统安装后默认是no，需要改成yes')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("BOOTPROTO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"static"\t\t\t# 获取IP地址的方式，默认是DHCP服务器分配，如果需要手动设置，改为none或static')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPADDR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<desired_ip_address>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("NETMASK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<subnet_mask>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("GATEWAY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<default_gateway>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DNS1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<primary_DNS_server>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DNS2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("<secondary_DNS_server>")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("保存文件后，重启网络服务以应用新的网络配置。")])]),t._v(" "),n("li",[n("p",[t._v("动态IP配置（使用DHCP）：若要使用DHCP自动获取IP地址，编辑相同的网络配置文件，并删除或注释掉IPADDR、NETMASK和GATEWAY行，确保它们不再生效。保存文件后，重启网络服务以应用新的网络配置。")])]),t._v(" "),n("li",[n("p",[t._v("重启网络服务：完成配置后，需要重启网络服务以使更改生效。可以使用命令"),n("code",[t._v("systemctl restart network")]),t._v("或"),n("code",[t._v("service network restart")]),t._v("来重启网络服务。")])]),t._v(" "),n("li",[n("p",[t._v("验证网络连接：完成配置和重启后，应使用ping命令检查网络连接。例如，ping网关IP地址或尝试访问外部网站以验证网络连接是否正常。")])])]),t._v(" "),n("p",[t._v("如果想让系统有一个可以上网的IP地址，但又没有DHCP服务器分配，就需要手动静态配置IP地址。在Linux中分为临时配置和永久配置，临时配置是指重启后就恢复原来的设置，一般作为调试故障用。永久配置在命令提示符之后输入：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先使用 ifconfig 命令查看IP地址，确定网卡名称（网络接口名称）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后使用 /etc/sysconfig/network-scripts/ifcfg-<interface_name> 命令修改网卡配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("在文件中添加或修改以下配置信息：")]),t._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("NAME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"ens33" \t\t\t# 网卡名称')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DEVICE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"ens33" \t\t\t# 网卡名称')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"Ethernet" \t\t# 网卡类型-以太网卡')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ONBOOT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"yes"\t\t\t# 是否启动该网卡，CentOS系统安装后默认是no，需要改成yes')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("BOOTPROTO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"static"\t\t# 获取IP地址的方式，默认是DHCP服务器分配，如果需要手动设置，改为none或static')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("IPADDR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.1.10\t\t# 需要设置的IP地址")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("GATEWAY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.1.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("NETMASK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("255.255.255.0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DNS1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("114.114.114.114")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DNS2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("8.8.8.8")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("永久修改主机名")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("hostnamectl set-hostname new_hostname\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("编辑 /etc/hosts 文件，将127.0.0.1行的主机名修改为新主机名")]),t._v(" "),n("p",[t._v("编辑 /etc/profile 文件， 添加参数 "),n("code",[t._v('export PS1="[\\u@\\H \\W]\\$"')]),t._v(" ， 执行 "),n("code",[t._v("source !$")]),t._v(" 命令使参数立即生效，解决主机名显示不全的问题。")]),t._v(" "),n("p",[t._v("重启服务器")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("检查IP和主机名")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查主机名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示网卡IP信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr show\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示网卡IP信息")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证网络连接")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" baidu.com\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" 宿主机IP\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h3",{attrs:{id:"ubuntu18安装及配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu18安装及配置"}},[t._v("#")]),t._v(" Ubuntu18安装及配置")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://releases.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://releases.ubuntu.com/"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://packages.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://packages.ubuntu.com/"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y vim*\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("修改网卡配置 "),n("code",[t._v("vim /etc/network/interfaces")]),t._v(" 手动静态配置IP地址，在文件中添加或修改以下配置信息：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# interfaces(5) file used by ifup(8) and ifdown(8)\nauto lo\niface lo inet loopback\n\nauto ens33\niface ens33 inet static\naddress 192.168.1.29\nnetmask 255.255.255.0\ngateway 192.168.1.1\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("修改DNS配置文件 "),n("code",[t._v("vim /etc/systemd/resolved.conf")]),t._v(" ，解决ping baidu.com不通")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[Resolve]\nDNS=8.8.8.8 114.114.114.114\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("重启域名解析服务")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("systemctl restart systemd-resolved\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" systemd-resolved\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h2",{attrs:{id:"linux-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[t._v("#")]),t._v(" Linux 常用命令")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.runoob.com/linux/linux-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/linux/linux-command-manual.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Linux基本命令格式如下：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arguments\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("可以使用 "),n("code",[t._v("command --help")]),t._v(" 或者 "),n("code",[t._v("man command")]),t._v(" 查看 options、arguments 的用法，例如：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" --help\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("man")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("注意：CentOS最小化安装默认没有安装man手册，如果需要使用man手册，必须安装man-pages这个包。")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" man-pages\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"帮助命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[t._v("#")]),t._v(" 帮助命令")]),t._v(" "),n("p",[t._v("通过man获取某条指令的使用手册，如：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("man")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("man常用键及用途")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("按键")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Space")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("向下翻页")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("PgDn")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("向下一行")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("PgUp")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("向上一行")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("/")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("从上至下搜索某个关键词，如“/linux”")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("？")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("从下至上搜索某个关键词，如“?linux”")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("n")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("定位到下一个搜索到的关键词")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("定位到上一个搜索到的关键词")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("q")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("退出帮助文档")])])])]),t._v(" "),n("h3",{attrs:{id:"ip-主机名-域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ip-主机名-域名"}},[t._v("#")]),t._v(" IP/主机名/域名")]),t._v(" "),n("p",[t._v("Linux "),n("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-ifconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifconfig"),n("OutboundLink")],1),t._v("命令用于显示或设置网络设备。")]),t._v(" "),n("p",[t._v("ifconfig可设置网络设备的状态，或是显示目前的设置。")]),t._v(" "),n("p",[t._v("Linux "),n("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-ip.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ip"),n("OutboundLink")],1),t._v(" 命令与 "),n("a",{attrs:{href:"https://www.runoob.com/linux/linux-comm-ifconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ifconfig"),n("OutboundLink")],1),t._v(" 命令类似，但比 ifconfig 命令更加强大，主要功能是用于显示或设置网络设备。")]),t._v(" "),n("p",[t._v("ip 命令是 Linux 加强版的的网络配置工具，用于代替 ifconfig 命令。")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示网卡IP信息")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr show\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示网卡IP信息")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给eth0网卡配置IP地址")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" eth0 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.56\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给eth0网卡配置IP地址,并加上子掩码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" eth0 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.56 netmask "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给eth0网卡配置IP地址,加上子掩码,加上个广播地址")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" eth0 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.56 netmask "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 broadcast "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.255\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("使用 "),n("code",[t._v("hostname")]),t._v(" 命令或者 "),n("code",[t._v("cat /etc/hostname")]),t._v(" 命令查看当前主机名")]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("hostname new_hostname")]),t._v(" 命令临时更改主机名，仅当前会话期间有效（下次重启会恢复原主机名）")]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("hostnamectl set-hostname new_hostname")]),t._v(" 命令或者 "),n("code",[t._v("vim /etc/hostname")]),t._v(" 永久更改主机名")]),t._v(" "),n("p",[t._v("编辑 /etc/hostname 文件，将原有的主机名替换成新主机名即可")]),t._v(" "),n("p",[t._v("编辑 /etc/hosts 文件，将127.0.0.1行的主机名修改为新主机名即可")]),t._v(" "),n("h3",{attrs:{id:"防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看防火墙状态")]),t._v("\nsystemctl status firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启防火墙")]),t._v("\nsystemctl start firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂时关闭防火墙")]),t._v("\nsystemctl stop firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 永久关闭防火墙")]),t._v("\nsystemctl disable firewalld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启防火墙")]),t._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" firewalld\nsystemctl restart firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已经开放的端口号")]),t._v("\nfirewall-cmd --list-all\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定端口号是否已经开放")]),t._v("\nfirewall-cmd --query-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("端口号/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开放指定端口号")]),t._v("\nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("端口号/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭指定端口号")]),t._v("\nfirewall-cmd --permanent --remove-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("端口号/tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新载入配置")]),t._v("\nfirewall-cmd --reload\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("h3",{attrs:{id:"磁盘管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[t._v("#")]),t._v(" 磁盘管理")]),t._v(" "),n("h4",{attrs:{id:"df"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#df"}},[t._v("#")]),t._v(" df")]),t._v(" "),n("p",[t._v("df（英文全拼：disk free） 命令用于显示目前在 Linux 系统上的文件系统磁盘使用情况统计。")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("选项：")]),t._v(" "),n("p",[t._v("-l, --local：仅显示本地文件系统。")]),t._v(" "),n("p",[t._v("-h, --human-readable：以人类可读的格式显示输出结果。")]),t._v(" "),n("h2",{attrs:{id:"linux-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-配置文件"}},[t._v("#")]),t._v(" Linux 配置文件")]),t._v(" "),n("h3",{attrs:{id:"etc-hosts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etc-hosts"}},[t._v("#")]),t._v(" /etc/hosts")]),t._v(" "),n("p",[t._v("/etc/hosts：主机名查询静态表，是ip地址与域名快速解析的文件。ip地址与主机名之间的映射，包括主机的别名。")]),t._v(" "),n("p",[t._v("通常将常用的域名和ip地址映射加入到hosts文件中，实现快速方便的访问。")]),t._v(" "),n("p",[t._v("如果没有域名解析（DNS），操作系统需要查询该文件来解析对应主机名的ip地址；")]),t._v(" "),n("p",[t._v("如果有域名解析（DNS），也可以设置该文件，优先级为： DNS缓存 > /etc/hosts > DNS服务。")]),t._v(" "),n("p",[t._v("文件格式解析：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("IP　　主机名 域名 主机别名（一个IP有多个名字，可用空格隔离）\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("主机名：通常在局域网内使用，通过hosts文件，主机名被解析到对应的ip")]),t._v(" "),n("p",[t._v("域名：通常在互联网上使用，但是优先级低于hosts文件中内容，因此如果你不想使用互联网上的域名解析，可以更改自己的hosts文件，加入自己的域名解析")]),t._v(" "),n("h2",{attrs:{id:"linux-安装目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装目录"}},[t._v("#")]),t._v(" Linux 安装目录")]),t._v(" "),n("p",[t._v("在Linux系统中，第三方软件通常安装在 /usr/local、/opt 或者用户的家目录下的 local 或 application 文件夹中。以下是一些常见的第三方软件安装路径：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("/usr/local：通常用于安装手动编译的软件或者用户自行编译的软件包。")])]),t._v(" "),n("li",[n("p",[t._v("/opt：用于安装额外的软件包，这些软件包可能存在于非标准位置，且可能需要额外的配置才能使用。")])]),t._v(" "),n("li",[n("p",[t._v("用户家目录下的 local 或 application 文件夹：用于安装用户级别的第三方软件，不需要特定权限即可安装和使用。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);