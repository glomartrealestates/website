import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Avatar } from "@mui/material";
import DetailsCard from "../special_component/details_card";

export default function DetailCard() {
  return (
    <Box className="px-3  sm:px-0" sx={{ width: "100%", height: "100%", mt: 10 }}>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl mb-2">
        Recommended
      </h1>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="my-6"
      >
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <Link href={"/"}>
            <DetailsCard />
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }} display={{ xs: "none" , sm: "none", md: "block" }} >
          <Link href={"/"}>
            <DetailsCard />
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <Link href={"/"}>
            <DetailsCard />
          </Link>
        </Grid>
        {/* <Grid size={4}>
          <Link href={"/"}>
            <Paper
              className="align-center text-center flex flex-col justify-center items-center border-slate-500 border-solid border-2 rounded-2xl "
              sx={{ height: 300 }}
            >
              <Avatar
                className=" hover:border-gray-300 border-8 border-solid"
                alt="avatar"
                sx={{ width: 100, height: 100 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB4JzXOMO7QQh6EW_4bw9VeW3MQywVYYoEA&s"
              />
              <p className="text-2xl font-bold mt-2">New Cairo</p>
              <p className=" mb-[-5px] ">190 compounds</p>
              <p>2607 Properties Available</p>
            </Paper>
          </Link>
        </Grid> */}
        {/* <Grid size={4}>
          <Link href={"/"}>
            <Paper
              className="align-center text-center flex flex-col justify-center items-center border-slate-500 border-solid border-2 rounded-2xl "
              sx={{ height: 300 }}
            >
              <Avatar
                className=" hover:border-gray-300 border-8 border-solid"
                alt="avatar"
                sx={{ width: 100, height: 100 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB4JzXOMO7QQh6EW_4bw9VeW3MQywVYYoEA&s"
              />
              <p className="text-2xl font-bold mt-2">New Cairo</p>
              <p className=" mb-[-5px] ">190 compounds</p>
              <p>2607 Properties Available</p>
            </Paper>
          </Link>
        </Grid> */}
        
      </Grid>
    </Box>
  );
}
