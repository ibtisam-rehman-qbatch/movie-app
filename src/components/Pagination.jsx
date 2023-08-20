import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTvShows } from "../redux/shows/actionCreator";

const Pagination = () => {
  const dispatch = useDispatch();
  const currPage = useSelector((shows) => shows.showsReducer.summary.page);
  const totalPages = useSelector((shows) => shows.showsReducer.summary.pages);

  const pageRange = 5;
  const [currentPageRange, setCurrentPageRange] = useState({
    start: 1,
    end: Math.min(pageRange, totalPages) || pageRange,
  });

  const goToNextPageRange = () => {
    const newStart = currentPageRange.start + pageRange;
    const newEnd = currentPageRange.end + pageRange;

    if (newEnd <= totalPages) {
      setCurrentPageRange({ start: newStart, end: newEnd });
    } else if (newStart < totalPages) {
      setCurrentPageRange({ start: newStart, end: totalPages });
    }
  };

  const goToPrevPageRange = () => {
    const newStart = currentPageRange.start - pageRange;
    const newEnd = currentPageRange.end - pageRange;

    if (newStart > 0) {
      setCurrentPageRange({ start: newStart, end: newEnd });
    }
  };

  const loadContent = (pageNum) => {
    dispatch(fetchAllTvShows(pageNum));
  };
  const pageNumber = () => {
    let list = [];
    console.log("total: ", currentPageRange);

    for (
      let i = currentPageRange.start;
      i <= currentPageRange.end && i <= totalPages;
      i++
    ) {
      {
        currPage === i
          ? list.push(
              <a
                key={i}
                href="#"
                aria-current="page"
                onClick={() => loadContent(i)}
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {i}
              </a>
            )
          : list.push(
              <a
                href="#"
                key={i}
                aria-current="page"
                onClick={() => loadContent(i)}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {i}
              </a>
            );
      }
    }
    return list;
  };
  const loadNextPageContent = () => {
    if (currPage < totalPages) {
      dispatch(fetchAllTvShows(currPage + 1));
      currPage + 1 > currentPageRange.end && goToNextPageRange();
    }
  };
  const loadPrevPageContent = () => {
    if (currPage > 1) {
      dispatch(fetchAllTvShows(currPage - 1));
      currPage - 1 < currentPageRange.start && goToPrevPageRange();
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          onClick={() => loadPrevPageContent()}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          onClick={() => loadNextPageContent()}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span> pages
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => goToPrevPageRange()}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pageNumber()}

            <button
              onClick={() => goToNextPageRange()}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pagination);