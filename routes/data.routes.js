const {Router} = require('express')

const router = Router()

router.post('/send', async (req, res) => {
    try {
        const { id } = req.body
        console.log('bh:', id)
        res.status(201).json({ message: 'Data send to server'})
    } catch {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
})

module.exports = router