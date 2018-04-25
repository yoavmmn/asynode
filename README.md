# asynode
[![Build Status](https://travis-ci.org/yoavmmn/asynode.svg?branch=master)](https://travis-ci.org/yoavmmn/asynode)

A cli tool for using async/await without wrapping the main logic with async function.

This project was built for fun at 3 am and is *not* suitable for production.

# Usage
```javascript
// somefile.js
const axios = require('axios');

const data = await axios.get(...);
```

Simply run `asynode somefile.js`. That's it. no need to wrap the main logic with an async function.

