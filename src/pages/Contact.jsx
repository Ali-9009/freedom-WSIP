import {
    Phone,
    Mail,
    MapPin
} from "lucide-react";

export default function Contact() {
    return (

        <>
            <div className="max-w-6xl mx-auto px-3 sm:px-10 mt-8">
                <div className="bg-(--primary-color) rounded-2xl py-6 flex justify-center">
                    <h1 className="font-heading text-white text-center lg:text-6xl text-4xl">
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto my-14 px-4">

                <div className="shadow-xl rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row gap-6 lg:gap-10 p-6">

                        {/* LEFT SIDE */}
                        <div className="md:w-[45%] w-full rounded-lg text-white p-8 md:p-10 flex flex-col justify-between"
                            style={{ background: "linear-gradient(135deg, #042C67 0%, #6a1b4d 50%, #FD0200 100%)" }}>
                                
                            {/* Heading */}
                            <div>
                                <h3 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
                                    Contact Information
                                </h3>

                                <p className="text-sm md:text-base mt-2 text-center md:text-left opacity-80">
                                    Say something to start a live chat!
                                </p>
                            </div>

                            {/* Contact Info */}
                            <ul className="flex flex-col gap-5 mt-10">

                                <li className="flex items-center gap-4 justify-center md:justify-start font-semibold">
                                    <Phone className="" size={20} />
                                    <a href="tel:+10123456789">+1012 3456 789</a>
                                </li>

                                <li className="flex items-center gap-4 justify-center md:justify-start font-semibold">
                                    <Mail className="" size={20} />
                                    <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                </li>

                                <li className="flex items-center gap-4 justify-center md:justify-start font-semibold text-center md:text-left">
                                    <MapPin className="" size={20} />
                                    <span>
                                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                                    </span>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-10 justify-center md:justify-start">

                                {/* Twitter / X */}
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                                >
                                    <i className="ri-twitter-x-line text-lg"></i>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                                >
                                    <i className="ri-instagram-line text-lg"></i>
                                </a>

                                {/* Discord */}
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                                >
                                    <i className="ri-discord-line text-lg"></i>
                                </a>

                                {/* Facebook (optional extra) */}
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black transition"
                                >
                                    <i className="ri-facebook-fill text-lg"></i>
                                </a>

                            </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="md:w-[55%] w-full p-6 md:p-10">

                            <form className="space-y-5">

                                {/* Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-sm font-medium">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full mt-2 bg-gray-100 p-3 rounded-lg outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full mt-2 bg-gray-100 p-3 rounded-lg outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-sm font-medium">Phone Number</label>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full mt-2 bg-gray-100 p-3 rounded-lg outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Address</label>
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="w-full mt-2 bg-gray-100 p-3 rounded-lg outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="text-sm font-medium">Message</label>
                                    <textarea
                                        placeholder="Write your message..."
                                        className="w-full mt-2 bg-gray-100 p-3 rounded-lg h-28 outline-none"
                                    />
                                </div>

                                {/* Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-3 rounded-full bg-(--primary-color) text-white hover:bg-black transition"
                                    >
                                        Send Message
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}