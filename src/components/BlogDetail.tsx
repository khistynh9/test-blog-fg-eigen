import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState<any>({});

    useEffect(() => {
        async function getArticle() {
            const req = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`);

            const response = await req.json();
            setArticle(response);
        }
        getArticle();
    }, [params]);
    return (
        <section className="pb-20 pt-10">
            <div className="container mx-auto">
                <div className="flex space-x-6">
                    <div className="w-full">
                        <div className="text-center">
                            <img
                                className="rounded-lg w-full h-96"
                                src={article.imageUrl}
                                alt={article.newsSite}
                            />
                        </div>
                        <div className="pt-6 space-y-4">
                            <h1 className="text-4xl font-semibold text-pink-800">{article.title}</h1>
                            <Link to={article.url} target="_blank">
                                <p className="text-lg font-semibold text-gray-400 pt-4">
                                    by {article.newsSite}
                                </p>
                            </Link>
                            <p className="text-2xl font-semibold">
                                {article.summary}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
