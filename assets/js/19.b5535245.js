(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{648:function(s,t,n){s.exports=n.p+"assets/img/20210324135135.596fb983.png"},649:function(s,t,n){s.exports=n.p+"assets/img/20210324161309.7d47562d.png"},650:function(s,t,n){s.exports=n.p+"assets/img/20210324161327.68585584.png"},745:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"zookeeper-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-简介"}},[s._v("#")]),s._v(" zookeeper 简介")]),s._v(" "),a("p",[a("strong",[s._v("zookeeper")]),s._v("，基于"),a("strong",[s._v("观察者模式")]),s._v("设计的"),a("strong",[s._v("分布式协调框架")]),s._v("，负责存储和管理大家关心的数据，核心是"),a("strong",[s._v("文件系统+通知机制")]),s._v("。")]),s._v(" "),a("p",[s._v("zookeeper有几个重要的概念：")]),s._v(" "),a("p",[a("strong",[s._v("数据结构")]),s._v("：文件系统的数据结构，每个节点称为一个ZNode，每个ZNode通过其路径进行唯一标识，默认能够存储1M数据。")]),s._v(" "),a("img",{attrs:{src:n(648)}}),s._v(" "),a("p",[a("strong",[s._v("节点类型")]),s._v("：持久节点、临时节点、顺序节点。")]),s._v(" "),a("p",[a("strong",[s._v("工作状态")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("LOOKING：竞选状态。寻找Leader中")]),s._v(" "),a("li",[s._v("FOLLOWING：跟从状态。当前服务器角色是Follower")]),s._v(" "),a("li",[s._v("LEADING：领导状态。当前服务器角色是Leader")]),s._v(" "),a("li",[s._v("OBSERVING：观察状态。当前服务器角色是Observer")])]),s._v(" "),a("p",[a("strong",[s._v("选举机制")]),s._v("：全新集群选举和非全新集群选举")]),s._v(" "),a("p",[s._v("全新集群选举，是指服务器集群首次启动时的选举，服务器能否成为Leader跟myid的数值有关，遵循"),a("strong",[s._v("过半机制")]),s._v("。")]),s._v(" "),a("p",[s._v("非全新集群选举，是指服务器集群在运行期间，如果Leader宕机了，Follower重新选举Leader。依次比较逻辑时钟（选举次数）、数据ID（反应保存数据的新旧程度）、服务器ID（myid）。")]),s._v(" "),a("p",[a("strong",[s._v("写入数据")]),s._v("：同样遵循“"),a("strong",[s._v("过半机制")]),s._v("”。任意一台服务器收到客户端写请求，都会将写请求转发给Leader，由Leader发起写提议，接着Leader和Follower们进行写操作，Follower写完后将结果返回Leader，如果超过一半机器写成功，则Leader认为写成功，并且将结果知会转发请求的源机器，源机器再返回客户端。")]),s._v(" "),a("p",[a("strong",[s._v("监听原理")]),s._v("：主线程（Main）创建ZK客户端，这时会创建两个线程，一个线程负责网络连接通信（connet），两个线程负责监听（listener）。通过connet将注册的监听事件发给ZK，ZK监听到数据或路径有变化时通知listener，listener调用process方法。")]),s._v(" "),a("h2",{attrs:{id:"zookeeper-安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-安装部署"}},[s._v("#")]),s._v(" zookeeper 安装部署")]),s._v(" "),a("p",[s._v("zookeeper安装部署比较简单。将压缩包解压，然后修改下配置文件即可，配置文件需要将 "),a("code",[s._v("conf/zoo_sample.cfg")]),s._v("复制并重命名为 "),a("code",[s._v("conf/zoo.cfg")]),s._v(" 。")]),s._v(" "),a("p",[s._v("安装部署有三种方式：本地模式（单机）、伪分布式模式（单机不同端口）、分布式模式。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("本地模式安装部署")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压安装包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf apache-zookeeper-3.6.2-bin.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" apache-zookeeper-3.6.2-bin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入配置目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" zoo_sample.cfg zoo.cfg\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" zoo.cfg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("zoo.cfg")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of milliseconds of each tick")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通信心跳数，单位毫秒。用于心跳机制，服务器之间或服务器与客户端之间维持心跳的时间间隔")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tickTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("2000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that the initial ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# synchronization phase can take")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群中LF初始连接时的通信时限 = tickTime * initLimit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("initLimit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("10")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of ticks that can pass between ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sending a request and getting an acknowledgement")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群中LF最大同步通信时限 = tickTime * syncLimit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("syncLimit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("5")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the directory where the snapshot is stored.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do not use /tmp for storage, /tmp here is just ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example sakes.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据快照存储目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/opt/zookeeper/apache-zookeeper-3.6.2-bin/data")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the port at which the clients will connect")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端连接端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("clientPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("2181")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the maximum number of client connections.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# increase this if you need to handle more clients")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#maxClientCnxns=60")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Be sure to read the maintenance section of the ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# administrator guide before turning on autopurge.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The number of snapshots to retain in dataDir")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.snapRetainCount=3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Purge task interval in hours")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set to "0" to disable auto purge feature')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#autopurge.purgeInterval=1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Metrics Providers")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://prometheus.io Metrics Exporter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metricsProvider.httpPort=7000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("分布式模式安装部署")]),s._v("，集群模式服务器数量一般是奇数！")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("dataDir=/opt/zookeeper/apache-zookeeper-3.6.2-bin/data")]),s._v("目录下新建文件 "),a("code",[s._v("myid")]),s._v("，并写入一个数字。该数字用于"),a("strong",[s._v("选举机制")]),s._v("，一般来说，数字越大的，成为Leader的概率越高。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/zookeeper/apache-zookeeper-3.6.2-bin/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" myid\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" myid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("zoo.cfg")]),s._v(" 增加如下内容：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 集群配置，格式：server.A=B:C:D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A表示myid里面的数字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# B表示服务器ip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C表示LF交换信息的端口号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# D表示L宕机了，F们需要重新选举时通信的端口号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.66.133:2888:3888")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.66.134:2888:3888")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.66.135:2888:3888")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("建立主机与IP之间的映射关系")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hosts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4 192.168.66.134\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6 192.168.66.134\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("配置集群时，记得建立主机与IP之间的映射关系，并关闭防火墙或者开放对应端口号！！！")])]),s._v(" "),a("img",{attrs:{src:n(649)}}),s._v(" "),a("img",{attrs:{src:n(650)}}),s._v(" "),a("h2",{attrs:{id:"zookeeper-基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-基本操作"}},[s._v("#")]),s._v(" zookeeper 基本操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\n./zkServer.sh status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n./zkServer.sh start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n./zkServer.sh restart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\n./zkServer.sh stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接客户端")]),s._v("\n./zkCli.sh\n./zkCli.sh -server ip:port\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出客户端")]),s._v("\nquit\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建节点")]),s._v("\ncreate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t ttl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("acl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改节点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-v version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" path data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除节点")]),s._v("\ndelete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-v version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" path\ndeleteall path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-b batch size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取节点")]),s._v("\nget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" path\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出节点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" path\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("zookeeper官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3cschool.cn/zookeeper/",target:"_blank",rel:"noopener noreferrer"}},[s._v("w3cschool - Zookeeper 教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1PW411r7iP",target:"_blank",rel:"noopener noreferrer"}},[s._v("尚硅谷Zookeeper教程(zookeeper框架精讲)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);