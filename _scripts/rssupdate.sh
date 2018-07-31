#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b publish
  git add rss.xml
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER - Push updated RSS feed to Github"
  git checkout -b master
  git merge publish
}

upload_files() {
  git remote add origin publish https://${GH_TOKEN}@github.com/KankakeeCommunityCollege/newsroom/tree/publish.git > /dev/null 2>&1
  git remote add origin master https://${GH_TOKEN}@github.com/KankakeeCommunityCollege/newsroom/tree/master.git > /dev/null 2>&1
  git checkout -b master
  git push -u origin master
  git checkout -b publish
  git push -u origin publish
}

setup_git
commit_website_files
upload_files
