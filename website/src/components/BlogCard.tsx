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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
                {markdown === "...Loading" ? (
                    <SkeletonTheme baseColor="var(--color-bg-3)" highlightColor="var(--color-highlight)">
                        <h1><Skeleton /></h1>
                        <h2><Skeleton width={"20%"}/></h2>
                        <Skeleton count={10} />
                    </SkeletonTheme>
                ) : (
                    <MarkdownRender markdown={ markdown } />
                )}
            </div>
            <div className="text-center">
                <Link to={`/blog/${slug}`} className="ReadMoreLink">Read More</Link>
            </div>
        </div>
    );
}

export default BlogCard;