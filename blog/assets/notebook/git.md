# git
Git is a `free and open source` distributed version control system designed to handle
everything from small to very large projects with speed and efficiency

<英俚>饭桶；无用的人；a person who is deemed to be despicable and contemptible

![](https://graph.baidu.com/resource/12120d4833439f171dd0101591606284.jpg)

1. `git checkout <filename/dirname>`  
撤回本地工作区文件，放弃暂存区里面的所有改动，将现在版本库中的版本与工作区同步  
`git checkout -b <branch-name> <commit-id>`  
拉取指定分支的指定版本

2. `git branch --set-upstream-to=origin/master master`  
`git branch --unset-upstream master`

3. 修改commit message `git commit --amend`

4. 修改分支名 `git branch -m <oldbranch> <newbranch>`

5. 撤回提交 `git reset --** [<commit-id>/HEAD~n>]`  
* `soft` 撤销commit操作  
* `mixed` 撤销了commit和add操作  
* `hard` 已追踪文件的变更都消失了，未追踪的内容不变

6. 撤销分之合并 `reset` `revert`

7. `git branch --contains <commit-id>` 列出包含该提交的分支
