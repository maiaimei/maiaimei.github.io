(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{660:function(a,t,v){a.exports=v.p+"assets/img/20240807225526.24414201.jpg"},661:function(a,t,v){a.exports=v.p+"assets/img/20240807225726.1b146567.jpg"},662:function(a,t,v){a.exports=v.p+"assets/img/20240807225914.bcd1d9b9.jpg"},755:function(a,t,v){"use strict";v.r(t);var e=v(7),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("FQDN，全称为“Fully Qualified Domain Name”，即完全限定域名。它是指一个域名系统中的完全限定名称，包括主机名和域名。在FQDN中，主机名和域名之间使用“.”（点）分隔。例如，www.example.com就是一个FQDN，其中www是主机名，example.com是域名，example是次级域名（SLD），com是顶级域名（TLD）。")]),a._v(" "),e("p",[a._v("FQDN在网络中用于唯一标识和寻址主机或服务。它在许多网络协议中使用，例如DNS（域名系统），HTTP（超文本传输协议）等。通过使用FQDN，可以确保在全球范围内唯一地标识和访问网络上的资源。")]),a._v(" "),e("p",[e("img",{attrs:{src:v(660),alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:v(661),alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:v(662),alt:""}})]),a._v(" "),e("h2",{attrs:{id:"dns记录类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns记录类型"}},[a._v("#")]),a._v(" DNS记录类型")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/eagle6688/p/17100030.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/eagle6688/p/17100030.html"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("DNS解析将域名指向IP地址，是互联网中的一项重要服务。由于业务场景不同，在设置DNS解析时，需要选择不同的记录类型。网站管理人员需要准确了解每一种DNS记录类型所代表的含义和用途，才能满足不同场景的解析需求。")]),a._v(" "),e("h3",{attrs:{id:"a记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a记录"}},[a._v("#")]),a._v(" A记录")]),a._v(" "),e("p",[a._v("A记录，Address record(IPv4)，是最常见和最常用的一种记录类型，用于指定主机名和IP（IPv4）地址之间的关系。通过添加A记录，网站管理者可以将域名与网站服务器地址进行绑定。")]),a._v(" "),e("p",[a._v("格式：[FQDN] IN A [IP地址]")]),a._v(" "),e("p",[a._v("例子：ns1.exmaple.com. IN A 192.168.0.1")]),a._v(" "),e("p",[a._v("查询：")]),a._v(" "),e("p",[a._v("nslookup -qt=A example.com (Windows)")]),a._v(" "),e("p",[a._v("nslookup -q=A example.com  ("),e("strong",[a._v("Linux，务必注意Linux下类型参数为-q而不是-qt，下同")]),a._v(")")]),a._v(" "),e("p",[a._v("A就是Address的首字母，这种记录就是将域名映射到一个IPv4地址上，这也是最常用的DNS记录类型。")]),a._v(" "),e("p",[a._v("A记录必须指向一个IP地址，不能指向另一个DNS记录。")]),a._v(" "),e("p",[a._v("此外，A记录还可用于email路由，比如一个域名的MX记录可以指向一个A记录，这个A记录指向该域名邮件服务器的IP地址。")]),a._v(" "),e("h3",{attrs:{id:"aaaa记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aaaa记录"}},[a._v("#")]),a._v(" AAAA记录")]),a._v(" "),e("p",[a._v("AAAA记录，Address record(IPv6)，是用于将域名解析到IPv6地址的一种DNS记录类型。国内很多解析服务器不支持AAAA记录的设置，如果想进行AAAA记录解析，就需要将域名的NS记录指向一些专业的域名解析厂商。")]),a._v(" "),e("p",[a._v("格式：[FQDN] IN AAAA [IP地址]")]),a._v(" "),e("p",[a._v("例子：ns1.exmaple.com. IN AAAA 8fe0::8f61:ac8:30cd:a16e")]),a._v(" "),e("p",[a._v("查询：nslookup -qt=AAAA example.com")]),a._v(" "),e("p",[a._v("与A记录类似，AAAA记录是将域名映射到IPv6地址上。")]),a._v(" "),e("h3",{attrs:{id:"cname记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cname记录"}},[a._v("#")]),a._v(" CNAME记录")]),a._v(" "),e("p",[a._v("CNAME记录，Canonical name record，也是比较常用的一种记录类型，它是主机名到主机名的映射。如果需要将域名指向另一个域名，而不是一个IP地址，那么就需要添加一条CNAME记录。在CDN、企业邮箱、全局流量管理等业务场景下，经常会使用到CNAME记录。")]),a._v(" "),e("p",[a._v("格式：[域名1別名] IN CNAME [域名1]")]),a._v(" "),e("p",[a._v("例子：sub.example.com. IN CNAME my.example.com.")]),a._v(" "),e("p",[a._v("查询：nslookup -qt=CNAME sub.example.com")]),a._v(" "),e("p",[a._v("CNAME记录就是别名记录，一个常用的例子是将短域名指向www域名，比如： example.com IN CNAME www.example.com")]),a._v(" "),e("h3",{attrs:{id:"ns记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ns记录"}},[a._v("#")]),a._v(" NS记录")]),a._v(" "),e("p",[a._v("NS记录用于将子域名交给其他DNS服务商解析时使用，从某种意义上来讲NS记录相当于设置子域名解析服务器的A记录，用于在解析请求时确定该服务器的IP地址。大多数域名注册商默认使用自己的NS记录来解析用户的域名，但用户也可以设置NS记录指向更专业安全的域名解析厂商。")]),a._v(" "),e("h3",{attrs:{id:"mx记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mx记录"}},[a._v("#")]),a._v(" MX记录")]),a._v(" "),e("p",[a._v("MX记录，Mail exchange record，是邮件交换记录，主要用于邮箱解析，在发送邮件时根据收件人的地址后缀进行邮件服务器的定位。MX记录的权重对邮件服务非常重要，发送邮件时，会先对域名进行解析，查找MX记录，按照权重从小到大的顺序联通服务器进行邮件发送。")]),a._v(" "),e("p",[a._v("格式：[FQDN] IN MX [优先级] [邮件服务器]")]),a._v(" "),e("p",[a._v("例子：")]),a._v(" "),e("p",[a._v("example.com. IN MX 10 mail.example.com")]),a._v(" "),e("p",[a._v("mail.example.com. IN A 10.8.0.1")]),a._v(" "),e("p",[a._v("查询：nslookup -qt=MX sub.example.com")]),a._v(" "),e("p",[a._v("MX记录是DNS中非常重要的一类记录，它用于email邮箱地址解析。如果没有配置example.com的MX记录，那么发往example.com域名的所有邮件均无法送达。")]),a._v(" "),e("p",[a._v("注意：")]),a._v(" "),e("p",[a._v("(1) MX记录中的优先级数值越低，它的优先级越高；")]),a._v(" "),e("p",[a._v("(2) 可以配置多个MX记录，邮件送达时首选优先级最高的邮件服务器，如果该邮件服务器不可用，则选择次高优先级的服务器。")]),a._v(" "),e("h3",{attrs:{id:"txt记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#txt记录"}},[a._v("#")]),a._v(" TXT记录")]),a._v(" "),e("p",[a._v("TXT记录，一般用于某个主机名的标识和说明，通过设置TXT记录可以使别人更方便地联系到你。此外TXT记录还常用于做SPF反垃圾邮件和SSL证书的DNS验证等。")]),a._v(" "),e("h3",{attrs:{id:"ptr记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ptr记录"}},[a._v("#")]),a._v(" PTR记录")]),a._v(" "),e("p",[a._v("PTR记录可以简单理解为A记录的反向记录，用于将一个IP地址指向对应的主机名，实现通过IP地址访问域名。")]),a._v(" "),e("h3",{attrs:{id:"soa记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#soa记录"}},[a._v("#")]),a._v(" SOA记录")]),a._v(" "),e("p",[a._v("SOA记录又叫起始授权机构记录，NS标记多台解析服务器，SOA记录用于表明在众多NS记录中哪一台才是主服务器。当要查询的域名在所有递归解析服务器中没有域名解析的缓存时，就会回源来请求此域名的SOA记录，获取提供权威解析服务的地址。")]),a._v(" "),e("h3",{attrs:{id:"srv记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srv记录"}},[a._v("#")]),a._v(" SRV记录")]),a._v(" "),e("p",[a._v("SRV记录即服务定位（SRV）资源记录，用于定义提供特定服务的服务器的位置，如主机（hostname），端口（port number）等。")]),a._v(" "),e("h3",{attrs:{id:"url转发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url转发"}},[a._v("#")]),a._v(" URL转发")]),a._v(" "),e("p",[a._v("URL转发，是将当前访问的域名指向另一个网络地址，可以分为显性转发和隐性转发两种。")]),a._v(" "),e("p",[a._v("显性URL：将域名指向另一个网络地址时，访问域名自动跳转至目标网址，地址栏显示为目标网站地址。")]),a._v(" "),e("p",[a._v("隐性URL：访问域名跳转到目标网站，但地址栏显示为原网站地址。")])])}),[],!1,null,null,null);t.default=_.exports}}]);