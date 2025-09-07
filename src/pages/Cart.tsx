import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();

  // Mock cart data - in a real app this would come from state management
  const cartItems = [
    {
      id: 1,
      name: "Rose Garden Soap",
      category: "Floral Collection",
      price: 250,
      quantity: 2,
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Heart Shaped Soap",
      category: "Fun Shaped",
      price: 200,
      quantity: 1,
      image: "/api/placeholder/150/150"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-leaf-green" />
              <h1 className="text-2xl font-playfair font-semibold text-dark-leaf">Your Cart</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-playfair text-dark-leaf mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some beautiful handmade soaps to get started!</p>
            <Button 
              variant="soap" 
              size="lg"
              onClick={() => navigate('/products')}
            >
              Shop Our Collections
            </Button>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-playfair font-semibold text-dark-leaf mb-6">
                Cart Items ({cartItems.length})
              </h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm border border-border">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-dark-leaf">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-leaf-green">₹{item.price}</span>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 border border-border rounded-md">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border sticky top-8">
                <h3 className="text-lg font-playfair font-semibold text-dark-leaf mb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-leaf-green">₹{total}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="soap" 
                  size="lg" 
                  className="w-full mb-3"
                  onClick={() => navigate('/payment')}
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="soap-outline" 
                  size="default" 
                  className="w-full"
                  onClick={() => navigate('/products')}
                >
                  Continue Shopping
                </Button>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  Free shipping on orders above ₹500
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;