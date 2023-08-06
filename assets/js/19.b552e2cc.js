(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{606:function(_,v,e){_.exports=e.p+"assets/img/20230512224914.86a59abd.png"},607:function(_,v,e){_.exports=e.p+"assets/img/20230512230118.14e56807.png"},683:function(_,v,e){"use strict";e.r(v);var d=e(7),t=Object(d.a)({},(function(){var _=this,v=_.$createElement,d=_._self._c||v;return d("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[d("p",[d("a",{attrs:{href:"https://x12.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("X12"),d("OutboundLink")],1),_._v(", chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.")]),_._v(" "),d("p",[d("a",{attrs:{href:"https://www.kasoftware.com/edi-standards/ansi-x12-edi-document-standard.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("ANSI X12 报文标准（EDI Document Standard）"),d("OutboundLink")],1),_._v("于 1979 年发布，由认证标准委员会维护，在过去的几十年中得到扩展，以满足全球业务流程的要求，包括汽车、物流、零售、医药、金融、保险、运输、供应链和政府的要求。")]),_._v(" "),d("h2",{attrs:{id:"报文解析"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#报文解析"}},[_._v("#")]),_._v(" 报文解析")]),_._v(" "),d("h3",{attrs:{id:"报文结构"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[_._v("#")]),_._v(" 报文结构")]),_._v(" "),d("p",[d("img",{attrs:{src:e(606),alt:""}})]),_._v(" "),d("p",[d("img",{attrs:{src:e(607),alt:""}})]),_._v(" "),d("h3",{attrs:{id:"edi文档"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#edi文档"}},[_._v("#")]),_._v(" EDI文档")]),_._v(" "),d("p",[d("strong",[_._v("EDI文档")]),_._v("：是一个可选的控制段，仅在EDIFACT标准中出现，它定义了文档中用于终止符和分隔符的字符。这些字符在X12中是带外指定的，在EDIFACT中也是如此。")]),_._v(" "),d("h3",{attrs:{id:"交换"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#交换"}},[_._v("#")]),_._v(" 交换")]),_._v(" "),d("p",[d("strong",[_._v("交换")]),_._v("：由头部和尾部组成，用于标识将文档发送到哪个公司。X12使用ISA作为头部，IEA作为尾部。EDIFACT使用UNB作为头部，UNZ作为尾部。")]),_._v(" "),d("h3",{attrs:{id:"功能组"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#功能组"}},[_._v("#")]),_._v(" 功能组")]),_._v(" "),d("p",[d("strong",[_._v("功能组")]),_._v("：指定事务集/消息去向的标题，例如公司部门。它可以包含多个事务集/消息，例如，两个或三个发票或一个发票和一个采购订单。对于这两种标准，功能组都有一个头部和一个尾部。X12使用GS作为头部，GE作为尾部。EDIFACT使用UNG作为头部，UNE作为尾部，两者都是可选的。")]),_._v(" "),d("h3",{attrs:{id:"事务集-消息"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#事务集-消息"}},[_._v("#")]),_._v(" 事务集/消息")]),_._v(" "),d("p",[d("strong",[_._v("事务集/消息")]),_._v("：报文的主体，例如采购订单中的订单详细信息。X12称之为事务集，EDIFACT称之为消息。")]),_._v(" "),d("p",[_._v("综上所述，一次EDI传输包含一段Interchange，Interchange中会包含一个或多个Functional Group（下文简称FG），FG 中会包含一个或多个Transaction Set。举例来说，如果需要在一次传输中传输3个850，以及4个846文件，那么就会有2个FG，在850的FG中会有3个Transaction Set，846的FG中有4个Transaction Set。")]),_._v(" "),d("h3",{attrs:{id:"段-元素-子元素"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#段-元素-子元素"}},[_._v("#")]),_._v(" 段/元素/子元素")]),_._v(" "),d("div",{staticClass:"language- line-numbers-mode"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[_._v("ISA*00*          *00*          *ZZ*               *ZZ*               *210818*1503*U*00401*000000007*0*T*:~\nGS*PO*  *  *20210818*1503*7*T*004010~\nST*850*0001~\nBEG*00*DS*0476696888**20150708~\nREF*SB*ZZ11~\nREF*6P*ZZ~\nREF*8M*0056~\nREF*CR*10001000~\nREF*CO*20002000~\nPER*CN*name*TE*Number~\nCSH*BK~\nSAC*C*ZZZZ**********06~\nTD5*Z*2*Code~\nN9*PD*ZCOF~\nMSG*Thanks!~\nN1*BY*Name*92*5601~\nN1*EN*Name~\nN1*ST*OEM NAME*92*0000505462~\nN2*additional name*~\nN3*Address*Address~\nN4*City**201613*CN*SP*020~\nPO1*00010*500000*EA*495**BP*123123123123~\nPID*F****Thanks!****EN~\nREF*CO*00110011~\nREF*LI*000010~\nSCH*500000*EA***002*20180708~\nCTT*1*500000~\nSE*26*0001~\nGE*1*7~\nIEA*1*000000007~\n")])]),_._v(" "),d("div",{staticClass:"line-numbers-wrapper"},[d("span",{staticClass:"line-number"},[_._v("1")]),d("br"),d("span",{staticClass:"line-number"},[_._v("2")]),d("br"),d("span",{staticClass:"line-number"},[_._v("3")]),d("br"),d("span",{staticClass:"line-number"},[_._v("4")]),d("br"),d("span",{staticClass:"line-number"},[_._v("5")]),d("br"),d("span",{staticClass:"line-number"},[_._v("6")]),d("br"),d("span",{staticClass:"line-number"},[_._v("7")]),d("br"),d("span",{staticClass:"line-number"},[_._v("8")]),d("br"),d("span",{staticClass:"line-number"},[_._v("9")]),d("br"),d("span",{staticClass:"line-number"},[_._v("10")]),d("br"),d("span",{staticClass:"line-number"},[_._v("11")]),d("br"),d("span",{staticClass:"line-number"},[_._v("12")]),d("br"),d("span",{staticClass:"line-number"},[_._v("13")]),d("br"),d("span",{staticClass:"line-number"},[_._v("14")]),d("br"),d("span",{staticClass:"line-number"},[_._v("15")]),d("br"),d("span",{staticClass:"line-number"},[_._v("16")]),d("br"),d("span",{staticClass:"line-number"},[_._v("17")]),d("br"),d("span",{staticClass:"line-number"},[_._v("18")]),d("br"),d("span",{staticClass:"line-number"},[_._v("19")]),d("br"),d("span",{staticClass:"line-number"},[_._v("20")]),d("br"),d("span",{staticClass:"line-number"},[_._v("21")]),d("br"),d("span",{staticClass:"line-number"},[_._v("22")]),d("br"),d("span",{staticClass:"line-number"},[_._v("23")]),d("br"),d("span",{staticClass:"line-number"},[_._v("24")]),d("br"),d("span",{staticClass:"line-number"},[_._v("25")]),d("br"),d("span",{staticClass:"line-number"},[_._v("26")]),d("br"),d("span",{staticClass:"line-number"},[_._v("27")]),d("br"),d("span",{staticClass:"line-number"},[_._v("28")]),d("br"),d("span",{staticClass:"line-number"},[_._v("29")]),d("br"),d("span",{staticClass:"line-number"},[_._v("30")]),d("br")])]),d("p",[_._v("每一行称之为"),d("strong",[_._v("段（segment）")]),_._v("。段是具有特定含义的"),d("strong",[_._v("元素（element）")]),_._v("的集合。X12和EDIFACT都有段和元素的概念。")]),_._v(" "),d("p",[d("strong",[_._v("X12和EDIFACT使用特殊字符来区分段和元素。")]),_._v("。X12通常使用 "),d("code",[_._v("~")]),_._v(" 分隔段，使用 "),d("code",[_._v("*")]),_._v(" 分隔元素。EDIFACT通常使用 "),d("code",[_._v("’")]),_._v(" 分隔段，使用 "),d("code",[_._v("+")]),_._v("分隔元素。根据具体的实现，两者都可以使用不同的分隔字符。")]),_._v(" "),d("p",[_._v("两种标准中都有"),d("strong",[_._v("复合元素【若干子元素的集合（sub-element）】")]),_._v("，它包含两个或多个"),d("strong",[_._v("子元素（sub-element）")]),_._v("。复合元素在X12中很少见，在EDIFACT中很常见。X12使用 "),d("code",[_._v(">")]),_._v(" 分隔复合元素，EDIFACT使用 "),d("code",[_._v(";")]),_._v(" 分隔复合元素。")]),_._v(" "),d("p",[d("strong",[_._v("段（segment） > 元素（element） > 复合元素【若干子元素的集合（sub-element）】")])]),_._v(" "),d("p",[_._v("EDI允许同类型的段出现多次，在X12中称之为"),d("strong",[_._v("循环")]),_._v("，在EDIFACT中称之为"),d("strong",[_._v("组")]),_._v("。")]),_._v(" "),d("p",[_._v("段落头部（segment header），如：ISA/GS/ST等等，决定整段语句的业务含义。")]),_._v(" "),d("h3",{attrs:{id:"separator-分隔符"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#separator-分隔符"}},[_._v("#")]),_._v(" Separator 分隔符")]),_._v(" "),d("table",[d("thead",[d("tr",[d("th"),_._v(" "),d("th",[_._v("X12")]),_._v(" "),d("th",[_._v("EDIFACT")])])]),_._v(" "),d("tbody",[d("tr",[d("td",[_._v("段分隔符或边界符")]),_._v(" "),d("td",[_._v("~")]),_._v(" "),d("td",[_._v("’")])]),_._v(" "),d("tr",[d("td",[_._v("元素分隔符")]),_._v(" "),d("td",[_._v("*")]),_._v(" "),d("td",[_._v("+")])]),_._v(" "),d("tr",[d("td",[_._v("子元素分隔符")]),_._v(" "),d("td",[_._v(">")]),_._v(" "),d("td",[_._v(";")])])])]),_._v(" "),d("h3",{attrs:{id:"interchange-交换"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#interchange-交换"}},[_._v("#")]),_._v(" Interchange 交换")]),_._v(" "),d("table",[d("thead",[d("tr",[d("th"),_._v(" "),d("th",[_._v("description")]),_._v(" "),d("th",[_._v("sample")])])]),_._v(" "),d("tbody",[d("tr",[d("td",[_._v("ISA")]),_._v(" "),d("td",[_._v("Interchange Control Header")]),_._v(" "),d("td",[d("span",{staticStyle:{color:"red"}},[_._v("ISA")]),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA01")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("00")]),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA02")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA03")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("00")]),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA04")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA05")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("ZZ")]),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA06")]),_._v(" "),d("td",[_._v("Interchange Sender Identifier"),d("br"),_._v("交换发送方标识符")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA07")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("ZZ")]),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA08")]),_._v(" "),d("td",[_._v("Interchange Receiver Identifier"),d("br"),_._v("交换接收方标识符")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA09")]),_._v(" "),d("td",[_._v("Interchange Date"),d("br"),_._v("交换日期")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("210818")]),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA10")]),_._v(" "),d("td",[_._v("Interchange Time"),d("br"),_._v("交换时间")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("1503")]),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA11")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("U")]),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA12")]),_._v(" "),d("td",[_._v("报文执行的EDI版本，如：00401")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("00401")]),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA13")]),_._v(" "),d("td",[_._v("Interchange Control Number"),d("br"),_._v("与IEA02相同")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("000000007")]),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA14")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("0")]),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA15")]),_._v(" "),d("td",[_._v("Usage Indicator"),d("br"),_._v("正式报文（P）"),d("br"),_._v("测试报文（T）")]),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("T")]),d("code",[_._v("*")]),_._v(":")])]),_._v(" "),d("tr",[d("td",[_._v("ISA16")]),_._v(" "),d("td"),_._v(" "),d("td",[_._v("ISA"),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("00"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("ZZ"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("U"),d("code",[_._v("*")]),_._v("00401"),d("code",[_._v("*")]),_._v("000000007"),d("code",[_._v("*")]),_._v("0"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v(":")])])]),_._v(" "),d("tr",[d("td",[_._v("IEA")]),_._v(" "),d("td",[_._v("Interchange Control Header Trailer"),d("br"),_._v("与ISA成对出现")]),_._v(" "),d("td",[d("span",{staticStyle:{color:"red"}},[_._v("IEA")]),d("code",[_._v("*")]),_._v("1"),d("code",[_._v("*")]),_._v("000000007")])]),_._v(" "),d("tr",[d("td",[_._v("IEA01")]),_._v(" "),d("td",[_._v("GS与GE成对出现的次数")]),_._v(" "),d("td",[_._v("IEA"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("1")]),d("code",[_._v("*")]),_._v("000000007")])]),_._v(" "),d("tr",[d("td",[_._v("IEA02")]),_._v(" "),d("td",[_._v("与ISA13相同")]),_._v(" "),d("td",[_._v("IEA"),d("code",[_._v("*")]),_._v("1"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("000000007")])])])])]),_._v(" "),d("h3",{attrs:{id:"functional-group-功能组"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#functional-group-功能组"}},[_._v("#")]),_._v(" Functional Group 功能组")]),_._v(" "),d("table",[d("thead",[d("tr",[d("th"),_._v(" "),d("th",[_._v("description")]),_._v(" "),d("th",[_._v("sample")])])]),_._v(" "),d("tbody",[d("tr",[d("td",[_._v("GS")]),_._v(" "),d("td",[_._v("Functional Group Header")]),_._v(" "),d("td",[d("span",{staticStyle:{color:"red"}},[_._v("GS")]),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS01")]),_._v(" "),d("td",[_._v("报文业务类型，如：PO - 采购单（850）")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("PO")]),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS02")]),_._v(" "),d("td",[_._v("Application Sender Identifier"),d("br"),_._v("应用发送方标识符")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS03")]),_._v(" "),d("td",[_._v("Application Receiver Identifier"),d("br"),_._v("应用接收方标识符")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS04")]),_._v(" "),d("td",[_._v("报文创建日期")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("20210818")]),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS05")]),_._v(" "),d("td",[_._v("报文创建时间")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("1503")]),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS06")]),_._v(" "),d("td",[_._v("与GE02相同")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS07")]),_._v(" "),d("td",[_._v("X - 认证标准委员会X12")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),_._v("004010")])]),_._v(" "),d("tr",[d("td",[_._v("GS08")]),_._v(" "),d("td",[_._v("报文执行的EDI版本，如：00401")]),_._v(" "),d("td",[_._v("GS"),d("code",[_._v("*")]),_._v("PO"),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v(" "),d("code",[_._v("*")]),_._v("20210818"),d("code",[_._v("*")]),_._v("1503"),d("code",[_._v("*")]),_._v("7"),d("code",[_._v("*")]),_._v("T"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("004010")])])]),_._v(" "),d("tr",[d("td",[_._v("GE")]),_._v(" "),d("td",[_._v("Functional Group Trailer"),d("br"),_._v("与GS成对出现")]),_._v(" "),d("td",[d("span",{staticStyle:{color:"red"}},[_._v("GE")]),d("code",[_._v("*")]),_._v("1"),d("code",[_._v("*")]),_._v("7")])]),_._v(" "),d("tr",[d("td",[_._v("GE01")]),_._v(" "),d("td",[_._v("ST与SE成对出现的次数")]),_._v(" "),d("td",[_._v("GE"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("1")]),d("code",[_._v("*")]),_._v("7")])]),_._v(" "),d("tr",[d("td",[_._v("GE02")]),_._v(" "),d("td",[_._v("与GS06相同")]),_._v(" "),d("td",[_._v("GE"),d("code",[_._v("*")]),_._v("1"),d("code",[_._v("*")]),d("span",{staticStyle:{color:"red"}},[_._v("7")])])])])]),_._v(" "),d("h2",{attrs:{id:"相关链接"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[_._v("#")]),_._v(" 相关链接")]),_._v(" "),d("p",[d("a",{attrs:{href:"https://x12.org",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://x12.org"),d("OutboundLink")],1)]),_._v(" "),d("ul",[d("li",[d("a",{attrs:{href:"https://x12.org/products/glass",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://x12.org/products/glass"),d("OutboundLink")],1)])]),_._v(" "),d("ul",[d("li",[d("a",{attrs:{href:"https://x12.org/products/transaction-sets",target:"_blank",rel:"noopener noreferrer"}},[_._v("X12 Transaction Sets"),d("OutboundLink")],1)]),_._v(" "),d("li",[d("a",{attrs:{href:"https://x12.org/examples",target:"_blank",rel:"noopener noreferrer"}},[_._v("X12 EDI Examples"),d("OutboundLink")],1)]),_._v(" "),d("li",[d("a",{attrs:{href:"https://x12.org/flow/supply-chain",target:"_blank",rel:"noopener noreferrer"}},[_._v("Supply Chain Transaction Flow"),d("OutboundLink")],1)])]),_._v(" "),d("p",[d("a",{attrs:{href:"https://www.kasoftware.com",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.kasoftware.com"),d("OutboundLink")],1)]),_._v(" "),d("ul",[d("li",[d("a",{attrs:{href:"https://www.kasoftware.com/schema/edi/x12/00401/",target:"_blank",rel:"noopener noreferrer"}},[_._v("X12 EDI Release 00401"),d("OutboundLink")],1)])]),_._v(" "),d("p",[d("a",{attrs:{href:"https://blog.csdn.net/Rong_Z/article/details/119780440",target:"_blank",rel:"noopener noreferrer"}},[_._v("X12 和 EDIFACT浅析"),d("OutboundLink")],1)]),_._v(" "),d("p",[d("a",{attrs:{href:"https://blog.csdn.net/weixin_44069425/article/details/124730856",target:"_blank",rel:"noopener noreferrer"}},[_._v("如何读懂X12 EDI报文"),d("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=t.exports}}]);