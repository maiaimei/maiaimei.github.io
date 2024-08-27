(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{567:function(s,t,n){s.exports=n.p+"assets/img/20210226171533.c4f4d322.png"},568:function(s,t,n){s.exports=n.p+"assets/img/20210226183414.5ea95bc0.png"},569:function(s,t,n){s.exports=n.p+"assets/img/20240330123813.084bd414.png"},570:function(s,t,n){s.exports=n.p+"assets/img/20240330124304.bc719ca0.png"},694:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Git是分布式版本控制管理工具。")]),s._v(" "),a("h2",{attrs:{id:"下载git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载git"}},[s._v("#")]),s._v(" 下载Git")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/downloads"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://tortoisegit.org/download/"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[s._v("#")]),s._v(" 安装Git")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --version\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"配置git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[s._v("#")]),s._v(" 配置Git")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局设置用户名和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为某个仓库单独设置用户名和密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_name"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://git-scm.com/docs/git-credential-store")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户级设置记住账号密码，在执行该命令后第一次push或pull中询问一次账号密码，之后就会记住了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户级取消记住账号密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset credential.helper\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目级设置记住账号密码，在执行该命令后第一次push或pull中询问一次账号密码，之后就会记住了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config credential.helper store\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目级取消记住账号密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --unset credential.helper\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows中的换行符为CRLF，而在Linux下的换行符为LF，所以在执行add . 时出现提示LF will be replaced by CRLF，如果你是 Windows 程序员，且正在开发仅运行在 Windows 上的项目，可以设置 false 取消此功能，把回车保留在版本库中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/maiaimei/wiki.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地仓库与远程仓库建立连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/maiaimei/wiki.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin_gitee https://gitee.com/maiaimei/wiki.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改远程仓库的简写名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" origin_old origin_new\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote remove origin_new\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全部分支(包含本地和远程)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -M main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地分支，删除分支，删除前会检查merge状态，避免误删没有合并的分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除分支，是 git branch --delete --force的简写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前分支与远程仓库的上游分支建立连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin/remote_branch local_branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -u origin/branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消当前分支的上游分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --unset-upstream\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消其他分支的上游分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --unset-upstream branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前的本地分支与远程分支的关联关系")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并自动跟踪远程的同名分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --track origin/branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以当前分支为模板创建新分支并切换该分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b branch_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据指定commitId创建分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b branch_name commitId\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销对文件的修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消暂存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 缓存文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"save message"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复第（n+1）个stash，但不删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复并删除第1个stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复并删除第（n+1）个stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除第（n+1）个stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有stash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于stash创建新分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash branch new_branch_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程仓库中拉取文件，相当于 git fetch + git merge branch_name")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# resolve fatal: refusing to merge unrelated histories")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 两个分支是两个不同的版本，具有不同的提交历史,可以允许不相关历史提，强制合并")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin main --allow-unrelated-historie\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将远程仓库的最新内容拉到本地")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除已删除的远程分支，如果在获取远程分支的同时创建了一个本地分支，那么该命令只能解除本地分支与远程分支的关联性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch -p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并指定分支到当前分支上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge branch_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件添加到暂存区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件提交到版本区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改最后一次提交的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update last commit message"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前分支推送到远程仓库，并以此作为上游分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin local_branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin_gitee main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin_gitee main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看提交历史，默认按提交时间降序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示最近的两条提交")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\nca82a6dff817ec66f44342007202690a93763949 changed the version number\n085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\na11bef06a3f659402fe7563abf99ad00de2209e6 first commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h - %an, %ar : %s"')]),s._v("\nca82a6d - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" changed the version number\n085bb3b - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" removed unnecessary "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\na11bef0 - Scott Chacon, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" years ago "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" first commit\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照特定的模式查找标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -l "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1.8.5*"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v1.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.1 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-11 release"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后期打标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.2 9fceb02\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决Filename too long")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.longpaths "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br")])]),a("p",[s._v("更多命令详见："),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/book/zh/v2"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[s._v("#")]),s._v(" 工作流程")]),s._v(" "),a("p",[a("img",{attrs:{src:n(567),alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:n(568),alt:""}})]),s._v(" "),a("h2",{attrs:{id:"提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交规范"}},[s._v("#")]),s._v(" 提交规范")]),s._v(" "),a("p",[s._v("在IDEA安装【Git Commit Message Helper】插件")]),s._v(" "),a("p",[a("img",{attrs:{src:n(569),alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:n(570),alt:""}})]),s._v(" "),a("p",[s._v("一个规范的Git提交描述格式如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Header头\n<type>(<scope>): <subject>\n\n# Body体\n<body>\n\n# Footer体\n<footer>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("Type Of Change")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("feat")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("新功能")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("fix")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("修改bug")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("docs")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("文档修改")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("style")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("格式修改")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("refactor")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("重构")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("perf")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("性能提升")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("test")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("测试")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("build")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("构建系统")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("ci")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("对CI配置文件修改")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("chore")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("修改构建流程、或者增加依赖库、工具")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("revert")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("回滚版本")])])])]),s._v(" "),a("h2",{attrs:{id:"其他问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[s._v("#")]),s._v(" 其他问题")]),s._v(" "),a("p",[s._v("Github推送失败")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_41010198/article/details/119698015",target:"_blank",rel:"noopener noreferrer"}},[s._v("github开发人员在七夕搞事情：remote: Support for password authentication was removed on August 13, 2021."),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Setting -> Developer setting -> Personal access tokens -> Generate new token")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your_token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/docs"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);