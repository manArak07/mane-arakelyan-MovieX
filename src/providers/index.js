const info = [
    {
        heading: "Short Term House Rentals",
        details: [
            {cardImg:"/images/houses/firstHouse.png" ,title: "120,000 ֏ daily", about: "Three story stonecountry house in…", desc: "8 rm., 340 sq.m."},
            {cardImg:"/images/houses/secondHouse.png" ,title: "100,000 ֏ daily", about: "Two story house, Պահլավունյաց փողո...", desc: "4 rm., 200 sq.m."},
            {cardImg:"/images/houses/thirdHouse.png" ,title: "25,000 ֏ daily", about: "Two story stone house in Nor Geghi, 110 sq.m…", desc: "4 rm., 110 sq.m."},
            {cardImg:"/images/houses/fourthHouse.png" ,title: "35,000 ֏ daily", about: "Two story stone house, Վլադիմիր…", desc: "3 rm., 200 sq.m.", hotOffer: true},
            {cardImg:"/images/houses/fifthHouse.png" ,title: "15,000 ֏ daily", about: "Single story stone house in Davitashen, 60 sq.m.…", desc: "2 rm., 60 sq.m."}, 
            {cardImg:"/images/houses/sixthHouse.png" ,title: "68,000 ֏ daily", about: "Two story stone house on Sevastopolian stree…", desc: "6 rm., 350 sq.m."},

        ]
    
    },
    {
        heading: "Passenger Transport",
        details: [
            {cardImg:"/images/transport/secondCar.png", title: "5,000 ֏ per service", about: "Ամեն օր Տաքսի Երևան Թբիլիսի Такси Ерева…", desc: "8 people"},
            {cardImg:"/images/transport/secondCar.png", title: "5,000 ֏ per service", about: "Taxi Erevan Tbilisi Erevan", desc: "8 people"},
            {cardImg:"/images/transport/thirdCar.png", title: "5,000 ֏ per service", about: "Erevan -> Tbilisi каждый день пассажирские…", desc: "8 people", hotOffer: true},
            {cardImg:"/images/transport/fourthCar.png", title: "5,000 ֏ per service", about: "Yerevan Tbilisi Yerevan ժ.07: 00 10: 00 12: 00 1…", desc: "7 people", promotion: true},
            {cardImg:"/images/transport/fifthCar.png", title: "1,000 ֏ per service ", about: "Ереван-Москва грузоперевозки,…", desc: "more than 12 people", hotOffer: true},
            {cardImg:"/images/transport/sixthCar.png", title: "20,000 ֏ per service", about: "ՈՒղևորափոխադրումներ և…", desc: "more than 12 people"},

        ]
    },
    {
        heading: "Houses for Sale",
        details: [
            {cardImg:"/images/sale-houses/firstHouse.png" , title: "$154,000", about: "Three story stone house in Dzoraghbyur, 145…", desc: "4 rm., 145 sq.m."},
            {cardImg:"/images/sale-houses/secondHouse.png", title: "$780", about: "Two story stone townhouse in Zovuni,…", desc: "6 rm., 192 sq.m.", hotOffer: true},
            {cardImg:"/images/sale-houses/thirdHouse.png" ,title: "$280,000", about:" Three story stone house,7-րդ միկրոշրջան in…", desc: "8 rm., 580 sq.m.", urgent: true },
            {cardImg:"/images/sale-houses/fourthHouse.png", title: "554,000,000 ֏", about: "Single story house, Բարեկամության…", desc: "4 rm., 150 sq.m.", },
            {cardImg:"/images/sale-houses/fifthHouse.png" ,title: "$295,000 ", about: "Three story house on Ghapantsian street in…", desc: "6 rm., 160 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/sixthHouse.png" ,title: "$107,500", about: "Single story stone house, Улица…", desc: "5 rm., 156 sq.m."},
            
            {cardImg:"/images/sale-houses/seventhHouse.png" ,title: "$300,000", about: "Two story stone house,Tbilisian Highway in…", desc: "4 rm., 160 sq.m."},
            {cardImg:"/images/sale-houses/eightHouse.png" ,title: "$52,000,000 ֏", about: "Two story house inMusaler, 145 sq.m., 2…", desc: "4 rm., 145 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/ninthHouse.png" ,title: "$550,000", about: "Four story stone house, Sundukyan Street in th…", desc: "5 rm., 570 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/tenthHouse.png" ,title: "$105,000", about: "Two story stone house on Komuna street in…", desc: "5 rm., 153 sq.m.", hotOffer: true},
            {cardImg:"/images/sale-houses/eleventhHouse.png" ,title: "55,000,000 ֏", about: "Two story house in Musaler, 140 sq.m., 2…", desc: "4 rm., 140 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/twelvethHouse.png" ,title: "$190,000", about: "Three story house, Գևորգ Չաուշի փողո…", desc: "4 rm., 244 sq.m.", negot: true},
            
            {cardImg:"/images/sale-houses/thirteenthHouse.png" ,title: "$65,000", about: "Single story house, 22-րդ փողոց in Nor…", desc: "4 rm., 100 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/fourteenthHouse.png" ,title: "$800,000", about: "Two story house, Բագրևանադի 21-րդ…", desc: "4 rm., 400 sq.m." },
            {cardImg:"/images/sale-houses/fifteenthHouse.png" ,title: "$150,000", about: "Two story stone house, Շրջանցիկ Թունել…", desc: "4 rm., 106 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/sixteenthHouse.png" ,title: "$249,000", about: "Two story stone house on Nork 7-th street in…", desc: "6 rm., 230 sq.m.", urgent: true},
            {cardImg:"/images/sale-houses/seventeenthHouse.png" ,title: "74,000,000 ֏", about: "Two story townhouse, Բագրևանդի փողոց i…", desc: "4 rm., 153 sq.m.", call: true},
            {cardImg:"/images/sale-houses/eighteenthHouse.png" ,title: "€51,999", about: "Single story stone house, Թամազյան…", desc: "3 rm., 87 sq.m."},

        ]
    }
]

export default info


