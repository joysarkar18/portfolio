import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
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
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 gap-10 flex flex-col items-center"
    >
      <div className="gap-x-[4vw] flex">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#191C1F] w-[40vw] sm:w-[25vw] px-6 rounded-full py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-[#191C1F] w-[40vw] sm:w-[25vw] px-6 rounded-full py-2"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#191C1F] w-[84vw] sm:w-[54vw] px-6 rounded-full py-2"
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
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
