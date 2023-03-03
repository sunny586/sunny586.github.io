
## 理解 ”#!/usr/bin/env node“
1. #!   就是unix类操作系统中一个普通文件带有#!开头的，就会当做一个执行文件来运行，因为#在很多脚本里面是用作注释开头的符号，如果当做执行脚本运行的话，相当于这行就是注释，其实没有什么用，只是标识的作用，说明这个文件可以当做脚本来运行
2. /usr/bin/env node    这行的意思就是用node来执行此文件，node怎么来呢，就去用户(usr)的安装根目录(bin)下的env环境变量中去找，简单的说就是如果在windows上面，就去安装node的bin目录去找node执行器，一般我们都放在环境变量中，所以就能正确找到node来执行

## 查看 npm 包的 package.json 有些包会有 bin 字段，那么 bin 字段有什么用呢？
许多软件包都具有一个或多个要安装到 PATH 中的可执行文件。
bin 字段是命令名到本地文件名的映射。在安装时，npm 会将文件符号链接到 prefix/bin 以进行全局安装或./node_modules/.bin/本地安装。
当我们使用 npm 或者 yarn 命令安装包时，如果该包的 package.json 文件有 bin 字段，就会在 node_modules 文件夹下面的 .bin 目录中复制了 bin 字段链接的执行文件。我们在调用执行文件时，可以不带路径，直接使用命令名来执行相对应的执行文件。

## 输入vue create vue-test-app发生了什么？
在环境变量$path中查找vue命令(相当于执行which vue) =>查询实际的链接文件=> 通过#!/usr/bin/env node执行文件 =>结束end

## nodejs  [参考文档](https://www.nodeapp.cn/)

#### process - 进程
process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()。

#### process.argv
<Array>
process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。

#### fs.readdirSync(path[, options])
+ path <string> | <Buffer> | <URL>
+ options <string> | <Object>
  + encoding <string> 默认 = 'utf8'
+ 同步的 readdir(3). 返回一个不包括 '.' 和 '..' 的文件名的数组。
可选的 options 参数用于传入回调的文件名，它可以是一个字符串并指定一个字符编码，或是一个对象且由一个 encoding 属性指定使用的字符编码。 如果 encoding 设为 'buffer'，则返回的文件名会被作为 Buffer 对象传入。


### nodejs如何获取文件类型和权限 [参考文档](https://www.imooc.com/wiki/gongchenghua123/unix.html)
```js
Unix(Linux，MacOs) 文件权限体系
// bin: rwx r-x r-x
// package.json: rw- r-- r--
r: 访问 w: 编辑 x: 执行
u:当前登录用户 g：当前登录用户所在的分组 o：其他用户
Node.js如何获取文件类型和权限
Unix使用32位二进制数存储文件类型和权限
0000 0000 0000 0000
0000（文件类型），000（特殊权限），000（用户权限），000（分组权限），000（其他权限）
// 0000
// 0001
// 0010
// 0011
// 0100
// 0101
// 0111
// 1111
// 当前类型为：0001
// 0001 & 0001 = 0001 true
// 0000 & 0001 = 0000 false
```
