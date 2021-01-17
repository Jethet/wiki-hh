Error with .eslintcache file in React app, showing up at root level.  
To get rid of this file, remove it and then push the code as follows.

**Terminal commands:**  
rm .eslintcache  
echo .eslintcache >> .gitignore  
git add . && git commit -m "Remove .eslintcache forever"  
git push  

add .eslintcache to .gitignore file  

**If error persists:**  
It seems to be an issue with react-scripts 4.0.1.  
Revert back to react-scripts 4.0.0 and use npm i again.
