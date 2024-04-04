const BlogPosts = () => {
  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained (TEST)",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting (TEST)",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mx-auto mt-12 flex w-full max-w-screen-lg justify-center md:px-8 lg:pl-[350px] 2xl:pl-0">
      <div className="mt-12 grid gap-2 sm:grid-cols-2">
        {posts.map((items, key) => (
          <article
            className="mt-4 max-w-sm rounded-md bg-white shadow-lg duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="h-48 w-full rounded-t-md"
              />
              <div className="mt-2 flex items-center pt-3">
                <div className="ml-3">
                  <span className="block text-sm text-gray-400">
                    {items.date}
                  </span>
                </div>
              </div>

              <div className="mb-3 ml-4 mr-2 pt-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
