# 常用 `git` 指令

## 区分文件大小写
Git默认对文件名的大小写是不敏感的，设置大小写敏感的指令为：
`git config core.ignorecase false`

## 备份工作区内容

`git stash`
`git stash pop`: 从`git`栈中读取最近一次保存的内容，恢复工作区的相关内容

## 更新本地远程分支
`git fetch -p origin`

## 本地分支关联远程分支

`git branch --set-upstream-to=origin/[branch name] [branch name]`


## 删除关联远程仓库

`git remote rm origin`

## 本地新增关联远程仓库

`git remote add origin [origin address]`

## 更换远程仓库地址

`git remote set-url origin [origin address]`
