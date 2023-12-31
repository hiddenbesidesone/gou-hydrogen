import {defer} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {AnalyticsPageType} from '@shopify/hydrogen';
import { MediaFile } from '@shopify/hydrogen';

import {ProductSwimlane, FeaturedCollections, Hero} from '~/components';
import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders} from '~/data/cache';

export function meta() {
  return [
    { title: 'Contact &amp; Support' },
    { description: 'Gates Of Utopia Customer Support' },
  ];
}

export default function Contact() {
  return (
    <div>
      <h3>Contact Us - direct to page in React</h3>
    </div>
  );
}

