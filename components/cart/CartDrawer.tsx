"use client";

import { X, Plus, Minus, ShoppingBag, MessageCircle, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatPrice } from "@/lib/utils";
import { getWhatsAppOrderUrl, siteConfig } from "@/lib/site-config";
import { VegIndicator } from "@/components/ui/Badge";

export function CartDrawer() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const formattedWhatsAppItems = items.map((i) => ({
    name: i.item.name,
    quantity: i.quantity,
    price: i.item.price,
  }));

  const whatsappUrl = getWhatsAppOrderUrl(formattedWhatsAppItems, totalAmount);

  return (
    <>
      {/* Floating Bottom Cart Bar (appears when items > 0 and drawer is closed) */}
      {!isCartOpen && totalCount > 0 && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md"
        >
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between p-3.5 px-6 rounded-full bg-espresso-900 text-cream-50 shadow-warm-xl border border-marigold-500/40 hover:bg-espresso-950 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-marigold-400" />
                <span className="absolute -top-1.5 -right-2 h-4 w-4 rounded-full bg-terracotta-500 text-[10px] font-bold text-white flex items-center justify-center">
                  {totalCount}
                </span>
              </div>
              <span className="text-sm font-sans font-medium">
                {totalCount} {totalCount === 1 ? "item" : "items"} selected
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-serif text-base font-semibold text-marigold-300">
                {formatPrice(totalAmount)}
              </span>
              <span className="text-xs bg-marigold-500 text-espresso-950 font-semibold px-3 py-1 rounded-full">
                View Order
              </span>
            </div>
          </button>
        </motion.div>
      )}

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-espresso-950/60 backdrop-blur-xs"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative w-full max-w-md bg-cream-50 h-full shadow-2xl flex flex-col z-10 border-l border-cream-200"
            >
              {/* Header */}
              <div className="p-5 border-b border-espresso-900/10 flex items-center justify-between bg-cream-100">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-terracotta-600" />
                  <h3 className="font-serif text-xl text-espresso-950 font-medium">
                    Your Order
                  </h3>
                  <span className="text-xs font-mono bg-cream-200 text-espresso-800 px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-espresso-600/70 hover:text-red-700 p-1 flex items-center gap-1"
                      title="Clear all items"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-full bg-cream-200 text-espresso-800 hover:bg-cream-300"
                    aria-label="Close cart"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-200 mx-auto text-espresso-600/60 mb-4">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <h4 className="font-serif text-xl text-espresso-900 font-normal">
                      Your order is empty
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-espresso-700/70 font-sans max-w-xs mx-auto">
                      Explore our menu and click &ldquo;Add to Order&rdquo; on your favorite chai, snacks, and kaapi!
                    </p>
                  </div>
                ) : (
                  items.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100/90 border border-cream-200/80 shadow-xs"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 bg-cream-200">
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <VegIndicator type={item.dietary} />
                          <h4 className="font-serif text-sm font-medium text-espresso-950 truncate">
                            {item.name}
                          </h4>
                        </div>
                        <span className="font-serif text-xs font-semibold text-terracotta-700">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-cream-50 border border-cream-300 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="p-1 text-espresso-700 hover:text-espresso-950 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs font-bold w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="p-1 text-espresso-700 hover:text-espresso-950 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer / Checkout */}
              {items.length > 0 && (
                <div className="p-5 border-t border-espresso-900/10 bg-cream-100 space-y-3">
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-espresso-700 font-medium">Subtotal</span>
                    <span className="font-serif text-xl font-bold text-espresso-950">
                      {formatPrice(totalAmount)}
                    </span>
                  </div>

                  <p className="text-[11px] font-sans text-espresso-600/70">
                    Orders are confirmed instantly on WhatsApp with our counter staff.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm shadow-warm transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="h-5 w-5 fill-current" />
                    <span>Order on WhatsApp ({formatPrice(totalAmount)})</span>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

