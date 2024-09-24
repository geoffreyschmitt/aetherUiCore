import { TTab } from '../Tabs.types';

export const tabListWithEmptyContentMock: TTab[] = [
  {
    id: 'tab-1',
    title: 'General Overview',
    content:
      'This tab represents a general overview of the subject. It provides broad information and points to specific sections for more detailed information.',
  },
  {
    id: 'tab-2',
    title: 'Specific Details',
    content: '',
  },
  {
    id: 'tab-3',
    title: 'Additional Resources',
    content:
      'This tab contains a collection of additional resources. The resources may include external links, downloadable documents, references, and more for further reading and exploration of the topic.',
  },
];
