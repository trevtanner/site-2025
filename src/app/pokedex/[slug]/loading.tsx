import { PokedexEntrySkeleton } from "@/components/pokedex/pokedexEntrySkeleton";

export default function Loading() {
  return (
    <div className="min-h-[75vh] bg-tertiary-300">
      <PokedexEntrySkeleton />
    </div>
  );
}
