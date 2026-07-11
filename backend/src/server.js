import app from "./app.js";
import env from "./config/env.js";
import logger from "./config/logger.js";

const PORT = Number(env.PORT || 5000);
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
});
