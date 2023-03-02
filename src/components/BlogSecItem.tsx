import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogSecItem() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function getArticle() {
      const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');

      const response = await req.json();
      setArticle(response);
    }
    getArticle();
  }, []);


  return (
    <section className="pb-10">
      <div className="container mx-auto mt-10">
        {/* header title blog */}
        <div className="flex flex-wrap justify-between">
          <p className="text-3xl font-semibold">Blog Untuk Anda</p>
        </div>
        {/* end header title blog */}

        {/* item blog */}
        <div className="flex flex-wrap mt-8">
          {article.map((data: any) =>
            <article className="w-full md:w-6/12 pb-8 px-6" key={data.id}>
              <div className="flex-col bg-gray-200">
                <img
                  className="m-0 w-full overflow-hidden h-72"
                  src={data.imageUrl}
                  alt={data.newsSite}
                  width={200}
                  height={200}
                />

                <div className="p-4">
                  <h1 className="font-bold text-2xl text-pink-600">{data.title}</h1>
                  <div className="flex mt-4">
                    <div className="w-6/12 flex items-center">
                      <h1 className="text-base font-semibold text-slate-500">Site: {data.newsSite}</h1>
                    </div>
                    <div className="w-6/12 text-right pb-2">
                      <Link to={`/blog/${data.id}`} className="text-right text-sm py-2 px-4 rounded-lg bg-pink-600 text-white">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
        {/* end item blog */}
      </div>
    </section>
  )
}
