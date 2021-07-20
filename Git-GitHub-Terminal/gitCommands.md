**head** branch is the name of the currently active or *checked out* branch: you are 'on' the head branch.  

### Cloning
Navigate into the folder you want to clone your project into:  `cd /chosen-path/`. Then clone it:   `git clone project-URL`.  
If you want to do a shallow clone (= only get the recent commit, ignore all history): `git clone project-URL --depth=1`

### Checking git status
Which files have changed, which branch is git using, etc.:   `git status`  
Show a log of your recent commits:   `git log`

### Adding/committing and pushing
```
git add <file-or-directory>

git commit -m "your commit message"

git push 
```
In case the commit and push concerns an existing file, the shortcut is to use `git commit -am "message"`  

### Undoing
Undo staging a file: `git reset HEAD <filename>` (if it is only one file you can leave out the filename)  
Undo staging a commit: `git reset HEAD~1` (=move back one commit, commit is undone)  
You can use `gitlog` to see past commits: the most recent one is at the top.  
`git reset --hard` plus the log hash will go back to the commit of that hash but also deletes everything that was done after it  


### Branches
**Creating** a new branch: `git branch branch-name`  
**Creating** a new branch and moving to that branch:   `git checkout -b branch-name`  
**Pushing** your branch to the repo for the first time:   `git push -u origin branch-name`  
**Switching** branch:   `git switch branch-name` (you can also use `git checkout`)  
**Renaming** a branch:   `git branch -m new-branch-name` (on the branch you want to rename)  
To see a **list** of all your branches:   `git branch`

**git checkout**  
`git checkout` command works with files, commits and branches. It can be used to view old commits. You can also restore a historic version of a file using `git checkout` plus a commit hash. This way, you can reset files to earlier revisions without touching the rest of the project.

**Deleting** a branch: make sure you're not on the branch you want to delete otherwise it will not work: `git branch -d branch-name`  
Delete a **remote** branch:   `git push origin --delete branch-name`  
Delete a **local** branch:   `git branch -d branch-name`  
This pulls your branch from origin if you do not have it locally:   `git checkout -b branch-name origin/branch-name`

Safely **merging** a branch: go onto the branch you want merge into, then merge in your chosen branch using the following command:  
`git merge branch-name --no-commit --no-ff`  
(the --no-commit does not automatically commit the branch after merging and --no-ff does not fast forward the branch you're merging into).

### Renaming master branch to main
Manually set upstream so that you do not get branch 'main' set up to track remote branch 'master' from 'origin'.

If you have not pushed anything to GitHub yet and have no remote yet:  
* Make sure master is up to date, then git checkout -b main
* git push -u origin main
* git branch -d master

If you have a remote repo on GitHub already that has a master branch instead of main:  
* Make sure master is up to date, then git checkout -b main
* git push -u origin main
* Log into github and set the default branch to main
* git branch -d master
* git push origin :master

### Changing the remote
In order to change the URL of a Git remote, you have to use the `git remote set-url` command and specify the name of the remote as well as the new remote URL to be changed, as follows:

`git remote set-url <remote_name> <remote_url>`

### Solving conflicts
This will check out their file if you know yours is incorrect:   `git checkout --theirs /path-to/conflict-file`  
This will check out your file if you know the one in the repo is outdated:   `git checkout --ours /path-to/conflict-file`  
Otherwise, you'll have to manually sort through them in the conflicted file. Make sure you have no `<<<` or `>>>` in your file as your conflicts live in these.

### Reverting a single file
This will undo all of your changes for a single file: `git checkout -- /path-to/file`  
This will **lose** any amends that have not been committed.

### Git stash  
`git stash push -m "Temporary changes"` switch branch without committing the changes you made on the current branch  
`git stash list` shows all stashes you created (each stash has an index number)  
`git stash apply <index number of stash>` will get back the stashed changes  

## Reverting all of your current work
To delete your current changes and revert back to the previous commit: `git reset –hard`  
This will **lose** any amends that have not been committed.  

## Creating subfolders in repositories
```
warning: adding embedded git repository: Databases-Homework
hint: You've added another git repository inside your current repository.
hint: Clones of the outer repository will not contain the contents of
hint: the embedded repository and will not know how to obtain it.
hint: If you meant to add a submodule, use:
hint: 
hint:   git submodule add <url> Databases-Homework
hint: 
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint: 
hint:   git rm --cached Databases-Homework
hint: 
hint: See "git help submodule" for more information.
```  
**Get out of GNU terminal**  
^X (stands for Ctrl X)