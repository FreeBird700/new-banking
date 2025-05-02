import React from 'react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { TrendingUp, ArrowUpRight, Clock } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const FinancialInsights: React.FC = () => {
  // Spending by category data
  const spendingData = {
    labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Utilities', 'Other'],
    datasets: [
      {
        data: [35, 25, 15, 10, 10, 5],
        backgroundColor: [
          '#2563EB', // primary-600
          '#3B82F6', // primary-500
          '#60A5FA', // primary-400
          '#93C5FD', // primary-300
          '#F59E0B', // accent-500
          '#94A3B8', // secondary-400
        ],
        borderWidth: 0,
      },
    ],
  };

  // Spending options
  const spendingOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  // Balance history data
  const balanceHistoryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Balance',
        data: [30000, 32000, 31500, 34000, 36500, 35800, 37200, 39500, 41000, 43000, 44500, 45250],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#2563EB',
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  // Balance history options
  const balanceHistoryOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#E2E8F0',
        },
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Balance History */}
      <div className="card p-6 lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Balance History</h3>
          <div className="flex items-center text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
            <TrendingUp size={14} className="mr-1" />
            <span>+8.5% this year</span>
          </div>
        </div>
        <div className="h-80">
          <Line data={balanceHistoryData} options={balanceHistoryOptions} />
        </div>
      </div>

      {/* Spending by Category */}
      <div className="card p-6">
        <h3 className="text-lg font-bold mb-6">Spending by Category</h3>
        <div className="h-64 relative">
          <Doughnut data={spendingData} options={spendingOptions} />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-primary-700">$2,850</span>
            <span className="text-sm text-gray-500">Total Spent</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {spendingData.labels.map((label, index) => (
            <div key={label} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: spendingData.datasets[0].backgroundColor[index] }}
              ></div>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick insights */}
      <div className="card p-6 border-l-4 border-primary-600">
        <div className="flex items-start">
          <div className="bg-primary-100 p-2 rounded-full mr-4 text-primary-600">
            <ArrowUpRight size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Spending Insights</h4>
            <p className="text-gray-600 mb-3">
              Your dining expenses increased by 15% compared to last month. Consider adjusting your budget.
            </p>
            <button className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
              View detailed analysis
              <ArrowUpRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming bills */}
      <div className="card p-6 border-l-4 border-accent-500 lg:col-span-2">
        <div className="flex items-start">
          <div className="bg-accent-100 p-2 rounded-full mr-4 text-accent-600">
            <Clock size={24} />
          </div>
          <div className="w-full">
            <h4 className="font-bold text-lg mb-3">Upcoming Bills</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Electric Bill</p>
                  <p className="text-sm text-gray-500">Due in 3 days</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$85.42</p>
                  <button className="text-sm text-primary-600">Pay Now</button>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Internet Service</p>
                  <p className="text-sm text-gray-500">Due in 7 days</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$69.99</p>
                  <button className="text-sm text-primary-600">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInsights;