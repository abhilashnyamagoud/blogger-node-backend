const express=require('express');

const router=express.Router();
const userController=require('../app/controllers/usersCltr');
const blogController=require("../app/controllers/blogCltr")
const {authenticateUser} =require('../app/middlewares/authentication')

//Routes For User Register Login and Profile

router.post('/users/register',userController.register)
router.get('/users',userController.list)
router.post('/users/login',userController.login)
router.get('/users/account',authenticateUser,userController.account)

//Blog Routes

router.get('/blogs',blogController.list)
router.post('/blogs/add',blogController.create)
router.delete('/blogs/remove/:id',blogController.remove)
router.get('/blogs/:id',blogController.show)
router.put('/blogs/:id',blogController.update)



module.exports=router