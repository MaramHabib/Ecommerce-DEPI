import { BarChart, PlusCircle, ShoppingBasket } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import CreateProductForm from '../components/CreateProductForm';
import ProductsList from '../components/ProductList';
import AnalyticsTab from '../components/AnalyticsTab';
import { useEffect, useState } from "react";

const tabs = [
    { id:"create", label: "Create Product",icon: PlusCircle } ,
    { id:"products", label: "Product",icon: ShoppingBasket } ,
    { id:"analytics" , label: "Analytics",icon: BarChart }
];

export default function AdminPage() {

    const [activeTab, setActiveTab] = useState("create");

  return (
    <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
      <div className='relative z-10 container mx-auto px-4 py-16'>

        <motion.h1
					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

                <div className='flex justify-center mb-8'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                                activeTab === tab.id ? 'bg-emerald-500 text-white' : 'text-gray-300 bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            <tab.icon className='mr-2 h-5 w-5' />
                            {tab.label}
                        </button>
                    ))}
                </div>


        {activeTab === "create" && <CreateProductForm />}
		{activeTab === "products" && <ProductsList />}
		{activeTab === "analytics" && <AnalyticsTab />}

      </div>
    </div>
  )
}
