import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="bg-gray-100 py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SaaS Company</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          <Button>Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto flex items-center py-16">
        <div className="w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Our SaaS Platform</h1>
          <p className="text-lg">Streamline your business processes with our cutting-edge solutions.</p>
          <Button>Get Started</Button>
        </div>
        <div className="w-1/2">
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 4</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 4.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <ul className="list-disc pl-5">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <ul className="list-disc pl-5">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <ul className="list-disc pl-5">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex items-center">
          <div className="w-1/2 space-y-4">
            <p>We are a leading SaaS company providing top-notch solutions for businesses worldwide.</p>
          </div>
          <div className="w-1/2">
            <img src="https://placehold.co/600x400" alt="placeholder" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
          <Input placeholder="Name" {...form.register("name")} />
          <Input placeholder="Email" {...form.register("email")} />
          <Textarea placeholder="Message" {...form.register("message")} />
          <Button type="submit">Send</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>&copy; 2023 SaaS Company</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Index;