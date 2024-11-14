import React from 'react'
import Paper from "../../components/paper/page"
import Index from "../../components/banner/page"
import Carousel from "../../components/carousel/Carousel"
import Form from "../../components/form/Form"
import CardCarousel from "../../components/carousel/CardCarousel"
import Logos from "../../components/carousel/logos"

import Offer from "../../components/offer/page"

import { properties } from "./data"
import { Grid } from '@mui/material'

export default function Page() {
    let icon_paper_h1 = "What Are You Looking For ?"
    let top_area = "Top Areas"
    let results = 29


    let icon_paper = [
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/1/medium.webp",
            title: "Developer Units",
            width: 40,
        },
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/2/medium.webp",
            title: "Resale Units",
            width: 40

        },
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/3/medium.webp",
            title: "Sell Your Unit",
            width: 40

        },
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/4/medium.webp",
            title: "Nawy Now",
            width: 40

        },
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/5/medium.webp",
            title: "Offers",
            width: 40

        },
        {
            img: "https://prod-images.cooingestate.com/processed/pathway/image/6/medium.webp",
            title: "Top Areas",
            width: 40

        },
    ]


    let area = [
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/2/high.webp",
            title: "New Cairo",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,


        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/1/high.webp",
            title: "6th of October City",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full", width: 80,


        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/9/high.webp",
            title: "New Capital City",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full"
            , width: 80,

        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/10/high.webp",
            title: "Mostakbal City",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,


        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/4/high.webp",
            title: "Ain Sokhna",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,


        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/3/high.webp",
            title: "North Coast - Sahel ",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,


        },
        {
            img: "https://prod-images.cooingestate.com/processed/area/image/5/high.webp",
            title: "El Gouna",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,


        }, {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/1078/high.webp",
            title: "New Heliopolis",
            number: 12,
            number2: 24,
            text2: "Properties Available",
            compounds: "Compounds",
            round: "full",
            width: 80,

        },
    ]
    let data = [
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound_image/image/2023/low.webp",
            h1: "salt",
            number: 4,
            text: "Properties"
        },
    ];
    let logos = [
        {
            img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1368/high.webp"
        },
       
        {
            img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp"
        },
        {
            img: "https://prod-images.cooingestate.com/processed/compound/cover_image/1364/high.webp"
        },
    ]
    return (
        <div>
            <Index />
            <div className="py-20 px-10 lg:px-20 ">

       
                <Paper data={icon_paper} h1={icon_paper_h1} />
                <Offer />
                <Logos data={logos} />

                <Paper data={area} h1={top_area} results={results} />
                <CardCarousel data={properties} />
                <Carousel data={data} />

                <Form />

            </div>
        </div>
    )
}

