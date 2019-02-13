# How to deploy

* Create a branch named vX.X.X
* Update the package.json with correct version. Update the CHANGELOG.md
* Commit these change with a commit msg vX.X.X
* Merge this branch inside master
* Tag this commit with has vX.X.X
* Push master to github (and the tags)
* Launch the script *deploy.sh* to update the online documentation
* Publish your package on npm (npm publish)