import Link from "next/link";
import { Suspense } from "react";
import { Github, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubStars } from "./github-stars";

type Contribution = {
  title: string;
  description: string;
  githubRepository: string;
};

type ContributionCardProps = { contribution: Contribution };

export const ContributionCard = ({ contribution }: ContributionCardProps) => {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{contribution.title}</CardTitle>
        <CardDescription>{contribution.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link
          className="flex space-x-1"
          target="_blank"
          href={`https://github.com/${contribution.githubRepository}`}
        >
          <Github />
          <span>GitHub</span>
        </Link>
        <div className="flex space-x-1">
          <Star />
          <Suspense fallback={<span>...</span>}>
            <GitHubStars githubRepository={contribution.githubRepository} />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
};
