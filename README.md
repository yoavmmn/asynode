# asynode
[![Build Status](https://travis-ci.org/yoavmmn/asynode.svg?branch=master)](https://travis-ci.org/yoavmmn/asynode)

A cli tool for using `top-level await`. This means you can use `await` without wrapping the main logic with an async function.

This project was built for fun at 3am and is **not** suitable for production.

# Install
```
npm install -g asynode
```

# Usage
```javascript
// somefile.js
const axios = require('axios');

const data = await axios.get(...);
```

Simply run `asynode somefile.js`. That's it. no need to wrap the main logic with an async function.

