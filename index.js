const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World WALKER Out walker item!')
});
const users = [
    { id: 0, name: "rakibul", email: "rakibul@gmail.com" },
    { id: 1, name: "wasif", email: "rakibul@gmail.com" },
    { id: 2, name: "monika", email: "rakibul@gmail.com" }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});