## B 端 Git flow 规范
## 规范
采用 Github Flow 
Github Flow 文档地址：https://guides.github.com/introduction/flow/index.html

### 图片描述：
![](https://raw.githubusercontent.com/sunny586/sunny586.github.io/main/dist/docs/zh-CN/fe__2/%E7%A0%94%E5%8F%91%E8%A7%84%E8%8C%83/github-flow.png)

### 文字过程描述：
+ 根据需求，从 master 拉出分支
+ 激烈的开发阶段，提交 commit
+ 开发完毕，发起 PR（pull request）
+ 代码评审（很重要！）
+ 部署，并且测试
+ 没问题， merge 到 master！


### 分支命名 
分支命名规范属于强制采用的规范
+ feature 开头代表功能开发 如 feature/add-vuex
+ hotfix 开头代表代码 bug 修复 如 hotfix/fix-header

### Commit 信息
Commit 信息，杜绝 `update，fix bug` 这类废话，每次提交必须`言之有物`，至少要言简意赅的把一次 commit 完成的任务说清楚。

[参考](https://imooc-lego.yuque.com/imooc-lego/elp4vn)
