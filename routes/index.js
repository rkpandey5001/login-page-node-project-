const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const userController=require('../controllers/users_controller');
console.log("router loaded");
router.get('/',homeController.home);
// router.get('/careers',homeController.careers);
// router.get('/contacts',homeController.contacts);
// router.get('/profile',userController.profile);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
module.exports=router;