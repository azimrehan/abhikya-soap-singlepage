import React, { useState } from 'react';
import { ShoppingCart, ArrowLeft, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import funShapedSoaps from '@/assets/fun-shaped-soaps.jpg';
import floralCollection from '@/assets/floral-collection.jpg';
import herbalCollection from '@/assets/herbal-collection.jpg';

const Products = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState('');

  const addToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    setNotification(`${productName} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const categories = {
    'fun-shaped': {
      title: 'Fun Shaped Soaps',
      emoji: '🎭',
      description: 'Delightful shapes that make bath time magical',
      image: funShapedSoaps,
      products: [
        { name: 'Butterfly Soap', price: '₹120', description: 'Beautiful butterfly shape with gentle moisturizing formula' },
        { name: 'Rose Soap', price: '₹150', description: 'Elegant rose shape infused with rose oil' },
        { name: 'Teddy Bear Soap', price: '₹130', description: 'Adorable teddy bear perfect for kids' },
        { name: 'Heart Soap', price: '₹140', description: 'Romantic heart shape with love-inspired fragrance' },
        { name: 'Star Soap', price: '₹125', description: 'Shimmering star shape that sparkles during use' },
        { name: 'Fish Soap', price: '₹135', description: 'Cute fish design with ocean-fresh scent' }
      ]
    },
    'floral': {
      title: 'Floral Collection',
      emoji: '🌹',
      description: 'Romantic florals with nourishing oils',
      image: floralCollection,
      products: [
        { name: 'Rose Bliss', price: '₹180', description: 'Pure rose petals with vitamin E for radiant skin' },
        { name: 'Lavender Calm', price: '₹170', description: 'Soothing lavender for relaxation and stress relief' },
        { name: 'Jasmine Glow', price: '₹190', description: 'Exotic jasmine with natural glow enhancers' },
        { name: 'Champa Serenity', price: '₹185', description: 'Traditional champa fragrance for inner peace' },
        { name: 'Mogra Bliss', price: '₹175', description: 'Sweet mogra flowers with anti-aging properties' },
        { name: 'Marigold Fresh', price: '₹165', description: 'Bright marigold with antibacterial benefits' }
      ]
    },
    'herbal': {
      title: 'Herbal Collection',
      emoji: '🌿',
      description: 'Therapeutic herbs for purifying and revitalizing',
      image: herbalCollection,
      products: [
        { name: 'Neem Guard', price: '₹160', description: 'Pure neem for acne-free and healthy skin' },
        { name: 'Aloe Vera Fresh', price: '₹155', description: 'Cooling aloe vera for sensitive skin relief' },
        { name: 'Turmeric Glow', price: '₹170', description: 'Golden turmeric for natural skin brightening' },
        { name: 'Tulsi Pure', price: '₹165', description: 'Holy basil with purifying and healing properties' },
        { name: 'Mint Cool', price: '₹150', description: 'Refreshing mint for an energizing bath' },
        { name: 'Tea Tree Clear', price: '₹175', description: 'Tea tree oil for clear, blemish-free skin' }
      ]
    }
  };

  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>('fun-shaped');

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Header with Cart */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            
            <div className="flex items-center gap-2 bg-soap-green text-white px-4 py-2 rounded-full">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Leaf className="w-8 h-8 text-soap-green" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark-leaf">Our Products</h1>
            <Leaf className="w-8 h-8 text-soap-green" />
          </div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of handmade, natural soaps crafted with love and care
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "soap" : "soap-outline"}
              onClick={() => setSelectedCategory(key as keyof typeof categories)}
              className="flex items-center gap-2"
            >
              <span>{category.emoji}</span>
              {category.title}
            </Button>
          ))}
        </div>

        {/* Selected Category Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img 
              src={categories[selectedCategory].image}
              alt={categories[selectedCategory].title}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-soap-green text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
              {categories[selectedCategory].emoji}
            </div>
          </div>
          <h2 className="font-playfair text-3xl font-bold text-dark-leaf mb-2">
            {categories[selectedCategory].title}
          </h2>
          <p className="font-inter text-muted-foreground">
            {categories[selectedCategory].description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories[selectedCategory].products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-soap-green/20">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-soap-green/10 to-dark-leaf/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {categories[selectedCategory].emoji}
                  </div>
                </div>
                <CardTitle className="font-playfair text-xl text-dark-leaf">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-2xl font-bold text-soap-green">
                    {product.price}
                  </span>
                  <Button 
                    variant="soap"
                    onClick={() => addToCart(product.name)}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-soap-green text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-bottom-2 z-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {notification}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;