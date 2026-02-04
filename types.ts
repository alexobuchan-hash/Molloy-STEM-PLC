
export type NavigationItem = 'Overview' | 'Discussions' | 'Case Studies' | 'Materials' | 'Tech Demos' | 'Hackathons' | 'Idea League';

export interface Post {
  id: string;
  author: string;
  avatar: string;
  category: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
}

export interface DiscussionThread {
  id: string;
  title: string;
  author: string;
  avatar?: string;
  category: string;
  replies: number;
  latestActivity: string;
  lastReplyBy: string;
  postedTime: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Lesson Plan' | 'Video' | 'PDF' | 'Lab Guide';
  grade: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}
