import { appParams } from '@/lib/app-params';

const isValidId = (value) =>
  typeof value === 'string' && value.length > 0 && value !== 'null' && value !== 'undefined';

export const isBase44Configured = isValidId(appParams.appId);

export const base44ConfigError =
  'Base44 is not configured. Create a .env.local file with VITE_BASE44_APP_ID and VITE_BASE44_APP_BASE_URL, then restart the dev server.';
