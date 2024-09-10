async function authJwt(request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(401).send({ error: 'Unauthorized' });
    }
  }
  
  module.exports = authJwt;
  