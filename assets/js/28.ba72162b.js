(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{580:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"centos-安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-gitlab"}},[a._v("#")]),a._v(" CentOS 安装 GitLab")]),a._v(" "),t("p",[a._v("配置yum源")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/yum.repos.d/gitlab-ce.repo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("添加以下内容")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[a._v("[gitlab-ce]\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("gitlab-ce")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("Gpgkey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("https://packages.gitlab.com/gpg.key")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("更新本地yum缓存")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum makecache\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装GitLab社区版")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gitlab-ce\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装最新版")]),a._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gitlab-ce-x.x.x\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装指定版本")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"【todo】docker-安装-gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【todo】docker-安装-gitlab"}},[a._v("#")]),a._v(" 【TODO】Docker 安装 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull gitlab/gitlab-ce\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /srv/gitlab\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GITLAB_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/srv/gitlab\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   --restart always \\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#\t--hostname gitlab.example.com \\")]),a._v("\ndocker run --detach "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8022")]),a._v(":22 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --name gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/config:/etc/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/logs:/var/log/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GITLAB_HOME")]),a._v("/data:/var/opt/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --privileged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-ce:latest\n  \ndocker logs -f gitlab\n\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it gitlab /bin/bash\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("h2",{attrs:{id:"gitlab-rb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-rb"}},[a._v("#")]),a._v(" gitlab.rb")]),a._v(" "),t("p",[a._v("停止 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl stop\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("修改配置")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /etc/gitlab/gitlab.rb /etc/gitlab/gitlab.rb.backup\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/gitlab/gitlab.rb\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("修改以下内容")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("external_url")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'http://gitlab.example.com'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 性能调优")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("prometheus['enable']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("false")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("postgresql['shared_buffers']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"128MB"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("postgresql['max_worker_processes']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("unicorn['worker_timeout']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("60")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("unicorn['worker_processes']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 邮件功能")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_enable']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_address']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"smtp.qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_port']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("465")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_user_name']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"1211674185@qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_password']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"smtp password"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_domain']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"qq.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_authentication']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"login"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_enable_starttls_auto']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['smtp_tls']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_enabled']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_from']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'1211674185@qq.com'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_display_name']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'gitlab'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("gitlab_rails['gitlab_email_reply_to']")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("'1211674185@qq.com'")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br")])]),t("p",[a._v("重新载入配置")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl reconfigure\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("启动 GitLab")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gitlab-ctl start\ngitlab-ctl stop\ngitlab-ctl restart\ngitlab-ctl status\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改配置文件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/gitlab/gitlab.rb\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新载入配置")]),a._v("\ngitlab-ctl reconfigure\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看日志")]),a._v("\ngitlab-ctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 备份恢复")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),t("p",[a._v("浏览器访问："),t("a",{attrs:{href:"http://gitlab.example.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://gitlab.example.com/"),t("OutboundLink")],1),a._v("，首次访问需要设置密码，例如：root / 12345678")])])}),[],!1,null,null,null);s.default=e.exports}}]);