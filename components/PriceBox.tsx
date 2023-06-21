interface IProduct {
  type: number;
  price: number;
  title: string;
  date?: string;
  state?: string;
  last?: boolean;
  odd?: boolean;
  invoices?: string;
}
export default function PriceBox(item: IProduct) {
  return (
    <>
      {item.type === 1 && (
        <div className="flex flex-col rounded-2xl bg-blue-200 p-4 shadow-xl lg:relative lg:h-40 lg:w-64 lg:items-center lg:justify-center">
          <span>{item.title}</span>
          <span className="text-3xl font-semibold">${item.price}</span>
          <div className="flex items-center justify-end space-x-1 text-xs text-gray-500 lg:absolute lg:bottom-3 lg:right-3">
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}
      {item.type === 2 && (
        <div className="relative rounded-2xl bg-white shadow-xl lg:h-40 lg:w-64">
          <div className="flex items-center justify-between">
            <div className="p-4">
              <span className="block text-xl">{item.title}</span>
              <span className="text-gray-300">{item.date}</span>
            </div>
            <div
              className={`${
                item.state === "PENDING"
                  ? "bg-yellow-300 "
                  : item.state === "OVERDUE"
                  ? "bg-red-300"
                  : item.state === "PAID" && "bg-green-300"
              } absolute top-0 right-0 w-20 rounded-tr-2xl rounded-bl-2xl p-2 text-center`}
            >
              <span className=" text-xs">{item.state}</span>
            </div>
          </div>
          <div className="flex justify-center pb-10">
            <span className="text-2xl font-bold">${item.price}</span>
          </div>
          <div className="flex justify-center">
            <button className="w-full rounded-b-2xl bg-gray-300 py-2">
              View Invoice
            </button>
          </div>
        </div>
      )}
      {item.type === 3 && (
        <div
          className={`relative flex ${
            item.last && "rounded-b-2xl"
          } justify-between px-7 py-4 ${item.odd && "bg-gray-300"}`}
        >
          <span className="hidden lg:flex">{item.invoices}</span>
          <span>{item.title}</span>
          <span className="hidden lg:flex">{item.date}</span>
          <span>${item.price}</span>
          <div
            className={`w-28 items-center justify-center rounded-full text-xs text-center hidden lg:flex ${
              item.state === "PENDING"
                ? "bg-yellow-300 "
                : item.state === "OVERDUE"
                ? "bg-red-300"
                : item.state === "PAID" && "bg-green-300"
            }`}
          >
            <span>{item.state}</span>
          </div>
          <span className="hidden lg:flex underline text-xs w-20 whitespace-nowrap">View Invoice</span>
          <div
            className={`${
              item.state === "PENDING"
                ? "bg-yellow-300 "
                : item.state === "OVERDUE"
                ? "bg-red-300"
                : item.state === "PAID" && "bg-green-300"
            } absolute right-0 top-0 h-4 w-10 rounded-bl-3xl lg:hidden`}
          />
        </div>
      )}
    </>
  );
}
