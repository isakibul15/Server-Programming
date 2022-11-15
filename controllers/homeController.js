const UserDetails = require('../models/userDetails');
const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const getRegister = (req, res) => {
  res.render('register', { title: 'Register' });
}

const postLogin = (req, res) => {
  console.log(req.user);
}

const postRegister = (req, res) => {
  console.log(req.body);
  UserDetails.register({username:req.body.username, active: false}, req.body.password);
  res.redirect('/login');
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}



module.exports = { getHome, getLogin, postLogin, getRegister, postRegister , getDashboard, logOut };
