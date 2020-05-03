const getFormFields = require('../../../lib/get-form-fields'),
api                 = require('./api'),
ui                  = require('./ui')


const onSignUp = function(event){
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function(event){
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
}

module.exports = {
    onSignUp,
    onSignIn
}