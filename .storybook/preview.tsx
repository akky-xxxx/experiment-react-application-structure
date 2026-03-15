import { NextIntlClientProvider } from "next-intl"

import { RESOURCES } from "../src/modules/i18n/getRequestConfig/modules/getMessages/constants/RESOURCES"
import "../src/globalStyles/customProperties.css"
import "../src/globalStyles/global.css"

import type { Preview } from "@storybook/nextjs-vite";
import type { LOCALES } from "../src/shared/domains/LOCALES"

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const {locale} = context.globals
      // @ts-expect-error プロダクト影響がないため黙らせる
      const messages = RESOURCES[locale]

      return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Story {...context} />
        </NextIntlClientProvider>
      )
    },
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'ja',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ja', title: 'Japanese' },
          { value: 'en', title: 'English' },
        ] satisfies Array<{ title: string, value: (typeof LOCALES)[number] }>,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
