export type Project = {
  slug: string;

  organization: string;

  role: string;

  title: string;

  subtitle: string;

  summary?: string;

  challenge?: string;
};

export const work: {
  title: string;
  introduction: string;
  projects: Project[];
} = {
  title: "Selected Work",

  introduction:
  "I've helped organizations understand people in very different contexts, but the work has always centered on turning research into better decisions and less friction. Explore three examples below.",  
  
  projects: [
    {
      slug: "meta",

      organization: "Meta",

      role: "User Experience Researcher",

      title: "Helping A Large Organization Understand Social Connection",

      subtitle:
      "Conducting qualitative research that informed product strategy across experiences used by billions of people.",
    
summary:
  "At Meta, I partnered with product teams to better understand the behaviors, motivations, and emotional needs underlying social connection — and translate those insights into product strategy.",

      challenge: `
How do you design products that help billions of people build and maintain meaningful relationships?

At Meta, I partnered with product teams to better understand the behaviors, needs, and motivations underlying social connection.

While product metrics could tell us what people were doing, our research focused on understanding why—and how those insights could guide product strategy across multiple surfaces over time.
`,
    },

    {
      slug: "easy-ec",

      organization: "Easy EC",

      role: "Founder & Executive Director",

      title: "Helping Young People Navigate Reproductive Healthcare",

      subtitle:
        "Founding a nonprofit that transformed user research into a more accessible reproductive healthcare service.",    },

    {
      slug: "ucsf",

      organization: "University of California, San Francisco",

      role: "Research Project Manager",

      title: "Helping Patients Have Better Conversations with Providers",

      subtitle:
        "Using mixed-methods research and human-centered design to improve shared decision-making in healthcare.",
    },
  ],
};