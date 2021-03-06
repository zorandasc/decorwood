import React from "react";
import {
  FaHome,
  FaBabyCarriage,
  FaHatWizard,
  FaEnvelopeOpenText,
} from "react-icons/fa";
const links = [
  {
    page: "pocetna",
    label: "Početna",
    url: `/`,
    icon: <FaHome className="icon" />,
  },
  {
    page: "onama",
    label: "O Nama",
    url: `/onama`,
    icon: <FaBabyCarriage className="icon" />,
  },
  {
    page: "galerija",
    label: "Galerija",
    url: `/galerija/sve`,
    icon: <FaHatWizard className="icon" />,
  },
  {
    page: "kontakt",
    label: "Kontakt",
    url: `/kontakt`,
    icon: <FaEnvelopeOpenText className="icon" />,
  },
];

export default links;
