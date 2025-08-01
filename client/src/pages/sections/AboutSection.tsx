import React from "react";
import { Button } from "@/components/ui/button";

export const AboutSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        className="flex flex-col items-center justify-center w-full h-[400px] px-4 py-24 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/20bcb3bd3bfc2186efb205fa91833735238659a2?width=2880')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold leading-none mb-0">
              <span className="text-white">About </span>
              <span className="text-[#fdba74]">PDF Convert Master</span>
            </h1>
          </div>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-2xl text-[#e5e7eb] leading-8 text-center">
              Empowering businesses and individuals with professional PDF
              <br />
              solutions since our founding
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#fdba74]" viewBox="0 0 20 18" fill="currentColor">
                <path d="M16.8828 14.25H18.3828V15.75H1.88281V14.25H3.38281V3C3.38281 2.79 3.45531 2.6125 3.60031 2.4675C3.74531 2.3225 3.92281 2.25 4.13281 2.25H11.6328C11.8428 2.25 12.0203 2.3225 12.1653 2.4675C12.3103 2.6125 12.3828 2.79 12.3828 3V14.25H15.3828V8.25H13.8828V6.75H16.1328C16.3428 6.75 16.5203 6.8225 16.6653 6.9675C16.8103 7.1125 16.8828 7.29 16.8828 7.5V14.25ZM4.88281 3.75V14.25H10.8828V3.75H4.88281ZM6.38281 8.25H9.38281V9.75H6.38281V8.25ZM6.38281 5.25H9.38281V6.75H6.38281V5.25Z"/>
              </svg>
              <span className="text-white text-lg">Mizan Store Ltd</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#fdba74]" viewBox="0 0 19 18" fill="currentColor">
                <path d="M7.38719 8.01C7.73719 8.63 8.16469 9.1925 8.66969 9.6975C9.17469 10.2025 9.73719 10.63 10.3572 10.98L11.0172 10.05C11.1272 9.89 11.2747 9.79 11.4597 9.75C11.6447 9.71 11.8222 9.735 11.9922 9.825C13.0622 10.415 14.2072 10.755 15.4272 10.845C15.6172 10.865 15.7797 10.945 15.9147 11.085C16.0497 11.225 16.1172 11.395 16.1172 11.595V14.94C16.1172 15.13 16.0522 15.2975 15.9222 15.4425C15.7922 15.5875 15.6322 15.67 15.4422 15.69C15.0422 15.73 14.6422 15.75 14.2422 15.75C12.6622 15.75 11.1522 15.445 9.71219 14.835C8.32219 14.245 7.09219 13.415 6.02219 12.345C4.95219 11.275 4.12219 10.045 3.53219 8.655C2.92219 7.215 2.61719 5.705 2.61719 4.125C2.61719 3.725 2.63719 3.325 2.67719 2.925C2.69719 2.735 2.77969 2.575 2.92469 2.445C3.06969 2.315 3.23719 2.25 3.42719 2.25H6.77219C6.97219 2.25 7.14219 2.3175 7.28219 2.4525C7.42219 2.5875 7.50219 2.75 7.52219 2.94C7.61219 4.16 7.95219 5.305 8.54219 6.375C8.63219 6.545 8.65719 6.7225 8.61719 6.9075C8.57719 7.0925 8.47719 7.24 8.31719 7.35L7.38719 8.01ZM5.49719 7.515L6.92219 6.495C6.52219 5.625 6.24719 4.71 6.09719 3.75H4.11719V4.125C4.11719 5.495 4.38219 6.81 4.91219 8.07C5.42219 9.28 6.14469 10.3525 7.07969 11.2875C8.01469 12.2225 9.08719 12.945 10.2972 13.455C11.5572 13.985 12.8722 14.25 14.2422 14.25H14.6172V12.27C13.6572 12.12 12.7422 11.845 11.8722 11.445L10.8522 12.87C10.4422 12.71 10.0422 12.52 9.65219 12.3L9.60719 12.285C8.87719 11.865 8.21219 11.355 7.61219 10.755C7.01219 10.155 6.50219 9.49 6.08219 8.76L6.06719 8.715C5.84719 8.325 5.65719 7.925 5.49719 7.515Z"/>
              </svg>
              <span className="text-white text-lg">+447429919748</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1f2937]">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-[#4b5563] leading-7">
                  Founded with a vision to simplify document management, PDF Convert Master has become the trusted solution for millions of users worldwide. Our journey began when we recognized the growing need for reliable, secure, and user-friendly PDF tools.
                </p>
                <p className="text-lg text-[#4b5563] leading-7">
                  Under the umbrella of Mizan Store Ltd, we've built a platform that combines cutting-edge technology with intuitive design, making professional PDF conversion accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#dc2626] mb-2">10M+</div>
                  <div className="text-[#4b5563]">Files Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ea580c] mb-2">150+</div>
                  <div className="text-[#4b5563]">Countries Served</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d8a687c2ae4c42db87394ec89dbfcc7c3fb088a?width=1056"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="w-full py-20 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Our Core Values</h2>
            <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
              These principles guide everything we do at PDF Convert Master
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security First */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M13 1L21.22 2.82C21.4467 2.87333 21.6333 2.99333 21.78 3.18C21.9267 3.36667 22 3.57333 22 3.8V13.78C22 14.7933 21.7633 15.74 21.29 16.62C20.8167 17.5 20.16 18.22 19.32 18.78L13 23L6.68 18.78C5.84 18.22 5.18333 17.5 4.71 16.62C4.23667 15.74 4 14.7933 4 13.78V3.8C4 3.57333 4.07333 3.36667 4.22 3.18C4.36667 2.99333 4.55333 2.87333 4.78 2.82L13 1ZM13 3.04L6 4.6V13.78C6 14.46 6.15667 15.0933 6.47 15.68C6.78333 16.2667 7.22 16.7467 7.78 17.12L13 20.6L18.22 17.12C18.78 16.7467 19.2167 16.2667 19.53 15.68C19.8433 15.0933 20 14.46 20 13.78V4.6L13 3.04ZM17.46 8.22L18.86 9.64L12.5 16L8.26 11.76L9.68 10.34L12.5 13.18L17.46 8.22Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Security First</h3>
              <p className="text-[#4b5563] leading-6">
                Your documents are processed with bank-level security. We never store your files and all transfers are encrypted.
              </p>
            </div>

            {/* Lightning Fast */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M11.8562 13.3399L2.6362 19.4799C2.5162 19.5599 2.38953 19.5866 2.2562 19.5599C2.12287 19.5333 2.0162 19.4599 1.9362 19.3399C1.88287 19.2599 1.8562 19.1666 1.8562 19.0599V4.93995C1.8562 4.79328 1.9062 4.67328 2.0062 4.57995C2.1062 4.48661 2.22287 4.43995 2.3562 4.43995C2.46287 4.43995 2.5562 4.46661 2.6362 4.51995L11.8562 10.6599V4.93995C11.8562 4.79328 11.9062 4.67328 12.0062 4.57995C12.1062 4.48661 12.2229 4.43995 12.3562 4.43995C12.4629 4.43995 12.5562 4.46661 12.6362 4.51995L23.2362 11.5799C23.3429 11.6599 23.4129 11.7666 23.4462 11.8999C23.4795 12.0333 23.4562 12.1599 23.3762 12.2799C23.3362 12.3333 23.2895 12.3799 23.2362 12.4199L12.6362 19.4799C12.5162 19.5599 12.3895 19.5866 12.2562 19.5599C12.1229 19.5333 12.0162 19.4599 11.9362 19.3399C11.8829 19.2599 11.8562 19.1666 11.8562 19.0599V13.3399ZM10.2562 11.9999L3.8562 7.73995V16.2599L10.2562 11.9999ZM13.8562 7.73995V16.2599L20.2562 11.9999L13.8562 7.73995Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Lightning Fast</h3>
              <p className="text-[#4b5563] leading-6">
                Our optimized conversion engine processes files in seconds, not minutes. Get your results instantly.
              </p>
            </div>

            {/* User-Centric */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M13.328 4.27999C14.1014 3.58666 14.988 3.12999 15.988 2.90999C16.988 2.68999 17.9747 2.71332 18.948 2.97999C19.9614 3.25999 20.838 3.76999 21.578 4.50999C22.318 5.24999 22.828 6.12666 23.108 7.13999C23.3747 8.11332 23.398 9.09666 23.178 10.09C22.958 11.0833 22.5014 11.9733 21.808 12.76L13.328 21.24L4.84804 12.76C4.1547 11.9733 3.69804 11.0833 3.47804 10.09C3.25804 9.09666 3.28137 8.11332 3.54804 7.13999C3.82804 6.12666 4.34137 5.24999 5.08804 4.50999C5.8347 3.76999 6.70804 3.25999 7.70804 2.97999C8.68137 2.71332 9.66804 2.68999 10.668 2.90999C11.668 3.12999 12.5547 3.58666 13.328 4.27999ZM20.148 5.91999C19.6547 5.42666 19.0814 5.08999 18.428 4.90999C17.7747 4.72999 17.1147 4.71332 16.448 4.85999C15.7814 5.00666 15.188 5.31332 14.668 5.77999L13.328 6.97999L11.988 5.77999C11.4814 5.31332 10.8914 5.00666 10.218 4.85999C9.5447 4.71332 8.88137 4.72999 8.22804 4.90999C7.5747 5.08999 7.00137 5.42666 6.50804 5.91999C6.0147 6.41332 5.6747 6.98666 5.48804 7.63999C5.30137 8.29332 5.27804 8.94999 5.41804 9.60999C5.55804 10.27 5.8547 10.86 6.30804 11.38L13.328 18.42L20.348 11.38C20.8014 10.86 21.098 10.27 21.238 9.60999C21.378 8.94999 21.3547 8.29332 21.168 7.63999C20.9814 6.98666 20.6414 6.41332 20.148 5.91999Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">User-Centric</h3>
              <p className="text-[#4b5563] leading-6">
                Every feature is designed with you in mind. Simple, intuitive, and powerful tools that just work.
              </p>
            </div>

            {/* Accessible */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M23.3281 16.5799C23.3281 17.5133 23.1215 18.3999 22.7081 19.2399C22.3081 20.0399 21.7481 20.7233 21.0281 21.2899C20.3081 21.8566 19.5015 22.2399 18.6081 22.4399L17.9681 20.5199C18.5681 20.4266 19.1148 20.2066 19.6081 19.8599C20.1015 19.5133 20.4948 19.0799 20.7881 18.5599H18.3281C17.9681 18.5599 17.6348 18.4733 17.3281 18.2999C17.0215 18.1266 16.7781 17.8866 16.5981 17.5799C16.4181 17.2733 16.3281 16.9333 16.3281 16.5599V12.5599C16.3281 12.1999 16.4181 11.8666 16.5981 11.5599C16.7781 11.2533 17.0215 11.0099 17.3281 10.8299C17.6348 10.6499 17.9681 10.5599 18.3281 10.5599H21.2681C21.1081 9.26661 20.6548 8.08661 19.9081 7.01994C19.1615 5.95328 18.2215 5.11328 17.0881 4.49994C15.9148 3.87328 14.6615 3.55994 13.3281 3.55994C11.9948 3.55994 10.7415 3.87328 9.56812 4.49994C8.43479 5.11328 7.49479 5.95328 6.74812 7.01994C6.00146 8.08661 5.54813 9.26661 5.38812 10.5599H8.32812C8.68812 10.5599 9.02146 10.6499 9.32812 10.8299C9.63479 11.0099 9.87812 11.2533 10.0581 11.5599C10.2381 11.8666 10.3281 12.1999 10.3281 12.5599V16.5599C10.3281 16.9333 10.2381 17.2733 10.0581 17.5799C9.87812 17.8866 9.63479 18.1266 9.32812 18.2999C9.02146 18.4733 8.68812 18.5599 8.32812 18.5599H5.32812C4.96812 18.5599 4.63479 18.4733 4.32812 18.2999C4.02146 18.1266 3.77812 17.8866 3.59812 17.5799C3.41812 17.2733 3.32812 16.9333 3.32812 16.5599V11.5599C3.32812 10.2133 3.58812 8.91994 4.10812 7.67994C4.61479 6.47994 5.33146 5.41994 6.25812 4.49994C7.18479 3.57994 8.24146 2.86661 9.42812 2.35994C10.6681 1.82661 11.9681 1.55994 13.3281 1.55994C14.6881 1.55994 15.9881 1.82661 17.2281 2.35994C18.4148 2.86661 19.4715 3.57994 20.3981 4.49994C21.3248 5.41994 22.0415 6.47994 22.5481 7.67994C23.0681 8.91994 23.3281 10.2133 23.3281 11.5599V16.5799ZM21.3281 16.5599V12.5599H18.3281V16.5599H21.3281ZM5.32812 12.5599V16.5599H8.32812V12.5599H5.32812Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Accessible</h3>
              <p className="text-[#4b5563] leading-6">
                Available 24/7 from anywhere in the world. No downloads, no installations, just pure convenience.
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M21.6562 2.5V4.5C21.6562 7.59333 21.1096 10.2267 20.0162 12.4C19.0029 14.4267 17.5696 15.96 15.7162 17C13.9563 18 11.9362 18.5 9.65625 18.5H5.89625C5.73625 19.4067 5.65625 20.4067 5.65625 21.5H3.65625C3.65625 20.14 3.76958 18.8933 3.99625 17.76C3.76958 16.4667 3.65625 14.7133 3.65625 12.5C3.65625 11.14 3.91625 9.84 4.43625 8.6C4.94292 7.41333 5.65958 6.35667 6.58625 5.43C7.51292 4.50333 8.56958 3.78667 9.75625 3.28C10.9962 2.76 12.2962 2.5 13.6562 2.5C14.0562 2.5 14.6829 2.56667 15.5363 2.7C16.2296 2.80667 16.7762 2.87333 17.1762 2.9C17.8562 2.95333 18.5229 2.96 19.1762 2.92C19.9629 2.85333 20.7896 2.71333 21.6562 2.5ZM13.6562 4.5C12.2029 4.5 10.8562 4.86667 9.61625 5.6C8.41625 6.30667 7.46292 7.26 6.75625 8.46C6.02292 9.7 5.65625 11.0467 5.65625 12.5V13.54C6.26958 12.58 7.04292 11.6867 7.97625 10.86C8.86958 10.0733 9.92958 9.33333 11.1562 8.64L12.1562 10.36C10.6762 11.2133 9.48292 12.1133 8.57625 13.06C7.61625 14.06 6.90292 15.2067 6.43625 16.5H9.65625C11.6696 16.5 13.4196 16.06 14.9062 15.18C16.3929 14.3 17.5363 13.0067 18.3362 11.3C19.1762 9.52667 19.6163 7.38667 19.6562 4.88C18.9896 4.94667 18.3096 4.96667 17.6163 4.94C16.9896 4.9 16.2629 4.82 15.4362 4.7C14.8496 4.60667 14.4563 4.55 14.2562 4.53C14.0562 4.51 13.8562 4.5 13.6562 4.5Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Eco-Friendly</h3>
              <p className="text-[#4b5563] leading-6">
                Digital-first approach reduces paper waste. Our servers run on renewable energy sources.
              </p>
            </div>

            {/* Expert Support */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#dc2626]" viewBox="0 0 26 24" fill="currentColor">
                  <path d="M23.3281 16.5799C23.3281 17.5133 23.1215 18.3999 22.7081 19.2399C22.3081 20.0399 21.7481 20.7233 21.0281 21.2899C20.3081 21.8566 19.5015 22.2399 18.6081 22.4399L17.9681 20.5199C18.5681 20.4266 19.1148 20.2066 19.6081 19.8599C20.1015 19.5133 20.4948 19.0799 20.7881 18.5599H18.3281C17.9681 18.5599 17.6348 18.4733 17.3281 18.2999C17.0215 18.1266 16.7781 17.8866 16.5981 17.5799C16.4181 17.2733 16.3281 16.9333 16.3281 16.5599V12.5599C16.3281 12.1999 16.4181 11.8666 16.5981 11.5599C16.7781 11.2533 17.0215 11.0099 17.3281 10.8299C17.6348 10.6499 17.9681 10.5599 18.3281 10.5599H21.2681C21.1081 9.26661 20.6548 8.08661 19.9081 7.01994C19.1615 5.95328 18.2215 5.11328 17.0881 4.49994C15.9148 3.87328 14.6615 3.55994 13.3281 3.55994C11.9948 3.55994 10.7415 3.87328 9.56812 4.49994C8.43479 5.11328 7.49479 5.95328 6.74812 7.01994C6.00146 8.08661 5.54813 9.26661 5.38812 10.5599H8.32812C8.68812 10.5599 9.02146 10.6499 9.32812 10.8299C9.63479 11.0099 9.87812 11.2533 10.0581 11.5599C10.2381 11.8666 10.3281 12.1999 10.3281 12.5599V16.5599C10.3281 16.9333 10.2381 17.2733 10.0581 17.5799C9.87812 17.8866 9.63479 18.1266 9.32812 18.2999C9.02146 18.4733 8.68812 18.5599 8.32812 18.5599H5.32812C4.96812 18.5599 4.63479 18.4733 4.32812 18.2999C4.02146 18.1266 3.77812 17.8866 3.59812 17.5799C3.41812 17.2733 3.32812 16.9333 3.32812 16.5599V11.5599C3.32812 10.2133 3.58812 8.91994 4.10812 7.67994C4.61479 6.47994 5.33146 5.41994 6.25812 4.49994C7.18479 3.57994 8.24146 2.86661 9.42812 2.35994C10.6681 1.82661 11.9681 1.55994 13.3281 1.55994C14.6881 1.55994 15.9881 1.82661 17.2281 2.35994C18.4148 2.86661 19.4715 3.57994 20.3981 4.49994C21.3248 5.41994 22.0415 6.47994 22.5481 7.67994C23.0681 8.91994 23.3281 10.2133 23.3281 11.5599V16.5799ZM21.3281 16.5599V12.5599H18.3281V16.5599H21.3281ZM5.32812 12.5599V16.5599H8.32812V12.5599H5.32812Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">Expert Support</h3>
              <p className="text-[#4b5563] leading-6">
                Our dedicated support team is always ready to help. Professional assistance when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f2937] mb-4">Meet Our Team</h2>
            <p className="text-xl text-[#4b5563] max-w-3xl mx-auto">
              The passionate professionals behind PDF Convert Master
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sarah Johnson */}
            <div className="text-center">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e57646e20adf34f0f3b39ea49f9a6ca981e0f8df?width=504"
                  alt="Sarah Johnson"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Sarah Johnson</h3>
              <p className="text-[#dc2626] font-semibold mb-3">Chief Executive Officer</p>
              <p className="text-sm text-[#4b5563] leading-5">
                Leading PDF Convert Master with 15+ years of experience in tech innovation and digital transformation.
              </p>
            </div>

            {/* Michael Chen */}
            <div className="text-center">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01b806e57e80d577978bee50b6dc9d71af006df2?width=504"
                  alt="Michael Chen"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Michael Chen</h3>
              <p className="text-[#dc2626] font-semibold mb-3">Chief Technology Officer</p>
              <p className="text-sm text-[#4b5563] leading-5">
                Architecting our cutting-edge conversion technology with expertise in cloud computing and AI systems.
              </p>
            </div>

            {/* Emily Rodriguez */}
            <div className="text-center">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4d4fc0c5bed2bd9a4b7514963fcef4e8beda5656?width=504"
                  alt="Emily Rodriguez"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Emily Rodriguez</h3>
              <p className="text-[#dc2626] font-semibold mb-3">Head of Product</p>
              <p className="text-sm text-[#4b5563] leading-5">
                Ensuring our tools meet user needs through innovative design and user experience optimization.
              </p>
            </div>

            {/* David Kim */}
            <div className="text-center">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/df8fa776e0c3b39f121324b712ecf19d28f076bd?width=504"
                  alt="David Kim"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">David Kim</h3>
              <p className="text-[#dc2626] font-semibold mb-3">Head of Security</p>
              <p className="text-sm text-[#4b5563] leading-5">
                Protecting user data with advanced security protocols and industry-leading encryption standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#dc2626] to-[#ea580c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-[#e5e7eb] max-w-3xl mx-auto">
              Have questions about our services? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 32 30" fill="currentColor">
                  <path d="M5.07812 24.875V8.25C5.07812 7.98333 5.15313 7.74167 5.30313 7.525C5.45312 7.30833 5.65313 7.15833 5.90313 7.075L17.9781 2.675C18.1448 2.60833 18.3073 2.6125 18.4656 2.6875C18.624 2.7625 18.7281 2.88333 18.7781 3.05C18.8115 3.11667 18.8281 3.18333 18.8281 3.25V9.45L26.7281 12.075C26.9781 12.1583 27.1823 12.3125 27.3406 12.5375C27.499 12.7625 27.5781 13.0083 27.5781 13.275V24.875H30.0781V27.375H2.57812V24.875H5.07812ZM7.57812 24.875H16.3281V5.925L7.57812 9.125V24.875ZM25.0781 24.875V14.175L18.8281 12.075V24.875H25.0781Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Company</h3>
              <p className="text-[#e5e7eb] mb-2">Mizan Store Ltd</p>
              <p className="text-[#e5e7eb]">Professional PDF Solutions</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 32 30" fill="currentColor">
                  <path d="M12.6844 13.35C13.2677 14.3833 13.9802 15.3208 14.8219 16.1625C15.6635 17.0042 16.601 17.7167 17.6344 18.3L18.7344 16.75C18.9177 16.4833 19.1635 16.3167 19.4719 16.25C19.7802 16.1833 20.076 16.225 20.3594 16.375C22.1427 17.3583 24.051 17.925 26.0844 18.075C26.401 18.1083 26.6719 18.2417 26.8969 18.475C27.1219 18.7083 27.2344 18.9917 27.2344 19.325V24.9C27.2344 25.2167 27.126 25.4958 26.9094 25.7375C26.6927 25.9792 26.426 26.1167 26.1094 26.15C25.4427 26.2167 24.776 26.25 24.1094 26.25C21.476 26.25 18.9594 25.7417 16.5594 24.725C14.2427 23.7417 12.1927 22.3583 10.4094 20.575C8.62604 18.7917 7.24271 16.7417 6.25937 14.425C5.24271 12.025 4.73438 9.50833 4.73438 6.875C4.73438 6.20833 4.76771 5.54167 4.83438 4.875C4.86771 4.55833 5.00521 4.29167 5.24687 4.075C5.48854 3.85833 5.76771 3.75 6.08438 3.75H11.6594C11.9927 3.75 12.276 3.8625 12.5094 4.0875C12.7427 4.3125 12.876 4.58333 12.9094 4.9C13.0594 6.93333 13.626 8.84167 14.6094 10.625C14.7594 10.9083 14.801 11.2042 14.7344 11.5125C14.6677 11.8208 14.501 12.0667 14.2344 12.25L12.6844 13.35ZM9.53438 12.525L11.9094 10.825C11.2427 9.375 10.7844 7.85 10.5344 6.25H7.23438V6.875C7.23438 9.15833 7.67604 11.35 8.55938 13.45C9.40938 15.4667 10.6135 17.2542 12.1719 18.8125C13.7302 20.3708 15.5177 21.575 17.5344 22.425C19.6344 23.3083 21.826 23.75 24.1094 23.75H24.7344V20.45C23.1344 20.2 21.6094 19.7417 20.1594 19.075L18.4594 21.45C17.776 21.1833 17.1094 20.8667 16.4594 20.5L16.3844 20.475C15.1677 19.775 14.0594 18.925 13.0594 17.925C12.0594 16.925 11.2094 15.8167 10.5094 14.6L10.4844 14.525C10.1177 13.875 9.80104 13.2083 9.53438 12.525Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
              <p className="text-[#e5e7eb] mb-2">+447429919748</p>
              <p className="text-[#e5e7eb] text-sm">Available 24/7</p>
            </div>

            {/* Website */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 32 30" fill="currentColor">
                  <path d="M15.6562 27.5C13.9563 27.5 12.3313 27.175 10.7812 26.525C9.29792 25.8917 7.97708 24.9958 6.81875 23.8375C5.66042 22.6792 4.76458 21.3583 4.13125 19.875C3.48125 18.325 3.15625 16.7 3.15625 15C3.15625 13.3 3.48125 11.675 4.13125 10.125C4.76458 8.64167 5.66042 7.32083 6.81875 6.1625C7.97708 5.00417 9.29792 4.10833 10.7812 3.475C12.3313 2.825 13.9563 2.5 15.6562 2.5C17.3562 2.5 18.9812 2.825 20.5312 3.475C22.0146 4.10833 23.3354 5.00417 24.4937 6.1625C25.6521 7.32083 26.5479 8.64167 27.1812 10.125C27.8313 11.675 28.1562 13.3 28.1562 15C28.1562 16.7 27.8313 18.325 27.1812 19.875C26.5479 21.3583 25.6521 22.6792 24.4937 23.8375C23.3354 24.9958 22.0146 25.8917 20.5312 26.525C18.9812 27.175 17.3562 27.5 15.6562 27.5ZM12.8063 24.575C11.5563 21.9417 10.8479 19.1667 10.6813 16.25H5.73125C5.89792 17.55 6.30208 18.7667 6.94375 19.9C7.58542 21.0333 8.41042 22.0042 9.41875 22.8125C10.4271 23.6208 11.5563 24.2083 12.8063 24.575ZM13.2063 16.25C13.3896 19.25 14.2063 22.0667 15.6562 24.7C17.1062 22.0667 17.9229 19.25 18.1062 16.25H13.2063ZM25.5813 16.25H20.6313C20.4646 19.1667 19.7646 21.9417 18.5312 24.575C19.7646 24.2083 20.8854 23.6208 21.8938 22.8125C22.9021 22.0042 23.7271 21.0333 24.3687 19.9C25.0104 18.7667 25.4146 17.55 25.5813 16.25ZM5.73125 13.75H10.6813C10.8479 10.8333 11.5563 8.05833 12.8063 5.425C11.5563 5.79167 10.4271 6.37917 9.41875 7.1875C8.41042 7.99583 7.58542 8.96667 6.94375 10.1C6.30208 11.2333 5.89792 12.45 5.73125 13.75ZM13.2063 13.75H18.1062C17.9229 10.75 17.1062 7.93333 15.6562 5.3C14.2063 7.93333 13.3896 10.75 13.2063 13.75ZM18.5312 5.425C19.7646 8.05833 20.4646 10.8333 20.6313 13.75H25.5813C25.4146 12.45 25.0104 11.2333 24.3687 10.1C23.7271 8.96667 22.9021 7.99583 21.8938 7.1875C20.8854 6.37917 19.7646 5.79167 18.5312 5.425Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Website</h3>
              <p className="text-[#e5e7eb] mb-2">pdfconvertmaster.com</p>
              <p className="text-[#e5e7eb] text-sm">Your trusted PDF partner</p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-white text-[#dc2626] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
