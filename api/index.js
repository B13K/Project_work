const server = require("./src/app.js")
const { conn } = require("./src/db.js")

// Sync all the models at once.
//conn.sync({force: true })
conn.sync({alter: true})
// conn.sync()
    .then( () => {
        server.listen(3001, () => {
            console.log("%s listening at 3001")
        })
})
