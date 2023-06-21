import PriceBox from "@/components/PriceBox";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <div className="lg:hidden">
        <div className="flex justify-between border-b border-black p-3 pb-2 ">
          <span className="font-bold">LOGO</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => setMenu(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {menu && (
          <div className="fixed inset-y-0 right-0 w-4/6 rounded-l-2xl bg-slate-300 shadow-xl z-50">
            <div className="flex justify-between border-b border-black p-3 pb-2">
              <span className="font-bold">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                onClick={() => setMenu(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              <span>Dashboard</span>
              <span>invoices</span>
              <span>Clients</span>
              <span>Expences</span>
            </div>
          </div>
        )}
      </div>
      <div className="lg:fixed z-40 w-full justify-between border-b bg-white px-5 xs:hidden lg:flex">
        <div className=" border-r pr-6 text-2xl font-bold">
          <span>LOGO</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span>name</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 border-l pl-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="inset-y-0  left-4 top-10 z-40 flex-col space-y-20 border-r border-t bg-white px-2 pt-10 xs:hidden lg:fixed lg:flex">
        <span>Dashboard</span>
        <span>invoices</span>
        <span>Clients</span>
        <span>Expences</span>
      </div>
      <div className=" p-5 lg:pl-32 lg:pt-32">
        <div className="mb-10 space-y-4 lg:flex lg:justify-between lg:space-y-0 lg:px-72">
          <PriceBox type={1} price={500} title="Overdue" />
          <PriceBox type={1} price={3.411} title="In Draft" />
          <PriceBox type={1} price={3.911} title="Total Outstanding" />
        </div>
        <span className="text-xl font-bold lg:px-40">Recent Invoices</span>
        <div className="mt-5 mb-10 space-y-6 lg:my-20 lg:flex lg:justify-between lg:space-y-0 lg:px-72">
          <PriceBox
            type={2}
            title="Maria schmit"
            price={3.411}
            state="PENDING"
            date="17 july 2024"
          />
          <PriceBox
            type={2}
            title="Maria schmit"
            price={3.411}
            state="OVERDUE"
            date="17 july 2024"
          />
          <PriceBox
            type={2}
            title="Maria schmit"
            price={3.411}
            state="PAID"
            date="17 july 2024"
          />
        </div>
        <span className="text-xl font-bold lg:px-40">All Invoices</span>
        <div className=" mt-5 rounded-2xl shadow-xl lg:mt-10  lg:px-72 lg:pb-60 lg:shadow-none">
          <div className="flex items-center justify-between rounded-t-2xl bg-gray-300 p-2 py-4 px-5 text-center text-sm lg:pr-16">
            <span className="hidden lg:flex">INVOICES</span>
            <span>CLIENT</span>
            <span className="hidden lg:flex">DUE DATE</span>
            <span>AMOUNT</span>
            <span className="hidden justify-center lg:flex lg:w-28 ">
              STATUS
            </span>
            <span className="hidden text-gray-300 lg:flex">STATUS</span>
          </div>
          <div>
            <PriceBox
              type={3}
              price={200}
              state="PAID"
              title="jack"
              date="17 july 2024"
              invoices={"00045"}
            />
            <PriceBox
              type={3}
              price={200}
              state="PAID"
              title="jack"
              date="17 july 2024"
              invoices={"00046"}
              odd
            />
            <PriceBox
              type={3}
              price={200}
              state="PENDING"
              title="jack"
              date="17 july 2024"
              invoices={"00047"}
            />
            <PriceBox
              type={3}
              price={200}
              state="OVERDUE"
              title="jack"
              date="17 july 2024"
              invoices={"00042"}
              odd
            />
            <PriceBox
              type={3}
              price={200}
              state="PAID"
              title="jack"
              date="17 july 2024"
              invoices={"00050"}
            />
            <PriceBox
              type={3}
              price={200}
              state="PAID"
              title="jack"
              date="17 july 2024"
              invoices={"00050"}
              odd
              last
            />
          </div>
        </div>
      </div>
    </div>
  );
}
