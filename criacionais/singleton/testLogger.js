const SingletonLogger = require('./Logger');

const logger1 = new SingletonLogger();
const logger2 = new SingletonLogger();

logger1.log('This is logger 1');
logger2.log('This is logger 2');

logger1.print();
logger2.print();