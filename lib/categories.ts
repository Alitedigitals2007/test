export const FEEDBACK_CATEGORIES = [
  "Student welfare",
  "Learning facilities and infrastructure",
  "Academic experience and support",
  "Information and communication",
  "Skills, career development, and empowerment",
  "Inclusivity and representation",
  "Other concerns or suggestions",
] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];
