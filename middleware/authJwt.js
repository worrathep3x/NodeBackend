async function authJwt(request, response) {
    try {
      await request.jwtVerify();
    } catch (err) {
      response.status(401).send({ error: 'Unauthorized' });
    }
  }
  
  module.exports = authJwt;
  