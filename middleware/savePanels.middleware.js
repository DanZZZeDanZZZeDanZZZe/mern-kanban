const Panel = require('../models/Panel.js')

module.exports = async (req, res, next) => {
    try {
        const {panelList} = req.Lists
        let index = 0

        for (item of panelList) {
            const existing = await Panel.findOne({ title: item, index })
            if (!existing) {
                await Panel.deleteMany( {index: {$gte: index}} )
                break
            } 
            ++index
        }
        console.log(index)
        if (index !== panelList.length - 1) {
            for (let i = index; i <= panelList.length; i++) {
                const task = new Panel({ title: panelList[i], index: i})
                await task.save()
            }
        }
        
        next()
    } catch {
        res.status(200).json({message: 'Something went wrong. Try it again!'})
    }
}

