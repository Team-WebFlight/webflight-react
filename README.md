[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://www.standardjs.com)

# WebFlight for React
WebFlight enables the users visiting a site to serve the content of that site. P2P content sharing technology powered with :heart: by [WebTorrent](https://webtorrent.io)!

`STATUS: ` WebFlight and WebFlight-React are currently in **alpha**. If you find a bug, please [open an issue] on GitHub.

### Install
```bash
npm install webflight-react
```

### Usage: Server
<i>* WebFlight currently depends on Node v5.x.</i>

It's easy to incorporate WebFlight into your existing site! Just provide us with a few details on where to find the assets you want to seed, and we'll take care of the rest.
#### Initialize WebFlight

```javascript
const WebFlight = require('webflight-react')

const webflight = new WebFlight(options, serverRoot)

webflight.init()

app.use(webflight.redirect.bind(wf))
```

##### Options

```siteUrl``` - Your website url
<br>```assetsPath``` - The absolute path(s) to the folder(s) containing your assets
<br>`serverRoot` - The root path on your server
<br>```wfPath``` - (optional) The folder WebFlight files will appear in
<br>```wfRoute``` - (optional) The route that retrieves WebFlight files
<br>```seedScript``` - (optional) The script that will initialize seeding your assets so they're ready to be downloaded by users after the **userCount** threshold is passed
<br>`devMode` - (optional) Defaults to true while in development and does not run `Xvfb`
```
{
  siteUrl: String             // Required
  assetsPath: String|Array    // Required
  serverRoot: String          // Required
  wfPath: String              // Optional - defaults to '/wfPath'
  seedScript: String          // Optional - defaults to 'wf-seed.js'
  devMode: Boolean            // Optional - defaults to true
}
```

#### `webflight.init()`
Makes a copy of your site in `wfPath` folder and begins seeding assets.
<br>`NOTE:` Check your terminal to see bot's seeding status.

#### `webflight.redirect()`
Redirects all requests to `siteUrl` to the WebFlight version of your site where users will begin to download assets from the peer network.

### Usage: React
** currently compatible with image assets only*
```javascript
import WebFlight from 'webflight-react/components/WebFlight'

```

Replace any image tags with WebFlight components and an `src` tag:

```javascript
<WebFlight src="imgs/bird.jpg" />

```
`NOTE:` You can add any additional props to the component as usual:
```javascript
<WebFlight src="imgs/bird.jpg" style={{background: 'black'}} onClick={this.update} />

```

---

### License
MIT License (MIT)

Copyright (c) Team WebFlight

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
