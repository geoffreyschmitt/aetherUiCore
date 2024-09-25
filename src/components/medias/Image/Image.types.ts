import { ImageProps } from 'next/image';
import { TComponentProps } from '@/utils';

export type TImageSource = {
  /**
   * The media query to use for the image source.
   */
  readonly media?: string;
  /**
   * The MIME type of the image source.
   */
  readonly type?: string;
  /**
   * The sizes to use for the image source in HTML img sizes format.
   */
  readonly sizes?: string;
  /**
   * The URL for the actual image source.
   */
  readonly src: string;
};

export type TImageSourceList = TImageSource[];

export type TImage = TComponentProps &
  Readonly<{
    /**
     * The URL for the main asset image.
     */
    readonly image: string;
    /**
     * The alt text for the  asset image.
     */
    readonly imageAlt?: string;
    /**
     * The array of different source objects for the main asset image.
     */
    readonly imageSources?: TImageSourceList;
    /**
     * The array of different source objects for the main asset image.
     */
    readonly nextImageProps?: Partial<ImageProps>;
    /**
     * The aspect ratio of the asset.
     */
    readonly aspectRatio?: string;
  }>;

export type TImageStyles = {
  $aspectRatio?: string;
  $imageUrl?: string;
};
