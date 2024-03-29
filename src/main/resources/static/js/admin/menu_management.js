window.onload = () => {
    SearchMenuService.getInstance().clearMenuList();
    SearchMenuService.getInstance().loadSearchMenus();
    SearchMenuService.getInstance().setMaxPage();
    ComponentEvent.getInstance().addScrollEventPaging();
    ComponentEvent.getInstance().addClickEventDeleteButton();
}

let maxPage = 0;

const searchObj = {
    page: 1,
    searchValue: null,
    limit: "Y",
    count: 10
}

class SearchMenuApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new SearchMenuApi();
        }
        return this.#instance;
    }

    getTotalCount() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://localhost:8000/api/admin/search/menu/totalcount",
            // data: searchObj,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        })

        return responseData;
    }

    searchMenus() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://localhost:8000/api/admin/menus",
            data: searchObj,
            dataType: "json",
            success: response => {
                responseData = response.data;
                console.log(response)
            },
            error: error => {
                console.log(error);
            }
        })

        return responseData;
    }

    removeMenu(menuCode) {
        $.ajax({
            async: false,
            type: "delete",
            url: "http://localhost:8000/api/admin/menu/" + menuCode,
            dataType: "json",
            success: response => {
                location.reload();
            },
            error: error => {
                console.log(error);
            }
        })
    }
}


class SearchMenuService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new SearchMenuService();
        }
        return this.#instance;
    }

    setMaxPage() {
        const totalCount = SearchMenuApi.getInstance().getTotalCount();
        maxPage = totalCount % 10 == 0 
            ? totalCount / 10 
            : Math.floor(totalCount / 10) + 1;

    }

    clearMenuList() {
        const contentContainer = document.querySelector(".content-container");
        contentContainer.innerHTML = "";
    }

    loadSearchMenus() {
        const responseData = SearchMenuApi.getInstance().searchMenus()
        const contentContainer = document.querySelector(".content-container");

        console.log(responseData);
        // <img src="/static/images/food w1.png" alt="음식사진" class="menu-img">
        // <img src="http://localhost:8000/image/menu/${data.saveName != null ? data.saveName : "no_img.png"}" class="menu-img">
        responseData.forEach((data, index) => {
            contentContainer.innerHTML += `
            <div class="content-flex">
                <div class="info-container">
                    <div class="menu-desc">
                        <div class="img-container">
                            <img src="/static/images/food w1.png" alt="음식사진" class="menu-img">
                        </div>                    
                        <div class="menu-info">
                            <div class="menu-code">${data.menuCode}</div>
                            <h3 class="menu-name">${data.menuName}</h2>
                            <div class="info-text3">
                                <div class="info-text menu-day"><b>${data.day}</b></div>
                                <div class="info-text menu-meals"><b>&nbsp; ${data.meals}</b></div>
                            </div>
                            <div class="info-text1">
                                <div class="info-text menu-age1"><b>대인: </b>${data.menuAge1}</div>
                                <div class="info-textmenu-age2"><b>소인: </b>${data.menuAge2}</div>
                            </div>
                            <div class="info-text2">
                                <div class="info-text sales-pride"><b>판매기간: </b>${data.salesPride}</div>
                            </div>
                                <div class="menu-icon">
                                <div class="menu-change"><a href="/templates/admin/menu_correction.html?menuCode=${data.menuCode}"><i class="fa-solid fa-wand-magic-sparkles"></i></a></div>
                                <button type="button" class="delete-button"><i class="fa-solid fa-eraser"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            `;
        })
    }
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

            if(scrollPosition < 50 && searchObj.page < maxPage) {
                searchObj.page++;
                SearchService.getInstance().loadSearchMenus();
            }
        }
    }

    addClickEventDeleteButton() {
        var deleteButton = document.querySelectorAll(".delete-button");

        deleteButton.forEach((button, index) => {
            button.onclick = () => {
                if(confirm("정말로 삭제하시겠습니까?")) {
                    const menuCode = document.querySelectorAll(".menu-code")[index].textContent;
                    SearchMenuApi.getInstance().removeMenu(menuCode);
                }
            }
        })
    }

}
