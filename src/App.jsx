import React, { useState } from 'react';
import { Button, Input, Form, Select, Rate, message, Modal, DatePicker } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  LinkedinFilled,
  TwitchFilled,
  FacebookFilled,
  InstagramFilled
} from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import emailjs from 'emailjs-com';
import logWithText from './assets/images/nexa-tech-name-logo.png';

const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();
  const [scheduleForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

  const onFinish = () => {
    messageApi.success('Thank you for your message. We will contact you soon!');
    form.resetFields();
  };

  const handleScheduleFinish = (values) => {
    // Format the date from DatePicker (returns a moment object)
    console.log(values,'values')
    const formattedDate = values.date ? values.date.format('YYYY-MM-DD') : '';
    
    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone || '',
      date: formattedDate,
      time: values.time,
      message: values.message || '',
    };

    emailjs.send(
      "service_hz5xksl", // Your EmailJS Service ID
      "template_48vo9gb", // Your EmailJS Template ID
      templateParams,
      "TTcEtrdpZhs67ADvg" // Replace with your actual EmailJS Public Key
    )
    .then((response) => {
      messageApi.success('Your consultation is scheduled and email sent!');
      setScheduleModalVisible(false);
      scheduleForm.resetFields();
    })
    .catch((error) => {
      messageApi.error('Failed to schedule consultation. Please try again.');
    });
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
      icon: 'fas fa-code',
      image:
        'https://public.readdy.ai/ai/img_res/b833b7395e1a5b6f63ca34bf0ae6cde5.jpg'
    },
    {
      title: 'Web Design',
      description: 'Beautiful, responsive designs that engage your audience',
      icon: 'fas fa-palette',
      image:
        'https://public.readdy.ai/ai/img_res/26125d4f554afc018351d29154fa9788.jpg'
    },
    {
      title: 'Cloud Deployment',
      description: 'Secure and scalable cloud infrastructure solutions',
      icon: 'fas fa-cloud',
      image:
        'https://public.readdy.ai/ai/img_res/585605d6256fd02c777bd4a7b1ac36e6.jpg'
    },
    {
      title: 'Maintenance Service',
      description: '24/7 support and maintenance for your digital assets',
      icon: 'fas fa-tools',
      image:
        'https://public.readdy.ai/ai/img_res/8700861d7dbd013b410b439ab09db134.jpg'
    }
  ];

  const projects = [
    {
      name: 'E-commerce Platform',
      client: 'Global Retail Solutions',
      description: 'Full-stack e-commerce solution with advanced analytics',
      image:
        'https://public.readdy.ai/ai/img_res/e7525de260ddf241de6ecb2457d44965.jpg'
    },
    {
      name: 'Healthcare Portal',
      client: 'MediCare Systems',
      description: 'Secure patient management system',
      image:
        'https://public.readdy.ai/ai/img_res/ba0b3b601972f20b77b9cd3f30fb3795.jpg'
    },
    {
      name: 'Financial Dashboard',
      client: 'Investment Corp',
      description: 'Real-time financial data visualization platform',
      image:
        'https://public.readdy.ai/ai/img_res/8249c73ccdb80694b58e21b796bab02b.jpg'
    },
    {
      name: 'Educational Platform',
      client: 'EduTech Solutions',
      description: 'Interactive learning management system',
      image:
        'https://public.readdy.ai/ai/img_res/ab3922eab145bf41934d6a6204f698e8.jpg'
    },
    {
      name: 'Real Estate Portal',
      client: 'PropertyFinder',
      description: 'Property listing and management platform',
      image:
        'https://public.readdy.ai/ai/img_res/772c3e6668a757ea3a90bbd258bae5be.jpg'
    },
    {
      name: 'Social Network',
      client: 'ConnectHub',
      description: 'Community engagement platform',
      image:
        'https://public.readdy.ai/ai/img_res/1b9c9fef811dcf709f9179d3e490a222.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Emily Thompson',
      role: 'CEO at Global Retail Solutions',
      content:
        'Nexa Tech transformed our digital presence completely. Their expertise in web development and cloud solutions helped us scale our operations efficiently.',
      rating: 5,
      image:
        'https://public.readdy.ai/ai/img_res/214a35a18c6c96c556c61f87908db07f.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO at TechVision Inc',
      content:
        'Outstanding service and technical expertise. The team at Nexa Tech delivered our project on time and exceeded our expectations.',
      rating: 5,
      image:
        'https://public.readdy.ai/ai/img_res/3daf301d2a594710f5904775ecef8b45.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Director at Innovation Labs',
      content:
        'The maintenance service is exceptional. They are always available and quick to resolve any issues we encounter.',
      rating: 5,
      image:
        'https://public.readdy.ai/ai/img_res/87acda914a08f383ae495000e2caf999.jpg'
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      {contextHolder}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logWithText} alt="logo" className="h-10" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              type="primary"
              size="large"
              className="rounded-lg bg-purple-600 hover:bg-purple-700 hidden md:block"
            >
              Get Started
            </Button>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <Button
                type="primary"
                size="large"
                className="rounded-lg bg-purple-600 hover:bg-purple-700 w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 relative min-h-[700px] bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://public.readdy.ai/ai/img_res/a0c94e63fb6b64d0ffbc028ffae5b826.jpg"
            className="w-full h-full object-cover opacity-20"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80"></div>
          <div
            className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/9a533ff5557c460659bb283f1fb88fbe.jpg')] opacity-10"
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Transforming Ideas Into Digital Reality
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                We craft innovative digital solutions that empower businesses to thrive in the modern world. Our expertise spans web development, design, and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="rounded-lg bg-white text-purple-600 hover:bg-gray-100 transition-colors w-full sm:w-auto"
                >
                  <i className="fas fa-rocket mr-2"></i>
                  Our Services
                </Button>
                <Button
                  type="default"
                  size="large"
                  onClick={() => setScheduleModalVisible(true)}
                  className="rounded-lg border-white text-white hover:bg-white hover:text-purple-600 transition-colors w-full sm:w-auto"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Schedule Consultation
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img
                    src="https://public.readdy.ai/ai/img_res/af9a957a056335aa0d64d99b83fd6bf7.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Client"
                  />
                  <img
                    src="https://public.readdy.ai/ai/img_res/8bf9160cb0fe815dde0f3c96c3bcf3c1.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Client"
                  />
                  <img
                    src="https://public.readdy.ai/ai/img_res/1667c9fa469ea771b53c38445ec420b2.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Client"
                  />
                </div>
                <p className="text-sm">Trusted by 500+ companies worldwide</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              {/* Optionally, add an image or illustration here */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12">
            Comprehensive digital solutions for your business needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <i className={`${service.icon} text-2xl text-purple-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="text-purple-600 hover:underline font-medium">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12">
            We deliver excellence through innovation and dedication
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <i className="fas fa-brain text-5xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Technical Expertise</h3>
              <p className="text-gray-600">
                Our team comprises industry experts with deep technical knowledge and years of experience.
              </p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-shield-alt text-5xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Reliable Solutions</h3>
              <p className="text-gray-600">
                We build robust and scalable solutions that stand the test of time.
              </p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-lightbulb text-5xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Innovative Approach</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-center mb-12">
            Discover our latest success stories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-500 mb-2">{project.client}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              type="primary"
              size="large"
              className="rounded-lg bg-purple-600 hover:bg-purple-700"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Client Testimonials</h2>
          <p className="text-gray-600 text-center mb-12">
            What our clients say about us
          </p>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <Rate disabled defaultValue={testimonial.rating} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12">
            Ready to start your project? Contact us today!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow">
              <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input size="large" placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                >
                  <Input size="large" placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="phone">
                  <Input size="large" placeholder="Your Phone" />
                </Form.Item>
                <Form.Item
                  name="service"
                  rules={[{ required: true, message: 'Please select a service' }]}
                >
                  <Select size="large" placeholder="Select Service">
                    {services.map((service, index) => (
                      <Select.Option key={index} value={service.title}>
                        {service.title}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-full rounded-lg bg-purple-600 hover:bg-purple-700"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <EnvironmentOutlined className="text-2xl text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600">Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MailOutlined className="text-2xl text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">gauravchavhan05@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneOutlined className="text-2xl text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">+91 8830 8949 32</p>
                  </div>
                </div>
                <div className="pt-6">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/nexatechsolutionstech/?viewAsMember=true" className="text-2xl text-gray-600 hover:text-purple-600">
                      <LinkedinFilled />
                    </a>
                    <a href="#" className="text-2xl text-gray-600 hover:text-purple-600">
                      <TwitchFilled />
                    </a>
                    <a href="#" className="text-2xl text-gray-600 hover:text-purple-600">
                      <FacebookFilled />
                    </a>
                    <a href="#" className="text-2xl text-gray-600 hover:text-purple-600">
                      <InstagramFilled />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nexa Tech</h3>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative digital solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cloud Deployment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Maintenance Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                <Input placeholder="Your email" className="rounded-lg" />
                <Button
                  type="primary"
                  className="rounded-lg bg-purple-600 hover:bg-purple-700"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © 2025 Nexa Tech. All rights reserved. |{' '}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Schedule Consultation Modal */}
      <Modal
        title={
          <div className="w-full text-center rounded-t">
            Schedule Consultation
          </div>
        }
        visible={scheduleModalVisible}
        onCancel={() => setScheduleModalVisible(false)}
        footer={null}
        centered
        className="rounded-lg overflow-hidden"
      >
        <div className="p-6">
          <Form form={scheduleForm} onFinish={handleScheduleFinish} layout="vertical">
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item name="phone">
              <Input placeholder="Your Phone" />
            </Form.Item>
            <Form.Item
              name="date"
              rules={[{ required: true, message: 'Please select a date' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="time"
              rules={[{ required: true, message: 'Please select a time' }]}
            >
              <Input placeholder="Preferred Time (e.g. 14:00)" />
            </Form.Item>
            <Form.Item name="message">
              <TextArea rows={3} placeholder="Additional Message (optional)" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="rounded-lg bg-purple-600 hover:bg-purple-700"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default App;
