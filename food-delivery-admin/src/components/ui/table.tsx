/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface IProps {
  columns: any[],
  data: any[]
}

function Table({ columns, data }: IProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="mx-6 my-10 overflow-x-auto rounded-lg shadow-lg border border-orange-300 bg-white">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gradient-to-r from-orange-400 to-pink-500 text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="select-none">
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="py-3 px-6 text-left font-semibold tracking-wide border-r border-orange-300 last:border-r-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-10 text-gray-400 italic"
              >
                No data available.
              </td>
            </tr>
          )}

          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className={`transition-colors duration-200 cursor-pointer ${
                idx % 2 === 0 ? "bg-orange-50" : "bg-white"
              } hover:bg-orange-100`}
            >
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className="py-4 px-6 text-gray-700 border-r border-orange-300 last:border-r-0"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
