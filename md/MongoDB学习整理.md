### MongoDB创建用户

 1.创建管理员
 ```s
 # 创建（切换到）admin数据库
 use admin
 # 创建一个帐号
 db.createUser({user:"admin",pwd:"admin",roles:["root"]})

 ```
 2.授权认证
 ```s
 # 对帐号进行认证
 db.auth("admin","admin")
 ```
 3.给使用的数据库添加用户
 ```s
# 创建（切换到）test数据库
 use test
 # 给test数据库创建一个用户
 db.createUser({user:"root",pwd:"123456",roles:[{role:"dbOwner",db:"test"}]})
 ```
4.通过--auth启动mongoDB
 ```s
 mongod -f /Users/zhangyu/server/mongo/etc/mongo.conf --auth
 ```