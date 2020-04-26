const {Router} = require('express')

const router = Router()

router.post('/send', async (req, res) => {
    try {
        const {tasksState, counter} = req.body
        console.log('bh:', req.body)
        res.status(201).json({ message: 'Data send to server'})
    } catch {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
})

module.exports = router