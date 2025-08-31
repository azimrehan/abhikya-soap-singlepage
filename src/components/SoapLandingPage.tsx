import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Instagram, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.jpg';
import heroBackground from '@/assets/hero-background.jpg';
import funShapedSoaps from '@/assets/fun-shaped-soaps.jpg';
import floralCollection from '@/assets/floral-collection.jpg';
import herbalCollection from '@/assets/herbal-collection.jpg';

const SoapLandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const LeafIcon = () => (
    <svg className="w-6 h-6 text-leaf-green" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-cream-bg font-inter relative">
      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 z-50 bg-leaf-green text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 animate-in slide-in-from-bottom">
          Item added to cart!
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
              <img 
                src={logoImage} 
                alt="Abhikya's Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-semibold text-dark-leaf">Abhikya's</span>
                <span className="font-inter text-sm text-muted-foreground">family soaps</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Home</a>
              <a href="#products" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Products</a>
              <a href="#about" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">About Us</a>
              <a href="#contact" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Contact</a>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-dark-leaf cursor-pointer hover:text-leaf-green transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-leaf-green text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-dark-leaf" />
                ) : (
                  <Menu className="w-6 h-6 text-dark-leaf" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Home</a>
                <a href="#products" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Products</a>
                <a href="#about" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">About Us</a>
                <a href="#contact" className="font-inter font-medium text-foreground hover:text-leaf-green transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-cream-bg/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-dark-leaf mb-6 leading-tight">
            Discover Nature<br />in Every Shape
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Handmade, Pure, and Chemical-Free soaps crafted with the finest natural ingredients for your family.
          </p>
          <Button variant="soap" size="hero" onClick={addToCart}>
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <LeafIcon />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-leaf">Our Collections</h2>
              <LeafIcon />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={funShapedSoaps} 
                  alt="Fun Shaped Soaps" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-dark-leaf mb-2">Fun Shaped Soaps</h3>
                <p className="font-inter text-muted-foreground mb-4">Delightful shapes that make bath time fun for the whole family.</p>
                <Button variant="soap-outline" className="w-full" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={floralCollection} 
                  alt="Floral Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-dark-leaf mb-2">Floral Collection</h3>
                <p className="font-inter text-muted-foreground mb-4">Infused with real flower petals for a luxurious bathing experience.</p>
                <Button variant="soap-outline" className="w-full" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={herbalCollection} 
                  alt="Herbal Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-dark-leaf mb-2">Herbal Collection</h3>
                <p className="font-inter text-muted-foreground mb-4">Therapeutic herbs for gentle cleansing and skin nourishment.</p>
                <Button variant="soap-outline" className="w-full" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-cream-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <LeafIcon />
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-leaf">Pure, Natural, Handmade.</h2>
              </div>
              <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Abhikya's Family Soap, we believe that nature provides everything your skin needs to stay healthy and beautiful. Our commitment to using only the finest natural, chemical-free ingredients means every bar of soap is crafted with love and care.
                </p>
                <p>
                  From our family to yours, we hand-select organic herbs, essential oils, and botanical extracts to create soaps that cleanse without stripping away your skin's natural moisture. Each bar is a testament to our dedication to purity and quality.
                </p>
                <p>
                  Experience the difference that comes from choosing natural, handmade soaps that respect both your skin and the environment.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Abhikya's Family Soap Story" 
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-leaf/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <LeafIcon />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-leaf">What Our Customers Say</h2>
            <LeafIcon />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-inter text-2xl md:text-3xl text-muted-foreground italic leading-relaxed mb-8">
              "These soaps are just wonderful! My skin has never felt softer, and I love knowing that I'm using products that are completely natural and safe for my family."
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-leaf-green fill-current" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={logoImage} 
                  alt="Abhikya's Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-playfair text-2xl font-semibold">Abhikya's</span>
                  <span className="font-inter text-sm text-gray-300">family soaps</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-inter">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Follow Us</h3>
              <a 
                href="https://instagram.com/abhikyas_soap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-inter"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 font-inter text-gray-300">
                <p>Natural & Handmade</p>
                <p>Chemical-Free Soaps</p>
                <p>Made with Love</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-inter text-gray-300">
              © 2024 Abhikya's Family Soap. All rights reserved. Handmade with ❤️ for your family.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoapLandingPage;