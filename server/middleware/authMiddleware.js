import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  //The website https://jwt.io/ is the official site for JSON Web Tokens (JWT), and it serves multiple important purposes for developers. Decode JWT Tokens - You can paste a JWT token into the left-side text area, and it will instantly decode it.

  // Get the token from the 'Authorization' header in the request
  // Expected format: 'Bearer <token>', so we split it to get the token part
  const token = req.headers['authorization']?.split(' ')[1];
  // If no token is provided, return an "Access Denied" response
  if (!token) {
    return res.status(401).send({
      error: 'Access denied'
    })
  }
  try {
    //Verify the token using the secret key stored in environment variable
    const verified = jwt.verify(token, process.env.JWT_SECRET);   //jwt.verify not returning an object with .id
    // If valid, attach the user's ID (from the payload) to the request object
    // so that protected routes can access it
    req.userId = verified.userId;    //Make sure your JWT payload actually includes id when the token is created.

    // Proceed to the next middleware or route handler
    next();
  }
  catch {
    // If the token is invalid or expired, respond with "Invalid token"
    res.status(401).send({
      error: 'Invalid token'
    })
  }
}

export default authMiddleware;


// import jwt from 'jsonwebtoken';

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

//   if (!token) {
//     return res.status(401).send({ error: 'Access denied' });
//   }

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = verified.id;
//     next();
//   } catch (err) {
//     console.error('JWT verification error:', err.message);
//     res.status(401).send({ error: 'Invalid token' });
//   }
// };

// export default authMiddleware;


