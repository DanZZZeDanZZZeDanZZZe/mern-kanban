const express = require('express')
const config = require('config')
const dataRouter = require('./routes/data.routes')
const authRouter = require('./routes/auth.routes')
const app = express()

app.use(express.json({ extended: true}))

app.use('/api/auth', authRouter)
app.use('/api/data', dataRouter)

const PORT = config.get('port') || 5000

async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on ${PORT}`))
    } catch(e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}

start()

