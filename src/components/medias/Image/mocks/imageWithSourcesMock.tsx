import { TImage } from '@/aether-ui-core/src/components/medias/Image';
import { imageWithAltMock } from './imageWithAltMock';

export const imageWithSourcesMock: TImage = {
  ...imageWithAltMock,
  imageSources: [
    {
      src: 'https://via.placeholder.com/350/FF0000',
      media: '(min-width: 200px) and (max-width: 500px)',
    },
    {
      src: 'https://via.placeholder.com/400/00FF00',
      media: '((min-width: 600px) and (max-width: 800px)',
    },
    {
      src: 'https://via.placeholder.com/450/0000FF',
      media: '(min-width: 900px)',
    },
  ],
};
