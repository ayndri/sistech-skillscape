import { Categories } from "../components/Categories";
import { Company } from "../components/Company";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Intermezzo } from "../components/Intermezzo";
import { Testimonial } from "../components/Testimonial";
import { VideoLearning } from "../components/VideoLearning";

export default function Page() {
  return (
    <>
      <Header />
      <Hero title='The world’s destination for design' desciprion="Get inspired by the work of millions of top-rated designers & agencies around the world." topText="Over 3 million ready to learn from the best!" />
      <Company title="Trusted by over 15,000 companies and millions of learners around the world" />
      <VideoLearning title="A broad selection of courses" description="Choose from over 220,000 online video courses with new additions published every month" />
      <Testimonial title="How learners like you are achieving their goals" />
      <Categories title="Top Categories" />
      <Intermezzo title="What do vacations and aliens have in common? 👽🏖️ They're both in our weekly warm-up!" />
      <Footer />
    </>
  );
}
