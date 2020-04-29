const {Router} = require('express')
const transformData = require('../middleware/transformData.middleware')
const saveData = require('../middleware/saveData.middleware')
const router = Router()

router.post('/send', transformData, saveData, async (req, res) => {
    console.log(1)
    try {
       // const {tasksState, counter} = req.body
        const {issuesList, panelList} = req.Lists
        console.log(issuesList, panelList)
        res.status(201).json({ message: 'Data send to server'})
    } catch {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
})

module.exports = router