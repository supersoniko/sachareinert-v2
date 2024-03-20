import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

type Contribution = {
  title: string;
  description: string;
  githubLink: string;
};

type ContributionCardProps = { contribution: Contribution };

export const ContributionCard = ({ contribution }: ContributionCardProps) => {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{contribution.title}</CardTitle>
        <CardDescription>{contribution.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          className="flex space-x-1"
          target="_blank"
          href={contribution.githubLink}
        >
          <Github />
          <span>GitHub</span>
        </Link>
      </CardContent>
    </Card>
  );
};
