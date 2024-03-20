import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";
import { SectionLayout } from "@/app/(landing)/components/section-layout/section-layout";

import { ContributionCard } from "./contribution-card";

const contributions = [
  {
    title: "DynamoDB Paginator",
    description: "A npm package to help paginate DynamoDB results into pages",
    githubLink: "https://github.com/supersoniko/dynamodb-paginator",
  },
  {
    title: "AWS Secrets Dotenv",
    description: " Easily manage your environment variables on AWS with .env",
    githubLink: "https://github.com/supersoniko/aws-secrets-dotenv",
  },
  {
    title: "Hono API Starter",
    description:
      "Modern DX friendly starter for Node.js/Hono APIs with the focus on simplicity and robustness",
    githubLink: "https://github.com/supersoniko/hono-api-starter",
  },
];

export const ContributionsSection = () => {
  return (
    <SectionLayout id="contributions" aria-labelledby="contributions-heading">
      <SectionTitle id="contributions-heading">Contributions</SectionTitle>
      <div className="space-y-4 pr-4 md:flex md:space-x-8 md:space-y-0 md:pr-0">
        {contributions.map((contribution) => (
          <ContributionCard
            key={contribution.title}
            contribution={contribution}
          />
        ))}
      </div>
    </SectionLayout>
  );
};
