## A list of the most commonly used git commands
### Cloning
Navigate into the folder you want to clone your project into:  `$ cd /chosen-path/` 
Then clone it:   `$ git clone [project URL]`
If you want to do a shallow clone which would only get the recent commit and ignore all of the repos history you can do:   `$ git clone [project URL] --depth=1`

### Checking git status
Which files have changed, which branch is git using, etc.:   `$ git status`  
Show a log of your recent commits:   `$ git log`

### Adding/committing and pushing
```
$ git add [file or directory]

$ git commit -m 'your commit message'

$ git push 
```
In case the commit and push concerns an existing file, the shortcut is to use `git commit -am "message"`  

### Undoing
Undo staging a file: `$ git reset HEAD <filename>` (if it is only one file you can leave out the filename)  
Undo staging a commit: `git reset HEAD~1` (=move back one commit, commit is undone)  
You can use `gitlog` to see past commits: the most recent one is at the top.  
`git reset --hard` plus the log hash will go back to the commit of that hash but also deletes everything that was done after it  


### Branches
**Creating** a new branch:   $ git checkout -b [branch-name]

**Pushing** your branch to the repo for the first time:   $ git push -u origin [branch-name]

**Switching** branch:   $ git checkout [branch-name]

To see a **list** of all your branches:   $ git branch

**Deleting** a branch: make sure you're not on the branch you want to delete otherwise it will not work

Delete a **remote** branch:   $ git push origin --delete [branch-name]  
Delete a **local** branch:   $ git branch -d [branch-name]  
This pulls your branch from origin if you do not have it locally:   $ git checkout -b [branch-name] origin/[branch-name]

Safely **merging** a branch: Go onto the branch you want merge into, for example 'develop', then merge in your chosen branch, for example 'new-feature-amend':   
$ git merge [branch-name] --no-commit --no-ff  
(the --no-commit does not automatically commit the branch after merging and --no-ff does not fast forward the branch you're merging into)

## Solving conflicts
This will check out their file if you know yours is incorrect:   $ git checkout --theirs /path-to/conflict-file  
This will check out your file if you know the one in the repo is outdated:   $ git checkout --ours /path-to/conflict-file  
Otherwise, you'll have to manually sort through them in the conflicted file. Make sure you have no <<< or >>> in your file as your conflicts live in these.

## Reverting a single file
This will undo all of your changes for a single file (NB: his will lose any amends you haven't committed so only do this if you're sure):  $ git checkout -- /path-to/file

## Reverting all of your current work
If you want to delete your current changes and revert back to the previous commit (this will lose any amends you haven’t committed so only do this if you're sure):  $ git reset –hard


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
