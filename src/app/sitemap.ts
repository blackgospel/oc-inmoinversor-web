import { getAllArticlesAction } from "@/server/actions/articles";

export const baseUrl = "https://inmoinversor.com";

export default async function sitemap() {
  const articles = await getAllArticlesAction();
  const formattedArticles = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updated).toISOString().split("T")[0],
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...formattedArticles];
}
