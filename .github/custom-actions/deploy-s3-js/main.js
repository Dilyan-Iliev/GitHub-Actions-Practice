const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run () {
    core.notice('Hello - custom JS action') // log a message to github actions log
}

run();