const products = [
  {
    name: "MacBook Pro",
    sales: 245,
    revenue: "$49,000",
  },
  {
    name: "iPhone 15 Pro",
    sales: 198,
    revenue: "$39,600",
  },
  {
    name: "Apple Watch",
    sales: 167,
    revenue: "$25,000",
  },
  {
    name: "AirPods Pro",
    sales: 145,
    revenue: "$18,200",
  },
  {
    name: "iPad Air",
    sales: 118,
    revenue: "$16,500",
  },
];

const TopProducts = () => {
  return (
    <div className="bg-white dark:bg-[#181825] rounded-xl shadow-lg p-6 h-full">
      <h2 className="text-2xl font-bold dark:text-white mb-1">
        Top Products
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
        Best selling products
      </p>

      <div className="space-y-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <div>
              <h3 className="font-semibold dark:text-white">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.sales} Sales
              </p>
            </div>

            <span className="font-bold text-green-600">
              {product.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;