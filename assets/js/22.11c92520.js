(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{539:function(t,a,s){t.exports=s.p+"assets/img/20201122134001.0d972506.png"},582:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-基本概念与术语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本概念与术语"}},[t._v("#")]),t._v(" 1 基本概念与术语")]),t._v(" "),n("h3",{attrs:{id:"_1-1-进程与线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-进程与线程"}},[t._v("#")]),t._v(" 1.1 进程与线程")]),t._v(" "),n("p",[t._v("进程是操作系统分配资源的基本单位。线程是处理器任务调度和执行的基本单位。一个进程包含一个或多个线程。")]),t._v(" "),n("p",[t._v("进程是相互独立的，每个进程都有独立的代码和数据空间（程序上下文），进程的切换会有较大的开销。同一进程的线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换开销小。")]),t._v(" "),n("p",[t._v("一个进程崩溃后，一般不会影响到其他进程。一个线程崩溃可能会导致整个进程死掉。")]),t._v(" "),n("blockquote",[n("p",[t._v("举例：WPS是一个进程，我们在打字的同时，WPS可以进行拼写检查，打字跟拼写检查可以理解为两个线程。")])]),t._v(" "),n("h3",{attrs:{id:"_1-2-并行与并发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-并行与并发"}},[t._v("#")]),t._v(" 1.2 并行与并发")]),t._v(" "),n("p",[t._v("串行：在"),n("strong",[t._v("同一时刻")]),t._v("，有"),n("strong",[t._v("一个任务")]),t._v("在"),n("strong",[t._v("单个CPU")]),t._v("上"),n("strong",[t._v("依次执行")]),t._v("。")]),t._v(" "),n("p",[t._v("并行：在"),n("strong",[t._v("同一时刻")]),t._v("，有"),n("strong",[t._v("多个任务")]),t._v("在"),n("strong",[t._v("多个CPU")]),t._v("上"),n("strong",[t._v("同时执行")]),t._v("。")]),t._v(" "),n("p",[t._v("并发：在"),n("strong",[t._v("同一时刻")]),t._v("，有"),n("strong",[t._v("多个任务")]),t._v("在"),n("strong",[t._v("单个CPU")]),t._v("上"),n("strong",[t._v("交替执行")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"_1-3-线程调度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-线程调度"}},[t._v("#")]),t._v(" 1.3 线程调度")]),t._v(" "),n("h4",{attrs:{id:"_1-3-1-线程并发执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-线程并发执行"}},[t._v("#")]),t._v(" 1.3.1 线程并发执行")]),t._v(" "),n("p",[t._v("计算机中的CPU，在任意时刻只能执行一条机器指令，每个线程只有获得CPU的使用权才能执行代码。各个线程轮流获得CPU的使用权，分别执行各自的任务。")]),t._v(" "),n("h4",{attrs:{id:"_1-3-2-线程调度模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-线程调度模型"}},[t._v("#")]),t._v(" 1.3.2 线程调度模型")]),t._v(" "),n("p",[t._v("分时调度模型：所有线程轮流使用CPU的使用权，平均分配每个线程占用CPU时间片。\n抢占式调度模型：优先让优先级高的线程使用CPU，如果线程的优先级相同，那么会随机选取一个，优先级高的线程获取CPU的时间片相对多一些。")]),t._v(" "),n("h3",{attrs:{id:"_1-4-可重入锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-可重入锁"}},[t._v("#")]),t._v(" 1.4 可重入锁")]),t._v(" "),n("p",[t._v("JVM允许同一个线程重复获取同一个锁，被同一个线程反复获取的锁，叫做可重入锁。")]),t._v(" "),n("h3",{attrs:{id:"_1-5-死锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-死锁"}},[t._v("#")]),t._v(" 1.5 死锁")]),t._v(" "),n("p",[t._v("线程死锁，是由于两个或更多的线程互相持有对方所需要的资源，导致这些线程处于等待状态，无法继续执行。")]),t._v(" "),n("p",[t._v("死锁是因为锁的嵌套产生的，所以避免死锁的根本就是要避免锁的嵌套。多线程获取锁的顺序要一致。")]),t._v(" "),n("h2",{attrs:{id:"_2-创建线程的方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建线程的方式"}},[t._v("#")]),t._v(" 2 创建线程的方式")]),t._v(" "),n("h3",{attrs:{id:"_2-1-继承thread类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-继承thread类"}},[t._v("#")]),t._v(" 2.1 继承Thread类")]),t._v(" "),n("p",[t._v("继承Thread类，并重写run方法。")]),t._v(" "),n("h3",{attrs:{id:"_2-2-实现runnable接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实现runnable接口"}},[t._v("#")]),t._v(" 2.2 实现Runnable接口")]),t._v(" "),n("p",[t._v("实现Runnable接口，并重写run方法。")]),t._v(" "),n("h3",{attrs:{id:"_2-3-实现callable接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实现callable接口"}},[t._v("#")]),t._v(" 2.3 实现Callable接口")]),t._v(" "),n("p",[t._v("实现Callable接口，并重写call方法。")]),t._v(" "),n("p",[t._v("call方法有返回值的，可以抛出异常。Callable接口支持泛型。实现Callable接口的派生类需要结合FutureTask一起使用。")]),t._v(" "),n("p",[t._v("JDK5新增的。")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("Future可以对Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等。")]),t._v(" "),n("li",[t._v("FutureTask是Future接口唯一的实现类")]),t._v(" "),n("li",[t._v("FutureTask同时实现了Runnable、Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值。")])])]),t._v(" "),n("h3",{attrs:{id:"_2-4-线程池"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-线程池"}},[t._v("#")]),t._v(" 2.4 线程池")]),t._v(" "),n("p",[t._v("提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中。可以避免频繁创建销毁，实现重复利用。")]),t._v(" "),n("p",[t._v("JDK5新增的。")]),t._v(" "),n("p",[t._v("ExecutorService接口 + Executors工具类")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建固定大小的线程池")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提交任务")]),t._v("\nexecutorService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutorService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h2",{attrs:{id:"_3-线程的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程的生命周期"}},[t._v("#")]),t._v(" 3 线程的生命周期")]),t._v(" "),n("p",[n("img",{attrs:{src:s(539),alt:""}})]),t._v(" "),n("p",[t._v("1、当new Thread时，线程处于新建状态；")]),t._v(" "),n("p",[t._v("2、当调用start方法时或sleep方法时间到/阻塞结束，线程处于就绪状态；")]),t._v(" "),n("p",[t._v("3、当线程抢到CPU的执行权时，线程处于运行状态；")]),t._v(" "),n("p",[t._v("4、当线程执行到sleep方法或其他阻塞方法时，线程处于阻塞状态；")]),t._v(" "),n("p",[t._v("5、当run方法结束时，线程处于死亡状态。")]),t._v(" "),n("h2",{attrs:{id:"_4-线程的安全问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-线程的安全问题"}},[t._v("#")]),t._v(" 4 线程的安全问题")]),t._v(" "),n("p",[t._v("解决线程之间共享数据的安全问题有以下3种方式。")]),t._v(" "),n("h3",{attrs:{id:"_4-1-使用volatile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-使用volatile"}},[t._v("#")]),t._v(" 4.1 使用volatile")]),t._v(" "),n("p",[t._v("volatile关键字解决的是可见性问题：当一个线程修改了某个共享变量的值，其他线程能够立刻看到修改后的值。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" myVar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-2-使用synchronized"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-使用synchronized"}},[t._v("#")]),t._v(" 4.2 使用synchronized")]),t._v(" "),n("p",[t._v("同步代码块")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("同步方法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h3",{attrs:{id:"_4-3-使用reentrantlock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-使用reentrantlock"}},[t._v("#")]),t._v(" 4.3 使用ReentrantLock")]),t._v(" "),n("p",[t._v("Lock，JDK5新增的")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lock")]),t._v(" lock "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReentrantLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h3",{attrs:{id:"_4-4-几种方式比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-几种方式比较"}},[t._v("#")]),t._v(" 4.4 几种方式比较")]),t._v(" "),n("p",[t._v("volatile关键字解决的是可见性问题：当一个线程修改了某个共享变量的值，其他线程能够立刻看到修改后的值。")]),t._v(" "),n("p",[t._v("synchronized是独占锁，加锁和解锁的过程自动进行，易于操作，但不够灵活。")]),t._v(" "),n("p",[t._v("ReentrantLock也是独占锁，加锁和解锁的过程需要手动进行，不易操作，但非常灵活。")]),t._v(" "),n("h2",{attrs:{id:"_5-线程通信的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-线程通信的应用"}},[t._v("#")]),t._v(" 5 线程通信的应用")]),t._v(" "),n("p",[n("strong",[t._v("生产者消费者模式")]),t._v("，也叫"),n("strong",[t._v("等待唤醒机制")]),t._v("，是一个非常经典的"),n("strong",[t._v("多线程协作模式")]),t._v("。")]),t._v(" "),n("p",[t._v("一个线程负责生产数据，放到共享区域，然后通知另一个线程去消耗数据。")]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("synchronized + wait + notify 实现多线程协调")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Lock + Condition 实现多线程协调")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lock")]),t._v(" lock "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReentrantLock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Condition")]),t._v(" condition "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCondition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务逻辑")]),t._v("\n            condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当notify")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于wait")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("Condition提供的await()、signal()、signalAll()原理和synchronized锁对象的wait()、notify()、notifyAll()是一致的，并且其行为也是一样的")])]),t._v(" "),n("h2",{attrs:{id:"_6-扩展知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-扩展知识"}},[t._v("#")]),t._v(" 6 扩展知识")]),t._v(" "),n("h3",{attrs:{id:"sleep-和-wait-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sleep-和-wait-的区别"}},[t._v("#")]),t._v(" sleep 和 wait 的区别")]),t._v(" "),n("p",[t._v("相同点：")]),t._v(" "),n("ul",[n("li",[t._v("调用sleep或wait，线程都会进入阻塞状态。")])]),t._v(" "),n("p",[t._v("不同点：")]),t._v(" "),n("ol",[n("li",[t._v("声明位置不同：Thread类中声明sleep，Object类中声明wait；")]),t._v(" "),n("li",[t._v("调用位置不同：sleep在任何地方都可以使用，wait只能用在同步代码块或者同步方法中；")]),t._v(" "),n("li",[t._v("关于是否释放同步监听器：如果两个方法都用在同步代码块或者同步方法中，sleep不会释放，wait会释放。")])]),t._v(" "),n("h3",{attrs:{id:"wait、notify、notifyall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wait、notify、notifyall"}},[t._v("#")]),t._v(" wait、notify、notifyAll")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("三个方法都是定义在Object类中；")])]),t._v(" "),n("li",[n("p",[t._v("三个方法只能使用在同步代码块或同步方法中；")])]),t._v(" "),n("li",[n("p",[t._v("三个方法的调用者必须是同步代码块或同步方法中的同步监听器；")])]),t._v(" "),n("li",[n("p",[t._v("一旦调用wait方法，线程就会进入阻塞状态，释放同步监听器；")])]),t._v(" "),n("li",[n("p",[t._v("一旦调用notify方法，就会唤醒被wait的一个线程。如果有多个线程被wait，就唤醒优先级最高的那个；")])]),t._v(" "),n("li",[n("p",[t._v("一旦调用notifyAll方法，就会唤醒所有被wait的线程。")])])]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1255943750561472",target:"_blank",rel:"noopener noreferrer"}},[t._v("多线程 - 廖雪峰的官网网站"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.bilibili.com/video/BV1Qb411g7cz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java -Java 学习- Java 基础到高级-宋红康-零基础自学Java-尚硅谷"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/wanghaoyang/p/11041303.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java中Atomic类的使用分析"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("锁机制")]),t._v(" "),n("p",[t._v("锁升级")]),t._v(" "),n("p",[t._v("偏向锁、轻量级锁、重量级锁")]),t._v(" "),n("p",[t._v("AQS是什么？AQS如何实现可重入锁？")]),t._v(" "),n("p",[t._v("可重入锁")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("可重入锁，也称递归锁。\n\n可以重复获取相同的锁。\nhttps://blog.csdn.net/w8y56f/article/details/89554060\n\n如果一个线程在执行一个持有锁的方法，在这个方法中调用另一个持有相同锁的方法，则该线程可以直接调用，而无需重新获取锁。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);