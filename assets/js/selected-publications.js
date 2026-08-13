(() => {
  const initSelectedPublications = (root) => {
    const tabs = Array.from(root.querySelectorAll("[data-publication-tab]"));
    const panels = Array.from(root.querySelectorAll("[data-publication-panel]"));
    const tabList = root.querySelector('[role="tablist"]');
    const panelContainer = root.querySelector("[data-publication-panels]");

    if (!tabList || !panelContainer || tabs.length < 2 || tabs.length !== panels.length) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionDuration = 340;
    let activeIndex = 0;
    let isSwitching = false;

    tabList.hidden = false;
    root.classList.add("is-enhanced");

    panels.forEach((panel, index) => {
      const isActive = index === activeIndex;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });

    const activateTab = (nextIndex, moveFocus = false) => {
      if (nextIndex === activeIndex || isSwitching) {
        if (moveFocus) {
          tabs[nextIndex].focus();
        }
        return;
      }

      const currentPanel = panels[activeIndex];
      const nextPanel = panels[nextIndex];
      isSwitching = true;

      tabs.forEach((tab, index) => {
        const isSelected = index === nextIndex;
        tab.classList.toggle("is-active", isSelected);
        tab.setAttribute("aria-selected", String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
      });

      if (moveFocus) {
        tabs[nextIndex].focus();
      }
      if (reduceMotion) {
        currentPanel.hidden = true;
        currentPanel.classList.remove("is-active", "is-leaving");
        nextPanel.hidden = false;
        nextPanel.classList.add("is-active");
        activeIndex = nextIndex;
        isSwitching = false;
        return;
      }

      panelContainer.style.height = `${currentPanel.offsetHeight}px`;
      root.classList.add("is-switching");
      nextPanel.hidden = false;
      nextPanel.classList.add("is-entering");

      requestAnimationFrame(() => {
        panelContainer.style.height = `${nextPanel.scrollHeight}px`;
        currentPanel.classList.remove("is-active");
        currentPanel.classList.add("is-leaving");
        nextPanel.classList.remove("is-entering");
        nextPanel.classList.add("is-active");
      });

      window.setTimeout(() => {
        currentPanel.hidden = true;
        currentPanel.classList.remove("is-leaving");
        root.classList.remove("is-switching");
        panelContainer.style.height = "";
        activeIndex = nextIndex;
        isSwitching = false;
      }, transitionDuration);
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(index));

      tab.addEventListener("keydown", (event) => {
        let nextIndex;

        if (event.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(nextIndex, true);
      });
    });
  };

  const init = () => {
    document.querySelectorAll("[data-selected-publications]").forEach(initSelectedPublications);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
