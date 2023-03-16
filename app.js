const express = require('express');
const app = express();
const port = 3000;
const db = require('./model/db');

app.use(express.json()); // for parsing application/json



app.get('/usuarios', (req, res) =>{
    return res.json({
        erro: false,
        nome: 'Celke',
        email: 'celke@celke.com'
    })

});

app.get('/usuario/:id', (req, res) =>{
    const { id } = req.params;
    return res.json({
        erro: false,
        id, 
        nome: 'Celke',
        email: 'celke@celke.com.br'
    })

});


app.post('/usuario', (req, res) =>{

    const { nome, email } = req.body
    
    return res.json({
        nome : nome,
        email : email,
        erro: false,
        mensagem: 'Usuário cadastrado com sucesso!'
    })

});


app.put('/usuario', (req, res) =>{
    
    
    const { id, nome, email } = req.body;
    return res.json({
        erro: false,
        id: id,
        nome: nome,
        email: email
    })

});

app.delete('/usuario/:id', (req, res) =>{
        
        const { id } = req.params;
        return res.json({
            erro: false,
            id, 
            mensagem: 'Usuário excluído com sucesso!'
        })
    
    });


    
      
 

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port);
})