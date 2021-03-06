### Merging two repos gives fatal error: refusing to merge unrelated histories

The .git directory is where, among other things, the commits will be tracked, i.e. the history  
of the repo. Rewriting a repository history is possible, but it is a not a common use case.  
When a user action (like git merge) can cause rewriting of the history data, Git throws errors.

Solution:  
`git pull origin master --allow-unrelated-histories`  

NB: watch out for name change of main branch: both **master** and **main** are now used.