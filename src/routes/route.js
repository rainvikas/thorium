const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
});

router.get('/movies', function (req, res) {
    res.send('["Puspa","Hercules","Wanted"]')
});

router.get('/movies/:movieIndex', function (req, res) {
    mov = ["Puspa", "Hercules", "Wanted"]
    let value = req.params.movieIndex;
    // if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index inan error message.
    if (value > mov.length - 1) {
        res.send('"dosent exist"')
    } else {
        res.send(mov[value])
    }

});

router.get('/moviez', function (req, res) {
    res.send([{ id: 1, name: 'The Shining' }, { id: 2, name: 'Incendies' }, { id: 3, name: 'Rang de Basanti' }, { id: 4, name: 'Finding Demo' }])
});

router.get('/films/:filmsId', function (req, res) {
    let movi = [{ id: 1, name: 'The Shining' }, { id: 2, name: 'Incendies' }, { id: 3, name: 'Rang de Basanti' }, { id: 4, name: 'Finding Demo' }]
    let value = req.params.filmsId;
    let found = false;
    for (i = 0; i < movi.length; i++) {
        if (movi[i].id == value) {
            found = true;
            res.send(movi[i])
            break
        }
    }
    // for a request GET /films/9 the response can be something like - ‘Nomovie exists with this id’
    if (found == false) {
        res.send('no movie exist with this id')
    }
});
module.exports = router;
