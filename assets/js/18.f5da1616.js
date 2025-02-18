(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{607:function(a,s,t){a.exports=t.p+"assets/img/20220120103041.62c7aa90.jpg"},608:function(a,s,t){a.exports=t.p+"assets/img/20220120115815.1d7b67ff.jpg"},609:function(a,s,t){a.exports=t.p+"assets/img/20211009231107.c78f06ad.png"},718:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在Oracle官网的"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Downloads"),e("OutboundLink")],1),a._v("可以下载最新版本的jdk")]),a._v(" "),e("p",[a._v("在Oracle官网的"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Archive"),e("OutboundLink")],1),a._v("可以下载各种版本的jdk")]),a._v(" "),e("p",[a._v("下载"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java SE 17"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("下载"),e("a",{attrs:{href:"https://download.oracle.com/java/17/archive/jdk-17.0.1_windows-x64_bin.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java SE Development Kit 17.0.1 - Windows x64 Compressed Archive"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("下载JDK源码：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://jdk.java.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://jdk.java.net/"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://jdk.java.net/20/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://jdk.java.net/20/"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"windows系统安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows系统安装jdk"}},[a._v("#")]),a._v(" Windows系统安装JDK")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("下载["),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"}},[a._v("jdk-8u321-windows-x64.exe"),e("OutboundLink")],1),a._v("]")]),a._v(" "),e("p",[e("img",{attrs:{src:t(607),alt:""}})])]),a._v(" "),e("li",[e("p",[a._v("双击运行，安装到指定路径")])]),a._v(" "),e("li",[e("p",[a._v("配置环境变量")])])]),a._v(" "),e("p",[a._v("​\t\t3.1 新建 JAVA_HOME 环境变量，指向JDK安装目录")]),a._v(" "),e("p",[a._v("​\t\t3.2 编辑 Path 环境变量，添加 %JAVA_HOME%\\bin")]),a._v(" "),e("p",[a._v("​\t\t3.3 如果是 JDK8 ，Path环境变量需要添加 %JAVA_HOME%\\bin 和 %JAVA_HOME%\\jre\\bin")]),a._v(" "),e("h2",{attrs:{id:"linux系统安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux系统安装jdk"}},[a._v("#")]),a._v(" Linux系统安装JDK")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载JDK"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("img",{attrs:{src:t(608),alt:""}})]),a._v(" "),e("p",[a._v("卸载已安装的JDK")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询使用rpm命令安装的JDK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" jdk\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载使用rpm命令安装的JDK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.7.0-openjdk-headless-1.7.0.261-2.6.22.2.el7_8.x86_64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps copy-jdk-configs-3.3-10.el7_5.noarch\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.8.0-openjdk-headless-1.8.0.262.b10-1.el7.x86_64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.8.0-openjdk-1.8.0.262.b10-1.el7.x86_64\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e --nodeps java-1.7.0-openjdk-1.7.0.261-2.6.22.2.el7_8.x86_64\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询使用tar命令安装的JDK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" java\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载使用tar命令安装的JDK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /usr/local/jdk1.8.0_321/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("p",[a._v("使用rpm命令安装jdk")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh jdk-8u321-linux-x64.rpm\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("使用tar命令安装jdk")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-8u321-linux-x64.tar.gz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("配置环境变量 "),e("code",[a._v("vi /etc/profile")]),a._v(" 添加以下内容")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("JAVA_HOME=/usr/local/jdk1.8.0_321\nCLASSPATH=$JAVA_HOME/lib:$JAVA_HOME/jre/lib\nPATH=$PATH:$JAVA_HOME/bin:$JAVA_HOME/jre/bin\nexport PATH CLASSPATH JAVA_HOME\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("使环境变量立即生效")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"同一台电脑配置多版本jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同一台电脑配置多版本jdk"}},[a._v("#")]),a._v(" 同一台电脑配置多版本JDK")]),a._v(" "),e("p",[a._v("多版本JDK，配置 JAVA_8_HOME、JAVA_17_HOME，将 JAVA_HOME 指向 %JAVA_X_HOME%")]),a._v(" "),e("p",[a._v("执行 java -version 结果可能不是我们预期的，这是因为在 JDK 安装时会自动将 Java.exe，javaw.exe，javaws.exe 复制到 C 盘，可以在 cmd 中使用 where java 查看它们的位置并删除，然后重新打开一个cmd，执行 java -version")]),a._v(" "),e("img",{attrs:{src:t(609)}}),a._v(" "),e("h2",{attrs:{id:"查看系统是否安装jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看系统是否安装jdk"}},[a._v("#")]),a._v(" 查看系统是否安装JDK")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@java jdk1.8.0_321"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# java -version")]),a._v("\njava version "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_321"')]),a._v("\nJava"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" SE Runtime Environment "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_321-b07"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nJava HotSpot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.321")]),a._v("-b07, mixed mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@java jdk1.8.0_321"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# whereis java")]),a._v("\njava: /usr/local/jdk1.8.0_321/bin/java /usr/local/jdk1.8.0_321/jre/bin/java\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h2",{attrs:{id:"命令行窗口配置临时jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行窗口配置临时jdk"}},[a._v("#")]),a._v(" 命令行窗口配置临时JDK")]),a._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("path D:\\Java\\jdk"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("11"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("13\\bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);