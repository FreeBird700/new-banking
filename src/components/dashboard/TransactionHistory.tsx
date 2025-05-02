import React from 'react';
import { Search, Download, Filter, ArrowUpRight, ArrowDownLeft, ShoppingBag, Home, CreditCard, Coffee } from 'lucide-react';

// Sample transaction data
const transactions = [
  {
    id: '1',
    type: 'debit',
    date: 'May 5, 2025',
    description: 'Grocery Store',
    category: 'Shopping',
    amount: 85.25,
    icon: <ShoppingBag size={16} />
  }
];

const TransactionHistory: React.FC = () => {
  return (
    <div className="card p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h3 className="text-xl font-bold mb-4 md:mb-0">Recent Transactions</h3>
        
        
      </div>
      
      {/* Transactions list */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr 
                key={transaction.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {transaction.icon}
                    </div>
                    <span className="text-sm font-medium">{transaction.description}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
    </div>
  );
};

export default TransactionHistory;