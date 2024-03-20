type GitHubStarsProps = { githubRepository: string };

export const GitHubStars = async ({ githubRepository }: GitHubStarsProps) => {
  //eslint-disable-next-line
  const { stargazers_count } = await (
    await fetch(`https://api.github.com/repos/${githubRepository}`)
  ).json();

  return <span>{stargazers_count ?? 0}</span>;
};
