const surveyRoute = require("../routes/surveyRoute")

module.exports = (survey) => {
    return '<div>' + surveyRoute.body + '</div>'
}