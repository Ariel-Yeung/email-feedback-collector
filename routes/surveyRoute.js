const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate');

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey ({
            title,
            subject,
            description,
            recipients: recipients.split(',').map( email => ({ email: email.trim() })),
            _user: req.user.id,
            dataSent: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
        }
        catch(e){
            console.log(e);
        }
    });
};