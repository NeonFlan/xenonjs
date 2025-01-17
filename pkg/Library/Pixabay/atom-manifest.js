/**
 * @license
 * Copyright 2023 Atom54 LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const category = 'Pixabay';

export const Pixabay = {
  PixabayImage: {
    categories: [category, 'Media'],
    displayName: 'Pixabay Image Search',
    description: 'Find images from Pixbay',
    ligature: 'image',
    type: '$library/Pixabay/Atoms/PixabayImage',
    inputs: {
      query: 'String',
      image: 'Image',
      trigger: 'Nonce',
      auto: 'Boolean',
      index: 'Number'
    },
    outputs: {
      image: 'Image',
      images: 'Images'
    }
  }
};
