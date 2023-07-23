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
    { title: 'BTC Payments' },
    { description: 'BTC payments welcome' },
  ];
}

export default function Btcpayments() {
  return (
    <div>
      <h3>BTC payment accepted here</h3>
    </div>
  );
}

