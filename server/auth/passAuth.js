const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('../models');

const bcrypt = require('bcryptjs');



let options = {
    usernameField: 'email'
}

let localLogin = new LocalStrategy(options, async (email, password, done)=>{ 

    try{

        let records = await db.users.findAll({where: {email}}) 

        if(records !== null){
            
            bcrypt.compare(password, records[0].password, (err, isMatch)=>{ 

                if(err){
                    return done(err) 
                }

                if(!isMatch){
                    return done(null, false) 
                }

                // console.log("local login record: ", records)
                return done(null, records[0]) 
            }) 


        }
        else{
            
            return done(null, false)

        }

    }
    catch(error){

        return done(error)
    }
})

passport.use(localLogin)

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.AUTH_SECRETS,
}

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done)=>{ 

    try{
        
        let userID = payload.sub

        let user = await db.users.findByPk(userID); 

        if(user){
            return done(null, user) 

        }
        else{

            return done(null, false)

        }

    }
    catch(error){

        return done(error)
    }

})

passport.use(jwtLogin)