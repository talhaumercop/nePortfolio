import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import GrainImage from '@/assets/images/grain.jpg'
import Image from "next/image";
import Card from "@/components/Card";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return(
    <div className="py-16">
    <div className="container">
      <SectionHeader title="What Our Clients Say" description="Don't just take our word for it, check out what our clients have to say about our work." />
         <div>
        {testimonials.map((testimonial) => (

          <Card key={testimonial.name}>
              <div className="flex">
             <div className="bg-gray-100 size-14 inline-flex rounded-full items-center justify-center overflow-hidden">
             <Image className="object-cover size-14" src={testimonial.avatar} alt={testimonial.name} />
             </div>
              <div className="">
              <div className="">{testimonial.name}</div>
              <div className="">{testimonial.position}</div>
              <p className="">{testimonial.text}</p>
              </div>
              </div>
          </Card>
        ))}
      </div>
     </div>
     </div>
     )
};
