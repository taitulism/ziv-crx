[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/taitulism/<pkg-name>.svg?branch=master)](https://travis-ci.org/taitulism/<pkg-name>)

Install
=======
* Run `npm install`


Development
===========
* Verify rollup.dev bundles relevant bundles. Comment out irrelevant sources.
* Run `npm run dev` to create dev-bundles with watch.


Build
=====
First Build
-----------
* Create a `dist` folder
* Copy dev-bundles files into `dist`
* Copy relevant html files to `dist` (e.g. `popup.html`, `settings-page.html`)
* Copy the manifest to `dist`
* Edit the **dist manifest** paths to match the `dist` folder structure. For example, replace `dev-bundles/background.js` with `./background.js`.
* Edit relevant **dist html files** to point to the right source in `dist`. For example, in `dist/settings-page.html` replace `../../dev-bundles/settings.js` with `./settings.js`


Next Builds
-----------
* Copy relevant `dev-bundles` files into `dist` (replace exisiting, delete first)
* Update `manifest` changes (e.g. new permissions, icons)


Usage
-----
* Goto `chrome://extensions/` --> Enable "Developer Mode" --> Load Unpacked --> `dist`
* For Incognito: "Details" --> "Allow in incognito"
