import generateContent from '../services/ai.service.js'


export const getReview = async (req, res) => {
    const { code } = req.body

    if(!code) {
        return res.status(400).send('code is required')
    }

    const response = await generateContent(code)

    res.send(response)
}