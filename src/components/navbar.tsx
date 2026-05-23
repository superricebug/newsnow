import { fixedColumnIds, metadata } from "@shared/metadata"
import { Link } from "@tanstack/react-router"
import { currentColumnIDAtom } from "~/atoms"

export function NavBar() {
  const currentId = useAtomValue(currentColumnIDAtom)
  const { toggle } = useSearchBar()
  return (
    <span className={$([
      "air-nav-pill flex items-center gap-1 text-sm",
      "transition-all duration-300",
    ])}
    >
      <button
        type="button"
        onClick={() => toggle(true)}
        className={$(
          "air-nav-item air-nav-more",
          "cursor-pointer transition-all",
        )}
      >
        更多
      </button>
      {fixedColumnIds.map(columnId => (
        <Link
          key={columnId}
          to="/c/$column"
          params={{ column: columnId }}
          className={$(
            "air-nav-item inline-flex items-center cursor-pointer transition-all",
            currentId === columnId ? "air-nav-item-active" : "",
          )}
        >
          {metadata[columnId].name}
        </Link>
      ))}
    </span>
  )
}
