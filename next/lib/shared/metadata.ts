import type { Metadata } from 'next';
import { strapiImage } from '../strapi/strapiImage';

export function generateMetadataObject(seo: any): Metadata {
  const ogImage = seo?.metaImage
    ? [
        {
          url: strapiImage(seo?.metaImage.url),
          width: seo?.metaImage.width || 1200,
          height: seo?.metaImage.height || 630,
          alt: seo?.metaImage.alternativeText || seo?.metaTitle || 'LaunchPad',
        },
      ]
    : [];

  return {
    title: seo?.metaTitle || 'Default Title',
    description: seo?.metaDescription || 'Default Description',
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || 'Default OG Title',
      description:
        seo?.ogDescription || seo?.metaDescription || 'Default OG Description',
      images: ogImage,
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.metaTitle || 'Default Twitter Title',
      description:
        seo?.twitterDescription ||
        seo?.metaDescription ||
        'Default Twitter Description',
      images: ogImage,
    },
  };
}
