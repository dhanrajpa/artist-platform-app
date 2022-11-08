const express = require('express');
const cors = require('cors');

const app = express();

//Port
const Port = process.env.Port || 8080


const corsOptions = {
    origin: 'http://localhost:8006',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('../Api/routes/routes.js');
const eventRouter = require('../Api/routes/eventRoutes');
const Postimg = require('./routes/imageRoutes');
const emailRoute = require('./routes/emailRouter.js')
const likesRoute = require('./routes/likesRouter.js');
const { request } = require('express');
const commentRoute = require('./routes/comentsRoutes')
const ADashboard = require('./routes/artistDashboardRoutes.js')


app.use('/api/check', router);
app.use('/api/artist/artistDashBoard/events', eventRouter);
app.use('/api/artist', Postimg)
app.use('/api/emailsent', emailRoute)
app.use('/api/dashboard/', ADashboard)
//likes route
app.use('/api/likes', likesRoute)
//comment route
app.use('/api/comment', commentRoute)






app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
});

//server
app.listen(Port, () => {
    console.log(`server is running on ${Port}`);
})
