// A small suggestion-list widget attached to a text input inside a
// `.select-wrap-auto` wrapper. Shared by the name search and author fields.
//
// options:
//   input        - the text input element
//   getMatches   - (filterText) => array of string suggestions
//   onSelect     - (value) => void, called when a suggestion is clicked
//   hideWhenEmpty - hide the list while the input is empty (default: false)
//   limit        - max suggestions to display (default: no limit)
export function createAutocomplete({ input, getMatches, onSelect, hideWhenEmpty = false, limit = Infinity }) {
  const wrapper = input.closest(".select-wrap-auto");

  const list = document.createElement("ul");
  list.className = "neobrutal-autocomplete";
  list.style.display = "none";
  wrapper.appendChild(list);

  function renderList(filterText) {
    if (hideWhenEmpty && !filterText.trim()) {
      list.style.display = "none";
      return;
    }

    const matches = getMatches(filterText).slice(0, limit);
    list.innerHTML = "";

    if (!matches.length) {
      list.style.display = "none";
      return;
    }

    for (const value of matches) {
      const li = document.createElement("li");
      li.className = "neobrutal-item";
      li.textContent = value;
      li.addEventListener("click", () => {
        input.value = value;
        onSelect(value);
        hide();
      });
      list.appendChild(li);
    }

    list.style.display = "block";
  }

  function hide() {
    list.style.display = "none";
  }

  input.addEventListener("input", (e) => renderList(e.target.value));
  input.addEventListener("focus", () => renderList(input.value));

  return { wrapper, hide };
}
