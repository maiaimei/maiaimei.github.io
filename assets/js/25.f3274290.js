(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{620:function(e,t,r){e.exports=r.p+"assets/img/20201110134001.c433f92e.jpg"},621:function(e,t,r){e.exports=r.p+"assets/img/20201110134002.fdc66a3f.jpg"},725:function(e,t,r){"use strict";r.r(t);var v=r(7),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"servlet-生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#servlet-生命周期"}},[e._v("#")]),e._v(" Servlet 生命周期")]),e._v(" "),v("p",[v("img",{attrs:{src:r(620),alt:""}})]),e._v(" "),v("p",[v("img",{attrs:{src:r(621),alt:""}})]),e._v(" "),v("p",[e._v("主要体现在三个方法上，init、service和destroy。")]),e._v(" "),v("h3",{attrs:{id:"初始化阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化阶段"}},[e._v("#")]),e._v(" 初始化阶段")]),e._v(" "),v("p",[e._v("Servlet容器加载Servlet，加载完成后，Servlet容器会创建一个Servlet实例，并调用init方法。init方法只会调用一次。Servlet容器会在以下几种情况下装载Servlet：")]),e._v(" "),v("p",[e._v("1、在Servlet容器启动时自动装载某些Servlet，如SpringBoot启动类做的事情；")]),e._v(" "),v("p",[e._v("2、在Servlet容器启动后，客户端首次向Servlet发送请求；")]),e._v(" "),v("p",[e._v("3、Servlet类文件被更新后，重新装载。")]),e._v(" "),v("h3",{attrs:{id:"处理客户端请求阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#处理客户端请求阶段"}},[e._v("#")]),e._v(" 处理客户端请求阶段")]),e._v(" "),v("p",[e._v("每收到一个客户端请求，服务器都会产生一个新的线程去处理。")]),e._v(" "),v("h3",{attrs:{id:"终止阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终止阶段"}},[e._v("#")]),e._v(" 终止阶段")]),e._v(" "),v("p",[e._v("当Servlet容器终止运行，或者Servlet重新装载Servlet新实例时，Servlet容器会调用Servlet的destroy方法，由JVM的垃圾回收器进行垃圾回收的。")]),e._v(" "),v("h2",{attrs:{id:"servlet-工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#servlet-工作原理"}},[e._v("#")]),e._v(" Servlet 工作原理")]),e._v(" "),v("p",[e._v("客户端发送一个请求，Servlet调用service方法对请求进行响应。")]),e._v(" "),v("p",[e._v("Servlet和GenericServlet是不特定于任何协议的，所以Servlet和GenericServlet接口中没有doGet、doPost等方法。")]),e._v(" "),v("p",[e._v("HttpServlet是特定于Http协议的，在service方法中，将ServletRequest，ServletResponse强转为HttpRequest和HttpResponse，最后调用自己的service方法去完成响应。service方法会对请求的方法进行匹配，进入相应的逻辑层，完成请求的响应。")]),e._v(" "),v("h2",{attrs:{id:"servlet-隐射路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#servlet-隐射路径"}},[e._v("#")]),e._v(" Servlet 隐射路径")]),e._v(" "),v("p",[e._v("隐射路径优先级：完全路径匹配 > 目录匹配 > 扩展命名匹配")])])}),[],!1,null,null,null);t.default=s.exports}}]);