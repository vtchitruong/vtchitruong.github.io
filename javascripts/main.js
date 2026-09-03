document.addEventListener("DOMContentLoaded", function () {
  function setupDropdown(toggleId, stackId) {
    const toggleBtn = document.getElementById(toggleId);
    const stack = document.getElementById(stackId);

    if (toggleBtn && stack) {
      toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        // Close any other open stack first
        document.querySelectorAll(".glass-stack").forEach(function (otherStack) {
          if (otherStack !== stack) {
            otherStack.classList.remove("is-open");
            otherStack.setAttribute("aria-hidden", "true");
            const otherBtn = document.querySelector('[aria-controls="' + otherStack.id + '"]');
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        // Toggle current stack
        const isOpen = stack.classList.contains("is-open");
        if (isOpen) {
          stack.classList.remove("is-open");
          stack.setAttribute("aria-hidden", "true");
          toggleBtn.setAttribute("aria-expanded", "false");
        } else {
          stack.classList.add("is-open");
          stack.setAttribute("aria-hidden", "false");
          toggleBtn.setAttribute("aria-expanded", "true");
        }
      });
    }
  }

  setupDropdown("menu-toggle", "menu-stack");
  setupDropdown("donation-toggle", "donation-stack");

  // Close all stacks when clicking anywhere outside
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".glass-stack").forEach(function (stack) {
      const toggleBtn = document.querySelector('[aria-controls="' + stack.id + '"]');
      if (!stack.contains(e.target) && e.target !== toggleBtn) {
        stack.classList.remove("is-open");
        stack.setAttribute("aria-hidden", "true");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
});