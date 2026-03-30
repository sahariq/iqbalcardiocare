import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/site/styled";
import { Seo } from "@/components/site/seo";

type PlaceholderPageProps = {
  title: string;
  description: string;
  bullets: string[];
};

export function PlaceholderPage({
  title,
  description,
  bullets,
}: PlaceholderPageProps) {
  return (
    <>
      <Seo title="Dr. Mohammad Naeem Malik | Iqbal Cardiocare" description="Faculty Resume of Dr. Mohammad Naeem Malik" />
      <section className="relative overflow-hidden py-28 sm:py-32">
        <div className="container relative z-10">
          <GlassPanel className="rounded-[2rem] p-8 sm:p-12">
            <div className="max-w-3xl space-y-6 prose prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground">
              <h1>Faculty Resume</h1>
              <p><b>Name:</b> Dr. Mohammad Naeem Malik</p>
              <p><b>Father’s Name:</b> Malik Abdul Aziz</p>
              <p><b>Gender:</b> Male</p>
              <p><b>Date of Birth:</b> 12th April, 1963</p>
              <p><b>Place of Birth:</b> Sukkur, Sindh</p>
              <p><b>Nationality:</b> Pakistani</p>
              <p><b>Domicile:</b> Sukkur, Sindh (Urban)</p>
              <p><b>CNIC:</b> 61101-71976070-1</p>
              <p><b>PMDC Registration No.:</b> 16526-S</p>
              <h2>Experience</h2>
              <ul>
                <li>Nov 1st, 1988 to Oct 31st, 1989: One year residential internship in Pakistan Institute of Medical Sciences, Islamabad with 6 months in Medicine and allied departments and 6 months in surgical and allied department</li>
                <li>Jan 23rd, 1990 to Jan 10th, 1991: Medical Officer in Emergency and Accident Department, PIMS attending to all kind of emergencies especially Cardiac and orthopaedic emergencies.</li>
                <li>Jan 11th, 1991 to Dec 1st, 1998: Medical Officer in Cardiology (CCU) and Cardiac crash team running a very busy cardiology outdoor attending cardiac emergencies, doing bedside procedures and taking care of stable cardiac patients in Cardiology Ward. Also supervised and reported nuclear scanning, did echocardiographies and Holter’s monitoring independently.</li>
                <li>Jan 1st, 1999 to December 31st, 1999: One year Diploma in Cardiology at Punjab Institute of Cardiology, Lahore.</li>
                <li>Jan 1st, 2000 to Jan 1st 2012: Registrar Cardiology, CCU and Cardiac Cath Lab doing second on call duties in CCU, training and supervising the work of House Officers and FCPS part II trainees and doing coronary and peripheral angiographies independently. Also served as instructor for CCU/ICU specialty at College of Nursing affiliated with PIMS from Jan, 1992 to 2006.</li>
                <li>Jan 2nd, 2012 to Jan, 2017: Assistant Professor in Cardiology, PIMS working as a consultant in the department doing independent OPDs, treating serious cardiac emergencies in the indoor, doing cath studies and PCI, Pacemaker placements and training of resident doctors with planning of research activities.</li>
                <li>Jan 5th, 2017 March,2020: Associate Professor in Cardiology, PIMS</li>
                <li>March, 2020 till date: Professor of Cardiology, Chairperson Cardiac Centre and Head of Cardiology Department</li>
                <li>January 25th, 2023: Executive Director PIMS</li>
                <li>Chairman Cardiac Centre, PIMS and Professor of Cardiology, SZABMU till 31st July, 2024</li>
                <li>Also served as deputy director Purchase and procurement department, PIMS during 2003</li>
                <li>Worked as Medical Director, PIMS/FMTI during 2022</li>
                <li>Member, Islamabad Healthcare Regulatory Authority since October, 2024</li>
                <li>Professor and Head of Department, Cardiology, HBS Medical College, Islamabad since December, 2024</li>
              </ul>
              <h2>Education</h2>
              <ul>
                <li>1978: Matriculation from Government (N) Modern High School, Sukkur with 689/850 marks securing Grade A1, 1st division</li>
                <li>1980: Intermediate from Islamia Science College, Sukkur obtaining 699/1000 marks in 1st Division B grade</li>
                <li>1998: MBBS from Chandka Medical College, Larkana (Sind University, Hyderabad) and obtained 1142/2400 marks securing an overall 1st Division</li>
                <li>May, 2000: Diploma in Cardiology from Pakistan Institute of Cardiology in 1st attempt</li>
                <li>April 12th, 2011: MD Cardiology from Quaid-e-Azam University, Islamabad</li>
              </ul>
              <h2>Memberships</h2>
              <ul>
                <li>American College of Cardiology</li>
                <li>European Society of Cardiology</li>
                <li>Pakistan Cardiac Society</li>
                <li>Pakistan Society of Interventional Cardiology</li>
                <li>TCTMD</li>
                <li>Pakistan Society of Hypertension (Regional coordinator)</li>
                <li>Part of NEPCARD with AFIC/NIHD, a national registry for primary prevention, a project of Government of Pakistan</li>
              </ul>
              <h2>Graduate Students / Postdocs / Undergraduate / Honor Students</h2>
              <ol>
                <li>Dr. Asad Riaz</li>
                <li>Dr. Talal Wasif</li>
                <li>Dr. Ahsan Waqas Niazi</li>
                <li>Dr. Nabil Younas Khan</li>
                <li>Dr. Zobab ul Ain</li>
                <li>Dr. Faizan Amjad</li>
                <li>Dr. Muhammad Haseeb</li>
                <li>Dr. Tuba Ishaq</li>
                <li>Dr. Shahid Amin</li>
                <li>Dr. Sana Khalid</li>
                <li>Dr. Hammad Iqbal</li>
                <li>Dr. Daud Tasleem</li>
                <li>Dr. Muhammad Tariq</li>
                <li>Dr. Asad Riaz (second fellowship)</li>
                <li>Dr. Aamir Niaz (second fellowship)</li>
                <li>Dr. Shah Humayun (second fellowship)</li>
                <li>Dr. Malik Taimur Khan</li>
                <li>Dr. Syed Haider Ali Sah</li>
                <li>Dr. Ramsha Ishtiaq</li>
              </ol>
              <h2>Service Activity</h2>
              <ul>
                <li>Multiple Charity camps and educational activities.</li>
                <li>Active member of Red Crescent during student life running blood donation drives.</li>
                <li>Exemplary performance during Hajj medical mission as a medical officer and as a Consultant Cardiologist.</li>
                <li>Conduct regular community awareness lectures in streets/marketplaces.</li>
              </ul>
              <h2>Brief Statement of Research Interest</h2>
              <p>More focused on research aiming towards primary and secondary prevention in cardiovascular research, national indicators of CV and statistics on cardiovascular health including disease registries.</p>
              <h2>Publications</h2>
              <ul>
                <li>Oral Hygiene and Periodontal Health Status of Acute Coronary Syndrome Patients reported in PIMS Islamabad.</li>
                <li>Frequency of Left Main Coronary Artery Disease in Patient Presenting for Coronary Angiography to Cardiac Cath. Lab, Hayatabad Medical Complex Peshawar.</li>
                <li>Association of Dyslipidaemia and Acute Coronary Syndrome in Patients Admitted to CCU, PIMS</li>
                <li>Medication Adherence and Its Association with Health Literacy and Performance in Activities of Daily Livings among Elderly Hypertensive Patients in Islamabad, Pakistan</li>
                <li>Preoperative anesthesia referrals to cardiology and outcomes in a tertiary care hospital</li>
                <li>Feasibility of Primary PCI as the Reperfusion Strategy for Acute ST elevation MI at PIMS</li>
                <li>Comparison between Angiographic Severity of Lesions in Patients with Acute Myocardial Infarction with and without Thrombolytic Therapy</li>
                <li>Comparison of High Dose N Acetyle Cysteine Versus Low Dose N Acetyle Cysteine for Prevention of Contrast Induced Nephropathy in Patients Undergoing Coronary Intervention.</li>
                <li>A Qualitative Analysis of Compliance of Dual Antiplatelet Therapy in Post Myocardial Infarction Treated with Percutaneous Coronary Intervention in a Pakistani Cohort</li>
              </ul>
              <h2>Social and Philanthropic Contributions</h2>
              <ul>
                <li>Brought in multiple donors to donate wheelchairs, stretchers, equipment and construction of elevator in dialysis centre during administrative revamping of PIMS hospital while serving as the executive director</li>
                <li>Regularly organize free medical camps focusing on risk factor control and primary prevention</li>
                <li>Designed and successfully run a free primary PCI program for patients with heart attack in PIMS for over year and a half</li>
                <li>Performs multiple procedures pro-bono every week</li>
                <li>Collaborate with foreign cardiologists to enable them visit once a year, perform cases pro bono and donate hardware for Cath lab</li>
                <li>Specially involved in facilitating free cardiac investigations for patients with cancers and chronic debilitating ailments</li>
                <li>As a part of the crash teams, performed basic life support on patients at the road side and aided in their transportation to hospital after successful return of circulation</li>
                <li>Have been teaching students of school of nursing, college of nursing, college of medical technology for decades imparting skills and knowledge to students of generic nursing, post RN, specialized nursing in ICU/CCU.</li>
                <li>Have been an examiner in undergraduate and post graduate exams all over the country and job interviews conducted by Federal Public Service Commission and Punjab Public Service Commission.</li>
                <li>During the COVID pandemic, was the only consultant serving day in and out seeing all patients in person and carried on performing angioplasties for heart attack patients at a remarkable rate throughout the pandemic</li>
                <li>Was always an active part of patient care and rehabilitation activities after each natural disaster</li>
              </ul>
              <h2>Other Research or Creative Accomplishments</h2>
              <ul>
                <li>Author of a book “Aziz Iqbal Atlas of ECG” (Second edition under publication)</li>
                <li>Author of a Travelogue</li>
                <li>Started first ever 4 year BS Cardiovascular Technology program under umbrella of CMT/PIMS</li>
                <li>Designed and started first ever 2nd fellowship MD interventional Cardiology under the umbrella of SZABMU</li>
              </ul>
            </div>
          </GlassPanel>
        </div>
      </section>
      <div className="container my-8">
        <h2 className="text-xl font-semibold mb-4">Clinic Location</h2>
        <div className="rounded-[1.5rem] overflow-hidden border border-card bg-card/85">
          <iframe
            title="Clinic Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.96496402413!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956b2e2e2e2b%3A0x7e2e2e2e2e2e2e2e!2sHeart%20Health%20Plaza!5e0!3m2!1sen!2s!4v1711555555555!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
