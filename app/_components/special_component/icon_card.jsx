import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={6} sm={12} md={2} key={index}>
            <Link href={"/"}>
              <Paper
                className="align-center text-center flex flex-col justify-center items-center"
                sx={{
                  height: 100,
                  border: {
                    xs: "none", 
                    md: "1px solid rgb(211, 219, 230)", 
                  },
                  borderRadius: '12px',
                  elevation: {
                    xs: 0, 
                    md: 2, 
                  },
                }}
              >
                <div
                  className="pathway-icon"
                  style={{
                    backgroundColor: {
                      xs: "rgb(247, 249, 253)", 
                      md: "transparent", 
                    },
                    padding: "10px", 
                    borderRadius: '8px', 
                  }}
                >
                  <img
                    itemProp="image"
                    alt={`Path icon ${index + 1}`}
                    loading="lazy"
                    width="44"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="sc-5164a924-0 iHJgoY"
                    style={{ color: "transparent", objectFit: "cover" }}
                    src={`https://prod-images.cooingestate.com/processed/pathway/image/${index + 1}/medium.webp`}
                  />
                </div>
                <p
                  style={{
                    color: "rgb(26, 32, 40)",
                    fontFamily: "materialMedium",
                    fontSize: "14px",
                    marginTop: "8px", 
                  }}
                >
                  {index === 0 && "Developer Units"}
                  {index === 1 && "Resale Units"}
                  {index === 2 && "Sell Your Unit"}
                  {index === 3 && "Nawy Now"}
                  {index === 4 && "Offers"}
                  {index === 5 && "Top Areas"}
                </p>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
