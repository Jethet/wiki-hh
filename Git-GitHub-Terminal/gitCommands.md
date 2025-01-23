**head** branch is the name of the currently active or *checked out* branch: you are 'on' the head branch.  

### Cloning
Navigate into the folder you want to clone your project into:  `cd /chosen-path/`. Then clone it:   `git clone project-URL`.  
If you want to do a shallow clone (= only get the recent commit, ignore all history): `git clone project-URL --depth=1`

### Checking git status
Which files have changed, which branch is git using, etc.:   `git status`  
Show a log of your recent commits:   `git log`
Show log with one line of commit messages: `git log --oneline`
Show log with one line of commit messages in reversed order (first commit on top): `git log --oneline --reverse`

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

**Merging** branches: this means integrating changes from another branch into your current local head branch. First, you switch to the branch that should receive the changes, and then you execute the merge command with the branch that contains the changes you want to merge. By merging, you combine all the changes on the branches in one commit.
* git switch main
* git merge new-feature 

Merging is done most easily in the GitHub interface. The Current Change is the change in the branch you are currently on. The Incoming Change is the change that is in the branch you want to merge into. This could be the master branch, and if you want to merge your branch into master you will see the difference with the master branch as Incoming Change.

Safely **merging** a branch: go onto the branch you want merge into, then merge in your chosen branch using the following command:  
`git merge branch-name --no-commit --no-ff`  
(the --no-commit does not automatically commit the branch after merging and --no-ff does not fast forward the branch you're merging into).

**Rebasing** branches: this is an alternative way to integrate changes from another branch in your current local head branch. There will be one continuous line of commits, no diverging into two branches.  
* git switch branch-that-receives-changes
* git rebase branch-that-contains-desired-changes
The changes are added into the commit timeline as one history of commits.

**Comparing** branches: `git log branch1..branch2` will show a log of the commits that are present in branch2 but not in branch1.  
This can also be done between a local and a remote branch: `git log origin/main..main` will show the commits that are in the local main branch and not in the remote origin/main branch.

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

### Renaming repository
In the **remote repository**, go to Settings and change the name of the repo in the input field where you see the existing name; click Rename and the change has been made.  
Now you have to change the name of the **local repository**: change the folder name in your local files or in VSC (right-click on the name and change it). After you have changed it, check if it is exactly the same as the name of the remote repo. Then go to the remote and copy the url of the remote repo. In your terminal, use the `git remote set-url` as follows:

`git remote set-url origin <new_url>`

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


### Git configuration
Git configuration variables can be stored at **three different levels**. Each level overrides values at the previous level.

1. **System level** (applied to every user on the system and all their repositories)
* to view: `git config --list --system` (may need `sudo`)
* to set: `git config --system color.ui true`
* to edit: system config file: `git config --edit --system`

2. **Global level** (values specific personally to you, the user).
* to view: `git config --list --global`
* to set: `git config --global user.name xyz`
* to edit global config file: `git config --edit --global`

3. **Repository level** (specific to that single repository)
* to view: `git config --list --local`
* to set: `git config --local core.ignorecase true' (`--local` optional)
* to edit repository config file: `git config --edit --local` (`--local` optional)

#### How do I view all settings?
* Run `git config --list` shows **system**, **global**, and (if inside a repository) **local** configs
* Run `git config --list --show-origin` shows the origin file of each config item

#### How do I read one particular configuration?
* Run `git config user.name` to get `user.name`, for example.
* You may also specify options `--system`, `--global`, `--local` to read that value at a particular level.


**Exit GNU in terminal**  
Type `^X` (stands for Ctrl X)

**Exit VIM in terminal**  
Type `:qa`  and press <Enter>

