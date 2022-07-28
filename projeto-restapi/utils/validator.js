module.exports = {
    user: (app, req, res) => {
        req.assert('_name', 'Nome é obrigatório').notEmpty();
        req.assert('_email', 'Email é obrigatório').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
}