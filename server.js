const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const upload = multer({ dest: 'uploads/' });

// আপনার Deepseek API কী এখানে পেস্ট করুন
const DEEPSEEK_API_KEY = 'sk-27aa146611954867a8035c925d186267';

app.post('/convert', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).send('No text provided');
    }

    try {
        const response = await axios.post(
            'https://api.deepseek.com/v1/chat/completions',
            {
                model: 'deepseek-coder',
                messages: [
                    {
                        content: `You are a helpful assistant that converts raw text from a book into a structured HTML page. Based on the following template, please format the provided text. Make sure to identify chapters, headings, author introductions, multiple-choice questions, and other sections, and wrap them in the appropriate HTML tags as seen in the example. Here is the template structure:\n\n${fs.readFileSync('HSC_Bangla_1st_2014-2015.html', 'utf-8')}\n\nNow, please format the following text:\n\n${text}`,
                        role: 'user'
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
                }
            }
        );

        res.send(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error with Deepseek API:', error.response ? error.response.data : error.message);
        res.status(500).send('Error processing the text with Deepseek API.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
