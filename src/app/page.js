import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="nav">
        <div id="logo">
          <a href="#">CS</a>
        </div>
        <div id="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div id="button-nav">
          <button>Get in Touch</button>
        </div>
      </nav>
      <main>
        <section id="home">
          <div className="flex flex-row justify-between items-center mt-30 p-20 gap-20">
            <div className="flex flex-col ml-20">
              <h1 id="name">
                Cheang <br />
                Seyha
              </h1>
              <p id="text">
                Hello, my name is Cheang Seyha. Nice to meet you! <br />I would
                like to welcome you to my personal portfolio.
              </p>
            </div>
            <div className="mr-20">
              <img
                src="Image/Me.jpg"
                alt=""
                className="object-cover rounded-lg shadow-lg w-100, h-100"
              />
            </div>
          </div>
        </section>

        <div id="about">
          <div className="flex flex-col mt-60 p-20">
            <div>
              <p className="text-green-500 text-3xl font-bold">About Me</p>
            </div>
            <div id="description">
              <h1>Description about who am I ?</h1>
            </div>
            <div id="button-about" className="p-5 mt-5">
              <button>
                Hire Me now <i className="fa-solid fa-arrow-right ml-5"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-center text-5xl text-green-500">Me</h1>
            </div>
            <div className="text-center mt-5">
              <i className="fa-solid fa-arrow-down text-green-500 text-5xl"></i>
            </div>
          </div>
          <div>
            <p className="text-white text-center mt-5">
              My name is Cheang Seyha. I was born in Phnom Penh and lived in
              Phnom Penh. <br />
              Right now i'm 20 years old. I study Bachelor degree at Institute
              de Technology du Cambodge. <br />
              Also I study at department of Information and Communication. And
              my hobbies are eat, sleep and playing game with my friends. <br />
              I always practice code and research more information that are
              relate to my major. <br />
              And in the future if i had more job like business i will combine
              it with code and create Website or Application that make my
              customer or my buyer are easy to check my stocks and my item.{" "}
              <br />
              Although if i have enough time i will study Master degree and PHD
              degree that are relating with Technology. And that are all about
              Me i hope you understand clearly xd !.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center p-20">
            <div className="flex flex-col ml-20">
              <div className="text-white">
                <h1 className="text-2xl text-center font-bold">Experience</h1>
              </div>
              <div className="text-white text-center mt-5">
                <p id="experience-1">Open House ITC</p>
                <p id="experience-2">STEM Cambodia Robotics Olympiad 2024</p>
                <p id="experience-3">STEM Annual Cambodia Festival 2025</p>
              </div>
            </div>

            <div className="flex flex-col text-center">
              <div className="text-white">
                <h1 className="text-2xl text-center font-bold">Education</h1>
              </div>
              <div className="text-white text-center mt-5">
                <p id="education-1">Bak Touk High School</p>
                <p id="education-2">Australian Centre for Education</p>
                <p id="education-3">Institute de Technology du Cambodge</p>
              </div>
            </div>

            <div className="flex flex-col mr-20">
              <div className="text-white">
                <h1 className="text-2xl text-center font-bold">Soft Skills</h1>
              </div>
              <div className="text-white text-center mt-5">
                <p id="soft-skill-1">Communication</p>
                <p id="soft-skill-2">Time Management</p>
                <p id="soft-skill-3">Team Work</p>
                <p id="soft-skill-4">Problem Solving</p>
                <p id="soft-skill-5">Leadership</p>
              </div>
            </div>
          </div>
        </div>

        <section id="project">
          <div className="text-center text-green-500 text-4xl mt-60 p-10 font-bold">
            <h1>Project</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20 lg:px-60 mt-10">
            {/* Student Management System */}
            <div className="flex flex-col items-center">
              <h2 className="text-white text-center text-2xl mb-4">
                Student Management System
              </h2>
              <div id="StudentMangement">
                <img
                  src="Image/studentManagement.jpg"
                  alt="Student Management System"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <button
                id="btn-sms"
                aria-label="Download Student Management System"
                className="bg-green-500 text-white px-6 py-3 mt-60 rounded-lg hover:bg-green-600 transition"
              >
                Download <i className="fa-solid fa-download ml-2"></i>
              </button>
            </div>

            {/* Student Information System */}
            <div className="flex flex-col items-center">
              <h2 className="text-white text-center text-2xl mb-4">
                Student Information System
              </h2>
              <div id="StudentInformation">
                <img
                  src="Image/studentin`formation.jpg"
                  alt="Student Information System"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <button
                id="btn-sis"
                aria-label="Download Student Information System"
                className="bg-green-500 text-white px-6 py-3 mt-60 rounded-lg hover:bg-green-600 transition"
              >
                Download <i className="fa-solid fa-download ml-2"></i>
              </button>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="flex items-center justify-center min-h-screen mt-60">
            <div className="w-full max-w-lg p-8 rounded-xl shadow-lg">
              <h1 className="text-center text-green-500 text-4xl mb-6 font-bold">
                Contact
              </h1>
              <form action="#" className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-lg font-medium"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-lg font-medium"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-lg font-medium"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full mt-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
              <div className="flex flex-row justify-center items-center mt-5 gap-5">
                <a
                  href="https://www.facebook.com/cheang.seyha.50"
                  className="text-white text-3xl"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/sxyha/"
                  className="text-white text-3xl"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://t.me/AxgusTC" className="text-white text-3xl">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
