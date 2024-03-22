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
import { LetterEffectText } from "../../components/letter-effect-text/letter-effect-text";

type Contribution = {
  title: string;
  description: string;
  githubRepository: string;
};

type ContributionCardProps = { contribution: Contribution };

export const ContributionCard = ({ contribution }: ContributionCardProps) => {
  return (
    <Card className="group max-w-sm">
      <CardHeader>
        <CardTitle>
          <LetterEffectText
            text={contribution.title}
            className="md:group-hover:letter-effect-text-animate"
          />
        </CardTitle>
        <CardDescription>{contribution.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link
          className="flex space-x-1"
          target="_blank"
          href={`https://github.com/${contribution.githubRepository}`}
        >
          <Github />
          <span>GitHub Repository</span>
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
