"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert("Thank you for your inquiry! We will get back to you soon.");
    setTimeout(() => setAlert(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-black bg-opacity-50 text-white py-16 px-4"
      id="contact"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl italic mb-6">Érdeklődjön a MagyarTop</h2>
        {alert && (
          <div className="bg-green-500 text-white p-3 rounded mb-4">
            {alert}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-1/2 p-2 bg-[#161616] bg-opacity-60 border border-gray-700 rounded text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-1/2 p-2 bg-[#161616] bg-opacity-60 border border-gray-700 rounded text-white"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-2 bg-[#161616] bg-opacity-60 border border-gray-700 rounded text-white"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black rounded-md border border-white hover:bg-gray-300 transition"
          >
            Submit Your Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
