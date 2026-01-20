declare global {
  interface Window {
    SignUpFormWidget?: { init: () => void };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
