const express = require('express')
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library')
const bodyParser = require('body-parser')

const app = express();
const client = new OAuth2Client('201528631962-ug8pe1jbincpc4n4bvr242v4ia3capco.apps.googleusercontent.com');

app.use(cors());
app.use(bodyParser.json())

app.post('/api/google-login', async (req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
    });
    res.status(200).json(ticket.getPayload());
})

app.listen(4001, () => console.log('🚀 Server listening on port 4001!'));