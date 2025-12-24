const markdownCache: Record<string, string> = {};

export async function getMarkdown(path: string): Promise<string> {
  if (markdownCache[path]) {
    return markdownCache[path];
  }

  const response = await fetch(path);
  const text = await response.text();
  markdownCache[path] = text;
  return text;
}
