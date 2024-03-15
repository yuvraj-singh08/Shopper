'use client'

import { useParams } from 'next/navigation'
import { mobiles } from './data';
import SearchCard from '@/components/Search/SearchCard';
import Filter from '@/components/Search/Filter';

function SearchPage() {
    const params = useParams<{ query: string }>();

    return (

        <div className='mx-auto flex px-8 mt-2' style={{ maxWidth: 1700 }} >
            <Filter className=' w-80 bg-white pt-3 mx-1 shadow-lg' />

            <div className='bg-white p-4 mx-1 w-full'>
                <div className=" font-semibold">
                    Showing {mobiles.length} results for "{params.query}"
                </div>
                {mobiles.map((data, index) => {
                    return (
                        <SearchCard className='container border-b pb-4 ' key={index}
                            data={data}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default SearchPage;