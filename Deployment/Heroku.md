**Watch out for problems with main and master**: now that GitHub automatically creates the main branch as `main` instead of `master`, it is important to check the name of the main branch that you push to Heroku.

**Deployment**
Your project needs to have a Git repository i.e. your code has to be tracked by Git.

1. Log into Heroku
1. Type `heroku create` in the terminal
1. Make notes of the name of the app that Heroku creates plus the https addresses
1. Type `heroku git:remote -a <heroku-app-name>` in the terminal
1. Type `git push heroku master` to push the code to Heroku