import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email functionality integration placeholder
    console.log("Sending contact form to: jahprintco@gmail.com", formData);
    alert("Message sent! We'll be in touch.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Newsletter email integration placeholder
    console.log("Subscribing email:", subscriberEmail);
    alert("Thanks for subscribing!");
    setSubscriberEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <header className="text-center mb-16">
        <img src="/Logo.png" alt="JAH Threads Logo" className="mx-auto w-40 h-40 mb-4 drop-shadow-lg" />
        <p className="text-lg italic">"That men may know that thou, whose name alone is JAH, art the most high over all the earth." – Psalm 83:18</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        <Card className="bg-white text-black rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Streetwear Essentials</h2>
            <p>Bold, faith-inspired pieces made for the culture. Wear your message.</p>
          </CardContent>
        </Card>
        <Card className="bg-white text-black rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Faith Meets Fashion</h2>
            <p>Every piece is a conversation starter. Designed with purpose.</p>
          </CardContent>
        </Card>
        <Card className="bg-white text-black rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Join the Movement</h2>
            <p>Be part of a growing community repping Christ through fashion.</p>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black rounded-xl p-4">
            <img src="/placeholder-shirt.jpg" alt="Product" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Faith Tee</h3>
            <p>$30.00</p>
          </div>
          <div className="bg-white text-black rounded-xl p-4">
            <img src="/placeholder-hoodie.jpg" alt="Product" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">JAH Hoodie</h3>
            <p>$50.00</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Product Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <img src="/product1.jpg" alt="Product 1" className="rounded-lg" />
          <img src="/product2.jpg" alt="Product 2" className="rounded-lg" />
          <img src="/product3.jpg" alt="Product 3" className="rounded-lg" />
          <img src="/product4.jpg" alt="Product 4" className="rounded-lg" />
        </div>
      </section>

      <section className="w-full max-w-2xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="bg-white text-black hover:bg-gray-200">Send Message</Button>
        </form>
      </section>

      <section className="w-full max-w-xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-sm text-gray-400 mb-4">Subscribe to get updates on new drops and exclusive content.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            required
          />
          <Button type="submit" className="bg-white text-black hover:bg-gray-200">Subscribe</Button>
        </form>
      </section>

      <section className="w-full max-w-6xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
        <p className="text-sm text-gray-400">Add your social media links here:</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:underline text-white">Instagram</a>
          <a href="#" className="hover:underline text-white">Facebook</a>
          <a href="#" className="hover:underline text-white">TikTok</a>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} JAH Threads. All rights reserved.</p>
      </footer>
    </div>
  );
}
