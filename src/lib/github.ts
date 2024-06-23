export async function getWikiPage(slug: string): Promise<string> {
    const repoOwner = "abstractmelon";
    const repoName = "bopl-battle-dev-wiki";
    const url = `https://raw.githubusercontent.com/wiki/${repoOwner}/${repoName}/${slug}.md`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch page ${slug}`);
    }

    const text = await res.text();
    return text;
}
