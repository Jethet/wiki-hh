Error with .eslintcache file in React app, showing up at root level.  
To get rid of this file, remove it and then push the code as follows.

**Terminal commands:**  
rm .eslintcache  
echo .eslintcache >> .gitignore  
git add . && git commit -m "Remove .eslintcache forever"  
git push  

add .eslintcache to .gitignore file  
