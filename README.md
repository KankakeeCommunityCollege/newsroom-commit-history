# KCC Newsroom Template

[![Build Status](https://travis-ci.org/KankakeeCommunityCollege/newsroom.svg?branch=publish)](https://travis-ci.org/KankakeeCommunityCollege/newsroom)

#### Jekyll + Gulp + Sass + JS-YAML + Yargs + requireDir() + BrowserSync + ...

##### Modular Gulp tasks using requireDir(), Gulp config with JS-YAML, minified/uglified assets on --production flag using Yargs. 

Development of the new KCC Newsroom site based off of design-mockups

## Requirements
- RVM (<https://rvm.io/>) using ruby version 2.5.0 `$ rvm use default ruby-2.5.0`
- Jekyll - `$ gem install jekyll`
- Bundler - `$ gem install bundler`
- NVM (<https://github.com/creationix/nvm>) Using Node v8.9.4 (to avoid compatibility issues):
	- `$ nvm install 8.9.4`
	- `$ nvm alias default 8.9.4`
- Update Node install's Version of NPM to 6.1.0 `$ npm install -g npm@6.1.0`
- Gulp - `$ npm install --global gulp-cli`

## Installation
	$ git clone <https://github.com/KankakeeCommunityCollege/newsroom.git>
	$ cd mewsroom
	$ sh install.sh

## Development
	$ gulp

## Branches

Master Branch - is used by CloudCannon to build a staging server
Publish Branch - All changes to the Publish branch go live. It is updated via a merge in CloudCannon.

To push a dev update to both branches (make sure both branches are up to date with any CloudCannon changes in Github first):
- Develop on local Master Branch, make commits, and push to origin master.
- checkout Publish branch, merge Master Branch (`$ git merge master`), push to publish

## Production

Production build minifies CSS and JavaScript and compresses image files.

A gulp production build should be run before committing and pushing any CSS, JS, or new images to the Github repository.

Trying to push non-minified CSS and JS may result in merge conflicts.  If you have a merge conflict, especially on main.css or all.min.js, try running `$ gulp --production` before trying to push again

	$ gulp --production

## The gulpfile.js and gulpconfig.yml

See the comments within gulpfile.js and gulpconfig.yml for detailed explanation of what happens on running `$ gulp` or `$ gulp --production`
