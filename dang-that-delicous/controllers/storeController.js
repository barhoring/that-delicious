exports.myMiddleware = (req, res, next) => {
    req.name = 'bar horing!!!';
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
}