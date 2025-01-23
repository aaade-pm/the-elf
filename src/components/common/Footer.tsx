import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Button from "./Button";

interface ContactDetails {
  contactName: string;
  contactInfo: string;
  icon: React.ReactNode;
}

const contactDetails: ContactDetails[] = [
  {
    contactName: "Email",
    contactInfo: "support@giftplanner.com",
    icon: <MdOutlineEmail size={60} />,
  },
  {
    contactName: "Phone",
    contactInfo: "+91 9876543210",
    icon: <TbPhone size={60} />,
  },
  {
    contactName: "Address",
    contactInfo: "123, Gifty Lane, New Delhi, India",
    icon: <IoLocationOutline size={60} />,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="h-screen w-screen flex flex-col gap-6 px-10 py-[2%]">
        <section className="h-[60%] flex gap-10">
          <div className="w-1/2 h-full flex flex-col gap-12 bg-secondary-200 p-14 rounded-xl">
            <p className="text-white text-7xl">Ready to make magic happen?</p>
            <div className="">
              <Button
                text="Get Started"
                bg="bg-primary-100"
                px="3rem"
                py="1rem"
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col place-items-center gap-9">
            <p className="text-5xl font-semibold">Get In Touch</p>

            <div className="w-[80%] h-[20%] border-black border-t-[3px] border-l-[3px] border-r-[8px] border-b-[8px] rounded-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-full px-6 py-3 rounded-full bg-none outline-none placeholder:text-2xl text-xl"
              />
            </div>
            <div className="w-[80%] h-[20%] border-black border-t-[3px] border-l-[3px] border-r-[8px] border-b-[8px] rounded-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-full px-6 py-3 rounded-full bg-none outline-none placeholder:text-2xl text-xl"
              />
            </div>

            <Button text="Send" bg="bg-secondary-200" px="3rem" py="1rem" />
          </div>
        </section>
        <section className="h-[30%] w-full flex gap-10">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 text-2xl bg-primary-400 p-10 rounded-xl"
            >
              <div>
                <p className="text-4xl font-medium">{contact.contactName}</p>
              </div>
              <div>
                <p>{contact.contactInfo}</p>
              </div>
              <div className="w-full justify-center place-items-end text-white p-3 rounded-full">
                {contact.icon}
              </div>
            </div>
          ))}
        </section>
        <section className="h-[10%] w-full flex justify-center place-items-center">
          <p className="text-2xl font-thin text-gray-600">
            &copy; 2025 Gift Planner. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
