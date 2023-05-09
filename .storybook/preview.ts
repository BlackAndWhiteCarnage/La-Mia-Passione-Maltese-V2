/**
 * External dependencies
 */
import type { Preview } from '@storybook/react'

/**
 * Internal dependencies
 */
import '../src/scss/storybook.scss';
import viewports from './viewports';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...viewports,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#eeeeee',
        },
        {
          name: 'dark',
          value: '#090909',
        },
      ],
    },
  },
}


export default preview
