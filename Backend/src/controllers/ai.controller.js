import generateContent from '../services/ai.service.js'


export const getResponse = async (req, res) => {
    const prompt = req.query.prompt

    if(!prompt) {
        return res.status(400).send('prompt is required')
    }

    const response = await generateContent(prompt)

    res.send(response)
}