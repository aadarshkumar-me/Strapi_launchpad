/**
 * `article-populate` middleware
 */
import type { Core } from '@strapi/strapi';

const populate = {
  localizations: true,
  image: true,
  dynamic_zone: {
    on: {
      'dynamic-zone.related-articles': {
        populate: {
          articles: {
            populate: {
              image: true,
            },
          },
        },
      },
      'dynamic-zone.cta': {
        populate: {
          CTAs: true,
        },
      },
    },
  },
  seo: {
    populate: {
      metaImage: true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate;
    await next();
  };
};
