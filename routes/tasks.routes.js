const Router = require('express')

const router = Router()

router.get('/tasks', async (req, res) => {
    try {
        console.log('Body:', req.body)
    } catch {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
})

module.exports = router