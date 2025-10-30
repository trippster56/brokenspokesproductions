import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProductCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-white p-4">
      <img
        src={images[index]}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-american-blue border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-american-blue border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-american-blue' : 'bg-gray-300'}`}
              />)
            )}
          </div>
        </>
      )}
    </div>
  );
};

const ColorIndicator: React.FC<{ colors?: string[]; fallback?: boolean }> = ({ colors, fallback }) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      {colors && colors.length > 0 ? (
        <div className="flex items-center gap-2">
          {colors.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="inline-block h-4 w-4 rounded-full border border-gray-300"
              style={{ backgroundColor: c }}
              aria-label={`Color ${c}`}
              title={c}
            />
          ))}
        </div>
      ) : fallback ? (
        <div className="flex items-center gap-1 text-gray-500 text-sm font-western">
          <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-gray-400"></span>
          <span className="inline-block h-3 w-3 rounded-full bg-gray-500"></span>
          <span className="ml-2">Multiple colors available</span>
        </div>
      ) : null }
    </div>
  );
};

const Shop: React.FC = () => {
  const products = [
{
  id: 1,
  title: 'Unisex Heavy Blend Hoodie',
  price: '$35.00',
  images: [
    '/images/shop/unisex-heavy-blend-hoodie.png',
    '/images/shop/back-white-text-hoodie.png'
  ],
  externalLink: 'https://broken-spokes-productions.printify.me/product/24469635/unisex-heavy-blend-hooded-sweatshirt-military-green'
},
    {
      id: 2,
      title: 'Unisex Heavy Cotton Tee',
      price: '$20.00',
      images: [
        '/images/shop/unisex-heavy-cotton.png',
        '/images/shop/back-whitet-shirt.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469634/unisex-heavy-cotton-tee-brown-savannah'
    },
    {
      id: 3,
      title: 'Unisex Heavy Blend Hoodie - Subdued Design',
      price: '$35.00',
      images: [
        '/images/shop/unisex-heavy-blend-hoodie-bltext.png',
        '/images/shop/back-black-text-hoodie.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469632/unisex-heavy-blend-hooded-sweatshirt-military-green-subdued-design'
    },
    {
      id: 4,
      title: 'Dad Hat - Tan',
      price: '$30.00',
      images: [
        '/images/shop/dad-hat-tan.png',
        '/images/shop/dad-hatt-back.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469630/classic-dad-cap-tan'
    },
    {
      id: 5,
      title: 'Dad Hat - Black',
      price: '$30.00',
      images: [
        '/images/shop/dad-hat-black.png',
        '/images/shop/dad-hatb-back.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469628/classic-dad-cap-black'
    },
    {
      id: 6,
      title: 'Unisex Heavy Cotton T-Shirt',
      price: '$20.00',
      images: [
         '/images/shop/unisex-heavy-cotton-tshirt.png',
         '/images/shop/back-blackt-shirt.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469626/unisex-heavy-cotton-tee-military-green'
    },
    {
      id: 7,
      title: 'Black Mug (11oz/15oz)',
      price: '$20.99',
      images: [
        '/images/shop/black-mug-11oz-15oz.png',
        '/images/shop/black-mug-handle.png'
      ],
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469625/black-mug-11oz-15oz'
    },
    {
      id: 8,
      title: 'Rocks Glass',
      price: '$21.99',
      image: '/images/shop/rocks-glass.png',
      externalLink: 'https://broken-spokes-productions.printify.me/product/24469604/rocks-glass-10oz'
    }
  ];

  const openExternal = (url: string) => {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            SHOP
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 font-western max-w-3xl mx-auto leading-relaxed">
            Explore official merch. Click any item to purchase on our external store.
          </p>
          <div className="mt-8">
            <a
              href="https://broken-spokes-productions.printify.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-bold-red text-white font-bold font-western text-lg hover:bg-red-700 transition-colors duration-300 border-2 border-bold-red hover:border-red-700"
            >
              Visit Full Store
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-2 border-gray-200 hover:border-american-blue transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden">
                <ProductCarousel images={(product as any).images ?? [product.image]} alt={product.title} />
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-xl font-bold text-american-blue font-western">
                    {product.title}
                  </h3>
                  <span className="text-bold-red font-western font-bold">{product.price}</span>
                </div>
                <button 
                  onClick={() => openExternal(product.externalLink)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-bold-red hover:text-red-700 font-bold font-western transition-colors duration-300"
                >
                  View on Store
                  <ExternalLink size={16} className="ml-2" />
                </button>
                <ColorIndicator
                  colors={(product as any).colors}
                  fallback={(product.title || '').startsWith('Unisex')}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
