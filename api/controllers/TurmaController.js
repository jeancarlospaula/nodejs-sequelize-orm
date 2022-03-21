const database = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req,res){
        try {            
            const todasAsPessoas = await database.Turma.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res){
        const { id } = req.params

        try {
            const umaTurma = await database.Turma.findOne({
                where: {
                    id:Number(id)
                }
            })

            res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res){
        const novaTurma = req.body

        try {
            const novaTurmaCriada = await database.Turma.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res){
        const { id } = req.params
        const novaInfos = req.body

        try {
            await database.Turma.update(novaInfos, {
                where: {
                    id: Number(id)
                }
            })

            const turmaAtualizada = await database.Turma.findOne({
                where:{
                    id: Number(id)
                }
            })

            res.status(200).send(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res){
        const { id } = req.params

        try {
            await database.Turma.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({mensagem:`id ${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController