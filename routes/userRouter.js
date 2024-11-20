const { Router } = require('express');
const userRouter = Router();
const { PrismaClient } = require('@prisma/client');
const passport = require('passport');
const prisma = new PrismaClient();

userRouter.get('/', async (req, res) => {
    res.json("message");
});

module.exports = userRouter;