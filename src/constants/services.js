import React from "react";
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from "react-icons/gi";

const services = [
  {
    id: 4,
    icon: <GiBriefcase className="icon" />,
    label: "rad",
    text:
      "Mi smo tim koji je u želji da iskaže svoju kreativnost otpočeo sa izradom drvenih dekoracija za Vaše posebne prilike. Naš rad uključuje: dekoracija za venčanja, rođendane, uskrse, 8 martovske i druge svečane priredbe.",
  },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    label: "istorija",
    text:
      "Zahvaljujući našoj ekspertizi i strasti u izradi drvenih dekoracija. Sada iza nas stoji višegodišnji rad sa velikim brojem uspešno pripremljenih unikatnih i ručno izrađenih projekata i zadovoljnih klijenata i pratioca.",
  },
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    label: "misija",
    text:
      " Da svim našim klijentima bez obzira na veličinu, vrstu ili kritičnost njihovog projekta, kroz potpunu transparentnost postupka, obezbijedimo jedinstven i unikatani dekorativni proizvod.",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    label: "vizija",
    text:
      "Da postanemo partner od povijerenja prilikom pružanja nasih servisa i usluga i time ostvarimo nabolju moguću saradnju sa nasim klijentima kako tokom tako i poslije ostvarenog projekta.",
  },
];

export default services;
