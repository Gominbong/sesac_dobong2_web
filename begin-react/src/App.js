import {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldIcon,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";
export default function PurchasePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Shopping Cart
            </h1>

            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                        alt="Headphones"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>Premium Headphones</h3>
                          <p className="ml-4">$299.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <button className="font-medium text-indigo-600 hover:text-indigo-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                        alt="Smart Watch"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>Smart Watch</h3>
                          <p className="ml-4">$199.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Silver</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <button className="font-medium text-indigo-600 hover:text-indigo-500">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping Information
              </h2>
              <form className="mt-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="rounded-lg border bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900">$498.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm font-medium text-gray-900">$9.99</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Tax</p>
                  <p className="text-sm font-medium text-gray-900">$24.90</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-base font-medium text-gray-900">
                    Order total
                  </p>
                  <p className="text-base font-medium text-gray-900">$532.89</p>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  Checkout
                </button>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <ShoppingCartIcon className="mx-auto h-6 w-6 text-gray-400" />
                    <p className="mt-1 text-xs text-gray-500">
                      Secure Shopping
                    </p>
                  </div>
                  <div>
                    <TruckIcon className="mx-auto h-6 w-6 text-gray-400" />
                    <p className="mt-1 text-xs text-gray-500">Fast Delivery</p>
                  </div>
                  <div>
                    <ShieldIcon className="mx-auto h-6 w-6 text-gray-400" />
                    <p className="mt-1 text-xs text-gray-500">
                      Buyer Protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
render(<PurchasePage />, document.getElementById("root"));
