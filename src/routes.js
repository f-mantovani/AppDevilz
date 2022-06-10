const routes = (app) => {
    // Testing if the connection with the routes exists
    app.get('/healthcheck', (req, res) => {res.sendStatus(200)})


}

export default routes