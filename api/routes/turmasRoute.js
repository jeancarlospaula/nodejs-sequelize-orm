const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .post('/turma', TurmaController.criaTurma)
    .put('/turma/:id', TurmaController.atualizaTurma)
    .delete('/turma/:id', TurmaController.deletaTurma)

module.exports = router