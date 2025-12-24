
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMarkdown } from "../data/MarkdownCache";
import { MarkdownRender } from "../utilities/MarkdownRender";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
      const path = slug ? `/blog/${slug}.md` : "";

  const location = useLocation();
  console.log(location.pathname); // "/blog/example"

  const [markdown, setMarkdown] = useState<string>("...Loading");
  useEffect(() => {
      if (!path) return;

      let cancelled = false;

      getMarkdown(path).then((text) => {
        if (!cancelled) {
          setMarkdown(text);
        }
      });

      return () => {
        cancelled = true;
      };
  }, [path]);

  return (
    <div className="BlogPost">
      <MarkdownRender markdown={markdown} />
    </div>
  );
}

export default BlogPost;