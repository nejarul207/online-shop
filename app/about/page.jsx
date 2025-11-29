'use client';

import { ShoppingBag, Shield, Truck, Heart, Award, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  const stats = [
    { id: 1, name: 'Happy Customers', value: '10,000+', icon: Users },
    { id: 2, name: 'Products Available', value: '5,000+', icon: ShoppingBag },
    { id: 3, name: 'Orders Delivered', value: '50,000+', icon: Truck },
    { id: 4, name: 'Years of Service', value: '5+', icon: Clock },
  ];

  const values = [
    {
      name: 'Customer First',
      description: 'Your satisfaction is our top priority. We go above and beyond to exceed your expectations.',
      icon: Heart,
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      name: 'Quality Products',
      description: 'We source only the best products to ensure you get value for your money.',
      icon: Award,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your orders to you as fast as possible.',
      icon: Truck,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      name: 'Secure Shopping',
      description: 'Your security is important to us. Shop with confidence with our secure payment system.',
      icon: Shield,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  const team = [
    {
      name: 'Nejarul Islam',
      role: 'Founder & CEO',
      image: 'https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/491401265_1154133259823176_1151921600611601440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE73GTQDp-6iWil853p0MDvqWcKvDm1UR2pZwq8ObVRHZ6J0-_6AqUCFkH_uEG_toDjwdUqRLpWWGTY7uGTHefj&_nc_ohc=54oYb-ltqzoQ7kNvwHuXqd4&_nc_oc=AdmG7izqpn7BpICU_YviBJoOOrARMbsezU7A4e4jyZjN2z8eKEutaSXtvP2O8gveM4o&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&_nc_gid=Vqnv79o1TfEKVggxc8qQRg&oh=00_AfiY4BVlUA1Q3ppTpqUWpyLH64K8oGkS0MKwmCBWUF35Jg&oe=692F4D60',
      bio: 'Visionary leader with 5+ years of e-commerce experience.'
    },
    {
      name: 'Tamim Hossain',
      role: 'Head of Operations',
      image: 'https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/480511928_1372216180603070_8179232898064886556_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFkjGB2OI0G5HzdcBRBK0iM_EOPpmbYniX8Q4-mZtieJa7hHszrM0LtW0I4qQ0BumxOo6Q5oCSxSx_xAQ5r_AGX&_nc_ohc=Yrb44y8Z3gcQ7kNvwFgnTMq&_nc_oc=AdlxlJA-pbd1cjKZKaQ9jXcDCr50_6lS_6RJJnnd1VxdGyUuH76oMF85st0vuTNvqw0&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&_nc_gid=TPwC_LGM5FE377tGJ7QQew&oh=00_AfjI3CzL-f4cHgrvrsB5XMposA-Eh6fwJoBjRW0OBbyPbg&oe=692F3E68',
      bio: 'Ensuring smooth operations and customer satisfaction.'
    },
    {
      name: 'Soyeb Mahmud',
      role: 'Tech Lead',
      image: 'https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/476017369_1374525913714800_8963985975924005017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEgcFvlCBUhwawszZUtblNcQQ0c-iDhDX5BDRz6IOENfo2UCc4hsaxAicl8fLeIP8Do8l4zZKhJmgzA88XvHf6p&_nc_ohc=G9LFM3yP80IQ7kNvwHWw_NG&_nc_oc=Admwhgz1ntTVurnVU2MFtaGO2SZHwcTHtDkDzRack0uxyM6qm8NBTD3cmfV9cZkSQyU&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&_nc_gid=ptIL3WVzL773N4FrG3-JmA&oh=00_AfjF72ZDXIkZL1FksYfddUTTnrR9MxCZEFTVkuBNtHMatw&oe=692F34C6',
      bio: 'Building the technology that powers your shopping experience.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-b from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to eShop</h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Your one-stop destination for all your shopping needs. Quality products, amazing prices, and exceptional service.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                What makes us different and why you'll love shopping with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl ${value.bgColor} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg ${value.iconColor} bg-opacity-20`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{value.name}</h3>
                        <p className="mt-1 text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                The passionate people behind eShop
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 overflow-hidden">
                          <img
                            className="h-full w-full object-cover"
                            src={person.image}
                            alt={person.name}
                          />
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{person.name}</h3>
                      <p className="mt-1 text-base text-indigo-600 text-center">{person.role}</p>
                      <p className="mt-3 text-base text-gray-600 text-center">{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to start shopping?</span>
              <span className="block">Join thousands of happy customers today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Discover amazing deals and shop with confidence on eShop.
            </p>
            <a
              href="/shop"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}