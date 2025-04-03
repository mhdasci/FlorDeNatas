import React, { useState } from 'react';
import { Phone, MinusCircle, PlusCircle, ShoppingCart, Trash2 } from 'lucide-react';
import { OrderFormData, SIZES, FORMATS, CartItem } from '../types';
import toast from 'react-hot-toast';

const PIX_KEY = "31991994791";
const WHATSAPP_NUMBER = "5531991994791";

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    cart: [],
    paymentMethod: 'whatsapp'
  });

  const [currentItem, setCurrentItem] = useState<CartItem>({
    format: 'Redonda',
    size: '200g',
    quantity: 1,
    price: SIZES[0].price
  });

  const total = formData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (increment: boolean) => {
    setCurrentItem(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + (increment ? 1 : -1))
    }));
  };

  const addToCart = () => {
    setFormData(prev => ({
      ...prev,
      cart: [...prev.cart, currentItem]
    }));
    toast.success('Item adicionado ao carrinho!');
    setCurrentItem({
      format: 'Redonda',
      size: '200g',
      quantity: 1,
      price: SIZES[0].price
    });
  };

  const removeFromCart = (index: number) => {
    setFormData(prev => ({
      ...prev,
      cart: prev.cart.filter((_, i) => i !== index)
    }));
    toast.success('Item removido do carrinho!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || formData.cart.length === 0) {
      toast.error('Por favor, preencha todos os campos obrigatórios e adicione itens ao carrinho.');
      return;
    }

    const paymentAmount = formData.paymentMethod === 'pix-half' ? total * 0.5 : total;
    
    if (formData.paymentMethod.startsWith('pix')) {
      toast.success(`Chave PIX: ${PIX_KEY}\nValor: R$ ${paymentAmount.toFixed(2)} ${formData.paymentMethod === 'pix-half' ? '(50% do total)' : '(Valor total)'}`);
      
      const message = encodeURIComponent(
        `Olá! Acabei de fazer um pedido:\n` +
        `Nome: ${formData.name}\n` +
        `Itens do pedido:\n${formData.cart.map(item => 
          `- ${item.format} ${item.size} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`
        ).join('\n')}\n` +
        `Total: R$ ${total.toFixed(2)}\n` +
        `Pagamento via PIX: R$ ${paymentAmount.toFixed(2)} ${formData.paymentMethod === 'pix-half' ? '(50%)' : '(Total)'}`
      );
      
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    } else {
      const message = encodeURIComponent(
        `Olá! Gostaria de fazer um pedido:\n` +
        `Nome: ${formData.name}\n` +
        `Itens do pedido:\n${formData.cart.map(item => 
          `- ${item.format} ${item.size} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`
        ).join('\n')}\n` +
        `Total: R$ ${total.toFixed(2)}`
      );
      
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-brown-700 font-bold mb-2">Nome *</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border rounded-md"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-brown-700 font-bold mb-2">Telefone *</label>
        <div className="flex items-center">
          <Phone className="mr-2" />
          <input
            type="tel"
            required
            className="w-full px-3 py-2 border rounded-md"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-bold text-brown-700 mb-4">Adicionar Item</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-brown-700 font-bold mb-2">Formato *</label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={currentItem.format}
              onChange={e => setCurrentItem(prev => ({ ...prev, format: e.target.value as any }))}>
              {FORMATS.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-brown-700 font-bold mb-2">Tamanho *</label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={currentItem.size}
              onChange={e => {
                const size = e.target.value;
                const price = SIZES.find(s => s.size === size)?.price || 0;
                setCurrentItem(prev => ({ ...prev, size, price }));
              }}>
              {SIZES.map(({ size, price }) => (
                <option key={size} value={size}>
                  {size} - R$ {price.toFixed(2)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-brown-700 font-bold mb-2">Quantidade *</label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => handleQuantityChange(false)}
                className="text-pink-600">
                <MinusCircle />
              </button>
              <span className="text-xl">{currentItem.quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange(true)}
                className="text-pink-600">
                <PlusCircle />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={addToCart}
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition flex items-center justify-center">
            <ShoppingCart className="mr-2" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {formData.cart.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="text-lg font-bold text-brown-700 mb-4">Carrinho</h3>
          <div className="space-y-2">
            {formData.cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-pink-50 p-2 rounded">
                <div>
                  <p className="font-medium">{item.format} - {item.size}</p>
                  <p className="text-sm">Quantidade: {item.quantity}</p>
                  <p className="text-sm">Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-brown-700 font-bold mb-2">Método de Pagamento *</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="pix-half"
              checked={formData.paymentMethod === 'pix-half'}
              onChange={e => setFormData(prev => ({ ...prev, paymentMethod: e.target.value as any }))}
              className="mr-2"
            />
            PIX (50% do valor - R$ {(total * 0.5).toFixed(2)})
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="pix-full"
              checked={formData.paymentMethod === 'pix-full'}
              onChange={e => setFormData(prev => ({ ...prev, paymentMethod: e.target.value as any }))}
              className="mr-2"
            />
            PIX (Valor total - R$ {total.toFixed(2)})
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="whatsapp"
              checked={formData.paymentMethod === 'whatsapp'}
              onChange={e => setFormData(prev => ({ ...prev, paymentMethod: e.target.value as any }))}
              className="mr-2"
            />
            WhatsApp
          </label>
        </div>
      </div>

      <div className="text-xl font-bold text-brown-700">
        Total: R$ {total.toFixed(2)}
      </div>

      <button
        type="submit"
        disabled={formData.cart.length === 0}
        className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
        {formData.paymentMethod.startsWith('pix') ? 'Pagar com PIX' : 'Pedir via WhatsApp'}
      </button>
    </form>
  );
}