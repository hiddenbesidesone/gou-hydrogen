import {ProductSwimlaneCard, Section} from '~/components';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  count = 12,
  ...props
}) {
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="swimlane hiddenScroll md:pb-0 md:scroll-px-1 lg:scroll-px-1 md:px-1 lg:px-1 border-solid border-gray-400 border-t border-b">
        {products.nodes.map((product) => (
          <ProductSwimlaneCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </div>
    </Section>
  );
}
