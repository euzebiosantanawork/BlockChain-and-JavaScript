const HttpServer = require('.httpServer');
const Blockchain = require('./blockchain');
const Operator = require('./operator');
const Miner = require('./miner');
const Node = require('./node');

module.exports = fuction naivecoin (host,port, logLevel, name) {

    host = process.env.HOST||host||'localhost';
    port = process.env.PORT || process.env.HTTP_PORT||port||3001;
    peers = (process.env.PEERS ? process.env.LOG_LEVEL : logLevel || 6 );
    name = process.end.NAME || '1';

    require ('./util/consoleWrapper.js')(name , logLevel );

    console.info('Starting node${name}');

    let blockchain = new blockchain(name);
    let operator = new Operator (name , blockchain );
    let miner = new Miner(blockchain.logLevel);
    let node = new Node ( host, port, peers, blockchain );
    let httpSever = new HttpSever ( node , blockchai , operator , miner );

    HttpServer.listen(host , port);

}
