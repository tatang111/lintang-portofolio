"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileDiff, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { useEffect } from "react";

const schema = z.object({
  firstname: z.string().min(1, "Firstname harus diisi"),
  lastname: z.string().optional(),
  email: z.string().email("Harap masukkan email yang valid"),
  phone: z.string().optional(),
  service: z.enum(["frontend", "backend", "fullstack"], {
    required_error: "Pilih salah satu",
  }),
  message: z.string().nonempty(),
});

const page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formattedDate = new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const result = await emailjs.send(
        "service_xe84f32",
        "template_cc4guxs",
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          time: formattedDate,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        "DJgmoRqROrN7B07P7"
      );
      toast.success("message sent successfully");
      reset();
    } catch (error) {
      toast.success("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <main className="flex container mx-auto gap-8 px-6 pb-10 md:pb-0 md:px-0 md:gap-0 md:flex-row flex-col-reverse">
        <section className="md:w-1/2 w-full px-6 py-5 pb-5 bg-zinc-800 rounded-lg flex flex-col gap-3">
          <h1 className="text-accent text-3xl md:text-2xl mt-1">
            {"Let's"} Work Together
          </h1>
          <p className="text-gray-300 text-xl md:text-base md:-mt-2 mb-4 md:mb-1">
            Feel free to reach out and tell me about your project — I'll be
            delighted to collaborate and bring your ideas to life.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:gap-3 pr-3"
          >
            <div className="flex md:gap-8 gap-4 flex-col md:flex-row">
              <Input
                {...register("firstname")}
                className="border-none bg-[#1c1c22] rounded-md h-10 placeholder:text-gray-500"
                placeholder="Fisrtname"
              />
              <Input
                {...register("lastname")}
                className="border-none bg-[#1c1c22] rounded-md h-10 placeholder:text-gray-500"
                placeholder="Lastname"
              />
            </div>
            <div className="flex md:gap-8 gap-4 flex-col md:flex-row">
              <Input
                {...register("email")}
                className="border-none bg-[#1c1c22] rounded-md h-10 placeholder:text-gray-500"
                placeholder="Email Address"
              />
              <Input
                {...register("phone")}
                className="border-none bg-[#1c1c22] rounded-md h-10 placeholder:text-gray-500"
                placeholder="Phone Number"
              />
            </div>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  value={field.value}
                >
                  <SelectTrigger className="w-full bg-[#1c1c22] border-none">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service</SelectLabel>
                      <SelectItem value="frontend">Front-End</SelectItem>
                      <SelectItem value="backend">Back-End</SelectItem>
                      <SelectItem value="fullstack">Full-Stack</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <Textarea
              {...register("message")}
              placeholder="Type your message here.."
              className="bg-[#1c1c22] placeholder:text-gray-500 border-none h-40 md:h-30 resize-none"
            />
            <div className="flex">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-35 text-black bg-green-400 px-3 py-3 hover:bg-green-500 cursor-pointer rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {errors.email && (
                <p className="text-red-500 ml-4 inline">Email is incorrect</p>
              )}
            </div>
            {(errors.firstname || errors.service || errors.message) && (
              <p className="text-red-500 ml-4">
                Firstname, Email, Service and Message must be filled
              </p>
            )}
          </form>
        </section>
        <section className="flex flex-col  justify-start sm:mx-8 md:mx-0 md:justify-center gap-8 md:gap-4 md:items-center w-full md:w-1/2">
          <div className="flex md:gap-4 gap-7 ">
            <Phone className="text-green-400 bg-zinc-700 w-15 h-15 px-3 py-3 rounded-md" />
            <div className="flex flex-col md:gap-0 gap-2 justify-center">
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="-mt-1">(+62) 0882-3064-6040</p>
            </div>
          </div>
          <div className="flex md:gap-4 gap-7">
            <Mail className="text-green-400 bg-zinc-700 w-15 h-15 px-3 py-3 rounded-md" />
            <div className="flex flex-col md:gap-0 gap-2 justify-center">
              <p className="text-gray-400 text-sm">Email</p>
              <p className="-mt-1">lintangpsa@gmail.com</p>
            </div>
          </div>
          <div className="flex md:gap-4 gap-7 md:ml-12">
            <MapPin className="text-green-400 bg-zinc-700 w-15 h-15 px-3 py-3 rounded-md" />
            <div className="flex flex-col md:gap-0 gap-2 justify-center">
              <p className="text-gray-400 text-sm">Address</p>
              <p className="-mt-1">Mojokerto City, East Java</p>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default page;
