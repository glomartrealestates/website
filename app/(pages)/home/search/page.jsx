"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from "../../../components/card/Cards";
import { Grid } from '@mui/material';

export default function Page() {
    const router = useRouter();
    const params = useSearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentPage = parseInt(params.get('page') || '1');
    const itemsPerPage = 5; 

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`/api/data?page=${currentPage}&limit=${itemsPerPage}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
    };

    useEffect(() => {
        const dataParam = params.get("data");

        if (dataParam) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(dataParam));
                setData(parsedData);
                setLoading(false);
            } catch (error) {
                console.error("Error parsing data:", error);
                fetchData();  
            }
        } else {
            fetchData(); 
        }
    }, [params, currentPage]); 

  
    const handlePageChange = (page) => {
        const serializedData = encodeURIComponent(JSON.stringify(data));
        router.push(`/home/search?data=${serializedData}&page=${page}`);
    };
    

    const totalPages = Math.ceil(100 / itemsPerPage);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='py-20 px-10'>
            <Grid container className='flex gap-5 justify-center'>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={5.8} md={3.4} lg={3} key={index}>
                        <Card property={item} />
                    </Grid>
                ))}
            </Grid>

            <nav aria-label="Page navigation example flex justify-center  w-full" >
                <ul className="inline-flex -space-x-px text-sm justify-center mt-10  w-full">
                    <li>
                        <a
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </a>
                    </li>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <li key={page}>
                                <a
                                    href="#"
                                    onClick={() => handlePageChange(page)}
                                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === page ? 'text-blue-600 border-blue-300 bg-blue-50' : ''}`}
                                >
                                    {page}
                                </a>
                            </li>
                        );
                    })}

                    <li>
                        <a
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
