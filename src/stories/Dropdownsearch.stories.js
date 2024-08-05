import { fn } from '@storybook/test';
import { Dropdownsearch } from '../components/Dropdownsearch/Dropdownserch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Dropdownsearch',
  component: Dropdownsearch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

};

// Basic Search
export const Searchable = {
  args: {
    placeholder: 'Type To Search',
    searchable: true,
  },
};

/**
 * Portal Support
 */
export const Portal = {
  args: {
    placeholder: 'Type To Search',
    searchable: true,
    datasource: ["satu", "satu dua"],
  },
};
