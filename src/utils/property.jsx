import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics, MdElevator } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom, MdOutlinePool, MdSecurity, MdSmartDisplay, MdSportsGymnastics } from "react-icons/md";
import { Elevator, Pool, Security, SmartDisplay, SportsGymnasticsOutlined } from "@mui/icons-material";
import { BiCctv } from "react-icons/bi";
const propertydata = [

    {
        id: "0",
        name: "Oak Villa",
        price: "",
        detail: "A specially curated ultra-luxury enclave intelligently designed with modern amenities",
        image: ["../villa1.png", "../villa2.png", "../villa3.jpg"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Asokoro ",
        city: "Asokoro",
        country: "Abuja",
        description: "Introducing an exclusive enclave of 10 distinguished detached and semi-detached duplexes. This luxurious collection boasts opulent amenities, including a state-of-the-art gym, alluring pools, and integrated smart home features. Revel in a lifestyle of unparalleled elegance, where every detail embodies sophistication and refinement."
    },
    {
        id: "1",
        name: "Oak Place",
        price: "",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../r2.png"],
        facilities: { "bedrooms": 7, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Glover road Road",
        city: "Ikoyi",
        country: "Lagos",
        description: "Discover opulent living at our exclusive mini estate, featuring 4 exquisite 5-bedroom fully detached duplexes, luxurious 3-bedroom apartments, and a stunning 4 bedroom penthouse villas. This development is meticulously planned to incorporate a cutting-edge home automation system, overseeing CCTV, energy management, safety, and various other facets, transforming your residence into a smart and intelligent home. A pioneering concept, it stands as the first-of-its-kind housing estate in Nigeria."
    },
    {
        id: "2",
        name: "Kaylas Haven",
        price: "Sold Out",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../r77.png"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 4 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Victoria Island",
        city: "Victoria Island",
        country: "Lagos",
        description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack."
    },
    {
        id: "3",
        name: "Oak Mews",
        price: "",
        detail: "ikate elegushi lekki, (after 3rd roundabout, behind world oil filling station and blenco supermarket) Lagos",
        image: ["../r9.png"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Ikate Lekki",
        city: "Lagos",
        country: "Nigeria",
        description: "Welcome to a modern oasis in this contemporary 5-bedroom semi-detached duplex—a spacious, state-of-the-art residence perfect for a family home. Nestled in a prime location, this exquisite property embodies elegance, offering ample space and modern amenities, fulfilling every aspiration for refined family living"
    },
    {
        id: "4",
        name: "Oak Residence",
        price: "",
        detail: "A complete work of art. It’s timeless designs draws its inspiration from modern architectural master pieces around the world",
        image: ["../res1(1).jpeg", "../res1(2).jpeg", "../res1(3).jpeg", "../res1(4).jpeg"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 5 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" },],
        address: "Musa Yar'adua street",
        city: "Victoria Island",
        country: "Lagos",
        description: "A complete work of art. This exquisite masterpiece of 3 Bedroom apartments and 4 bedroom penthouse villas draws its timeless designs and inspiration from modern architectural master pieces around the world. Enjoy a good selection of quality amenities, exquisite modern architecture, maximum security and unparalled service with breathtaking views of Lagos city from each floor of our magnificent development"
    },
    {
        id: "7",
        name: "Oak Villa",
        price: "",
        detail: "A specially curated ultra-luxury enclave intelligently designed with modern amenities",
        image: ["../villa1.png", "../villa2.png", "../villa3.jpg"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Asokoro ",
        city: "Asokoro",
        country: "Abuja",
        description: "Introducing an exclusive enclave of 10 distinguished detached and semi-detached duplexes. This luxurious collection boasts opulent amenities, including a state-of-the-art gym, alluring pools, and integrated smart home features. Revel in a lifestyle of unparalleled elegance, where every detail embodies sophistication and refinement."
    },
    {
        id: "1",
        name: "Oak Place",
        price: "",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../r2.png"],
        facilities: { "bedrooms": 7, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Glover road Road",
        city: "Ikoyi",
        country: "Lagos",
        description: "Discover opulent living at our exclusive mini estate, featuring 4 exquisite 5-bedroom fully detached duplexes, luxurious 3-bedroom apartments, and a stunning 4 bedroom penthouse villas. This development is meticulously planned to incorporate a cutting-edge home automation system, overseeing CCTV, energy management, safety, and various other facets, transforming your residence into a smart and intelligent home. A pioneering concept, it stands as the first-of-its-kind housing estate in Nigeria."
    },
    {
        id: "2",
        name: "Kaylas Haven",
        price: "Sold Out",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../r77.png"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 4 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Victoria Island",
        city: "Victoria Island",
        country: "Lagos",
        description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack."
    },
    {
        id: "3",
        name: "Oak Mews",
        price: "",
        detail: "ikate elegushi lekki, (after 3rd roundabout, behind world oil filling station and blenco supermarket) Lagos",
        image: ["../r9.png"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <SportsGymnasticsOutlined  size={50} color="#719150" />, name: "Gym" }, { icon: <SmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <Security  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <Pool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <Elevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Ikate Lekki",
        city: "Lagos",
        country: "Nigeria",
        description: "Welcome to a modern oasis in this contemporary 5-bedroom semi-detached duplex—a spacious, state-of-the-art residence perfect for a family home. Nestled in a prime location, this exquisite property embodies elegance, offering ample space and modern amenities, fulfilling every aspiration for refined family living"
    },
    {
        id: "4",
        name: "Oak Residence",
        price: "",
        detail: "A complete work of art. It’s timeless designs draws its inspiration from modern architectural master pieces around the world",
        image: ["../res1(1).jpeg", "../res1(2).jpeg", "../res1(3).jpeg", "../res1(4).jpeg"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 5 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" },],
        address: "Musa Yar'adua street",
        city: "Victoria Island",
        country: "Lagos",
        description: "A complete work of art. This exquisite masterpiece of 3 Bedroom apartments and 4 bedroom penthouse villas draws its timeless designs and inspiration from modern architectural master pieces around the world. Enjoy a good selection of quality amenities, exquisite modern architecture, maximum security and unparalled service with breathtaking views of Lagos city from each floor of our magnificent development"
    }

];
export default propertydata;