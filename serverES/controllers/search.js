var express = require('express');
var router = express.Router();

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'http://esdb:9200',
    log: 'trace'
});

router.get('/', function (req, res) {
    var hoten = req.query.hoten;
    client.search({
        index: 'doancuoiki',
        type: 'users',
        body: {
            query: {
                match: {
                    hoten: hoten
                }
            }
        }
    }).then(function (resp) {
        if (resp.hits != null) {
            var hits = resp.hits.hits;
            res.status(201).json({ dsTimKiem: hits });
        } else {
            res.status(404).json({message: 'Không tìm thấy' });
        }

    }, function (err) {
        res.status(500).json({err});
    });
});

router.post('/', function (req, res) {
    var tendangnhap = req.body.tendangnhap;
    var hoten = req.body.hoten;
    client.index({
        index: 'doancuoiki',
        type: 'users',
        body: {
            hoten: hoten,
            tendangnhap: tendangnhap,
            post_date: new Date()
        },
        refresh: true
    }, function (err, result) {
        if (err) {
             res.status(500).json({err});
        } else {
            if (result != null) {
                res.status(201).json({success: true})
            } else {
                res.status(404).json({message: 'Them tim kiem that bai'})
            }
        }
    });
});



module.exports = router;