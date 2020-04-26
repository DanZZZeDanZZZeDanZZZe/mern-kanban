module.exports = (req, res, next) => {
    try {
        const {tasksState} = req.body
        
        const issuesList = []
        const panelList = []

        tasksState.forEach(item => {
            const {title, issues} = item
            panelList.push(title)
            if (issues) {
                issues.forEach((issue, ind) => {
                    const {id, name, text} = issue
                    issuesList.push({
                        id, 
                        name, 
                        text, 
                        index: ind, 
                        panelTitle: title, 
                    })
                })
            }
        }) 
        req.Lists = {issuesList, panelList} 
        next()
    } catch {
        res.status(500).json({message: 'Something went wrong. Try it again!'})
    }
}
