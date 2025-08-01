import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MessageSquare,
  Clock,
  MapPin,
  Building,
  Headphones,
  Shield,
  Car,
  Train,
  Upload,
  CheckCircle,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const [selectedPriority, setSelectedPriority] = useState("Medium");
  const [messageCount, setMessageCount] = useState(0);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageCount(e.target.value.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[553.5px] bg-gradient-to-br from-red-600 via-orange-600 to-red-700 flex items-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl font-bold leading-[60px] mb-6">
                Get Expert Help & Support
              </h1>
              <p className="text-xl leading-8 text-red-50 mb-8">
                Our dedicated team is here to assist you with any questions, technical issues, or business inquiries. Choose how you'd like to connect with us.
              </p>
              
              {/* Stats Cards */}
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                  <div className="text-3xl font-bold text-orange-200 text-center">24/7</div>
                  <div className="text-sm text-gray-200 text-center">Support Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                  <div className="text-3xl font-bold text-orange-200 text-center">&lt;1hr</div>
                  <div className="text-sm text-gray-200 text-center">Response Time</div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Quick Access */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white text-red-600 hover:bg-white/90">
                  <Headphones className="w-4 h-4 mr-2" />
                  Technical Support
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <Building className="w-4 h-4 mr-2" />
                  Business Inquiry
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Feedback
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  Partnership
                </Badge>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Technical Support</h3>
                <p className="text-sm text-gray-200">Having trouble with our tools? Get instant help from our technical team.</p>
                <div className="flex items-center text-sm text-gray-200">
                  <Clock className="w-4 h-4 mr-2 text-orange-200" />
                  Average response: 15 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-36">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple ways to reach our support team. Pick the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Support */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg p-6">
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone Support</h3>
                <p className="text-sm text-green-50">Call us directly for immediate assistance</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Contact Info:</span>
                      <button className="text-xs text-blue-600 hover:underline">Copy</button>
                    </div>
                    <p className="font-medium text-gray-900">+447429919748</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    24/7 Available
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg p-6">
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Support</h3>
                <p className="text-sm text-blue-50">Send us an email for detailed inquiries</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Contact Info:</span>
                      <button className="text-xs text-blue-600 hover:underline">Copy</button>
                    </div>
                    <p className="font-medium text-gray-900">support@pdfconvertmaster.com</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Response within 1 hour
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg p-6">
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-purple-50">Chat with our support team in real-time</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-600">Contact Info:</span>
                    <p className="font-medium text-gray-900">Available on website</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon-Fri 9AM-6PM GMT
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg p-6">
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-green-50">Quick support via WhatsApp messaging</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Contact Info:</span>
                      <button className="text-xs text-blue-600 hover:underline">Copy</button>
                    </div>
                    <p className="font-medium text-gray-900">+447429919748</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Quick response
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    Message Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us on Social Media</h3>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-64">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="shadow-2xl bg-white rounded-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                {/* Category and Priority Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category" className="text-sm font-semibold text-gray-700">
                      Category *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Technical Support" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="business">Business Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Priority Level</Label>
                    <div className="flex gap-2 mt-2">
                      {["Low", "Medium", "High", "Urgent"].map((priority) => (
                        <Badge
                          key={priority}
                          variant={selectedPriority === priority ? "default" : "secondary"}
                          className={`cursor-pointer ${
                            selectedPriority === priority
                              ? priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                : "bg-gray-100 text-gray-800"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                          onClick={() => setSelectedPriority(priority)}
                        >
                          {priority}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your inquiry"
                    className="mt-2 h-12"
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message *
                    </Label>
                    <span className="text-sm text-gray-500">({messageCount}/500)</span>
                  </div>
                  <Textarea
                    id="message"
                    placeholder="Please provide detailed information about your inquiry..."
                    className="mt-2 min-h-[160px] resize-none"
                    maxLength={500}
                    onChange={handleMessageChange}
                  />
                </div>

                {/* File Upload */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label className="text-sm font-semibold text-gray-700">Attachments</Label>
                    <span className="text-sm text-gray-500">(Optional - Max 5MB per file)</span>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">Click to upload files or drag and drop</p>
                    <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG</p>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-between items-center pt-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-600 mr-2" />
                    Your information is secure and confidential
                  </div>
                  <Button 
                    type="submit" 
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-64">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our PDF tools and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 hover:no-underline">
                What file formats do you support for conversion?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="border-l-4 border-red-600 pl-5">
                  <p className="text-gray-700 leading-relaxed">
                    We support a wide range of file formats including PDF, Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), JPG, PNG, HTML, and many more. Our tools can handle most common document and image formats.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {[
              "Is there a file size limit for uploads?",
              "How secure is my data during conversion?", 
              "Can I use your tools offline?",
              "Do you offer API access for developers?",
              "What payment methods do you accept?",
              "Can I cancel my subscription anytime?",
              "Do you provide technical support?",
              "Are there any usage limits?",
              "How can I get a refund?"
            ].map((question, index) => (
              <AccordionItem key={index + 2} value={`item-${index + 2}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Content for {question.toLowerCase()}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <Card className="mt-12 border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-2">Still Have Questions?</h3>
              <p className="text-red-800 mb-4">Can't find the answer you're looking for? Our support team is here to help!</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location & Office Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-36">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Location & Office Hours
            </h2>
            <p className="text-lg text-gray-600">
              Find us in London, UK with global support coverage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h3>
              
              <div className="space-y-6">
                {/* Headquarters */}
                <Card className="bg-gray-50 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                        <Building className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-red-500 mr-2" />
                            <span>Mizan Store Ltd</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-red-500 mr-2" />
                            <span>London, United Kingdom</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-red-500 mr-2" />
                            <span>+447429919748</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-red-500 mr-2" />
                            <span>info@mizanstore.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Support */}
                <Card className="bg-gray-50 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                        <Headphones className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-red-500 mr-2" />
                            <span>PDF Convert Master</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-red-500 mr-2" />
                            <span>Technical Operations Center</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-red-500 mr-2" />
                            <span>+447429919748</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-red-500 mr-2" />
                            <span>support@pdfconvertmaster.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-blue-50 border border-blue-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Office Hours</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">Monday - Friday</span>
                        <span className="text-blue-600">9:00 AM - 6:00 PM GMT</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">Saturday</span>
                        <span className="text-blue-600">10:00 AM - 4:00 PM GMT</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800 font-medium">Sunday</span>
                        <span className="text-blue-600">Emergency Support Only</span>
                      </div>
                    </div>
                    <div className="border-t border-blue-200 mt-4 pt-4">
                      <div className="flex items-center text-sm text-blue-800">
                        <Phone className="w-4 h-4 text-blue-600 mr-2" />
                        24/7 Emergency Support: +447429919748
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6 shadow-lg">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Central London location</p>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-green-50 border border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Car className="w-4 h-4 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">Parking</span>
                    </div>
                    <p className="text-sm text-green-700">Free parking available for visitors</p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Train className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">Transit</span>
                    </div>
                    <p className="text-sm text-blue-700">Central London location, easily accessible</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
