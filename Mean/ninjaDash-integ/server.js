const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.Port || 8000;
const app = express();

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.resolve('bower_components')));
app.use(express.static(path.resolve('public')));
app.use(express.static(path.join(__dirname, '/public/dist')));


require(path.resolve('server', 'config', 'database'));
require(path.resolve('server', 'config', 'routes'))(app);


app.listen(port, () => console.log(`server running on port ${ port }`));
