const User = require('../models/user.js');

module.exports.renderSignup=(req, res) => {
    res.render("users/signup.ejs")
}

module.exports.signup=async (req, res) => {
    try{
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registerUser = await User.register(newUser, password)
        req.login(registerUser,(err)=>{
            if(err){
                next(err)
            }
            else{
                req.flash("success", "Welcome to wanderlust")  
                res.redirect('/listings');
            }
        })
        
    }
    catch(err){
        req.flash("error",err.message)
        res.redirect("/signup")
    }
}

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs")
}

module.exports.login=async(req,res)=>{
    req.flash("success", "Welcome to wanderlust")
    let redirectUrl= res.locals.redirectUrl || '/listings';
    res.redirect(redirectUrl)
}
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        else{
            req.flash("success","You are Logged out")
            res.redirect("/listings")
        }
    })
}

