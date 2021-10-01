const express = require('express');
const router = express.Router();

router.get('/users/singin', (req, res) => {
    res.send('Sing In')
})

router.get('/users/singup', (req, res) => {
    res.send('Autentication Formulary')
})

module.exports = router;
