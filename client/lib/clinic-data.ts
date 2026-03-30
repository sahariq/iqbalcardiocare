import {
  Activity,
  Ambulance,
  CalendarHeart,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type ClinicNavItem = {
  label: string;
  to: string;
};

export type ClinicStat = {
  value: string;
  label: string;
  detail: string;
};

export type ClinicService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ClinicTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ClinicDoctor = {
  name: string;
  specialty: string;
  summary: string;
};

export const clinicName = "Iqbal Cardiocare Clinic";


export const navItems: ClinicNavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Contact", to: "/#contact" },
  { label: "Booking", to: "/booking" },
];

export const clinicStats: ClinicStat[] = [
  {
    value: "100,000+",
    label: "Patients Served",
    detail: "Over 35-year career spanning multiple institutions."
  },
  {
    value: "50,000+",
    label: "Procedures Performed",
    detail: "Angiographies, angioplasties, pacemaker implants."
  },
  {
    value: "35+",
    label: "Years of Experience",
    detail: "Since 1988 internship to present."
  },
  {
    value: "Head & ED",
    label: "PIMS (Retired)",
    detail: "Former Head of Cardiac Centre & Executive Director, PIMS."
  },
];

export const clinicServices: ClinicService[] = [
  {
    title: "Preventive heart screening",
    description:
      "Personalized risk assessments, lipid profiling, blood pressure review, and early intervention plans.",
    icon: HeartPulse,
  },
  {
    title: "Diagnostic testing",
    description:
      "ECG, stress testing, echocardiography guidance, and rhythm investigations for fast answers.",
    icon: Activity,
  },
  {
    title: "Chest pain evaluation",
    description:
      "Rapid triage and structured investigations for new or recurring cardiac symptoms.",
    icon: Ambulance,
  },
  {
    title: "Chronic disease management",
    description:
      "Ongoing plans for hypertension, heart failure, arrhythmia, and post-procedure care.",
    icon: ShieldCheck,
  },
  {
    title: "Lifestyle & recovery planning",
    description:
      "Nutrition, stress, sleep, and cardiac rehab guidance designed for sustainable recovery.",
    icon: CalendarHeart,
  },
  {
    title: "Second opinion consultations",
    description:
      "Clear reviews of existing reports and treatment plans to support confident decisions.",
    icon: Stethoscope,
  },
];

export const clinicTestimonials: ClinicTestimonial[] = [
  {
    quote:
      "The moment I met Prof. Malik, I knew I was in safe hands. He performed my angioplasty at PIMS when I was having a heart attack — his team acted with precision and care.",
    name: "Muhammad A.",
    role: "Heart Attack Survivor, Rawalpindi",
  },
  {
    quote:
      "After years of uncontrolled hypertension, Prof. Malik designed a personalized plan that finally worked. He takes time to explain everything.",
    name: "Fatima Z.",
    role: "Hypertension Patient, Islamabad",
  },
  {
    quote:
      "As a young cardiologist, training under Prof. Malik was transformative. He taught us not just procedures, but patient compassion and ethical practice.",
    name: "Dr. Asad Riaz",
    role: "FCPS Cardiology Graduate",
  },
  {
    quote:
      "I came for a second opinion after being told I needed bypass surgery. Prof. Malik reviewed my case and managed it with medication and lifestyle changes — I'm thriving 5 years later.",
    name: "Rashid K.",
    role: "Lahore",
  },

];

export const clinicDoctors: ClinicDoctor[] = [
  {
    name: "Prof. Dr. Mohammad Naeem Malik",
    specialty: "Professor & Head of Cardiology, HBS Medical College, Islamabad",
    summary:
      "MBBS, MD Cardiology, Diploma in Cardiology, FACC, FESC. Former Executive Director PIMS; Former Chairman Cardiac Centre PIMS. 35+ years in cardiology, 50,000+ procedures, 100,000+ patients served. PMDC Reg. 16526-S. Has personally performed over 10,000+ coronary angiographies and 5,000+ PCIs (angioplasties), establishing one of the highest-volume cardiac practices in Pakistan."
  },
];

export const clinicHighlights: string[] = [
  "100,000+ patients served",
  "50,000+ procedures performed",
  "35+ years of continuous practice",
  "50+ cardiologists trained",
  "1st free primary PCI program in Pakistan",
  "10+ pro-bono procedures weekly",
  "Author of ECG Atlas (2nd edition)",
  "Founder of BS CVT & MD Interventional Cardiology programs",
];

export const contactDetails = {
  address: "Office No. 10, First Floor, Time Square Plaza, Islamabad, Pakistan",
  phone: "+92 335 5411602",
  email: "c7656414@gmail.com",
  hours: "Mon–Sat · 5:00 PM to 9:00 PM",
};

export const bookingTimeSlots = [
  "Monday 5:00 PM",
  "Monday 5:30 PM",
  "Monday 6:00 PM",
  "Monday 6:30 PM",
  "Monday 7:00 PM",
  "Monday 7:30 PM",
  "Monday 8:00 PM",
  "Tuesday 5:00 PM",
  "Tuesday 5:30 PM",
  "Tuesday 6:00 PM",
  "Tuesday 6:30 PM",
  "Tuesday 7:00 PM",
  "Tuesday 7:30 PM",
  "Tuesday 8:00 PM",
];

export const socialLabels = [];

export const trustIndicators = [];

export const clinicPromises = [
  {
    title: "Clear communication",
    detail: "Every treatment step is explained in plain language before decisions are made.",
  },
  {
    title: "Coordinated follow-up",
    detail: "Visit summaries and next steps help patients stay on track between appointments.",
  },
  {
    title: "Safe, modern workflows",
    detail: "Structured intake, fast triage, and secure handling of patient details at every touchpoint.",
  },
];

export const emergencyNotice = {
  title: "Urgent symptoms?",
  detail:
    "If a patient has severe chest pain, fainting, or difficulty breathing, use local emergency care immediately before booking a clinic visit.",
  icon: Clock3,
};
