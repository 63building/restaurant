window.onload = () => {
    HeaderService.getInstance().loadHeader();

    SearchService.getInstance().clearMenuList();
    SearchService.getInstance().loadSearchMenus();
    SearchService.getInstance().loadCategories();
    SearchService.getInstance().setMaxPage();
    
    ComponentEvent.getInstance().addClickEventCategoryCheckboxs();
    ComponentEvent.getInstance().addScrollEventPaging();
    ComponentEvent.getInstance().addClickEventSearchButton();
    ComponentEvent.getInstance().addClickEventDeleteButton();
    
}

let maxPage = 0;

const searchObj = {
    page: 1,
    searchValue: null,
    count: 4
}


class ComponentEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ComponentEvent();
        }
        return this.#instance;
    }

    addScrollEventPaging() {
        const html = document.querySelector("html");
        const body = document.querySelector("body");

        body.onscroll = () => {
            const scrollPosition = body.offsetHeight - html.clientHeight - html.scrollTop;

            if(scrollPosition < 250 && searchObj.page < maxPage) {
                searchObj.page++;
                SearchService.getInstance().loadSearchMenus();
            }
        }
    }

    addClickEventSearchButton() {
        const searchButton = document.querySelector(".search-button");
        const searchInput = document.querySelector(".search-input");

        searchButton.onclick = () => {
            searchObj.searchValue = searchInput.value;
            searchObj.page = 1;
            window.scrollTo(0, 0);
            SearchService.getInstance().clearMenuList();
            SearchService.getInstance().setMaxPage();
            SearchService.getInstance().loadSearchMenus();
        }

        searchInput.onkeyup = () => {
            if(window.event.keyCode == 13) {
                searchButton.click();
            }
        }
    }

    addClickEventDeleteButton() {
        const deleteButton = document.querySelector(".delete-button");
        deleteButton.onclick = () => {
            if(confirm("정말로 삭제하시겠습니까?")) {
                const deleteArray = new Array();
    
                MenuService.getInstance().removeMenus(deleteArray);
            }
        }
    }

}