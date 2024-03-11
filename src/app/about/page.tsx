import Navbar from "@/components/Navigation/Navbar";

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-300 px-4 md:pt-10">
      <div className="sticky top-0 z-10 w-screen overflow-auto sm:ml-4 sm:flex sm:h-[530px] sm:flex-col sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
        <Navbar includeVerticalView />
      </div>
      <h1 className="my-8 font-merriweather text-4xl  font-semibold">
        About Me
      </h1>

      <section className="max-w-[650px]">
        <article className="text-justify text-lg">
          <p>
            Hey! My name&apos;s Brandon (All my friends call me blee though),
            and I&apos;m just a dude who loves reading, music, games, aka
            indoor/homebody stuff, though I <span className="italic">have</span>{" "}
            been known to venture out into the great outdoors for a couple beers
            from time to time.
          </p>

          <p className="pt-4">
            Actually on my hobbies, I really REALLY love reading, so you&apos;ll
            prob see me gushing about some books or the other, mainly in the
            fantasy vein, but I tend to read a pretty wide spectrum of genres
            including thriller, mystery, horror, romance, legal thrillers, and
            recently some slice of life stuff/super low impact fantasy, etc. But
            also I&apos;m a pretty easy sell on books so you prob won&apos;t see
            reviews, but more me just talking about what I liked etc
          </p>

          <p className="pt-4">
            Oh also! I really enjoy coding, since I tend to feel like it&apos;s
            genuinely the only aspect of my life where everything I want to
            say/do comes out as I envision it! That being said I ain&apos;t a
            coding genius or whatever, It&apos;s just really the brand of
            creativity/expression I have that&apos;s mine, ya know.
          </p>

          <p className="pt-4">
            Wait, this whole thing makes me sound super introverted, but I like
            to describe my social energy as a High output, low capacity battery
            type, ya know? I def have some introverted tendencies but primarily
            I think I just tend to really enjoy my own company a lot and tend to
            get addicted to my own lil hideaway. Not really selling the
            &quot;Not actually introverted&quot; allegations, am I 😭 Just come
            grab some drinks with me and you&apos;ll see what I mean, I promise
          </p>

          <p className="pt-4">
            But yeah, welcome to my lil online hideaway! This site&apos;ll
            slowly but constantly grow, since I also plan to make this place be
            an online playground for me, so look forward to seeing a bunch of
            mini-projects formulate/prototype here!
          </p>

          <p></p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
