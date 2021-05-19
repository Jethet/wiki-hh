**Watch out for problems with main and master**: now that GitHub automatically creates the main branch as `main` instead of `master`,  
it is important to check the name of the main branch that you push to Heroku.

**Deployment**
Your project needs to have a Git repository i.e. your code has to be tracked by Git.

1. Log into Heroku
1. Type `heroku create <your-app-name>` in the terminal
1. Make notes of the name of the app that Heroku creates plus the https addresses
1. Type `git push heroku master` or `git push heroku main` to push the code to Heroku (see comment above about using main or master)

Type `heroku git:remote -a <heroku-app-name>` in the terminal if you want to add a different remote


**Errors**  
`No default language could be detected for this app`: Heroku has a set of default buildpacks, used when it needs to detect the language of your app. It requires a package.json to be located at the root of your app, not in a subfolder. In case a GitHub repository is split up into frontend and backend folders, each has a package.json. Since Heroku needs the package.json file in the root folder of the repository, it cannot detect the language. 

**Update Heroku version:** `npm upgrade -g heroku`  
