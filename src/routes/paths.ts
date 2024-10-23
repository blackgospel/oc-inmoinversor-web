const ROOTS = {
  BLOG: "/blog",
};

export const paths = {
  blog: {
    root: (slug: string) => `${ROOTS.BLOG}/${slug}`,
  },
};
