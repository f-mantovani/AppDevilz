import { app } from './app.js';
import logger from './src/utils/logger.js';

export const server = app.listen(process.env.PORT || 8080, () => {
    logger.info(`Server is running on ${process.env.PORT || 8080}`);
});
