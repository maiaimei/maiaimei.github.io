(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{649:function(s,t,a){s.exports=a.p+"assets/img/20230808220502.c1d31a0d.png"},650:function(s,t,a){s.exports=a.p+"assets/img/20230808215636.77b9ba43.png"},651:function(s,t,a){s.exports=a.p+"assets/img/20230808231600.c8b38c1c.png"},745:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://www.oracle.com/database/technologies/appdev/sql.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.oracle.com/database/technologies/appdev/sql.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"ddl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ddl"}},[s._v("#")]),s._v(" DDL")]),s._v(" "),n("p",[s._v("Oracle数据库中，表名、列名、索引名的长度最多是30个字符。")]),s._v(" "),n("p",[s._v("在Oracle中，您可以使用以下查询来查看为表创建的约束（包括外键、主键、唯一约束、非空约束等）和索引：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("查看约束：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" constraint_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" constraint_type\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" user_constraints\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_TABLE_NAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("查看索引：")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" index_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index_type\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" user_indexes\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_TABLE_NAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),n("h3",{attrs:{id:"number-p-s"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-p-s"}},[s._v("#")]),s._v(" number(p,s)")]),s._v(" "),n("p",[s._v("p：精度位，precision，是有效数字的总位数（即小数点左边最多有p-s位有效数字），取值范围是1~38，用字符*表示38。\ns：小数位，scale，是小数点右边数字的位数，取值范围是-84~127。")]),s._v(" "),n("p",[s._v("当 s>0时：精确到小数点后s位，并四舍五入。再校验有效位是否满足<=p。")]),s._v(" "),n("p",[s._v("当 s<0时：精确到小数点前s位，并四舍五入。再校验有效位是否满足 <= p + |s|。")]),s._v(" "),n("p",[s._v("当s=0时：此时number表示整数。")]),s._v(" "),n("h2",{attrs:{id:"内置函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[s._v("#")]),s._v(" 内置函数")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Functions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Functions.html"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"单行函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单行函数"}},[s._v("#")]),s._v(" 单行函数")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("字符函数")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("大小写控制函数")]),s._v(" "),n("p",[n("img",{attrs:{src:a(649),alt:""}})])]),s._v(" "),n("li",[n("p",[s._v("字符控制函数")]),s._v(" "),n("p",[n("img",{attrs:{src:a(650),alt:""}})]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 字符串索引从 1 开始。从第2位开始取4个字符。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" substr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ello ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" instr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 去掉首尾指定字符")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" trim"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'H'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloHWorldH'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- elloHWorld")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 将指定字符全部替换为目标字符")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcdb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'m'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- amcdm")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("数值函数")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 四舍五入")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("45.926")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 46")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("45.926")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 46.93")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 截断")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" trunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("45.926")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 45.92")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 求余")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1600")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 100")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("日期函数")]),s._v(" "),n("p",[n("img",{attrs:{src:a(651),alt:""}})]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" sysdate "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 日期加上或减去一个数字，结果仍为日期")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" sysdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sysdate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sysdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 两个日期相减，结果为它们之间相差的天数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sysdate "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("转换函数")])]),s._v(" "),n("li",[n("p",[s._v("通用函数")])])]),s._v(" "),n("h3",{attrs:{id:"多行函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多行函数"}},[s._v("#")]),s._v(" 多行函数")]),s._v(" "),n("h2",{attrs:{id:"分页查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分页查询"}},[s._v("#")]),s._v(" 分页查询")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" people  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id varchar2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name varchar2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sex varchar2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  birthday "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19890101'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小红'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'女'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19901002'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小黄'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19870716'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小白'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'女'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19861201'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小蓝'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19920518'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小紫'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'女'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19821122'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("rownum是oracle特有的一个关键字。")]),s._v(" "),n("p",[s._v("rownum可以用于限制返回查询的总行数，且rownum不可以以任何表的名称作为前缀。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对于基表，在insert记录时，oracle就按照insert的顺序，将rownum分配给每一行记录，因此在select一个基表的时候，rownum的排序是根据insert记录的顺序显示的。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people p\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("对于子查询，则rownum的顺序是根据子查询的查询顺序进行动态分配的。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("birthday \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" birthday\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" tt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("rownum对于等于某值的查询条件：如果想找到第一条查询数据，可以使用rownum=1作为查询条件，但是想找到第二条查询数据，使用rownum=2则查不到数据，原因是：rownum都是从1开始，但是1以上的自然数与rownum做等于时，都认为是false条件，所以无法查询到rownum=n (n>1的自然数)。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查不到数据")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("rownum对于大于某值的查询条件：要是想查询出第二行以后的记录，直接使用rownum>2是查不出数据的，原因是rownum是一个总是以1开始的伪例，rownum>n (n>1的自然数)依然不成立。可以使用子查询来解决，注意子查询中的rownum必须要有别名，否则还是不会查出记录来，这是因为rownum不是某个表的列，如果不起别名的话，无法知道rownum是子查询的列还是主查询的列。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查不到数据")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people p\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("rownum对于小于某值的查询条件： rownum对于rownum<n（(n>1的自然数）的条件认为是成立的，所以可以找到记录。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意：对于查询rownum在某区间的数据，必须使用子查询，例如要查询rownum在第二行到第三行之间的数据，包括第二行和第三行数据，那么我们只能写以下语句，先让它返回小于等于三的记录行，然后在主查询中判断新的rownum的别名列大于等于二的记录行。但是这样的操作会在大数据集中影响速度。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("birthday \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" people\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" birthday\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" tt\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);