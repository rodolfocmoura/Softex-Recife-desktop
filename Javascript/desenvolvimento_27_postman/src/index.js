const express =  require('express');

let app = express();

app.use(require('./routes'))

let server = app.listen(8000, function(){
    let host = server.address().address
    let post =  server. address().port

    console.log("Example app listening at http://%s:%s", host, post)
})