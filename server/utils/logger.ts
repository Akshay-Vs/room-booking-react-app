import { getDateTime } from './getDateTime';

interface ILoggerProps {
  message: string;
  level: 'info' | 'warning' | 'error' | 'success' | 'debug' | undefined;
}

const logger = (message, level) => {
  const yellow = '\x1b[33m%s\x1b[0m';
  const red = '\x1b[31m%s\x1b[0m';
  const green = '\x1b[32m%s\x1b[0m';
  const blue = '\x1b[34m%s\x1b[0m';
  const cyan = '\x1b[36m%s\x1b[0m';

  const infoEmoji = '📍';
  const warningEmoji = '⚠️';
  const errorEmoji = '❌';
  const successEmoji = '✅';
  const debugEmoji = '🐞';

  switch (level) {
    case 'info':
      console.log(
        `${cyan}`,
        `[${getDateTime()}] ${infoEmoji} [INFO] ${message}`
      );
      break;
    case 'warning':
      console.log(
        `${yellow}`,
        `[${getDateTime()}] ${warningEmoji} [WARNING] ${message}`
      );
      break;
    case 'error':
      console.log(
        `${red}`,
        `[${getDateTime()}] ${errorEmoji} [ERROR] ${message}`
      );
      break;
    case 'success':
      console.log(
        `${green}`,
        `[${getDateTime()}] ${successEmoji} [SUCCESS] ${message}`
      );
      break;
    case 'debug':
      console.log(
        `${blue}`,
        `[${getDateTime()}] ${debugEmoji} [DEBUG] ${message}`
      );
      break;
    default:
      console.log(
        `${cyan}`,
        `[${getDateTime()}] ${infoEmoji} [INFO] ${message}`
      );
      break;
  }
};

export default logger;
