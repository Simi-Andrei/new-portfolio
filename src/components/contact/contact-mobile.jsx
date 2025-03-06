import { MailIcon, PhoneIcon } from "lucide-react";
import { Logo } from "../logo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useState } from "react";
import Swal from "sweetalert2";

export const ContactMobile = () => {
  const [result, setResult] = useState("");
  const [pending, setPending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setPending(true);

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "975fa529-e17f-4419-aa47-01cf0fdd22da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setPending(false);

      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successsfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#0b4f4a",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      data-glow
      className="md:hidden max-w-6xl mx-auto relative py-10 pt-14 px-4 lg:px-10 flex flex-col gap-y-10 md:flex-row items-center justify-between gap-x-10 inner-shadow shadow-md shadow-neutral-400 dark:shadow-neutral-950"
    >
      <Badge className="absolute top-4 left-4 cursor-default bg-teal-600 dark:bg-teal-800 text-[#ededed] font-normal">
        Contact
      </Badge>
      <div className="flex-1 flex flex-col items-center">
        <div className="mb-6">
          <Logo />
        </div>
        <h3 className="text-3xl font-bold">Let&apos;s Talk!</h3>
        <p className="text-center my-6">
          Message me using the contact form or directly on email or phone!
        </p>
        <p className="text-sm flex items-center justify-center gap-x-2">
          <MailIcon className="size-4" />
          Email address:{" "}
          <a href="mailto:simigiuandrei95@gmail.com">
            simigiuandrei95@gmail.com
          </a>
        </p>
        <p className="text-sm flex items-center justify-center gap-x-2">
          <PhoneIcon className="size-4" />
          Phone number: <a href="tel:+40757849820">+40 757 849 820</a>
        </p>
      </div>
      <div className="flex-1 w-full">
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-[#ededed] dark:bg-neutral-900 border border-neutral-400 dark:border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-neutral-500 placeholder:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#ededed] dark:bg-neutral-900 border border-neutral-400 dark:border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-neutral-500 placeholder:text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              className="bg-[#ededed] dark:bg-neutral-900 border border-neutral-400 dark:border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-neutral-500 placeholder:text-sm resize-none"
              placeholder="Enter your message"
              required
              minLength={3}
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-gradient-to-b from-rose-900 to-rose-950 cursor-pointer hover:brightness-95 transition-colors duration-150 mt-6 h-10 text-[#ededed]"
            disabled={pending}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
