const express=require('express');
const controllers=require('../controllers/myController')
const uploads=require('../config/multer')
const signUp=require('../controllers/signUpCon')
const logIn =require('../controllers/logInCon')

const router= express();

router.get('/',controllers.defaultCon);
router.get('/signUpForm',signUp.signUpForm);
router.post('/signUp',uploads.single('avatar'),signUp.signUpCon);
router.get('/logInForm',logIn.logInForm);
router.post('/logIn',logIn.logInCon);
router.get('/profile',controllers.profileCon);



// router.get('/createMovie', controllers.createMovieCon);
// router.post('/addMovie',uploads.single('poster'),controllers.addMovieCon);
// router.get('/singleMovie/:id',controllers.singleMovieCon);
// router.post('/update/:id',uploads.single('poster'),controllers.updateMovieCon);
// router.get('/deleteMovie/:id',controllers.deleteMovieCon);
// router.get('/selectMovie/:id',controllers.singleViewCon);

module.exports= router;