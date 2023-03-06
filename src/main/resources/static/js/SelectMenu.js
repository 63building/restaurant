window.onload = () =>{

    SearchService.getInstance().loadSearchBooks();
}

const MenuObj = {
    menuID: "",
    menuName: "",
    day: "",
    meals: "",

    adultPrice: "",
    childPrice: ""
}

class SearchApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new SearchApi();
        }
        return this.#instance;
    }

    searchBook() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "http://127.0.0.1:8000/api/search",
            data: MenuObj,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return responseData;
    }

}

class SearchService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new SearchService();
        }
        return this.#instance;
    }


    loadSearchBooks() {
        const responseData = SearchApi.getInstance().searchBook();
        const contentFlex = document.querySelector(".resv_menu_test");

        responseData.forEach((data) => {
            contentFlex.innerHTML += `
            <div class="menu_select">
              <input
                type="radio"
                id="주중 점심 A"
                name="ckbCheck"
                value="1000"
                title="주중 점심 A"
                onclick="funcAddMenuChecked(); funcCheckSum()"
              />
    
              <label class="la_check" for="input_add_product0">${data.day}+${data.meals}</label>
              <span class="img">
                <img
                  width="180"
                  height="126"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUYOh3z4H2yAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                  alt="배너"
                />
              </span>
              <div class="bx_price">
                <div class="price_info">
                  <p class="price">
                    <span>대인</span>
                    <span class="mem_num">${data.adultPrice}</span>
                  </p>
    
                  <p class="price">
                    <span>소인</span>
                    <span class="mem_num">${data.childPrice}</span>
                  </p>
                </div>
              </div>
    
              <a href="#" class="btn_more href_link"></a>
              <div
                id="layer_type02"
                class="menu_sel clfix rv_layer_type02 lay_i1"
                style="display: none"
              >
                <div class="width:826px;height:264px;background-color:#FFFFFF">
                  <span style="width: 377px; height: 264px; float: left"></span>
                </div>
              </div>
            </div>
            `;
        })
    }
}