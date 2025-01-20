import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Conditions = () => {
  return (
    <div className="my-6">
      <h1 className="text-center my-5 font-bold text-3xl text-lime-500">
        আমাদের শর্তাবলী
      </h1>
      <div className="border border-lime-400 w-[80%] mx-auto my-10 p-6 px-8 rounded shadow-xl">
        <ul className="space-y-3 text-lg">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">
              যাত্রার ৩০ মিনিট পূর্বে যথাস্থানে উপস্থিত থাকতে হবে।
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base"> টিকেটটি অবশ্যই প্রিন্ট করে আনতে হবে।</p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">
              যাত্রার ২৪-৪৮ ঘন্টা পূর্বে বাস নাম্বার, গাইডের নাম ও নাম্বার ও সকল
              তথ্য মেসেজ করা হবে। তাই মোবাইল নাম্বারটি সতর্কতার সাথে দিবেন এবং
              সবসময় সচল রাখবেন।
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">টিকেট ফেরতযোগ্য এবং হস্তান্তরযোগ্য নয়।</p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">যাত্রাকালে ধুমপান নিষেধ।</p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">
              যাত্রায় কোনো প্রকার দূর্ঘটনাজনিত বীমা অন্তর্ভুক্ত নয়।
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">
              কর্তৃপক্ষ যেকোনো পারিপার্শ্বিক বিবেচনায় যাত্রা শুরুর স্থান
              পরিবর্তন করতে পারে এবং এই পরিবর্তনের খবর যাওয়ার কমপক্ষে ২৪-৪৮
              ঘন্টা পূর্বে মেসেজ করে জানিয়ে দেওয়া হবে।
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faHandPointRight}
              className="text-lime-500 mt-1 mr-2"
            />
            <p className="text-base">
              অবৈধ মালামাল বহনে কর্তৃপক্ষ দায়ী না, কোনো বিরুপ পরিস্থিতিতে
              আইনশৃঙ্খলা বাহিনী কে কর্তৃপক্ষ সর্বাত্মক সহযোগিতা করবে।
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Conditions;
