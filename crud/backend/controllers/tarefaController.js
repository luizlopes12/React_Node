const Tarefa = require('../models/Tarefa.js')

class tarefaController {

    static criarTarefa = (req, res) =>{
        Tarefa.create(req.body)
        .then((value)=>{
            res.status(200).json(value)
        })
        .catch((err)=>{
            res.status(500).json(err.message)
        })
    }

    static listarTarefa = (req, res) =>{
        Tarefa.findAll()
        .then((value)=>{
            res.status(200).json(value)
        })
        .catch((err)=>{
            res.status(500).json(err.message)
        })
    }

    static listarTarefaPorId = (req, res) =>{
        let { id } = req.params
        Tarefa.findByPk(id)
        .then((value)=>{
            res.status(200).json(value)
        })
        .catch((err)=>{
            res.status(500).json(err.message)
        })
    }

    static atualizarTarefa = (req, res) =>{
        let { id } = req.params
        let { title, description } = req.body
        Tarefa.upsert(
            {id, title, description}
        )
        .then((value)=>{
            res.status(200).json({message: "Tarefa atualizada com sucesso"})
        })
        .catch((err)=>{
            res.status(500).json({message: `[ERROR]: ${err.message}`})
        })
    }

    static excluirTarefa = (req, res) =>{
        let { id } = req.params
        Tarefa.destroy({where: { id }})
        .then(()=>{
            res.status(200).json({message: "Tarefa excluida com sucesso"})
        })
        .catch((err)=>{
            res.status(200).json({message: `[ERROR]: ${err.message}`})
        })
    }
}


module.exports = tarefaController