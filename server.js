const fs = require('fs');
const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

fastify.register(cors, {});

fastify.get('/', async (request, reply) => {
  try {
    const data = await new Promise((resolve, reject) => {
      fs.readFile('./users.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    if (request.query.term) {
      const result = JSON.parse(data).filter(
        (elem) =>
          elem.name.toLowerCase().search(request.query.term.toLowerCase()) !==
          -1
      );
      reply.send(result);
    } else {
      reply.send(data);
    }
  } catch (err) {
    console.log('File read failed:', err);
    reply.status(500).send('Internal Server Error');
  }

  return reply;
});

const start = async () => {
  try {
    await fastify.listen({
      host: '127.0.0.1',
      port: 3000
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
