export default function BlogCard() {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        14 Jul 2020
      </p>
      <div className="mb-3">
        <a
          href="/"
          aria-label="Article"
          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
            Mascarpone cheese triangles taleggio
          </p>
        </a>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        Brie cheese triangles cheesecake. Cauliflower cheese cheese
        and wine manchego bocconcini croque monsieur queso airedale
        brie.
      </p>
    </div>
  );
}
