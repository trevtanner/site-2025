import { PokedexEntrySkeleton } from "@/components/pokedex/pokedexEntrySkeleton";

export default function Loading() {
  return (
    <div className="min-h-[75vh]">
      <PokedexEntrySkeleton />
    </div>
  );
}
