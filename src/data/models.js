export const models = [

{
id: 1,

title: "Kasina Wielka",

slug: "kasina-wielka",

category: "Stacja kolejowa",

shortDescription:
    "Rekonstrukcja historycznej stacji kolejowej w Kasinie Wielkiej.",

description:
    "Model przedstawia historyczny budynek stacji kolejowej w Kasinie Wielkiej.",

image: "/images/kasina.jpg",

gallery: [
    "/images/kasina.jpg",
    "/images/kasina.jpg",
    "/images/kasina.jpg"
],

status: "Dostępny",

featured: true,

showPurchaseLinks: false,

allegroUrl: "",
etsyUrl: "",
shopUrl: "",

variants: [

    {
        id: 1,

        code: "A-R1",

        name: "Wariant A / Dach R1",

        scales: [
            "H0",
            "TT",
            "N"
        ],

        status: "Dostępny",

        gallery: [
            "/images/kasina.jpg",
            "/images/kasina.jpg"
        ],

        allegroUrl: "",

        notes:
            "Wersja z dachem R1."
    },

    {
        id: 2,

        code: "A-R2",

        name: "Wariant A / Dach R2",

        scales: [
            "H0",
            "TT"
        ],

        status: "W przygotowaniu",

        gallery: [
            "/images/kasina.jpg"
        ],

        allegroUrl: "",

        notes:
            "Wersja z dachem R2."
    }

]

},

{
id: 2,


title: "Chabówka",

slug: "chabowka",

category: "Stacja kolejowa",

shortDescription:
    "Model budynku stacyjnego w Chabówce.",

description:
    "Projekt w trakcie opracowania.",

image: "/images/kasina.jpg",

gallery: [
    "/images/kasina.jpg"
],

status: "W przygotowaniu",

featured: false,

showPurchaseLinks: false,

allegroUrl: "",
etsyUrl: "",
shopUrl: "",

variants: [

    {
        id: 1,

        code: "A-R1",

        name: "Wariant A / Dach R1",

        scales: [
            "H0",
            "TT",
            "N"
        ],

        status: "Dostępny",

        gallery: [
            "/images/kasina.jpg"
        ],

        allegroUrl: "",

        notes:
            "Wariant podstawowy."
    },

    {
        id: 2,

        code: "A-R2",

        name: "Wariant A / Dach R2",

        scales: [
            "H0",
            "TT"
        ],

        status: "W przygotowaniu",

        gallery: [
            "/images/kasina.jpg"
        ],

        allegroUrl: "",

        notes:
            "Druga wersja dachu."
    },

    {
        id: 3,

        code: "B-R1",

        name: "Wariant B / Dach R1",

        scales: [
            "H0"
        ],

        status: "Projekt",

        gallery: [
            "/images/kasina.jpg"
        ],

        allegroUrl: "",

        notes:
            "Wariant w fazie projektu."
    }

]


}

];
