(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{730:function(P,t,o){"use strict";o.r(t);var e=o(7),n=Object(e.a)({},(function(){var P=this,t=P.$createElement,o=P._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":P.$parent.slotKey}},[o("p",[o("strong",[P._v("什么是 SMTP/POP3/IMAP 服务")])]),P._v(" "),o("p",[P._v("SMTP （Simple Mail Transfer Protocol）简单邮件传输协议，用于支持使用电子邮件客户端发送电子邮件。端口号：25。")]),P._v(" "),o("p",[P._v("POP3 （Post Office Protocol - Version 3）协议用于支持使用电子邮件客户端获取并删除在服务器上的电子邮件。")]),P._v(" "),o("p",[P._v("IMAP （Internet Message Access Protocol）协议用于支持使用电子邮件客户端交互式存取服务器上的邮件。")]),P._v(" "),o("p",[o("strong",[P._v("POP 和 IMAP 有什么区别")])]),P._v(" "),o("p",[P._v("POP允许电子邮件客户端下载服务器上的邮件，但是你在电子邮件客户端上的操作（如：移动邮件、标记已读等）不会反馈到服务器上的。需要特别注意的是，第三方客户端通过POP收取邮件时，也是有可能同步删除服务端邮件。在第三方客户端设置 POP 时，请留意是否有 保留邮件副本/备份 相关选项。如有该选项，且要保留服务器上的邮件，请勾选该选项。")]),P._v(" "),o("p",[P._v("在IMAP协议上，电子邮件客户端的操作都会反馈到服务器上，你对邮件进行的操作（如：移动邮件、标记已读、删除邮件等）服务器上的邮件也会做相应的动作。也就是说，IMAP 是“双向”的。同时，IMAP 可以只下载邮件的主题，只有当你真正需要的时候，才会下载邮件的所有内容。")]),P._v(" "),o("p",[o("strong",[P._v("SMTP协议的工作过程")])]),P._v(" "),o("p",[P._v("(1)建立连接：在这一阶段，SMTP客户请求与服务器的25端口建立一个TCP连接。一旦连接建立，SMTP服务器和客户就开始相互通告自己的域名，同时确认对方的域名。")]),P._v(" "),o("p",[P._v("(2)邮件传送：利用命令，SMTP客户将邮件的源地址、目的地址和邮件的具体内容传递给SMTP服务器，SMTP服务器进行相应的响应并接收邮件。")]),P._v(" "),o("p",[P._v("(3)连接释放：SMTP客户发出退出命令，服务器在处理命令后进行响应，随后关闭TCP连接。")])])}),[],!1,null,null,null);t.default=n.exports}}]);