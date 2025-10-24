import "../styles/lp-1.scss";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/Form";
import ExpertSection from "../components/ExpertSection";
import SideEffect from "../components/SideEffects";
import CommonSection from "../components/CommonSection";
import PersonalizedTreatments from "../components/PersonalizedTreatments";
import StepInside from "../components/StepInside";
import BetterExperience from "../components/BetterExperience";
import Footer from "../components/FooterSection";
import CentreOfExcellence from "@/app/components/CentreOfExcellence";
import Testimonials from "@/app/components/Testimonials";
import ABetterExperience from "@/app/components/ABetterExperiance";

const doctorsData = [
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Manjari Chandra",
    doctorDesc:
      "Honorary Doctorate (Food & Nutrition), DHA (Hospital Administration), MSc (Nutrition and Dietetics)",
    tagline: "Nutrition Medicine Specialist",
    experience: "27+ Years",
    interests:
      "Onco-nutrition, Gut health, Metabolic therapy, Post-treatment rehabilitation, Immune nutrition",
    focusAreas: [
      "Preventive Oncology",
      "Metabolic disorders",
      "Nutritional Management",
      "Nutritional Intervention for Terminal cancers",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Manjari Chandra",
    doctorDesc:
      "Honorary Doctorate (Food & Nutrition), DHA (Hospital Administration), MSc (Nutrition and Dietetics)",
    tagline: "Nutrition Medicine Specialist",
    experience: "27+ Years",
    interests:
      "Onco-nutrition, Gut health, Metabolic therapy, Post-treatment rehabilitation, Immune nutrition",
    focusAreas: [
      "Preventive Oncology",
      "Metabolic disorders",
      "Nutritional Management",
      "Nutritional Intervention for Terminal cancers",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
  {
    image: "/assets/images/lp-1/manjari.webp",
    name: "Dr. Praveen Yadav",
    doctorDesc:
      "MBBS, MS (General Surgery), FAIS, FAIGES, HBNI Fellowship in Thoracic Surgery (TMH, Mumbai)",
    tagline: "THORACIC SURGICAL ONCOLOGIST",
    experience: "20+ Years",
    interests:
      "Minimally invasive thoracic surgery, lung & esophageal cancer, VATS",
    focusAreas: [
      "Lung",
      "Mediastinal tumors",
      "Tracheal tumors",
      "NChest wall",
      "Esophagus",
    ],
    profileLink: "#",
  },
];
const cards = [
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon1.webp",
    title: "Private chemo suites",
    description: "No shared spaces — calm, quiet, and dignified.",
    image: "/assets/images/breast-cancer/Experience1.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon2.webp",
    title: "Comfort for caregivers too",
    description: "Lounge seating, workspace, and peace of mind.",
    image: "/assets/images/breast-cancer/Experience2.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon3.webp",
    title: "A dedicated care manager",
    description: "One person guiding your journey start to finish.",
    image: "/assets/images/breast-cancer/Experience3.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon5.webp",
    title: "Seamless Support, End to End",
    description:
      "Pick-up, valet, insurance, scheduling — we take care of it all.",
    image: "/assets/images/breast-cancer/Experience5.webp",
  },
  {
    icon: "/assets/images/breast-cancer/ExperienceIcon6.webp",
    title: "Support Beyond Medicine",
    description:
      "Emotional, nutritional, and psychological care — built into every plan.",
    image: "/assets/images/breast-cancer/Experience6.webp",
  },
];
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <HeroSection />
      <div className="mx-4 my-5 md:hidden">
        <ContactForm />
      </div>
      <ExpertSection doctors={doctorsData} />
      <CentreOfExcellence />
      <Testimonials />
      <SideEffect />
      <CommonSection />
      <PersonalizedTreatments />
      <StepInside />
      {/*<BetterExperience cards={cards} />*/}
      <ABetterExperience />
      <Footer />
    </div>
  );
}
