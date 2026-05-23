-- Shri Pragya Public School website CMS schema
-- Run this in Supabase SQL editor.
-- Keep the service_role key on a backend/Edge Function only. Do not expose it in React.
-- Admin panel access: any logged-in Supabase Auth user can manage CMS tables.

create extension if not exists "pgcrypto";

create table if not exists public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  eyebrow text,
  body jsonb not null default '{}'::jsonb,
  hero_image_url text,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.navigation_items (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.navigation_items(id) on delete cascade,
  label text not null,
  href text not null,
  sort_order integer not null default 0,
  is_external boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  alt_text text,
  file_url text not null,
  asset_type text not null default 'image',
  section text,
  created_at timestamptz not null default now()
);

create table if not exists public.facilities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  image_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  result_year text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  notice_text text not null,
  link_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_folders (
  id uuid primary key default gen_random_uuid(),
  title text not null unique,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_photos (
  id uuid primary key default gen_random_uuid(),
  folder_title text not null,
  title text not null,
  image_url text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.principal_teachers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  detail text,
  photo_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.house_system (
  id uuid primary key default gen_random_uuid(),
  house_name text not null,
  house_color text not null,
  captain_name text,
  vice_captain_name text,
  junior_captain_name text,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.contact_details (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null,
  icon text default 'location',
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.admission_enquiries (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  father_name text not null,
  mother_name text not null,
  dob date,
  gender text,
  class_applied text not null,
  previous_school text,
  address text not null,
  phone text not null,
  email text,
  message text,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  position text not null,
  qualification text,
  experience text,
  message text,
  created_at timestamptz not null default now()
);

create table if not exists public.student_council (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  class_name text,
  house_name text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admission_classes (
  id uuid primary key default gen_random_uuid(),
  class_name text not null unique,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

alter table public.results add column if not exists created_at timestamptz not null default now();

insert into storage.buckets (id, name, public)
values ('school-media', 'school-media', true)
on conflict (id) do update set public = true;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists pages_set_updated_at on public.pages;
create trigger pages_set_updated_at
before update on public.pages
for each row execute function public.set_updated_at();

alter table public.admin_profiles enable row level security;
alter table public.pages enable row level security;
alter table public.navigation_items enable row level security;
alter table public.media_assets enable row level security;
alter table public.facilities enable row level security;
alter table public.results enable row level security;
alter table public.notices enable row level security;
alter table public.gallery_folders enable row level security;
alter table public.gallery_photos enable row level security;
alter table public.activities enable row level security;
alter table public.principal_teachers enable row level security;
alter table public.house_system enable row level security;
alter table public.contact_details enable row level security;
alter table public.admission_enquiries enable row level security;
alter table public.contact_enquiries enable row level security;
alter table public.career_applications enable row level security;
alter table public.student_council enable row level security;
alter table public.admission_classes enable row level security;

grant usage on schema public to anon, authenticated;

grant select on public.pages to anon, authenticated;
grant select on public.navigation_items to anon, authenticated;
grant select on public.facilities to anon, authenticated;
grant select on public.results to anon, authenticated;
grant select on public.notices to anon, authenticated;
grant select on public.gallery_folders to anon, authenticated;
grant select on public.gallery_photos to anon, authenticated;
grant select on public.activities to anon, authenticated;
grant select on public.principal_teachers to anon, authenticated;
grant select on public.house_system to anon, authenticated;
grant select on public.contact_details to anon, authenticated;
grant select on public.student_council to anon, authenticated;
grant select on public.admission_classes to anon, authenticated;

grant insert on public.admission_enquiries to anon, authenticated;
grant insert on public.contact_enquiries to anon, authenticated;
grant insert on public.career_applications to anon, authenticated;

grant select, insert, update, delete on public.admin_profiles to authenticated;
grant select, insert, update, delete on public.pages to authenticated;
grant select, insert, update, delete on public.navigation_items to authenticated;
grant select, insert, update, delete on public.media_assets to authenticated;
grant select, insert, update, delete on public.facilities to authenticated;
grant select, insert, update, delete on public.results to authenticated;
grant select, insert, update, delete on public.notices to authenticated;
grant select, insert, update, delete on public.gallery_folders to authenticated;
grant select, insert, update, delete on public.gallery_photos to authenticated;
grant select, insert, update, delete on public.activities to authenticated;
grant select, insert, update, delete on public.principal_teachers to authenticated;
grant select, insert, update, delete on public.house_system to authenticated;
grant select, insert, update, delete on public.contact_details to authenticated;
grant select, insert, update, delete on public.admission_enquiries to authenticated;
grant select, insert, update, delete on public.contact_enquiries to authenticated;
grant select, insert, update, delete on public.career_applications to authenticated;
grant select, insert, update, delete on public.student_council to authenticated;
grant select, insert, update, delete on public.admission_classes to authenticated;

-- Broad grants for Supabase REST API access.
-- RLS policies above still control what rows/actions are allowed.
grant usage on schema public to anon, authenticated, service_role;
grant select on all tables in schema public to anon;
grant all privileges on all tables in schema public to authenticated;
grant all privileges on all tables in schema public to service_role;
grant usage, select on all sequences in schema public to anon, authenticated, service_role;

alter default privileges in schema public grant select on tables to anon;
alter default privileges in schema public grant all privileges on tables to authenticated;
alter default privileges in schema public grant all privileges on tables to service_role;
alter default privileges in schema public grant usage, select on sequences to anon, authenticated, service_role;

drop policy if exists "Public can read school media" on storage.objects;
create policy "Public can read school media"
on storage.objects for select
using (bucket_id = 'school-media');

drop policy if exists "Authenticated users can upload school media" on storage.objects;
create policy "Authenticated users can upload school media"
on storage.objects for insert
with check (bucket_id = 'school-media' and auth.role() = 'authenticated');

drop policy if exists "Authenticated users can update school media" on storage.objects;
create policy "Authenticated users can update school media"
on storage.objects for update
using (bucket_id = 'school-media' and auth.role() = 'authenticated')
with check (bucket_id = 'school-media' and auth.role() = 'authenticated');

drop policy if exists "Authenticated users can delete school media" on storage.objects;
create policy "Authenticated users can delete school media"
on storage.objects for delete
using (bucket_id = 'school-media' and auth.role() = 'authenticated');

drop policy if exists "Users can read own admin profile" on public.admin_profiles;
drop policy if exists "Admins can manage admin profiles" on public.admin_profiles;

drop policy if exists "Authenticated users can manage admin profiles" on public.admin_profiles;
create policy "Authenticated users can manage admin profiles"
on public.admin_profiles for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Public can read published pages" on public.pages;
create policy "Public can read published pages"
on public.pages for select
using (is_published = true);

drop policy if exists "Public can read active navigation" on public.navigation_items;
create policy "Public can read active navigation"
on public.navigation_items for select
using (is_active = true);

drop policy if exists "Public can read active facilities" on public.facilities;
create policy "Public can read active facilities"
on public.facilities for select
using (is_active = true);

drop policy if exists "Public can read active results" on public.results;
create policy "Public can read active results"
on public.results for select
using (is_active = true);

drop policy if exists "Public can read active notices" on public.notices;
create policy "Public can read active notices"
on public.notices for select
using (is_active = true);

drop policy if exists "Public can read active gallery folders" on public.gallery_folders;
create policy "Public can read active gallery folders"
on public.gallery_folders for select
using (is_active = true);

drop policy if exists "Public can read active gallery photos" on public.gallery_photos;
create policy "Public can read active gallery photos"
on public.gallery_photos for select
using (is_active = true);

drop policy if exists "Public can read active activities" on public.activities;
create policy "Public can read active activities"
on public.activities for select
using (is_active = true);

drop policy if exists "Public can read active principal teachers" on public.principal_teachers;
create policy "Public can read active principal teachers"
on public.principal_teachers for select
using (is_active = true);

drop policy if exists "Public can read active houses" on public.house_system;
create policy "Public can read active houses"
on public.house_system for select
using (is_active = true);

drop policy if exists "Public can read active contacts" on public.contact_details;
create policy "Public can read active contacts"
on public.contact_details for select
using (is_active = true);

drop policy if exists "Public can read active student council" on public.student_council;
create policy "Public can read active student council"
on public.student_council for select
using (is_active = true);

drop policy if exists "Public can read active classes" on public.admission_classes;
create policy "Public can read active classes"
on public.admission_classes for select
using (is_active = true);

drop policy if exists "Public can create admission enquiries" on public.admission_enquiries;
create policy "Public can create admission enquiries"
on public.admission_enquiries for insert
with check (true);

drop policy if exists "Public can create contact enquiries" on public.contact_enquiries;
create policy "Public can create contact enquiries"
on public.contact_enquiries for insert
with check (true);

drop policy if exists "Public can create career applications" on public.career_applications;
create policy "Public can create career applications"
on public.career_applications for insert
with check (true);

drop policy if exists "Admins can manage pages" on public.pages;
drop policy if exists "Authenticated users can manage pages" on public.pages;
create policy "Authenticated users can manage pages"
on public.pages for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Admins can manage navigation" on public.navigation_items;
drop policy if exists "Authenticated users can manage navigation" on public.navigation_items;
create policy "Authenticated users can manage navigation"
on public.navigation_items for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Admins can manage content collections" on public.facilities;
drop policy if exists "Authenticated users can manage facilities" on public.facilities;
create policy "Authenticated users can manage facilities"
on public.facilities for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Admins can manage result collection" on public.results;
drop policy if exists "Authenticated users can manage results" on public.results;
create policy "Authenticated users can manage results"
on public.results for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage notices" on public.notices;
create policy "Authenticated users can manage notices"
on public.notices for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage gallery photos" on public.gallery_photos;
drop policy if exists "Authenticated users can manage gallery folders" on public.gallery_folders;
create policy "Authenticated users can manage gallery folders"
on public.gallery_folders for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users can manage gallery photos"
on public.gallery_photos for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage activities" on public.activities;
create policy "Authenticated users can manage activities"
on public.activities for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage principal teachers" on public.principal_teachers;
create policy "Authenticated users can manage principal teachers"
on public.principal_teachers for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage houses" on public.house_system;
create policy "Authenticated users can manage houses"
on public.house_system for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage contacts" on public.contact_details;
create policy "Authenticated users can manage contacts"
on public.contact_details for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage admission enquiries" on public.admission_enquiries;
create policy "Authenticated users can manage admission enquiries"
on public.admission_enquiries for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage contact enquiries" on public.contact_enquiries;
create policy "Authenticated users can manage contact enquiries"
on public.contact_enquiries for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage career applications" on public.career_applications;
create policy "Authenticated users can manage career applications"
on public.career_applications for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage student council" on public.student_council;
create policy "Authenticated users can manage student council"
on public.student_council for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage classes" on public.admission_classes;
create policy "Authenticated users can manage classes"
on public.admission_classes for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage media" on public.media_assets;
create policy "Authenticated users can manage media"
on public.media_assets for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

insert into public.pages (slug, title, eyebrow, body, is_published, sort_order)
values
('home', 'Shri Pragya Public School', 'Home', jsonb_build_object('paragraphs', jsonb_build_array('Nurturing minds and building futures through knowledge, discipline and values.'), 'home_gallery_eyebrow', 'Gallery', 'home_gallery_title', 'Campus glimpses'), true, 0),
('about', 'About Shri Pragya Public School', 'About', jsonb_build_object('paragraphs', jsonb_build_array('Shri Pragya Public School brings academics, values, sports and creative expression together in a structured environment.', 'The school is committed to disciplined learning, holistic development and strong parent-school communication.')), true, 1),
('origin-history', 'Origin & History', 'About', jsonb_build_object('paragraphs', jsonb_build_array('Our school has a rich legacy of providing quality education and fostering an environment of learning and growth.', 'The foundation of our school was laid by Shri Pragya Jain Smarak Samiti in 1976 as Pragya Bal Mandir, which was later transformed into Shri Pragya Public School in 1997.', 'We are proud to be one of the reputed senior secondary schools in Bijainagar and its vicinity.')), true, 2),
('origin-mission', 'Vision & Mission', 'About', jsonb_build_object('paragraphs', jsonb_build_array('We envision a world where every child is empowered with the skills and knowledge to succeed.', 'Our mission is to provide holistic education that nurtures physical, emotional, social and intellectual development.')), true, 3),
('school-codes-policies', 'School Codes & Policies', 'About', jsonb_build_object('paragraphs', jsonb_build_array('We uphold principles and rules that maintain a positive and disciplined environment.'), 'bullets', jsonb_build_array('Respect elders, parents and teachers.', 'Speak politely and thoughtfully.', 'Be truthful and honest.', 'Speak in English within school premises.', 'Carry diary and identity card daily.', 'Wear proper school uniform.', 'Mobile phones are prohibited.', 'Keep the campus clean.')), true, 4),
('principal-teachers-details', 'Principal & Teachers Details', 'About', jsonb_build_object('people', jsonb_build_array(jsonb_build_array('Dr. Navalsingh Jain', 'Director', 'Pragya Group of Institute'), jsonb_build_array('Mr. Manjeet Singh', 'Head & Deputy Director', 'IIT JEE NEET'), jsonb_build_array('Mrs Nidhi Mathur', 'Principal', 'Head Academics'), jsonb_build_array('Mrs. Sunita Sharma', 'Head', 'Transportation'), jsonb_build_array('Mrs. Drakshi Garg', 'Head', 'Pre School'))), true, 5),
('facilities', 'Facilities', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('Our campus provides spaces designed for learning, discipline and discovery.'), 'bullets', jsonb_build_array('Digital Classrooms', 'Science Labs', 'Library', 'Sports Grounds', 'Transport', 'Day Boarding')), true, 6),
('overview', 'Overview', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('Shri Pragya Public School is dedicated to academic excellence while grooming students for independent thinking, curiosity and social responsibility.', 'We take each child as an individual and help them develop their unique strengths.')), true, 7),
('hostel', 'Hostel Facility For Boys and Girls', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('SPPS offers comfortable and convenient hostel facilities for girls and boys.', 'The hostel block has spacious, well-lit, air-conditioned bedrooms, dining hall, recreation hall and pastoral care support.'), 'bullets', jsonb_build_array('Disciplined hostel routine', 'Clean and tidy rooms', 'Meals in dining hall', 'Visitor rules', 'Cash and valuables safety')), true, 8),
('laboratories', 'Laboratories', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('The school provides computer, chemistry, physics, biology and English language labs for practical learning.', 'Students learn through experiments, demonstrations, multimedia resources and guided practice.')), true, 9),
('music-sports-facilities', 'Music & Sports Facilities', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('The school emphasizes studies along with sports and music for overall development.'), 'bullets', jsonb_build_array('Archery', 'Volleyball', 'Skating', 'Cricket', 'Musical Band')), true, 10),
('interactive-classroom', 'Interactive Classroom', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('Our classrooms are spacious, bright and well-furnished.', 'Smart boards and digital teaching tools make learning more visual, interactive and engaging.')), true, 11),
('medical-facility', 'Medical Facility', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('Pragya Public School provides access to hospital facilities for students through Shree PKV Hospital.', 'The hospital provides compassionate, ethical and accessible medical care.')), true, 12),
('transportation', 'Transportation', 'Facilities', jsonb_build_object('paragraphs', jsonb_build_array('School bus transport is a safe and convenient way for students to travel.'), 'bullets', jsonb_build_array('Trained and licensed drivers', 'Safety features', 'Punctual bus stop routine', 'Follow driver instructions', 'Respect bus property')), true, 13),
('academics', 'Academics', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Our academic system supports concept clarity, regular practice, practical exposure and board readiness.')), true, 14),
('academic-calendar', 'Academic Calendar', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('The academic calendar keeps students and parents informed about important school dates, assessments, activities, holidays and academic milestones.', 'Please contact the school office for the latest detailed calendar and any date-specific updates.'), 'bullets', jsonb_build_array('Assessment schedule', 'Activity dates', 'Parent communication', 'Holiday updates')), true, 15),
('results', 'Results', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Our students continue to make the school proud through dedicated effort, consistent guidance and excellent academic performance.')), true, 36),
('academic-report-co-curricular', 'Academic Report & Co-Curricular', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Academic progress is supported by regular assessment, classroom participation, practical learning and co-curricular involvement.')), true, 16),
('exam-scheme', 'Exam Scheme', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('The school follows a structured examination pattern to evaluate conceptual clarity, writing skills and practical understanding.')), true, 17),
('syllabus', 'Syllabus', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('The syllabus is planned class-wise to maintain continuity, clarity and age-appropriate learning outcomes.')), true, 18),
('curriculum', 'Curriculum', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Our curriculum balances academics, language development, mathematics, science, social understanding, digital literacy, arts and physical education.')), true, 19),
('achievments', 'Achievments', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Students are encouraged to achieve excellence in academics, sports, arts, competitions and community participation.')), true, 20),
('admissions-withdrawl', 'Admissions & Withdrawl', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Admission is granted as per seat availability, student eligibility and completion of required documents.')), true, 21),
('fee-structure', 'Fee Structure', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('Parents can contact the school office for updated fee structure, transport charges and hostel details.')), true, 22),
('general-rules', 'General Rules', 'Academics', jsonb_build_object('paragraphs', jsonb_build_array('The school expects students to maintain discipline, punctuality, neatness and respectful conduct.')), true, 23),
('activities', 'Activities', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('Activities help students lead, perform, collaborate and build confidence beyond the classroom.')), true, 24),
('club', 'Club', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('School clubs help students explore interests, build teamwork and develop confidence.')), true, 25),
('annual-award', 'Annual Award', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('The annual award program celebrates academic excellence, discipline, sportsmanship, creativity and leadership.')), true, 26),
('interschool-co-curricular-activity', 'Inter School & Co-Curricular Activity', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('Students participate in activities to strengthen confidence, communication, teamwork and competitive spirit.')), true, 27),
('spicy-macay', 'Spic Macay', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('Cultural exposure helps students connect with Indian classical arts, music, heritage and creative traditions.')), true, 28),
('celebration', 'Celebration', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('School celebrations create joyful opportunities for students to learn culture, teamwork and stage confidence.')), true, 29),
('house-system', 'House System', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('The house system builds leadership, team spirit, healthy competition and responsibility among students.', 'At Shri Pragya Public School, we follow a vibrant 4-house system where every student is allocated to one of the four houses: Blue, Green, Red, or Yellow. This system divides the school community into smaller sub-units, fostering a strong sense of belonging, sisterhood/brotherhood, and healthy competition throughout the academic term.'), 'bullets', jsonb_build_array('House competitions', 'Student leadership roles', 'Sports participation', 'Cultural activities', 'Discipline and teamwork'), 'sections', jsonb_build_array(jsonb_build_object('heading', 'The 4 Houses at SPPS', 'paragraphs', jsonb_build_array('Each of the four houses is associated with unique values, elements, and brand identities:', '• Blue House (Water & Depth): Symbolizes intelligence, depth of knowledge, tranquility, and endless potential. Students in the Blue House strive for stability, conceptual clarity, and high ethical values.', '• Green House (Growth & Ecology): Symbolizes prosperity, continuous growth, nature, and youthfulness. Green House members focus on sustainability, environmental consciousness, sportsmanship, and creative expression.', '• Red House (Passion & Strength): Symbolizes passion, courage, vital energy, and strength of character. Members of the Red House demonstrate high enthusiasm, determination, and strong action-oriented leadership.', '• Yellow House (Intellect & Brightness): Symbolizes wisdom, optimistic energy, intellectual brightness, and joy. Yellow House students represent logical reasoning, mental alertness, cheerfulness, and positive communication.')), jsonb_build_object('heading', 'House Activities & Competitions', 'paragraphs', jsonb_build_array('Under this structure, houses compete actively in a wide array of co-curricular activities, including inter-house debates, quizzes, sports tournaments, archery, band performances, art exhibitions, and special national celebrations.', 'Points are earned throughout the academic term based on student achievements in academics, sportsmanship, discipline, co-curricular awards, and leadership roles, motivating every student to contribute their best efforts to their house.')))), true, 30),
('excursions', 'Excursions', 'Activities', jsonb_build_object('paragraphs', jsonb_build_array('Educational excursions give students real-world exposure and help them learn through observation and travel.')), true, 31),
('gallery', 'Gallery', 'Gallery', jsonb_build_object('paragraphs', jsonb_build_array('Explore glimpses of school life, campus spaces, activities and learning moments.')), true, 32),
('student-council', 'Student Council', 'Student Council', jsonb_build_object('paragraphs', jsonb_build_array('Student Council gives learners a formal space to lead, organize activities and represent student voices with responsibility.')), true, 37),
('admission-form', 'Online Admission', 'Admission', jsonb_build_object('paragraphs', jsonb_build_array('Parents can submit an admission enquiry through the contact form. Please select the student class and share contact details.')), true, 33),
('careers', 'Careers', 'Careers', jsonb_build_object('paragraphs', jsonb_build_array('Join our teaching community.', 'We welcome passionate educators who believe in discipline, care and student-centered learning. Share your profile with the school office for current vacancies.')), true, 34),
('contact-us', 'Contact Us', 'Contact', jsonb_build_object('paragraphs', jsonb_build_array('Main Branch: Pragya Road, Bijainagar (Ajmer) Raj. +91-1462-230201', 'Junior Wing: Infront of Mahaveer Bhawan, Bijainagar (Ajmer) Raj. +91-1462-230451', 'Helpline No.: 09461996117', 'Email id: officepragyaschool@gmail.com, shripragyaschool@gmail.com')), true, 35)
on conflict (slug) do update set
  title = excluded.title,
  eyebrow = excluded.eyebrow,
  body = excluded.body,
  is_published = excluded.is_published,
  sort_order = excluded.sort_order,
  updated_at = now();
