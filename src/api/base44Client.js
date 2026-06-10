import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';
import { base44ConfigError, isBase44Configured } from '@/lib/base44-config';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

const createUnconfiguredClient = () => {
  const notConfigured = () => Promise.reject(new Error(base44ConfigError));

  return {
    auth: {
      loginViaEmailPassword: notConfigured,
      loginWithProvider: notConfigured,
      register: notConfigured,
      verifyOtp: notConfigured,
      resendOtp: notConfigured,
      resetPasswordRequest: notConfigured,
      resetPassword: notConfigured,
      me: notConfigured,
      setToken: () => {},
      logout: () => {},
      redirectToLogin: () => {},
    },
    analytics: {
      track: () => {},
      cleanup: () => {},
    },
    cleanup: () => {},
  };
};

export const base44 = isBase44Configured
  ? createClient({
      appId,
      token,
      functionsVersion,
      serverUrl: '',
      requiresAuth: false,
      appBaseUrl,
    })
  : createUnconfiguredClient();
