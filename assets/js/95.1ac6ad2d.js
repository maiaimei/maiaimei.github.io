(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{762:function(t,n,e){"use strict";e.r(n);var o=e(7),r=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("乐观锁")]),t._v("：总是假设最好的情况，每次拿数据时都认为别人不会修改，因此不会上锁，但在更新时会判断一下在此期间别人有没有更新这个数据，可以使用"),e("strong",[t._v("版本号机制")]),t._v("。适用于"),e("strong",[t._v("读多写少")]),t._v("的场景。")]),t._v(" "),e("p",[e("strong",[t._v("悲观锁")]),t._v("：总是假设最坏的情况，每次拿到数据后都会认为别人会修改该数据，因此每次拿数据时都会上锁，阻塞其他人。MySQL中的锁机制：行锁，表锁，读锁，写锁；Java中的synchronized和ReentrantLock独占锁。适用于"),e("strong",[t._v("读少写多")]),t._v("的场景。")])])}),[],!1,null,null,null);n.default=r.exports}}]);