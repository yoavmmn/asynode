# asynode
A cli tool for using async/await without wrapping the main logic with async function

# Usage
```javascript
// somefile.js
const axios = require('axios');

const data = await axios.get(...);
```

Simply run `asynode somefile.js`. That's it.
