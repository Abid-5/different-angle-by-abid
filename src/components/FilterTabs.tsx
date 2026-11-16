import type { FilterCategory } from "../data/photos";
import { filterCategories } from "../data/photos";

type FilterTabsProps = {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
};

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <>
      <label className="mobile-category-filter">
        Browse by
        <select
          value={active}
          onChange={(event) => onChange(event.target.value as FilterCategory)}
          aria-label="Photograph category"
        >
          {filterCategories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All photographs" : category}
            </option>
          ))}
        </select>
      </label>
      <div
        className="gallery-filters"
        role="group"
        aria-label="Filter photographs by category"
      >
        {filterCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
