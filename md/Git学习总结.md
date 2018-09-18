## Git学习总结

### Git仓库初始化和提交
    初始化一个Git仓库，使用git init命令。

    添加文件到Git仓库，分两步：

    使用命令git add <file>，注意，可反复多次使用，添加多个文件；
    使用命令git commit -m <message>，完成。
    
### 版本回退
    git log:显示从最近到最远的提交日志
    如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数,git log --pretty=oneline

    首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100
    使用 git reset --hard HEAD^ 回退到上个版本

    如果回退到了上个版本，那么问题来了，现在要怎么回到现在呢？好比你从21世纪坐时光穿梭机来到了19世纪，想再回去已经回不去了，肿么办？
    办法其实还是有的，只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个append GPL的commit id
    使用：git reset --hard 1094a，其中1094a是GPL的commit id


