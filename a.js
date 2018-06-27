console.log("2018/6/27 17:00 新增js文件")
console.log("16:00 远程仓库修改代码")

console.log("19:40 本地从远程clone,只有master分支，然后 git checkout -b dev origin/dev 创建本地dev分支 并修改")
console.log("20:50 再次从本地新增代码")

console.log("20:58 解决每次push都要输入用户名和密码的问题，因为clone的时候使用的是HTTPS的方式，执行git remote rm origin，git remote add origin git@github.com:Kaixinzuizhongyao/git-test1.git即可")
console.log("21:39 重新设置SSH Key,添加公开密钥")
console.log("22:12 删除远程分支feature-D 命令：git push origin :feature-D")