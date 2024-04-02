"use client";

import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    contact: "",
    user_email: "",
    form_name: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o4fykbp",
        "template_m0cxxux",
        e.target,
        "V2Hg3zbD-zPyJKbX-"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    console.log(formData);
    // Optionally, reset form fields after submission
    setFormData({
      user_name: "",
      contact: "",
      user_email: "",
      form_name: "",
      message: "",
    });
    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 gap-10 flex flex-col items-center"
    >
      <ToastContainer></ToastContainer>
      <div className="gap-x-[4vw] flex">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={formData.user_name}
          onChange={handleChange}
          className="bg-[#191C1F] w-[40vw] sm:w-[25vw] px-6 rounded-full py-2"
        />
        <input
          type="tel"
          name="contact"
          placeholder="Phone"
          value={formData.contact}
          onChange={handleChange}
          className="bg-[#191C1F] w-[40vw] sm:w-[25vw] px-6 rounded-full py-2"
        />
      </div>
      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.user_email}
          onChange={handleChange}
          className="bg-[#191C1F] w-[84vw] sm:w-[54vw] px-6 rounded-full py-2"
        />
      </div>
      <div>
        <input
          type="text"
          name="form_name"
          placeholder="Subject"
          value={formData.form_name}
          onChange={handleChange}
          className="bg-[#191C1F] w-[84vw] sm:w-[54vw] px-6 rounded-full py-2"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-[#191C1F] w-[84vw] sm:w-[54vw] h-28 px-6 rounded-lg py-2"
        />
      </div>
      <button
        type="submit"
        className="h-12 w-52 rounded-full bg-gradient-to-r from-[#FA6006] to-[#FFB58A] text-lg font-semibold"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
