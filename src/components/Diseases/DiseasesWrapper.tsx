'use client'

import { useState, useEffect, ChangeEvent } from 'react'

import DiseasesService from '@/services/api/diseases.service'
import SingleDiseases from '@/components/Diseases/SingleDiseases'
import { DiseasesFilterModel } from '@/models/filters/diseases-filter.model'
import { DiseasesEntity } from '@/models/entities/diseases.entity'

const DiseasesWrapper = () => {
  const pageSizeOptions = [20, 50, 100]
  const defaultFilter: DiseasesFilterModel = {
    page: 1,
    limit: 10,
    sort: '',
    search: '',
    filter: ''
  };

  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [data, setData] = useState<DiseasesEntity[]>([])
  const [pages, setPages] = useState([])
  const [filter, setFilter] = useState<DiseasesFilterModel>(defaultFilter)

  useEffect(() => {
    loadData().then()
    updatePagination()
  }, [])

  useEffect(() => {
    loadData().then()
    updatePagination()
  }, [currentPage, pageSize])

  const loadData = async () => {
    setFilter({
      page: currentPage,
      limit: pageSize,
      sort: null,
      search: null,
      filter: null
    })
    const diseasesDataResponse = await DiseasesService.filterDiseases(filter)
    setTotalItems(data.length)
    setData(diseasesDataResponse.data)
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const onPageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    const pageSize = event.target.value
    setPageSize(+pageSize)
    setCurrentPage(1)
  }

  const updatePagination = () => {
    let totalPage = Math.ceil(totalItems / pageSize)
    if (totalPage <= 0) totalPage = 1
    const pages = []

    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
      }
    } else {
      let startPage: number, endPage: number

      if (currentPage === 1) {
        startPage = 1
        endPage = Math.min(6, totalPage)
      } else if (currentPage === totalPage) {
        startPage = Math.max(totalPage - 5, 1)
        endPage = totalPage
        pages.unshift(totalPage - 5)
      } else {
        startPage = Math.max(currentPage - 3, 1)
        endPage = Math.min(currentPage + 3, totalPage)
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (startPage > 1) {
        pages.unshift('...')
      }
    }

    setPages(pages)
  }

  return (
    <>
      <section className='pb-[100px] pt-[20px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap justify-center'>
            {data.map((disease) => (
              <div key={disease.id} className='w-full mt-6 px-4 md:w-2/3 lg:w-1/2 xl:w-1/3'>
                <SingleDiseases diseases={disease} />
              </div>
            ))}
          </div>

          <div className='w-100 mt-10' data-wow-delay='.15s'>
            <div className='w-100 flex justify-between'>
              <div className='flex items-center'>
                <span>Show </span>
                <select className='mx-1' name='per-page' onChange={(event) => onPageSizeChange(event)}>
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span> / {totalItems}</span>
              </div>

              <div>
                <ul className='flex items-center'>
                  <li className='mx-1'>
                    {currentPage <= 1 && (
                      <button type='button' className='disabled' disabled>
                        First
                      </button>
                    )}
                    {currentPage > 1 && (
                      <button type='button' onClick={() => onPageChange(1)}>
                        First
                      </button>
                    )}
                  </li>
                  <li className='mx-1'>
                    {currentPage <= 1 && (
                      <button type='button' className='disabled' disabled>
                        Prev
                      </button>
                    )}
                    {currentPage > 1 && (
                      <button type='button' onClick={() => onPageChange(currentPage - 1)}>
                        Prev
                      </button>
                    )}
                  </li>
                  {pages.map((page) => (
                    <li key={page} className='mx-1'>
                      <button
                        type='button'
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white ${
                          page === currentPage ? 'bg-primary text-white' : ''
                        }`}
                        onClick={() => onPageChange(page)}>
                        {page}
                      </button>
                    </li>
                  ))}
                  <li className='mx-1'>
                    {currentPage < pages.length && (
                      <button type='button' onClick={() => onPageChange(currentPage + 1)}>
                        Next
                      </button>
                    )}

                    {currentPage >= pages.length && (
                      <button type='button' className='disabled' disabled>
                        Next
                      </button>
                    )}
                  </li>
                  <li>
                    {currentPage < pages.length && (
                      <button type='button' onClick={() => onPageChange(pages.length)}>
                        Last
                      </button>
                    )}
                    {currentPage >= pages.length && (
                      <button type='button' className='disabled' disabled>
                        Last
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DiseasesWrapper
