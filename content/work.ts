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
  "I've worked across technology, healthcare, and nonprofit innovation, but the work has remained consistent: helping organizations better understand the people they serve so they can make better decisions. These projects show what that work looks like in practice.",  
  
  projects: [
    {
      slug: "meta",

      organization: "Meta",

      role: "User Experience Researcher",

      title: "Facilitating Human Connection at Scale",

      subtitle:
        "Using qualitative research to shape products that strengthen social connection.",
    
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

      title: "Designing Around People's Real Lives",

subtitle:
  "Founding a nonprofit to translate research into better access to reproductive healthcare.",    },

    {
      slug: "ucsf",

      organization: "University of California, San Francisco",

      role: "Research Project Manager",

      title: "Improving Patient Experiences",

      subtitle:
        "Using mixed-methods research and service design to strengthen shared healthcare decision-making.",
    },
  ],
};