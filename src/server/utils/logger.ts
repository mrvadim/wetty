import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, simple, colorize } = format;

const logger = createLogger({
  format: combine(
    colorize({ all: process.env.NODE_ENV === 'development' }),
    label({ label: 'Wetty' }),
    timestamp(),
    simple()
  ),
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === 'development' ? 'debug' : 'warn',
      handleExceptions: true,
    }),
  ],
});

export default logger;
