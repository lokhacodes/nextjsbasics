"use client";
import Link from "next/link";
import {use} from "react";

export default function NewsArticlePage ({params, searchParams}:
    {params: Promise < {articleId: string}>;
     searchParams: Promise <{lang?: "en|bn"}>;
}
) {
    const {articleId} =  use (params);
    const {lang = "en" } = use (searchParams);
    return (
        <div>
            <h1>News aricle {articleId} </h1>
            <p>Reading in language {lang}</p>



            <div>
                <p><Link href={`/articles/${articleId}?lang=en`}>Read in English</Link></p>
                <p><Link href={`/articles/${articleId}?lang=bn`}>Read in Bengali</Link></p>
            </div>
        </div>
    );
}