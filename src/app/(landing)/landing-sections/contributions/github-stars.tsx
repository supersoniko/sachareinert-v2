type GitHubStarsProps = { githubRepository: string };

export const GitHubStars = async ({ githubRepository }: GitHubStarsProps) => {
  let stars = 0;

  try {
    //eslint-disable-next-line
    const { stargazers_count } = await (
      await fetch(`https://api.github.com/repos/${githubRepository}`)
    ).json();
    stars = stargazers_count as number;
  } catch (e) {
    console.error("Error fetching GitHub stars", e);
  }

  return <span>{stars ?? 0}</span>;
};
