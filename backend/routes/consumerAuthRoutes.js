import express from "express";
import consumerModel from '../models/consumerModel.js';
import { hashPassword, comparePassword } from "../auth/hash.js";

const router = express.Router();


router.get('/', async (req, res) => {

    const data = await consumerModel.find();
    if(!data)
    {
        res.json({message : "No data found"});
    }
    else
    {
        res.json(data);
    }
    
})

router.post('/register', async (req, res) => {

    try{
        const name = req.body.name;
        const organization = req.body.organization;
        const email = req.body.email;
        const password = req.body.password;

        const duplicate = await consumerModel.findOne({email : email});

        if(duplicate)
        {
            res.status(409).json({message : "User already present. Please login"});
        }
        else
        {
            const hashedPassword = await hashPassword(password);

            const newUser = await consumerModel.create({name : name, organization : organization, email : email, password : hashedPassword});

            res.status(200).json({message : "User registered successfully"});
        }
    } catch(err) {
        res.status(500).json({message : "Internal Server Error"});
    }
    
})

router.post('/login', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const duplicate = await consumerModel.findOne({email : email});

        if(duplicate)
        {
            const match = await comparePassword(password, duplicate.password);
            if(match)
            {
                res.status(200).json({message : "Login Successful"});
            }
            else
            {
                res.status(401).json({message : "Passwords don't match"})
            }
        } 
        else
        {
            res.status(401).json({message : "No registered user found"});
        }


    } catch(err) {
        res.status(500).json({message : "Internal Server Error"});
    }
})


export {router as consumerAuthRouter};