import React from "react";

const PaginationMenu = ({
  item,
  handlePrevPage,
  filteredProducts,
  setPage,
  handleNextPage,
  page,
  itemsPerPage,
}) => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a
            className={`mx-1 flex h-9 w-9 items-center justify-center text-pink-500 rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
              page === 1 ? "pointer-events-none opacity-50 " : ""
            }`}
            onClick={() => handlePrevPage(item)}
            aria-label="Previous"
            href="#"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </li>
        {Array.from(
          {
            length: Math.ceil(filteredProducts(item).length / itemsPerPage),
          },
          (_, index) => (
            <li key={index + 1}>
              <a
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm transition duration-150 ease-in-out shadow-md ${
                  page === index + 1
                    ? "bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/20"
                    : "border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300"
                }`}
                onClick={() => setPage(index + 1)}
                href="#"
              >
                {index + 1}
              </a>
            </li>
          )
        )}

        <li>
          <a
            className={`mx-1 flex h-9 w-9 text-pink-500 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
              page === Math.ceil(filteredProducts(item).length / itemsPerPage)
                ? "pointer-events-none opacity-50 "
                : ""
            }`}
            onClick={() => handleNextPage(item)}
            aria-label="Next"
            href="#"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationMenu;
