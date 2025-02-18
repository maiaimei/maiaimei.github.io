(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{746:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("To temporarily store query data within Oracle packages, you can use PL/SQL collections such as associative arrays, nested tables, or VARRAYs. Here is an example using nested tables:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Create the Package Specification:")])])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" PACKAGE temp_data_pkg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" temp_table_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" source_table"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("ROWTYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" populate_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" process_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" temp_data_pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("Create the Package Body:")])])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" PACKAGE BODY temp_data_pkg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n    temp_table temp_table_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" populate_temp_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Initialize the collection")]),t._v("\n        temp_table :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp_table_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Populate the collection with data from the query")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BULK")]),t._v(" COLLECT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" temp_table\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" source_table\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" some_condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" populate_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROCEDURE")]),t._v(" process_temp_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Process each row in the collection")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COUNT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n            DBMS_OUTPUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ID: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', Name: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" process_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" temp_data_pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("Execute the Procedures from the Package:")])])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n    temp_data_pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("populate_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    temp_data_pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process_temp_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("In this example:")]),t._v(" "),a("ul",[a("li",[t._v("A nested table type "),a("code",[t._v("temp_table_type")]),t._v(" is defined in the package specification to store rows from the "),a("code",[t._v("source_table")]),t._v(".")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("populate_temp_table")]),t._v(" procedure populates the nested table with data using the "),a("code",[t._v("BULK COLLECT")]),t._v(" clause.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("process_temp_table")]),t._v(" procedure processes each row in the nested table.")]),t._v(" "),a("li",[t._v("The nested table "),a("code",[t._v("temp_table")]),t._v(" is declared in the package body to store the temporary data.")])]),t._v(" "),a("p",[t._v("This approach allows you to temporarily store and process query data within an Oracle package without creating a physical temporary table.")])])}),[],!1,null,null,null);s.default=n.exports}}]);