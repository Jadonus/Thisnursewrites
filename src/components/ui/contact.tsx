export default function Contact() {
  return (
    <>
      <p className=" m-12 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
        Contact Me
      </p>
      <form
        className="m-12 flex flex-col h-screen"
        action="https://api.staticforms.xyz/submit"
        method="post"
      >
        Name
        <input
          className="p-6"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        Email
        <input
          className="p-6"
          type="text"
          name="email"
          placeholder="Your Email"
        />
        Message
        <textarea className="p-10" name="message"></textarea>
        <input type="text" name="honeypot" style={{ display: "none" }} />
        <input
          type="hidden"
          name="accessKey"
          value="66bb02ab-2acd-4757-b8d9-7f080d8d5cb2"
        />
        <input
          type="hidden"
          name="subject"
          value="Contact us from - example.com"
        />
        <input type="hidden" name="replyTo" value="@" />
        <input type="hidden" name="redirectTo" value="/success" />
        <input
          className="rounded-lg m-4 p-4 bg-black text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}
