import {IPost} from "@/interfaces";

export const defaultPosts: IPost[] = [
  {
    id: 1,
    title: "The Journey to Success",
    summary: "An inspiring tale of overcoming obstacles and achieving greatness.",
    author: "John Doe",
    content:
      "Once upon a time, in a land far away, there lived a young dreamer named Alex. From a very young age, Alex had big dreams of making a difference in the world. Despite facing numerous challenges and setbacks, Alex's determination never wavered. With hard work, perseverance, and a little bit of luck, Alex eventually achieved success and inspired countless others to follow their own dreams.",
    category: {id: 4, name: "Inspiration"},
    createdAt: "2023-10-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Balancing Work and Family Life",
    summary: "Tips and strategies for maintaining a healthy work-life balance.",
    author: "Jane Smith",
    content:
      "In today's fast-paced world, finding a balance between work and family life can be challenging. However, with the right strategies, it's possible to achieve harmony. Prioritizing tasks, setting boundaries, and making time for loved ones are essential steps in creating a fulfilling life. Remember, success is not just about career achievements but also about nurturing relationships and personal well-being.",
    category: {id: 3, name: "Family"},
    createdAt: "2023-10-05T14:30:00Z",
  },
  {
    id: 3,
    title: "The Importance of Lifelong Learning",
    summary: "Why continuous education is crucial in today's ever-changing world.",
    author: "Emily Johnson",
    content:
      "In an era of rapid technological advancements and shifting job markets, lifelong learning has become more important than ever. Embracing a mindset of continuous education allows individuals to stay relevant, adapt to new challenges, and seize opportunities for growth. Whether through formal education, online courses, or self-study, investing in learning is a key factor in personal and professional success.",
    category: {id: 2, name: "Education"},
    createdAt: "2023-10-10T09:15:00Z",
  },
  {
    id: 4,
    title: "Building Strong Relationships",
    summary: "The foundation of meaningful connections in personal and professional life.",
    author: "Michael Brown",
    content:
      "Strong relationships are built on trust, communication, and mutual respect. Whether in personal friendships or professional networks, investing time and effort into nurturing connections can lead to a more fulfilling life. Active listening, empathy, and being present are essential skills for building and maintaining strong relationships that stand the test of time.",
    category: {id: 5, name: "Relationship"},
    createdAt: "2023-10-15T11:45:00Z",
  },
  {
    id: 5,
    title: "Navigating Career Changes",
    summary: "How to successfully transition to a new career path.",
    author: "Sarah Lee",
    content:
      "Changing careers can be a daunting yet rewarding experience. It requires careful planning, self-assessment, and a willingness to step out of one's comfort zone. Researching new industries, acquiring relevant skills, and networking with professionals in the desired field are crucial steps in making a successful transition. Remember, it's never too late to pursue a career that aligns with your passions and values.",
    category: {id: 1, name: "Career"},
    createdAt: "2023-10-20T08:00:00Z",
  },
  {
    id: 6,
    title: "Embracing Change in Life",
    summary: "How to adapt and thrive in the face of life's inevitable changes.",
    author: "David Wilson",
    content:
      "Change is an inevitable part of life, and learning to embrace it can lead to personal growth and new opportunities. Whether it's a change in career, relationships, or personal circumstances, adopting a positive mindset and being open to new experiences can help individuals navigate transitions more smoothly. Resilience, flexibility, and a willingness to learn are key attributes that can turn challenges into opportunities for success.",
    category: {id: 4, name: "Inspiration"},
    createdAt: "2023-10-25T13:20:00Z",
  },
  {
    id: 7,
    title: "The Role of Education in Personal Development",
    summary: "How education shapes our character and future.",
    author: "Laura Martinez",
    content:
      "Education is not just about acquiring knowledge; it's also about developing critical thinking, creativity, and emotional intelligence. A well-rounded education helps individuals understand themselves and the world around them, fostering personal growth and a sense of purpose. By embracing lifelong learning and seeking diverse experiences, we can continuously evolve and contribute positively to society.",
    category: {id: 2, name: "Education"},
    createdAt: "2023-10-30T15:10:00Z",
  },
  {
    id: 8,
    title: "Effective Communication in Relationships",
    summary: "The key to building and maintaining strong connections.",
    author: "James Anderson",
    content:
      "Effective communication is the cornerstone of any successful relationship. Whether it's with family, friends, or colleagues, being able to express thoughts and feelings clearly and listen actively is essential. Developing strong communication skills can help resolve conflicts, build trust, and deepen connections. Remember, it's not just about talking but also about understanding and being understood.",
    category: {id: 5, name: "Relationship"},
    createdAt: "2023-11-02T10:50:00Z",
  },
  {
    id: 9,
    title: "Career Growth in the Digital Age",
    summary: "Strategies for advancing your career in a technology-driven world.",
    author: "Olivia Taylor",
    content:
      "In today's digital age, career growth often requires adapting to new technologies and continuously updating skills. Embracing digital tools, networking online, and staying informed about industry trends can open doors to new opportunities. Additionally, developing soft skills such as adaptability, problem-solving, and collaboration is crucial for thriving in a rapidly changing work environment.",
    category: {id: 1, name: "Career"},
    createdAt: "2023-11-05T12:30:00Z",
  },
  {
    id: 10,
    title: "The Power of Mentorship",
    summary: "How mentors can guide and inspire personal and professional growth.",
    author: "Sophia Harris",
    content:
      "Mentorship plays a vital role in personal and professional development. A mentor can provide guidance, support, and valuable insights based on their own experiences. Building a strong mentor-mentee relationship can help individuals navigate challenges, set goals, and achieve success. Whether seeking advice from a seasoned professional or offering mentorship to others, the exchange of knowledge and encouragement is a powerful tool for growth.",
    category: {id: 4, name: "Inspiration"},
    createdAt: "2023-11-10T09:00:00Z",
  },
  {
    id: 11,
    title: "Family Traditions and Their Importance",
    summary: "How family traditions strengthen bonds and create lasting memories.",
    author: "Daniel Clark",
    content:
      "Family traditions play a crucial role in fostering a sense of belonging and continuity. Whether it's holiday celebrations, weekly dinners, or annual trips, these rituals create opportunities for connection and shared experiences. They help build strong family bonds, pass down values, and create lasting memories that can be cherished for generations. Embracing and creating family traditions can enrich our lives and strengthen relationships.",
    category: {id: 3, name: "Family"},
    createdAt: "2023-11-15T14:00:00Z",
  },
  {
    id: 12,
    title: "Overcoming Fear of Change",
    summary: "Strategies to embrace change and turn it into an opportunity.",
    author: "Grace Lewis",
    content:
      "Fear of change can often hold us back from reaching our full potential. However, by shifting our perspective and viewing change as an opportunity for growth, we can overcome this fear. Techniques such as mindfulness, setting small achievable goals, and seeking support from others can help ease the transition. Embracing change with an open mind can lead to new experiences, personal development, and unexpected successes.",
    category: {id: 4, name: "Inspiration"},
    createdAt: "2023-11-20T11:30:00Z",
  },
];
