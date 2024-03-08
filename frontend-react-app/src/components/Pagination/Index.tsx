import * as React from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <button
                    onClick={() => onPageChange(currentPage- 1)}
                    className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium ${currentPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                    disabled={currentPage === 0}
                >
                    <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {totalPages > 7 && currentPage > 3 && (
                    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                        ...
                    </span>
                )}
                {Array.from(Array(totalPages).keys())
                    .slice(Math.max(0, currentPage - 2), Math.min(totalPages, currentPage + 3))
                    .map((pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => onPageChange(pageIndex)}
                            className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${currentPage === pageIndex ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                {totalPages > 7 && currentPage < totalPages - 4 && (
                    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                        ...
                    </span>
                )}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    onClick={() => onPageChange(currentPage+ 1)}
                    className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium ${currentPage === totalPages - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                    <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>
        </nav>
    )
}

