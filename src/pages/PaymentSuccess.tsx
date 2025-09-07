import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream-bg flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-border text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-playfair font-semibold text-dark-leaf mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600">
              Thank you for your order. Your handmade soaps are on their way!
            </p>
          </div>

          <div className="bg-cream-bg rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Order ID:</span>
              <span className="font-mono text-sm">#ABH{Math.floor(Math.random() * 10000)}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Amount Paid:</span>
              <span className="font-semibold text-leaf-green">₹750</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estimated Delivery:</span>
              <span className="text-sm">3-5 business days</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Package className="w-4 h-4" />
            <span>Your order confirmation has been sent to your email</span>
          </div>

          <div className="space-y-3">
            <Button
              variant="soap"
              size="lg"
              className="w-full"
              onClick={() => navigate('/')}
            >
              <Home className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
            
            <Button
              variant="soap-outline"
              size="default"
              className="w-full"
              onClick={() => navigate('/products')}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              View More Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;