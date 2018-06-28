console.log("2018/6/27 17:00 新增js文件")
console.log("16:00 远程仓库修改代码")

console.log("19:40 本地从远程clone,只有master分支，然后 git checkout -b dev origin/dev 创建本地dev分支 并修改")
console.log("20:50 再次从本地新增代码")

console.log("20:58 解决每次push都要输入用户名和密码的问题，因为clone的时候使用的是HTTPS的方式，执行git remote rm origin，git remote add origin git@github.com:Kaixinzuizhongyao/git-test1.git即可")
console.log("21:39 重新设置SSH Key,添加公开密钥")
console.log("22:12 删除远程分支feature-D 命令：git push origin :feature-D")
console.log("22:17 远程添加一行，通过git fetch origin dev更新代码到本地，再git merge FETCH_HEAD合并")
console.log("22:21 现在本地添加一行，并提交到远程，明天用别的电脑fetch下来")
console.log("22:32 修改本地Git的配置邮箱和GitHub上面一致")

console.log("6/28 10:11 从远程fetch到本地 然后合并到master分支")
console.log("10:27 增加一行")
console.log("10:45 新增分支devb进行测试 并push到origin")
