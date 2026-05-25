import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import logo from './assets/pragya_school_logo.png'
import campusHero from './assets/Pragya_school_hero_section_image.jpg'
import boysReading from './assets/boys_reading_book.JPG'
import boyHostel from './assets/boy_hostel.webp'
import busImage from './assets/bus_image.jpg'
import chemistryLab from './assets/chemestree_lab.JPG'
import classStudents from './assets/class_student_image.JPG'
import classStudentsTwo from './assets/class_student_image_2.JPG'
import computerLab from './assets/Computer_lab.JPG'
import digitalTeaching from './assets/digital_teaching.JPG'
import libraryBook from './assets/holding_book_Student_on_library.JPG'
import physicsLab from './assets/physic_lab.JPG'
import microscopeLab from './assets/research_with_microscope.JPG'
import sportsImage from './assets/sports.jpg'
import studentLibrary from './assets/Student_library_image.JPG'
import teacherImage from './assets/teacher.JPG'
import digitalBoard from './assets/Teaching_With_digital_board.JPG'
import drNavalSingh from './assets/Dr_NavalSingh_Jain.jpg'
import manjeetSingh from './assets/Manjeet_singh_Sir.jpg'
import nidhiMathur from './assets/Nidhi_Mathur_Maam.jpg'
import sunitaMaam from './assets/Sunita_Maam.jpg'
import drakshiGarg from './assets/Drakshi_Garg_Maam.webp'

const storageBucket = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || 'school-media'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about/',
    groups: [
      {
        label: 'About School',
        children: [
          ['School Introduction', '/school-introduction/'],
          ['Educational Philosophy', '/educational-philosophy/'],
          ['Academic Environment', '/academic-environment/'],
        ],
      },
      {
        label: 'Our Legacy',
        children: [
          ['History of Institution', '/origin-history/'],
          ['Shri Pragya Jain Smarak Samiti', '/samiti/'],
          ['Achievements Through Years', '/legacy-achievements/'],
        ],
      },
      {
        label: 'Vision & Mission',
        children: [
          ['Vision Statement', '/vision-statement/'],
          ['Mission Statement', '/mission-statement/'],
          ['Core Values', '/core-values/'],
        ],
      },
      {
        label: 'Leadership Team',
        children: [
          ['Chairman Message', '/chairman-message/'],
          ['Director Message', '/director-message/'],
          ['Principal Message', '/principal-message/'],
          ['Management Committee', '/management-committee/'],
        ],
      },
      {
        label: 'School Infrastructure',
        children: [
          ['Campus Overview', '/campus-overview/'],
          ['Safety & Security', '/safety-security/'],
          ['Digital Campus', '/digital-campus/'],
        ],
      },
    ],
  },
  {
    label: 'Academics',
    href: '/academics/',
    groups: [
      {
        label: 'Pre Primary Wing',
        children: [
          ['Play Based Learning', '/play-based-learning/'],
          ['Activity Learning', '/activity-learning/'],
          ['Foundational Skills', '/foundational-skills/'],
        ],
      },
      {
        label: 'Primary Wing',
        children: [
          ['Academic Curriculum', '/academic-curriculum/'],
          ['Concept Learning', '/concept-learning/'],
          ['Creative Activities', '/creative-activities/'],
        ],
      },
      {
        label: 'Middle Wing',
        children: [
          ['Subject Enrichment', '/subject-enrichment/'],
          ['Skill Development', '/skill-development/'],
          ['Practical Learning', '/practical-learning/'],
        ],
      },
      {
        label: 'Secondary & Sr. Secondary',
        children: [
          ['Science Stream', '/science-stream/'],
          ['Commerce Stream', '/commerce-stream/'],
          ['Humanities Stream', '/humanities-stream/'],
          ['Board Preparation', '/board-preparation/'],
        ],
      },
    ],
  },
  {
    label: 'IIT-JEE & NEET',
    href: '/iit-jee-neet-program/',
    children: [
      ['Program Overview', '/iit-jee-neet-program/'],
      ['Faculty Team', '/competitive-faculty/'],
      ['Study Material', '/study-material/'],
      ['Test Series', '/test-series/'],
      ['Performance Tracking', '/performance-tracking/'],
      ['Doubt Sessions', '/doubt-sessions/'],
      ['Mentorship Program', '/mentorship-program/'],
      ['Results & Selections', '/competitive-results/'],
      ['Career Counseling', '/career-counseling/'],
    ],
  },
  { label: 'Admission', href: '/admission-form/' },
  {
    label: 'Facilities',
    href: '/facilities/',
    children: [
      ['Smart Classrooms', '/interactive-classroom/'],
      ['Science Laboratories', '/laboratories/'],
      ['Computer Lab', '/computer-lab/'],
      ['Library', '/library/'],
      ['Sports', '/music-sports-facilities/'],
      ['Hostel Facilities', '/hostel/'],
      ['Transport Facility', '/transportation/'],
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery/',
    children: [
      ['Campus Gallery', '/campus-gallery/'],
      ['Classroom Activities', '/classroom-gallery/'],
      ['Sports Gallery', '/sports-gallery/'],
      ['Events & Celebrations', '/events-gallery/'],
      ['Cultural Programs', '/cultural-gallery/'],
      ['Hostel Life', '/hostel-gallery/'],
      ['Educational Tours', '/tours-gallery/'],
      ['Videos Gallery', '/videos-gallery/'],
    ],
  },
  {
    label: 'Career',
    href: '/careers/',
    children: [
      ['Current Openings', '/current-openings/'],
      ['Apply Online', '/careers/'],
      ['Employee Benefits', '/employee-benefits/'],
      ['Work Culture', '/work-culture/'],
      ['Teacher Training Programs', '/teacher-training/'],
    ],
  },
  { label: 'Alumni', href: '/alumni/' },
  { label: 'ERP Login', href: 'http://pragya.eschoolapp.in/', external: true },
  { label: 'Contact Us', href: '/contact-us/' },
]

const highlights = [
  ['Experienced Faculty', 'Dedicated and qualified teachers', 'graduation'],
  ['Smart Classrooms', 'Modern learning environment', 'book'],
  ['Co-Curricular Activities', 'Sports, arts and leadership', 'trophy'],
  ['Holistic Development', 'Education for life', 'users'],
]

const stats = [
  ['3600+', 'Students'],
  ['50+', 'Years Legacy'],
  ['IIT & NEET', 'Selections'],
  ['Experienced', 'Faculty'],
]

const quickLinks = [
  ['Admission Open', '/admission-form/', 'graduation'],
  ['Download Brochure', '/contact-us/', 'book'],
  ['Fee Inquiry', '/contact-us/', 'mail'],
  ['Virtual Tour', '/campus-overview/', 'location'],
]

const admissionSlides = [
  {
    eyebrow: 'Admissions Open',
    title: 'Give your child a strong start at Pragya.',
    text: 'A caring school environment with academic excellence, discipline and opportunities for all-round development.',
    image: campusHero,
  },
  {
    eyebrow: 'Integrated Preparation',
    title: 'School learning with IIT-JEE & NEET guidance.',
    text: 'Focused mentoring, practice and performance support for students preparing for ambitious goals.',
    image: digitalBoard,
  },
  {
    eyebrow: 'Campus Experience',
    title: 'Discover spaces built for confident learners.',
    text: 'Smart classrooms, science labs, sports, library, transport and hostel support in one nurturing campus.',
    image: classStudentsTwo,
  },
]

const facilities = [
  ['Digital Classrooms', 'Interactive teaching rooms built for attentive, visual learning.', 'Smart classroom learning space', digitalBoard, '/interactive-classroom/'],
  ['Science Labs', 'Practical physics, chemistry and biology labs for inquiry-led study.', 'Science laboratory facility', chemistryLab, '/laboratories/'],
  ['Library', 'A calm reading environment with reference books, journals and story collections.', 'School library and reading space', studentLibrary, '/facilities/'],
  ['Sports Grounds', 'Outdoor games, athletics and structured physical education every week.', 'School sports and activity ground', sportsImage, '/music-sports-facilities/'],
  ['Transport', 'Managed bus routes for safe and punctual daily travel.', 'School transport facility', busImage, '/transportation/'],
  ['Day Boarding', 'Supervised study, meals and activity time for extended learning support.', 'Day boarding facility', boyHostel, '/hostel/'],
]

const programs = [
  ['Primary Wing', 'Concept clarity, reading fluency, number sense and joyful classroom routines.'],
  ['Middle School', 'Strong academic foundations with clubs, labs, projects and competitions.'],
  ['Secondary School', 'Board-focused mentoring, practical learning and career readiness.'],
]

const whyChooseUs = [
  ['Strong Foundations', 'Concept-driven teaching builds confidence from primary school onward.', 'graduation'],
  ['Safe Campus', 'A disciplined, caring environment keeps every learner supported.', 'check'],
  ['Modern Learning', 'Smart classrooms and laboratories make lessons engaging and practical.', 'book'],
  ['Whole Child Growth', 'Sports, values, creativity and leadership complement academics.', 'users'],
]

const competitiveProgramFeatures = [
  'Dedicated IIT-JEE and NEET mentoring for senior students',
  'Concept strengthening, regular practice sheets and doubt sessions',
  'Test series, performance tracking and individual guidance',
  'Experienced faculty focused on board and entrance preparation',
]

const testimonials = [
  ['Parent of Class X Student', 'The teachers give personal attention and keep us informed about our child\'s progress. The discipline and academic support have been reassuring.'],
  ['Senior Student', 'The laboratories, smart classes and regular guidance have helped me understand concepts with confidence and plan my next steps.'],
  ['Parent of Primary Student', 'My child enjoys coming to school. The balance of learning, activities and values is exactly what we hoped for.'],
]

const newsFallback = [
  ['Admissions Open', 'Admissions are open for the new academic session. Connect with the school office for guidance.'],
  ['Campus Visit', 'Parents are welcome to visit the campus and explore classrooms, laboratories and facilities.'],
  ['Academic Guidance', 'Speak with our academic team about school pathways and IIT-JEE or NEET preparation.'],
]

const classOptions = [
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
]

const socials = [
  ['facebook', 'Facebook', '#1877f2'],
  ['instagram', 'Instagram', '#d62976'],
  ['youtube', 'YouTube', '#ff0000'],
  ['linkedin', 'LinkedIn', '#0a66c2'],
  ['xSocial', 'X', '#111827'],
]

const galleryImages = [
  [campusHero, 'School campus view'],
  [digitalTeaching, 'Digital classroom teaching'],
  [computerLab, 'Computer lab'],
  [chemistryLab, 'Chemistry laboratory'],
  [physicsLab, 'Physics laboratory'],
  [studentLibrary, 'Library reading space'],
]

const staffPhotosByName = {
  'Dr. Navalsingh Jain': drNavalSingh,
  'Mr. Manjeet Singh': manjeetSingh,
  'Mrs Nidhi Mathur': nidhiMathur,
  'Mrs. Sunita Sharma': sunitaMaam,
  'Mrs. Drakshi Garg': drakshiGarg,
}

const contactDetails = [
  ['Main Branch', 'Pragya Road, Bijainagar (Ajmer) Raj. +91-1462-230201'],
  ['Junior Wing', 'Infront of Mahaveer Bhawan, Bijainagar (Ajmer) Raj. +91-1462-230451'],
  ['Helpline No.', '09461996117'],
  ['Boys Hostel', 'Pragya Boys Hostel, Sathana Bazar, Bijainagar (Ajmer) Raj. +91 9799861201'],
  ['Girls Hostel', 'Shri Pragya Mahavidyalaya, Pragya Road Bijainagar (Ajmer) Raj. +91 9799861201'],
  ['Email id', 'officepragyaschool@gmail.com, shripragyaschool@gmail.com'],
]

const getActivePageFromPath = () => window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
const getSlug = (value) => String(value || '')
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

const contentPages = {
  about: {
    eyebrow: 'About',
    title: 'About Shri Pragya Public School',
    image: teacherImage,
    paragraphs: [
      'Shri Pragya Public School brings academics, values, sports and creative expression together in a structured environment.',
      'The school is committed to disciplined learning, holistic development and strong parent-school communication.',
    ],
    bullets: ['Origin & History', 'Vision & Mission', 'School Codes & Policies', 'Principal & Teachers Details'],
  },
  'school-introduction': {
    eyebrow: 'About Us',
    title: 'School Introduction',
    image: campusHero,
    paragraphs: [
      'Shri Pragya Public School is a senior secondary learning community in Bijainagar dedicated to knowledge, discipline and values.',
      'Our students learn in a supportive environment that combines classroom excellence, practical exposure, activities and responsible citizenship.',
    ],
  },
  'educational-philosophy': {
    eyebrow: 'About Us',
    title: 'Educational Philosophy',
    image: boysReading,
    paragraphs: [
      'We believe education should develop clear thinking, strong character and the confidence to face life with purpose.',
    ],
    bullets: ['Child-centered guidance', 'Value-based learning', 'Curiosity and creativity', 'Discipline and responsibility'],
  },
  'academic-environment': {
    eyebrow: 'About Us',
    title: 'Academic Environment',
    image: digitalTeaching,
    paragraphs: [
      'Our classrooms encourage attentive learning, regular practice, healthy discussion and meaningful teacher support at every stage.',
    ],
    bullets: ['Qualified faculty', 'Smart classrooms', 'Practical labs', 'Regular assessments'],
  },
  'origin-history': {
    eyebrow: 'About',
    title: 'Origin & History',
    image: campusHero,
    paragraphs: [
      'Our school has a rich legacy of providing quality education and fostering an environment of learning and growth.',
      'The foundation of our school was laid by Shri Pragya Jain Smarak Samiti in 1976 as Pragya Bal Mandir, which was later transformed into Shri Pragya Public School in 1997. Our vision is to provide a comprehensive and holistic education to our students, which not only focuses on academics but also on their overall development.',
      'We are proud to share that our hard work and sheer tenacity have made us one of the most reputed senior secondary schools in Bijainagar and its vicinity. This would not have been possible without the spiritual spirit behind our institution, Guru Dev Shri Pannalal Ji Maharaj, the supreme head of Jain Shwetamber Sthankwasi Nanak Vansh.',
      'Our faculty and staff are consummate professionals who have led our school to become secondary in 2003 and senior secondary in 2007. We are committed to providing the best educational experience to our students and preparing them for the challenges of the future.',
    ],
  },
  samiti: {
    eyebrow: 'Our Legacy',
    title: 'Shri Pragya Jain Smarak Samiti',
    image: campusHero,
    paragraphs: [
      'Shri Pragya Jain Smarak Samiti established the institution with a commitment to quality education, moral values and service to society.',
      'Its vision continues to guide the school in providing meaningful opportunities for students and families in the region.',
    ],
  },
  'legacy-achievements': {
    eyebrow: 'Our Legacy',
    title: 'Achievements Through Years',
    image: classStudentsTwo,
    paragraphs: [
      'From its beginning as Pragya Bal Mandir in 1976 to its development as a senior secondary school, the institution has grown through dedication and community trust.',
    ],
    bullets: ['Established in 1976', 'Transformed into Shri Pragya Public School in 1997', 'Secondary status in 2003', 'Senior Secondary status in 2007'],
  },
  'origin-mission': {
    eyebrow: 'About',
    title: 'Vision & Mission',
    image: classStudentsTwo,
    sections: [
      {
        heading: 'Vision',
        paragraphs: [
          'We envision a world where every child is empowered with the skills and knowledge to succeed in their personal and professional lives. Our aim is to create a nurturing and challenging learning environment where students can explore their potential and grow into responsible, empathetic, and innovative global citizens.',
        ],
      },
      {
        heading: 'Mission',
        paragraphs: [
          'Our mission at Pragya School is to provide a holistic education that nurtures the physical, emotional, social, and intellectual development of each student. We strive to create a learning community that fosters a love for lifelong learning and instills core values such as respect, integrity, empathy, and responsibility.',
          'We are committed to creating a safe, inclusive, and collaborative environment that inspires our students to become confident, independent thinkers who can contribute meaningfully to society.',
        ],
      },
    ],
  },
  'vision-statement': {
    eyebrow: 'Vision & Mission',
    title: 'Vision Statement',
    image: classStudentsTwo,
    paragraphs: [
      'To nurture confident, responsible and compassionate learners who are prepared to contribute positively to society and succeed in a changing world.',
    ],
  },
  'mission-statement': {
    eyebrow: 'Vision & Mission',
    title: 'Mission Statement',
    image: boysReading,
    paragraphs: [
      'Our mission is to provide holistic education through academic excellence, value-based discipline, creative opportunity and supportive mentoring.',
    ],
  },
  'core-values': {
    eyebrow: 'Vision & Mission',
    title: 'Core Values',
    image: classStudents,
    bullets: ['Knowledge', 'Discipline', 'Integrity', 'Compassion', 'Respect', 'Excellence'],
  },
  'chairman-message': {
    eyebrow: 'Leadership Team',
    title: 'Chairman Message',
    image: campusHero,
    paragraphs: [
      'Our institution is committed to giving students an education that builds competence, humility and a lifelong desire to learn.',
    ],
  },
  'director-message': {
    eyebrow: 'Leadership Team',
    title: 'Director Message',
    image: drNavalSingh,
    paragraphs: [
      'At Pragya, we strive to guide every child through strong academics, character development and opportunities that prepare them for a purposeful future.',
    ],
  },
  'principal-message': {
    eyebrow: 'Leadership Team',
    title: 'Principal Message',
    image: nidhiMathur,
    paragraphs: [
      'Our teachers work in partnership with parents to make school a safe, engaging and inspiring place where every learner can progress with confidence.',
    ],
  },
  'management-committee': {
    eyebrow: 'Leadership Team',
    title: 'Management Committee',
    image: teacherImage,
    paragraphs: [
      'The school management supports academic quality, campus development, student wellbeing and responsible institutional governance.',
    ],
  },
  'campus-overview': {
    eyebrow: 'School Infrastructure',
    title: 'Campus Overview',
    image: campusHero,
    paragraphs: [
      'Our campus brings classrooms, laboratories, library, sports and student-support facilities together in an environment designed for learning and growth.',
    ],
  },
  'safety-security': {
    eyebrow: 'School Infrastructure',
    title: 'Safety & Security',
    image: campusHero,
    paragraphs: [
      'Student wellbeing is supported through disciplined campus routines, supervised movement, responsible transport practices and attentive staff care.',
    ],
    bullets: ['Supervised campus routines', 'Safe transport guidance', 'Health support access', 'Parent communication'],
  },
  'digital-campus': {
    eyebrow: 'School Infrastructure',
    title: 'Digital Campus',
    image: digitalBoard,
    paragraphs: [
      'Technology-enhanced classrooms and computer resources support visual instruction, digital skills and engaging academic practice.',
    ],
  },
  'school-codes-policies': {
    eyebrow: 'About',
    title: 'School Codes & Policies',
    image: classStudents,
    paragraphs: [
      'We uphold certain principles and rules that we believe are essential for maintaining a positive and disciplined environment. We request everyone to follow these guidelines with sincerity and diligence.',
    ],
    bullets: [
      'Show respect to elders, parents, and teachers at all times.',
      'Speak politely and thoughtfully to everyone.',
      'Be truthful and honest in all actions.',
      'Speak in English within the school premises.',
      'Carry the school diary and identity card every day.',
      'Wear school uniform and maintain proper haircut.',
      'Mobile phones are strictly prohibited within the school premises.',
      'Firecrackers or colors inside the school building may result in expulsion.',
      'Move between classrooms, labs, library and games periods silently and orderly.',
      'Bullying and foul language will not be tolerated.',
      'Only vegetarian and nutritious food in eco-friendly boxes is allowed.',
      'Keep the school building and campus clean.',
      '75% attendance is mandatory for appearing in board exams.',
      'Latecomers will be discouraged or restricted, and early departures are not allowed.',
      'Students on leave should not be seen on school premises.',
      'Avoid spitting, damaging property, smoking, rowdiness, violence, casteism and communalism.',
      'Celebrating birthdays or outside gatherings in school uniform is not allowed.',
      'Unacceptable CDs, SD cards, pen drives and iPods are prohibited.',
      'Large amounts of money or valuable articles should not be brought to school.',
      'Students whose conduct is harmful to other students will be expelled.',
      'Students should carry a water bottle to school.',
      'Parents should update blood group, allergies, past history and health treatment details.',
      'Students are encouraged to enroll in morning and evening games.',
      'Students must wear an apron while working in the laboratory.',
      'Security frisking is a regular feature and should not offend students.',
      'Meditation before the start of the period and thanks prayer in the last period are appreciated.',
      'No student needs outside tuition; if required, they can join extra classes run by the school.',
    ],
  },
  'principal-teachers-details': {
    eyebrow: 'About',
    title: 'Principal & Teachers Details',
    people: [
      ['Dr. Navalsingh Jain', 'Director', 'Pragya Group of Institute', drNavalSingh],
      ['Mr. Manjeet Singh', 'Head & Deputy Director', 'IIT JEE NEET', manjeetSingh],
      ['Mrs Nidhi Mathur', 'Principal', 'Head Academics', nidhiMathur],
      ['Mrs. Sunita Sharma', 'Head', 'Transportation', sunitaMaam],
      ['Mrs. Drakshi Garg', 'Head', 'Pre School', drakshiGarg],
    ],
  },
  overview: {
    eyebrow: 'Facilities',
    title: 'Overview',
    image: campusHero,
    paragraphs: [
      'Shri Pragya Public School is an innovative initiative that embodies the spirit of innovation and the Pragya Group’s ideology of bringing excellence to education and other areas of development.',
      'Our school is dedicated to providing academic excellence across curricula while grooming students to have intellectual dexterity, independent thinking, unflagging curiosity, and social responsibility.',
      'We believe that every child is unique and has the potential to become a genius in their own right. We take each child as an individual and help them develop their strengths and abilities.',
      'At Shri Pragya Public School, we offer day boarding facilities starting from kindergarten classes and a wide range of co-curricular options including sports, dance, music, art and craft, debate and literature.',
    ],
  },
  facilities: {
    eyebrow: 'Facilities',
    title: 'Facilities',
    image: digitalTeaching,
    paragraphs: [
      'Our campus provides spaces designed for learning, discipline and discovery. Students benefit from classrooms, laboratories, library, sports, transport and day boarding support.',
    ],
    bullets: ['Digital Classrooms', 'Science Labs', 'Library', 'Sports Grounds', 'Transport', 'Day Boarding'],
  },
  'computer-lab': {
    eyebrow: 'Facilities',
    title: 'Computer Lab',
    image: computerLab,
    paragraphs: [
      'The computer lab develops digital confidence and supports technology-enabled learning through supervised practical practice.',
    ],
    bullets: ['Digital literacy', 'Multimedia learning', 'Practical sessions', 'Guided technology use'],
  },
  library: {
    eyebrow: 'Facilities',
    title: 'Library',
    image: studentLibrary,
    paragraphs: [
      'Our library encourages reading habits, quiet study and access to reference material that enriches classroom learning.',
    ],
  },
  hostel: {
    eyebrow: 'Facilities',
    title: 'Hostel Facility For Boys and Girls',
    image: boyHostel,
    paragraphs: [
      'Shri Pragya Public School offers comfortable and convenient hostel facilities for girls and boys. Our hostel block has spacious, well-lit, air-conditioned bedrooms, with each room accommodating up to 3 students and attached washrooms.',
      'The dining hall is large and has comfortable seating arrangements. The hostel wing also houses rooms for wardens, pastoral care, an infirmary, a recreation hall with TV, music system, reading materials and an IT room.',
      'We offer both fixed and flexible boarding facilities for students seeking admission in grades 3 and above. Students can register for boarding facilities for a full term or for a shorter duration.',
    ],
    sections: [
      {
        heading: 'Items Required',
        bullets: ['One blanket', 'Two towels', 'Sports dress', 'Bathroom slippers', 'Undergarments', 'Lunch box', 'Daily wear dresses', 'Night dress', 'Toothbrush, toothpaste, mirror, comb, hair oil and soaps'],
      },
      {
        heading: 'Hostel Rules',
        bullets: [
          'Residents must conduct themselves in a disciplined and orderly manner.',
          'Residents must respect the rights and privacy of fellow residents.',
          'Rooms should be kept clean and tidy at all times.',
          'Meals must be taken in the dining hall at specified times.',
          'Visitors are not allowed inside hostel rooms or dormitories.',
          'Residents must follow hostel timings and the daily routine.',
          'Cash and valuables should be deposited with the hostel authorities.',
        ],
      },
      {
        heading: 'Hostel Contact',
        paragraphs: [
          'Boys Hostel: Pragya Boys Hostel, Sathana Bazar, Bijainagar (Ajmer), Rajasthan. Phone: +91 9799861201',
          'Girls Hostel: Shri Pragya Mahavidyalaya, Pragya Road, Bijainagar (Ajmer), Rajasthan. Phone: +91 9799861201',
        ],
      },
    ],
  },
  laboratories: {
    eyebrow: 'Facilities',
    title: 'Laboratories',
    image: microscopeLab,
    sections: [
      {
        heading: 'Computer Lab',
        paragraphs: [
          'Our school has a computer lab with the latest hardware and software versions. Students work on systems independently and use multimedia tools for subjects such as Science, Social Studies, Mathematics, English and Hindi.',
          'The air-conditioned computer lab is configured with LCD, OHP, wide screen TV attachments and Wi-Fi internet connection to facilitate effective teaching.',
        ],
      },
      {
        heading: 'Chemistry Lab',
        paragraphs: [
          'The Chemistry Lab is conveniently located and provides facilities for hands-on experience. Reagents are neatly arranged and made accessible by trained laboratory assistants.',
          'Experiments are conducted with half batches so that each student can safely satisfy their curiosity and connect theoretical learning with practical work.',
        ],
      },
      {
        heading: 'Physics Lab',
        paragraphs: [
          'The Physics Lab is carefully designed and well equipped with modern gadgets and hi-tech facilities. It caters to the needs of children as per the revised syllabus.',
          'Equipment includes transistor, P-N junction, Zener diode, AC and DC devices, meter bridge, potential meter, prisms, rectangular glass slabs, voltmeter and galvanometer.',
        ],
      },
      {
        heading: 'Biology Lab',
        paragraphs: [
          'The Biology Lab enhances practical knowledge and interest among students. It includes specimens, slides, spotting materials, skeleton system, chemicals, microscopes and other glass apparatus required for classes VI to XII.',
        ],
      },
      {
        heading: 'English Lab',
        paragraphs: [
          'Words Worth English Language Lab is designed to develop English language proficiency among learners. It covers listening, speaking, reading and writing skills through a blend of instructor-led and computer-based learning.',
        ],
      },
    ],
  },
  'music-sports-facilities': {
    eyebrow: 'Facilities',
    title: 'Music & Sports Facilities',
    image: classStudents,
    sections: [
      {
        heading: 'Sports Facilities',
        paragraphs: [
          'Our school emphasizes both studies and sports. We have a large playground earmarked for various sports activities, and each day a period is allocated for sports.',
          'We provide facilities for outdoor and indoor games and host state and district level tournaments.',
        ],
        bullets: ['Archery', 'Volleyball', 'Skating', 'Cricket'],
      },
      {
        heading: 'Musical Band',
        paragraphs: [
          'Music learning activates areas of the brain and synchronizes the mind for faster learning and better retention. SPPS has launched a musical band where students are prepared for musical careers and creative confidence.',
        ],
      },
    ],
  },
  'interactive-classroom': {
    eyebrow: 'Facilities',
    title: 'Interactive Classroom',
    image: digitalBoard,
    paragraphs: [
      'Welcome to Pragya School, where we are committed to providing the best learning environment for our students. Our classrooms are spacious, bright and well-furnished, designed for comfort and ergonomics.',
      'Each classroom is equipped with a state-of-the-art smart board and interactive features that make learning come alive. Teachers use these boards to create animations and activities that help students understand complex concepts quickly.',
      'Digital teaching methodology helps students concentrate better and take a more active interest in learning. Classroom tests are also easier and more structured, leaving ample time for revision.',
    ],
  },
  'medical-facility': {
    eyebrow: 'Facilities',
    title: 'Medical Facility',
    image: campusHero,
    paragraphs: [
      'Pragya Public School provides access to hospital facilities for students. Shree PKV Hospital is a 100-bedded multispecialty hospital located opposite Pragya College, Beawar Road, Bijainagar, Ajmer, Rajasthan.',
      'The hospital philosophy is to provide compassionate, ethical, accessible and world-class medical care to students and everyone who needs it. It also provides free and subsidized care for the poor and indigent.',
    ],
  },
  transportation: {
    eyebrow: 'Facilities',
    title: 'Transportation',
    image: busImage,
    paragraphs: [
      'School bus transport is a safe and convenient way for students to travel to and from school, as well as to school-related events and activities.',
    ],
    bullets: [
      'The school bus is operated by a trained and licensed driver.',
      'School buses are equipped with safety features such as seat belts and emergency exits.',
      'Students should arrive at the bus stop on time and wait patiently.',
      'Students should always follow the instructions of the bus driver.',
      'Students should avoid shouting, throwing objects or standing while the bus is moving.',
      'Students should respect the property of the bus and other passengers.',
      'Violation of transport rules may result in disciplinary action.',
    ],
  },
  academics: {
    eyebrow: 'Academics',
    title: 'Academics',
    image: boysReading,
    paragraphs: [
      'Our academic system supports concept clarity, regular practice, practical exposure and board readiness through a structured teaching process.',
    ],
    bullets: ['Primary Wing', 'Middle School', 'Secondary School', 'Exam Scheme', 'Syllabus', 'Curriculum'],
  },
  'play-based-learning': {
    eyebrow: 'Pre Primary Wing',
    title: 'Play Based Learning',
    image: classStudentsTwo,
    paragraphs: ['Young learners explore language, numbers and social habits through joyful, age-appropriate activities and guided play.'],
  },
  'activity-learning': {
    eyebrow: 'Pre Primary Wing',
    title: 'Activity Learning',
    image: classStudents,
    paragraphs: ['Stories, rhymes, movement, art and hands-on classroom experiences make early learning meaningful and enjoyable.'],
  },
  'foundational-skills': {
    eyebrow: 'Pre Primary Wing',
    title: 'Foundational Skills',
    image: boysReading,
    bullets: ['Early literacy', 'Number readiness', 'Communication skills', 'Fine motor development', 'Good habits', 'Confidence building'],
  },
  'academic-curriculum': {
    eyebrow: 'Primary Wing',
    title: 'Academic Curriculum',
    image: boysReading,
    paragraphs: ['The primary curriculum builds confident reading, clear writing, number proficiency and awareness of the world around us.'],
  },
  'concept-learning': {
    eyebrow: 'Primary Wing',
    title: 'Concept Learning',
    image: digitalTeaching,
    paragraphs: ['Teachers use explanations, examples and classroom activities to help students understand ideas rather than only memorize answers.'],
  },
  'creative-activities': {
    eyebrow: 'Primary Wing',
    title: 'Creative Activities',
    image: classStudentsTwo,
    bullets: ['Art and craft', 'Storytelling', 'Music and dance', 'Speaking activities', 'Projects', 'Celebrations'],
  },
  'subject-enrichment': {
    eyebrow: 'Middle Wing',
    title: 'Subject Enrichment',
    image: libraryBook,
    paragraphs: ['Reading, projects, quizzes and enrichment exercises deepen subject understanding during the middle school years.'],
  },
  'skill-development': {
    eyebrow: 'Middle Wing',
    title: 'Skill Development',
    image: computerLab,
    bullets: ['Communication', 'Digital literacy', 'Teamwork', 'Problem solving', 'Leadership', 'Creative expression'],
  },
  'practical-learning': {
    eyebrow: 'Middle Wing',
    title: 'Practical Learning',
    image: microscopeLab,
    paragraphs: ['Laboratory experiences, models, activities and observation connect academic concepts to real-world understanding.'],
  },
  'science-stream': {
    eyebrow: 'Secondary & Sr. Secondary',
    title: 'Science Stream',
    image: chemistryLab,
    paragraphs: ['Science students develop strong conceptual and practical foundations in physics, chemistry, biology and mathematics as applicable.'],
  },
  'commerce-stream': {
    eyebrow: 'Secondary & Sr. Secondary',
    title: 'Commerce Stream',
    image: boysReading,
    paragraphs: ['Commerce education supports understanding of accountancy, business studies, economics and analytical thinking.'],
  },
  'humanities-stream': {
    eyebrow: 'Secondary & Sr. Secondary',
    title: 'Humanities Stream',
    image: libraryBook,
    paragraphs: ['Humanities learning encourages critical thinking, social understanding, communication and thoughtful engagement with society.'],
  },
  'board-preparation': {
    eyebrow: 'Secondary & Sr. Secondary',
    title: 'Board Preparation',
    image: classStudents,
    bullets: ['Structured syllabus completion', 'Revision schedules', 'Sample papers', 'Practice tests', 'Doubt clearing', 'Progress monitoring'],
  },
  'iit-jee-neet-program': {
    eyebrow: 'Integrated Program',
    title: 'IIT-JEE & NEET Integrated Program',
    image: digitalBoard,
    paragraphs: [
      'Our integrated approach supports senior secondary academics alongside focused preparation for engineering and medical entrance examinations.',
    ],
    bullets: ['Concept-oriented teaching', 'Regular testing', 'Doubt resolution', 'Performance review', 'Mentorship', 'Career guidance'],
  },
  'competitive-faculty': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Faculty Team',
    image: teacherImage,
    paragraphs: ['Experienced teachers guide students through concepts, problem-solving methods, revision strategy and exam discipline.'],
  },
  'study-material': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Study Material',
    image: libraryBook,
    paragraphs: ['Topic-wise notes, question practice and revision material help students strengthen concepts step by step.'],
  },
  'test-series': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Test Series',
    image: boysReading,
    paragraphs: ['Regular tests encourage accuracy, time management, exam familiarity and steady improvement.'],
  },
  'performance-tracking': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Performance Tracking',
    image: classStudents,
    paragraphs: ['Assessment reviews identify strengths, gaps and focus areas so students can prepare with a clear plan.'],
  },
  'doubt-sessions': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Doubt Sessions',
    image: digitalTeaching,
    paragraphs: ['Dedicated doubt-clearing support enables students to resolve difficult concepts and build confidence in application-based questions.'],
  },
  'mentorship-program': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Mentorship Program',
    image: teacherImage,
    paragraphs: ['Personal mentoring supports consistency, motivation, study planning and balance through competitive exam preparation.'],
  },
  'competitive-results': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Results & Selections',
    image: classStudentsTwo,
    paragraphs: ['We celebrate the effort and progress of students striving for strong academic and competitive examination outcomes.'],
  },
  'career-counseling': {
    eyebrow: 'IIT-JEE & NEET',
    title: 'Career Counseling',
    image: boysReading,
    paragraphs: ['Students receive guidance to understand streams, entrance pathways and higher education choices aligned with their aspirations.'],
  },
  'academic-calendar': {
    eyebrow: 'Academics',
    title: 'Academic Calendar',
    image: classStudentsTwo,
    paragraphs: [
      'The academic calendar keeps students and parents informed about important school dates, assessments, activities, holidays and academic milestones.',
      'Please contact the school office for the latest detailed calendar and any date-specific updates.',
    ],
    bullets: ['Assessment schedule', 'Activity dates', 'Parent communication', 'Holiday updates'],
  },
  results: {
    eyebrow: 'Academics',
    title: 'Results',
    image: classStudentsTwo,
    paragraphs: [
      'Our students continue to make the school proud through dedicated effort, consistent guidance and excellent academic performance.',
    ],
  },
  'academic-report-co-curricular': {
    eyebrow: 'Academics',
    title: 'Academic Report & Co-Curricular',
    image: classStudents,
    paragraphs: [
      'Academic progress at Shri Pragya Public School is supported by regular assessment, classroom participation, practical learning and co-curricular involvement.',
      'Students are encouraged to participate in cultural, literary, sports and leadership activities so that learning goes beyond textbooks and builds confidence.',
    ],
    bullets: ['Regular academic monitoring', 'Parent-teacher communication', 'Project-based learning', 'Sports and cultural participation', 'Leadership and house activities', 'Value-based education'],
  },
  'exam-scheme': {
    eyebrow: 'Academics',
    title: 'Exam Scheme',
    image: boysReading,
    paragraphs: [
      'The school follows a structured examination pattern to evaluate conceptual clarity, writing skills, practical understanding and regular learning habits.',
    ],
    bullets: ['Periodic tests', 'Half-yearly examination', 'Annual examination', 'Practical assessment', 'Class participation', 'Notebook and project evaluation'],
  },
  syllabus: {
    eyebrow: 'Academics',
    title: 'Syllabus',
    image: libraryBook,
    paragraphs: [
      'The syllabus is planned class-wise to maintain continuity, clarity and age-appropriate learning outcomes. Teachers guide students through concepts, practice work and revision schedules.',
    ],
    bullets: ['Class-wise lesson planning', 'Subject enrichment activities', 'Revision worksheets', 'Practical and project work', 'Reading and writing practice', 'Board exam preparation for senior classes'],
  },
  curriculum: {
    eyebrow: 'Academics',
    title: 'Curriculum',
    image: digitalTeaching,
    paragraphs: [
      'Our curriculum balances academics, language development, mathematics, science, social understanding, digital literacy, arts, physical education and moral values.',
      'The focus is on concept clarity, communication, discipline, creativity and responsible citizenship.',
    ],
  },
  achievments: {
    eyebrow: 'Academics',
    title: 'Achievments',
    image: classStudentsTwo,
    paragraphs: [
      'Students of Shri Pragya Public School are encouraged to achieve excellence in academics, sports, arts, competitions and community participation.',
    ],
    bullets: ['Board examination performance', 'Inter-school competitions', 'Sports tournaments', 'Cultural events', 'Science and literary activities', 'Student leadership initiatives'],
  },
  'admissions-withdrawl': {
    eyebrow: 'Academics',
    title: 'Admissions & Withdrawl',
    image: campusHero,
    paragraphs: [
      'Admission is granted as per seat availability, student eligibility and completion of required documents. Parents are requested to contact the school office for the latest admission process.',
    ],
    bullets: ['Admission form', 'Birth certificate', 'Previous school transfer certificate', 'Report card', 'Student photographs', 'Parent ID and address proof'],
  },
  'fee-structure': {
    eyebrow: 'Academics',
    title: 'Fee Structure',
    image: campusHero,
    paragraphs: [
      'Fee details may vary by class, facility and academic session. Parents can contact the school office for updated fee structure, transport charges and hostel details.',
    ],
  },
  'general-rules': {
    eyebrow: 'Academics',
    title: 'General Rules',
    image: classStudents,
    paragraphs: [
      'The school expects students to maintain discipline, punctuality, neatness and respectful conduct throughout the academic session.',
    ],
    bullets: ['Attend school regularly and on time', 'Wear proper uniform', 'Complete homework and classwork', 'Respect teachers and classmates', 'Keep classrooms and campus clean', 'Follow all safety instructions'],
  },
  club: {
    eyebrow: 'Activities',
    title: 'Club',
    image: classStudentsTwo,
    paragraphs: [
      'School clubs help students explore interests, build teamwork and develop confidence through structured activities.',
    ],
    bullets: ['Literary Club', 'Science Club', 'Art Club', 'Eco Club', 'Music Club', 'Sports Club'],
  },
  activities: {
    eyebrow: 'Activities',
    title: 'Activities',
    image: classStudents,
    paragraphs: [
      'Activities at Shri Pragya Public School help students lead, perform, collaborate and build confidence beyond the classroom.',
    ],
    bullets: ['Debate', 'Music', 'Yoga', 'Science Fair', 'Art Studio', 'Cricket', 'Community Service', 'Leadership Club'],
  },
  'annual-award': {
    eyebrow: 'Activities',
        paragraphs: [
          'The annual award program celebrates academic excellence, discipline, sportsmanship, creativity, leadership and consistent effort.',
        ],
  },
  'interschool-co-curricular-activity': {
    eyebrow: 'Activities',
    title: 'Inter School & Co-Curricular Activity',
    image: classStudents,
    paragraphs: [
      'Students participate in inter-school and co-curricular activities to strengthen confidence, communication, teamwork and competitive spirit.',
    ],
    bullets: ['Debate', 'Quiz', 'Art and craft', 'Music and dance', 'Sports competitions', 'Science exhibitions'],
  },
  'spicy-macay': {
    eyebrow: 'Activities',
    title: 'Spic Macay',
    image: classStudentsTwo,
    paragraphs: [
      'Cultural exposure through programs such as Spic Macay helps students connect with Indian classical arts, music, heritage and creative traditions.',
    ],
  },
  celebration: {
    eyebrow: 'Activities',
    title: 'Celebration',
    image: classStudents,
    paragraphs: [
      'School celebrations create joyful opportunities for students to learn culture, teamwork, stage confidence and respect for national and social occasions.',
    ],
    bullets: ['Independence Day', 'Republic Day', 'Annual Day', 'Festivals', 'Sports Day', 'Special assemblies'],
  },
  'house-system': {
    eyebrow: 'Activities',
    title: 'House System',
    image: classStudentsTwo,
    paragraphs: [
      'The house system builds leadership, team spirit, healthy competition and responsibility among students.',
      'At Shri Pragya Public School, we follow a vibrant 4-house system where every student is allocated to one of the four houses: Blue, Green, Red, or Yellow. This system divides the school community into smaller sub-units, fostering a strong sense of belonging, sisterhood/brotherhood, and healthy competition throughout the academic term.',
    ],
    bullets: ['House competitions', 'Student leadership roles', 'Sports participation', 'Cultural activities', 'Discipline and teamwork'],
    sections: [
      {
        heading: 'The 4 Houses at SPPS',
        paragraphs: [
          'Each of the four houses is associated with unique values, elements, and brand identities:',
          '• Blue House (Water & Depth): Symbolizes intelligence, depth of knowledge, tranquility, and endless potential. Students in the Blue House strive for stability, conceptual clarity, and high ethical values.',
          '• Green House (Growth & Ecology): Symbolizes prosperity, continuous growth, nature, and youthfulness. Green House members focus on sustainability, environmental consciousness, sportsmanship, and creative expression.',
          '• Red House (Passion & Strength): Symbolizes passion, courage, vital energy, and strength of character. Members of the Red House demonstrate high enthusiasm, determination, and strong action-oriented leadership.',
          '• Yellow House (Intellect & Brightness): Symbolizes wisdom, optimistic energy, intellectual brightness, and joy. Yellow House students represent logical reasoning, mental alertness, cheerfulness, and positive communication.'
        ],
      },
      {
        heading: 'House Activities & Competitions',
        paragraphs: [
          'Under this structure, houses compete actively in a wide array of co-curricular activities, including inter-house debates, quizzes, sports tournaments, archery, band performances, art exhibitions, and special national celebrations.',
          'Points are earned throughout the academic term based on student achievements in academics, sportsmanship, discipline, co-curricular awards, and leadership roles, motivating every student to contribute their best efforts to their house.'
        ]
      }
    ]
  },
  excursions: {
    eyebrow: 'Activities',
    title: 'Excursions',
    image: campusHero,
    paragraphs: [
      'Educational excursions give students real-world exposure and help them learn through observation, travel and group experiences.',
    ],
  },
  'admission-form': {
    eyebrow: 'Admission',
    title: 'Online Admission',
    image: campusHero,
    paragraphs: [
      'Parents can submit an admission enquiry through the contact form. Please select the student class and share contact details so the school office can respond.',
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Gallery',
    image: campusHero,
    paragraphs: [
      'Explore glimpses of school life, campus spaces, activities and learning moments at Shri Pragya Public School.',
    ],
  },
  'campus-gallery': {
    eyebrow: 'Gallery',
    title: 'Campus Gallery',
    gallery: [[campusHero, 'School campus view'], [digitalTeaching, 'Digital teaching space'], [studentLibrary, 'Library space']],
  },
  'classroom-gallery': {
    eyebrow: 'Gallery',
    title: 'Classroom Activities',
    gallery: [[digitalTeaching, 'Digital classroom teaching'], [classStudents, 'Classroom learning'], [classStudentsTwo, 'Student participation']],
  },
  'sports-gallery': {
    eyebrow: 'Gallery',
    title: 'Sports Gallery',
    gallery: [[sportsImage, 'School sports and activities']],
  },
  'events-gallery': {
    eyebrow: 'Gallery',
    title: 'Events & Celebrations',
    gallery: [[classStudentsTwo, 'School event participation'], [classStudents, 'Students together at school']],
  },
  'cultural-gallery': {
    eyebrow: 'Gallery',
    title: 'Cultural Programs',
    gallery: [[classStudentsTwo, 'Cultural program participation']],
  },
  'hostel-gallery': {
    eyebrow: 'Gallery',
    title: 'Hostel Life',
    gallery: [[boyHostel, 'Hostel facility']],
  },
  'tours-gallery': {
    eyebrow: 'Gallery',
    title: 'Educational Tours',
    paragraphs: ['Educational tour photographs and learning experiences will be shared here.'],
  },
  'videos-gallery': {
    eyebrow: 'Gallery',
    title: 'Videos Gallery',
    paragraphs: ['School activity and event videos will be shared here as they become available.'],
  },
  careers: {
    eyebrow: 'Careers',
    title: 'Careers',
    image: teacherImage,
    paragraphs: [
      'Join our teaching community.',
      'We welcome passionate educators who believe in discipline, care and student-centered learning. Share your profile with the school office for current vacancies.',
    ],
  },
  'current-openings': {
    eyebrow: 'Career',
    title: 'Current Openings',
    image: teacherImage,
    paragraphs: [
      'We welcome dedicated educators and professionals who share our commitment to learning, discipline and student wellbeing.',
      'Please submit your application online or contact the school office for current vacancy details.',
    ],
  },
  'employee-benefits': {
    eyebrow: 'Career',
    title: 'Employee Benefits',
    image: teacherImage,
    bullets: ['Supportive academic environment', 'Professional development opportunities', 'Collaborative team culture', 'Meaningful work with learners'],
  },
  'work-culture': {
    eyebrow: 'Career',
    title: 'Work Culture',
    image: teacherImage,
    paragraphs: ['Our work culture values professionalism, collaboration, respect, student care and continuous improvement in teaching.'],
  },
  'teacher-training': {
    eyebrow: 'Career',
    title: 'Teacher Training Programs',
    image: digitalBoard,
    paragraphs: ['Teachers are encouraged to strengthen pedagogy, technology use, classroom management and contemporary educational practices.'],
  },
  alumni: {
    eyebrow: 'Alumni',
    title: 'Alumni',
    image: campusHero,
    paragraphs: [
      'Our alumni remain an important part of the Pragya family. This space will celebrate their journeys, memories and contributions.',
    ],
  },
  'student-council': {
    eyebrow: 'Student Council',
    title: 'Student Council',
    image: classStudentsTwo,
    paragraphs: [
      'Student Council gives learners a formal space to lead, organize activities and represent student voices with responsibility.',
    ],
  },
  'contact-us': {
    eyebrow: 'Contact',
    title: 'Contact Us',
    image: campusHero,
    paragraphs: [
      'Visit the campus or connect with the school office for admission enquiries, transport details, hostel information and general support.',
      'Main Branch: Pragya Road, Bijainagar (Ajmer) Raj. +91-1462-230201',
      'Junior Wing: Infront of Mahaveer Bhawan, Bijainagar (Ajmer) Raj. +91-1462-230451',
      'Helpline No.: 09461996117',
      'Boys Hostel: Pragya Boys Hostel, Sathana Bazar, Bijainagar (Ajmer) Raj. +91 9799861201',
      'Girls Hostel: Shri Pragya Mahavidyalaya, Pragya Road Bijainagar (Ajmer) Raj. +91 9799861201',
      'Email id: officepragyaschool@gmail.com, shripragyaschool@gmail.com',
    ],
  },
}

function Icon({ name, className = 'h-5 w-5' }) {
  const icons = {
    location: (
      <path d="M12 21s7-5.1 7-12A7 7 0 1 0 5 9c0 6.9 7 12 7 12Zm0-9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z" />
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    x: <path d="m18 6-12 12M6 6l12 12" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    graduation: <path d="m22 10-10-5-10 5 10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5" />,
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12ZM8 7h8M8 11h8" />,
    trophy: <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Zm0 2H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9m-3-11.9a4 4 0 0 1 0 7.8" />,
    check: <path d="m20 6-11 11-5-5" />,
    mail: <path d="M4 4h16v16H4V4Zm0 2 8 7 8-7" />,
    chat: <path d="M20 11.5a8 8 0 0 1-8 8 8.8 8.8 0 0 1-3.5-.8L4 20l1.3-4A8 8 0 1 1 20 11.5Zm-10-2c.2 2 2.1 3.9 4.1 4.1l1.1-1.1" />,
  }

  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function SocialIcon({ name, className = 'h-5 w-5' }) {
  const icons = {
    facebook: <path d="M18.9 2H15a6.2 6.2 0 0 0-6.5 6.6v3H4.6v4.8h3.9V22h4.8v-5.6h3.9l.7-4.8h-4.6V9.1c0-1.4.4-2.3 2.4-2.3h3.2V2Z" />,
    instagram: <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3.2A4.8 4.8 0 1 1 12 16.8a4.8 4.8 0 0 1 0-9.6Zm0 2A2.8 2.8 0 1 0 12 14.8a2.8 2.8 0 0 0 0-5.6Zm5-2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />,
    youtube: <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5S6.3 4.5 4.5 5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.4V8.6l6 3.4-6 3.4Z" />,
    linkedin: <path d="M6.9 8.8H2.6V22h4.3V8.8ZM4.8 2A2.5 2.5 0 1 0 4.7 7a2.5 2.5 0 0 0 .1-5Zm16.7 12.5c0-4-2.1-5.9-5-5.9a4.3 4.3 0 0 0-3.9 2.1h-.1V8.8H8.4V22h4.3v-6.5c0-1.7.3-3.4 2.5-3.4s2.1 2 2.1 3.5V22h4.3v-7.5Z" />,
    xSocial: <path d="M14.4 10.4 21.7 2h-1.8l-6.3 7.2L8.6 2H2.8l7.7 11L2.8 22h1.8l6.7-7.7 5.4 7.7h5.8l-8.1-11.6Zm-2.4 2.7-.8-1.1L5 3.4h2.7l4.9 6.9.8 1.1 6.5 9.2h-2.7L12 13.1Z" />,
  }

  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function AdmissionForm({ onSubmit, message }) {
  const [form, setForm] = useState({
    student_name: '',
    father_name: '',
    mother_name: '',
    dob: '',
    gender: '',
    class_applied: '',
    previous_school: '',
    address: '',
    phone: '',
    email: '',
    message: '',
  })

  const update = (key, value) => setForm({ ...form, [key]: value })

  return (
    <form onSubmit={(event) => onSubmit(event, form, 'admission')} className="mt-10 grid gap-4 rounded-lg bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <input value={form.student_name} onChange={(event) => update('student_name', event.target.value)} required placeholder="Student full name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <select value={form.class_applied} onChange={(event) => update('class_applied', event.target.value)} required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
          <option value="" disabled>Select class</option>
          {classOptions.map((className) => <option key={className}>{className}</option>)}
        </select>
        <input value={form.father_name} onChange={(event) => update('father_name', event.target.value)} required placeholder="Father name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.mother_name} onChange={(event) => update('mother_name', event.target.value)} required placeholder="Mother name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.dob} onChange={(event) => update('dob', event.target.value)} type="date" required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <select value={form.gender} onChange={(event) => update('gender', event.target.value)} required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
          <option value="" disabled>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input value={form.previous_school} onChange={(event) => update('previous_school', event.target.value)} placeholder="Previous school" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.phone} onChange={(event) => update('phone', event.target.value)} required placeholder="Mobile number" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.email} onChange={(event) => update('email', event.target.value)} type="email" placeholder="Email address" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
      </div>
      <textarea value={form.address} onChange={(event) => update('address', event.target.value)} required rows="3" placeholder="Full address" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
      <textarea value={form.message} onChange={(event) => update('message', event.target.value)} rows="3" placeholder="Additional details" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
      {message ? <p className="rounded-md bg-[#fffaf0] p-3 text-sm font-bold text-slate-700">{message}</p> : null}
      <button className="rounded-md bg-[#a8171d] px-6 py-4 font-bold text-white">Submit Admission Form</button>
    </form>
  )
}

function ContactForm({ onSubmit, message, compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const update = (key, value) => setForm({ ...form, [key]: value })

  return (
    <form onSubmit={(event) => onSubmit(event, form, 'contact')} className={`${compact ? '' : 'mt-10 '}grid gap-4 rounded-lg bg-white p-6 shadow-sm`}>
      <div className="grid gap-4 md:grid-cols-2">
        <input value={form.name} onChange={(event) => update('name', event.target.value)} required placeholder="Name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.phone} onChange={(event) => update('phone', event.target.value)} required placeholder="Phone number" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.email} onChange={(event) => update('email', event.target.value)} type="email" placeholder="Email address" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        <input value={form.subject} onChange={(event) => update('subject', event.target.value)} placeholder="Subject" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
      </div>
      <textarea value={form.message} onChange={(event) => update('message', event.target.value)} required rows="4" placeholder="Message" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
      {message ? <p className="rounded-md bg-[#fffaf0] p-3 text-sm font-bold text-slate-700">{message}</p> : null}
      <button className="rounded-md bg-[#a8171d] px-6 py-4 font-bold text-white">Submit Enquiry</button>
    </form>
  )
}

function CareerForm({ onSubmit, message }) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    qualification: '',
    experience: '',
    message: '',
  })
  const update = (key, value) => setForm({ ...form, [key]: value })

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="inline-flex items-center gap-3 rounded-md bg-[#a8171d] px-7 py-4 font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-[#06284d]"
      >
        Join Now <Icon name="arrow" />
      </button>

      {showForm ? (
        <form onSubmit={(event) => onSubmit(event, form, 'career')} className="mt-6 grid gap-4 rounded-lg bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={form.name} onChange={(event) => update('name', event.target.value)} required placeholder="Full name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            <input value={form.phone} onChange={(event) => update('phone', event.target.value)} required placeholder="Phone number" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            <input value={form.email} onChange={(event) => update('email', event.target.value)} type="email" placeholder="Email address" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            <input value={form.position} onChange={(event) => update('position', event.target.value)} required placeholder="Position applied for" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            <input value={form.qualification} onChange={(event) => update('qualification', event.target.value)} placeholder="Highest qualification" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            <input value={form.experience} onChange={(event) => update('experience', event.target.value)} placeholder="Experience" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
          </div>
          <textarea value={form.message} onChange={(event) => update('message', event.target.value)} rows="4" placeholder="Subject expertise / message" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
          {message ? <p className="rounded-md bg-[#fffaf0] p-3 text-sm font-bold text-slate-700">{message}</p> : null}
          <button className="rounded-md bg-[#a8171d] px-6 py-4 font-bold text-white">Submit Application</button>
        </form>
      ) : null}
    </div>
  )
}

function CountUpStat({ value, label }) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const match = String(value).match(/^(\d+)(.*)$/)

    if (!match) {
      return undefined
    }

    const target = Number(match[1])
    const suffix = match[2] || ''
    const duration = 1100
    const startedAt = performance.now()
    let frameId = 0

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(`${Math.round(target * eased)}${suffix}`)

      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [value])

  return (
    <div className="stat-card rounded-lg bg-white p-6 shadow-sm">
      <p className="text-4xl font-black text-[#a8171d]">{displayValue}</p>
      <p className="mt-2 font-semibold text-slate-700">{label}</p>
    </div>
  )
}

function ContentPage({ page, activePage, onFormSubmit, formMessage, galleryPhotos = [], resultPhotos = [], studentCouncilRecords = [] }) {
  const [openGalleryPhoto, setOpenGalleryPhoto] = useState(null)
  const galleryFolders = galleryPhotos.reduce((folders, photo) => {
    const folderName = photo.folder_title || 'Gallery'
    return {
      ...folders,
      [folderName]: [...(folders[folderName] || []), photo],
    }
  }, {})
  const galleryFolderEntries = Object.entries(galleryFolders)
  const galleryRouteSlug = activePage.startsWith('gallery/') ? activePage.split('/')[1] : ''
  const activeGalleryFolder = galleryFolderEntries.find(([folderName]) => getSlug(folderName) === galleryRouteSlug)

  return (
    <main>
      <section className="relative overflow-hidden bg-[#06284d] py-10 text-white sm:py-12">
        <img src={campusHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#06284d]/85" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffc400] sm:text-sm">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-14">
        {page.contentMode === 'html' && page.html ? (
          <div className="cms-html-content rounded-lg bg-white p-6 text-slate-700 shadow-sm" dangerouslySetInnerHTML={{ __html: page.html }} />
        ) : page.paragraphs ? (
          <div className="grid gap-5 text-lg leading-8 text-slate-700">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {page.bullets ? (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.bullets.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg bg-white p-4 font-semibold text-slate-700 shadow-sm">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-[#a8171d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {page.people ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.people.map(([name, role, detail, photo]) => {
              const staffPhoto = photo || staffPhotosByName[name]

              return (
                <article key={name} className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  {staffPhoto ? (
                    <img src={staffPhoto} alt={name} className="h-72 w-full object-cover object-top" />
                  ) : (
                    <div className="grid h-72 place-items-center bg-[#fffaf0] text-5xl font-black text-[#a8171d]">{name.charAt(0)}</div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-black text-[#102344]">{name}</h2>
                    <p className="mt-2 font-bold text-[#a8171d]">{role}</p>
                    <p className="mt-1 text-slate-700">{detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
        ) : null}



        {(page.title === 'Gallery' || activePage.startsWith('gallery/')) ? (
          <div className="mt-10 grid gap-8">
            {galleryRouteSlug ? (
              activeGalleryFolder ? (
                <section className="rounded-lg bg-white p-5 shadow-sm">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Gallery Folder</p>
                      <h2 className="mt-2 text-3xl font-black text-[#102344]">{activeGalleryFolder[0]}</h2>
                    </div>
                  </div>
                  <a href="/gallery/" onClick={(event) => {
                    event.preventDefault()
                    window.history.pushState({}, '', '/gallery/')
                    window.dispatchEvent(new PopStateEvent('popstate'))
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }} className="mt-4 inline-flex w-fit rounded-md bg-[#ffc400] px-4 py-2 text-sm font-black text-[#102344]">Back to folders</a>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {activeGalleryFolder[1].map((photo) => (
                      <button key={photo.id} type="button" onClick={() => setOpenGalleryPhoto(photo)} className="group overflow-hidden rounded-lg bg-[#fffaf0] text-left shadow-md">
                        <img src={photo.image_url} alt={photo.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                        <p className="p-4 font-black text-[#102344]">{photo.title}</p>
                      </button>
                    ))}
                  </div>
                </section>
              ) : (
                <p className="rounded-lg bg-white p-6 text-lg font-bold text-slate-700 shadow-sm">Gallery folder not found.</p>
              )
            ) : galleryFolderEntries.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryFolderEntries.map(([folderName, photos]) => (
                  <a
                    key={folderName}
                    href={`/gallery/${getSlug(folderName)}/`}
                    onClick={(event) => {
                      event.preventDefault()
                      window.history.pushState({}, '', `/gallery/${getSlug(folderName)}/`)
                      window.dispatchEvent(new PopStateEvent('popstate'))
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img src={photos[0]?.image_url} alt={folderName} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="p-5">
                      <h2 className="text-2xl font-black text-[#102344]">{folderName}</h2>
                      <p className="mt-2 font-semibold text-slate-600">{photos.length} photos</p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#a8171d] px-4 py-2 text-sm font-black text-white">
                        Open Folder <Icon name="arrow" className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map(([image, alt]) => (
                  <button key={alt} type="button" onClick={() => setOpenGalleryPhoto({ title: alt, image_url: image })} className="overflow-hidden rounded-lg shadow-md">
                    <img src={image} alt={alt} className="h-72 w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {openGalleryPhoto ? (
          <div className="fixed inset-0 z-[10000] grid place-items-center bg-slate-950/85 p-4" onClick={() => setOpenGalleryPhoto(null)}>
            <div className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-4">
                <h2 className="text-xl font-black text-[#102344]">{openGalleryPhoto.title}</h2>
                <button type="button" onClick={() => setOpenGalleryPhoto(null)} className="rounded-md bg-[#a8171d] px-4 py-2 text-sm font-black text-white">Close</button>
              </div>
              <img src={openGalleryPhoto.image_url} alt={openGalleryPhoto.title} className="max-h-[78vh] w-full object-contain" />
            </div>
          </div>
        ) : null}

        {activePage === 'results' ? (
          resultPhotos.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resultPhotos.map((result) => (
                <article key={result.id || result.image_url} className="result-card overflow-hidden rounded-lg bg-white p-3 shadow-md">
                  <img src={result.image_url} alt={result.title || 'Pragya school result'} className="h-80 w-full rounded-md object-contain" />
                  {(result.title || result.result_year) ? (
                    <div className="px-2 pb-2 pt-4">
                      <h2 className="text-xl font-black text-[#102344]">{result.title}</h2>
                      {result.result_year ? <p className="mt-1 font-bold text-[#a8171d]">{result.result_year}</p> : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-lg bg-white p-6 text-lg font-bold text-slate-700 shadow-sm">No result photos added yet.</p>
          )
        ) : page.gallery ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.gallery.map(([image, alt]) => (
              <img key={alt} src={image} alt={alt} className="h-80 w-full rounded-lg object-contain bg-white p-3 shadow-md" />
            ))}
          </div>
        ) : null}

        {activePage === 'admission-form' ? <AdmissionForm onSubmit={onFormSubmit} message={formMessage} /> : null}
        {activePage === 'contact-us' ? <ContactForm onSubmit={onFormSubmit} message={formMessage} /> : null}
        {activePage === 'careers' ? <CareerForm onSubmit={onFormSubmit} message={formMessage} /> : null}

        {activePage === 'student-council' ? (
          studentCouncilRecords.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {studentCouncilRecords.map((member) => (
                <article key={member.id} className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  {member.photo_url ? (
                    <img src={member.photo_url} alt={member.name} className="h-64 w-full object-cover" />
                  ) : (
                    <div className="grid h-64 place-items-center bg-[#fffaf0] text-5xl font-black text-[#a8171d]">{member.name.charAt(0)}</div>
                  )}
                  <div className="p-6">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a8171d]">{member.role}</p>
                    <h2 className="mt-2 text-2xl font-black text-[#102344]">{member.name}</h2>
                    <div className="mt-3 grid gap-1 text-sm font-semibold text-slate-600">
                      <p><span className="text-[#102344]">Class:</span> {member.class_name || '-'}</p>
                      <p><span className="text-[#102344]">House:</span> {member.house_name || '-'}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-lg bg-white p-6 text-lg font-bold text-slate-700 shadow-sm">Student council details will be updated soon.</p>
          )
        ) : null}

        {page.sections ? (
          <div className="mt-10 grid gap-6">
            {page.sections.map((section) => (
              <article key={section.heading} className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="text-3xl font-black text-[#102344]">{section.heading}</h2>
                {section.paragraphs ? (
                  <div className="mt-4 grid gap-4 text-lg leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 rounded-md bg-[#fffaf0] p-3 font-semibold text-slate-700">
                        <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-[#a8171d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  )
}

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    if (!supabase) {
      setMessage('Supabase env missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
      return
    }

    setSubmitting(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setSubmitting(false)

    if (error) setMessage(error.message)
  }

  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#f8f3e9] px-4 py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <div className="grid place-items-center text-center">
          <img src={logo} alt="Shri Pragya Public School logo" className="h-20 w-20 object-contain" />
          <h1 className="mt-5 text-3xl font-black text-[#102344]">Admin Login</h1>
          <p className="mt-2 text-slate-600">Sign in to manage school website content.</p>
        </div>

        <label className="mt-8 grid gap-2 font-semibold text-slate-800">
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        </label>

        <label className="mt-4 grid gap-2 font-semibold text-slate-800">
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
        </label>

        {message ? <p className="mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700">{message}</p> : null}

        <button type="submit" disabled={submitting} className="mt-6 w-full rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">
          {submitting ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </main>
  )
}

function AdminPanel({ adminProfile, cmsPages, onLogout, onNavigate, onPageSaved, onResultsChanged, onHousesChanged, onNoticesChanged, onGalleryChanged, onStudentCouncilChanged }) {
  const [adminSection, setAdminSection] = useState('contacts')
  const [editingPage, setEditingPage] = useState(null)
  const [editorForm, setEditorForm] = useState({ title: '', href: '', group: '', eyebrow: '', content: '', contentMode: 'text', homeGalleryEyebrow: 'Gallery', homeGalleryTitle: 'Campus glimpses', is_published: true })
  const [editorMessage, setEditorMessage] = useState('')
  const [savingPage, setSavingPage] = useState(false)
  const [collectionMessage, setCollectionMessage] = useState('')
  const [adminSearch, setAdminSearch] = useState('')
  const [galleryForm, setGalleryForm] = useState({ folder: '', selectedFolder: '', photoTitle: '' })
  const [galleryFiles, setGalleryFiles] = useState([])
  const [campusGlimpsesTitle, setCampusGlimpsesTitle] = useState('')
  const [campusGlimpsesFiles, setCampusGlimpsesFiles] = useState([])
  const [resultForm, setResultForm] = useState({ title: '', year: '', imageUrl: '', sortOrder: '0', isActive: true })
  const [resultFile, setResultFile] = useState(null)
  const [noticeForm, setNoticeForm] = useState({ text: '', linkUrl: '', sortOrder: '0', isActive: true })
  const [studentCouncilForm, setStudentCouncilForm] = useState({ name: '', role: '', className: '', houseName: '', photoUrl: '', isActive: true })
  const [studentCouncilFile, setStudentCouncilFile] = useState(null)
  const [uploadingStudentCouncil, setUploadingStudentCouncil] = useState(false)
  const [houseForm, setHouseForm] = useState({ houseName: 'Blue House', houseColor: '#1d4ed8', captain: '', viceCaptain: '', juniorCaptain: '' })
  const [principalForm, setPrincipalForm] = useState({ name: '', role: '', detail: '', photoUrl: '' })
  const [admissionSubmissions, setAdmissionSubmissions] = useState([])
  const [contactSubmissions, setContactSubmissions] = useState([])
  const [careerSubmissions, setCareerSubmissions] = useState([])
  const [principalRecords, setPrincipalRecords] = useState([])
  const [houseRecords, setHouseRecords] = useState([])
  const [resultRecords, setResultRecords] = useState([])
  const [noticeRecords, setNoticeRecords] = useState([])
  const [galleryRecords, setGalleryRecords] = useState([])
  const [studentCouncilRecords, setStudentCouncilRecords] = useState([])
  const [editingPrincipalId, setEditingPrincipalId] = useState(null)
  const [editingHouseId, setEditingHouseId] = useState(null)
  const [editingResultId, setEditingResultId] = useState(null)
  const [editingNoticeId, setEditingNoticeId] = useState(null)
  const [editingStudentCouncilId, setEditingStudentCouncilId] = useState(null)
  const [uploadingResult, setUploadingResult] = useState(false)
  const [uploadingGallery, setUploadingGallery] = useState(false)

  const managedPages = navItems.flatMap((item) => {
    const parent = { label: item.label, href: item.href, group: 'Main Navigation' }
    const children = item.children?.map(([label, href]) => ({
      label,
      href,
      group: item.label,
    })) || []
    const groupedChildren = item.groups?.flatMap((group) => group.children.map(([label, href]) => ({
      label,
      href,
      group: `${item.label} / ${group.label}`,
    }))) || []

    return item.external ? [] : [parent, ...children, ...groupedChildren]
  })
    .filter((page) => {
      const slug = page.href.replace(/^\/|\/$/g, '') || 'home'
      return Boolean(contentPages[slug] || cmsPages[slug] || slug === 'home')
    })

  const adminTabs = [
    ['contacts', 'Contact Form Data'],
    ['careers', 'Career'],
    ['admissions', 'Student Admission Data'],
    ['student-council', 'Student Council Page'],
    ['campus-glimpses', 'Campus Glimpses'],
    ['gallery', 'Gallery'],
    ['results', 'Results'],
    ['notices', 'Notice Board'],
  ]

  const normalizedSearch = adminSearch.trim().toLowerCase()
  const matchesSearch = (...values) => {
    if (!normalizedSearch) return true
    return values.some((value) => String(value || '').toLowerCase().includes(normalizedSearch))
  }
  const filteredManagedPages = managedPages.filter((page) => matchesSearch(page.label, page.group, page.href))
  const filteredGalleryRecords = galleryRecords.filter((record) => matchesSearch(record.folder_title, record.title, record.image_url))
  const campusGlimpsesRecords = galleryRecords.filter((record) => getSlug(record.folder_title) === 'campus-glimpses')
  const filteredCampusGlimpsesRecords = campusGlimpsesRecords.filter((record) => matchesSearch(record.title, record.image_url, record.is_active ? 'shown' : 'hidden'))
  const filteredResultRecords = resultRecords.filter((record) => matchesSearch(record.title, record.result_year, record.image_url, record.is_active ? 'shown' : 'hidden'))
  const filteredNoticeRecords = noticeRecords.filter((record) => matchesSearch(record.notice_text, record.link_url, record.is_active ? 'active' : 'hidden'))
  const filteredStudentCouncilRecords = studentCouncilRecords.filter((record) => matchesSearch(record.name, record.role, record.class_name, record.house_name, record.is_active ? 'active' : 'hidden'))
  const filteredHouseRecords = houseRecords.filter((record) => matchesSearch(record.house_name, record.captain_name, record.vice_captain_name, record.junior_captain_name))
  const filteredPrincipalRecords = principalRecords.filter((record) => matchesSearch(record.name, record.role, record.detail))
  const filteredAdmissionSubmissions = admissionSubmissions.filter((item) => matchesSearch(item.student_name, item.class_applied, item.father_name, item.mother_name, item.phone, item.address, item.message))
  const filteredCareerSubmissions = careerSubmissions.filter((item) => matchesSearch(item.name, item.phone, item.email, item.position, item.qualification, item.experience, item.message))
  const filteredContactSubmissions = contactSubmissions.filter((item) => matchesSearch(item.name, item.phone, item.email, item.subject, item.message))
  const galleryFolderTitles = [...new Set(galleryRecords.map((record) => record.folder_title).filter(Boolean))]

  useEffect(() => {
    if (!supabase) return

    supabase.from('admission_enquiries').select('*').order('created_at', { ascending: false }).then(({ data }) => setAdmissionSubmissions(data || []))
    supabase.from('career_applications').select('*').order('created_at', { ascending: false }).then(({ data }) => setCareerSubmissions(data || []))
    supabase.from('contact_enquiries').select('*').order('created_at', { ascending: false }).then(({ data }) => setContactSubmissions(data || []))
    supabase.from('principal_teachers').select('*').order('sort_order', { ascending: true }).then(({ data }) => setPrincipalRecords(data || []))
    supabase.from('house_system').select('*').order('sort_order', { ascending: true }).then(({ data }) => setHouseRecords(data || []))
    supabase.from('results').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false }).then(({ data }) => setResultRecords(data || []))
    supabase.from('notices').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false }).then(({ data }) => setNoticeRecords(data || []))
    supabase.from('gallery_photos').select('*').order('created_at', { ascending: false }).then(({ data }) => setGalleryRecords(data || []))
    supabase.from('student_council').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false }).then(({ data }) => setStudentCouncilRecords(data || []))
  }, [])

  const openEditor = (page) => {
    const slug = page.href.replace(/^\/|\/$/g, '') || 'home'
    const existingPage = cmsPages[slug] || contentPages[slug]

    setEditingPage(page)
    setEditorMessage('')
    setEditorForm({
      title: existingPage?.title || page.label,
      href: page.href,
      group: page.group,
      eyebrow: existingPage?.eyebrow || page.group,
      content: existingPage?.contentMode === 'html' ? existingPage?.html || '' : existingPage?.paragraphs?.join('\n\n') || '',
      contentMode: existingPage?.contentMode || (existingPage?.html ? 'html' : 'text'),
      homeGalleryEyebrow: existingPage?.homeGalleryEyebrow || 'Gallery',
      homeGalleryTitle: existingPage?.homeGalleryTitle || 'Campus glimpses',
      is_published: true,
    })
  }

  const saveEditor = async () => {
    if (!editingPage) return

    if (!supabase) {
      setEditorMessage('Supabase env missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
      return
    }

    setSavingPage(true)
    setEditorMessage('')

    const slug = editorForm.href.replace(/^\/|\/$/g, '') || 'home'
    const isHtmlMode = editorForm.contentMode === 'html'
    const pageRecord = {
      slug,
      title: editorForm.title,
      eyebrow: editorForm.eyebrow,
      body: {
        group: editorForm.group,
        href: editorForm.href,
        content_mode: editorForm.contentMode,
        html: isHtmlMode ? editorForm.content : '',
        paragraphs: isHtmlMode ? [] : editorForm.content.split('\n').map((line) => line.trim()).filter(Boolean),
        home_gallery_eyebrow: slug === 'home' ? editorForm.homeGalleryEyebrow : undefined,
        home_gallery_title: slug === 'home' ? editorForm.homeGalleryTitle : undefined,
      },
      is_published: editorForm.is_published,
    }
    const { error } = await supabase.from('pages').upsert(pageRecord, { onConflict: 'slug' })

    setSavingPage(false)
    if (error) {
      setEditorMessage(error.message)
      return
    }

    onPageSaved(slug, {
      title: pageRecord.title,
      eyebrow: pageRecord.eyebrow,
      contentMode: pageRecord.body.content_mode,
      html: pageRecord.body.html,
      paragraphs: pageRecord.body.paragraphs,
      homeGalleryEyebrow: pageRecord.body.home_gallery_eyebrow,
      homeGalleryTitle: pageRecord.body.home_gallery_title,
    })
    setEditorMessage('Saved successfully. Website page updated.')
  }

  const uploadAdminImage = async (file, folder) => {
    if (!file) return ''

    const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-')
    const filePath = `${folder}/${Date.now()}-${safeName}`
    const { error } = await supabase.storage.from(storageBucket).upload(filePath, file, {
      cacheControl: '3600',
      contentType: file.type,
    })

    if (error) {
      if (error.message?.toLowerCase().includes('bucket not found')) {
        throw new Error(`Supabase Storage bucket "${storageBucket}" nahi mila. Supabase me "${storageBucket}" public bucket create karo ya supabase_schema.sql run karo.`)
      }

      throw error
    }

    return supabase.storage.from(storageBucket).getPublicUrl(filePath).data.publicUrl
  }

  const saveResult = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!editingResultId && !resultFile) return setCollectionMessage('Result photo upload karo.')
    if (editingResultId && !resultForm.imageUrl.trim() && !resultFile) return setCollectionMessage('Result photo upload karo.')

    setUploadingResult(true)
    setCollectionMessage('')

    try {
      const uploadedUrl = resultFile ? await uploadAdminImage(resultFile, 'results') : resultForm.imageUrl.trim()
      const payload = {
        title: resultForm.title,
        result_year: resultForm.year,
        image_url: uploadedUrl,
        sort_order: Number(resultForm.sortOrder) || 0,
        is_active: resultForm.isActive,
      }
      const query = editingResultId
        ? supabase.from('results').update(payload).eq('id', editingResultId).select()
        : supabase.from('results').insert(payload).select()
      const { data, error } = await query

      if (error) throw error

      const record = data?.[0]
      setResultRecords((records) => {
        const nextRecords = editingResultId ? records.map((item) => item.id === editingResultId ? record : item) : [record, ...records]
        return nextRecords.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
      })
      onResultsChanged((records) => {
        const withoutCurrent = records.filter((item) => item.id !== record.id)
        const nextRecords = record.is_active === false ? withoutCurrent : [record, ...withoutCurrent]
        return nextRecords.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
      })
      setEditingResultId(null)
      setResultForm({ title: '', year: '', imageUrl: '', sortOrder: '0', isActive: true })
      setResultFile(null)
      setCollectionMessage('Result photo saved.')
    } catch (error) {
      setCollectionMessage(error.message)
    } finally {
      setUploadingResult(false)
    }
  }

  const editResult = (record) => {
    setEditingResultId(record.id)
    setResultForm({
      title: record.title || '',
      year: record.result_year || '',
      imageUrl: record.image_url || '',
      sortOrder: String(record.sort_order || 0),
      isActive: record.is_active !== false,
    })
    setResultFile(null)
  }

  const deleteResult = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('results').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setResultRecords((records) => records.filter((item) => item.id !== record.id))
    onResultsChanged((records) => records.filter((item) => item.id !== record.id))
    setCollectionMessage('Result photo removed.')
  }

  const saveNotice = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!noticeForm.text.trim()) return setCollectionMessage('Notice text add karo.')

    const payload = {
      notice_text: noticeForm.text.trim(),
      link_url: noticeForm.linkUrl.trim() || null,
      sort_order: Number(noticeForm.sortOrder) || 0,
      is_active: noticeForm.isActive,
    }
    const query = editingNoticeId
      ? supabase.from('notices').update(payload).eq('id', editingNoticeId).select()
      : supabase.from('notices').insert(payload).select()
    const { data, error } = await query
    if (error) return setCollectionMessage(error.message)

    const record = data?.[0]
    setNoticeRecords((records) => {
      const nextRecords = editingNoticeId ? records.map((item) => item.id === editingNoticeId ? record : item) : [record, ...records]
      return nextRecords.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    })
    onNoticesChanged((records) => {
      const withoutCurrent = records.filter((item) => item.id !== record.id)
      const nextRecords = record.is_active === false ? withoutCurrent : [record, ...withoutCurrent]
      return nextRecords.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    })
    setEditingNoticeId(null)
    setNoticeForm({ text: '', linkUrl: '', sortOrder: '0', isActive: true })
    setCollectionMessage('Notice saved.')
  }

  const editNotice = (record) => {
    setEditingNoticeId(record.id)
    setNoticeForm({
      text: record.notice_text || '',
      linkUrl: record.link_url || '',
      sortOrder: String(record.sort_order || 0),
      isActive: record.is_active !== false,
    })
  }

  const deleteNotice = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('notices').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setNoticeRecords((records) => records.filter((item) => item.id !== record.id))
    onNoticesChanged((records) => records.filter((item) => item.id !== record.id))
    if (editingNoticeId === record.id) {
      setEditingNoticeId(null)
      setNoticeForm({ text: '', linkUrl: '', sortOrder: '0', isActive: true })
    }
    setCollectionMessage('Notice removed.')
  }

  const saveStudentCouncil = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!studentCouncilForm.name.trim() || !studentCouncilForm.role.trim()) return setCollectionMessage('Name and role are required.')

    setUploadingStudentCouncil(true)
    setCollectionMessage('')

    try {
      const uploadedUrl = studentCouncilFile ? await uploadAdminImage(studentCouncilFile, 'student-council') : studentCouncilForm.photoUrl.trim()
      
      const payload = {
        name: studentCouncilForm.name.trim(),
        role: studentCouncilForm.role.trim(),
        class_name: studentCouncilForm.className.trim() || null,
        house_name: studentCouncilForm.houseName.trim() || null,
        photo_url: uploadedUrl || null,
        is_active: studentCouncilForm.isActive,
      }
      const query = editingStudentCouncilId
        ? supabase.from('student_council').update(payload).eq('id', editingStudentCouncilId).select()
        : supabase.from('student_council').insert(payload).select()
      const { data, error } = await query
      if (error) throw error

      const record = data?.[0]
      setStudentCouncilRecords((records) => {
        const nextRecords = editingStudentCouncilId ? records.map((item) => item.id === editingStudentCouncilId ? record : item) : [record, ...records]
        return nextRecords.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
      })
      onStudentCouncilChanged((records) => {
        const withoutCurrent = records.filter((item) => item.id !== record.id)
        const nextRecords = record.is_active === false ? withoutCurrent : [record, ...withoutCurrent]
        return nextRecords.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
      })
      setEditingStudentCouncilId(null)
      setStudentCouncilForm({ name: '', role: '', className: '', houseName: '', photoUrl: '', isActive: true })
      setStudentCouncilFile(null)
      setCollectionMessage('Student council detail saved.')
    } catch (error) {
      setCollectionMessage(error.message)
    } finally {
      setUploadingStudentCouncil(false)
    }
  }

  const editStudentCouncil = (record) => {
    setEditingStudentCouncilId(record.id)
    setStudentCouncilForm({
      name: record.name || '',
      role: record.role || '',
      className: record.class_name || '',
      houseName: record.house_name || '',
      photoUrl: record.photo_url || '',
      isActive: record.is_active !== false,
    })
    setStudentCouncilFile(null)
  }

  const deleteStudentCouncil = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('student_council').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setStudentCouncilRecords((records) => records.filter((item) => item.id !== record.id))
    onStudentCouncilChanged((records) => records.filter((item) => item.id !== record.id))
    if (editingStudentCouncilId === record.id) {
      setEditingStudentCouncilId(null)
      setStudentCouncilForm({ name: '', role: '', className: '', houseName: '', sortOrder: '0', isActive: true })
    }
    setCollectionMessage('Student council detail removed.')
  }

  const saveGalleryPhotos = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const folderTitle = galleryForm.selectedFolder || galleryForm.folder
    if (!folderTitle.trim()) return setCollectionMessage('Folder select karo ya new folder name add karo.')
    if (galleryFiles.length === 0) return setCollectionMessage('Ek ya multiple photos select karo.')

    setUploadingGallery(true)
    setCollectionMessage('')

    try {
      const safeFolder = folderTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      const uploadedRecords = await Promise.all(galleryFiles.map(async (file, index) => {
        const imageUrl = await uploadAdminImage(file, `gallery/${safeFolder}`)
        const baseTitle = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')

        return {
          folder_title: folderTitle.trim(),
          title: galleryForm.photoTitle ? `${galleryForm.photoTitle}${galleryFiles.length > 1 ? ` ${index + 1}` : ''}` : baseTitle,
          image_url: imageUrl,
        }
      }))

      const { data, error } = await supabase.from('gallery_photos').insert(uploadedRecords).select()

      if (error) throw error

      setGalleryRecords((records) => [...(data || []), ...records])
      onGalleryChanged((records) => [...(data || []), ...records])
      setGalleryForm({ folder: '', selectedFolder: folderTitle.trim(), photoTitle: '' })
      setGalleryFiles([])
      setCollectionMessage(`${data?.length || 0} gallery photo saved.`)
    } catch (error) {
      setCollectionMessage(error.message)
    } finally {
      setUploadingGallery(false)
    }
  }

  const saveCampusGlimpsesPhotos = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (campusGlimpsesFiles.length === 0) return setCollectionMessage('Campus glimpses ke liye photos select karo.')

    setUploadingGallery(true)
    setCollectionMessage('')

    try {
      const uploadedRecords = await Promise.all(campusGlimpsesFiles.map(async (file, index) => {
        const imageUrl = await uploadAdminImage(file, 'gallery/campus-glimpses')
        const baseTitle = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')

        return {
          folder_title: 'Campus glimpses',
          title: campusGlimpsesTitle ? `${campusGlimpsesTitle}${campusGlimpsesFiles.length > 1 ? ` ${index + 1}` : ''}` : baseTitle,
          image_url: imageUrl,
        }
      }))

      const { data, error } = await supabase.from('gallery_photos').insert(uploadedRecords).select()

      if (error) throw error

      setGalleryRecords((records) => [...(data || []), ...records])
      onGalleryChanged((records) => [...(data || []), ...records])
      setCampusGlimpsesTitle('')
      setCampusGlimpsesFiles([])
      setCollectionMessage(`${data?.length || 0} campus glimpses photo saved.`)
    } catch (error) {
      setCollectionMessage(error.message)
    } finally {
      setUploadingGallery(false)
    }
  }

  const deleteGalleryPhoto = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('gallery_photos').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setGalleryRecords((records) => records.filter((item) => item.id !== record.id))
    onGalleryChanged((records) => records.filter((item) => item.id !== record.id))
    setCollectionMessage('Gallery photo removed.')
  }

  const deleteGalleryFolder = async (folderTitle) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('gallery_photos').delete().eq('folder_title', folderTitle)
    if (error) return setCollectionMessage(error.message)

    setGalleryRecords((records) => records.filter((item) => item.folder_title !== folderTitle))
    onGalleryChanged((records) => records.filter((item) => item.folder_title !== folderTitle))
    setCollectionMessage('Gallery folder removed.')
  }

  const savePrincipal = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')

    const payload = { name: principalForm.name, role: principalForm.role, detail: principalForm.detail, photo_url: principalForm.photoUrl }
    const query = editingPrincipalId
      ? supabase.from('principal_teachers').update(payload).eq('id', editingPrincipalId).select()
      : supabase.from('principal_teachers').insert(payload).select()
    const { data, error } = await query
    if (error) return setCollectionMessage(error.message)

    const record = data?.[0]
    setPrincipalRecords((records) => editingPrincipalId ? records.map((item) => item.id === editingPrincipalId ? record : item) : [record, ...records])
    setEditingPrincipalId(null)
    setPrincipalForm({ name: '', role: '', detail: '', photoUrl: '' })
    setCollectionMessage('Staff detail saved.')
  }

  const editPrincipal = (record) => {
    setEditingPrincipalId(record.id)
    setPrincipalForm({ name: record.name || '', role: record.role || '', detail: record.detail || '', photoUrl: record.photo_url || '' })
  }

  const deletePrincipal = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')

    const { error } = await supabase.from('principal_teachers').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setPrincipalRecords((records) => records.filter((item) => item.id !== record.id))
    if (editingPrincipalId === record.id) {
      setEditingPrincipalId(null)
      setPrincipalForm({ name: '', role: '', detail: '', photoUrl: '' })
    }
    setCollectionMessage('Staff detail removed.')
  }

  const saveHouse = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')

    const payload = {
      house_name: houseForm.houseName,
      house_color: houseForm.houseColor,
      captain_name: houseForm.captain,
      vice_captain_name: houseForm.viceCaptain,
      junior_captain_name: houseForm.juniorCaptain,
    }
    const query = editingHouseId
      ? supabase.from('house_system').update(payload).eq('id', editingHouseId).select()
      : supabase.from('house_system').insert(payload).select()
    const { data, error } = await query
    if (error) return setCollectionMessage(error.message)

    const record = data?.[0]
    setHouseRecords((records) => editingHouseId ? records.map((item) => item.id === editingHouseId ? record : item) : [record, ...records])
    onHousesChanged((records) => {
      const withoutCurrent = records.filter((item) => item.id !== record.id)
      return [record, ...withoutCurrent].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    })
    setEditingHouseId(null)
    setHouseForm({ houseName: 'Blue House', houseColor: '#1d4ed8', captain: '', viceCaptain: '', juniorCaptain: '' })
    setCollectionMessage('House captains saved.')
  }

  const editHouse = (record) => {
    setEditingHouseId(record.id)
    setHouseForm({
      houseName: record.house_name || 'Blue House',
      houseColor: record.house_color || '#1d4ed8',
      captain: record.captain_name || '',
      viceCaptain: record.vice_captain_name || '',
      juniorCaptain: record.junior_captain_name || '',
    })
  }

  return (
    <main className="min-h-screen bg-[#eef2f7]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#a8171d]">Admin Workspace</p>
              <h1 className="mt-2 text-3xl font-black text-[#102344]">School Website Admin Panel</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">Logged in as {adminProfile.email}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/" onClick={(event) => onNavigate(event, '/')} className="rounded-md bg-[#ffc400] px-5 py-3 text-sm font-black text-[#102344] shadow-sm">Open Website</a>
              <button type="button" onClick={onLogout} className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:border-[#a8171d] hover:text-[#a8171d]">Logout</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[270px_1fr] lg:items-start">
          <aside className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-4">
            <div className="border-b border-slate-200 px-3 py-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Manage</p>
              <p className="mt-1 text-lg font-black text-[#102344]">Website CMS</p>
            </div>
            <div className="mt-3 grid gap-1">
            {adminTabs.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setAdminSection(key)
                  setCollectionMessage('')
                }}
                className={`flex items-center justify-between rounded-md px-4 py-3 text-left text-sm font-black transition ${adminSection === key ? 'bg-[#a8171d] text-white shadow-sm' : 'text-slate-700 hover:bg-[#fffaf0] hover:text-[#a8171d]'}`}
              >
                <span>{label}</span>
                <Icon name="chevron" className={`h-4 w-4 -rotate-90 ${adminSection === key ? 'text-white' : 'text-slate-400'}`} />
              </button>
            ))}
            </div>
          </aside>

          <div className="min-w-0">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a8171d]">Dashboard</p>
              <h2 className="mt-1 text-2xl font-black text-[#102344]">{adminTabs.find(([key]) => key === adminSection)?.[1] || 'Pages'}</h2>
            </div>
            <input
              value={adminSearch}
              onChange={(event) => setAdminSearch(event.target.value)}
              placeholder="Search admin data..."
              className="w-full rounded-md border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-[#a8171d] lg:max-w-sm"
            />
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            ['Pages', managedPages.length],
            ['Results', resultRecords.length],
            ['Facilities', facilities.length],
            ['Classes', classOptions.length],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[#a8171d]">{label}</p>
              <p className="mt-2 text-4xl font-black text-[#102344]">{value}</p>
            </div>
          ))}
        </div>

        {adminSection === 'pages' ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Page Manager</p>
              <h2 className="mt-2 text-3xl font-black text-[#102344]">All Website Pages</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">Edit page text, HTML content and publishing status from one list.</p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  {['Page', 'Section', 'Route', 'Status', 'Actions'].map((head) => <th key={head} className="border-b border-slate-200 p-4 font-black uppercase tracking-wide">{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {filteredManagedPages.map((page) => {
                  const slug = page.href.replace(/^\/|\/$/g, '') || 'home'
                  const pageData = cmsPages[slug] || contentPages[slug]

                  return (
                    <tr key={`${page.group}-${page.href}`} className="border-b border-slate-100 last:border-b-0 hover:bg-[#fffaf0]">
                      <td className="p-4">
                        <p className="font-black text-[#102344]">{page.label}</p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">{pageData?.title || page.label}</p>
                      </td>
                      <td className="p-4">
                        <span className="rounded-full bg-[#fffaf0] px-3 py-1 text-xs font-black text-[#a8171d]">{page.group}</span>
                      </td>
                      <td className="p-4 font-mono text-xs font-semibold text-slate-600">{page.href}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">Published</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <a href={page.href} onClick={(event) => onNavigate(event, page.href)} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-black text-slate-700 transition hover:border-[#06284d] hover:text-[#06284d]">View</a>
                          <button type="button" onClick={() => openEditor(page)} className="rounded-md bg-[#a8171d] px-3 py-2 text-xs font-black text-white transition hover:bg-[#06284d]">Edit</button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {filteredManagedPages.length === 0 ? <p className="p-5 font-semibold text-slate-600">No pages found.</p> : null}
          </div>
        </div>
        ) : null}

        {adminSection === 'notices' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Notice Board</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Add Notice</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr_0.45fr]">
              <input value={noticeForm.text} onChange={(event) => setNoticeForm({ ...noticeForm, text: event.target.value })} placeholder="Notice text" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={noticeForm.linkUrl} onChange={(event) => setNoticeForm({ ...noticeForm, linkUrl: event.target.value })} placeholder="Optional clickable link URL" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="number" value={noticeForm.sortOrder} onChange={(event) => setNoticeForm({ ...noticeForm, sortOrder: event.target.value })} placeholder="Order" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            </div>
            <label className="mt-4 flex w-fit items-center gap-3 rounded-md bg-[#fffaf0] px-4 py-3 font-bold text-[#102344]">
              <input type="checkbox" checked={noticeForm.isActive} onChange={(event) => setNoticeForm({ ...noticeForm, isActive: event.target.checked })} className="h-5 w-5 accent-[#a8171d]" />
              Show this notice
            </label>
            <button type="button" onClick={saveNotice} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">{editingNoticeId ? 'Update Notice' : 'Add Notice'}</button>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Notice', 'Link', 'Order', 'Status', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredNoticeRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3 font-bold text-[#102344]">{record.notice_text}</td>
                      <td className="max-w-[260px] truncate p-3">{record.link_url || '-'}</td>
                      <td className="p-3">{record.sort_order || 0}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${record.is_active === false ? 'bg-slate-200 text-slate-600' : 'bg-green-100 text-green-700'}`}>
                          {record.is_active === false ? 'Hidden' : 'Shown'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editNotice(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deleteNotice(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredNoticeRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No notices found.</p> : null}
            </div>
          </div>
        ) : null}

        {editingPage ? (
          <div className="fixed inset-0 z-[10000] overflow-y-auto bg-slate-950/70 px-4 py-6" onClick={() => setEditingPage(null)}>
            <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Editor</p>
                  <h2 className="mt-2 text-3xl font-black text-[#102344]">Edit {editingPage.label}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{editingPage.href}</p>
                </div>
                <button type="button" onClick={() => setEditingPage(null)} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700">Close</button>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <label className="grid gap-2 font-semibold text-slate-800">
                  Page Title
                  <input value={editorForm.title} onChange={(event) => setEditorForm({ ...editorForm, title: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
                <label className="grid gap-2 font-semibold text-slate-800">
                  Eyebrow
                  <input value={editorForm.eyebrow} onChange={(event) => setEditorForm({ ...editorForm, eyebrow: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
                <label className="grid gap-2 font-semibold text-slate-800">
                  URL
                  <input value={editorForm.href} onChange={(event) => setEditorForm({ ...editorForm, href: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
                <label className="grid gap-2 font-semibold text-slate-800">
                  Group
                  <input value={editorForm.group} onChange={(event) => setEditorForm({ ...editorForm, group: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
                {(editorForm.href.replace(/^\/|\/$/g, '') || 'home') === 'home' ? (
                  <div className="grid gap-4 rounded-lg bg-[#fffaf0] p-4 lg:col-span-2 lg:grid-cols-2">
                    <label className="grid gap-2 font-semibold text-slate-800">
                      Home Gallery Label
                      <input value={editorForm.homeGalleryEyebrow} onChange={(event) => setEditorForm({ ...editorForm, homeGalleryEyebrow: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                    </label>
                    <label className="grid gap-2 font-semibold text-slate-800">
                      Home Gallery Title
                      <input value={editorForm.homeGalleryTitle} onChange={(event) => setEditorForm({ ...editorForm, homeGalleryTitle: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                    </label>
                  </div>
                ) : null}
                <div className="grid gap-2 font-semibold text-slate-800 lg:col-span-2">
                  Content Type
                  <div className="flex w-fit overflow-hidden rounded-md border border-slate-300 bg-white p-1">
                    {[
                      ['text', 'Text'],
                      ['html', 'HTML Code'],
                    ].map(([mode, label]) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setEditorForm({ ...editorForm, contentMode: mode })}
                        className={`rounded px-4 py-2 text-sm font-black transition ${editorForm.contentMode === mode ? 'bg-[#a8171d] text-white' : 'text-[#102344] hover:bg-[#fffaf0]'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="grid gap-2 font-semibold text-slate-800 lg:col-span-2">
                  {editorForm.contentMode === 'html' ? 'Page HTML Code' : 'Page Content'}
                  <textarea value={editorForm.content} onChange={(event) => setEditorForm({ ...editorForm, content: event.target.value })} rows="9" className={`rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d] ${editorForm.contentMode === 'html' ? 'font-mono text-sm' : ''}`} />
                </label>
                {editorForm.contentMode === 'html' ? (
                  <p className="rounded-md bg-[#fffaf0] p-3 text-sm font-semibold text-slate-600 lg:col-span-2">
                    HTML mode me headings, paragraphs, lists, links, tables aur images ka markup paste kar sakte ho. Admin trusted content hi paste kare.
                  </p>
                ) : null}
                <label className="flex items-center gap-3 font-semibold text-slate-800">
                  <input type="checkbox" checked={editorForm.is_published} onChange={(event) => setEditorForm({ ...editorForm, is_published: event.target.checked })} className="h-5 w-5 accent-[#a8171d]" />
                  Published
                </label>
              </div>

              {editorMessage ? <p className="mt-4 rounded-md bg-[#fffaf0] p-3 text-sm font-semibold text-slate-700">{editorMessage}</p> : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={saveEditor} disabled={savingPage} className="rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">
                  {savingPage ? 'Saving...' : 'Save Page'}
                </button>
                <a href={editorForm.href} onClick={(event) => onNavigate(event, editorForm.href)} className="rounded-md bg-[#06284d] px-6 py-3 font-bold text-white">Preview</a>
              </div>
            </div>
          </div>
        ) : null}

        {adminSection === 'student-council' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Student Council</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Manage Student Council Page</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <input value={studentCouncilForm.name} onChange={(event) => setStudentCouncilForm({ ...studentCouncilForm, name: event.target.value })} placeholder="Student name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <select value={studentCouncilForm.role} onChange={(event) => setStudentCouncilForm({ ...studentCouncilForm, role: event.target.value })} required className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
                <option value="" disabled>Select Role</option>
                <option>Head Boy</option>
                <option>Head Girl</option>
                <option>Captain</option>
                <option>Vice Captain</option>
                <option>Junior Captain</option>
                <option>President</option>
                <option>Vice President</option>
                <option>Sports Secretary</option>
                <option>Cultural Secretary</option>
                <option>Literary Secretary</option>
                <option>Discipline Incharge</option>
              </select>
              <input value={studentCouncilForm.className} onChange={(event) => setStudentCouncilForm({ ...studentCouncilForm, className: event.target.value })} placeholder="Class" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <select value={studentCouncilForm.houseName || ''} onChange={(event) => setStudentCouncilForm({ ...studentCouncilForm, houseName: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
                <option value="">Select House (Optional)</option>
                <option value="Blue House">Blue House</option>
                <option value="Green House">Green House</option>
                <option value="Red House">Red House</option>
                <option value="Yellow House">Yellow House</option>
              </select>
              <label className="grid gap-1 font-semibold text-slate-800">
                <span className="text-xs text-slate-500">Student Photo (Optional)</span>
                <input type="file" accept="image/*" onChange={(event) => setStudentCouncilFile(event.target.files?.[0] || null)} className="rounded-md border border-slate-300 px-4 py-1 text-sm font-semibold outline-none file:mr-2 file:rounded file:border-0 file:bg-[#ffc400] file:px-2 file:py-1 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
              </label>
              <label className="flex items-center gap-3 rounded-md border border-slate-300 px-4 py-3 font-semibold text-slate-700">
                <input type="checkbox" checked={studentCouncilForm.isActive} onChange={(event) => setStudentCouncilForm({ ...studentCouncilForm, isActive: event.target.checked })} />
                Show on website
              </label>
            </div>
            <button type="button" onClick={saveStudentCouncil} disabled={uploadingStudentCouncil} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">
              {uploadingStudentCouncil ? 'Saving...' : editingStudentCouncilId ? 'Update Member' : 'Add Member'}
            </button>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Name', 'Role', 'Class', 'House', 'Status', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredStudentCouncilRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3">
                        {record.photo_url ? (
                          <img src={record.photo_url} alt="" className="h-10 w-10 rounded-full object-cover" />
                        ) : (
                          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#fffaf0] text-sm font-bold text-[#a8171d]">
                            {record.name.charAt(0)}
                          </div>
                        )}
                      </td>
                      <td className="p-3 font-bold">{record.name}</td>
                      <td className="p-3">{record.role}</td>
                      <td className="p-3">{record.class_name || '-'}</td>
                      <td className="p-3">{record.house_name || '-'}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${record.is_active === false ? 'bg-slate-200 text-slate-600' : 'bg-green-100 text-green-700'}`}>
                          {record.is_active === false ? 'Hidden' : 'Shown'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editStudentCouncil(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deleteStudentCouncil(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredStudentCouncilRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No student council records found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'campus-glimpses' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Homepage Gallery</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Campus Glimpses Photos</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">Ye photos home page ke Gallery / Campus glimpses section me show hongi.</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
              <input value={campusGlimpsesTitle} onChange={(event) => setCampusGlimpsesTitle(event.target.value)} placeholder="Photo title" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" multiple onChange={(event) => setCampusGlimpsesFiles(Array.from(event.target.files || []))} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
            </div>
            <button type="button" onClick={saveCampusGlimpsesPhotos} disabled={uploadingGallery} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{uploadingGallery ? 'Uploading...' : `Upload ${campusGlimpsesFiles.length || ''} Campus Photo${campusGlimpsesFiles.length > 1 ? 's' : ''}`}</button>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Preview', 'Title', 'Folder', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredCampusGlimpsesRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3"><img src={record.image_url} alt={record.title} className="h-14 w-20 rounded object-cover" /></td>
                      <td className="p-3 font-bold">{record.title}</td>
                      <td className="p-3">{record.folder_title}</td>
                      <td className="p-3"><button type="button" onClick={() => deleteGalleryPhoto(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredCampusGlimpsesRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No campus glimpses photos found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'gallery' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Gallery</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Folders & Event Photos</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">Home page ke Gallery / Campus glimpses section me photo dikhane ke liye folder name <span className="font-black text-[#a8171d]">Campus glimpses</span> rakho.</p>

            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <select value={galleryForm.selectedFolder} onChange={(event) => setGalleryForm({ ...galleryForm, selectedFolder: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
                <option value="">Select existing folder</option>
                {galleryFolderTitles.map((folderTitle) => (
                  <option key={folderTitle}>{folderTitle}</option>
                ))}
              </select>
              <input value={galleryForm.folder} onChange={(event) => setGalleryForm({ ...galleryForm, folder: event.target.value, selectedFolder: '' })} placeholder="Or new folder name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={galleryForm.photoTitle} onChange={(event) => setGalleryForm({ ...galleryForm, photoTitle: event.target.value })} placeholder="Photo title" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" multiple onChange={(event) => setGalleryFiles(Array.from(event.target.files || []))} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">Existing folder select karo ya new folder name add karo, phir browser se ek ya multiple photos upload karo.</p>
            <button type="button" onClick={saveGalleryPhotos} disabled={uploadingGallery} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{uploadingGallery ? 'Uploading...' : `Upload ${galleryFiles.length || ''} Gallery Photo${galleryFiles.length > 1 ? 's' : ''}`}</button>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {galleryFolderTitles.map((folderTitle) => (
                <article key={folderTitle} className="rounded-lg border border-slate-200 bg-[#fffaf0] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black text-[#102344]">{folderTitle}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{galleryRecords.filter((record) => record.folder_title === folderTitle).length} photos</p>
                    </div>
                    <button type="button" onClick={() => deleteGalleryFolder(folderTitle)} className="rounded bg-red-600 px-3 py-2 text-sm font-bold text-white">Remove Folder</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Folder', 'Title', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredGalleryRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3"><img src={record.image_url} alt={record.title} className="h-14 w-20 rounded object-cover" /></td>
                      <td className="p-3 font-bold">{record.folder_title}</td>
                      <td className="p-3">{record.title}</td>
                      <td className="p-3"><button type="button" onClick={() => deleteGalleryPhoto(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredGalleryRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No gallery photos found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'results' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Results</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Add Result Photo</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <input value={resultForm.title} onChange={(event) => setResultForm({ ...resultForm, title: event.target.value })} placeholder="Result title" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={resultForm.year} onChange={(event) => setResultForm({ ...resultForm, year: event.target.value })} placeholder="Year" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="number" value={resultForm.sortOrder} onChange={(event) => setResultForm({ ...resultForm, sortOrder: event.target.value })} placeholder="Display order" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" onChange={(event) => setResultFile(event.target.files?.[0] || null)} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
            </div>
            <label className="mt-4 flex w-fit items-center gap-3 rounded-md bg-[#fffaf0] px-4 py-3 font-bold text-[#102344]">
              <input type="checkbox" checked={resultForm.isActive} onChange={(event) => setResultForm({ ...resultForm, isActive: event.target.checked })} className="h-5 w-5 accent-[#a8171d]" />
              Show this image on website
            </label>
            <p className="mt-3 text-sm font-semibold text-slate-600">Browser se result photo upload karo. Edit mode me new file select karoge to old photo replace ho jayegi. Sirf checked images public Result section me show hongi.</p>
            <button type="button" onClick={saveResult} disabled={uploadingResult} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{uploadingResult ? 'Saving...' : editingResultId ? 'Update Result Photo' : 'Add Result Photo'}</button>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Title', 'Year', 'Order', 'Website', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredResultRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3">
                        <img src={record.image_url} alt={record.title} className="h-14 w-20 rounded object-cover" />
                      </td>
                      <td className="p-3 font-bold">{record.title}</td>
                      <td className="p-3">{record.result_year || '-'}</td>
                      <td className="p-3">{record.sort_order || 0}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${record.is_active === false ? 'bg-slate-200 text-slate-600' : 'bg-green-100 text-green-700'}`}>
                          {record.is_active === false ? 'Hidden' : 'Shown'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editResult(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deleteResult(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredResultRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No result photos found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'houses' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">House System</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Update House Captains</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <select value={houseForm.houseName} onChange={(event) => setHouseForm({ ...houseForm, houseName: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
                {['Blue House', 'Green House', 'Red House', 'Yellow House'].map((house) => <option key={house}>{house}</option>)}
              </select>
              <input value={houseForm.captain} onChange={(event) => setHouseForm({ ...houseForm, captain: event.target.value })} placeholder="Captain" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={houseForm.viceCaptain} onChange={(event) => setHouseForm({ ...houseForm, viceCaptain: event.target.value })} placeholder="Vice Captain" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={houseForm.juniorCaptain} onChange={(event) => setHouseForm({ ...houseForm, juniorCaptain: event.target.value })} placeholder="Junior Captain" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={houseForm.houseColor} onChange={(event) => setHouseForm({ ...houseForm, houseColor: event.target.value })} placeholder="House color" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            </div>
            <button type="button" onClick={saveHouse} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">{editingHouseId ? 'Update House' : 'Save House'}</button>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['House', 'Captain', 'Vice Captain', 'Junior Captain', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredHouseRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3 font-bold" style={{ color: record.house_color }}>{record.house_name}</td>
                      <td className="p-3">{record.captain_name || '-'}</td>
                      <td className="p-3">{record.vice_captain_name || '-'}</td>
                      <td className="p-3">{record.junior_captain_name || '-'}</td>
                      <td className="p-3"><button type="button" onClick={() => editHouse(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {adminSection === 'principal' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Principal & Teachers</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Add Staff Detail</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <input value={principalForm.name} onChange={(event) => setPrincipalForm({ ...principalForm, name: event.target.value })} placeholder="Name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={principalForm.role} onChange={(event) => setPrincipalForm({ ...principalForm, role: event.target.value })} placeholder="Role" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={principalForm.detail} onChange={(event) => setPrincipalForm({ ...principalForm, detail: event.target.value })} placeholder="Detail" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={principalForm.photoUrl} onChange={(event) => setPrincipalForm({ ...principalForm, photoUrl: event.target.value })} placeholder="Photo URL" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
            </div>
            <button type="button" onClick={savePrincipal} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">{editingPrincipalId ? 'Update Staff' : 'Save Staff'}</button>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Name', 'Role', 'Detail', 'Photo', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredPrincipalRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3 font-bold">{record.name}</td>
                      <td className="p-3">{record.role}</td>
                      <td className="p-3">{record.detail || '-'}</td>
                      <td className="p-3">{record.photo_url ? 'Added' : '-'}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editPrincipal(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deletePrincipal(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {adminSection === 'admissions' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Submissions</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Admission Forms</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Date', 'Student', 'Class', 'Father', 'Mother', 'DOB', 'Gender', 'Phone', 'Address', 'Message'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmissionSubmissions.map((item) => (
                    <tr key={item.id} className="border-b border-slate-200">
                      <td className="p-3">{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className="p-3 font-bold">{item.student_name}</td>
                      <td className="p-3">{item.class_applied}</td>
                      <td className="p-3">{item.father_name}</td>
                      <td className="p-3">{item.mother_name}</td>
                      <td className="p-3">{item.dob}</td>
                      <td className="p-3">{item.gender}</td>
                      <td className="p-3">{item.phone}</td>
                      <td className="p-3">{item.address}</td>
                      <td className="p-3">{item.message || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredAdmissionSubmissions.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No admission forms found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'careers' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Submissions</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Career Applications</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Date', 'Name', 'Position', 'Qualification', 'Experience', 'Phone', 'Email', 'Message'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredCareerSubmissions.map((item) => (
                    <tr key={item.id} className="border-b border-slate-200">
                      <td className="p-3">{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className="p-3 font-bold">{item.name}</td>
                      <td className="p-3">{item.position}</td>
                      <td className="p-3">{item.qualification || '-'}</td>
                      <td className="p-3">{item.experience || '-'}</td>
                      <td className="p-3">{item.phone}</td>
                      <td className="p-3">{item.email || '-'}</td>
                      <td className="p-3">{item.message || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredCareerSubmissions.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No career applications found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'contacts' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Submissions</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Contact Enquiries</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Date', 'Name', 'Phone', 'Email', 'Subject', 'Message'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredContactSubmissions.map((item) => (
                    <tr key={item.id} className="border-b border-slate-200">
                      <td className="p-3">{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className="p-3 font-bold">{item.name}</td>
                      <td className="p-3">{item.phone}</td>
                      <td className="p-3">{item.email || '-'}</td>
                      <td className="p-3">{item.subject || 'General Enquiry'}</td>
                      <td className="p-3">{item.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredContactSubmissions.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No contact enquiries found.</p> : null}
            </div>
          </div>
        ) : null}

        {collectionMessage ? <p className="mt-5 rounded-md border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">{collectionMessage}</p> : null}
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(null)
  const [activePage, setActivePage] = useState(getActivePageFromPath)
  const [loading, setLoading] = useState(true)
  const [adminSession, setAdminSession] = useState(null)
  const [adminLoading, setAdminLoading] = useState(() => Boolean(supabase))
  const [cmsPages, setCmsPages] = useState({})
  const [publicGalleryPhotos, setPublicGalleryPhotos] = useState([])
  const [publicResults, setPublicResults] = useState([])
  const [publicHouseRecords, setPublicHouseRecords] = useState([])
  const [publicNotices, setPublicNotices] = useState([])
  const [publicStudentCouncilRecords, setPublicStudentCouncilRecords] = useState([])
  const [formMessage, setFormMessage] = useState('')
  const [activeAdmissionSlide, setActiveAdmissionSlide] = useState(0)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const syncPage = () => setActivePage(getActivePageFromPath())

    window.addEventListener('popstate', syncPage)
    return () => window.removeEventListener('popstate', syncPage)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (activePage) return undefined

    const timer = window.setInterval(() => {
      setActiveAdmissionSlide((currentSlide) => (currentSlide + 1) % admissionSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [activePage])

  useEffect(() => {
    if (!supabase) return

    supabase
      .from('pages')
      .select('slug,title,eyebrow,body,hero_image_url,is_published')
      .eq('is_published', true)
      .then(({ data }) => {
        if (!data) return

        setCmsPages(Object.fromEntries(data.map((pageItem) => {
          if (pageItem.slug === 'academic-calendar' && pageItem.title === 'Result') {
            return [
              pageItem.slug,
              {
                ...contentPages['academic-calendar'],
                image: pageItem.hero_image_url || contentPages['academic-calendar'].image,
              },
            ]
          }

          return [
            pageItem.slug,
            {
              title: pageItem.title,
              eyebrow: pageItem.eyebrow,
              contentMode: pageItem.body?.content_mode || (pageItem.body?.html ? 'html' : 'text'),
              html: pageItem.body?.html || '',
              paragraphs: pageItem.body?.paragraphs || [],
              homeGalleryEyebrow: pageItem.body?.home_gallery_eyebrow,
              homeGalleryTitle: pageItem.body?.home_gallery_title,
              bullets: pageItem.body?.bullets,
              sections: pageItem.body?.sections,
              people: pageItem.body?.people,
              houses: pageItem.body?.houses,
              gallery: pageItem.body?.gallery,
              image: pageItem.hero_image_url,
            },
          ]
        })))
      })

    supabase
      .from('gallery_photos')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicGalleryPhotos(data || []))

    supabase
      .from('results')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicResults(data || []))

    supabase
      .from('notices')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicNotices(data || []))

    supabase
      .from('house_system')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .then(({ data }) => setPublicHouseRecords(data || []))

    supabase
      .from('student_council')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicStudentCouncilRecords(data || []))
  }, [])

  useEffect(() => {
    let active = true

    const loadAdminSession = async (session) => {
      if (!session?.user) {
        if (active) {
          setAdminSession(null)
          setAdminLoading(false)
        }
        return
      }

      if (active) {
        setAdminSession(session)
        setAdminLoading(false)
      }
    }

    if (!supabase) {
      return () => {
        active = false
      }
    }

    supabase.auth.getSession().then(({ data }) => loadAdminSession(data.session))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminLoading(true)
      loadAdminSession(session)
    })

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenMobileMenu(null)
  }

  const handleInternalLink = (event, href) => {
    if (!href.startsWith('/')) return

    event.preventDefault()
    window.history.pushState({}, '', href)
    setActivePage(href.replace(/^\/+|\/+$/g, '').toLowerCase())
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAdminLogout = async () => {
    if (supabase) await supabase.auth.signOut()
    setAdminSession(null)
  }

  const handlePageSaved = (slug, nextPage) => {
    setCmsPages((currentPages) => ({
      ...currentPages,
      [slug]: {
        ...currentPages[slug],
        ...contentPages[slug],
        ...nextPage,
      },
    }))
  }

  const handlePublicFormSubmit = async (event, form, type) => {
    event.preventDefault()
    setFormMessage('')

    if (!supabase) {
      setFormMessage('Form service is not configured.')
      return
    }

    const tables = {
      admission: 'admission_enquiries',
      contact: 'contact_enquiries',
      career: 'career_applications',
    }
    const table = tables[type] || 'contact_enquiries'
    const { error } = await supabase.from(table).insert(form)
    setFormMessage(error ? error.message : 'Thank you. Your form has been submitted successfully.')
  }

  const activeGallerySlug = activePage.startsWith('gallery/') ? activePage.split('/')[1] : ''
  const activeGalleryFolderName = activeGallerySlug
    ? [...new Set(publicGalleryPhotos.map((photo) => photo.folder_title || 'Gallery'))].find((folderName) => getSlug(folderName) === activeGallerySlug)
    : ''
  const dbPage = cmsPages[activePage]
  const defaultPage = contentPages[activePage]
  const page = activeGallerySlug
    ? {
        ...(cmsPages.gallery || contentPages.gallery),
        title: activeGalleryFolderName || 'Gallery',
      }
    : dbPage
      ? {
          ...defaultPage,
          ...dbPage,
          paragraphs: dbPage.paragraphs && dbPage.paragraphs.length > 0 && dbPage.paragraphs[0].includes('The house system builds leadership') && dbPage.paragraphs.length < 2
            ? defaultPage?.paragraphs || dbPage.paragraphs
            : dbPage.paragraphs,
          sections: dbPage.sections || defaultPage?.sections,
        }
      : defaultPage
  return (
    <div className="min-h-screen bg-[#f8f3e9]">
      {loading ? (
        <div className="fixed inset-0 z-[10000] grid place-items-center bg-[#fffaf0]">
          <div className="grid place-items-center gap-5">
            <img src={logo} alt="Shri Pragya Public School logo" className="h-28 w-28 animate-pulse rounded-md object-contain" />
            <div className="h-1.5 w-36 overflow-hidden rounded-full bg-[#06284d]/15">
              <div className="h-full w-1/2 animate-[loader_0.9s_ease-in-out_infinite] rounded-full bg-[#ffc400]" />
            </div>
          </div>
        </div>
      ) : null}

      <header className="shadow-lg shadow-slate-950/10">
        <div className="bg-[#06284d] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span className="flex items-center gap-2"><Icon name="location" className="h-5 w-5 text-[#ffc400]" />Shri Pragya Public School, Bijainagar, Rajasthan 305624</span>
            <a className="flex items-center gap-2 font-semibold" href="tel:09461996117"><Icon name="phone" className="h-5 w-5 text-[#ffc400]" />094619 96117</a>
          </div>
        </div>

        <div className="bg-[#fffaf0]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
            <a href="/" onClick={(event) => handleInternalLink(event, '/')} className="flex min-w-0 items-center gap-4">
              <img src={logo} alt="Shri Pragya Public School logo" className="h-20 w-20 flex-none rounded-sm object-contain sm:h-24 sm:w-24" />
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase leading-tight text-[#a8171d] sm:text-3xl">Shri Pragya Public School</p>
                <p className="mt-1 text-sm font-medium text-slate-900 sm:text-lg">Bijainagar, Rajasthan 305624</p>
                <p className="mt-1 hidden text-base font-bold text-[#a8171d] sm:block">Pragya Deep: Always Shining</p>
              </div>
            </a>
            <a
              href="/admission-form/"
              onClick={(event) => handleInternalLink(event, '/admission-form/')}
              className="hidden shrink-0 items-center gap-3 rounded-md bg-[#a8171d] px-6 py-3 font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-[#06284d] lg:inline-flex"
            >
              Admission Now <Icon name="arrow" />
            </a>
          </div>
        </div>

        <nav className="sticky top-0 z-50 bg-[#082f5f]/95 text-white shadow-lg shadow-slate-950/15 backdrop-blur" itemScope itemType="http://schema.org/SiteNavigationElement" role="navigation">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:hidden">
            <a href="/admission-form/" onClick={(event) => handleInternalLink(event, '/admission-form/')} className="rounded-md bg-[#ffc400] px-4 py-2 text-sm font-black text-[#102344]">Admission Now</a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-white/10 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              aria-label="Toggle navigation"
            >
              <Icon name={menuOpen ? 'x' : 'menu'} />
            </button>
          </div>

          <div className="mx-auto hidden max-w-7xl px-4 lg:block lg:px-8">
            <div className="relative flex items-center justify-center">
              {navItems.map((item) => {
                const hasSubmenu = Boolean(item.children || item.groups)

                return (
                <div key={item.label} className={`group ${item.groups ? '' : 'relative'}`}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    onClick={(event) => handleInternalLink(event, item.href)}
                    className={`flex items-center justify-between gap-1 px-2 py-3 text-[13px] font-semibold transition hover:text-[#ffc400] lg:justify-start xl:px-3 ${item.label === 'Home' ? 'text-[#ffc400]' : ''}`}
                  >
                    {item.label}
                    {hasSubmenu ? <Icon name="chevron" className="h-4 w-4" /> : null}
                  </a>
                  {item.groups ? (
                    <div className={`invisible absolute left-1/2 top-full z-50 grid -translate-x-1/2 translate-y-2 gap-5 rounded-md bg-white p-5 text-slate-800 opacity-0 shadow-xl transition group-hover:visible group-hover:-translate-x-1/2 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:-translate-x-1/2 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${item.label === 'About Us' ? 'w-[min(94vw,70rem)] grid-cols-5' : 'w-[min(92vw,56rem)] grid-cols-4'}`}>
                      {item.groups.map((group) => (
                        <div key={group.label}>
                          <p className="border-b border-[#ffc400] pb-2 text-sm font-black uppercase tracking-[0.11em] text-[#a8171d]">{group.label}</p>
                          <div className="mt-2 grid gap-1">
                            {group.children.map(([childLabel, childHref]) => (
                              <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="rounded px-2 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#fff2cb] hover:text-[#a8171d]">
                                {childLabel}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : item.children ? (
                    <div className="grid gap-1 bg-[#061f3f] px-3 pb-3 lg:invisible lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-64 lg:translate-y-2 lg:rounded-md lg:bg-white lg:p-2 lg:text-slate-800 lg:opacity-0 lg:shadow-xl lg:transition lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                      {item.children.map(([childLabel, childHref]) => (
                        <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="rounded px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#ffc400] hover:text-[#102344] lg:text-slate-800">
                          {childLabel}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
                )
              })}
            </div>
          </div>

        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[9999] bg-slate-950/75 lg:hidden" onClick={closeMenu}>
          <aside id="primary-menu" className="ml-auto flex h-full w-[88vw] max-w-sm flex-col overflow-y-auto bg-[#082f5f] px-4 py-4 text-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-4">
              <img src={logo} alt="Shri Pragya Public School logo" className="h-[4.5rem] w-[4.5rem] rounded-sm bg-white object-contain p-1" />
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-white/10 text-white"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <Icon name="x" />
              </button>
            </div>
            {navItems.map((item) => {
              const hasSubmenu = Boolean(item.children || item.groups)

              return (
              <div key={item.label} className="border-b border-white/10 last:border-b-0">
                {hasSubmenu ? (
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-2 py-4 text-left text-base font-semibold transition hover:text-[#ffc400] ${openMobileMenu === item.label ? 'text-[#ffc400]' : 'text-white'}`}
                    onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                    aria-expanded={openMobileMenu === item.label}
                  >
                    {item.label}
                    <Icon name="chevron" className={`h-4 w-4 transition ${openMobileMenu === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  onClick={(event) => handleInternalLink(event, item.href)}
                    className={`flex items-center justify-between gap-2 py-4 text-base font-semibold transition hover:text-[#ffc400] ${item.label === 'Home' ? 'text-[#ffc400]' : 'text-white'}`}
                  >
                    {item.label}
                  </a>
                )}
                {hasSubmenu && openMobileMenu === item.label ? (
                  <div className="grid gap-1 pb-4 pl-3">
                    <a href={item.href} onClick={(event) => handleInternalLink(event, item.href)} className="rounded-md px-3 py-2 text-sm font-bold text-[#ffc400] transition hover:bg-[#ffc400] hover:text-[#102344]">
                      {item.label} Overview
                    </a>
                    {item.groups?.map((group) => (
                      <div key={group.label} className="mt-3 border-l border-white/15 pl-3">
                        <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffc400]">{group.label}</p>
                        {group.children.map(([childLabel, childHref]) => (
                          <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="block rounded-md px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-[#ffc400] hover:text-[#102344]">
                            {childLabel}
                          </a>
                        ))}
                      </div>
                    ))}
                    {item.children?.map(([childLabel, childHref]) => (
                      <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="rounded-md px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-[#ffc400] hover:text-[#102344]">
                        {childLabel}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              )
            })}
          </aside>
        </div>
      ) : null}

      {activePage === 'admin' ? (
        adminLoading ? (
          <main className="grid min-h-[70vh] place-items-center bg-[#f8f3e9] px-4 py-16">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
              <img src={logo} alt="Shri Pragya Public School logo" className="mx-auto h-20 w-20 animate-pulse object-contain" />
              <p className="mt-4 font-bold text-[#102344]">Checking admin access...</p>
            </div>
          </main>
        ) : !adminSession ? (
          <AdminLogin />
        ) : (
          <AdminPanel adminProfile={{ email: adminSession.user.email }} cmsPages={cmsPages} onLogout={handleAdminLogout} onNavigate={handleInternalLink} onPageSaved={handlePageSaved} onResultsChanged={setPublicResults} onHousesChanged={setPublicHouseRecords} onNoticesChanged={setPublicNotices} onGalleryChanged={setPublicGalleryPhotos} onStudentCouncilChanged={setPublicStudentCouncilRecords} />
        )
      ) : page ? (
        <ContentPage page={page} activePage={activePage} onFormSubmit={handlePublicFormSubmit} formMessage={formMessage} galleryPhotos={publicGalleryPhotos} resultPhotos={publicResults} houseRecords={publicHouseRecords} studentCouncilRecords={publicStudentCouncilRecords} />
      ) : (
      <main id="home">
        <section className="relative min-h-[460px] overflow-hidden bg-[#06284d] lg:min-h-[520px]">
          <img src={campusHero} alt="Aerial campus view of Shri Pragya Public School" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06284d]/95 via-[#06284d]/60 to-transparent" />
          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-12 lg:min-h-[520px] lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="hero-kicker mb-4 text-base font-bold text-[#ffc400] sm:text-lg">Nurturing Minds. Building Futures.</p>
              <h1 className="hero-title max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                <span className="block">Welcome to</span>
                <span className="mt-2 block whitespace-nowrap text-[1.7rem] text-[#ffc400] sm:text-5xl lg:text-6xl">Shri Pragya Public School</span>
              </h1>
              <div className="hero-rule mt-5 h-1 w-20 bg-[#ffc400]" />
              <p className="hero-copy mt-5 max-w-lg text-base leading-7 text-white/95 sm:text-lg">Empowering students with knowledge, values, confidence and skills to excel in life and create a better tomorrow.</p>
              <div className="hero-actions mt-6 flex flex-wrap gap-4">
                <a href="/about/" onClick={(event) => handleInternalLink(event, '/about/')} className="inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#101827] shadow-xl shadow-black/20 transition hover:bg-white">
                  Explore More <Icon name="arrow" />
                </a>
                <a href="/admission-form/" onClick={(event) => handleInternalLink(event, '/admission-form/')} className="inline-flex items-center gap-3 rounded-md border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#06284d]">Admission Enquiry</a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Welcome message" className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
          <div className="welcome-card grid overflow-hidden rounded-xl border-t-4 border-[#ffc400] bg-white shadow-2xl shadow-slate-950/15 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#ffc400]" />
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#a8171d]">Welcome Message</p>
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight text-[#102344] sm:text-4xl">
                An education rooted in values, guided by excellence.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Welcome to Shri Pragya Public School, where every child is known, encouraged and inspired to do their best. We nurture curious minds, disciplined habits and compassionate hearts so that learning becomes a foundation for life.
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                With dedicated teachers, modern learning spaces and opportunities beyond the classroom, our students grow with confidence and step towards their future with purpose.
              </p>
              <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#fff6df] px-5 py-3">
                <img src={logo} alt="" className="h-10 w-10 object-contain" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8171d]">Pragya Deep</p>
                  <p className="text-sm font-bold text-[#102344]">Always Shining</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-72 lg:min-h-full">
              <img src={boysReading} alt="Students reading and learning at Shri Pragya Public School" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06284d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Shri Pragya Public School</p>
                <p className="mt-2 text-lg font-semibold">Knowledge. Discipline. Values.</p>
              </div>
            </div>
          </div>
        </section>



        <section id="about" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">About Pragya</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#102344] sm:text-5xl">A disciplined, caring campus for confident learners.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">Shri Pragya Public School brings academics, values, sports and creative expression together in a structured environment. The website mirrors the school identity from the reference while extending it into a complete digital experience for parents, students and staff.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Value-based education', 'Qualified faculty', 'Regular parent communication', 'Balanced academics and activities'].map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 font-semibold shadow-sm"><Icon name="check" className="h-5 w-5 text-[#a8171d]" />{item}</p>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-5">
              <img src={campusHero} alt="School campus buildings and courtyard" className="h-full min-h-80 w-full rounded-lg object-cover shadow-xl" />
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-lg bg-[#fffaf0] shadow-xl shadow-slate-950/10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(([title, text, icon], index) => (
              <div key={title} className={`highlight-flip group flex items-center gap-5 p-7 ${index > 0 ? 'lg:border-l lg:border-slate-300' : ''}`}>
                <span className="grid h-16 w-16 flex-none place-items-center rounded-full bg-[#a8171d] text-white"><Icon name={icon} className="h-8 w-8" /></span>
                <div>
                  <h3 className="text-xl font-extrabold text-[#16172b]">{title}</h3>
                  <p className="mt-1 font-medium text-[#33436b]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-xl bg-[#06284d] p-6 text-white sm:p-9">
            <h3 className="text-center text-3xl font-black sm:text-4xl">Achievement Counters</h3>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([value, label]) => (
                <CountUpStat key={label} value={value} label={label} />
              ))}
            </div>
            <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Quick Links</p>
            <div className="mt-6 grid overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map(([label, href, icon], index) => (
                <a
                  key={label}
                  href={href}
                  onClick={(event) => handleInternalLink(event, href)}
                  className={`group flex items-center gap-4 px-6 py-5 font-bold text-white transition hover:bg-[#ffc400] hover:text-[#102344] ${index > 0 ? 'lg:border-l lg:border-white/10' : ''}`}
                >
                  <Icon name={icon} className="h-6 w-6 flex-none text-[#ffc400] transition group-hover:text-[#102344]" />
                  <span>{label}</span>
                  <Icon name="arrow" className="ml-auto h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Why Choose Us</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Education that prepares students for life.</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map(([title, text, icon]) => (
                <article key={title} className="rounded-lg border border-slate-100 bg-[#fffaf0] p-7 shadow-sm">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#a8171d] text-white"><Icon name={icon} className="h-7 w-7" /></span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#102344]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="academics" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Academic Highlights</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Clear pathways from strong foundations to board readiness.</h2>
            </div>
            <div className="grid gap-5">
              {programs.map(([title, text]) => (
                <article key={title} className="rounded-lg bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-[#a8171d]">{title}</h3>
                  <p className="mt-2 text-lg leading-8 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competitive-program" className="bg-[#06284d] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">IIT-JEE &amp; NEET Program</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Focused preparation for ambitious futures.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Our senior students receive structured guidance that supports school academics while building the discipline and conceptual clarity needed for competitive examinations.</p>
              <a href="/academics/" onClick={(event) => handleInternalLink(event, '/academics/')} className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">
                Explore Academics <Icon name="arrow" />
              </a>
            </div>
            <div className="rounded-lg bg-white/10 p-6 sm:p-8">
              {competitiveProgramFeatures.map((item) => (
                <p key={item} className="flex gap-3 border-b border-white/15 py-4 first:pt-0 last:border-0 last:pb-0">
                  <Icon name="check" className="mt-1 h-5 w-5 flex-none text-[#ffc400]" />
                  <span className="text-lg font-semibold">{item}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="facilities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Facilities Overview</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Spaces designed for learning, discipline and discovery.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map(([title, text, imageAlt, image, href]) => (
                <a key={title} href={href} onClick={(event) => handleInternalLink(event, href)} className="facility-card group block overflow-hidden rounded-lg border border-slate-200 bg-[#fffaf0] shadow-sm">
                  <div className="relative overflow-hidden">
                    <img src={image} alt={imageAlt} className="h-44 w-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="facility-overlay absolute inset-0 flex items-end bg-gradient-to-t from-[#06284d]/95 via-[#06284d]/60 to-transparent p-5 text-white">
                      <div className="facility-overlay-content">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffc400]">Explore Facility</p>
                        <p className="mt-2 text-base font-semibold leading-6">{text}</p>
                        <span className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#ffc400] px-4 py-2 text-sm font-black text-[#102344]">
                          View Details <Icon name="arrow" className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold text-[#102344]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="academic-calendar" className="bg-[#06284d] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Results &amp; Achievements</p>
                <h2 className="mt-3 text-4xl font-black">Celebrating student success.</h2>
              </div>
              <a href="/results/" onClick={(event) => handleInternalLink(event, '/results/')} className="inline-flex w-fit items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">View All Results <Icon name="arrow" /></a>
            </div>
            {publicResults.length > 0 ? (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {publicResults.slice(0, 3).map((result) => (
                  <article key={result.id || result.image_url} className="result-card overflow-hidden rounded-lg bg-white p-3 text-[#102344] shadow-xl">
                    <img src={result.image_url} alt={result.title || 'Pragya school result'} className="h-72 w-full rounded-md object-contain" />
                    {(result.title || result.result_year) ? (
                      <div className="px-2 pb-2 pt-4">
                        <h3 className="text-lg font-black">{result.title}</h3>
                        {result.result_year ? <p className="mt-1 text-sm font-bold text-[#a8171d]">{result.result_year}</p> : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-10 rounded-lg bg-white/10 p-5 text-base font-bold text-white/80">No result photos added yet.</p>
            )}
          </div>
        </section>

        <section id="testimonials" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Testimonials</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Trusted by families and learners.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map(([name, quote]) => (
                <figure key={name} className="rounded-lg bg-[#fffaf0] p-7 shadow-sm">
                  <p className="text-4xl font-black leading-none text-[#ffc400]">&ldquo;</p>
                  <blockquote className="mt-3 text-lg leading-8 text-slate-700">{quote}</blockquote>
                  <figcaption className="mt-6 font-extrabold text-[#a8171d]">{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="news-events" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Latest News &amp; Events</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Stay connected with Pragya.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {(publicNotices.length > 0 ? publicNotices.slice(0, 3).map((notice) => [notice.id, 'School Update', notice.notice_text, notice.link_url]) : newsFallback.map(([title, text]) => [title, title, text, null])).map(([key, title, text, link]) => (
              <article key={key} className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a8171d]">{title}</p>
                <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">{text}</p>
                {link ? <a href={link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#a8171d]">Read More <Icon name="arrow" /></a> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="admission-open" className="bg-[#a8171d] py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Admission Open</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Begin your child&apos;s Pragya journey.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">Enquiries are welcome for the upcoming academic session. Meet our team and discover an education built on knowledge, discipline and values.</p>
            </div>
            <a href="/admission-form/" onClick={(event) => handleInternalLink(event, '/admission-form/')} className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#ffc400] px-8 py-4 text-lg font-black text-[#102344] shadow-xl">
              Apply For Admission <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section id="contact-us" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Contact Quick Form</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Visit the campus or send a quick enquiry.</h2>
              <div className="mt-8 grid gap-4 text-base font-semibold text-slate-700">
                {contactDetails.map(([label, value]) => (
                  <p key={label} className="flex gap-3">
                    <Icon name={label.includes('Email') ? 'mail' : label.includes('Helpline') ? 'phone' : 'location'} className="mt-0.5 h-5 w-5 flex-none text-[#a8171d]" />
                    <span><strong className="text-[#102344]">{label}:</strong> {value}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-[#fffaf0] p-2 shadow-sm">
              <ContactForm onSubmit={handlePublicFormSubmit} message={formMessage} compact />
            </div>
          </div>
        </section>

        <section aria-label="Admission highlights slider" className="bg-[#f8f3e9] px-4 py-16 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <img
              src={admissionSlides[activeAdmissionSlide].image}
              alt="Admission at Shri Pragya Public School"
              className="h-56 w-full object-cover transition-opacity duration-500 sm:h-72 lg:h-[420px]"
            />
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-8 sm:right-10">
              {admissionSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show admission slide ${index + 1}`}
                  onClick={() => setActiveAdmissionSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${activeAdmissionSlide === index ? 'w-10 bg-[#a8171d]' : 'w-2.5 bg-slate-400 hover:bg-[#a8171d]'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7" aria-label="Quick contact actions">
          <a
            href="https://wa.me/919461996117"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full bg-[#16a34a] px-4 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#15803d]"
          >
            <Icon name="chat" className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp Chat</span>
          </a>
          <a
            href="/admission-form/"
            onClick={(event) => handleInternalLink(event, '/admission-form/')}
            className="flex items-center gap-3 rounded-full bg-[#a8171d] px-4 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#06284d]"
          >
            <Icon name="graduation" className="h-5 w-5" />
            <span className="hidden sm:inline">Apply Now</span>
          </a>
          <a
            href="tel:09461996117"
            className="flex items-center gap-3 rounded-full bg-[#ffc400] px-4 py-3 font-bold text-[#102344] shadow-xl transition hover:-translate-y-1 hover:bg-white"
          >
            <Icon name="phone" className="h-5 w-5" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </main>
      )}

      <footer className="bg-[#06284d] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <img src={logo} alt="Shri Pragya Public School logo" className="h-20 w-20 rounded-sm bg-white object-contain p-1" />
              <div>
                <h2 className="text-xl font-black uppercase leading-tight">Shri Pragya Public School</h2>
                <p className="mt-1 text-sm text-white/75">Bijainagar, Rajasthan 305624</p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-white/75">Education with knowledge, discipline and values. Nurturing young minds for confident, responsible and meaningful lives.</p>
            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffc400]">Follow Us :</p>
              <div className="mt-3 flex gap-3">
                {socials.map(([name, label, color]) => (
                  <a
                    key={name}
                    href="/contact-us/"
                    onClick={(event) => handleInternalLink(event, '/contact-us/')}
                    aria-label={label}
                    title={label}
                    className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:-translate-y-0.5"
                    style={{ backgroundColor: color }}
                  >
                    <SocialIcon name={name} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-[#ffc400]">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-white/80">
              {[
                ['Home', '/'],
                ['About', '/about/'],
                ['Facilities', '/facilities/'],
                ['Academics', '/academics/'],
                ['Gallery', '/gallery/'],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={(event) => handleInternalLink(event, href)} className="transition hover:text-[#ffc400]">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-[#ffc400]">Important</h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-white/80">
              {[
                ['Admission', '/admission-form/'],
                ['Result', '/results/'],
                ['Careers', '/careers/'],
                ['Transport', '/transportation/'],
                ['Hostel', '/hostel/'],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={(event) => handleInternalLink(event, href)} className="transition hover:text-[#ffc400]">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-[#ffc400]">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-white/80">
              {contactDetails.map(([label, value]) => (
                <p key={label} className="flex gap-3">
                  <Icon name={label.includes('Email') ? 'mail' : label.includes('Helpline') ? 'phone' : 'location'} className="mt-0.5 h-5 w-5 flex-none text-[#ffc400]" />
                  <span><strong className="text-white">{label}:</strong> {value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>Copyright 2026 Shri Pragya Public School. All rights reserved.</p>
            <p>Designed for Pragya School community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
