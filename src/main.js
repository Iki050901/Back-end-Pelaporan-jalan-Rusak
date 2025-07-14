import { web } from './application/web.js';
import { logger } from './application/logging.js';
import serverless from 'serverless-http';

// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 3000;
//   web.listen(PORT, () => {
//     logger.info(`App running at http://localhost:${PORT}`);
//   });
// }
// web.get('/', (req, res) => {
//   res.send(`
//     <h1 style="font-family: sans-serif; color: green; text-align: center; margin-top: 50px;">
//       ✅ Backend Express Berhasil Jalan di Port 3100
//     </h1>
//   `);
// });
export default serverless(web);
