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
          ['School Overview', '/about/'],
          ['Our Legacy', '/origin-history/'],
          ['Vision/Mission', '/origin-mission/'],
          ['Why Pragya School', '/why-pragya-school/'],
          ['Our Motto', '/our-motto/'],
          ['Our Branches', '/our-branches/'],
        ],
      },
      {
        label: 'Leadership Team',
        children: [
          ['Chairman Message', '/chairman-message/'],
          ['Director Message', '/director-message/'],
          ['Principal Message', '/principal-message/'],
        ],
      },
      {
        label: 'School Infrastructure',
        children: [
          ['Campus Overview', '/campus-overview/'],
          ['Safety & Security', '/safety-security/'],
        ],
      },
    ],
  },
  {
    label: 'Academics',
    href: '/academics/',
    children: [
      ['PG Section', '/pg-section/'],
      ['Primary Section', '/primary-section/'],
      ['Senior Section', '/senior-section/'],
      ['IIT-JEE & NEET Integrated Program', '/iit-jee-neet-program/'],
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
  { label: 'Gallery', href: '/gallery/' },
  {
    label: 'Beyond the Classroom',
    href: '/activities/',
    children: [
      ['Annual Function', '/annual-function/'],
      ['Sports', '/music-sports-facilities/'],
      ['House System', '/house-system/'],
      ['Music', '/music/'],
      ['Dance', '/dance/'],
    ],
  },
  {
    label: 'More',
    href: '/academic-report-co-curricular/',
    children: [
      ['Academic Report', '/academic-report-co-curricular/'],
      ['Curriculum', '/curriculum/'],
      ['Fee Structure', '/fee-structure/'],
      ['Activity Calendar', '/academic-calendar/'],
      ['Achievement', '/achievments/'],
      ['Students Timing', '/students-timing/'],
      ['PTM', '/ptm/'],
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

const pageVisualThemes = {
  campus: {
    heading: 'A School Experience Built with Purpose',
    copy: 'Every part of school life is designed to help learners feel supported, remain disciplined and grow with confidence.',
    highlights: ['Caring environment', 'Strong values', 'Confident learners'],
    photos: [
      [campusHero, 'Shri Pragya Public School campus'],
      [teacherImage, 'Teacher guiding students in class'],
      [classStudents, 'Students learning together'],
    ],
  },
  academics: {
    heading: 'Learning in Action',
    copy: 'Concept clarity grows through engaging classroom instruction, thoughtful practice and hands-on academic experiences.',
    highlights: ['Concept learning', 'Practical exposure', 'Regular guidance'],
    photos: [
      [digitalBoard, 'Digital classroom learning'],
      [chemistryLab, 'Students learning through science practicals'],
      [boysReading, 'Students developing study habits'],
    ],
  },
  facilities: {
    heading: 'Spaces That Support Every Learner',
    copy: 'Our campus resources give students opportunities to observe, practise, explore technology, read and participate actively.',
    highlights: ['Modern classrooms', 'Practical labs', 'Student comfort'],
    photos: [
      [computerLab, 'Computer lab facilities'],
      [studentLibrary, 'Library reading environment'],
      [physicsLab, 'Science laboratory facilities'],
    ],
  },
  activities: {
    heading: 'Confidence Beyond Textbooks',
    copy: 'Participation in events, sports and cultural activities helps students build expression, teamwork and leadership.',
    highlights: ['Teamwork', 'Creativity', 'Leadership'],
    photos: [
      [classStudentsTwo, 'Students participating in school life'],
      [sportsImage, 'Sports and activity opportunities'],
      [classStudents, 'Learning and celebration together'],
    ],
  },
  admissions: {
    heading: 'Begin the Pragya Journey',
    copy: 'Families are welcome to discover a learning environment shaped by care, discipline, opportunity and purposeful guidance.',
    highlights: ['Guided admission', 'Campus visit', 'Parent support'],
    photos: [
      [campusHero, 'School campus welcoming families'],
      [boysReading, 'A joyful start to learning'],
      [classStudentsTwo, 'Students growing with confidence'],
    ],
  },
  careers: {
    heading: 'Grow with Our Learning Community',
    copy: 'Committed educators and staff members contribute to a culture where students are known, guided and inspired.',
    highlights: ['Professional culture', 'Student care', 'Continuous learning'],
    photos: [
      [teacherImage, 'Dedicated teaching faculty'],
      [digitalTeaching, 'Modern teaching practices'],
      [classStudents, 'Learning supported by educators'],
    ],
  },
}

const getActivePageFromPath = () => window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
const getSlug = (value) => String(value || '')
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

const getPageVisualTheme = (activePage, page) => {
  const pageIdentity = `${activePage} ${page.eyebrow || ''} ${page.title || ''}`.toLowerCase()
  let theme = pageVisualThemes.campus

  if (/(career|opening|employee|teacher training|work culture)/.test(pageIdentity)) {
    theme = pageVisualThemes.careers
  } else if (/(admission|contact)/.test(pageIdentity)) {
    theme = pageVisualThemes.admissions
  } else if (/(facilit|infrastructure|classroom|laborator|computer|library|hostel|transport|safety|digital campus)/.test(pageIdentity)) {
    theme = pageVisualThemes.facilities
  } else if (/(academic|curriculum|section|iit|neet|report|exam)/.test(pageIdentity)) {
    theme = pageVisualThemes.academics
  } else if (/(gallery|beyond|annual|sports|house|music|dance|alumni|achievement|calendar|ptm)/.test(pageIdentity)) {
    theme = pageVisualThemes.activities
  }

  const heroPhoto = page.image && page.image !== logo ? page.image : theme.photos[0][0]
  const photos = [[heroPhoto, `${page.title} - Shri Pragya Public School`], ...theme.photos]
    .filter(([image], index, allPhotos) => allPhotos.findIndex(([candidate]) => candidate === image) === index)
    .slice(0, 3)

  return { ...theme, heroPhoto, photos }
}

const historyMilestones = [
  ['1976', 'Pragya Bal Mandir Founded', 'Shri Pragya Jain Smarak Samiti began the educational journey with a commitment to values and meaningful learning.'],
  ['1997', 'Shri Pragya Public School', 'The institution developed into Shri Pragya Public School to serve students through a broader academic environment.'],
  ['2003', 'Secondary School Status', 'The school expanded its academic pathway to support students during their important secondary years.'],
  ['2007', 'Senior Secondary Growth', 'Senior secondary education strengthened the institution as a complete school community for the region.'],
]

const getPageLayoutKind = (activePage, page) => {
  const pageIdentity = `${activePage} ${page.eyebrow || ''} ${page.title || ''}`.toLowerCase()

  if (activePage === 'origin-history') return 'history'
  if (/(chairman|director|principal|management|leadership)/.test(pageIdentity)) return 'leadership'
  if (/(vision|mission|motto|core values|educational philosophy)/.test(pageIdentity)) return 'values'
  if (/(admission|contact|career|opening|employee|work culture|teacher training)/.test(pageIdentity)) return 'enquiry'
  if (/(facilit|infrastructure|classroom|laborator|computer|library|hostel|transport|safety|digital campus)/.test(pageIdentity)) return 'facilities'
  if (/(academic|curriculum|section|iit|neet|report|exam)/.test(pageIdentity)) return 'academics'
  if (/(gallery|beyond|annual|sports|house|music|dance|alumni|achievement|calendar|ptm)/.test(pageIdentity)) return 'activities'
  return 'editorial'
}

const contentPages = {
  about: {
    eyebrow: 'About Us',
    title: 'School Overview',
    image: teacherImage,
    layoutVariant: 'about-school',
    paragraphs: [
      'Shri Pragya Public School is a premier educational institution committed to providing quality education and fostering an environment of learning, discipline, innovation, and holistic development.',
      'With a rich legacy of academic excellence and value-based education, the school has emerged as one of the most reputed senior secondary schools in Bijainagar and its surrounding region.',
      'The foundation of the institution was laid in 1976 by Shri Pragya Jain Smarak Samiti as Pragya Bal Mandir. With a vision to provide comprehensive and modern education, the institution was later transformed into Shri Pragya Public School in 1997. Since its inception, the school has continuously evolved to meet the changing educational needs of students while preserving strong moral and cultural values.',
      'Inspired by the spiritual guidance and blessings of Guru Dev Shri Pannalal Ji Maharaj Saheb, the supreme head of Jain Shwetamber Sthankwasi Nanak Vansh, the institution has grown with dedication, commitment, and excellence in the field of education.',
      'Our highly qualified faculty members and dedicated staff work tirelessly to nurture young minds and prepare students for future challenges and opportunities. Through innovative teaching methodologies, smart learning practices, competitive exam preparation, sports, co-curricular activities, and personality development programs, the school focuses on the overall growth of every student.',
      'The school achieved Secondary Level recognition in 2003 and Senior Secondary Level recognition in 2007, marking significant milestones in its journey of excellence.',
      'At Shri Pragya Public School, we believe that education goes beyond textbooks. Our aim is to develop confident, responsible, compassionate, and future-ready individuals who contribute positively to society and the nation.',
      'We welcome you to explore our institution and become a part of the Pragya family, where learning inspires excellence and values shape character.',
    ],
    bullets: ['Learning and discipline', 'Innovation and smart learning', 'Holistic development', 'Value-based education', 'Future-ready guidance', 'Pragya family values'],
    sections: [
      {
        heading: 'Dedicated Faculty and Student Growth',
        paragraphs: [
          'Our highly qualified faculty members and dedicated staff work tirelessly to nurture young minds and prepare students for future challenges and opportunities.',
          'Through innovative teaching methodologies, smart learning practices, competitive exam preparation, sports, co-curricular activities, and personality development programs, the school focuses on the overall growth of every student.',
        ],
      },
      {
        heading: 'Milestones of Excellence',
        paragraphs: [
          'The school achieved Secondary Level recognition in 2003 and Senior Secondary Level recognition in 2007, marking significant milestones in its journey of excellence.',
          'We welcome you to explore our institution and become a part of the Pragya family, where learning inspires excellence and values shape character.',
        ],
      },
    ],
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
  'why-pragya-school': {
    eyebrow: 'About Us',
    title: 'Why Pragya School',
    image: classStudentsTwo,
    paragraphs: [
      'Shri Pragya Public School is dedicated to providing an enriching educational experience that combines academic excellence, moral values, modern learning practices, and holistic development.',
      'With a strong legacy of quality education and a student-centered approach, the school has emerged as one of the most trusted educational institutions in the region.',
    ],
    sections: [
      {
        heading: 'Academic Excellence',
        paragraphs: ['The school follows a well-structured academic system focused on conceptual clarity, practical learning, and continuous improvement, helping students achieve outstanding academic results.'],
      },
      {
        heading: 'Experienced & Dedicated Faculty',
        paragraphs: ['Our team of highly qualified and experienced educators is committed to nurturing every student through personalized attention, mentorship, and innovative teaching methodologies.'],
      },
      {
        heading: 'IIT-JEE & NEET Integrated Preparation',
        paragraphs: ['The school provides integrated coaching programs that prepare students for competitive examinations like IIT-JEE and NEET alongside regular academics.'],
      },
      {
        heading: 'Holistic Development',
        paragraphs: ['At Pragya School, education goes beyond textbooks. Students are encouraged to participate in sports, cultural activities, leadership programs, debates, music, dance, and various co-curricular activities for overall personality development.'],
      },
      {
        heading: 'Modern Infrastructure',
        paragraphs: ['The campus is equipped with smart classrooms, well-equipped laboratories, computer labs, library facilities, sports infrastructure, and digital learning resources to create an engaging learning environment.'],
      },
      {
        heading: 'Safe & Disciplined Environment',
        paragraphs: ['We provide a secure, disciplined, and nurturing atmosphere that supports the academic, emotional, and personal growth of every child.'],
      },
      {
        heading: 'Hostel Facilities',
        paragraphs: ['Separate hostel facilities for boys and girls offer a comfortable and disciplined environment with proper academic support, safety, and hygienic living arrangements.'],
      },
      {
        heading: 'Value-Based Education',
        paragraphs: ['The school strongly believes in imparting moral values, discipline, respect, compassion, and social responsibility along with academic education.'],
      },
      {
        heading: 'Focus on Future Readiness',
        paragraphs: ['Through skill development, career guidance, leadership activities, and technology integration, students are prepared to face future challenges with confidence and competence.'],
      },
      {
        heading: 'Strong Legacy & Trust',
        paragraphs: ['With decades of educational excellence under Shri Pragya Jain Smarak Samiti, the institution continues to inspire generations of learners and contribute meaningfully to society.'],
      },
    ],
  },
  'our-motto': {
    eyebrow: 'About Us',
    title: 'Our Motto',
    image: logo,
    paragraphs: [
      '"Learn - Lead - Achieve"',
      'At Shri Pragya Public School, our motto reflects our commitment to nurturing knowledgeable, confident, and responsible individuals. We inspire students to continuously learn with curiosity, lead with integrity and confidence, and achieve excellence in every sphere of life.',
      'Through quality education, strong values, discipline, and holistic development, we strive to empower students to become future-ready leaders and responsible citizens who contribute positively to society.',
    ],
  },
  'our-branches': {
    eyebrow: 'About Us',
    title: 'Our Branches',
    hideImages: true,
    paragraphs: [
      'Our Branch Are',
    ],
    bullets: [
      'Bijainagar',
      'Gulabpura',
      'Bhinai',
      'Masuda',
      'Bandanware',
      'P.I.S BIAJINAGAR',
    ],
  },
  'origin-history': {
    eyebrow: 'Our Legacy',
    title: 'Our Legacy',
    image: campusHero,
    paragraphs: [
      'Shri Pragya Public School proudly carries a rich legacy of educational excellence, discipline, and value-based learning. Established under the esteemed guidance of Shri Pragya Jain Smarak Samiti, the institution has been dedicated to shaping young minds and empowering students with knowledge, confidence, and strong moral values for decades.',
      'The journey began in 1976 with the establishment of Pragya Bal Mandir, founded with the vision of providing quality education and holistic development to students in Bijainagar and nearby regions. With continuous progress, dedication, and community trust, the institution was transformed into Shri Pragya Public School in 1997.',
      'Inspired by the spiritual values and blessings of Guru Dev Shri Pannalal Ji Maharaj Saheb, the supreme head of Jain Shwetamber Sthankwasi Nanak Vansh, the institution has consistently upheld the ideals of discipline, integrity, compassion, and excellence.',
      'Over the years, the school has achieved remarkable milestones, becoming a Secondary School in 2003 and a Senior Secondary School in 2007. Through its commitment to academic excellence, competitive preparation, sports, co-curricular activities, and character building, the school has earned a reputation as one of the leading educational institutions in the region.',
      'Today, Shri Pragya Public School stands as a symbol of trust, tradition, innovation, and excellence, continuing its mission of nurturing future leaders and responsible citizens.',
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
          'At Shri Pragya Public School, our vision is to create an inspiring and progressive learning environment where every student is empowered to achieve academic excellence, develop strong moral values, and discover their true potential.',
          'We aim to nurture confident, compassionate, innovative, and responsible individuals who are prepared to face global challenges with integrity and leadership.',
          'We envision an institution that not only imparts knowledge but also inspires lifelong learning, creativity, discipline, and social responsibility, enabling students to become valuable contributors to society and the nation.',
        ],
      },
      {
        heading: 'Mission',
        paragraphs: [
          'Our mission is to provide a comprehensive and holistic education that promotes intellectual, emotional, physical, social, and ethical development of every student.',
        ],
        bullets: [
          'Delivering quality education through modern and innovative teaching methodologies.',
          'Creating a student-centered learning environment that encourages curiosity, creativity, and critical thinking.',
          'Instilling moral values, discipline, integrity, and respect in students.',
          'Encouraging participation in academics, sports, cultural, and co-curricular activities for overall personality development.',
          'Integrating technology and experiential learning to prepare students for future opportunities and challenges.',
          'Guiding students towards academic excellence and success in competitive examinations.',
          'Building confident, responsible, and compassionate individuals who contribute positively to society.',
          'Maintaining a safe, inclusive, and nurturing environment where every child feels valued and inspired to grow.',
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
      'Education is most valuable when it enables young people to act with wisdom, courage and compassion. Our aim is to provide an atmosphere where students pursue excellence while remaining grounded in values.',
      'I extend my best wishes to every student, parent and staff member who contributes to the continuing journey of Shri Pragya Public School.',
    ],
  },
  'director-message': {
    eyebrow: 'Leadership Team',
    title: 'Director Message',
    image: drNavalSingh,
    paragraphs: [
      'At Pragya, we strive to guide every child through strong academics, character development and opportunities that prepare them for a purposeful future.',
      'Our focus is on clear teaching, regular evaluation, modern resources and responsible mentoring. Students should be equipped not only to perform in examinations but also to make informed choices with confidence.',
      'Together with parents and teachers, we continue to strengthen an educational culture built on commitment and care.',
    ],
  },
  'principal-message': {
    eyebrow: 'Leadership Team',
    title: 'Principal Message',
    image: nidhiMathur,
    layoutVariant: 'principal-message',
    paragraphs: [
      'Dear Students, Parents, and Well-Wishers,',
      'Welcome to Shri Pragya Public School, an institution dedicated to academic excellence, value-based education, and holistic development. At Pragya, we believe that education is the foundation for building confident, responsible, and future-ready individuals.',
      'Our commitment is to provide a progressive learning environment that nurtures intellectual growth, creativity, discipline, leadership, and moral values. We strive to empower students with knowledge, skills, and confidence that enable them to excel in academics and contribute meaningfully to society.',
      'The school consistently achieves outstanding board examination results and academic accomplishments, reflecting our dedication to quality education, disciplined learning, and continuous student guidance. Our focus remains on nurturing excellence through conceptual understanding, innovation, and result-oriented learning practices.',
      'The school emphasizes a balanced approach to education by integrating academics, sports, co-curricular activities, and life skills with modern teaching methodologies and technology-enabled learning. Our dedicated faculty members continuously guide and inspire students to achieve their highest potential while fostering critical thinking, innovation, and lifelong learning.',
      'At Shri Pragya Public School, we view every child as unique and capable of achieving excellence. Through a safe, supportive, and motivating environment, we encourage students to develop self-confidence, integrity, compassion, and a spirit of responsibility.',
      'We are grateful to our parents for their continued trust and cooperation, which play a vital role in the growth and success of our students and institution. Together, we remain committed to shaping young minds into enlightened individuals and responsible global citizens.',
      'With Best Wishes,',
      'Principal Shri Pragya Public School',
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
    layoutVariant: 'infrastructure-image-first',
    hideClosingImages: true,
    paragraphs: [
      'Shri Pragya Public School provides a vibrant, safe, and student-friendly campus designed to create an ideal environment for academic excellence and holistic development. The school campus combines modern infrastructure with a disciplined and nurturing atmosphere that encourages learning, creativity, innovation, and personal growth.',
      'Our well-planned campus is equipped with smart classrooms, advanced science and computer laboratories, a rich library, sports facilities, activity areas, and digital learning resources to support an engaging and interactive educational experience. Every facility is thoughtfully developed to meet the academic, physical, creative, and emotional needs of students.',
      'The school emphasizes cleanliness, safety, and environmental awareness, ensuring a secure and healthy atmosphere for all students. CCTV surveillance, disciplined campus management, and dedicated staff supervision contribute to maintaining a safe learning environment.',
      'Along with academics, the campus promotes co-curricular excellence through dedicated spaces for sports, music, dance, cultural activities, and student interaction. Spacious playgrounds and recreational areas encourage physical fitness, teamwork, and overall well-being.',
      'The hostel facilities provide a comfortable and supportive environment for students, with proper care, academic guidance, hygienic dining, and disciplined supervision.',
      'At Shri Pragya Public School, the campus reflects our commitment to providing quality education in an inspiring environment where students learn, grow, and prepare themselves for future success.',
    ],
    bullets: ['Smart classrooms', 'Science and computer labs', 'Library and reading spaces', 'Sports facilities', 'Transport support', 'Hostel support'],
    sections: [
      {
        heading: 'A Learning-Focused Campus',
        paragraphs: ['Campus facilities are planned to support curiosity, discipline, teamwork and safe participation in both academic and co-curricular learning.'],
      },
    ],
  },
  'safety-security': {
    eyebrow: 'School Infrastructure',
    title: 'Safety & Security',
    image: campusHero,
    layoutVariant: 'infrastructure-image-first',
    hideClosingImages: true,
    paragraphs: [
      'At Shri Pragya Public School, the safety, security, and well-being of our students are of utmost importance. We are committed to providing a safe, disciplined, and nurturing environment where students can learn and grow with confidence and peace of mind.',
      'The school campus is equipped with CCTV surveillance systems to ensure continuous monitoring and enhanced security across key areas of the campus. Entry and exit points are carefully supervised, and strict safety protocols are followed to maintain a secure environment for students, staff, and visitors.',
      'The institution maintains a disciplined campus culture under the guidance of experienced faculty members, administrative staff, and support personnel. Regular monitoring and supervision help ensure student safety throughout the school day.',
      'Safe transportation facilities with trained drivers and support staff further ensure the security and comfort of students during travel. The school also emphasizes health and hygiene through clean surroundings, regular sanitation, and basic medical support for emergencies.',
      'Fire safety measures, emergency preparedness, and awareness programs are conducted regularly to ensure that students and staff remain informed and prepared. The school continuously strives to maintain an environment that promotes physical safety, emotional well-being, and positive learning experiences for every student.',
      'At Shri Pragya Public School, we believe that a safe and secure environment is essential for effective learning and the overall development of every child.',
    ],
    bullets: ['Supervised campus routines', 'Safe transport guidance', 'Health support access', 'Parent communication', 'Visitor awareness', 'Discipline and conduct'],
    sections: [
      {
        heading: 'Student Wellbeing',
        paragraphs: ['Parents are encouraged to keep student health and emergency information updated and to follow official school instructions regarding attendance, pickup and transport.'],
      },
    ],
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
      'Facilities are used as part of the learning experience: classrooms support engagement, laboratories support experimentation, the library builds reading habits, and activity spaces encourage fitness and teamwork.',
    ],
    bullets: ['Smart classrooms', 'Science laboratories', 'Computer lab', 'Library', 'Sports spaces', 'Hostel facilities', 'Transport support', 'Student wellbeing'],
    sections: [
      {
        heading: 'Spaces that Support Learning',
        paragraphs: ['Our facilities help students connect classroom ideas with observation, practice, reading, technology and healthy activity.'],
      },
      {
        heading: 'Care and Convenience',
        paragraphs: ['Transport and residential support are designed to help families access an organised, attentive and disciplined educational environment.'],
      },
    ],
  },
  'computer-lab': {
    eyebrow: 'Facilities',
    title: 'Computer Lab',
    image: computerLab,
    paragraphs: [
      'Shri Pragya Public School provides a well-equipped and modern Computer Lab designed to develop digital literacy, technical skills, and technological awareness among students. The lab offers a dynamic learning environment where students gain practical knowledge and hands-on experience with computers and modern technology.',
      'Equipped with advanced computer systems, updated software, high-speed internet connectivity, and essential digital resources, the lab supports interactive and skill-based learning. Students are introduced to computer fundamentals, programming concepts, digital applications, internet usage, and technology-based learning practices that enhance their academic and practical knowledge.',
      'The Computer Lab encourages students to explore creativity, logical thinking, problem-solving skills, and innovation through practical activities and project-based learning. Under the guidance of experienced faculty members, students learn to use technology confidently, responsibly, and effectively in today\'s digital world.',
      'The school emphasizes safe and ethical use of technology while creating opportunities for students to stay updated with modern technological advancements and future-ready skills.',
      'At Shri Pragya Public School, the Computer Lab plays an important role in preparing students for a technology-driven future by promoting digital competence, creativity, and lifelong learning.',
    ],
  },
  library: {
    eyebrow: 'Facilities',
    title: 'Library',
    image: studentLibrary,
    paragraphs: [
      'The library at Shri Pragya Public School serves as a center of knowledge, learning, and intellectual development. It provides students with a rich collection of academic books, reference materials, journals, magazines, newspapers, and digital resources that support both curriculum-based learning and personal growth.',
      'The library encourages reading habits, self-learning, research, and creative thinking among students. A peaceful and well-organized environment helps students improve their knowledge, language skills, concentration, and analytical abilities while developing a lifelong interest in reading and learning.',
    ],
  },
  hostel: {
    eyebrow: 'Facilities',
    title: 'Hostel Facility For Boys and Girls',
    image: boyHostel,
    paragraphs: [
      'Shri Pragya Public School offers separate hostel facilities for boys and girls, providing a safe, comfortable, disciplined, and nurturing environment that supports both academic excellence and personal development. The hostels are thoughtfully designed to create a homely atmosphere where students feel secure, motivated, and well cared for throughout their educational journey.',
      'The hostel infrastructure includes spacious and well-furnished rooms, hygienic dining arrangements, clean surroundings, dedicated study areas, and recreational facilities to ensure a balanced and healthy lifestyle for students. A disciplined daily routine combined with academic support helps students develop self-discipline, responsibility, confidence, and independence.',
      'Experienced wardens and caring support staff provide continuous supervision, guidance, and emotional support to ensure the well-being and safety of every student. The hostels are equipped with proper safety measures, regular monitoring, and a secure environment that gives parents complete peace of mind.',
      'Nutritious and hygienic meals are provided with special attention to students\' health, wellness, and dietary needs. Along with academics, students are encouraged to participate in sports, cultural activities, and personality development programs for their overall growth and well-being.',
      'At Shri Pragya Public School, the hostel facilities reflect our commitment to creating a supportive and student-friendly environment where students can learn, grow, and achieve their full potential with confidence and discipline.',
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
    title: 'Science Laboratories',
    image: microscopeLab,
    paragraphs: [
      'Shri Pragya Public School provides well-equipped and modern Science Laboratories that promote practical learning, scientific thinking, and experiential education among students. The laboratories are designed to provide hands-on learning experiences that help students understand scientific concepts through observation, experimentation, and analysis.',
      'Separate laboratories for Physics, Chemistry, and Biology are equipped with the necessary instruments, apparatus, models, specimens, and safety measures to support effective practical learning. The labs provide students with opportunities to explore scientific principles, develop analytical skills, and enhance conceptual understanding through experiments and demonstrations.',
      'The school encourages students to actively participate in practical activities, research-based learning, and scientific exploration, helping them develop curiosity, critical thinking, problem-solving abilities, and innovation. Under the guidance of experienced faculty members, students gain confidence in applying theoretical knowledge to real-life situations.',
      'Safety, discipline, and proper laboratory practices are given utmost importance to ensure a secure and productive learning environment for all students.',
      'At Shri Pragya Public School, the Science Laboratories play a vital role in nurturing scientific temperament, creativity, and a spirit of inquiry, preparing students for academic excellence and future scientific pursuits.',
    ],
  },
  'music-sports-facilities': {
    eyebrow: 'Beyond the Classroom',
    title: 'Sports',
    image: classStudents,
    paragraphs: [
      'Shri Pragya Public School strongly believes that sports and physical activities are essential for the overall growth and development of students. The school provides excellent sports facilities and encourages students to actively participate in various indoor and outdoor games to promote physical fitness, discipline, teamwork, and sportsmanship.',
      'Students are given opportunities to participate in activities such as cricket, basketball, volleyball, athletics, yoga, Mallakhamb, skating, and indoor games under proper guidance and supervision. Regular sports activities, competitions, and fitness programs help students develop confidence, leadership qualities, determination, and a healthy lifestyle.',
      'The school actively promotes traditional Indian sports and modern fitness activities that help students improve strength, flexibility, balance, concentration, coordination, and self-discipline while encouraging active participation and healthy competition.',
      'The school aims to maintain a healthy balance between academics and physical development, ensuring the holistic growth and overall well-being of every student.',
    ],
  },
  'interactive-classroom': {
    eyebrow: 'Facilities',
    title: 'Smart Classrooms',
    image: digitalBoard,
    paragraphs: [
      'At Shri Pragya Public School, Smart Classrooms are designed to make learning more interactive, engaging, and effective through the integration of modern technology with classroom teaching. Our technology-enabled learning environment enhances the teaching-learning process by making concepts easier to understand, visually appealing, and practically oriented.',
      'The classrooms are equipped with advanced digital teaching tools, audio-visual aids, interactive presentations, and multimedia resources that help students grasp complex topics with greater clarity and interest. Through animations, videos, real-time demonstrations, and interactive content, learning becomes more enjoyable, participative, and student-centered.',
      'Smart classroom teaching encourages active involvement, improves concentration, strengthens conceptual understanding, and promotes creative and analytical thinking among students. It also supports different learning styles, enabling every child to learn at their own pace with better understanding and retention.',
      'By integrating technology into daily teaching practices, the school creates a dynamic and future-ready educational environment that enhances academic performance and develops digital awareness among students.',
      'At Shri Pragya Public School, Smart Classrooms reflect our commitment to innovation, quality education, and modern learning methodologies that prepare students for the evolving world.',
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
    title: 'Transport Facility',
    image: busImage,
    paragraphs: [
      'Shri Pragya Public School provides safe, reliable, and well-organized transport facilities for students from nearby towns and surrounding areas. The transportation system is designed to ensure comfort, punctuality, and safety during daily travel to and from the school campus.',
      'The school buses are operated by experienced drivers and trained support staff while maintaining proper safety standards and discipline. Regular monitoring, route management, and supervision ensure smooth and secure transportation services for students.',
      'The transport facility is planned to provide convenience to parents and a comfortable travel experience for students, ensuring that they reach school safely and on time every day.',
    ],
  },
  academics: {
    eyebrow: 'Academics',
    title: 'Academics',
    image: boysReading,
    paragraphs: [
      'Shri Pragya Public School offers a structured academic journey across the Foundation Stage, Preparatory Stage, Middle Stage, and Senior Stage.',
      'At every stage, the school focuses on academic excellence, holistic development, values, confidence, communication, and future readiness.',
    ],
    sections: [
      {
        heading: 'Foundation Stage (Pre-Primary)',
        paragraphs: [
          'Classes: PG, Nursery, LKG & UKG',
          'The Foundation Stage at Shri Pragya Public School provides a joyful, caring, and stimulating learning environment where young learners begin their educational journey with confidence and enthusiasm. We understand that the early years of education are crucial for the overall growth and development of a child, and therefore we focus on building strong foundational skills through engaging and meaningful learning experiences.',
          'Our curriculum is designed to promote intellectual, emotional, social, physical, and creative development through activity-based and experiential learning methodologies. Through storytelling, music, games, art, interactive activities, and play-way techniques, children develop communication skills, creativity, curiosity, confidence, and a love for learning.',
          'The classrooms are thoughtfully designed to be safe, colorful, and child-friendly, creating a warm and nurturing atmosphere where children feel secure, happy, and motivated to explore the world around them.',
        ],
      },
      {
        heading: 'Preparatory Stage (Primary Section)',
        paragraphs: [
          'Classes: I to V',
          'The Preparatory Stage at Shri Pragya Public School focuses on strengthening academic foundations while nurturing curiosity, creativity, confidence, and essential life skills among students. During these formative years, students are encouraged to become active, independent, and enthusiastic learners through engaging and meaningful educational experiences.',
          'The curriculum provides a balanced blend of academics, co-curricular activities, values, and skill development through interactive and student-centered teaching methodologies. Emphasis is placed on conceptual understanding, communication skills, creativity, and experiential learning to ensure holistic growth and development.',
          'Students actively participate in classroom activities, projects, sports, music, dance, art, and cultural programs that contribute to their overall personality development.',
        ],
      },
      {
        heading: 'Middle Stage',
        paragraphs: [
          'Classes: VI to VIII',
          'The Middle Stage is designed to strengthen conceptual understanding, analytical thinking, communication skills, and subject knowledge among students. The curriculum encourages inquiry-based learning, practical understanding, creativity, and skill development through modern teaching methodologies and interactive classroom experiences.',
          'Students are encouraged to participate in academics, sports, leadership activities, competitions, and co-curricular programs that enhance confidence, teamwork, discipline, and overall personality development.',
        ],
      },
      {
        heading: 'Senior Stage',
        paragraphs: [
          'Classes: IX to XII',
          'The Senior Stage at Shri Pragya Public School focuses on academic excellence, leadership development, career readiness, and future aspirations. Students are guided through comprehensive subject learning, critical thinking, practical knowledge, and technology-enabled education to prepare them for higher education and future opportunities.',
          'Special emphasis is placed on conceptual clarity, problem-solving skills, communication, competitive preparedness, and personality development. Through continuous guidance, assessments, mentorship, and career support, students are encouraged to achieve excellence with confidence, discipline, and determination.',
          'At Shri Pragya Public School, the Senior Stage nurtures responsible, knowledgeable, and future-ready individuals prepared to excel in every sphere of life.',
        ],
      },
    ],
  },
  'pg-section': {
    eyebrow: 'Academics',
    title: 'Foundation Stage (Pre-Primary)',
    image: classStudentsTwo,
    paragraphs: [
      'Classes: PG, Nursery, LKG & UKG',
      'The Foundation Stage at Shri Pragya Public School provides a joyful, caring, and stimulating learning environment where young learners begin their educational journey with confidence and enthusiasm. We understand that the early years of education are crucial for the overall growth and development of a child, and therefore we focus on building strong foundational skills through engaging and meaningful learning experiences.',
      'Our curriculum is designed to promote intellectual, emotional, social, physical, and creative development through activity-based and experiential learning methodologies. Through storytelling, music, games, art, interactive activities, and play-way techniques, children develop communication skills, creativity, curiosity, confidence, and a love for learning.',
      'The classrooms are thoughtfully designed to be safe, colorful, and child-friendly, creating a warm and nurturing atmosphere where children feel secure, happy, and motivated to explore the world around them.',
    ],
  },
  'primary-section': {
    eyebrow: 'Academics',
    title: 'Preparatory Stage (Primary Section)',
    image: boysReading,
    paragraphs: [
      'Classes: I to V',
      'The Preparatory Stage at Shri Pragya Public School focuses on strengthening academic foundations while nurturing curiosity, creativity, confidence, and essential life skills among students. During these formative years, students are encouraged to become active, independent, and enthusiastic learners through engaging and meaningful educational experiences.',
      'The curriculum provides a balanced blend of academics, co-curricular activities, values, and skill development through interactive and student-centered teaching methodologies. Emphasis is placed on conceptual understanding, communication skills, creativity, and experiential learning to ensure holistic growth and development.',
      'Students actively participate in classroom activities, projects, sports, music, dance, art, and cultural programs that contribute to their overall personality development.',
    ],
  },
  'senior-section': {
    eyebrow: 'Academics',
    title: 'Senior Stage',
    image: chemistryLab,
    paragraphs: [
      'Classes: IX to XII',
      'The Senior Stage at Shri Pragya Public School focuses on academic excellence, leadership development, career readiness, and future aspirations. Students are guided through comprehensive subject learning, critical thinking, practical knowledge, and technology-enabled education to prepare them for higher education and future opportunities.',
      'Special emphasis is placed on conceptual clarity, problem-solving skills, communication, competitive preparedness, and personality development. Through continuous guidance, assessments, mentorship, and career support, students are encouraged to achieve excellence with confidence, discipline, and determination.',
      'At Shri Pragya Public School, the Senior Stage nurtures responsible, knowledgeable, and future-ready individuals prepared to excel in every sphere of life.',
    ],
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
      'Students are encouraged to build strong concepts first, then develop accuracy, speed and examination discipline through planned practice and timely feedback.',
    ],
    bullets: ['Concept-oriented teaching', 'Regular testing', 'Doubt resolution', 'Performance review', 'Mentorship', 'Career guidance'],
    sections: [
      {
        heading: 'Program Framework',
        paragraphs: ['The program combines school curriculum needs with focused problem-solving practice, revision schedules and subject-wise academic support.'],
      },
      {
        heading: 'Testing and Tracking',
        paragraphs: ['Tests and review discussions help students understand their performance, identify improvement areas and maintain consistency over time.'],
      },
      {
        heading: 'Mentoring and Guidance',
        paragraphs: ['Teacher support and counseling encourage students to manage goals responsibly and select suitable pathways for engineering, medical or other higher education opportunities.'],
      },
    ],
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
      'Updates may be communicated through notices or school communication channels so families can plan participation and attendance responsibly.',
    ],
    bullets: ['Assessment schedule', 'Activity dates', 'PTM information', 'Holiday updates', 'Celebration dates', 'School notices'],
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
    sections: [
      {
        heading: 'Academic Progress',
        paragraphs: ['Teachers observe classwork, written work, assessments and participation to understand student progress and provide appropriate guidance.'],
      },
      {
        heading: 'Co-Curricular Development',
        paragraphs: ['Activities complement academics by developing communication, creativity, leadership, sportsmanship and confidence.'],
      },
    ],
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
    bullets: ['Languages and communication', 'Mathematics and reasoning', 'Science and practical inquiry', 'Social awareness', 'Digital literacy', 'Arts and physical education'],
    sections: [
      {
        heading: 'Balanced Learning',
        paragraphs: ['Subject teaching is strengthened through activities, revision, projects, reading, laboratory exposure and age-appropriate evaluation.'],
      },
    ],
  },
  achievments: {
    eyebrow: 'Academics',
    title: 'Achievements',
    image: classStudentsTwo,
    paragraphs: [
      'Students of Shri Pragya Public School are encouraged to achieve excellence in academics, sports, arts, competitions and community participation.',
      'Achievement at Pragya includes consistent effort, improvement, discipline, teamwork and the confidence to represent the school with responsibility.',
    ],
    bullets: ['Board examination performance', 'Inter-school competitions', 'Sports tournaments', 'Cultural events', 'Science and literary activities', 'Student leadership initiatives'],
    sections: [
      {
        heading: 'Celebrating Every Step',
        paragraphs: ['Recognition motivates students to work sincerely, learn from experience and continue striving for excellence in their chosen fields.'],
      },
    ],
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
      'To ensure families receive correct information, all applicable fee details, payment guidance and facility charges should be confirmed directly with the school office for the relevant session.',
    ],
    bullets: ['Class-wise fee guidance', 'Transport enquiry', 'Hostel enquiry', 'Admission-related information', 'Payment guidance', 'Office support'],
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
    eyebrow: 'Beyond the Classroom',
    title: 'Beyond the Classroom',
    image: classStudents,
    paragraphs: [
      'Activities at Shri Pragya Public School help students lead, perform, collaborate and build confidence beyond the classroom.',
      'Cultural programs, sports, house events, music and dance provide opportunities for self-expression, resilience, healthy competition and teamwork.',
    ],
    bullets: ['Annual Function', 'Sports', 'House System', 'Music', 'Dance', 'Leadership opportunities'],
    sections: [
      {
        heading: 'Confidence Through Participation',
        paragraphs: ['Every activity encourages students to practise, perform responsibly, appreciate others and discover their individual interests.'],
      },
    ],
  },
  'annual-award': {
    eyebrow: 'Activities',
        paragraphs: [
          'The annual award program celebrates academic excellence, discipline, sportsmanship, creativity, leadership and consistent effort.',
        ],
  },
  'annual-function': {
    eyebrow: 'Beyond the Classroom',
    title: 'Annual Function',
    image: classStudentsTwo,
    paragraphs: [
      'The Annual Function at Shri Pragya Public School is one of the most awaited and prestigious events of the academic year, celebrating the talent, creativity, achievements, and cultural spirit of students. The event provides a vibrant platform for students to showcase their skills, confidence, and artistic abilities through a variety of performances and presentations.',
      'Students enthusiastically participate in cultural programs, music, dance, drama, group performances, and creative activities that reflect teamwork, discipline, dedication, and cultural values. The Annual Function encourages students to express themselves confidently while enhancing their stage presence, communication skills, and leadership qualities.',
      'The event also serves as an opportunity to recognize and appreciate the achievements of students in academics, sports, co-curricular activities, and other fields of excellence. Parents, guests, and the school community come together to celebrate the accomplishments and overall development of students.',
      'The Annual Function reflects the school\'s commitment to holistic education by promoting creativity, cultural awareness, confidence, and overall personality development in a joyful and inspiring environment.',
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
  music: {
    eyebrow: 'Beyond the Classroom',
    title: 'Music',
    image: classStudents,
    paragraphs: [
      'Shri Pragya Public School believes that music is an essential part of holistic education and plays a significant role in nurturing creativity, confidence, emotional expression, and cultural awareness among students. The school provides students with opportunities to explore and develop their musical talents in a supportive and inspiring environment.',
      'Students are encouraged to participate in vocal and instrumental music activities, cultural programs, competitions, and school events that help enhance their artistic skills, stage confidence, discipline, and teamwork. Through regular practice and guidance, students develop rhythm, concentration, creativity, and self-expression.',
      'The school promotes appreciation for both Indian classical and contemporary music traditions, helping students connect with cultural values while developing their individual talents and interests.',
      'Music education at Shri Pragya Public School contributes to the overall personality development of students by fostering creativity, confidence, emotional well-being, and a lifelong appreciation for the arts.',
    ],
  },
  dance: {
    eyebrow: 'Beyond the Classroom',
    title: 'Dance',
    image: classStudentsTwo,
    paragraphs: [
      'Shri Pragya Public School recognizes dance as an important form of creative expression that contributes to the physical, emotional, and cultural development of students. The school encourages students to participate in various dance activities and cultural performances to nurture confidence, creativity, discipline, and artistic talent.',
      'Students are provided opportunities to learn and perform different forms of dance during cultural programs, competitions, annual functions, and special events. Dance activities help students develop coordination, rhythm, teamwork, stage confidence, and self-expression in an engaging and enjoyable manner.',
      'The school promotes cultural values and artistic appreciation through dance while encouraging students to showcase their talents and creativity. Under proper guidance and training, students enhance their performance skills and develop confidence to express themselves on stage.',
      'At Shri Pragya Public School, dance education forms an integral part of holistic development, helping students grow into confident, expressive, and well-rounded individuals.',
    ],
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
  'students-timing': {
    eyebrow: 'More',
    title: 'Students Timing',
    image: campusHero,
    paragraphs: [
      'School timing details may vary by section and season. Parents are requested to contact the school office for the current class-wise schedule.',
      'Helpline No.: 09461996117',
    ],
    bullets: ['Section-wise timing guidance', 'Arrival and dispersal discipline', 'Transport coordination', 'Official change notifications'],
    sections: [
      {
        heading: 'Punctuality and Safety',
        paragraphs: ['Students should arrive according to communicated timings and follow school instructions for attendance, transport and dispersal.'],
      },
    ],
  },
  ptm: {
    eyebrow: 'More',
    title: 'PTM',
    image: teacherImage,
    paragraphs: [
      'Parent-Teacher Meetings strengthen communication between home and school by discussing student learning, attendance, participation and overall development.',
      'Parents are requested to follow school notices for the latest PTM schedule or contact the school office for details.',
    ],
    bullets: ['Academic progress discussion', 'Personal guidance', 'Parent feedback', 'Student wellbeing support'],
    sections: [
      {
        heading: 'Preparing for a PTM',
        paragraphs: ['Parents may discuss learning habits, assessment progress, attendance, areas of improvement and constructive support that can continue at home.'],
      },
      {
        heading: 'Working Together',
        paragraphs: ['Open communication between families and teachers helps students receive consistent encouragement and timely guidance.'],
      },
    ],
  },
  'admission-form': {
    eyebrow: 'Admission',
    title: 'Online Admission',
    image: campusHero,
    paragraphs: [
      'Welcome to the admission enquiry portal of Shri Pragya Public School. Parents can share student and contact details through the online form so the school office can guide them regarding the appropriate class and next steps.',
      'Admission is subject to seat availability, applicable eligibility and submission of required documents. The school office will provide confirmed information for the relevant academic session.',
    ],
    bullets: ['Student birth certificate', 'Recent photographs', 'Previous report card, where applicable', 'Transfer certificate, where applicable', 'Parent identity proof', 'Address and contact details'],
    sections: [
      {
        heading: 'Admission Guidance',
        paragraphs: ['Parents may contact the school for campus visits, class availability, hostel or transport enquiries and support in completing the admission process.'],
      },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Gallery',
    image: campusHero,
    paragraphs: [
      'Explore glimpses of school life, campus spaces, activities and learning moments at Shri Pragya Public School.',
      'The gallery celebrates classroom engagement, practical learning, achievements, cultural participation and the everyday experiences that shape student life.',
    ],
    bullets: ['Campus life', 'Classroom learning', 'Laboratory activities', 'Sports and fitness', 'Events and celebrations', 'Student achievements'],
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
      'Shri Pragya Public School welcomes passionate, dedicated, and qualified professionals who are committed to excellence in education and student development. The school offers a positive and growth-oriented work environment where educators and staff members are encouraged to contribute their skills, knowledge, and creativity towards shaping future generations.',
      'The institution regularly provides opportunities for teaching, administrative, sports, hostel, and support staff positions across various departments and academic levels.',
    ],
    sections: [
      {
        heading: 'Apply Online',
        paragraphs: [
          'Interested candidates can apply online by submitting their updated resume and required details through the school\'s official application platform. The recruitment process is designed to identify talented individuals who possess strong academic knowledge, professional ethics, communication skills, and a passion for education.',
          'Applicants are encouraged to carefully review the eligibility criteria and submit accurate information for a smooth and efficient application process.',
        ],
      },
    ],
  },
  'current-openings': {
    eyebrow: 'Career',
    title: 'Current Openings',
    image: teacherImage,
    paragraphs: [
      'Shri Pragya Public School welcomes passionate, dedicated, and qualified professionals who are committed to excellence in education and student development. The school offers a positive and growth-oriented work environment where educators and staff members are encouraged to contribute their skills, knowledge, and creativity towards shaping future generations.',
      'The institution regularly provides opportunities for teaching, administrative, sports, hostel, and support staff positions across various departments and academic levels.',
    ],
  },
  'employee-benefits': {
    eyebrow: 'Career',
    title: 'Employee Benefits',
    image: teacherImage,
    paragraphs: [
      'Shri Pragya Public School values the dedication and contribution of its employees and strives to provide a supportive and rewarding work environment. The institution offers professional growth opportunities, a collaborative atmosphere, and a respectful workplace culture that encourages continuous learning and development.',
      'Employees benefit from a positive academic environment, skill enhancement opportunities, training programs, and career growth support that help them achieve professional excellence and personal satisfaction.',
    ],
  },
  'work-culture': {
    eyebrow: 'Career',
    title: 'Work Culture',
    image: teacherImage,
    paragraphs: [
      'The school promotes a professional, collaborative, and inclusive work culture built on mutual respect, discipline, teamwork, integrity, and continuous improvement. Faculty members and staff work together in a positive environment that encourages innovation, creativity, leadership, and effective communication.',
      'The institution believes in maintaining a healthy balance between professional responsibilities and personal growth while fostering a culture of dedication, excellence, and lifelong learning.',
    ],
  },
  'teacher-training': {
    eyebrow: 'Career',
    title: 'Teacher Training Programs',
    image: digitalBoard,
    layoutVariant: 'training-programs',
    paragraphs: [
      'Shri Pragya Public School strongly believes in continuous professional development and regularly organizes teacher training programs, workshops, seminars, and skill enhancement sessions to keep educators updated with modern teaching methodologies and educational practices.',
      'These programs focus on innovative teaching techniques, classroom management, technology integration, student engagement, communication skills, and overall professional growth. The school encourages teachers to continuously upgrade their knowledge and teaching practices to provide the best learning experience for students.',
    ],
  },
  alumni: {
    eyebrow: 'Alumni',
    title: 'Alumni',
    image: campusHero,
    paragraphs: [
      'Our alumni remain an important part of the Pragya family. This space will celebrate their journeys, memories and contributions.',
      'Former students carry forward the values, friendships and confidence shaped during their school years, and their experiences can inspire current learners.',
    ],
    bullets: ['Alumni stories', 'School memories', 'Mentoring inspiration', 'Community connection'],
    sections: [
      {
        heading: 'Stay Connected',
        paragraphs: ['Alumni are welcome to reconnect with the school, share achievements and remain part of important school occasions and future initiatives.'],
      },
      {
        heading: 'Inspire the Next Generation',
        paragraphs: ['Stories from former students help present learners imagine possibilities in higher education, careers and responsible community life.'],
      },
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
    bullets: ['Admission enquiries', 'Transport and hostel information', 'Academic support queries', 'Campus visit guidance'],
    sections: [
      {
        heading: 'Admission and School Enquiries',
        paragraphs: ['Parents may use the contact form below or call the school office for guidance regarding admission, campus visits and general school information.'],
      },
      {
        heading: 'Connect with the Right Branch',
        paragraphs: ['Please refer to the Main Branch and Junior Wing contact details above when planning a visit or seeking location-specific assistance.'],
      },
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
    <form onSubmit={(event) => onSubmit(event, form, 'admission')} className="motion-form scroll-reveal mt-10 grid gap-4 rounded-lg bg-white p-6 shadow-sm">
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
    <form onSubmit={(event) => onSubmit(event, form, 'contact')} className={`motion-form scroll-reveal ${compact ? '' : 'mt-10 '}grid gap-4 rounded-lg bg-white p-6 shadow-sm`}>
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
    <section id="career-application" className="scroll-reveal mt-10 overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="bg-[#06284d] px-6 py-5 text-white sm:px-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Apply Online</p>
        <h2 className="mt-2 text-2xl font-black">Career Application Form</h2>
      </div>
      <form onSubmit={(event) => onSubmit(event, form, 'career')} className="motion-form grid gap-4 p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={form.name} onChange={(event) => update('name', event.target.value)} required placeholder="Full name" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
            <input value={form.phone} onChange={(event) => update('phone', event.target.value)} required placeholder="Phone number" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
            <input value={form.email} onChange={(event) => update('email', event.target.value)} type="email" placeholder="Email address" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
            <input value={form.position} onChange={(event) => update('position', event.target.value)} required placeholder="Position applied for" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
            <input value={form.qualification} onChange={(event) => update('qualification', event.target.value)} placeholder="Highest qualification" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
            <input value={form.experience} onChange={(event) => update('experience', event.target.value)} placeholder="Experience" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
          </div>
          <textarea value={form.message} onChange={(event) => update('message', event.target.value)} rows="5" placeholder="Subject expertise / message" className="rounded-lg border border-slate-300 bg-[#fffaf0] px-4 py-4 font-semibold outline-none focus:border-[#a8171d] focus:bg-white" />
          {message ? <p className="rounded-md bg-[#fffaf0] p-3 text-sm font-bold text-slate-700">{message}</p> : null}
          <button className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#a8171d] px-7 py-4 font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-[#06284d]">
            Submit Application <Icon name="arrow" />
          </button>
      </form>
    </section>
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

function ImageFrame({ image, alt, className = '', imageClassName = '' }) {
  return (
    <figure className={`responsive-image-frame relative overflow-hidden rounded-2xl bg-[#fffaf0] shadow-xl ${className}`}>
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/45 to-[#ffc400]/10" />
      <img src={image} alt={alt} className={`relative z-10 h-full w-full object-contain object-center p-3 ${imageClassName}`} />
    </figure>
  )
}

function PageIntroLayout({ page, visualTheme, layoutKind }) {
  if (page.contentMode === 'html' && page.html) {
    return <div className="scroll-reveal cms-html-content rounded-lg bg-white p-6 text-slate-700 shadow-sm" dangerouslySetInnerHTML={{ __html: page.html }} />
  }

  const paragraphs = page.paragraphs || [visualTheme.copy]

  if (page.layoutVariant === 'principal-message') {
    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#fffaf0] p-5 sm:p-8">
            <figure className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-full w-full object-cover object-center" />
              </div>
              <figcaption className="px-2 pb-2 pt-4 text-center">
                <p className="text-xl font-black text-[#102344]">Mrs Nidhi Mathur</p>
                <p className="mt-1 font-bold text-[#a8171d]">Principal</p>
              </figcaption>
            </figure>
          </div>
          <div className="p-7 sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Principal Message</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#102344] sm:text-4xl">Guiding students with excellence, values and care.</h2>
            <div className="mt-7 grid max-h-[620px] gap-5 overflow-y-auto pr-2 text-lg leading-8 text-slate-700">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (page.layoutVariant === 'about-school') {
    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <figure className="relative overflow-hidden bg-[#06284d]">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-72 w-full object-cover object-center sm:h-[28rem] lg:h-[34rem]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06284d]/95 via-[#06284d]/45 to-transparent px-6 pb-7 pt-28 text-white sm:px-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">About School</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-4xl">{page.title}</h2>
          </div>
        </figure>
        <div className="p-7 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">School Overview</p>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
    )
  }

  if (page.layoutVariant === 'infrastructure-image-first') {
    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <figure className="relative overflow-hidden bg-[#06284d]">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-72 w-full object-cover object-center sm:h-[28rem] lg:h-[32rem]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06284d]/95 via-[#06284d]/45 to-transparent px-6 pb-7 pt-28 text-white sm:px-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">School Infrastructure</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-4xl">{page.title}</h2>
          </div>
        </figure>
        <div className="p-7 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Overview</p>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
    )
  }

  if (page.layoutVariant === 'training-programs') {
    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Professional Development</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#102344] sm:text-4xl">{page.title}</h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <figure className="relative min-h-80 overflow-hidden bg-[#06284d]">
            <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="absolute inset-0 h-full w-full object-cover object-center opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06284d]/80 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-lg font-black text-white">Modern teaching, better learning outcomes.</figcaption>
          </figure>
        </div>
        <div className="grid gap-4 border-t border-slate-200 bg-[#fffaf0] p-6 sm:grid-cols-2 lg:grid-cols-4">
          {['Teaching techniques', 'Classroom management', 'Technology integration', 'Student engagement'].map((item) => (
            <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
              <Icon name="check" className="h-6 w-6 text-[#a8171d]" />
              <p className="mt-3 font-black text-[#102344]">{item}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (layoutKind === 'values') {
    return (
      <section className="scroll-reveal relative overflow-hidden rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-12">
        <div className="absolute left-1/2 top-0 h-1 w-28 -translate-x-1/2 bg-[#ffc400]" />
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a8171d]">What Guides Us</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-[#102344]">{page.title}</h2>
        <div className="mx-auto mt-7 grid max-w-4xl gap-5 text-lg leading-8 text-slate-700">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {visualTheme.highlights.map((highlight) => (
            <span key={highlight} className="rounded-lg bg-[#fffaf0] px-5 py-4 font-extrabold text-[#a8171d]">{highlight}</span>
          ))}
        </div>
      </section>
    )
  }

  if (layoutKind === 'leadership') {
    const leadershipImageClass = page.imageFit === 'contain'
      ? 'absolute inset-0 h-full w-full bg-[#fffaf0] object-contain object-center p-4'
      : 'absolute inset-0 h-full w-full object-cover object-top'

    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg lg:grid lg:grid-cols-[0.74fr_1.26fr]">
        <div className="relative min-h-80">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className={leadershipImageClass} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06284d] to-transparent px-6 pb-6 pt-20 text-white">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Leadership</p>
            <p className="mt-2 text-2xl font-black">{page.title}</p>
          </div>
        </div>
        <div className="p-7 sm:p-10">
          <p className="text-5xl font-black leading-none text-[#ffc400]">&ldquo;</p>
          <div className="mt-2 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 h-1 w-20 bg-[#a8171d]" />
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Guiding the Pragya Community</p>
        </div>
      </section>
    )
  }

  if (layoutKind === 'academics') {
    const classLine = paragraphs.find((paragraph) => /^classes?:/i.test(paragraph))
    const detailParagraphs = paragraphs.filter((paragraph) => paragraph !== classLine)
    const academicCards = (detailParagraphs.length > 0 ? detailParagraphs : [visualTheme.copy]).map((paragraph, index) => ({
      text: paragraph,
      title: index === 0 ? 'Learning Approach' : index === 1 ? 'Student Development' : index === 2 ? 'Academic Support' : 'Future Readiness',
      icon: ['book', 'graduation', 'trophy', 'users'][index % 4],
    }))
    const focusItems = page.bullets?.slice(0, 6) || visualTheme.highlights

    return (
      <section className="academics-layout scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="grid gap-0 bg-gradient-to-br from-[#06284d] via-[#102344] to-[#a8171d] text-white lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ffc400]">Academic Pathway</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{page.title}</h2>
            {classLine ? <p className="mt-5 inline-flex rounded-full bg-[#ffc400] px-5 py-2 text-sm font-black text-[#102344]">{classLine.replace(/^classes?:\s*/i, 'Classes: ')}</p> : null}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">{visualTheme.copy}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {focusItems.slice(0, 3).map((item) => (
                <div key={item} className="academics-mini-card rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <Icon name="check" className="h-5 w-5 text-[#ffc400]" />
                  <p className="mt-3 text-sm font-black leading-5 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative bg-white/8 p-5 sm:p-7 lg:p-8">
            <ImageFrame image={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="academics-hero-image h-full min-h-72 rounded-xl shadow-2xl lg:min-h-[500px]" imageClassName="p-2 sm:p-3" />
          </div>
        </div>

        <div className="bg-[#f8fafc] p-5 sm:p-8 lg:p-10">
          <div className="stagger-grid is-visible grid gap-5 lg:grid-cols-2">
            {academicCards.map((card, index) => (
              <article key={card.text} className="academics-info-card motion-card rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#a8171d] text-white shadow-md shadow-[#a8171d]/20">
                    <Icon name={card.icon} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a8171d]">0{index + 1}</p>
                    <h3 className="mt-1 text-xl font-black text-[#102344]">{card.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{card.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {visualTheme.photos.slice(1).map(([image, alt]) => (
              <figure key={alt} className="academics-gallery-card group overflow-hidden rounded-xl bg-white p-3 shadow-sm">
                <ImageFrame image={image} alt={alt} className="aspect-[16/10] rounded-lg shadow-none" imageClassName="p-2" />
                <figcaption className="px-2 pt-3 text-sm font-black uppercase tracking-[0.14em] text-[#a8171d]">{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layoutKind === 'facilities') {
    return (
      <section className="scroll-reveal overflow-hidden rounded-2xl bg-white shadow-lg">
        <figure className="relative overflow-hidden bg-[#06284d]">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-72 w-full object-cover object-center sm:h-[28rem] lg:h-[32rem]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06284d]/95 via-[#06284d]/45 to-transparent px-6 pb-7 pt-28 text-white sm:px-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Facilities</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-4xl">{page.title}</h2>
          </div>
        </figure>
        <div className="p-7 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Overview</p>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
    )
  }

  if (layoutKind === 'enquiry') {
    return (
      <section className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="scroll-reveal rounded-2xl border-l-4 border-[#ffc400] bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Connect with Pragya</p>
          <h2 className="mt-3 text-3xl font-black text-[#102344]">{page.title}</h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <figure className="scroll-reveal reveal-right relative overflow-hidden rounded-2xl shadow-lg">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-full min-h-80 w-full object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06284d]/95 to-transparent p-6 pt-20 text-lg font-bold text-white">We are here to guide students and families.</figcaption>
        </figure>
      </section>
    )
  }

  if (layoutKind === 'activities') {
    return (
      <section className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="scroll-reveal">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Campus Moments</p>
          <h2 className="mt-3 text-4xl font-black text-[#102344]">{page.title}</h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-700">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="scroll-reveal reveal-right grid grid-cols-2 gap-4">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="col-span-2 h-60 w-full rounded-2xl object-cover" />
          {visualTheme.photos.slice(1).map(([image, alt]) => <img key={alt} src={image} alt={alt} className="h-40 w-full rounded-2xl object-cover" />)}
        </div>
      </section>
    )
  }

  return (
    <section className={`grid items-start gap-8 ${page.hideImages ? '' : 'lg:grid-cols-[1.05fr_0.95fr]'}`}>
      <div className="scroll-reveal rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Discover {page.title}</p>
        <div className="mt-5 grid gap-5 text-lg leading-8 text-slate-700">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      {page.hideImages ? null : (
        <figure className="scroll-reveal reveal-right overflow-hidden rounded-xl bg-white p-3 shadow-xl">
          <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="h-72 w-full rounded-lg object-cover sm:h-96" />
          <figcaption className="px-3 pb-2 pt-4 text-sm font-bold uppercase tracking-[0.16em] text-[#a8171d]">{page.title} at Pragya</figcaption>
        </figure>
      )}
    </section>
  )
}

function PageClosingLayout({ layoutKind, visualTheme, page }) {
  if (page?.hideImages) return null
  if (page?.hideClosingImages) return null

  if (layoutKind === 'values') {
    return (
      <section className="scroll-reveal mt-14 grid gap-5 sm:grid-cols-3">
        {visualTheme.photos.map(([image, alt]) => (
          <figure key={alt} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <img src={image} alt={alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-5 text-center font-bold text-[#102344]">{alt}</figcaption>
          </figure>
        ))}
      </section>
    )
  }

  if (layoutKind === 'academics') {
    return (
      <section className="scroll-reveal mt-14 overflow-hidden rounded-2xl bg-[#06284d] text-white shadow-xl">
        <div className="grid gap-7 p-7 sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Academic Environment</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black sm:text-4xl">{visualTheme.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">{visualTheme.copy}</p>
            <a href="/admission-form/" className="motion-button mt-7 inline-flex w-fit items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">Admission Enquiry <Icon name="arrow" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {visualTheme.highlights.map((highlight, index) => (
              <div key={highlight} className="academics-mini-card rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-black text-[#ffc400]">0{index + 1}</p>
                <p className="mt-1 font-bold text-white">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layoutKind === 'facilities') {
    return null
  }

  if (layoutKind === 'leadership') {
    return (
      <section className="scroll-reveal mt-14 border-y border-[#ffc400]/60 py-10 text-center">
        <p className="mx-auto max-w-4xl text-2xl font-semibold leading-10 text-[#102344]">Education at Pragya is a partnership of students, families and teachers working with discipline, compassion and purpose.</p>
      </section>
    )
  }

  return (
    <section className="scroll-reveal mt-14 overflow-hidden rounded-2xl bg-[#06284d] text-white shadow-xl">
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Life at Pragya</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{visualTheme.heading}</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{visualTheme.copy}</p>
          <a href="/contact-us/" className="motion-button mt-7 inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">Connect With School <Icon name="arrow" /></a>
        </div>
        <div className="stagger-grid is-visible grid gap-4 sm:grid-cols-3">
          {visualTheme.photos.map(([image, alt]) => (
            <figure key={alt} className="overflow-hidden rounded-lg bg-white/10">
              <img src={image} alt={alt} className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
              <figcaption className="p-3 text-sm font-semibold text-white/85">{alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function OriginHistoryPage({ page, visualTheme }) {
  const story = contentPages['origin-history'].paragraphs.map((paragraph, index) => page.paragraphs?.[index] || paragraph)
  const remainingStory = story.slice(4)

  return (
    <main>
      <section className="relative min-h-[420px] overflow-hidden bg-[#06284d] text-white">
        <img src={campusHero} alt="Shri Pragya Public School campus" className="hero-backdrop absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06284d]/95 via-[#06284d]/82 to-transparent" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="hero-kicker text-sm font-black uppercase tracking-[0.24em] text-[#ffc400]">Our Legacy</p>
            <h1 className="hero-title mt-4 text-3xl font-black leading-tight sm:text-4xl">{page.title || 'Our Legacy'}</h1>
            <p className="hero-copy mt-6 max-w-xl text-lg leading-8 text-white/85">A journey of education, values and community trust from Pragya Bal Mandir to Shri Pragya Public School.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="scroll-reveal">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Since 1976</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#102344] sm:text-3xl">A legacy shaped by service and learning.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">{story[0]}</p>
            <img src={visualTheme.photos[0][0]} alt={visualTheme.photos[0][1]} className="mt-8 h-72 w-full rounded-2xl object-cover shadow-xl" />
          </div>
          <div className="scroll-reveal reveal-right rounded-2xl bg-white p-6 shadow-sm sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Milestones</p>
            <div className="relative mt-8 grid gap-8 before:absolute before:bottom-2 before:left-[3.1rem] before:top-2 before:w-px before:bg-[#ffc400]">
              {historyMilestones.map(([year, title, text]) => (
                <article key={year} className="relative grid grid-cols-[6.2rem_1fr] gap-5">
                  <span className="relative z-10 grid h-12 w-24 place-items-center rounded-full bg-[#a8171d] text-lg font-black text-white">{year}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#102344]">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <section className="scroll-reveal mt-14 grid overflow-hidden rounded-2xl bg-[#06284d] text-white shadow-xl lg:grid-cols-2">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Spiritual Foundation</p>
            <h2 className="mt-3 text-2xl font-black">Inspired by purpose, strengthened by dedication.</h2>
            <p className="mt-6 text-lg leading-8 text-white/82">{story[2]}</p>
            <p className="mt-5 text-lg leading-8 text-white/82">{story[3]}</p>
          </div>
          <div className="grid grid-cols-2">
            <img src={classStudentsTwo} alt="Students at Shri Pragya Public School" className="col-span-2 h-60 w-full object-cover" />
            <img src={digitalTeaching} alt="Digital learning at the school" className="h-48 w-full object-cover" />
            <img src={boysReading} alt="Students reading and learning" className="h-48 w-full object-cover" />
          </div>
        </section>

        <section className="scroll-reveal mt-14 rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Continuing the Journey</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-black text-[#102344] sm:text-3xl">Building responsible learners for the future.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">{story[1]}</p>
          {remainingStory.map((paragraph) => (
            <p key={paragraph} className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">{paragraph}</p>
          ))}
        </section>
      </section>
    </main>
  )
}

function ContentPage({ page, activePage, onFormSubmit, formMessage, galleryPhotos = [], resultPhotos = [], studentCouncilRecords = [], jobPosts = [], alumniBatches = [] }) {
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
  const visualTheme = getPageVisualTheme(activePage, page)
  const layoutKind = getPageLayoutKind(activePage, page)

  if (layoutKind === 'history') {
    return <OriginHistoryPage page={page} visualTheme={visualTheme} />
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-[#06284d] py-16 text-white sm:py-20">
        {page.hideImages ? null : <img src={visualTheme.heroPhoto} alt="" className="hero-backdrop absolute inset-0 h-full w-full object-cover opacity-35" />}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06284d]/95 via-[#06284d]/85 to-[#06284d]/60" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="hero-kicker text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffc400] sm:text-sm">{page.eyebrow}</p>
          <h1 className="hero-title mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
          <div className="hero-actions mt-7 flex flex-wrap gap-3">
            {visualTheme.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white/95 backdrop-blur-sm">{highlight}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <PageIntroLayout page={page} visualTheme={visualTheme} layoutKind={layoutKind} />

        {page.bullets && layoutKind === 'academics' ? (
          <section className="scroll-reveal mt-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Key Components</p>
                <h2 className="mt-2 text-2xl font-black text-[#102344]">What students receive</h2>
              </div>
              <span className="rounded-full bg-[#fff4c2] px-4 py-2 text-sm font-black text-[#102344]">{page.bullets.length} Focus Areas</span>
            </div>
            <div className="stagger-grid is-visible mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.bullets.map((item, index) => (
                <article key={item} className="academics-feature-card motion-card rounded-xl border border-slate-200 bg-[#f8fafc] p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#ffc400] font-black text-[#102344]">{index + 1}</span>
                    <div>
                      <h3 className="font-black text-[#102344]">{item}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Structured support for confident academic growth.</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : page.bullets ? (
          <ul className="scroll-reveal stagger-grid mt-8 grid gap-3 sm:grid-cols-2">
            {page.bullets.map((item) => (
              <li key={item} className="motion-card flex gap-3 rounded-lg bg-white p-4 font-semibold text-slate-700 shadow-sm">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-[#a8171d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {page.people ? (
          <div className="scroll-reveal stagger-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.people.map(([name, role, detail, photo]) => {
              const staffPhoto = photo || staffPhotosByName[name]

              return (
                <article key={name} className="motion-card overflow-hidden rounded-lg bg-white shadow-sm">
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
          <div className="scroll-reveal mt-10 grid gap-8">
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
              <div className="scroll-reveal stagger-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="motion-card group overflow-hidden rounded-lg bg-white shadow-sm"
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
              <div className="scroll-reveal stagger-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="scroll-reveal stagger-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="scroll-reveal stagger-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.gallery.map(([image, alt]) => (
              <img key={alt} src={image} alt={alt} className="h-80 w-full rounded-lg object-contain bg-white p-3 shadow-md" />
            ))}
          </div>
        ) : null}

        {activePage === 'admission-form' ? <AdmissionForm onSubmit={onFormSubmit} message={formMessage} /> : null}
        {activePage === 'contact-us' ? <ContactForm onSubmit={onFormSubmit} message={formMessage} /> : null}
        {(activePage === 'careers' || activePage === 'current-openings') && jobPosts.length > 0 ? (
          <section className="scroll-reveal mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Current Job Postings</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Open positions at Pragya</h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {jobPosts.map((job) => (
                <article key={job.id} className="motion-card rounded-xl border border-slate-200 bg-[#fffaf0] p-5">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-black text-[#102344]">{job.job_name}</h3>
                      {(job.start_date || job.end_date) ? (
                        <p className="mt-2 text-sm font-bold text-[#a8171d]">
                          {job.start_date ? `From ${new Date(job.start_date).toLocaleDateString()}` : ''}
                          {job.start_date && job.end_date ? ' - ' : ''}
                          {job.end_date ? `To ${new Date(job.end_date).toLocaleDateString()}` : ''}
                        </p>
                      ) : null}
                    </div>
                    <a href={activePage === 'careers' ? '#career-application' : '/careers/#career-application'} className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#a8171d] px-4 py-2 text-sm font-black text-white">
                      Apply Now <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-4 whitespace-pre-line leading-7 text-slate-700">{job.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
        {activePage === 'careers' ? <CareerForm onSubmit={onFormSubmit} message={formMessage} /> : null}

        {activePage === 'alumni' && alumniBatches.length > 0 ? (
          <section className="scroll-reveal mt-10 grid gap-8">
            {Object.entries(alumniBatches.reduce((groups, batch) => {
              const year = batch.batch_year || 'Alumni'
              return { ...groups, [year]: [...(groups[year] || []), batch] }
            }, {})).sort(([yearA], [yearB]) => String(yearB).localeCompare(String(yearA))).map(([year, batches]) => (
              <div key={year} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a8171d]">Batch Wise Alumni</p>
                <h2 className="mt-2 text-3xl font-black text-[#102344]">{year} Batch</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {batches.map((batch) => (
                    <article key={batch.id} className="motion-card overflow-hidden rounded-xl bg-[#fffaf0] shadow-sm">
                      {batch.photo_url ? (
                        <img src={batch.photo_url} alt={`${batch.batch_year} ${batch.class_name || ''}`} className="h-64 w-full object-cover" />
                      ) : (
                        <div className="grid h-64 place-items-center bg-[#06284d] text-4xl font-black text-[#ffc400]">{batch.batch_year}</div>
                      )}
                      <div className="p-5">
                        <h3 className="text-2xl font-black text-[#102344]">{batch.class_name || 'Class'}</h3>
                        <p className="mt-1 font-bold text-[#a8171d]">{batch.subject_name || 'Subject'}</p>
                        {batch.description ? <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">{batch.description}</p> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : null}

        {activePage === 'student-council' ? (
          studentCouncilRecords.length > 0 ? (
            <div className="scroll-reveal stagger-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {studentCouncilRecords.map((member) => (
                <article key={member.id} className="motion-card overflow-hidden rounded-lg bg-white shadow-sm">
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

        {page.sections && layoutKind === 'academics' ? (
          <section className="scroll-reveal mt-12 overflow-hidden rounded-2xl bg-[#06284d] text-white shadow-xl">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Structured Learning</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">A clear academic flow for every learner.</h2>
              <div className="stagger-grid is-visible mt-8 grid gap-5">
                {page.sections.map((section, index) => (
                  <article key={section.heading} className="academics-roadmap-card motion-card grid gap-5 rounded-xl border border-white/12 bg-white/10 p-5 backdrop-blur lg:grid-cols-[11rem_1fr]">
                    <div>
                      <p className="text-4xl font-black text-[#ffc400]">{String(index + 1).padStart(2, '0')}</p>
                      <h3 className="mt-3 text-xl font-black text-white">{section.heading}</h3>
                    </div>
                    <div className="grid gap-4">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="leading-7 text-white/82">{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((item) => (
                            <p key={item} className="flex gap-3 rounded-md bg-white/10 p-3 font-semibold text-white">
                              <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-[#ffc400]" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : page.sections ? (
          <div className="scroll-reveal stagger-grid mt-12 grid gap-7">
            {page.sections.map((section, index) => (
              <article key={section.heading} className="motion-card overflow-hidden rounded-xl bg-white shadow-sm lg:grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a8171d]">Explore</p>
                  <h2 className="mt-2 text-3xl font-black text-[#102344]">{section.heading}</h2>
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
                </div>
                <img src={visualTheme.photos[(index + 1) % visualTheme.photos.length][0]} alt={`${section.heading} at Shri Pragya Public School`} className={`${index % 2 ? 'lg:order-first' : ''} h-full min-h-60 w-full object-cover`} />
              </article>
            ))}
          </div>
        ) : null}

        <PageClosingLayout layoutKind={layoutKind} visualTheme={visualTheme} page={page} />
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
  const [jobPostForm, setJobPostForm] = useState({ jobName: '', description: '', startDate: '', endDate: '', sortOrder: '0', isActive: true })
  const [alumniBatchForm, setAlumniBatchForm] = useState({ batchYear: '', className: '', subjectName: '', description: '', photoUrl: '', sortOrder: '0', isActive: true })
  const [alumniBatchFile, setAlumniBatchFile] = useState(null)
  const [uploadingAlumniBatch, setUploadingAlumniBatch] = useState(false)
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
  const [jobPostRecords, setJobPostRecords] = useState([])
  const [alumniBatchRecords, setAlumniBatchRecords] = useState([])
  const [editingPrincipalId, setEditingPrincipalId] = useState(null)
  const [editingHouseId, setEditingHouseId] = useState(null)
  const [editingResultId, setEditingResultId] = useState(null)
  const [editingNoticeId, setEditingNoticeId] = useState(null)
  const [editingStudentCouncilId, setEditingStudentCouncilId] = useState(null)
  const [editingJobPostId, setEditingJobPostId] = useState(null)
  const [editingAlumniBatchId, setEditingAlumniBatchId] = useState(null)
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
    ['job-postings', 'Current Job Postings'],
    ['alumni-batches', 'Alumni Batches'],
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
  const filteredJobPostRecords = jobPostRecords.filter((record) => matchesSearch(record.job_name, record.description, record.start_date, record.end_date, record.is_active ? 'active' : 'hidden'))
  const filteredAlumniBatchRecords = alumniBatchRecords.filter((record) => matchesSearch(record.batch_year, record.class_name, record.subject_name, record.description, record.is_active ? 'active' : 'hidden'))
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
    supabase.from('job_postings').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false }).then(({ data }) => setJobPostRecords(data || []))
    supabase.from('alumni_batches').select('*').order('batch_year', { ascending: false }).order('sort_order', { ascending: true }).order('created_at', { ascending: false }).then(({ data }) => setAlumniBatchRecords(data || []))
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

  const saveJobPost = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!jobPostForm.jobName.trim() || !jobPostForm.description.trim()) return setCollectionMessage('Job name and description required.')

    const payload = {
      job_name: jobPostForm.jobName.trim(),
      description: jobPostForm.description.trim(),
      start_date: jobPostForm.startDate || null,
      end_date: jobPostForm.endDate || null,
      sort_order: Number(jobPostForm.sortOrder) || 0,
      is_active: jobPostForm.isActive,
    }
    const query = editingJobPostId
      ? supabase.from('job_postings').update(payload).eq('id', editingJobPostId).select()
      : supabase.from('job_postings').insert(payload).select()
    const { data, error } = await query
    if (error) return setCollectionMessage(error.message)

    const record = data?.[0]
    setJobPostRecords((records) => {
      const nextRecords = editingJobPostId ? records.map((item) => item.id === editingJobPostId ? record : item) : [record, ...records]
      return nextRecords.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    })
    setEditingJobPostId(null)
    setJobPostForm({ jobName: '', description: '', startDate: '', endDate: '', sortOrder: '0', isActive: true })
    setCollectionMessage('Job posting saved.')
  }

  const editJobPost = (record) => {
    setEditingJobPostId(record.id)
    setJobPostForm({
      jobName: record.job_name || '',
      description: record.description || '',
      startDate: record.start_date || '',
      endDate: record.end_date || '',
      sortOrder: String(record.sort_order || 0),
      isActive: record.is_active !== false,
    })
  }

  const deleteJobPost = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('job_postings').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setJobPostRecords((records) => records.filter((item) => item.id !== record.id))
    if (editingJobPostId === record.id) {
      setEditingJobPostId(null)
      setJobPostForm({ jobName: '', description: '', startDate: '', endDate: '', sortOrder: '0', isActive: true })
    }
    setCollectionMessage('Job posting removed.')
  }

  const saveAlumniBatch = async () => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    if (!alumniBatchForm.batchYear.trim() || !alumniBatchForm.className.trim()) return setCollectionMessage('Batch year and class name required.')

    setUploadingAlumniBatch(true)
    setCollectionMessage('')

    try {
      const uploadedUrl = alumniBatchFile ? await uploadAdminImage(alumniBatchFile, `alumni/${alumniBatchForm.batchYear.trim()}`) : alumniBatchForm.photoUrl.trim()
      const payload = {
        batch_year: alumniBatchForm.batchYear.trim(),
        class_name: alumniBatchForm.className.trim(),
        subject_name: alumniBatchForm.subjectName.trim() || null,
        description: alumniBatchForm.description.trim() || null,
        photo_url: uploadedUrl || null,
        sort_order: Number(alumniBatchForm.sortOrder) || 0,
        is_active: alumniBatchForm.isActive,
      }
      const query = editingAlumniBatchId
        ? supabase.from('alumni_batches').update(payload).eq('id', editingAlumniBatchId).select()
        : supabase.from('alumni_batches').insert(payload).select()
      const { data, error } = await query
      if (error) throw error

      const record = data?.[0]
      setAlumniBatchRecords((records) => {
        const nextRecords = editingAlumniBatchId ? records.map((item) => item.id === editingAlumniBatchId ? record : item) : [record, ...records]
        return nextRecords.sort((a, b) => String(b.batch_year || '').localeCompare(String(a.batch_year || '')) || (a.sort_order || 0) - (b.sort_order || 0))
      })
      setEditingAlumniBatchId(null)
      setAlumniBatchForm({ batchYear: '', className: '', subjectName: '', description: '', photoUrl: '', sortOrder: '0', isActive: true })
      setAlumniBatchFile(null)
      setCollectionMessage('Alumni batch saved.')
    } catch (error) {
      setCollectionMessage(error.message)
    } finally {
      setUploadingAlumniBatch(false)
    }
  }

  const editAlumniBatch = (record) => {
    setEditingAlumniBatchId(record.id)
    setAlumniBatchForm({
      batchYear: record.batch_year || '',
      className: record.class_name || '',
      subjectName: record.subject_name || '',
      description: record.description || '',
      photoUrl: record.photo_url || '',
      sortOrder: String(record.sort_order || 0),
      isActive: record.is_active !== false,
    })
    setAlumniBatchFile(null)
  }

  const deleteAlumniBatch = async (record) => {
    if (!supabase) return setCollectionMessage('Supabase env missing.')
    const { error } = await supabase.from('alumni_batches').delete().eq('id', record.id)
    if (error) return setCollectionMessage(error.message)

    setAlumniBatchRecords((records) => records.filter((item) => item.id !== record.id))
    if (editingAlumniBatchId === record.id) {
      setEditingAlumniBatchId(null)
      setAlumniBatchForm({ batchYear: '', className: '', subjectName: '', description: '', photoUrl: '', sortOrder: '0', isActive: true })
      setAlumniBatchFile(null)
    }
    setCollectionMessage('Alumni batch removed.')
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

        {adminSection === 'job-postings' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Current Jobs</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Manage Job Postings</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <input value={jobPostForm.jobName} onChange={(event) => setJobPostForm({ ...jobPostForm, jobName: event.target.value })} placeholder="Job name" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="date" value={jobPostForm.startDate} onChange={(event) => setJobPostForm({ ...jobPostForm, startDate: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="date" value={jobPostForm.endDate} onChange={(event) => setJobPostForm({ ...jobPostForm, endDate: event.target.value })} className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="number" value={jobPostForm.sortOrder} onChange={(event) => setJobPostForm({ ...jobPostForm, sortOrder: event.target.value })} placeholder="Display order" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <textarea value={jobPostForm.description} onChange={(event) => setJobPostForm({ ...jobPostForm, description: event.target.value })} rows="5" placeholder="Full job description" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d] lg:col-span-4" />
            </div>
            <label className="mt-4 flex w-fit items-center gap-3 rounded-md bg-[#fffaf0] px-4 py-3 font-bold text-[#102344]">
              <input type="checkbox" checked={jobPostForm.isActive} onChange={(event) => setJobPostForm({ ...jobPostForm, isActive: event.target.checked })} className="h-5 w-5 accent-[#a8171d]" />
              Show this job on website
            </label>
            <button type="button" onClick={saveJobPost} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">{editingJobPostId ? 'Update Job Posting' : 'Add Job Posting'}</button>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Job Name', 'Description', 'From', 'To', 'Order', 'Status', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredJobPostRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3 font-bold text-[#102344]">{record.job_name}</td>
                      <td className="max-w-[320px] truncate p-3">{record.description}</td>
                      <td className="p-3">{record.start_date || '-'}</td>
                      <td className="p-3">{record.end_date || '-'}</td>
                      <td className="p-3">{record.sort_order || 0}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${record.is_active === false ? 'bg-slate-200 text-slate-600' : 'bg-green-100 text-green-700'}`}>
                          {record.is_active === false ? 'Hidden' : 'Shown'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editJobPost(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deleteJobPost(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredJobPostRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No job postings found.</p> : null}
            </div>
          </div>
        ) : null}

        {adminSection === 'alumni-batches' ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Alumni Gallery</p>
            <h2 className="mt-2 text-3xl font-black text-[#102344]">Batch Wise Alumni Uploads</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <input value={alumniBatchForm.batchYear} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, batchYear: event.target.value })} placeholder="Batch year e.g. 2024" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={alumniBatchForm.className} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, className: event.target.value })} placeholder="Class name e.g. Class 10" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input value={alumniBatchForm.subjectName} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, subjectName: event.target.value })} placeholder="Subject name / stream" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="number" value={alumniBatchForm.sortOrder} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, sortOrder: event.target.value })} placeholder="Row order" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d]" />
              <input type="file" accept="image/*" onChange={(event) => setAlumniBatchFile(event.target.files?.[0] || null)} className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold outline-none file:mr-3 file:rounded file:border-0 file:bg-[#ffc400] file:px-3 file:py-2 file:font-bold file:text-[#102344] focus:border-[#a8171d] lg:col-span-2" />
              <textarea value={alumniBatchForm.description} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, description: event.target.value })} rows="4" placeholder="Description (optional)" className="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#a8171d] lg:col-span-2" />
            </div>
            <label className="mt-4 flex w-fit items-center gap-3 rounded-md bg-[#fffaf0] px-4 py-3 font-bold text-[#102344]">
              <input type="checkbox" checked={alumniBatchForm.isActive} onChange={(event) => setAlumniBatchForm({ ...alumniBatchForm, isActive: event.target.checked })} className="h-5 w-5 accent-[#a8171d]" />
              Show this batch on alumni page
            </label>
            <button type="button" onClick={saveAlumniBatch} disabled={uploadingAlumniBatch} className="mt-5 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">
              {uploadingAlumniBatch ? 'Saving...' : editingAlumniBatchId ? 'Update Alumni Batch' : 'Add Alumni Batch'}
            </button>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                <thead className="bg-[#06284d] text-white">
                  <tr>
                    {['Photo', 'Batch Year', 'Class', 'Subject', 'Description', 'Order', 'Status', 'Action'].map((head) => <th key={head} className="p-3">{head}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredAlumniBatchRecords.map((record) => (
                    <tr key={record.id} className="border-b border-slate-200">
                      <td className="p-3">{record.photo_url ? <img src={record.photo_url} alt="" className="h-14 w-20 rounded object-cover" /> : '-'}</td>
                      <td className="p-3 font-bold text-[#102344]">{record.batch_year}</td>
                      <td className="p-3">{record.class_name}</td>
                      <td className="p-3">{record.subject_name || '-'}</td>
                      <td className="max-w-[240px] truncate p-3">{record.description || '-'}</td>
                      <td className="p-3">{record.sort_order || 0}</td>
                      <td className="p-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${record.is_active === false ? 'bg-slate-200 text-slate-600' : 'bg-green-100 text-green-700'}`}>
                          {record.is_active === false ? 'Hidden' : 'Shown'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => editAlumniBatch(record)} className="rounded bg-[#ffc400] px-3 py-2 font-bold text-[#102344]">Edit</button>
                          <button type="button" onClick={() => deleteAlumniBatch(record)} className="rounded bg-red-600 px-3 py-2 font-bold text-white">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredAlumniBatchRecords.length === 0 ? <p className="mt-4 font-semibold text-slate-600">No alumni batches found.</p> : null}
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
  const [publicJobPosts, setPublicJobPosts] = useState([])
  const [publicAlumniBatches, setPublicAlumniBatches] = useState([])
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
    if (loading) return undefined

    const animatedElements = document.querySelectorAll('.scroll-reveal')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    animatedElements.forEach((element) => element.classList.remove('is-visible'))

    if (reduceMotion) {
      animatedElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -34px 0px' })

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [activePage, loading, publicGalleryPhotos.length, publicNotices.length, publicResults.length, publicStudentCouncilRecords.length, publicJobPosts.length, publicAlumniBatches.length])

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

    supabase
      .from('job_postings')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicJobPosts(data || []))

    supabase
      .from('alumni_batches')
      .select('*')
      .eq('is_active', true)
      .order('batch_year', { ascending: false })
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .then(({ data }) => setPublicAlumniBatches(data || []))
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
  const staleCmsFirstParagraphs = {
    hostel: 'SPPS offers comfortable and convenient hostel facilities for girls and boys.',
    laboratories: 'The school provides computer, chemistry, physics, biology and English language labs for practical learning.',
    'music-sports-facilities': 'The school emphasizes studies along with sports and music for overall development.',
    'interactive-classroom': 'Our classrooms are spacious, bright and well-furnished.',
    transportation: 'School bus transport is a safe and convenient way for students to travel.',
    academics: 'Our academic system supports concept clarity, regular practice, practical exposure and board readiness.',
    activities: 'Activities help students lead, perform, collaborate and build confidence beyond the classroom.',
    careers: 'Join our teaching community.',
  }
  const isStaleCmsPage =
    Boolean(staleCmsFirstParagraphs[activePage] && dbPage?.paragraphs?.[0] === staleCmsFirstParagraphs[activePage]) ||
    (activePage === 'about' && dbPage?.paragraphs?.[0] === contentPages.about.paragraphs[0] && (dbPage.paragraphs?.length || 0) < contentPages.about.paragraphs.length) ||
    (activePage === 'origin-history' && dbPage?.paragraphs?.[0] === 'Shri Pragya Public School proudly carries a rich legacy of educational excellence, discipline, and value-based learning.' && (dbPage.paragraphs?.length || 0) < contentPages['origin-history'].paragraphs.length) ||
    (activePage === 'origin-mission' && dbPage?.sections?.[1]?.bullets?.[0] === 'Deliver quality education through modern and innovative teaching methodologies') ||
    (activePage === 'about' && dbPage?.paragraphs?.[0] === 'Shri Pragya Public School brings academics, values, sports and creative expression together in a structured environment.') ||
    (activePage === 'origin-history' && dbPage?.paragraphs?.[0] === 'Our school has a rich legacy of providing quality education and fostering an environment of learning and growth.') ||
    (activePage === 'origin-mission' && dbPage?.paragraphs?.[0] === 'We envision a world where every child is empowered with the skills and knowledge to succeed.')
  const effectiveDbPage = isStaleCmsPage ? null : dbPage
  const page = activeGallerySlug
    ? {
        ...(cmsPages.gallery || contentPages.gallery),
        title: activeGalleryFolderName || 'Gallery',
      }
    : effectiveDbPage
      ? {
          ...defaultPage,
          ...effectiveDbPage,
          paragraphs: effectiveDbPage.paragraphs && effectiveDbPage.paragraphs.length > 0 && effectiveDbPage.paragraphs[0].includes('The house system builds leadership') && effectiveDbPage.paragraphs.length < 2
            ? defaultPage?.paragraphs || dbPage.paragraphs
            : effectiveDbPage.paragraphs,
          sections: effectiveDbPage.sections || defaultPage?.sections,
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
              <img src={logo} alt="Shri Pragya Public School logo" className="floating-action h-20 w-20 flex-none rounded-sm object-contain sm:h-24 sm:w-24" />
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase leading-tight text-[#a8171d] sm:text-3xl">Shri Pragya Public School</p>
                <p className="mt-1 text-sm font-medium text-slate-900 sm:text-lg">Bijainagar, Rajasthan 305624</p>
                <p className="mt-1 hidden text-base font-bold text-[#a8171d] sm:block">Pragya Deep: Always Shining</p>
              </div>
            </a>
            <a
              href="/admission-form/"
              onClick={(event) => handleInternalLink(event, '/admission-form/')}
              className="motion-button admission-pulse hidden shrink-0 items-center gap-3 rounded-md bg-[#a8171d] px-6 py-3 font-black text-white shadow-lg shadow-slate-950/15 hover:bg-[#06284d] lg:inline-flex"
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
                    <div className="menu-pop invisible absolute left-1/2 top-full z-50 grid w-[min(92vw,54rem)] -translate-x-1/2 translate-y-2 grid-cols-3 gap-7 rounded-md bg-white p-6 text-slate-800 opacity-0 shadow-xl transition group-hover:visible group-hover:-translate-x-1/2 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:-translate-x-1/2 group-focus-within:translate-y-0 group-focus-within:opacity-100">
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
                    <div className="menu-pop grid gap-1 bg-[#061f3f] px-3 pb-3 lg:invisible lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-64 lg:translate-y-2 lg:rounded-md lg:bg-white lg:p-2 lg:text-slate-800 lg:opacity-0 lg:shadow-xl lg:transition lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
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
        <ContentPage page={page} activePage={activePage} onFormSubmit={handlePublicFormSubmit} formMessage={formMessage} galleryPhotos={publicGalleryPhotos} resultPhotos={publicResults} houseRecords={publicHouseRecords} studentCouncilRecords={publicStudentCouncilRecords} jobPosts={publicJobPosts} alumniBatches={publicAlumniBatches} />
      ) : (
      <main id="home">
        <section className="relative min-h-[460px] overflow-hidden bg-[#06284d] lg:min-h-[520px]">
          <img src={campusHero} alt="Aerial campus view of Shri Pragya Public School" className="hero-backdrop absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06284d]/95 via-[#06284d]/60 to-transparent" />
          <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-12 lg:min-h-[520px] lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="hero-kicker mb-4 text-base font-bold text-[#ffc400] sm:text-lg">Nurturing Minds. Building Futures.</p>
              <h1 className="hero-title max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                <span className="block">Welcome to</span>
                <span className="hero-title-accent mt-2 block max-w-full whitespace-nowrap text-[clamp(1rem,4vw,3rem)] leading-tight text-[#ffc400]">Shri Pragya Public School</span>
              </h1>
              <div className="hero-rule mt-5 h-1 w-20 bg-[#ffc400]" />
              <p className="hero-copy mt-5 max-w-lg text-base leading-7 text-white/95 sm:text-lg">Empowering students with knowledge, values, confidence and skills to excel in life and create a better tomorrow.</p>
              <div className="hero-actions mt-6 flex flex-wrap gap-4">
                <a href="/about/" onClick={(event) => handleInternalLink(event, '/about/')} className="motion-button inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#101827] shadow-xl shadow-black/20 hover:bg-white">
                  Explore More <Icon name="arrow" />
                </a>
                <a href="/admission-form/" onClick={(event) => handleInternalLink(event, '/admission-form/')} className="motion-button inline-flex items-center gap-3 rounded-md border border-white/50 px-6 py-3 font-bold text-white hover:bg-white hover:text-[#06284d]">Admission Enquiry</a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Welcome message" className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
          <div className="welcome-card scroll-reveal grid overflow-hidden rounded-xl border-t-4 border-[#ffc400] bg-white shadow-2xl shadow-slate-950/15 lg:grid-cols-[1.12fr_0.88fr]">
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



        <section id="about" className="scroll-reveal mx-auto max-w-7xl px-4 py-24 lg:px-8">
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

          <div className="scroll-reveal stagger-grid mt-14 grid overflow-hidden rounded-lg bg-[#fffaf0] shadow-xl shadow-slate-950/10 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="scroll-reveal mt-14 rounded-xl bg-[#06284d] p-6 text-white sm:p-9">
            <h3 className="text-center text-3xl font-black sm:text-4xl">Achievement Counters</h3>
            <div className="scroll-reveal stagger-grid mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="scroll-reveal mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Why Choose Us</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Education that prepares students for life.</h2>
            </div>
            <div className="scroll-reveal stagger-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map(([title, text, icon]) => (
                <article key={title} className="motion-card rounded-lg border border-slate-100 bg-[#fffaf0] p-7 shadow-sm">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#a8171d] text-white"><Icon name={icon} className="h-7 w-7" /></span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#102344]">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="academics" className="scroll-reveal mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Academic Highlights</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Clear pathways from strong foundations to board readiness.</h2>
            </div>
            <div className="scroll-reveal stagger-grid grid gap-5">
              {programs.map(([title, text]) => (
                <article key={title} className="motion-card rounded-lg bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-[#a8171d]">{title}</h3>
                  <p className="mt-2 text-lg leading-8 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competitive-program" className="bg-[#06284d] py-24 text-white">
          <div className="scroll-reveal mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">IIT-JEE &amp; NEET Program</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Focused preparation for ambitious futures.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Our senior students receive structured guidance that supports school academics while building the discipline and conceptual clarity needed for competitive examinations.</p>
              <a href="/academics/" onClick={(event) => handleInternalLink(event, '/academics/')} className="motion-button mt-8 inline-flex items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">
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

        <section id="hostel" className="scroll-reveal mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <img src={boyHostel} alt="Hostel facilities at Shri Pragya Public School" className="h-80 w-full rounded-xl object-cover shadow-xl" />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Hostel</p>
            <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Comfortable residential care for students.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Our hostel facilities provide a supervised, disciplined and caring environment for boys and girls with accommodation, study support, meals and student wellbeing at the centre.</p>
            <a href="/hostel/" onClick={(event) => handleInternalLink(event, '/hostel/')} className="motion-button mt-8 inline-flex items-center gap-3 rounded-md bg-[#a8171d] px-6 py-3 font-bold text-white">
              Explore Hostel Facilities <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section id="facilities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="scroll-reveal max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Facilities Overview</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Spaces designed for learning, discipline and discovery.</h2>
            </div>
            <div className="scroll-reveal stagger-grid mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="scroll-reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Results &amp; Achievements</p>
                <h2 className="mt-3 text-4xl font-black">Celebrating student success.</h2>
              </div>
              <a href="/results/" onClick={(event) => handleInternalLink(event, '/results/')} className="motion-button inline-flex w-fit items-center gap-3 rounded-md bg-[#ffc400] px-6 py-3 font-bold text-[#102344]">View All Results <Icon name="arrow" /></a>
            </div>
            {publicResults.length > 0 ? (
              <div className="scroll-reveal stagger-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="scroll-reveal mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Testimonials</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Trusted by families and learners.</h2>
            </div>
            <div className="scroll-reveal stagger-grid mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map(([name, quote]) => (
                <figure key={name} className="motion-card rounded-lg bg-[#fffaf0] p-7 shadow-sm">
                  <p className="text-4xl font-black leading-none text-[#ffc400]">&ldquo;</p>
                  <blockquote className="mt-3 text-lg leading-8 text-slate-700">{quote}</blockquote>
                  <figcaption className="mt-6 font-extrabold text-[#a8171d]">{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="news-events" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="scroll-reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#a8171d]">Latest News &amp; Events</p>
              <h2 className="mt-3 text-4xl font-black text-[#102344] sm:text-5xl">Stay connected with Pragya.</h2>
            </div>
          </div>
          <div className="scroll-reveal stagger-grid mt-10 grid gap-5 md:grid-cols-3">
            {(publicNotices.length > 0 ? publicNotices.slice(0, 3).map((notice) => [notice.id, 'School Update', notice.notice_text, notice.link_url]) : newsFallback.map(([title, text]) => [title, title, text, null])).map(([key, title, text, link]) => (
              <article key={key} className="motion-card flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a8171d]">{title}</p>
                <p className="mt-4 flex-1 text-lg leading-8 text-slate-700">{text}</p>
                {link ? <a href={link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#a8171d]">Read More <Icon name="arrow" /></a> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="admission-open" className="bg-[#a8171d] py-16 text-white">
          <div className="scroll-reveal mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffc400]">Admission Open</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Begin your child&apos;s Pragya journey.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">Enquiries are welcome for the upcoming academic session. Meet our team and discover an education built on knowledge, discipline and values.</p>
            </div>
            <a href="/admission-form/" onClick={(event) => handleInternalLink(event, '/admission-form/')} className="motion-button admission-pulse inline-flex shrink-0 items-center gap-3 rounded-md bg-[#ffc400] px-8 py-4 text-lg font-black text-[#102344] shadow-xl">
              Apply For Admission <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section id="contact-us" className="bg-white py-24">
          <div className="scroll-reveal mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
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
          <div className="scroll-reveal relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <img
              src={admissionSlides[activeAdmissionSlide].image}
              alt="Admission at Shri Pragya Public School"
              className="hero-backdrop h-56 w-full object-cover transition-opacity duration-500 sm:h-72 lg:h-[420px]"
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
            className="floating-action flex items-center gap-3 rounded-full bg-[#16a34a] px-4 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#15803d]"
          >
            <Icon name="chat" className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp Chat</span>
          </a>
          <a
            href="/admission-form/"
            onClick={(event) => handleInternalLink(event, '/admission-form/')}
            className="floating-action flex items-center gap-3 rounded-full bg-[#a8171d] px-4 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#06284d]"
          >
            <Icon name="graduation" className="h-5 w-5" />
            <span className="hidden sm:inline">Apply Now</span>
          </a>
          <a
            href="tel:09461996117"
            className="floating-action flex items-center gap-3 rounded-full bg-[#ffc400] px-4 py-3 font-bold text-[#102344] shadow-xl transition hover:-translate-y-1 hover:bg-white"
          >
            <Icon name="phone" className="h-5 w-5" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </main>
      )}

      <footer className="bg-[#06284d] text-white">
        <div className="scroll-reveal mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
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
