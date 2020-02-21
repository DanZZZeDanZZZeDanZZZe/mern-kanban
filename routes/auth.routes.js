const { Router } = require("express")
const config = require("config")

const router = Router()

router.use('/register', async (req, res) => {
    try {
        console.log('register:', req.body)
    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
})

module.exports = router