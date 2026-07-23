import leo from "../assets/images/leo.jpg";
import interstellar from "../assets/images/interstellar.jpg";
import jailer from "../assets/images/jailer.jpg";
import premalu from "../assets/images/premalu.jpg";
import avatar from "../assets/images/avatar.jpg";
import pushpa from "../assets/images/pushpa.jpg";
import vikram from "../assets/images/vikram.jpg";
import sooraraiPotru from "../assets/images/soorarai potru.jpg";
import inception from "../assets/images/inception.jpg";
import movie96 from "../assets/images/96.jpg";
import hridayam from "../assets/images/hridayam.jpg";
import rrr from "../assets/images/RRR.jpg";
import kaithi from "../assets/images/kaithi.jpg";
import darkKnight from "../assets/images/the dark knight.jpg";
import joker from "../assets/images/joker.jpg";
import goodNight from "../assets/images/good night.jpg";
import dangal from "../assets/images/dangal.jpg";
import manjummelBoys from "../assets/images/manjummel boys.jpg";
import master from "../assets/images/master.jpg";
import thuppakki from "../assets/images/thuppakki.jpg";
import salaar from "../assets/images/salaar.jpg";
import theBatman from "../assets/images/the batman.jpg";
import lucifer from "../assets/images/lucifer.jpg";
import kalki from "../assets/images/kalki.jpg";

const movies = [

  // ================= Trending =================

  {
    id: 1,
    title: "Leo",
    year: 2023,
    genre: "Action",
    category: "Trending",
    language: "Tamil",
    rating: 7.8,
    duration: "2h 44m",
    director: "Lokesh Kanagaraj",
    trailer: "https://www.youtube.com/embed/Po3jStA673E" ,
    cast: [
      "Vijay",
      "Trisha Krishnan",
      "Sanjay Dutt",
      "Arjun Sarja"
    ],
    certificate: "UA",
    image: leo,
   
  },

  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    category: "Trending",
    language: "English",
    rating: 8.6,
    duration: "2h 49m",
    director: "Christopher Nolan",
    trailer:"https://www.youtube.com/embed/HYVxnPmb15E",
    cast: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine"
    ],
    certificate: "PG-13",
    image: interstellar,
     },

  {
    id: 3,
    title: "Jailer",
    year: 2023,
    genre: "Action",
    category: "Trending",
    language: "Tamil",
    rating: 7.8,
    duration: "2h 48m",
    director: "Nelson Dilipkumar",
   trailer:"https://www.youtube.com/embed/Y5BeWdODPqo",
    cast: [
      "Rajinikanth",
      "Vinayakan",
      "Ramya Krishnan",
      "Vasanth Ravi"
    ],
    certificate: "UA",
    image: jailer,
    },

  {
    id: 4,
    title: "Premalu",
    year: 2024,
    genre: "Romance",
    category: "Trending",
    language: "Malayalam",
    rating: 8.3,
    duration: "2h 36m",
    director: "Girish A. D.",
    trailer: "https://www.youtube.com/embed/XRz_K-pzXOI",
    cast: [
      "Naslen",
      "Mamitha Baiju",
      "Sangeeth Prathap",
      "Shyam Mohan"
    ],
    certificate: "U",
    image: premalu,
    },

  {
    id: 5,
    title: "Avatar",
    year: 2009,
    genre: "Adventure",
    category: "Trending",
    language: "English",
    rating: 7.9,
    duration: "2h 42m",
    director: "James Cameron",
    trailer: "https://www.youtube.com/embed/tQj9wlkuPgU",
    cast: [
      "Sam Worthington",
      "Zoe Saldaña",
      "Sigourney Weaver",
      "Stephen Lang"
    ],
    certificate: "PG-13",
    image: avatar,
     },

  {
    id: 6,
    title: "Pushpa",
    year: 2021,
    genre: "Action",
    category: "Trending",
    language: "Telugu",
    rating: 7.6,
    duration: "2h 59m",
    director: "Sukumar",
   trailer:" https://www.youtube.com/embed/vD7pncDBf70",
    cast: [
      "Allu Arjun",
      "Rashmika Mandanna",
      "Fahadh Faasil",
      "Sunil"
    ],
    certificate: "UA",
    image: pushpa,
    },
  // ================= Popular =================

  {
    id: 7,
    title: "Vikram",
    year: 2022,
    genre: "Action",
    category: "Popular",
    language: "Tamil",
    rating: 8.4,
    duration: "2h 54m",
    director: "Lokesh Kanagaraj",
    trailer:"https://www.youtube.com/embed/NXSigiaZ0W0",
    cast: [
      "Kamal Haasan",
      "Vijay Sethupathi",
      "Fahadh Faasil",
      "Narain"
    ],
    certificate: "UA",
    image: vikram,
   },

  {
    id: 8,
    title: "SooraraiPotru",
    year: 2020,
    genre: "Drama",
    category: "Popular",
    language: "Tamil",
    rating: 8.7,
    duration: "2h 33m",
    director: "Sudha Kongara",
    trailer:"https://www.youtube.com/embed/dyzraT_np8w",
    cast: [
      "Suriya",
      "Aparna Balamurali",
      "Paresh Rawal",
      "Urvashi"
    ],
    certificate: "U",
    image: sooraraiPotru,
    },

  {
    id: 9,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    category: "Popular",
    language: "English",
    rating: 8.8,
    duration: "2h 28m",
    director: "Christopher Nolan",
    trailer:"https://www.youtube.com/embed/YoHD9XEInc0",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Tom Hardy",
      "Elliot Page"
    ],
    certificate: "PG-13",
    image: inception,
     },

  {
    id: 10,
    title: "96",
    year: 2018,
    genre: "Romance",
    category: "Popular",
    language: "Tamil",
    rating: 8.5,
    duration: "2h 38m",
    director: "C. Prem Kumar",
    trailer:"https://www.youtube.com/embed/lkPI-45gxBw",
    cast: [
      "Vijay Sethupathi",
      "Trisha Krishnan",
      "Devadarshini",
      "Bagavathi Perumal"
    ],
    certificate: "U",
    image: movie96,
    },

  {
    id: 11,
    title: "Hridayam",
    year: 2022,
    genre: "Drama",
    category: "Popular",
    language: "Malayalam",
    rating: 8.2,
    duration: "2h 52m",
    director: "Vineeth Sreenivasan",
    trailer:"https://www.youtube.com/embed/epAFDEJImrU",
    cast: [
      "Pranav Mohanlal",
      "Kalyani Priyadarshan",
      "Darshana Rajendran",
      "Aju Varghese"
    ],
    certificate: "U",
    image: hridayam,
     },

  {
    id: 12,
    title: "RRR",
    year: 2022,
    genre: "Action",
    category: "Popular",
    language: "Telugu",
    rating: 8.0,
    duration: "3h 2m",
    director: "S. S. Rajamouli",
    trailer:"https://www.youtube.com/embed/X6iDKG0QMSk",
    cast: [
      "N. T. Rama Rao Jr.",
      "Ram Charan",
      "Alia Bhatt",
      "Ajay Devgn"
    ],
    certificate: "UA",
    image: rrr,
     },
    
    // ================= Action =================

  {
    id: 19,
    title: "Master",
    year: 2021,
    genre: "Action",
    category: "Action",
    language: "Tamil",
    rating: 7.8,
    duration: "2h 59m",
    director: "Lokesh Kanagaraj",
    trailer:"https://www.youtube.com/embed/UTiXQcrLlv4",
    cast: [
      "Vijay",
      "Vijay Sethupathi",
      "Malavika Mohanan",
      "Arjun Das"
    ],
    certificate: "UA",
    image: master,
     },

  {
    id: 20,
    title: "Thuppakki",
    year: 2012,
    genre: "Action",
    category: "Action",
    language: "Tamil",
    rating: 8.1,
    duration: "2h 45m",
    director: "A. R. Murugadoss",
    trailer:"https://www.youtube.com/embed/pMcWlVaqJEQ",
    cast: [
      "Vijay",
      "Kajal Aggarwal",
      "Vidyut Jammwal",
      "Sathyan"
    ],
    certificate: "U",
    image: thuppakki,
   },

  {
    id: 21,
    title: "Salaar",
    year: 2023,
    genre: "Action",
    category: "Action",
    language: "Telugu",
    rating: 7.4,
    duration: "2h 55m",
    director: "Prashanth Neel",
    trailer:"https://www.youtube.com/embed/efrYtSEnJFc",
    cast: [
      "Prabhas",
      "Prithviraj Sukumaran",
      "Shruti Haasan",
      "Jagapathi Babu"
    ],
    certificate: "A",
    image: salaar,
    },

  {
    id: 22,
    title: "The Batman",
    year: 2022,
    genre: "Action",
    category: "Action",
    language: "English",
    rating: 8.2,
    duration: "2h 56m",
    director: "Matt Reeves",
    trailer:"https://www.youtube.com/embed/mqqft2x_Aa4",
    cast: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano",
      "Colin Farrell"
    ],
    certificate: "PG-13",
    image: theBatman,
   },

  {
    id: 23,
    title: "Lucifer",
    year: 2019,
    genre: "Action",
    category: "Action",
    language: "Malayalam",
    rating: 7.5,
    duration: "2h 55m",
    director: "Prithviraj Sukumaran",
    trailer:"https://www.youtube.com/embed/X4bF_quwNtw",
    cast: [
      "Mohanlal",
      "Vivek Oberoi",
      "Manju Warrier",
      "Tovino Thomas"
    ],
    certificate: "UA",
    image: lucifer,
     },

  {
    id: 24,
    title: "Kalki 2898 AD",
    year: 2024,
    genre: "Sci-Fi",
    category: "Action",
    language: "Telugu",
    rating: 8.0,
    duration: "3h 1m",
    director: "Nag Ashwin",
    trailer:"https://www.youtube.com/embed/-boPEbe6iaI",
    cast: [
      "Prabhas",
      "Deepika Padukone",
      "Amitabh Bachchan",
      "Kamal Haasan"
    ],
    certificate: "UA",
    image: kalki,
    }

];

export default movies;