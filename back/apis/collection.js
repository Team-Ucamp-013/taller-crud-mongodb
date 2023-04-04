const express = require('express')
const router = express.Router()
const  {granjaController} = require('../controllers')
const {
    getGranja,
    createGranja,
    getByIDGranja,
    updateGranja,
    removeGranja
} = granjaController

router.get('/', async(req,res)=>{
    const granja = await getGranja()
    res.send(granja)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const granja = await getByIDGranja(id)
  
    // para no hacer product === null, product === undefined, typeof product ...
    if (!granja) {
      res.status(404)
      return res.send({
        message: `Animal: ${id} no encontrado`
      })
    }
  
    return res.send(granja)
  })
  
router.post('/', async(req,res)=>{
    const body = req.body
   try{
    const newGraja = await createGranja(body)
    res.send(newGraja)
   } catch(err){
    console.error(err)
   }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const body = req.body
    const granja = await updateGranja(id ,body)
    if(!granja){
        return res.send({
            message: `Animal con ${id} no encontrado `
        })
    }
    res.send(granja)
})

router.delete('/:id', async(req,res)=>{
const {id} = req.params
const result = await removeGranja(id)

res.send(result)
})

module.exports = router