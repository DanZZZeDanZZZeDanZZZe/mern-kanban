const Task = require('../models/Task.js')

module.exports = (req, res, next) => {
    try {
        const {issuesList, panelList} = req.Lists
        issuesList.forEach(async (item) => {
            const existing = await Task.findOne({ id: item.id })
            if (!existing) {
                const task = new Task({...item})
                await task.save()
            }
        })
        next()
    } catch {
        res.status(200).json({message: 'Something went wrong. Try it again!'})
    }
}