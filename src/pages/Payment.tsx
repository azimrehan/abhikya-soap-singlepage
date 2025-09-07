import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building2, Wallet, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    bankAccount: '',
    ifscCode: ''
  });

  // Mock order data
  const orderSummary = {
    items: [
      { name: "Rose Garden Soap", quantity: 2, price: 250 },
      { name: "Heart Shaped Soap", quantity: 1, price: 200 }
    ],
    subtotal: 700,
    shipping: 50,
    total: 750
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    // Mock payment processing
    toast({
      title: "Payment Successful!",
      description: "Your order has been placed successfully.",
    });
    
    // Simulate processing delay
    setTimeout(() => {
      navigate('/payment-success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream-bg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/cart')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Button>
            <div className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-leaf-green" />
              <h1 className="text-2xl font-playfair font-semibold text-dark-leaf">Payment</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h2 className="text-xl font-playfair font-semibold text-dark-leaf mb-6">
                Choose Payment Method
              </h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                {/* UPI Payment */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Smartphone className="w-5 h-5 text-leaf-green" />
                      <span className="font-medium">UPI Payment</span>
                    </Label>
                  </div>
                  
                  {paymentMethod === 'upi' && (
                    <div className="ml-6 space-y-3">
                      <div>
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@paytm / yourname@googlepay"
                          value={formData.upiId}
                          onChange={(e) => handleInputChange('upiId', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex gap-2 text-sm text-gray-600">
                        <span>Supported:</span>
                        <span className="font-medium">PhonePe, Google Pay, Paytm, BHIM</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Payment */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5 text-leaf-green" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </Label>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <div className="ml-6 space-y-3">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          placeholder="Name on card"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Net Banking */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building2 className="w-5 h-5 text-leaf-green" />
                      <span className="font-medium">Net Banking</span>
                    </Label>
                  </div>
                  
                  {paymentMethod === 'netbanking' && (
                    <div className="ml-6 space-y-3">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {['SBI', 'HDFC', 'ICICI', 'Axis Bank', 'PNB', 'BOI'].map((bank) => (
                          <Button key={bank} variant="outline" size="sm" className="text-sm">
                            {bank}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Cash on Delivery */}
                <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Wallet className="w-5 h-5 text-leaf-green" />
                    <span className="font-medium">Cash on Delivery</span>
                    <span className="text-sm text-gray-500 ml-auto">+₹20 handling fee</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border sticky top-8">
              <h3 className="text-lg font-playfair font-semibold text-dark-leaf mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-4">
                {orderSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                
                <div className="border-t border-border pt-3 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{orderSummary.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{orderSummary.shipping}</span>
                  </div>
                  {paymentMethod === 'cod' && (
                    <div className="flex justify-between">
                      <span>COD Fee</span>
                      <span>₹20</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-leaf-green">
                        ₹{orderSummary.total + (paymentMethod === 'cod' ? 20 : 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="soap" 
                size="lg" 
                className="w-full"
                onClick={handlePayment}
              >
                <Check className="w-4 h-4 mr-2" />
                Complete Payment
              </Button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Your payment information is secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;