var app = require('./config/server');

var port = process.env.PORT || 3000;
/* parametrizar a porta de escuta */

app.listen(port, function () {
  console.log('Servidor online na porta ' + port);
})