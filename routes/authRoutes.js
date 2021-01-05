const passport = require('passport');

module.exports = (app) => {
    // get the code from google
    app.get( '/auth/google', passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // exchange the code for info
    app.get('/auth/google/callback', passport.authenticate('google')
    );

    app.get('/api/logout', (req, res) => {
        req.logout();                    // kills the users' cookie
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
