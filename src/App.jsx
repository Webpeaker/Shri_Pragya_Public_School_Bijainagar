import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import logo from './assets/pragya_school_logo.png'
import campusHero from './assets/Pragya_school_hero_section_image.jpg'
import resultOne from './assets/1_result.webp'
import resultTwo from './assets/2_result.webp'
import resultThree from './assets/3_result.webp'
import resultFour from './assets/4_result.webp'
import resultFourTwo from './assets/4_2_result.webp'
import resultFive from './assets/5_result.webp'
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

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      ['Origin & History', '/origin-history/'],
      ['Vision & Mission', '/origin-mission/'],
      ['School Codes & Policies', '/school-codes-policies/'],
      ['Principal & Teachers Details', '/principal-teachers-details/'],
    ],
  },
  {
    label: 'Facilities',
    href: '/facilities/',
    children: [
      ['Overview', '/overview/'],
      ['Hostel', '/hostel/'],
      ['Laboratories', '/laboratories/'],
      ['Music & Sports Facilities', '/music-sports-facilities/'],
      ['Interactive Classroom', '/interactive-classroom/'],
      ['Medical Facility', '/medical-facility/'],
      ['Transportation', '/transportation/'],
    ],
  },
  {
    label: 'Academics',
    href: '/academics/',
    children: [
      ['Academic Report & Co-Curricular', '/academic-report-co-curricular/'],
      ['Exam Scheme', '/exam-scheme/'],
      ['Syllabus', '/syllabus/'],
      ['Curriculum', '/curriculum/'],
      ['Achievments', '/achievments/'],
      ['Admissions & Withdrawl', '/admissions-withdrawl/'],
      ['Fee Structure', '/fee-structure/'],
      ['General Rules', '/general-rules/'],
    ],
  },
  { label: 'Academic Calendar', href: '/academic-calendar/' },
  {
    label: 'Activities',
    href: '/activities/',
    children: [
      ['Club', '/club/'],
      ['Annual Award', '/annual-award/'],
      ['Inter School & Co-Curricular Activity', '/interschool-co-curricular-activity/'],
      ['Spic Macay', '/spicy-macay/'],
      ['Celebration', '/celebration/'],
      ['House System', '/house-system/'],
      ['Excursions', '/excursions/'],
    ],
  },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Online Admission', href: '/admission-form/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'ERP', href: 'http://pragya.eschoolapp.in/', external: true },
]

const highlights = [
  ['Experienced Faculty', 'Dedicated and qualified teachers', 'graduation'],
  ['Smart Classrooms', 'Modern learning environment', 'book'],
  ['Co-Curricular Activities', 'Sports, arts and leadership', 'trophy'],
  ['Holistic Development', 'Education for life', 'users'],
]

const stats = [
  ['25+', 'Years of service'],
  ['1800+', 'Students guided'],
  ['95%', 'Board success rate'],
  ['40+', 'Learning spaces'],
]

const facilities = [
  ['Digital Classrooms', 'Interactive teaching rooms built for attentive, visual learning.', 'Smart classroom learning space', digitalBoard],
  ['Science Labs', 'Practical physics, chemistry and biology labs for inquiry-led study.', 'Science laboratory facility', chemistryLab],
  ['Library', 'A calm reading environment with reference books, journals and story collections.', 'School library and reading space', studentLibrary],
  ['Sports Grounds', 'Outdoor games, athletics and structured physical education every week.', 'School sports and activity ground', sportsImage],
  ['Transport', 'Managed bus routes for safe and punctual daily travel.', 'School transport facility', busImage],
  ['Day Boarding', 'Supervised study, meals and activity time for extended learning support.', 'Day boarding facility', boyHostel],
]

const programs = [
  ['Primary Wing', 'Concept clarity, reading fluency, number sense and joyful classroom routines.'],
  ['Middle School', 'Strong academic foundations with clubs, labs, projects and competitions.'],
  ['Secondary School', 'Board-focused mentoring, practical learning and career readiness.'],
]

const activities = [
  'Debate',
  'Music',
  'Yoga',
  'Science Fair',
  'Art Studio',
  'Cricket',
  'Community Service',
  'Leadership Club',
  'Dance',
  'Drama',
  'Quiz',
  'Skating',
  'Volleyball',
  'Archery',
  'Public Speaking',
  'Creative Writing',
  'Environmental Club',
  'Robotics',
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

const resultImages = [
  [resultOne, 'Pragya school result achievement 1'],
  [resultTwo, 'Pragya school result achievement 2'],
  [resultThree, 'Pragya school result achievement 3'],
  [resultFour, 'Pragya school result achievement 4'],
  [resultFourTwo, 'Pragya school result achievement 5'],
  [resultFive, 'Pragya school result achievement 6'],
]

const contactDetails = [
  ['Main Branch', 'Pragya Road, Bijainagar (Ajmer) Raj. +91-1462-230201'],
  ['Junior Wing', 'Infront of Mahaveer Bhawan, Bijainagar (Ajmer) Raj. +91-1462-230451'],
  ['Helpline No.', '09461996117'],
  ['Boys Hostel', 'Pragya Boys Hostel, Sathana Bazar, Bijainagar (Ajmer) Raj. +91 9799861201'],
  ['Girls Hostel', 'Shri Pragya Mahavidyalaya, Pragya Road Bijainagar (Ajmer) Raj. +91 9799861201'],
  ['Email id', 'officepragyaschool@gmail.com, shripragyaschool@gmail.com'],
]

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
      ['Dr. Navalsingh Jain', 'Director', 'Pragya Group of Institute'],
      ['Mr. Manjeet Singh', 'Head & Deputy Director', 'IIT JEE NEET'],
      ['Mrs Nidhi Mathur', 'Principal', 'Head Academics'],
      ['Mrs. Sunita Sharma', 'Head', 'Transportation'],
      ['Mrs. Drakshi Garg', 'Head', 'Pre School'],
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
  'academic-calendar': {
    eyebrow: 'Academics',
    title: 'Result',
    image: classStudentsTwo,
    paragraphs: [
      'Our students continue to make the school proud through dedicated effort, consistent guidance and excellent academic performance.',
    ],
    gallery: resultImages,
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
    title: 'Annual Award',
    image: classStudentsTwo,
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
    ],
    bullets: ['House competitions', 'Student leadership roles', 'Sports participation', 'Cultural activities', 'Discipline and teamwork'],
    houses: [
      ['Blue House', '#1d4ed8'],
      ['Green House', '#15803d'],
      ['Red House', '#b91c1c'],
      ['Yellow House', '#ca8a04'],
    ],
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
  careers: {
    eyebrow: 'Careers',
    title: 'Careers',
    image: teacherImage,
    paragraphs: [
      'We welcome passionate educators who believe in discipline, care and student-centered learning. Share your profile with the school office for current vacancies.',
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

function ContactForm({ onSubmit, message }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const update = (key, value) => setForm({ ...form, [key]: value })

  return (
    <form onSubmit={(event) => onSubmit(event, form, 'contact')} className="mt-10 grid gap-4 rounded-lg bg-white p-6 shadow-sm">
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

function ContentPage({ page, activePage, onFormSubmit, formMessage, galleryPhotos = [] }) {
  const galleryFolders = galleryPhotos.reduce((folders, photo) => {
    const folderName = photo.folder_title || 'Gallery'
    return {
      ...folders,
      [folderName]: [...(folders[folderName] || []), photo],
    }
  }, {})

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
        {page.paragraphs ? (
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
            {page.people.map(([name, role, detail]) => (
              <article key={name} className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-[#102344]">{name}</h2>
                <p className="mt-2 font-bold text-[#a8171d]">{role}</p>
                <p className="mt-1 text-slate-700">{detail}</p>
              </article>
            ))}
          </div>
        ) : null}

        {page.houses ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.houses.map(([houseName, color]) => (
              <article key={houseName} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="p-5 text-white" style={{ backgroundColor: color }}>
                  <h2 className="text-2xl font-black">{houseName}</h2>
                </div>
                <div className="grid gap-3 p-5 text-slate-700">
                  {['Captain', 'Vice Captain', 'Junior Captain'].map((role) => (
                    <div key={role} className="rounded-md bg-[#fffaf0] p-3">
                      <p className="text-sm font-bold uppercase tracking-wide text-[#a8171d]">{role}</p>
                      <p className="mt-1 font-semibold">Student name</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {page.title === 'Gallery' ? (
          <div className="mt-10 grid gap-8">
            {Object.keys(galleryFolders).length > 0 ? (
              Object.entries(galleryFolders).map(([folderName, photos]) => (
                <section key={folderName} className="rounded-lg bg-white p-5 shadow-sm">
                  <h2 className="text-2xl font-black text-[#102344]">{folderName}</h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((photo) => (
                      <img key={photo.id} src={photo.image_url} alt={photo.title} className="h-72 w-full rounded-lg object-cover shadow-md" />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map(([image, alt]) => (
                  <img key={alt} src={image} alt={alt} className="h-72 w-full rounded-lg object-cover shadow-md" />
                ))}
              </div>
            )}
          </div>
        ) : null}

        {page.gallery ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.gallery.map(([image, alt]) => (
              <img key={alt} src={image} alt={alt} className="h-80 w-full rounded-lg object-contain bg-white p-3 shadow-md" />
            ))}
          </div>
        ) : null}

        {activePage === 'admission-form' ? <AdmissionForm onSubmit={onFormSubmit} message={formMessage} /> : null}
        {activePage === 'contact-us' ? <ContactForm onSubmit={onFormSubmit} message={formMessage} /> : null}

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

function AdminPanel({ adminProfile, cmsPages, onLogout, onNavigate, onPageSaved }) {
  const [adminSection, setAdminSection] = useState('pages')
  const [editingPage, setEditingPage] = useState(null)
  const [editorForm, setEditorForm] = useState({ title: '', href: '', group: '', eyebrow: '', content: '', is_published: true })
  const [editorMessage, setEditorMessage] = useState('')
  const [savingPage, setSavingPage] = useState(false)
  const [collectionMessage, setCollectionMessage] = useState('')
  const [adminSearch, setAdminSearch] = useState('')
  const [galleryForm, setGalleryForm] = useState({ folder: '', selectedFolder: '', photoTitle: '', photoUrl: '' })
  const [galleryFile, setGalleryFile] = useState(null)
  const [resultForm, setResultForm] = useState({ title: '', year: '', imageUrl: '' })
  const [resultFile, setResultFile] = useState(null)
  const [houseForm, setHouseForm] = useState({ houseName: 'Blue House', houseColor: '#1d4ed8', captain: '', viceCaptain: '', juniorCaptain: '' })
  const [principalForm, setPrincipalForm] = useState({ name: '', role: '', detail: '', photoUrl: '' })
  const [admissionSubmissions, setAdmissionSubmissions] = useState([])
  const [contactSubmissions, setContactSubmissions] = useState([])
  const [principalRecords, setPrincipalRecords] = useState([])
  const [houseRecords, setHouseRecords] = useState([])
  const [resultRecords, setResultRecords] = useState([])
  const [galleryFolders, setGalleryFolders] = useState([])
  const [galleryRecords, setGalleryRecords] = useState([])
  const [editingPrincipalId, setEditingPrincipalId] = useState(null)
  const [editingHouseId, setEditingHouseId] = useState(null)
  const [editingResultId, setEditingResultId] = useState(null)
  const [uploadingResult, setUploadingResult] = useState(false)
  const [uploadingGallery, setUploadingGallery] = useState(false)

  const managedPages = navItems.flatMap((item) => {
    const parent = { label: item.label, href: item.href, group: 'Main Navigation' }
    const children = item.children?.map(([label, href]) => ({
      label,
      href,
      group: item.label,
    })) || []

    return item.external ? [] : [parent, ...children]
  })
    .filter((page) => {
      const slug = page.href.replace(/^\/|\/$/g, '') || 'home'
      return Boolean(contentPages[slug] || cmsPages[slug] || slug === 'home')
    })

  const adminTabs = [
    ['pages', 'Pages'],
    ['gallery', 'Gallery Folders'],
    ['results', 'Results'],
    ['houses', 'House Captains'],
    ['principal', 'Principal & Teachers'],
    ['admissions', 'Admission Forms'],
    ['contacts', 'Contact Enquiries'],
  ]

  const normalizedSearch = adminSearch.trim().toLowerCase()
  const matchesSearch = (...values) => {
    if (!normalizedSearch) return true
    return values.some((value) => String(value || '').toLowerCase().includes(normalizedSearch))
  }
  const filteredManagedPages = managedPages.filter((page) => matchesSearch(page.label, page.group, page.href))
  const filteredGalleryRecords = galleryRecords.filter((record) => matchesSearch(record.folder_title, record.title, record.image_url))
  const filteredResultRecords = resultRecords.filter((record) => matchesSearch(record.title, record.result_year, record.image_url))
  const filteredHouseRecords = houseRecords.filter((record) => matchesSearch(record.house_name, record.captain_name, record.vice_captain_name, record.junior_captain_name))
  const filteredPrincipalRecords = principalRecords.filter((record) => matchesSearch(record.name, record.role, record.detail))
  const filteredAdmissionSubmissions = admissionSubmissions.filter((item) => matchesSearch(item.student_name, item.class_applied, item.father_name, item.mother_name, item.phone, item.address, item.message))
  const filteredContactSubmissions = contactSubmissions.filter((item) => matchesSearch(item.name, item.phone, item.email, item.subject, item.message))

  useEffect(() => {
    if (!supabase) return

    supabase.from('admission_enquiries').select('*').order('created_at', { ascending: false }).then(({ data }) => setAdmissionSubmissions(data || []))
    supabase.from('contact_enquiries').select('*').order('created_at', { ascending: false }).then(({ data }) => setContactSubmissions(data || []))
    supabase.from('principal_teachers').select('*').order('sort_order', { ascending: true }).then(({ data }) => setPrincipalRecords(data || []))
    supabase.from('house_system').select('*').order('sort_order', { ascending: true }).then(({ data }) => setHouseRecords(data || []))
    supabase.from('results').select('*').order('created_at', { ascending: false }).then(({ data }) => setResultRecords(data || []))
    supabase.from('gallery_folders').select('*').order('created_at', { ascending: false }).then(({ data }) => setGalleryFolders(data || []))
    supabase.from('gallery_photos').select('*').order('created_at', { ascending: false }).then(({ data }) => setGalleryRecords(data || []))
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
      content: existingPage?.paragraphs?.join('\n\n') || '',
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
    const pageRecord = {
      slug,
      title: editorForm.title,
      eyebrow: editorForm.eyebrow,
      body: {
        group: editorForm.group,
        href: editorForm.href,
        paragraphs: editorForm.content.split('\n').map((line) => line.trim()).filter(Boolean),
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
      paragraphs: pageRecord.body.paragraphs,
    })
    setEditorMessage('Saved successfully. Website page updated.')
  }

  const uploadAdminImage = async (file, folder) => {
    if (!file) return ''

    const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-')
    const filePath = `${folder}/${Date.now()}-${safeName}`
    const { error } = await supabase.storage.from('school-media').upload(filePath, file, {
      cacheControl: '3600',
      contentType: file.type,
    })

    if (error) throw error

    return supabase.storage.from('school-media').getPublicUrl(filePath).data.publicUrl
  }

  const saveResult = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!resultForm.imageUrl.trim() && !resultFile) return setCollectionMessage('Image URL add karo ya image upload karo.')

    setUploadingResult(true)
    setCollectionMessage('')

    try {
      const uploadedUrl = resultForm.imageUrl.trim() || await uploadAdminImage(resultFile, 'results')
      const payload = { title: resultForm.title, result_year: resultForm.year, image_url: uploadedUrl }
      const query = editingResultId
        ? supabase.from('results').update(payload).eq('id', editingResultId).select()
        : supabase.from('results').insert(payload).select()
      const { data, error } = await query

      if (error) throw error

      const record = data?.[0]
      setResultRecords((records) => editingResultId ? records.map((item) => item.id === editingResultId ? record : item) : [record, ...records])
      setEditingResultId(null)
      setResultForm({ title: '', year: '', imageUrl: '' })
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
    setResultForm({ title: record.title || '', year: record.result_year || '', imageUrl: record.image_url || '' })
    setResultFile(null)
  }

  const createGalleryFolder = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!galleryForm.folder.trim()) return setCollectionMessage('Folder name add karo.')

    const folderTitle = galleryForm.folder.trim()
    const { data, error } = await supabase.from('gallery_folders').upsert({ title: folderTitle }, { onConflict: 'title' }).select()
    if (error) return setCollectionMessage(error.message)

    const folder = data?.[0]
    setGalleryFolders((folders) => folders.some((item) => item.title === folderTitle) ? folders : [folder, ...folders])
    setGalleryForm((form) => ({ ...form, folder: '', selectedFolder: folderTitle }))
    setCollectionMessage('Gallery folder created.')
  }

  const saveGalleryPhoto = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const folderTitle = galleryForm.selectedFolder || galleryForm.folder
    if (!folderTitle.trim()) return setCollectionMessage('Folder select karo ya new folder name add karo.')
    if (!galleryForm.photoUrl.trim() && !galleryFile) return setCollectionMessage('Photo URL add karo ya image upload karo.')

    setUploadingGallery(true)
    setCollectionMessage('')

    try {
      const imageUrl = galleryForm.photoUrl.trim() || await uploadAdminImage(galleryFile, `gallery/${folderTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)
      await supabase.from('gallery_folders').upsert({ title: folderTitle.trim() }, { onConflict: 'title' })
      const { data, error } = await supabase.from('gallery_photos').insert({
        folder_title: folderTitle.trim(),
        title: galleryForm.photoTitle || folderTitle.trim(),
        image_url: imageUrl,
      }).select()

      if (error) throw error

      setGalleryRecords((records) => [data[0], ...records])
      setGalleryFolders((folders) => folders.some((item) => item.title === folderTitle.trim()) ? folders : [{ id: folderTitle.trim(), title: folderTitle.trim() }, ...folders])
      setGalleryForm({ folder: '', selectedFolder: folderTitle.trim(), photoTitle: '', photoUrl: '' })
      setGalleryFile(null)
      setCollectionMessage('Gallery photo saved.')
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
    setCollectionMessage('Gallery photo removed.')
  }

  const deleteGalleryFolder = async (folder) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error: photoError } = await supabase.from('gallery_photos').delete().eq('folder_title', folder.title)
    if (photoError) return setCollectionMessage(photoError.message)

    const { error } = await supabase.from('gallery_folders').delete().eq('id', folder.id)
    if (error) return setCollectionMessage(error.message)

    setGalleryFolders((folders) => folders.filter((item) => item.id !== folder.id))
    setGalleryRecords((records) => records.filter((item) => item.folder_title !== folder.title))
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
    <main className="bg-[#f8f3e9]">
      <section className="bg-[#06284d] py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#ffc400]">Admin</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-black">School Website Admin Panel</h1>
              <p className="mt-2 text-white/75">Logged in as {adminProfile.email}</p>
            </div>
            <button type="button" onClick={onLogout} className="w-fit rounded-md bg-[#ffc400] px-5 py-3 font-bold text-[#102344]">Logout</button>
          </div>
          <p className="mt-3 max-w-3xl text-white/75">Manage and access website pages, navigation sections, contact blocks, results, facilities and activity content from one container.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8 overflow-x-auto rounded-lg bg-white p-2 shadow-sm">
          <div className="flex min-w-max gap-2">
            {adminTabs.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setAdminSection(key)
                  setCollectionMessage('')
                }}
                className={`rounded-md px-5 py-3 text-sm font-black transition ${adminSection === key ? 'bg-[#a8171d] text-white' : 'bg-[#fffaf0] text-[#102344] hover:bg-[#ffc400]'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            ['Pages', managedPages.length],
            ['Results', resultImages.length],
            ['Facilities', facilities.length],
            ['Classes', classOptions.length],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[#a8171d]">{label}</p>
              <p className="mt-2 text-4xl font-black text-[#102344]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
          <input
            value={adminSearch}
            onChange={(event) => setAdminSearch(event.target.value)}
            placeholder="Search admin data..."
            className="w-full rounded-md border border-slate-300 px-4 py-3 font-semibold outline-none focus:border-[#a8171d]"
          />
        </div>

        {adminSection === 'pages' ? (
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Page Access</p>
              <h2 className="mt-2 text-3xl font-black text-[#102344]">All Website Pages</h2>
            </div>
            <a href="/" onClick={(event) => onNavigate(event, '/')} className="inline-flex w-fit rounded-md bg-[#ffc400] px-5 py-3 font-bold text-[#102344]">Open Website</a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredManagedPages.map((page) => (
              <article key={`${page.group}-${page.href}`} className="rounded-lg border border-slate-200 bg-[#fffaf0] p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-[#a8171d]">{page.group}</p>
                <h3 className="mt-2 text-xl font-black text-[#102344]">{page.label}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{page.href}</p>
                <div className="mt-4 flex gap-3">
                  <a href={page.href} onClick={(event) => onNavigate(event, page.href)} className="rounded-md bg-[#06284d] px-4 py-2 text-sm font-bold text-white">View</a>
                  <button type="button" onClick={() => openEditor(page)} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#a8171d] hover:text-[#a8171d]">Edit</button>
                </div>
              </article>
            ))}
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
                <label className="grid gap-2 font-semibold text-slate-800 lg:col-span-2">
                  Page Content
                  <textarea value={editorForm.content} onChange={(event) => setEditorForm({ ...editorForm, content: event.target.value })} rows="9" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
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

        {adminSection === 'gallery' ? (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Gallery</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Folders & Event Photos</h2>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
              <input value={galleryForm.folder} onChange={(event) => setGalleryForm({ ...galleryForm, folder: event.target.value })} placeholder="New folder name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <button type="button" onClick={createGalleryFolder} className="rounded-md bg-[#06284d] px-6 py-3 font-bold text-white">Create Folder</button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <select value={galleryForm.selectedFolder} onChange={(event) => setGalleryForm({ ...galleryForm, selectedFolder: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]">
                <option value="">Select folder</option>
                {[...new Set([...galleryFolders.map((folder) => folder.title), ...galleryRecords.map((record) => record.folder_title)])].filter(Boolean).map((folderTitle) => (
                  <option key={folderTitle}>{folderTitle}</option>
                ))}
              </select>
              <input value={galleryForm.photoTitle} onChange={(event) => setGalleryForm({ ...galleryForm, photoTitle: event.target.value })} placeholder="Photo title" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={galleryForm.photoUrl} onChange={(event) => setGalleryForm({ ...galleryForm, photoUrl: event.target.value })} placeholder="Photo URL" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" onChange={(event) => setGalleryFile(event.target.files?.[0] || null)} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">Folder select karo, phir URL paste karo ya image upload karo.</p>
            <button type="button" onClick={saveGalleryPhoto} disabled={uploadingGallery} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{uploadingGallery ? 'Uploading...' : 'Save Gallery Photo'}</button>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {galleryFolders.map((folder) => (
                <article key={folder.id} className="rounded-lg border border-slate-200 bg-[#fffaf0] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black text-[#102344]">{folder.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{galleryRecords.filter((record) => record.folder_title === folder.title).length} photos</p>
                    </div>
                    <button type="button" onClick={() => deleteGalleryFolder(folder)} className="rounded bg-red-600 px-3 py-2 text-sm font-bold text-white">Remove Folder</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Folder', 'Title', 'Image Link', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredGalleryRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3"><img src={record.image_url} alt={record.title} className="h-14 w-20 rounded object-cover" /></td>
                      <td className="p-3 font-bold">{record.folder_title}</td>
                      <td className="p-3">{record.title}</td>
                      <td className="max-w-[260px] truncate p-3">{record.image_url}</td>
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
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Results</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Add Result Photo</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <input value={resultForm.title} onChange={(event) => setResultForm({ ...resultForm, title: event.target.value })} placeholder="Result title" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={resultForm.year} onChange={(event) => setResultForm({ ...resultForm, year: event.target.value })} placeholder="Year" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={resultForm.imageUrl} onChange={(event) => setResultForm({ ...resultForm, imageUrl: event.target.value })} placeholder="Image URL" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" onChange={(event) => setResultFile(event.target.files?.[0] || null)} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d]" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">Image URL optional hai. URL blank hoga to selected image Supabase Storage me upload hogi.</p>
            <button type="button" onClick={saveResult} disabled={uploadingResult} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{uploadingResult ? 'Saving...' : editingResultId ? 'Update Result' : 'Save Result'}</button>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Title', 'Year', 'Image Link', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
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
                      <td className="max-w-[260px] truncate p-3">{record.image_url}</td>
                      <td className="p-3"><button type="button" onClick={() => editResult(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredResultRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No result photos found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'houses' ? (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
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
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
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
                      <td className="p-3"><button type="button" onClick={() => editPrincipal(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {adminSection === 'admissions' ? (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
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

        {adminSection === 'contacts' ? (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
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

        {collectionMessage ? <p className="mt-5 rounded-md bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">{collectionMessage}</p> : null}
      </section>
    </main>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(null)
  const [activePage, setActivePage] = useState(() => window.location.pathname.replace(/^\/|\/$/g, ''))
  const [loading, setLoading] = useState(true)
  const [adminSession, setAdminSession] = useState(null)
  const [adminLoading, setAdminLoading] = useState(() => Boolean(supabase))
  const [cmsPages, setCmsPages] = useState({})
  const [publicGalleryPhotos, setPublicGalleryPhotos] = useState([])
  const [formMessage, setFormMessage] = useState('')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const syncPage = () => setActivePage(window.location.pathname.replace(/^\/|\/$/g, ''))

    window.addEventListener('popstate', syncPage)
    return () => window.removeEventListener('popstate', syncPage)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!supabase) return

    supabase
      .from('pages')
      .select('slug,title,eyebrow,body,hero_image_url,is_published')
      .eq('is_published', true)
      .then(({ data }) => {
        if (!data) return

        setCmsPages(Object.fromEntries(data.map((pageItem) => [
          pageItem.slug,
          {
            title: pageItem.title,
            eyebrow: pageItem.eyebrow,
            paragraphs: pageItem.body?.paragraphs || [],
            bullets: pageItem.body?.bullets,
            sections: pageItem.body?.sections,
            people: pageItem.body?.people,
            houses: pageItem.body?.houses,
            gallery: pageItem.body?.gallery,
            image: pageItem.hero_image_url,
          },
        ])))
      })

    supabase
      .from('gallery_photos')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicGalleryPhotos(data || []))
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
    setActivePage(href.replace(/^\/|\/$/g, ''))
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

    const table = type === 'admission' ? 'admission_enquiries' : 'contact_enquiries'
    const { error } = await supabase.from(table).insert(form)
    setFormMessage(error ? error.message : 'Thank you. Your form has been submitted successfully.')
  }

  const page = cmsPages[activePage] || contentPages[activePage]

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
              <img src={logo} alt="Shri Pragya Public School logo" className="h-16 w-16 flex-none rounded-sm object-cover sm:h-20 sm:w-20" />
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase leading-tight text-[#a8171d] sm:text-3xl">Shri Pragya Public School</p>
                <p className="mt-1 text-sm font-medium text-slate-900 sm:text-lg">Bijainagar, Rajasthan 305624</p>
                <p className="mt-1 hidden text-base font-bold text-[#a8171d] sm:block">Pragya Deep: Always Shining</p>
              </div>
            </a>
            <div className="hidden items-center gap-3 lg:flex">
              <span className="text-lg font-medium text-slate-900">Follow Us :</span>
              {socials.map(([name, label, color]) => (
                <a
                  key={name}
                  href="/contact-us/"
                  onClick={(event) => handleInternalLink(event, '/contact-us/')}
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: color }}
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="sticky top-0 z-50 bg-[#082f5f]/95 text-white shadow-lg shadow-slate-950/15 backdrop-blur" itemScope itemType="http://schema.org/SiteNavigationElement" role="navigation">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:hidden">
            <span className="text-sm font-extrabold uppercase tracking-wide text-[#ffc400]">Menu</span>
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
            <div className="flex items-center justify-center">
              {navItems.map((item) => (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    onClick={(event) => handleInternalLink(event, item.href)}
                    className={`flex items-center justify-between gap-1 px-3 py-3 text-sm font-semibold transition hover:text-[#ffc400] lg:justify-start ${item.label === 'Home' ? 'text-[#ffc400]' : ''}`}
                  >
                    {item.label}
                    {item.children ? <Icon name="chevron" className="h-4 w-4" /> : null}
                  </a>
                  {item.children ? (
                    <div className="grid gap-1 bg-[#061f3f] px-3 pb-3 lg:invisible lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-64 lg:translate-y-2 lg:rounded-md lg:bg-white lg:p-2 lg:text-slate-800 lg:opacity-0 lg:shadow-xl lg:transition lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                      {item.children.map(([childLabel, childHref]) => (
                        <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="rounded px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#ffc400] hover:text-[#102344] lg:text-slate-800">
                          {childLabel}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[9999] bg-slate-950/75 lg:hidden" onClick={closeMenu}>
          <aside id="primary-menu" className="ml-auto flex h-full w-[88vw] max-w-sm flex-col overflow-y-auto bg-[#082f5f] px-4 py-4 text-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-4">
              <img src={logo} alt="Shri Pragya Public School logo" className="h-14 w-14 rounded-sm bg-white object-contain p-1" />
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/20 bg-white/10 text-white"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <Icon name="x" />
              </button>
            </div>
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 last:border-b-0">
                {item.children ? (
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
                {item.children && openMobileMenu === item.label ? (
                  <div className="grid gap-1 pb-4 pl-3">
                    <a href={item.href} onClick={(event) => handleInternalLink(event, item.href)} className="rounded-md px-3 py-2 text-sm font-bold text-[#ffc400] transition hover:bg-[#ffc400] hover:text-[#102344]">
                      {item.label} Overview
                    </a>
                    {item.children.map(([childLabel, childHref]) => (
                      <a key={childLabel} href={childHref} onClick={(event) => handleInternalLink(event, childHref)} className="rounded-md px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-[#ffc400] hover:text-[#102344]">
                        {childLabel}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
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
          <AdminPanel adminProfile={{ email: adminSession.user.email }} cmsPages={cmsPages} onLogout={handleAdminLogout} onNavigate={handleInternalLink} onPageSaved={handlePageSaved} />
        )
      ) : page ? (
        <ContentPage page={page} activePage={activePage} onFormSubmit={handlePublicFormSubmit} formMessage={formMessage} galleryPhotos={publicGalleryPhotos} />
      ) : (
      <main id="home">
        <section className="relative min-h-[460px] overflow-hidden bg-[#06284d] lg:min-h-[520px]">
          <img src={campusHero} alt="Aerial campus view of Shri Pragya Public School" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06284d]/95 via-[#06284d]/60 to-transparent" />
          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-12 lg:min-h-[520px] lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-base font-bold text-[#ffc400] sm:text-lg">Nurturing Minds. Building Futures.</p>
              <h1 className="max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">Welcome to Shri Pragya Public School</h1>
              <div className="mt-5 h-1 w-20 bg-[#ffc400]" />
              <p className="mt-5 max-w-lg text-base leading-7 text-white/95 sm:text-lg">Empowering students with knowledge, values, confidence and skills to excel in life and create a better tomorrow.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/about/" onClick={(event) => handleInternalLink(event, '/about/')} className="inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#101827] shadow-xl shadow-black/20 transition hover:bg-white">
                  Explore More <Icon name="arrow" />
                </a>
                <a href="/contact-us/" onClick={(event) => handleInternalLink(event, '/contact-us/')} className="inline-flex items-center gap-3 rounded-md border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#06284d]">Admission Enquiry</a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
          <div className="grid overflow-hidden rounded-lg bg-[#fffaf0] shadow-2xl shadow-slate-950/15 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(([title, text, icon], index) => (
              <div key={title} className={`flex items-center gap-5 p-7 ${index > 0 ? 'lg:border-l lg:border-slate-300' : ''}`}>
                <span className="grid h-16 w-16 flex-none place-items-center rounded-full bg-[#a8171d] text-white"><Icon name={icon} className="h-8 w-8" /></span>
                <div>
                  <h2 className="text-xl font-extrabold text-[#16172b]">{title}</h2>
                  <p className="mt-1 font-medium text-[#33436b]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">About the school</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102344] sm:text-5xl">A disciplined, caring campus for confident learners.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">Shri Pragya Public School brings academics, values, sports and creative expression together in a structured environment. The website mirrors the school identity from the reference while extending it into a complete digital experience for parents, students and staff.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Value-based education', 'Qualified faculty', 'Regular parent communication', 'Balanced academics and activities'].map((item) => (
                <p key={item} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 font-semibold shadow-sm"><Icon name="check" className="h-5 w-5 text-[#a8171d]" />{item}</p>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-4xl font-black text-[#a8171d]">{value}</p>
                  <p className="mt-2 font-semibold text-slate-700">{label}</p>
                </div>
              ))}
            </div>
            <img src={campusHero} alt="School campus buildings and courtyard" className="h-72 w-full rounded-lg object-cover shadow-xl" />
          </div>
        </section>

        <section id="facilities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Facilities</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Spaces designed for learning, discipline and discovery.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map(([title, text, imageAlt, image]) => (
                <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-[#fffaf0] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={image} alt={imageAlt} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold text-[#102344]">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="academics" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Academics</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Clear pathways from foundation to board readiness.</h2>
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

        <section id="academic-calendar" className="bg-[#06284d] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Academics</p>
                <h2 className="mt-3 text-4xl font-black">Result</h2>
              </div>
              <a href="/academic-calendar/" onClick={(event) => handleInternalLink(event, '/academic-calendar/')} className="inline-flex w-fit items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">View All Results <Icon name="arrow" /></a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resultImages.slice(0, 3).map(([image, alt]) => (
                <img key={alt} src={image} alt={alt} className="h-72 w-full rounded-lg bg-white object-contain p-3 shadow-xl" />
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Activities</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Every child gets room to lead, perform and play.</h2>
              <a href="/gallery/" onClick={(event) => handleInternalLink(event, '/gallery/')} className="mt-8 inline-flex w-fit items-center gap-3 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">View Gallery <Icon name="arrow" /></a>
            </div>
            <img src={classStudentsTwo} alt="Students participating in school activities" className="h-80 w-full rounded-lg object-cover shadow-xl" />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {activities.map((item) => (
              <span key={item} className="rounded-md bg-white px-5 py-3 text-lg font-bold text-[#102344] shadow-sm">{item}</span>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Gallery</p>
            <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Campus glimpses</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {galleryImages.slice(0, 3).map(([image, alt]) => (
                <img key={alt} src={image} alt={alt} className="h-72 w-full rounded-lg object-cover shadow-md" />
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="rounded-lg bg-[#fffaf0] p-8 shadow-sm md:p-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Careers</p>
            <h2 className="mt-3 text-4xl font-black text-[#102344]">Join our teaching community.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">We welcome passionate educators who believe in discipline, care and student-centered learning. Share your profile with the school office for current vacancies.</p>
          </div>
        </section>

        <section id="contact-us" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Contact Us</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Visit the campus or send an enquiry.</h2>
              <div className="mt-8 grid gap-4 text-base font-semibold text-slate-700">
                {contactDetails.map(([label, value]) => (
                  <p key={label} className="flex gap-3">
                    <Icon name={label.includes('Email') ? 'mail' : label.includes('Helpline') ? 'phone' : 'location'} className="mt-0.5 h-5 w-5 flex-none text-[#a8171d]" />
                    <span><strong className="text-[#102344]">{label}:</strong> {value}</span>
                  </p>
                ))}
              </div>
            </div>
            <form className="grid gap-4 rounded-lg bg-[#fffaf0] p-6 shadow-sm">
              {['Parent Name', 'Phone Number'].map((label) => (
                <label key={label} className="grid gap-2 font-semibold text-slate-800">
                  {label}
                  <input className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#a8171d]" />
                </label>
              ))}
              <label className="grid gap-2 font-semibold text-slate-800">
                Student Class
                <select defaultValue="" className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#a8171d]">
                  <option value="" disabled>Select class</option>
                  {classOptions.map((className) => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 font-semibold text-slate-800">
                Message
                <textarea rows="4" className="rounded-md border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#a8171d]" />
              </label>
              <button type="button" className="rounded-md bg-[#a8171d] px-6 py-4 font-bold text-white">Submit Enquiry</button>
            </form>
          </div>
        </section>
      </main>
      )}

      <footer className="bg-[#06284d] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <img src={logo} alt="Shri Pragya Public School logo" className="h-16 w-16 rounded-sm bg-white object-contain p-1" />
              <div>
                <h2 className="text-xl font-black uppercase leading-tight">Shri Pragya Public School</h2>
                <p className="mt-1 text-sm text-white/75">Bijainagar, Rajasthan 305624</p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-white/75">Education with knowledge, discipline and values. Nurturing young minds for confident, responsible and meaningful lives.</p>
            <div className="mt-5 flex gap-3">
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
                ['Result', '/academic-calendar/'],
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
