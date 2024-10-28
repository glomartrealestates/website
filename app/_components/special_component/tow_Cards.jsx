import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Avatar, Stack, Typography } from "@mui/material";

export default function TowCards() {
  return (
    <Box className="px-3  sm:px-0" sx={{ width: "100%", height: "100%", mt: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  size={{ xs: 12, sm: 12, md: 6 }}>
          <Link href={"/"}>
            <Paper
              className="align-center text-start flex flex-col justify-center items-start
                rounded-2xl relative overflow-hidden
                bg-[#ffefe6] z-0 "
              sx={{ height: 150 }}
            >
              <Stack
                className="absolute z-10 top-[-50px] right-[-100px] bg-[#f7c2ba] rounded-full w-[full] h-[full] "
                sx={{ width: 150, height: 150 }}
              ></Stack>
              <Stack
                className="absolute  top-[-80px] right-[-80px] bg-[#ffceb8] rounded-full w-[full] h-[full] "
                sx={{ width: 200, height: 200 }}
              ></Stack>
              <Typography className=" text-[#d93d00] text-3xl font-bold ms-4">
                Nawy Now
              </Typography>
              <div className="flex w-full justify-between z-20">
                <p className=" text-sm  ms-4 ">
                  Don't Wait, Move Now & Pay Later With Nawy Now
                </p>
                <p className=" text-sm  me-4 border-b-2 border-solid border-black ">
                  learn more
                </p>
              </div>
            </Paper>
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Link href={"/"}>
            <Paper
              className="align-center text-start flex flex-col justify-center items-start
                rounded-2xl relative overflow-hidden
                bg-[#f7f7f7] z-0 "
              sx={{ height: 150 }}
            >
              <Stack
                className="absolute z-10 top-[-50px] right-[-100px] bg-[#ccd2d9] rounded-full w-[full] h-[full] "
                sx={{ width: 150, height: 150 }}
              ></Stack>
              <Stack
                className="absolute  top-[-80px] right-[-80px] bg-[#e6ecf2] rounded-full w-[full] h-[full] "
                sx={{ width: 200, height: 200 }}
              ></Stack>
              <Typography className=" text-[#1e4163] text-3xl font-bold ms-4">
                Nawy Now
              </Typography>
              <div className="flex w-full justify-between z-20">
                <p className=" text-sm  ms-4 ">
                  Don't Wait, Move Now & Pay Later With Nawy Now
                </p>
                <p className=" text-sm  me-4 border-b-2 border-solid border-black ">
                  learn more
                </p>
              </div>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
