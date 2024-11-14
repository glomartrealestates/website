import { Grid } from '@mui/material';
import React from 'react';

export default function Page() {
  const data = [
    {
      backgroundImage: "https://www.nawy.com/assets/images/banners/offers-bg-desktop.webp",
      image: "https://www.nawy.com/assets/images/offers/offers-desktop-en.svg",
    },
    {
      backgroundImage: "https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp",
      image: "https://www.nawy.com/_next/static/media/sahel-banner-text.2c92e060.svg",
    },
  ];

  return (
    <div>
      <Grid container className="flex justify-center mt-6 mb-6 gap-5">
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            md={5.3}
            key={index}
            className="h-[200px] w-full relative rounded-lg"
            sx={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={item.image} alt="..." className='absolute left-[20px]  top-1/2 -translate-y-1/2' />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
