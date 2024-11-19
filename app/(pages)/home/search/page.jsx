"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../../components/card/Cards";
import { Grid } from "@mui/material";
import Pagination from "../../../components/pagination/Pagination";

function SearchContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;

  const router = useRouter();
  const params = useSearchParams();

  const fetchData = async (page = currentPage) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/data?page=${page}&limit=${itemsPerPage}`
      );
      const result = await response.json();
      setData(result.items);
      setTotalPages(Math.ceil(result.total / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const pageParam = params.get("page");
    const dataParam = params.get("data");

    // Set the current page from URL or default to 1
    const page = pageParam ? parseInt(pageParam) : 1;
    setCurrentPage(page);

    if (dataParam) {

      try {
        const parsedData = JSON.parse(decodeURIComponent(dataParam));
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing data:", error);
        fetchData(page); // If parsing fails, fallback to fetching data
      }
    } else {
      fetchData(page); // Fetch data when no `data` param exists
    }
  }, [params]); // Only re-run when params change

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/home/search?data=${encodeURIComponent(
      JSON.parse(resaleUnits)
    )}&page=${currentPage}`); // Update the page in the URL
    fetchData(page); // Ensure new data is fetched for the new page
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="py-20 px-10">
      <Grid container className="flex gap-5 justify-center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={5.8} md={3.4} lg={3} key={index}>
            <Card property={item} />
          </Grid>
        ))}
      </Grid>

      <div className="flex justify-center my-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return <SearchContent />;
}
