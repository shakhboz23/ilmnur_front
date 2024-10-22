export const useTabs = () => {
  function tabsDrag() {
    const tabList = document.querySelector(
      ".ant-tabs-nav-list"
    ) as HTMLElement | null;
    const tabNav = document.querySelector(".tabnav") as HTMLElement | null;

    // Adding the dragging functionality
    if (tabList) {
      let drag = false;
      const dragging = (e: any) => {
        if (!drag) return;
        tabList.classList.add("dragging");
        let transformValue = tabList.style.transform;

        // Use a regular expression to extract the translate values
        let translateMatch = transformValue.match(/translate\(([^)]+)\)/);
        let firstTranslateValue: number | null = null; // Initialize with null

        if (translateMatch) {
          const translateValues = translateMatch[1].split(","); // Split the values by comma
          firstTranslateValue = +translateValues[0].trim().slice(0, -2); // Get the first item and trim any whitespace
        } else {
          console.log("No translate values found");
        }

        // Check if firstTranslateValue is not null before using it
        if (firstTranslateValue !== null && tabNav !== null) {
          if (
            firstTranslateValue < 1 &&
            firstTranslateValue > -(tabList.scrollWidth / 2) &&
            tabNav.scrollWidth < tabList.scrollWidth
          ) {
            tabList.style.transform = `translate(${
              firstTranslateValue + e.movementX
            }px, 0px)`;
          } else if (firstTranslateValue >= 1) {
            tabList.style.transform = `translate(${0 + e.movementX}px, 0px)`;
          } else if (firstTranslateValue <= -(tabList.scrollWidth / 2)) {
            tabList.style.transform = `translate(${
              -(tabList.scrollWidth / 2) + 1 + e.movementX
            }px, 0px)`;
          }
        }
      };

      tabNav?.addEventListener("mousedown", () => {
        drag = true;
        tabList.addEventListener("mousemove", dragging); // Add mousemove listener here
      });

      document.addEventListener("mouseup", () => {
        drag = false;
        tabList.removeEventListener("mousemove", dragging); // Remove mousemove listener here
        tabList.classList.remove("dragging");
      });
    }
  }

  return {
    tabsDrag,
  }
};
