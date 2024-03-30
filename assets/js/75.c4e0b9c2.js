(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{725:function(e,n,t){"use strict";t.r(n);var r=t(7),s=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("SSH（Secure Shell）是一种能够以安全方式提供远程登录的协议，也是目前远程管理Linux系统的首选方式。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.openssh.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSSH"),t("OutboundLink")],1),e._v(" 是 SSH 协议的免费开源实现。")]),e._v(" "),t("p",[e._v("OpenSSH is the premier connectivity tool for remote login with the SSH protocol. It encrypts all traffic to eliminate eavesdropping, connection hijacking, and other attacks. In addition, OpenSSH provides a large suite of secure tunneling capabilities, several authentication methods, and sophisticated configuration options.")]),e._v(" "),t("p",[e._v("The OpenSSH suite consists of the following tools:")]),e._v(" "),t("ul",[t("li",[e._v("Remote operations are done using "),t("a",{attrs:{href:"https://man.openbsd.org/ssh.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://man.openbsd.org/scp.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("scp"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://man.openbsd.org/sftp.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("sftp"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Key management with "),t("a",{attrs:{href:"https://man.openbsd.org/ssh-add.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-add"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://man.openbsd.org/ssh-keysign.8",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-keysign"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://man.openbsd.org/ssh-keyscan.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-keyscan"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://man.openbsd.org/ssh-keygen.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-keygen"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("The service side consists of "),t("a",{attrs:{href:"https://man.openbsd.org/sshd.8",target:"_blank",rel:"noopener noreferrer"}},[e._v("sshd"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://man.openbsd.org/sftp-server.8",target:"_blank",rel:"noopener noreferrer"}},[e._v("sftp-server"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://man.openbsd.org/ssh-agent.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-agent"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("sshd是基于SSH协议开发的一款远程管理服务程序，提供两种安全认证方式：")]),e._v(" "),t("ul",[t("li",[e._v("基于密码的认证：用账号密码来验证登录。")]),e._v(" "),t("li",[e._v("基于密钥的认证（免密登录）：在本地生成密钥对，然后把密钥对的公钥上传到服务器，并与服务器的公钥进行比较。")])]),e._v(" "),t("p",[e._v("sshd服务的配置信息保存在/etc/ssh/sshd_config文件中。")]),e._v(" "),t("p",[e._v("要配置SSH服务器，可以按照以下步骤进行操作：")]),e._v(" "),t("ol",[t("li",[e._v("安装OpenSSH软件包（通常在Linux系统中已经默认安装）。")]),e._v(" "),t("li",[e._v('打开SSH服务的配置文件，该文件位于/etc目录下，名为"sshd_config"。')]),e._v(" "),t("li",[e._v("使用编辑器（比如vi或nano）打开sshd_config文件并修改相关设置。")]),e._v(" "),t("li",[e._v("确保以下选项被正确地配置：\n"),t("ul",[t("li",[e._v("Port：指定SSH连接所使用的端口号，默认为22。")]),e._v(" "),t("li",[e._v("PermitRootLogin：控制root用户登录的权限，建议将其设置为no，然后创建一个新的非特权用户来管理服务器。")]),e._v(" "),t("li",[e._v("PasswordAuthentication：若需要密码身份验证，则将此选项设置为yes；否则，应将其设置为no，只能使用公钥身份验证。")])])]),e._v(" "),t("li",[e._v("根据需求添加其他自定义配置，比如更改日志记录路径、调整最大连接数等。")]),e._v(" "),t("li",[e._v("保存并关闭sshd_config文件。")]),e._v(" "),t("li",[e._v("重新启动SSH服务，命令取决于不同的操作系统版本：\n"),t("ul",[t("li",[e._v("Ubuntu / Debian：sudo service ssh restart")]),e._v(" "),t("li",[e._v("CentOS / RHEL：sudo systemctl restart sshd")])])]),e._v(" "),t("li",[e._v("确保防火墙允许SSH流量通过所配置的端口。")]),e._v(" "),t("li",[e._v("现在，您的SSH服务器就已成功配置完成了！")])]),e._v(" "),t("p",[e._v("注意事项：")]),e._v(" "),t("ul",[t("li",[e._v("在生产环境中，建议使用公钥身份验证而不是密码身份验证，这样更安全。")]),e._v(" "),t("li",[e._v("对于高度安全性要求的情况，还可以考虑使用SSH隧道技术（如VPN）来提供更多的网络安全性。")])])])}),[],!1,null,null,null);n.default=s.exports}}]);