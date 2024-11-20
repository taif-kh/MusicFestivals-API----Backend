const { Router } = require('express');
const eventsRouter = Router();
const { PrismaClient } = require('@prisma/client');
const passport = require('passport');
const prisma = new PrismaClient();

eventsRouter.get('/', async (req, res) => {
    response = await prisma.events.findMany({
        orderBy: {
            date: "desc",
        },
    });
    res.json(response);
});

eventsRouter.post('/', async (req, res) => {
    const { name, description, date, city, country, artist, imgUrl } = req.body;
    const ticketPrice = parseFloat(req.body.ticketPrice);
    response = await prisma.events.create({
        data: {
            name, description, date, city, country, ticketPrice, artist, imgUrl
        },
    });

    res.json(response);

});



eventsRouter.get('/:id', async (req, res) => {
    const eventId = Number(req.params.id);
    response = await prisma.events.findUnique({
        where: {
            id: eventId,
        },
    });
    res.json(response);
});



// Update one event
eventsRouter.put('/', async (req, res) => {
    const eventId = Number(req.body.id);
    const { name, description, date, city, country, artist, imgUrl, isFree } = req.body;
    response = await prisma.events.updateUnique({
        where: {
            id: eventId,
        },
        data: {
            name, description, date, city, country, artist, imgUrl, isFree
        },
    });
    res.json(response);
});


// Update free
eventsRouter.put('/event', async (req, res) => {
    const eventId = Number(req.body.id);
    const { isFree } = req.body;
    response = await prisma.events.updateUnique({
        where: {
            id: eventId,
        },
        data: {
            isFree,
        },
    });
    res.json(response);
});

module.exports = eventsRouter;