const im = require('imagemagick');
const fs = require('fs');

var exports = module.exports = {};

exports.upload = function (req, res) {
    console.log('upload invoked..');

    fs.open('/tmp/tempFile', 'w', function(err, fd) {

        if (err) {
            throw 'error opening file: ' + err;
        }

        fs.write(fd, req.file.buffer, 0, req.file.buffer.length, null, function(err) {
            if (err) throw 'error writing file: ' + err;
            fs.close(fd, function() {
                console.log('file written');

                im.identify('/tmp/tempFile', function(err, features) {
                    if (err) throw err;
                    console.log(features);                    
                    res.send(features);
                });
            })
        });
    });
}
