import type { FilterCategory } from "../data/photos";
import { filterCategories } from "../data/photos";

type FilterTabsProps = {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
};

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Filter gallery by category"
    >
      {filterCategories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          onClick={() => onChange(category)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            active === category
              ? "border-gold bg-gold text-black"
              : "border-white/12 bg-white/[0.035] text-smoke hover:border-white/30 hover:text-bone"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
