
const Contact = () => {
    return <div className="relative w-full h-[100vh]">
        <img
            className="w-full h-auto absolute bottom-0 pointer-events-none"
            src="/contact.bg.png"
            alt="contact background"
        />
        <div className="absolute left-1/2 top-[55%] -translate-y-1/2 -translate-x-1/2">
            <div className="flex gap-[2vh]">
                <img
                    className="relative pointer-events-none"
                    src="/contact.profile.png"
                    alt="contact"
                />
                <div className="text-white">
                    <div className="flex gap-8">
                        <h1 className="font-pain text-4xl tracking-[5px]">Let's Chat</h1>
                        <button className="font-inter font-bold tracking-[8px] border-2 border-[#fff] px-4 py-2 rounded-lg hover:bg-[#ffffff30] transition-colors duration-300">
                            Contact
                        </button>
                    </div>
                    <p className="w-96 text-justify mt-5 text-[#ffffff70] leading-8 text-1xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center mt-32">
                <button className="text-[#ffffff50] font-pain text-2xl px-10 py-2 rounded-2xl bg-[#ffffff20] backdrop-blur-[6px] border-2 border-[#ffffff40] m-auto hover:bg-[#ffffff40] hover:text-[#ffffff80] transition-colors duration-300">
                    Let's work together
                </button>
            </div>
        </div>
    </div>
}

export default Contact