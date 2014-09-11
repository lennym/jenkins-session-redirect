jenkins-session-redirect
========================

A chrome extension to fix annoying jenkins behaviour

Jenkins' session handling sucks, and will often leave you on a screen saying you don't have perms when your session expires. This Chrome extension will redirect you to login when that happens.

## Installation

1. Clone the repo
2. Go to chrome://extensions/ in a browser, and check the box marked "Developer mode"
3. Click "Load unpacked extension" and select the repo directory
4. ???
5. Profit!!

You may wish to update the `content_scripts.matches` property in manifest.json to restrict to only running on your jenkins instance - i.e. ```"matches": ["https://jenkins.mydomain.com/*"]```
