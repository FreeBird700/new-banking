import React from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  DollarSign, 
  Scale, 
  TrendingUp, 
  AlertCircle,
  Calendar,
  Clock
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DashboardHome: React.FC = () => {
  // Gold price history data
  const goldPriceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Gold Price (USD/oz)',
        data: [1850, 1830, 1920, 1980, 2010, 2050, 2100, 2080, 2150, 2200, 2180, 2250],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#F59E0B',
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  // Gold price options
  const goldPriceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const, // Fix: Use 'as const' to specify the literal type
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
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value: any) {
            return '$' + value;
          }
        }
      }
    },
  };

  

  return (
    <div className="space-y-6 ">
      {/* Gold Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Total Gold Assets"
          value="88 kg"
          change="+2.3 kg"
          isPositive={true}
          icon={<Scale size={24} />}
          color="primary"
        />
        <SummaryCard 
          title="Gold Value (USD)"
          value="$3,383,595.60"
          change="+$125,430.50"
          isPositive={true}
          icon={<DollarSign size={24} />}
          color="accent"
        />
        <SummaryCard 
          title="Current Gold Price"
          value="$2,250.00/oz"
          change="+$70.00"
          isPositive={true}
          icon={<TrendingUp size={24} />}
          color="success"
        />
        <SummaryCard 
          title="Storage Fee Due"
          value="$1,320.00"
          change="Due in 5 days"
          isPositive={false}
          icon={<AlertCircle size={24} />}
          color="warning"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gold Price Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Gold Price Trend (2023)</h2>
            <select className="input input-sm">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80">
            <Line data={goldPriceData} options={goldPriceOptions} />
          </div>
        </div>

        
      </div>

      {/* Recent Transactions & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Recent Gold Transactions</h2>
          <div className="space-y-4">
            <TransactionItem 
              type="deposit"
              amount="5.2 kg"
              date="May 15, 2023"
              description="Gold Deposit - PMMC Certified"
              value="$199,680.00"
            />
            <TransactionItem 
              type="withdrawal"
              amount="1.8 kg"
              date="May 10, 2023"
              description="Gold Withdrawal - International Transfer"
              value="$69,120.00"
            />
            
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <EventItem 
              title="Storage Fee Payment"
              date="May 30, 2023"
              description="Monthly storage fee for 88 kg gold"
              icon={<Calendar size={20} />}
            />
            
            <EventItem 
              title="Gold Market Webinar"
              date="July 5, 2023"
              description="Expert insights on gold market trends"
              icon={<Clock size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: 'primary' | 'accent' | 'success' | 'warning';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change, isPositive, icon, color }) => {
    const colorClasses = {
      primary: 'bg-primary-50 text-primary-700',
      accent: 'bg-accent-50 text-accent-700',
      success: 'bg-green-50 text-green-700',
      warning: 'bg-yellow-50 text-yellow-700',
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center mt-2">
              {isPositive ? (
                <ArrowUp size={16} className="text-green-500 mr-1" />
              ) : (
                <ArrowDown size={16} className="text-red-500 mr-1" />
              )}
              <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
                {change}
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            {icon}
          </div>
        </div>
      </div>
    );
  };
  
  interface TransactionItemProps {
    type: 'deposit' | 'withdrawal' | 'conversion';
    amount: string;
    date: string;
    description: string;
    value: string;
  }
  
  const TransactionItem: React.FC<TransactionItemProps> = ({ type, amount, date, description, value }) => {
    const getTypeIcon = () => {
      switch (type) {
        case 'deposit':
          return <ArrowDown size={16} className="text-green-500" />;
        case 'withdrawal':
          return <ArrowUp size={16} className="text-red-500" />;
        case 'conversion':
          return <DollarSign size={16} className="text-blue-500" />;
      }
    };
  
    const getTypeClass = () => {
      switch (type) {
        case 'deposit':
          return 'bg-green-100 text-green-800';
        case 'withdrawal':
          return 'bg-red-100 text-red-800';
        case 'conversion':
          return 'bg-blue-100 text-blue-800';
      }
    };
  
    return (
      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center">
          <div className={`p-2 rounded-full ${getTypeClass()} mr-4`}>
            {getTypeIcon()}
          </div>
          <div>
            <p className="font-medium">{description}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">{amount}</p>
          <p className="text-sm text-gray-500">{value}</p>
        </div>
      </div>
    );
  };
  
  interface EventItemProps {
    title: string;
    date: string;
    description: string;
    icon: React.ReactNode;
  }
  
  const EventItem: React.FC<EventItemProps> = ({ title, date, description, icon }) => {
    return (
      <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500 mb-1">{date}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardHome;
  
