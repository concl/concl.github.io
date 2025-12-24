import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { getMarkdown } from "../data/MarkdownCache";
import { MarkdownRender } from "../utilities/MarkdownRender";

import "./BlogCard.css";

function BlogCard({ mdPath, slug } : { mdPath: string; slug: string; title?: string; maxChars?: number }) {

    const [markdown, setMarkdown] = useState<string>("...Loading");
    useEffect(() => {
        let cancelled = false;

        getMarkdown(mdPath).then((text) => {
            if (!cancelled) {
                setMarkdown(text);
            }
        });

        return () => {
            cancelled = true;
        };
    }, [mdPath]);

    return (
        <div className="BlogCard">
            <div className="Preview">
                <MarkdownRender markdown={ markdown } />
            </div>
            <div className="text-center">
                <Link to={`/blog/${slug}`} className="ReadMoreLink">Read More</Link>
            </div>
        </div>
    );
}

export default BlogCard;