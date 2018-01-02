var express = require('express'),
    router = express.Router(),
    type = 'iframe';

router.get('/gojs/home', (req, res) => {
    var _path = req.path.substring(1);

    if (req.headers['x-pjax']) {
        res.render("gojs/home/index.html");
    } else {
        res.render('application/'+type, {
            type: type,
            path: "gojs/home/index.html",
            nav_menu: 'gojs/nav-menu.html',
            site_menu: 'gojs/site-menu.html'
        });
    }
});

module.exports = router;