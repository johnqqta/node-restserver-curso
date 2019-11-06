require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json
app.use(bodyParser.json());

/*----------------------------------------------------- */
/*------------------------GET-------------------------- */
/*----------------------------------------------------- */
app.get('/', (req, res) => {
    res.json('Peticion Get Normal');
});
////////////////////Para URL localhost/123456/admin/////////////////////
/* donde 123456 es el id y admin es el rol */
app.get('/:id/:rol', (req, res) => {
    let parametros = req.params;
    res.json({
        parametros,
        mens: 'Peticion Get localhost/123456/admin'
    });
    console.log(req.params);
});
////////////////////Para URL localhost/user?id=1234567&rol=admin/////////////////////
app.get('/user', (req, res) => {
    let parametros = req.query;
    res.json({
        parametros,
        mens: 'Peticion Get localhost/user?id=1234567&rol=admin'
    });
    console.log(req.query);
});
/*----------------------------------------------------- */
/*------------------------POST-------------------------- */
/*----------------------------------------------------- */
app.post('/', (req, res) => {
    res.json('Peticion POST Normal');
    console.log(req);
});
//////////////////////con parametros por url//////////////
app.post('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
        mens: `Peticion POST localhost/user/12345`
    });
});
///////////////con peticion localhost/user e informacion form-urlencoded////////////////
app.post('/user', (req, res) => {
    let body = req.body;
    res.json({
        persona: body,
        mens: "POST con informacion form-urlencoded"
    });
});
///////////////con peticion localhost/register e informacion form-data////////////////
app.post('/register', upload.none(), (req, res) => {
    const formData = req.body;
    res.json({
        usuario: formData,
        mens: 'POST con informacion Form-Data'
    });
});
/*----------------------------------------------------- */
/*------------------------PUT--------------------------- */
/*----------------------------------------------------- */

app.put('/', (req, res) => {
    res.json({
        res: true,
        mens: 'Peticion PUT Normal'
    });
});
//////////////////Peticion PUT Tipo localhost/123456/admin////////////// 
app.put('/:id/:rol', (req, res) => {
    const data = req.params;
    res.json({
        parametros: data,
        mens: 'Peticion PUT tipo localhost/123456/admin'
    });
});
/////////////////////Peticion PUT con data por url /////////////////////
app.put('/user', (req, res) => {
    const data = req.query;
    res.json({
        datosUrl: data,
        mens: 'Peticion PUT tipo localhost/user?id=123456&rol=admin'
    });
});

///////////////con peticion localhost/users e informacion form-urlencoded////////////////
app.put('/users', (req, res) => {
    let body = req.body;
    res.json({
        persona: body,
        mens: "PUT con informacion form-urlencoded"
    });
});
///////////////con peticion localhost/register e informacion form-data////////////////
app.put('/register', upload.none(), (req, res) => {
    const formData = req.body;
    res.json({
        usuario: formData,
        mens: 'PUT con informacion Form-Data'
    });
});
/*----------------------------------------------------- */
/*------------------------DELETE----------------------- */
/*----------------------------------------------------- */
app.delete('/', (req, res) => {
    res.json({
        res: true,
        mens: 'Peticion delete Normal'
    });
});
//////////////////Peticion DELETE Tipo localhost/123456/admin////////////// 
app.delete('/:id/:rol', (req, res) => {
    const data = req.params;
    res.json({
        parametros: data,
        mens: 'Peticion delete tipo localhost/123456/admin'
    });
});
/////////////////////Peticion DELETE con data por url /////////////////////
app.delete('/user', (req, res) => {
    const data = req.query;
    res.json({
        datosUrl: data,
        mens: 'Peticion delete tipo localhost/user?id=123456&rol=admin'
    });
});

///////////////con peticion localhost/users e informacion form-urlencoded////////////////
app.delete('/users', (req, res) => {
    let body = req.body;
    res.json({
        persona: body,
        mens: "DELETE con informacion form-urlencoded"
    });
});
///////////////con peticion localhost/register e informacion form-data////////////////
app.delete('/register', upload.none(), (req, res) => {
    const formData = req.body;
    res.json({
        usuario: formData,
        mens: 'Delete con informacion Form-Data'
    });
});
////////////////Manejando codigo de status http//////////////////////////////////////
app.post('/create', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mens: 'El Nombre Es Necesario',
            body
        });
    } else {
        res.json({
            ok: true,
            mens: 'Usuario Creado Correctamente',
            body
        });
    }
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando por Puerto 80`);
});