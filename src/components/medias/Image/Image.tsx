import React from 'react';
import NextImage from 'next/image';

import { classNames } from '@/aether-ui-core/src/utils/classNames';

import { RootElement } from './Image.styles';
import { TImage } from './Image.types';

export const Image = ({
  className,
  image,
  imageAlt,
  imageSources = [],
  nextImageProps,
  aspectRatio,
  ...props
}: TImage) => {
  let content;
  if (imageAlt) {
    if (imageSources.length) {
      content = (
        <picture
          className={'image__element image__picture'}
          data-testid={'image__picture'}
        >
          {imageSources.map(source => (
            <source
              key={source.src}
              media={source.media}
              type={source.type}
              sizes={source.sizes}
              srcSet={source.src}
            />
          ))}
          <NextImage
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            {...nextImageProps}
          />
        </picture>
      );
    } else {
      content = (
        <NextImage
          className={'image__element image__image'}
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          data-testid={'image__image'}
          {...nextImageProps}
        />
      );
    }
  } else {
    content = <div className={'image__element image__background-image'} />;
  }
  return (
    <RootElement
      data-testid={'Image'}
      {...props}
      className={classNames('image', className)}
      $aspectRatio={aspectRatio}
      $imageUrl={image}
    >
      {content}
    </RootElement>
  );
};
