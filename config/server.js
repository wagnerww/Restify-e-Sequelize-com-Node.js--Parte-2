const restify   = require('restify');
const port      = 3000;
const server    = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

server.get('/contatos', (request, response, next) => {
    ///Enum, do tipo: 1=email | 2=telefone
    const Contatos = [
        {
            id:1,
            Nome:'Wagner Ricardo',
            Contatos:[
                {
                    tipo:1,
                    contato:'wagnerricardonet@gmail.com'
                },
                {
                    tipo:2,
                    contato:'123456789123'
                }
            ]
        }];
    response.send(200, Contatos);
    next();
});

server.listen(port, () => {
    console.log(`restify executando na porta:${port}`);
});

module.exports = server;
