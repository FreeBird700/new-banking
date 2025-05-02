import React, { useState } from 'react';
import {  ArrowUp,ArrowRight, ArrowDown, DollarSign } from 'lucide-react';

const TransactionsPage: React.FC = () => {
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-xl font-bold">Gold Transactions</h2>
    
      </div>
      
      
      
      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gold Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value (USD)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
              <TransactionRow 
                id="TRX-2023-0563"
                date="Apr 15, 2023"
                type="conversion"
                description="Gold to USD Conversion"
                amount="2.1 kg"
                value="$80,640.00"
              />
              
              <TransactionRow 
                id="TRX-2023-0562"
                date="Apr 10, 2023"
                type="deposit"
                description="Gold Deposit - PMMC Certified"
                amount="4.7 kg"
                value="$180,480.00"
              />
              
              <TransactionRow 
                id="TRX-2023-0561"
                date="Apr 05, 2023"
                type="fee"
                description="Monthly Storage Fee - March 2023"
                amount="0.03 kg"
                value="$1,152.00"
              />
            </tbody>
          </table>
        </div>
        
        
      </div>
    </div>
  );
};

interface TransactionRowProps {
  id: string;
  date: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'conversion' | 'fee';
  description: string;
  amount: string;
  value: string;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ id, date, type, description, amount, value }) => {
    const getTypeIcon = () => {
      switch (type) {
        case 'deposit':
          return <ArrowDown size={16} className="text-green-500" />;
        case 'withdrawal':
          return <ArrowUp size={16} className="text-red-500" />;
        case 'transfer':
          return <ArrowRight size={16} className="text-blue-500" />;
        case 'conversion':
          return <DollarSign size={16} className="text-purple-500" />;
        case 'fee':
          return <ArrowUp size={16} className="text-yellow-500" />;
      }
    };
  
    const getTypeClass = () => {
      switch (type) {
        case 'deposit':
          return 'bg-green-100 text-green-800';
        case 'withdrawal':
          return 'bg-red-100 text-red-800';
        case 'transfer':
          return 'bg-blue-100 text-blue-800';
        case 'conversion':
          return 'bg-purple-100 text-purple-800';
        case 'fee':
          return 'bg-yellow-100 text-yellow-800';
      }
    };
  
    const getTypeLabel = () => {
      switch (type) {
        case 'deposit':
          return 'Deposit';
        case 'withdrawal':
          return 'Withdrawal';
        case 'transfer':
          return 'Transfer';
        case 'conversion':
          return 'Conversion';
        case 'fee':
          return 'Fee';
      }
    };
  
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{id}</div>
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{date}</div>
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClass()}`}>
            <span className="flex items-center">
              {getTypeIcon()}
              <span className="ml-1">{getTypeLabel()}</span>
            </span>
          </span>
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{description}</div>
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{amount}</div>
        </td>
        <td className="px-4 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{value}</div>
        </td>
      </tr>
    );
  };
  
  export default TransactionsPage;
  