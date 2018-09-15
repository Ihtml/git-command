### git常用操作
- **git pull (origin master)**——从远程仓库下拉代码到本地，是- git fetch后跟git merge FETCH_HEAD的缩写。
- **git pull origin next:master**——取回origin主机的next分支，与本地的master合并
- **git pull origin nex**t——远程分支next与当前分支合并

  在某些场合，Git会自动在本地分支与远程分支之间，建立一种追踪关系(tracking)。比如，在git clone的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的master分支自动”追踪”origin/master分支。
Git也允许手动建立追踪关系。
**git branch --set-upstream-to=origin/master master** 指定master分支追踪origin/master分支。

- git branch ——查看当前分支
- git checkout -b dev = 创建dev分支，然后切换到dev分支
相当于 git branch dev + git checkout dev 
- **git checkout .** 取消对文件的所有修改
- **git branch -d dev** ——删除dev分支
- **git merge dev** —— 把dev分支合并到当前分支上
- **git add .** ——把所有新增的代码添加到缓存区
- **git commit -m "modified"** ——提交到本地仓库,并添加注释
- **git push**——本地代码上传到远程仓库
- **git push -u origin master**——当远程库是空的，第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

- **git remote -v**——显示远程库
- **git remote rm origin**——删除远程仓库地址
- **git remote add origin url**——再关联新的仓库地址
