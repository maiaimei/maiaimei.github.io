(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{612:function(t,a,e){t.exports=e.p+"assets/img/20210307141420.f336dbea.png"},613:function(t,a,e){t.exports=e.p+"assets/img/20201013101602937.59898be4.png"},614:function(t,a,e){t.exports=e.p+"assets/img/20230520165221467.c6ffb7e4.png"},615:function(t,a,e){t.exports=e.p+"assets/img/20210410215351.ecab41f9.png"},616:function(t,a,e){t.exports=e.p+"assets/img/20201013101713701.7922a7e0.png"},617:function(t,a,e){t.exports=e.p+"assets/img/20210307153547.5edb6af9.png"},717:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"java执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java执行流程"}},[t._v("#")]),t._v(" Java执行流程")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:e(612)}})]),t._v(" "),r("th",[r("img",{attrs:{src:e(613)}})])])]),t._v(" "),r("tbody")]),t._v(" "),r("h3",{attrs:{id:"编译期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译期"}},[t._v("#")]),t._v(" 编译期")]),t._v(" "),r("p",[t._v("创建完源文件之后，程序先要被 JVM中 的 Java 编译器进行编译为 .class 文件。Java 编译一个类时，如果这个类所依赖的类还没有被编译，编译器会自动的先编译这个所依赖的类，然后引用。如果 Java 编译器在指定的目录下找不到该类所依赖的类的 .class 文件或者 .java 源文件，就会报 “Cant found sysbol” 的异常错误。")]),t._v(" "),r("p",[t._v("编译后的字节码文件格式主要分为两部分：常量池和方法字节码。常量池记录的是代码出现过的（常量、类名、成员变量等）以及符号引用（类引用、方法引用，成员变量引用等）；方法字节码中放的是各个方法的字节码。")]),t._v(" "),r("h3",{attrs:{id:"运行期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行期"}},[t._v("#")]),t._v(" 运行期")]),t._v(" "),r("p",[t._v("Java 类运行的过程大概分为：类的加载和类的执行。需要说明的一点的是：JVM 并不是在运行时就会把所有使用到的类都加载到内存中，JVM主要在程序第一次运行时主动使用类的时候，才会立即去加载。")]),t._v(" "),r("p",[t._v("在 Java 中，JVM可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java程序无须重新编译便可在多种不同操作系统的计算机上运行。")]),t._v(" "),r("h2",{attrs:{id:"jvm内存模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[t._v("#")]),t._v(" JVM内存模型")]),t._v(" "),r("p",[r("img",{attrs:{src:e(614),alt:"20230520165221467"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:e(615)}})]),t._v(" "),r("th",[r("img",{attrs:{src:e(616)}})]),t._v(" "),r("th",[r("img",{attrs:{src:e(617)}})])])]),t._v(" "),r("tbody")]),t._v(" "),r("h3",{attrs:{id:"运行时常量池"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池"}},[t._v("#")]),t._v(" 运行时常量池")]),t._v(" "),r("p",[t._v("线程共享。")]),t._v(" "),r("p",[t._v('存放常量、"字符串"字面值等。')]),t._v(" "),r("h3",{attrs:{id:"方法区-method-area"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法区-method-area"}},[t._v("#")]),t._v(" 方法区（Method Area）")]),t._v(" "),r("p",[t._v("线程共享。")]),t._v(" "),r("p",[t._v("用于存储已经被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射。")]),t._v(" "),r("h3",{attrs:{id:"堆-heap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[t._v("#")]),t._v(" 堆（Heap）")]),t._v(" "),r("p",[t._v("线程共享。")]),t._v(" "),r("p",[t._v("所有的对象实例以及数组都要在堆上分配。")]),t._v(" "),r("h3",{attrs:{id:"虚拟机栈-vm-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈-vm-stack"}},[t._v("#")]),t._v(" 虚拟机栈（VM Stack）")]),t._v(" "),r("p",[t._v("线程私有。")]),t._v(" "),r("p",[t._v("为虚拟机执行Java方法服务。\n每个方法在执行的时候都会创建一个栈帧，栈帧包含：局部变量表、操作数栈、动态链接和返回地址。\n每个方法从调用到执行完毕，对应一个栈帧在虚拟机栈的入栈和出栈。\n局部变量表存放了编译期可知长度的各种基本数据类型（boolean、byte 、 short 、 int 、 long 、 float 、double、char）、对象引用（reference类型，它不等同于对象本身，是对象在堆内存的首地址）。 方法执行完，自动释放。\n如果线程请求的栈深度大于虚拟机所允许的深度，则会报StackOverflowError。\n如果虚拟机栈可以动态扩展，扩展到无法申请足够的内存，则会报OutOfMemoryError。")]),t._v(" "),r("h3",{attrs:{id:"程序计数器-pc寄存器、program-counter-register"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器-pc寄存器、program-counter-register"}},[t._v("#")]),t._v(" 程序计数器（PC寄存器、Program Counter Register）")]),t._v(" "),r("p",[t._v("线程私有，一小块内存区域，唯一一个不会报内存溢出的区域。\n如果线程正在执行Java方法，则程序计数器的值为当前正在执行的指令地址。\n如果线程正在执行Native方法，则程序计数器的值为undefined。")]),t._v(" "),r("p",[t._v("The Java Virtual Machine can support many threads of execution at once (JLS §17). Each Java Virtual Machine thread has its own pc (program counter) register. At any point, each Java Virtual Machine thread is executing the code of a single method, namely the current method (§2.6) for that thread. If that method is not native, the pc register contains the address of the Java Virtual Machine instruction currently being executed. If the method currently being executed by the thread is native, the value of the Java Virtual Machine's pc register is undefined. The Java Virtual Machine's pc register is wide enough to hold a returnAddress or a native pointer on the specific platform.")]),t._v(" "),r("h3",{attrs:{id:"本地方法栈-native-method-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈-native-method-stack"}},[t._v("#")]),t._v(" 本地方法栈（Native Method Stack）")]),t._v(" "),r("p",[t._v("线程私有，和虚拟机栈类似。\n为虚拟机执行Native方法服务。")])])}),[],!1,null,null,null);a.default=s.exports}}]);