export class TabManager {
    constructor(viewContext) {
        this.view = viewContext;
        this.tabBtns = document.querySelectorAll(".tab-btn");
        this.tabContents = document.querySelectorAll(".tab-content");
        
        this.init();
    }

    init() {
        this.tabBtns.forEach(btn => {
            btn.addEventListener("click", () => this.switchTab(btn));
        });
    }

    switchTab(clickedBtn) {
        // Remove active from all
        this.tabBtns.forEach(b => b.classList.remove("active"));
        this.tabContents.forEach(c => c.classList.remove("active"));

        // Add active to clicked
        clickedBtn.classList.add("active");
        const target = clickedBtn.dataset.tab;
        document.getElementById(`${target}-content`).classList.add("active");
        
        // Update View state
        this.view.activeTab = target;
        
        // Notify View to update dependent UI
        this.view.onTabChanged(target);
    }
}
