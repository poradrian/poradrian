import { Resources } from "~/components/Resources";
import { Signature } from "~/components/Signature";

export default function Index() {
  return (
    <main className="mx-auto max-w-2xl">
      <section className="lg:mt-56">
        <header className="px-2">
          <Signature />
          <h1 className="mt-1 text-2xl text-gray-12">
            enjoyer of user-friendly and
            <br />
            visually appealing web experiences.
          </h1>
        </header>
      </section>
      <article>
        <section>
          <Resources />
        </section>
      </article>
    </main>
  );
}
