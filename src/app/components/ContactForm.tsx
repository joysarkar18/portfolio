import React, { useState } from "react";

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
    // Handle form submission here
    console.log(formData);
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
