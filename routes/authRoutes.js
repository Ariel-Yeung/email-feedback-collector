const passport = require('passport');

module.exports = (app) => {
    // get the code from google
    app.get( '/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // exchange the code for info
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();                    // kills the users' cookie
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
