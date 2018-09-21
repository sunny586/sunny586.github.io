
### 环境安装

安装淘宝镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### nodejs环境安装

windows和mac安装
```
去nodejs官网直接傻瓜式安装即可(.msi或.pkg安装)，https://nodejs.org/en/download/
```
Linux下安装node环境
```
# 使用wget下载linux的nodejs的压缩包
wget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz
#  解压缩会生产一个tar包
xz -d node-v6.10.3-linux-x64.tar.xz
# 继续解压tar包
tar -xvf node-v6.10.3-linux-x64.tar
# 建立node软连接
ln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node
# 建立npm软连接
ln -s /node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm
```
