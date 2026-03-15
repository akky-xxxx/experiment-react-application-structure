import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  './src/modules/i18n/getRequestConfig/index.ts',
);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
