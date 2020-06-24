const app = require('./app.js');
require('../database/index.js')

app.listen(1314, () => { console.log('listening on'); });
