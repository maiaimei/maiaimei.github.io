(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{540:function(s,n,a){s.exports=a.p+"assets/img/20220330160723.2eed4df6.png"},660:function(s,n,a){"use strict";a.r(n);var t=a(7),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("记录下在阿里云上使用Docker部署静态站点，支持HTTPS访问。")]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("h3",{attrs:{id:"创建多个目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建多个目录"}},[s._v("#")]),s._v(" 创建多个目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 一次性创建层级目录，如果目录存在，则不创建")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/nginx /opt/nginx/config/conf.d /opt/nginx/html /opt/nginx/ssl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"创建配置文件-nginx-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件-nginx-conf"}},[s._v("#")]),s._v(" 创建配置文件 - nginx.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /opt/nginx/nginx.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加以下内容")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('user  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log notice;\npid        /var/run/nginx.pid;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n    \n    fastcgi_intercept_errors on;\n\n    include /etc/nginx/conf.d/*.conf;\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("h3",{attrs:{id:"创建配置文件-default-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件-default-conf"}},[s._v("#")]),s._v(" 创建配置文件 - default.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /opt/nginx/config/conf.d/default.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加以下内容")]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n    listen 80;\n    server_name maiamy.cn www.maiamy.cn;\n    return 301 https://$host$request_uri;\n}\n\nserver {\n\tlisten       443 ssl;\n\tserver_name  maiamy.cn www.maiamy.cn;\n\n\tssl_certificate      /ssl/cert.pem; \n\tssl_certificate_key  /ssl/cert.key;\n\n\tssl_session_cache    shared:SSL:1m;\n\tssl_session_timeout  5m;\n\n\tssl_ciphers  HIGH:!aNULL:!MD5;\n\tssl_prefer_server_ciphers  on;\n\t\n\t# 解决：中文乱码\n\tcharset utf-8;\n\t\n\terror_page   404  /404.html;\n\terror_page   500 502 503 504  /50x.html;\n\n\tlocation / {\n\t\troot  /usr/share/nginx/html;\n\t\tindex  index.html index.htm;\n\t}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h3",{attrs:{id:"上传静态页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传静态页面"}},[s._v("#")]),s._v(" 上传静态页面")]),s._v(" "),t("p",[s._v("将"),t("strong",[s._v("静态页面")]),s._v("上传到"),t("code",[s._v("/opt/nginx/html")])]),s._v(" "),t("h3",{attrs:{id:"上传ssl证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传ssl证书"}},[s._v("#")]),s._v(" 上传SSL证书")]),s._v(" "),t("p",[s._v("阿里云免费证书创建步骤：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("搜索“SSL 证书”")])]),s._v(" "),t("li",[t("p",[s._v("点击“SSL 证书（应用安全）”")])]),s._v(" "),t("li",[t("p",[s._v("点击“SSL 证书”")])]),s._v(" "),t("li",[t("p",[s._v("点击“免费证书”")])]),s._v(" "),t("li",[t("p",[s._v("点击“创建证书”，按提示输入相关内容")])]),s._v(" "),t("li",[t("p",[s._v("下载刚刚创建成功的证书")])]),s._v(" "),t("li",[t("p",[s._v("重命名证书，与default.conf配置一致")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("xxx.key 改为 cert.key，对应default.conf的ssl_certificate_key")])]),s._v(" "),t("li",[t("p",[s._v("xxx.pem 改为 cert.pem，对应default.conf的ssl_certificate")])])])]),s._v(" "),t("li",[t("p",[s._v("将cert.key和cert.pem上传到"),t("code",[s._v("/opt/nginx/ssl")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(540),alt:""}})]),s._v(" "),t("ol",{attrs:{start:"9"}},[t("li",[t("p",[s._v("如果SSL证书过期，则按1-8步骤操作，将新证书覆盖旧证书。然后重启容器即可。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先停止容器再启动容器")]),s._v("\ndocker stop container_id\ndocker start container_id\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者重新启动容器")]),s._v("\ndocker restart container_id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull nginx\n\ndocker run --name nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/nginx.conf:/etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/config/conf.d/default.conf:/etc/nginx/conf.d/default.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/html:/usr/share/nginx/html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /opt/nginx/ssl:/ssl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--network"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);