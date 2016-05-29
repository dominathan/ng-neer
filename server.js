var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'client')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("<h1> I SEEMED TO HAVE GOOFED</h1>");
  });
}


app.listen(port, function() {
  console.log("LISTENG ON PORT: ", port);
});
