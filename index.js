require('dotenv').config();
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do Parse Server
const api = new ParseServer({
    databaseURI: process.env.DATABASE_URI, 
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY, 
    serverURL: process.env.SERVER_URL,
});

app.use('/parse', api);

app.get('/', (req, res) => {
    res.send('🚀 API do Sistema de Gestão Escolar rodando!');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});
