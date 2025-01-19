import React from "react";
import image from "../assets/duranto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[rgb(8,20,51)]  p-8 flex justify-between text-white text-left gap-8">
        <aside className="text-left">
          <img className="w-14 h-12 rounded" src={image} alt="image" />
          <p className="text-2xl font-bold my-2">Durontotravelsbd</p>
          <p className="text-base font-medium">
            বিশ্ববিদ্যালয় ভর্তি পরিক্ষার্থীদের জন্য বাস সার্ভিসের বিশ্বস্ত
            প্রতিষ্ঠান। ২০১৮ সাল থেকে আমরা সেবা দিয়ে যাচ্ছি।
          </p>
        </aside>
        <nav>
          <h6 className="text-2xl font-bold text-white">Contact</h6>
          <p className="link link-hover text-base font-medium my-3 leading-6">
            অফিস :২০৮ লালচাঁদ রোড(ফোকাস কোচিং এ একাডেমিক বিল্ডিং এর নিচতলা
            /সোনালী ব্যাংকের নিচতলা, চকবাজার, চট্টগ্রাম।
          </p>
          <p className="text-2xl font-bold text-white">Email address</p>
          <p className="link link-hover text-base font-medium  my-3">
            durontotravelsbd@gmail.com
          </p>
          <p className="text-2xl font-bold text-white">Phone Number</p>
          <p className="link link-hover text-base font-medium my-3">
            01519400800, 01735150555
          </p>
          <div className="flex gap-5 my-5">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-white">Important Link</h6>
          <p className="link link-hover text-base font-medium my-3">Gallery</p>
          <p className="link link-hover text-base font-medium">Blog</p>
          <p className="link link-hover text-base font-medium mt-3">
            Conditions
          </p>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-white mb-4">
            Offline Ticket Counter
          </h6>
          <div className="flex gap-3 mb-3">
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <p className="text-base font-medium leading-6">
              ঠিকানাঃ অফিস :২০৮ লালচাঁদ রোড(ফোকাস কোচিং এ একাডেমিক বিল্ডিং এর
              নিচতলা /সোনালী ব্যাংকের নিচতলা, চকবাজার, চট্টগ্রাম
            </p>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <p>01519400800, 01735150555</p>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-black text-neutral-content items-center p-5 px-8">
        <aside className="grid-flow-col items-center">
          <p className="text-base font-medium">
            Copyright © {new Date().getFullYear()} Durontotravelsbd | Powered by
            Durontotravelsbd
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Design & Develop by AS IT PARK</p>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
