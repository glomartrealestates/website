import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function RowAndColumnSpacing2() {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* First Grid Item with Background Color */}
        <Grid item xs={12} sm={12} md={6}>
          <Link href={'/'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 160,
                backgroundColor: '#20232d', // Example background color
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                itemProp="image"
                alt="Offers content"
                fetchPriority="high"
                width="414"
                height="114"
                decoding="async"
                data-nimg="1"
                className="sc-5164a924-0 iHJgoY"
                src="https://www.nawy.com/assets/images/offers/offers-desktop-en.svg"
                style={{
                  color: 'transparent',
                  position: 'absolute',
                  top: '30px',
                  left: '30px', 
                }}
              />
              <img
                itemProp="image"
                alt="percent"
                fetchPriority="high"
                width="72"
                height="70"
                decoding="async"
                data-nimg="1"
                className="sc-5164a924-0 iHJgoY"
                src="https://www.nawy.com/assets/images/offers/percent.svg"
                style={{
                  color: 'transparent',
                  position: 'absolute',
                  bottom: '35px',
                  right: '30px',
                }}
              />
            </Box>
          </Link>
        </Grid>

        {/* Second Grid Item with Sahel Map Banner */}
        <Grid item xs={12} sm={12} md={6}>
          <Link href={'/sahel-map'}>
            <Box
              sx={{
                position: 'relative',
                height: 160, 
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                itemProp="image"
                alt="Sahel map banner"
                fetchPriority="high"
                decoding="async"
                data-nimg="fill"
                className="sc-5164a924-0 iHJgoY"
                src="https://www.nawy.com/_next/static/media/sahel-banner.f446f11a.webp"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0',
                  objectFit: 'cover',
                  color: 'transparent',
                  zIndex: -1,
                  borderRadius: '8px',
                }}
              />
              <div className="header" style={{ position: 'relative', zIndex: 1 }}>
                <img
                  alt="Banner text"
                  fetchPriority="high"
                  width="335"
                  height="85"
                  decoding="async"
                  data-nimg="1"
                  src="https://www.nawy.com/_next/static/media/sahel-banner-text.2c92e060.svg"
                  style={{
                    color: 'transparent',
                    width: '305px',
                    height: '84px',
                    position: 'absolute',
                    top: '30px', 
                    left: '30px', 
                  }}
                />
              </div>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
