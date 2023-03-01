import React, { useContext } from 'react'
import SearchContext from '../context/search/SearchContext'

const SearchList = ({ data, setSearch }) => {
    const searchImage = useContext(SearchContext).search
    const searchStatus = useContext(SearchContext).searchCollectionStatus
    if (searchStatus === 'searching') {
        return (<div className='py-3 pl-4 font-medium text-sm'>Searching</div>)
    }
    else if (searchStatus === 'success' && data.length > 0) {
        return (
            <div className='flex-col'>
                {data.map((element) => {
                    return (<div onClick={() => {
                        console.log('1st in search')
                        setSearch(element.title)
                        console.log('2nd in search')

                        searchImage(element.title, 'photos')
                        console.log('3rd in search')

                    }} className=' first:rounded-t-lg last:rounded-b-lg py-3 pl-4 cursor-pointer hover:bg-slate-300 font-medium text-sm' key={element.id}>
                        {element.title}
                    </div>)
                })}
            </div>)
    }
    else if (searchStatus === 'success') {
        return (<div className='py-3 pl-4 font-medium text-sm'>No Data Found</div>)
    }
    else {
        return (<div className='py-3 pl-4 font-medium text-sm'>Failed to fetch data</div>)
    }
}

export default SearchList