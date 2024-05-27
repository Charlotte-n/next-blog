import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeVideo from "rehype-video";
import { getHighlighter } from "shiki";
import Video from "./app/components/articles/code/Video";
const options = {
  theme: "dracula-soft",
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  getHighlighter: (options: any) =>
    getHighlighter({
      ...options,
      langs: ["plaintext", "javascript"],
    }),
};
const Font = defineNestedType(() => ({
  name: "Font",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
    },
    slug: {
      type: "enum",
      required: true,
      options: ["hello"],
    },
  },
}));
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: {
      type: "mdx",
    },
    image: { type: "string" },
    category: {
      type: "nested",
      of: Font,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
  components: {
    Video,
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, options] as any,
      rehypeSlug,
      rehypeVideo,
    ],
  },
});
