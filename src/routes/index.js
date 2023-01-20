import { Router } from "express";

const router= Router();

router.get('/mi-cv',(req,res)=>{
    res.render('vistas/micv')
})
export default router
