(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ququ2020 -->\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/component/home/home.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/component/home/home.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"homePage\">\n    <div class=\"homePage_card\">\n        <div class=\"card_menu \">\n            <div class=\"menu_ui-nav001\" (click)=\"handleMenu()\">\n                <app-ui-nav001 [isClickMenu]=\"isClickMenu\" [menuChars]=\"menuChars\"></app-ui-nav001>\n            </div>\n            <div class=\"menu_ui-nav-list001\" [ngClass]=\"isClickMenu ? '':'menu_ui-nav-list001--none'\">\n                <app-ui-nav-list001 [isClickMenu]=\"isClickMenu\" [menuList]=\"menuList\"\n                    (clickMenuPage)=\"clickMenuCard($event)\"></app-ui-nav-list001>\n            </div>\n        </div>\n\n        <div class=\"card_resume\" #cardScroll>\n            <ng-container *ngIf=\"currentPage == 0\">\n                <div class=\"resume_info\">\n                    <div class=\"info_title\">\n                        <app-ui-title001 [mainTitle]=\"menuList[0]\" [subTitle]=\"'About me'\"></app-ui-title001>\n                    </div>\n                    <div class=\"info_content\">\n                        <div class=\"info_content_introduce\">\n                            <div class=\"introduce_pic\">\n                                <div class=\"pic_text-top\">Hello,</div>\n                                <div class=\"pic_image-size\">\n                                    <img class=\"image-size_img\" src=\"assets/img/ququ.jpeg\">\n                                </div>\n                                <div class=\"pic_text-bottom\">我是曲蕓，<br/>目前朝向網頁前端領域發展，喜歡網站動態特效、製作共用性模組化元件，同時也想了解更多前端串接技巧。</div>\n                                <div class=\"pic_link\">\n                                    <div class=\"link_block\">\n                                        <a href=\"https://github.com/bcyunbi\" target=\"_blank\"\n                                            rel=\"noreferrer noopener\"><img src=\"assets/img/github.svg\">\n                                        </a>\n                                    </div>\n                                    <div class=\"link_block\">\n                                        <a href=\"https://www.facebook.com/qu.yunbi\" target=\"_blank\"\n                                            rel=\"noreferrer noopener\"><img class=\"link_block_img\" src=\"assets/img/facebook.svg\">\n                                        </a>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"introduce_content\">\n                                <ul class=\"layout-list-normal001\">\n                                    <p class=\"layout-list-title001\">經歷：</p>\n                                    <li class=\"layout-list-normal001_child\">元智資傳環控物連網計畫、《基於圖形識別之低成本快速整理紙筆測驗批改方法》論文</li>\n                                    <li class=\"layout-list-normal001_child\">臺師大「英語線上學習平臺建置開發及課程推廣計畫」－研發人員|\n                                        2017.05-2018.04\n                                    </li>\n                                    <li class=\"layout-list-normal001_child\">吉樂健康資訊科技有限公司－前端實習生 |\n                                        2018.04-2019.03\n                                    </li>\n                                    <li class=\"layout-list-normal001_child\">新逸資訊科技有限公司－前台工程師 | 2019.07-2020.03</li>\n                                </ul>\n                                <ul class=\"layout-list-normal001\">\n                                    <p class=\"layout-list-title001\">技術：</p>\n                                    <li class=\"layout-list-normal001_child\">框架開發：Angular、React</li>\n                                    <li class=\"layout-list-normal001_child\">Css 預處理器：Scss、Less</li>\n                                    <li class=\"layout-list-normal001_child\">UI / UX：Adobe XD、PS、AI</li>\n                                    <li class=\"layout-list-normal001_child\">jQuery、Html5、bootstrap</li>\n                                    <li class=\"layout-list-normal001_child\">其他：Unity C#、3Ds Max</li>\n                                    <li class=\"layout-list-normal001_child\">TOEIC：745</li>\n                                </ul>\n                                <ul class=\"layout-list-normal001\">\n                                    <p class=\"layout-list-title001\">學歷：</p>\n                                    <li class=\"layout-list-normal001_child\">Yuan Ze University Information Communication\n                                        |\n                                        2015-2019</li>\n                                    <li class=\"layout-list-normal001_child\">UAL: LCC-Short Course: Game Design |\n                                        2017.07-08\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"currentPage == 1\">\n                <div class=\"resume_info\">\n                    <div class=\"info_title\">\n                        <app-ui-title001 [mainTitle]=\"menuList[1]\" [subTitle]=\"'Angular 開發'\"></app-ui-title001>\n                    </div>\n                    <div class=\"info_content\">\n                        <app-ui-content-project001>\n                            <ng-container TextType='pointBlock'>\n                                <div class=\"layout-point-style001\">以 Angular + Cordova 開發成web APP</div>\n                                <div class=\"layout-point-style001\">此專案有六國版本，由核心core＋各國客製化版本</div>\n                            </ng-container>\n                            <ng-container TextType='infoBlock'>\n                                <div class=\"layout-title001\">專案介紹：</div>\n                                <ul class=\"layout-list-circle001\">\n                                    <p class=\"layout-list-title001\">包含多國版本：</p>\n                                    <li class=\"layout-list-circle001_child\">國際版（ENG) <span\n                                            class=\"layout-list-note001\">此為核心core版本</span></li>\n                                    <li class=\"layout-list-circle001_child\">台灣(MDO)</li>\n                                    <li class=\"layout-list-circle001_child\">斯里蘭卡(LKA)</li>\n                                    <li class=\"layout-list-circle001_child\">菲律賓(PH)</li>\n                                    <li class=\"layout-list-circle001_child\">印尼(IN)</li>\n                                    <li class=\"layout-list-circle001_child\">泰國(TH)</li>\n                                    <p class=\"layout-list-title001\">使用平台：</p>\n                                    <li class=\"layout-list-circle001_child\">Android 平板 ＆手機</li>\n                                    <li class=\"layout-list-circle001_child\">IOS 平板 ＆手機</li>\n                                    <li class=\"layout-list-circle001_child\">基本上皆適用於寬度1366 ～ 320尺寸</li>\n                                </ul>\n                                <div class=\"layout-block001\">\n                                    <div class=\"layout-title001\">工作內容：</div>\n                                    <ul class=\"layout-list-circle001\">\n                                        <p class=\"layout-list-title001\">主要負責：</p>\n                                        <li class=\"layout-list-circle001_child\">台灣版的開發與客製化元件\n                                            <ul class=\"layout-list-style001\">\n                                                <li class=\"layout-list-style001_child\">客戶管理 </li>\n                                                <li class=\"layout-list-style001_child\">保單處理</li>\n                                                <li class=\"layout-list-style001_child\">訊息通知</li>\n                                                <li class=\"layout-list-style001_child\">幫助中心</li>\n                                                <li class=\"layout-list-style001_child\">台灣版開發後期全站維護與修改</li>\n                                            </ul>\n                                        </li>\n                                        <li class=\"layout-list-circle001_child\">核心core元件第二階段開發</li>\n                                        <p class=\"layout-list-title001\">開發說明：</p>\n                                        <li class=\"layout-list-circle001_child\">Angular 8.1.3框架開發</li>\n                                        <li class=\"layout-list-circle001_child\">使用JavaScript、TypeScript、Html5等等</li>\n                                        <li class=\"layout-list-circle001_child\">css預處理器使用Sass</li>\n                                        <li class=\"layout-list-circle001_child\">Git版控</li>\n                                    </ul>\n                                </div>\n\n                                <div class=\"layout-block002 content_device\">\n                                    <div class=\"device_table\" *ngIf=\"tableImg\">\n                                        <img class=\"table_device\" src=\"assets/img/table.png\">\n                                        <div class=\"table_img\">\n                                            <app-ui-slider001>\n                                                <div class=\"swiper-slide\"\n                                                    *ngFor=\"let item of tableImg | async; let i = index\">\n                                                    <div class=\"slider-inner\">\n                                                        <img src=\"{{item.img}}\">\n                                                    </div>\n                                                </div>\n                                            </app-ui-slider001>\n                                        </div>\n                                    </div>\n                                    <div class=\"device_mobile\" *ngIf=\"mobileImg\">\n                                        <img class=\"mobile_device\" src=\"assets/img/mobile.png\">\n                                        <div class=\"mobile_img\">\n                                            <app-ui-slider001>\n                                                <div class=\"swiper-slide\"\n                                                    *ngFor=\"let item of mobileImg | async; let i = index\">\n                                                    <div class=\"slider-inner \">\n                                                        <img src=\"{{item.img}}\">\n                                                    </div>\n                                                </div>\n                                            </app-ui-slider001>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </app-ui-content-project001>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"currentPage == 2\">\n                <div class=\"resume_info\">\n                    <div class=\"info_title\">\n                        <app-ui-title001 [mainTitle]=\"menuList[2]\" [subTitle]=\"'Angular 開發'\"></app-ui-title001>\n                    </div>\n                    <div class=\"info_content\">\n                        <app-ui-content-project001>\n                            <ng-container TextType='pointBlock'>\n                                <div class=\"layout-point-style001\">Angular與傳統切版開發、Cordova 包版 </div>\n                                <div class=\"layout-point-style001\">根據現行醫院官網（傳統開發：不使用任何框架）進行後續開發\n                                </div>\n                            </ng-container>\n                            <ng-container TextType='infoBlock'>\n                                <div class=\"layout-title001\">專案介紹：</div>\n                                <ul class=\"layout-list-circle001\">\n                                    <p class=\"layout-list-title001\">相關說明：</p>\n                                    <li class=\"layout-list-circle001_child\">以網頁為主（但app有保留）</li>\n                                    <li class=\"layout-list-circle001_child\">在傳統開發官網的規則下，作Angular切版改寫</li>\n                                    <p class=\"layout-list-title001\">使用平台：</p>\n                                    <li class=\"layout-list-circle001_child\">支援Safari、Chrome、IE 11</li>\n                                    <li class=\"layout-list-circle001_child\">Android 平板 ＆手機、IOS 平板 ＆手機</li>\n                                    <li class=\"layout-list-circle001_child\">基本上皆適用於解析度2560 ～ 320x自訂高度，最佳1440x768</li>\n                                </ul>\n                                <div class=\"layout-block001\">\n                                    <div class=\"layout-title001\">工作內容：</div>\n                                    <ul class=\"layout-list-circle001\">\n                                        <p class=\"layout-list-title001\">主要負責：</p>\n                                        <li class=\"layout-list-circle001_child\">Angular切版開發與客製化元件，包含：\n                                            <ul class=\"layout-list-style001\">\n                                                <li class=\"layout-list-style001_child\">網路掛號初診</li>\n                                                <li class=\"layout-list-style001_child\">老人健檢</li>\n                                                <li class=\"layout-list-style001_child\">衛教照護資訊</li>\n                                                <li class=\"layout-list-style001_child\">用藥查詢</li>\n                                                <li class=\"layout-list-style001_child\">藥物反應不良線上通報</li>\n                                                <li class=\"layout-list-style001_child\">藥物諮詢</li>\n                                                <li class=\"layout-list-style001_child\">QA案例分享</li>\n                                                <li class=\"layout-list-style001_child\">文件申請</li>\n                                            </ul>\n                                        </li>\n                                        <p class=\"layout-list-title001\">開發說明：</p>\n                                        <li class=\"layout-list-circle001_child\">Angular 8.1.3框架開發</li>\n                                        <li class=\"layout-list-circle001_child\">使用JavaScript、TypeScript、Html5等等</li>\n                                        <li class=\"layout-list-circle001_child\">css預處理器使用Sass</li>\n                                        <li class=\"layout-list-circle001_child\">Git版控</li>\n                                    </ul>\n                                </div>\n\n                                <div class=\"layout-block002 content_device\">\n                                    <div class=\"device_table\" *ngIf=\"skhTableImg\">\n                                        <img class=\"table_device\" src=\"assets/img/table.png\">\n                                        <div class=\"table_img\">\n                                            <app-ui-slider001>\n                                                <div class=\"swiper-slide\"\n                                                    *ngFor=\"let item of skhTableImg | async; let i = index\">\n                                                    <div class=\"slider-inner\">\n                                                        <img src=\"{{item.img}}\">\n                                                    </div>\n                                                </div>\n                                            </app-ui-slider001>\n                                        </div>\n                                    </div>\n                                    <div class=\"device_mobile\" *ngIf=\"skhMobileImg\">\n                                        <img class=\"mobile_device\" src=\"assets/img/mobile.png\">\n                                        <div class=\"mobile_img\">\n                                            <app-ui-slider001>\n                                                <div class=\"swiper-slide\"\n                                                    *ngFor=\"let item of skhMobileImg | async; let i = index\">\n                                                    <div class=\"slider-inner \">\n                                                        <img src=\"{{item.img}}\">\n                                                    </div>\n                                                </div>\n                                            </app-ui-slider001>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </app-ui-content-project001>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"currentPage == 3\">\n                <div class=\"resume_info\">\n                    <div class=\"info_title\">\n                        <app-ui-title001 [mainTitle]=\"menuList[3]\" [subTitle]=\"'傳統切版 Html5 & jQuery'\"></app-ui-title001>\n                    </div>\n                    <div class=\"info_content\">\n                        <app-ui-content-project001>\n                            <ng-container TextType='infoBlock'>\n                                <div class=\"info_content_web-info\">\n                                    <ng-container *ngFor=\"let item of infoList; i as index\">\n                                        <div class=\"web-info_component\">\n                                            <app-ui-content-info001 [imgSrc]=\"item.imgSrc\" [webSrc]=\"item.webSrc\"\n                                                [textTitle]=\"item.textTitle\" [textInfo]=\"item.textInfo\">\n                                            </app-ui-content-info001>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-container>\n                        </app-ui-content-project001>\n                    </div>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"currentPage == 4\">\n                <div class=\"resume_info\">\n                    <div class=\"info_title\">\n                        <app-ui-title001 [mainTitle]=\"menuList[4]\" [subTitle]=\"'電子書'\"></app-ui-title001>\n                    </div>\n                    <div class=\"info_content\">\n                        <app-ui-content-project001>\n                            <ng-container TextType='infoBlock'>\n                                <div class=\"content-book\">\n                                    <iframe\n                                        src=\"https://cdn.flipsnack.com/widget/v2/widget.html?hash=f7csr8ljd&bgcolor=transparent&t=1540204623&play=1\"\n                                        width=\"100%\" height=\"400\" seamless=\"seamless\" scrolling=\"no\" frameBorder=\"0\"\n                                        transparentBackground=\"true\" allowFullScreen=\"false\"></iframe>\n                                </div>\n                                <div class=\"content-book\">\n                                    <iframe\n                                        src=\"https://cdn.flipsnack.com/widget/v2/widget.html?hash=fx9fo5fnv&bgcolor=EEEEEE&t=1540204623&play=1\"\n                                        width=\"100%\" height=\"400\" seamless=\"seamless\" scrolling=\"no\" frameBorder=\"0\"\n                                        transparentBackground=\"true\" allowFullScreen=\"false\"></iframe>\n                                </div>\n                            </ng-container>\n                        </app-ui-content-project001>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiContentInfo001UiContentInfo001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-content-info001\">\n    <div class=\"ui-content-info001_word-size\">\n        <a href=\"{{webSrc}}\" class=\"text_link\">{{textTitle}}</a>\n    </div>\n    <div class=\"ui-content-info001_img-size\">\n        <img class=\"img-size_img\" src=\"{{imgSrc}}\">\n    </div>\n    <div class=\"ui-content-info001_word-size\">\n        <div class=\"word-size_text\">\n            {{textInfo}}\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiContentProject001UiContentProject001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- resume__info__recipes -->\n<div class=\"ui-content-project001\">\n    <div class=\"ui-content-project001_point-block\">\n        <ng-content select=\"[TextType='pointBlock']\"></ng-content>\n    </div>\n    <div class=\"ui-content-project001_text-block\">\n        <ng-content select=\"[TextType='infoBlock']\"></ng-content>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-footer001/ui-footer001.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-footer001/ui-footer001.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiFooter001UiFooter001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>ui-footer001 works!</p>\nCopyright © 2020 ququ2020 Co.,Ltd. All rights reserved.";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-header001/ui-header001.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-header001/ui-header001.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiHeader001UiHeader001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>ui-header001 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-map001/ui-map001.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-map001/ui-map001.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiMap001UiMap001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-map001\">\n    <div class=\"ui-map\">\n      <div class=\"map_google\">\n        <iframe width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\n          src=\"https://maps.google.com.tw/maps?f=q&amp;hl=zh-TW&amp;geocode=&amp;q=238新北市樹林區俊英街219巷38-2號&amp;z=16&amp;output=embed&amp;t=\"></iframe>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiNavList001UiNavList001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-nav-list001\" [@openClose]=\"isClickMenu? 'open':'closed'\">\n    <div class=\"ui-nav-list001_card\" *ngFor=\"let menuText of menuList; index as i\" (click)=\"clickMenuCard(i)\">\n        <div class=\"card_content\">\n            <div class=\"content_title\" >{{menuText}}</div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav001/ui-nav001.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav001/ui-nav001.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiNav001UiNav001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"ui-nav001\">\n  <div class=\"ui-nav001_menu\" (click)=\"handelHambuger()\">\n    <!-- menu上面圖示 -->\n    <!-- <div class=\"menu_hamburger\" [ngClass]=\"isClickMenu ? 'active':''\"></div> -->\n\n      <div class=\"menu_hamburger\" [ngClass]=\"isClickMenu ? 'active':''\">\n        <span class=\"line\"></span>\n        <span class=\"line\"></span>\n        <span class=\"line\"></span>\n      </div>\n    \n    <!-- menu上面字樣 -->\n    <ng-container *ngFor=\"let char of menuChars; index as i\">\n    <div class=\"menu_char\" >{{char}}</div>\n  </ng-container>\n  </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-slider001/ui-slider001.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-slider001/ui-slider001.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiSlider001UiSlider001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-slider001\">\n    <!--  套件固定class -->\n    <div class=\"swiper-container\" [swiper]=\"config\">\n        <div class=\"swiper-wrapper\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n        <div class=\"swiper-button-prev\"></div>\n        <div class=\"swiper-button-next\"></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-title001/ui-title001.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-title001/ui-title001.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiCustomizeComponentUiTitle001UiTitle001ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-title001\">\n    <div class=\"sub-title\">{{subTitle}}</div>\n    <div class=\"main-title\">{{mainTitle}}</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [{
      path: 'home',
      children: [{
        path: 'index',
        loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(m => m.HomeModule)
      }]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudWktc2xpZGVyMDAxe1xuLy8gICAgIGhlaWdodDogNTAwcHg7XG4vLyB9XG4qe1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufSIsIioge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'ququ2020';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/component/home/home.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/home/component/home/home.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeComponentHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\nbody {\n  width: 100%;\n  height: 100vh;\n  background: #ABD0CE;\n  place-items: center;\n  overflow: hidden;\n}\n.homePage {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.homePage_card {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  background: #ABD0CE;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background-size: cover;\n  background-position: 13rem;\n  background-repeat: no-repeat;\n  background-image: url('demo.svg');\n}\n@media (min-width: 768px) {\n  .homePage_card {\n    height: 90vh;\n    width: 95%;\n    box-shadow: 0 10px 55px rgba(0, 0, 0, 0.15);\n    border-radius: 2rem;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    background-position: 20rem;\n  }\n}\n.homePage_card[data-resume=ravioli] .menu.active svg.menu__link__shape {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.homePage_card .card_menu {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n}\n.homePage_card .card_menu .menu_ui-nav001 {\n  width: 10%;\n  height: 100%;\n}\n.homePage_card .card_menu .menu_ui-nav-list001 {\n  height: 100%;\n  width: calc(100% - 10%);\n  position: absolute;\n  left: 10%;\n  -webkit-transition: z-index 1.5s ease-in;\n  transition: z-index 1.5s ease-in;\n  z-index: 97;\n}\n.homePage_card .card_menu .menu_ui-nav-list001--none {\n  z-index: 0;\n}\n.homePage_card .card_resume {\n  display: inline-block;\n  width: calc(100% - 10%);\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-left: 10%;\n}\n.homePage_card .card_resume .resume_info {\n  padding-bottom: 100px;\n}\n.homePage_card .card_resume .resume_info .info_title {\n  padding: 30px;\n}\n.homePage_card .card_resume .resume_info .info_content {\n  padding: 0 40px 30px;\n  width: 100%;\n  height: 100%;\n  color: #061826;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic {\n  padding-top: 20px;\n  padding-right: 20px;\n  position: relative;\n  max-width: 30%;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic {\n    max-width: 100%;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_text-top {\n  font-size: 50px;\n  position: absolute;\n  top: -10px;\n  color: #ABD0CE;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_text-top:before {\n  content: \"Hello,\";\n  font-size: 50px;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  color: #fff;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_text-bottom {\n  font-size: 1rem;\n  color: #fff;\n  margin: 10px 0 20px;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_image-size {\n  width: 100%;\n  height: auto;\n  border-radius: 2rem;\n  overflow: hidden;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_image-size .image-size_img {\n  width: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_link {\n  width: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_link .link_block {\n  display: inline-block;\n  max-width: 40px;\n  width: 100%;\n  height: auto;\n  padding-right: 10px;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_pic .pic_link .link_block_img {\n  width: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content_introduce .introduce_content {\n  max-width: calc(100% - 30% - 40px);\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .homePage_card .card_resume .resume_info .info_content_introduce .introduce_content {\n    max-width: 100%;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content_web-info {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.homePage_card .card_resume .resume_info .info_content_web-info .web-info_component {\n  width: 50%;\n  display: inline-block;\n  padding: 30px;\n}\n@media (max-width: 767px) {\n  .homePage_card .card_resume .resume_info .info_content_web-info .web-info_component {\n    width: 100%;\n    padding: 10px;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content .content_device {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-flow: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_table {\n  width: 60%;\n  height: auto;\n  position: relative;\n  margin-right: 80px;\n}\n@media (max-width: 768px) {\n  .homePage_card .card_resume .resume_info .info_content .content_device .device_table {\n    width: 100%;\n    margin: 0px 0px 50px;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_table .table_device {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 2;\n  min-height: 15vw;\n}\n@media (min-width: 992px) {\n  .homePage_card .card_resume .resume_info .info_content .content_device .device_table .table_device {\n    min-height: 30vw;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_table .table_img {\n  width: 100%;\n  height: 100%;\n  padding: 4% 9% 3%;\n  z-index: 1;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_table .table_img img {\n  width: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_mobile {\n  width: calc(27% - 80px);\n  height: auto;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .homePage_card .card_resume .resume_info .info_content .content_device .device_mobile {\n    width: 70%;\n  }\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_mobile .mobile_device {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 2;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_mobile .mobile_img {\n  width: 100%;\n  height: auto;\n  padding: 28% 6%;\n  z-index: 1;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_mobile .mobile_img img {\n  width: 100%;\n  height: 100%;\n}\n.homePage_card .card_resume .resume_info .info_content .content_device .device_mobile .slider-inner {\n  height: 100%;\n  width: 100%;\n  background-color: #f5f5f5;\n}\n.homePage_card .card_resume .resume_info .info_content .content-book {\n  width: 80%;\n  margin: 0 auto;\n}\n.homePage_card .resume {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  font-size: 1.4rem;\n  height: 100vh;\n}\n.homePage_card .resume h2 {\n  font: 3rem/1.2 \"Gotu\", sans-serif;\n  letter-spacing: -0.1rem;\n  margin-bottom: 3rem;\n  margin-left: 1rem;\n}\n@media (min-width: 680px) {\n  .homePage_card .resume h2 {\n    font: 5rem/1.2 \"Gotu\", sans-serif;\n    margin-left: 3rem;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n.homePage_card .resume h2 .char {\n  display: inline-block;\n}\n.homePage_card .resume__background {\n  opacity: 0.35;\n  position: absolute;\n  top: 2%;\n  max-width: 34rem;\n  left: -10%;\n}\n.homePage_card .spaghetti .resume__background {\n  -webkit-transform: rotate(20deg);\n          transform: rotate(20deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2xheW91dC9fbGF5b3V0LnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9oZWxwZXIvX2V4dGVuZC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXBwL2hvbWUvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9oZWxwZXIvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFlBQUE7RUFDQSxxQkNnRGlCO0FGOUNuQjtBQ0dBO0VBQ0Usd0JBQUE7QURBRjtBQ01BO0VBQ0UscUJBQUE7RUFDQSxlQzJDYTtBRjlDZjtBQ0tFO0VBQ0Usa0JBUmM7QURLbEI7QUNLSTtFQUNFLGlCQUFBO0FESE47QUNRSTtFQUNFLGlCQUFBO0FETk47QUNVRTtFQUNFLHVCQUFBO0FEUko7QUNZQTtFQUNFLG1CQ29FYTtFRG5FYixjQ3ZCYztFRHdCZCxtQkNRYztBRmpCaEI7QUNXQTtFQUNFLGtCQ2tFYztFRGpFZCxjQ3RCYTtBRmNmO0FDV0E7RUFDRSw4QkFBQTtBRFJGO0FDVUU7RUFDRSxZQUFBO0VBRUEsY0NyQ1k7RURzQ1osb0JBQUE7QURUSjtBQ2FBO0VBQ0UsOEJBQUE7QURWRjtBQ1lFO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqRFk7RURrRFosa0JDMkNZO0VEMUNaLG9CQUFBO0VBQ0EsY0FBQTtBRFZKO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDa0JBO0VBQ0Usa0JDb0JhO0VEbkJiLGNDaEZjO0VEaUZkLG1CQ3ZDYztFRHdDZCx3QkFBQTtBRGZGO0FDaUJBO0VBQ0ksZUNoQ1c7RURpQ1gsY0N0RVc7RUR1RVgscUJDM0NlO0FGNkJuQjtBQ2VJO0VBQ0UsaUJBQUE7QURiTjtBQ2tCQTtFQUNFLFVBQUE7RUFDQSx5QkNoR2M7QUZpRmhCO0FDa0JBO0VBQ0UseUJDekZjO0FGMEVoQjtBQzJCQTtFQUNFLDhCQ2pIYztFRGtIZCw2QkN2R2M7RUR3R2Qsb0NBQUE7RUFDQSxrQ0NwSGM7RURxSGQsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQ3ZIYztFRHdIZCw2QkM3R2M7QUZxRmhCO0FHdEdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUh5R0Y7QUd0R0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBSHlHRjtBSTNHQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJGSWU7RUVIZixtQkFBQTtFQUNBLGdCQUFBO0FKOEdEO0FJM0dBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBSjhHRDtBSTVHQztFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkZmYztFRWdCZCxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7QUo4R0Y7QUk1R0U7RUFmRDtJQWdCRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJGM0NXO0lHWVYsbUNBQUE7SUFDQSxnQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esb0NBQUE7SUQ4QkQsMEJBQUE7RUprSEQ7QUFDRjtBSS9HRztFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUppSEo7QUk3R0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FKK0dIO0FJNUdHO0VBQ0MsVUE3RE87RUE4RFAsWUFBQTtBSjhHSjtBSTFHRztFQUNDLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsU0F2RU87RUF3RVAsd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLFdBQUE7QUoyR0o7QUl4R0k7RUFDQyxVQUFBO0FKMEdMO0FJcEdFO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBSnNHSDtBSXBHRztFQUNDLHFCQUFBO0FKc0dKO0FJcEdJO0VBQ0MsYUFBQTtBSnNHTDtBSW5HSTtFQUNDLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjRjlGVztBRm1NaEI7QUluR0s7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBSnFHTjtBSW5HTTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FKcUdQO0FJbkdPO0VBUEQ7SUFRRSxlQUFBO0VKc0dOO0FBQ0Y7QUlwR087RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0ZuSFE7QUZ5TmhCO0FJcEdRO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdGcklLO0FGMk9kO0FJbEdPO0VBQ0MsZUZwRk87RUVxRlAsV0YzSU07RUU0SU4sbUJBQUE7QUpvR1I7QUlqR087RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRnZKTTtFRXdKTixnQkFBQTtBSm1HUjtBSWpHUTtFQUNDLFdBQUE7QUptR1Q7QUkvRk87RUFDQyxXQUFBO0FKaUdSO0FJL0ZRO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBSmlHVDtBSS9GUztFQUNDLFdBQUE7QUppR1Y7QUkzRk07RUFDQyxrQ0FBQTtFQUNBLFdBQUE7QUo2RlA7QUkzRk87RUFKRDtJQUtFLGVBQUE7RUo4Rk47QUFDRjtBSXhGSztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLDBCQUFBO1VBQUEsb0JBQUE7QUowRk47QUl4Rk07RUFDQyxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FKMEZQO0FJekZPO0VBSkQ7SUFLRSxXQUFBO0lBQ0EsYUFBQTtFSjRGTjtBQUNGO0FJdEZLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUp3Rk47QUl0Rk07RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUp3RlA7QUl0Rk87RUFORDtJQU9FLFdBQUE7SUFDQSxvQkFBQTtFSnlGTjtBQUNGO0FJdkZPO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FKeUZSO0FJdkZRO0VBVkQ7SUFXRSxnQkFBQTtFSjBGUDtBQUNGO0FJdkZPO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUp5RlI7QUl2RlE7RUFDQyxXQUFBO0FKeUZUO0FJbkZNO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUpxRlA7QUluRk87RUFMRDtJQU1FLFVBQUE7RUpzRk47QUFDRjtBSXBGTztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUpzRlI7QUluRk87RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FKcUZSO0FJbkZRO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUpxRlQ7QUlqRk87RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRnBSTTtBRnVXZDtBSTlFSztFQUNDLFVBQUE7RUFDQSxjQUFBO0FKZ0ZOO0FJdkVFO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUp5RUg7QUl2RUc7RUFDQyxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBSnlFSjtBSXZFSTtFQU5EO0lBT0UsaUNBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUowRUg7QUFDRjtBSXhFSTtFQUNDLHFCQUFBO0FKMEVMO0FJdEVHO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSndFSjtBSWxFRztFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUpvRUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5xdXF1MjAyMC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5bY2xhc3NePWxheW91dC1saXN0LV0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSArIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHg7XG59XG5cbi5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4ubGF5b3V0LWxpc3Qtbm90ZTAwMSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM1YTZhNzE7XG59XG5cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG59XG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pemXCI7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmxheW91dC1saXN0LXN0eWxlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xufVxuLmxheW91dC1saXN0LXN0eWxlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdHlsZTAwMS1udW1iZXI7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3R5bGUwMDEtbnVtYmVyKSBcIi5cIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmxheW91dC1ibG9jazAwMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sYXlvdXQtYmxvY2swMDIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubGF5b3V0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI2ZmZmZmMztcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xufVxuXG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzVhNmE3MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmxheW91dC1wb2ludC1zdHlsZTAwMSArIC5sYXlvdXQtcG9pbnQtc3R5bGUwMDEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl8wMDEsIGJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYzO1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSwgYm9keSAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTY1NjM7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAjN2E2NTYzO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICM3YTY1NjM7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZC1saW1pdC1saW5lVHlwZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjQUJEMENFO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaG9tZVBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ob21lUGFnZV9jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNBQkQwQ0U7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxM3JlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9kZW1vLnN2Z1wiKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaG9tZVBhZ2VfY2FyZCB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDU1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjByZW07XG4gIH1cbn1cbi5ob21lUGFnZV9jYXJkW2RhdGEtcmVzdW1lPXJhdmlvbGldIC5tZW51LmFjdGl2ZSBzdmcubWVudV9fbGlua19fc2hhcGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfbWVudSAubWVudV91aS1uYXYwMDEge1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9tZW51IC5tZW51X3VpLW5hdi1saXN0MDAxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMCU7XG4gIHRyYW5zaXRpb246IHotaW5kZXggMS41cyBlYXNlLWluO1xuICB6LWluZGV4OiA5Nztcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX21lbnUgLm1lbnVfdWktbmF2LWxpc3QwMDEtLW5vbmUge1xuICB6LWluZGV4OiAwO1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX3RpdGxlIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudCB7XG4gIHBhZGRpbmc6IDAgNDBweCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzA2MTgyNjtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnRfaW50cm9kdWNlIC5pbnRyb2R1Y2VfcGljIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2UgLmludHJvZHVjZV9waWMge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X2ludHJvZHVjZSAuaW50cm9kdWNlX3BpYyAucGljX3RleHQtdG9wIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGNvbG9yOiAjQUJEMENFO1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X2ludHJvZHVjZSAuaW50cm9kdWNlX3BpYyAucGljX3RleHQtdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSGVsbG8sXCI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtM3B4O1xuICB0b3A6IC0zcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X2ludHJvZHVjZSAuaW50cm9kdWNlX3BpYyAucGljX3RleHQtYm90dG9tIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2UgLmludHJvZHVjZV9waWMgLnBpY19pbWFnZS1zaXplIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2UgLmludHJvZHVjZV9waWMgLnBpY19pbWFnZS1zaXplIC5pbWFnZS1zaXplX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X2ludHJvZHVjZSAuaW50cm9kdWNlX3BpYyAucGljX2xpbmsge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2UgLmludHJvZHVjZV9waWMgLnBpY19saW5rIC5saW5rX2Jsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnRfaW50cm9kdWNlIC5pbnRyb2R1Y2VfcGljIC5waWNfbGluayAubGlua19ibG9ja19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF9pbnRyb2R1Y2UgLmludHJvZHVjZV9jb250ZW50IHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMCUgLSA0MHB4KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X2ludHJvZHVjZSAuaW50cm9kdWNlX2NvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50X3dlYi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF93ZWItaW5mbyAud2ViLWluZm9fY29tcG9uZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudF93ZWItaW5mbyAud2ViLWluZm9fY29tcG9uZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnQgLmNvbnRlbnRfZGV2aWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudCAuY29udGVudF9kZXZpY2UgLmRldmljZV90YWJsZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50X2RldmljZSAuZGV2aWNlX3RhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCAwcHggNTBweDtcbiAgfVxufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50X2RldmljZSAuZGV2aWNlX3RhYmxlIC50YWJsZV9kZXZpY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDI7XG4gIG1pbi1oZWlnaHQ6IDE1dnc7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50X2RldmljZSAuZGV2aWNlX3RhYmxlIC50YWJsZV9kZXZpY2Uge1xuICAgIG1pbi1oZWlnaHQ6IDMwdnc7XG4gIH1cbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudCAuY29udGVudF9kZXZpY2UgLmRldmljZV90YWJsZSAudGFibGVfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNCUgOSUgMyU7XG4gIHotaW5kZXg6IDE7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnQgLmNvbnRlbnRfZGV2aWNlIC5kZXZpY2VfdGFibGUgLnRhYmxlX2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudCAuY29udGVudF9kZXZpY2UgLmRldmljZV9tb2JpbGUge1xuICB3aWR0aDogY2FsYygyNyUgLSA4MHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50X2RldmljZSAuZGV2aWNlX21vYmlsZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50X2RldmljZSAuZGV2aWNlX21vYmlsZSAubW9iaWxlX2RldmljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cbi5ob21lUGFnZV9jYXJkIC5jYXJkX3Jlc3VtZSAucmVzdW1lX2luZm8gLmluZm9fY29udGVudCAuY29udGVudF9kZXZpY2UgLmRldmljZV9tb2JpbGUgLm1vYmlsZV9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyOCUgNiU7XG4gIHotaW5kZXg6IDE7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnQgLmNvbnRlbnRfZGV2aWNlIC5kZXZpY2VfbW9iaWxlIC5tb2JpbGVfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZVBhZ2VfY2FyZCAuY2FyZF9yZXN1bWUgLnJlc3VtZV9pbmZvIC5pbmZvX2NvbnRlbnQgLmNvbnRlbnRfZGV2aWNlIC5kZXZpY2VfbW9iaWxlIC5zbGlkZXItaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmhvbWVQYWdlX2NhcmQgLmNhcmRfcmVzdW1lIC5yZXN1bWVfaW5mbyAuaW5mb19jb250ZW50IC5jb250ZW50LWJvb2sge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5ob21lUGFnZV9jYXJkIC5yZXN1bWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmhvbWVQYWdlX2NhcmQgLnJlc3VtZSBoMiB7XG4gIGZvbnQ6IDNyZW0vMS4yIFwiR290dVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjgwcHgpIHtcbiAgLmhvbWVQYWdlX2NhcmQgLnJlc3VtZSBoMiB7XG4gICAgZm9udDogNXJlbS8xLjIgXCJHb3R1XCIsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4uaG9tZVBhZ2VfY2FyZCAucmVzdW1lIGgyIC5jaGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhvbWVQYWdlX2NhcmQgLnJlc3VtZV9fYmFja2dyb3VuZCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyJTtcbiAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgbGVmdDogLTEwJTtcbn1cbi5ob21lUGFnZV9jYXJkIC5zcGFnaGV0dGkgLnJlc3VtZV9fYmFja2dyb3VuZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbn0iLCJib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utbm9ybWFsO1xuICA7XG5cbn1cblxuLnF1cXUyMDIwLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiRsYXlvdXQtbGlzdC1sZWZ0OjIwcHg7XG5cbi8v5YWx55SobGF5b3V0IGxpc3QgdGV4dCBzdHlsZVxuW2NsYXNzXj1cImxheW91dC1saXN0LVwiXSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg4O1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiAkbGF5b3V0LWxpc3QtbGVmdDtcblxuICAgICYrW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIFtjbGFzc149XCJsYXlvdXQtbGlzdC1cIl0ge1xuICAgIFtjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICAubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICAgIHBhZGRpbmc6ICRsYXlvdXQtbGlzdC1sZWZ0ICRsYXlvdXQtbGlzdC1sZWZ0IC0gMTBweCAkbGF5b3V0LWxpc3QtbGVmdCAtIDEwcHg7XG4gIH1cbn1cblxuLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg3O1xuICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utc3ViO1xufVxuLmxheW91dC1saXN0LW5vdGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICBjb2xvcjogJGNvbG9yLWdyZXktMDFcbn1cblxuLmxheW91dC1saXN0LWNpcmNsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl06YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjVFNlwiO1xuICAgIC8vIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gICAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxufVxuXG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdOmJlZm9yZSB7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHN0eWxlMDAxLW51bWJlcjtcbiAgICBjb250ZW50OiBjb3VudGVyKHN0eWxlMDAxLW51bWJlcikgXCIuXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5cbi8v5YWx55SobGF5b3V0IGJsb2NrXG4ubGF5b3V0LWJsb2NrMDAxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxheW91dC1ibG9jazAwMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8vIGVuZCAtIOWFseeUqGxheW91dCBibG9ja1xuXG5cbi5sYXlvdXQtdGl0bGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDY7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1zdWI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbn1cbi5sYXlvdXQtcG9pbnQtc3R5bGUwMDF7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWg4O1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS0wMTtcbiAgICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utbm9ybWFsO1xuICAgICsubGF5b3V0LXBvaW50LXN0eWxlMDAxe1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4vLyBzdHlsZV9zY3JvbGxiYXJcbi5zdHlsZV9zY3JvbGxiYXJfMDAxIHtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbn1cblxuXG5ib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgQGV4dGVuZCAuc3R5bGVfc2Nyb2xsYmFyXzAwMSAhb3B0aW9uYWw7XG59XG5cbmJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBAZXh0ZW5kIC5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxICFvcHRpb25hbDtcbn1cblxuYm9keSB7XG4gIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1iYXNlLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG59IiwiJGNhcmQtcmFkaXVzOiAycmVtO1xuJGNhcmQtcmFkaXVzLTAyOiAxMDAlO1xuXG5cbi8vMDEtNy4gY29sb3IgY29tbW9uIHVzZVxuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLXdoaXRlLTAxOiNmZmZmZjM7XG5cbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay0wMTojMjEyMTIxO1xuJGNvbG9yLWJsYWNrLTAyOiMwNjE4MjY7XG5cbiRjb2xvci1yZWQtMDE6ICNmNGQ2Y2M7XG5cbiRjb2xvci1iZy1tZG86I2Y1ZjVmNTtcbiRjb2xvci1ncmVlbi0wMTojQUJEMENFO1xuJGNvbG9yLWdyZWVuLTAyOiM1OTZmNjI7XG4kY29sb3ItYnJvd24tMDE6IzdhNjU2MztcblxuJGNvbG9yLXRleHQ6ICRjb2xvci1ibGFjay0wMjtcbiRjb2xvci1tYWluOiAkY29sb3ItZ3JlZW4tMDE7XG4vLyAkY29sb3Itc3ViOiAkY29sb3ItcGluay0wMTtcbiRjb2xvci1ncmV5LTAxOiM1YTZhNzE7XG4kY29sb3ItZ3JleS0wMjojZDhkOGQ4O1xuJGNvbG9yLWdyZXktMDM6IzRhNGE0YTtcbiRjb2xvci1ncmV5LTA0OiM3NTc1NzU7XG5cblxuXG4kc2hhZG93LXN0eWxlMTowIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiRzaGFkb3ctc3R5bGUyOjAgMnB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuXG4vLyA9PT09PSAwMiBmb250IHNldHRpbmcgPT09PT09XG5cbi8vIDAyLTEgZm9udCBiYXNpYyBzZXR0aW5nXG4kZm9udC1mYW1pbHk6IFxuXCLmlofms4npqZvmraPpu5FcIixcblwiV2VuUXVhbllpIFplbiBIZWlcIixcblwi6JiL5pa5Lee5gVwiLFxuXCJQaW5nRmFuZyBUQ1wiLFxuXCLpu5Hpq5Qt57mBXCIsXG5cIkhlaXRpIFRDXCIsXG5cIuWEt+m7kSBQcm9cIixcblwiTGlIZWkgUHJvXCIsXG5cIuW+rui7n+ato+m7kemrlFwiLFxuXCJNaWNyb3NvZnQgSmhlbmdIZWlcIixcbnNhbnMtc2VyaWY7XG4kZm9udC1saW5lLWhlaWdodDogMjhweDtcbiRmb250LXNwYWNlLXN1YjozcHg7XG4kZm9udC1zcGFjZS1tYWluOjVweDtcbiRmb250LXNwYWNlLW5vcm1hbDowLjVweDtcblxuJGZvbnQtbGluZS1oZWlnaHQtbWQ6IDEuNTtcbiRmb250LWxpbmUtaGVpZ2h0LWxnOiAkZm9udC1saW5lLWhlaWdodC1tZCAqIDI7XG5cbi8vIDAyLTIgZm9udCBiYXNlICB3aGVuIHRleHQgc20gOiBiYXNlID0gMTYgOyB0ZXh0IG1kIDogYmFzZSA9IDE4OyB0ZXh0IGxnIDogYmFzZSA9IDIwXG4kZm9udC1iYXNlLW51bTogMTY7XG4kZm9udC1iYXNlLW51bS1tZDogMTg7XG4kZm9udC1iYXNlLW51bS1sZzogMjA7XG4kZm9udC1zaXplLW1kOiAxcmVtOyAvLzE2cHhcblxuLy8gMDItMy5hIHRpdGxlIGZvbnQgc2l6ZVxuJGZvbnQtc2l6ZS1sZzo0OHB4O1xuJGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooMzYvJGZvbnQtYmFzZS1udW0pOyAvLzM2cHhcbiRmb250LXNpemUtaDM6ICRmb250LXNpemUtbWQqKDI4LyRmb250LWJhc2UtbnVtKTsgLy8yOHB4O1xuJGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0pOyAvLzI2cHg7XG4kZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSk7IC8vMjRweDtcblxuLy8gMDItMy5iIHNldHRpbmcgZm9udCBzaXplICAoIGhhcyBpdCBvd24gcnVsZSBhYm91dCBzY2FsZSBmb24gc2l6ZSwgbm90IGZvbGxvdyB0aGUgcnVsZSBvZiBiYXNlIHJlbSlcbiRmb250LXNpemUtY29uZmlnOihmb250LXNpemVfbGcgOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtLWxnKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0tbGcpLCAvLzI2cHhcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtLWxnKSAvLzI0cHhcbiAgKSxcbiAgZm9udC1zaXplX21kIDooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bS1tZCksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtLW1kKSwgLy8gMjZweFxuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pIC8vIHVzZSBzbSByYXRpbyB0byB0aGUgYmFzZVxuICApLFxuICBmb250LXNpemVfc206KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0pLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bSksIC8vMjZweDtcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKSAvLzI0cHg7XG4gICkpO1xuXG5AZnVuY3Rpb24gZ2V0LWZvbnQtc2l6ZSgka2V5LCAkdHlwZTonZm9udC1zaXplX3NtJykge1xuXG4gIEBlYWNoICRmb250LW5hbWUsXG4gICRmb250LXNpemUgaW4gbWFwLWdldCgkZm9udC1zaXplLWNvbmZpZywgJHR5cGUpIHtcbiAgICBAaWYoJGtleT09JGZvbnQtbmFtZSkge1xuICAgICAgQHJldHVybiAkZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX3NtJyk7XG5cbiAgLmZvbnQtc2l6ZV9sZyAmIHtcbiAgICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9sZycpO1xuICB9XG5cbiAgLmZvbnQtc2l6ZV9tZCAmIHtcbiAgICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9tZCcpO1xuICB9XG59XG5cbi8vIDAyLTQgZm9udCBzaXplIG5vcm1hbFxuJGZvbnQtc2l6ZS1oNjogJGZvbnQtc2l6ZS1tZCooMjAvJGZvbnQtYmFzZS1udW0pOyAvLzIwcHhcbiRmb250LXNpemUtaDc6ICRmb250LXNpemUtbWQqKDE4LyRmb250LWJhc2UtbnVtKTsgLy8xOHB4XG4kZm9udC1zaXplLWg4OiAkZm9udC1zaXplLW1kOyAvLyAxNnB4XG4kZm9udC1zaXplLWg5OiAxcmVtICogKDE0LyRmb250LWJhc2UtbnVtKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1oMTA6ICRmb250LXNpemUtbWQgKigxMi8kZm9udC1iYXNlLW51bSk7IC8vMTJweFxuXG5cbi8vID09PT09PSAwMyBzY3JlZW4gd2lkdGggID09PT09PVxuJHNjcmVlbi1kZXNrdG9wOiAxMjAwcHg7XG4kc2NyZWVuLXNtLXRoYW4tZGVza3RvcDogMTE5OXB4O1xuJHNjcmVlbi1wYWQtcHJvOiAxMzY2cHg7XG4kc2NyZWVuLWxnLXRoYW4tbmI6IDEwMjVweDtcbiRzY3JlZW4tbmI6IDEwMjRweDtcbiRzY3JlZW4tc20tdGhhbi1uYjogMTAyM3B4O1xuJHNjcmVlbi1sZy1wYWQ6IDk5MnB4O1xuJHNjcmVlbi1sZy10aGFuLXBhZDogNzY5cHg7XG4kc2NyZWVuLXBhZDogNzY4cHg7XG4kc2NyZWVuLXNtLXRoYW4tcGFkOiA3NjdweDtcbiRzY3JlZW4tbGctbW9iaWxlOiA1MDBweDtcbiRzY3JlZW4tbW9iaWxlOiAzNzVweDtcbiRzY3JlZW4tc20tdGhhbi1tb2JpbGU6IDM3NHB4O1xuJHNjcmVlbi1zbTogMzIwcHg7XG5cblxuLy8gbGF5b3V0IHNpemVcblxuJHdkLWxvZ28tbW9iaWxlOiAyMDRweDtcbiRib2FyZC10aW1lLWNhcmQtaGVpZ2h0OiAyMjBweDtcbiRib2FyZC10aW1lLWNhcmQtd2lkdGg6IDEzNXB4O1xuXG5cbi8vIGZvcm0gc2V0dGluZyBmcm9tIEBuZXV4L3VpXG4vLyDooajllq7ln7rmnKzorormlbhcbiRmb3JtLWhlaWdodC10ZXh0YXJlYTogNzVweDtcblxuLy8gZm9ybSBjb2xvclxuJGNvbG9yLWZvcm0tZXJyb3I6ICNlNDYwMDkgIWRlZmF1bHQ7XG4vLyRjb2xvci1mb3JtLWRpc2FibGU6ICRjb2xvci1ncmV5LWRhcmsgIWRlZmF1bHQ7XG4kY29sb3ItZm9ybS1ub3JtYWw6ICRjb2xvci10ZXh0ICFkZWZhdWx0O1xuJGNvbG9yLWNoZWNrYm94LWljb246ICRjb2xvci13aGl0ZSAhZGVmYXVsdDsgLy8gY2hlY2tib3ggY29sb3JcbiRjb2xvci1mb3JtLWNoZWNrLWJvcmRlcjogI2UwZTBlMCAhZGVmYXVsdDsgLy8gY2hlY2tib3ggYW5kIHJhZGlvIGJvcmRlclxuJGNvbG9yLWZvcm0tYWN0aXZlOiAkY29sb3ItbWFpbiAhZGVmYXVsdDtcbiRjb2xvci1mb3JtLWRhcms6ICNlMGUwZTA7IC8vIHVzZSBpbiBzZWFyY2ggYm94IG9uIGhlYWRlclxuJGNvbG9yLWJnLWZvcm06ICRjb2xvci13aGl0ZTtcbiRjb2xvci1iZy1mb3JtLWRhcms6ICNlMGUwZTA7XG5cblxuLy8gYnRuOlxuJG5ldXgtdWktYnRuLS1zbTozMHB4O1xuXG4vL1xuJHNwYWNlLW5iOiAzMHB4O1xuJHNwYWNlLXBhZDogMzBweDtcbiRzcGFjZS1tb2JpbGU6IDIwcHg7XG5cbi8vIGxheW91dDog5YWn6aCBdGl0bGUg5bem6ZaT6LedXG4kc3BhY2UtaW5wYWdlLXRpdGxlLWxlZnQ6IDEwcHg7XG4kYnJlYWRjcnVtYi1hcnJvdy1jb2xvcjogI2JiYjsgLy8g6bq15YyF5bGR566t6aCt6aGP6Imy5ZCM54++6KGM5a6Y57ayXG5cbiRiYW5uZXItc2xpZGVyLWhlaWdodDo1NTBweDtcbiRiYW5uZXItc2xpZGVyLWhlaWdodC1tYjozMTBweDsiLCIuZmxleC1jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZC1saW1pdC1saW5lVHlwZXtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgXCJzdHlsZS1pbXBvcnRcIjtcbiRuYXYtd2lkdGg6MTAlO1xuJG1lbnUtbGluay13aWR0aDo0MHB4O1xuJG1lbnUtbGluay1wYWRkaW5nOjEwcHg7XG4vLyAqIHtcbi8vIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbi8vIH1cblxuYm9keSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRiYWNrZ3JvdW5kOiAkY29sb3ItbWFpbjtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWVQYWdlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0Jl9jYXJkIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGJhY2tncm91bmQ6ICRjb2xvci1tYWluO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEzcmVtO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9kZW1vLnN2Z1wiKTtcblxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXBhZCkge1xuXHRcdFx0aGVpZ2h0OiA5MHZoO1xuXHRcdFx0d2lkdGg6IDk1JTtcblx0XHRcdGJveC1zaGFkb3c6IDAgMTBweCA1NXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAkY2FyZC1yYWRpdXM7XG5cdFx0XHRAaW5jbHVkZSB0cmFuc2l0aW9uZml4KCk7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHJlbTtcblx0XHR9XG5cblx0XHQmW2RhdGEtcmVzdW1lPVwicmF2aW9saVwiXSB7XG5cdFx0XHQubWVudS5hY3RpdmUgc3ZnLm1lbnVfX2xpbmtfX3NoYXBlIHtcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jYXJkX21lbnUge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cblx0XHRcdC5tZW51X3VpLW5hdjAwMSB7XG5cdFx0XHRcdHdpZHRoOiAkbmF2LXdpZHRoO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdC8vIHotaW5kZXg6IDk4O1xuXHRcdFx0fVxuXG5cdFx0XHQubWVudV91aS1uYXYtbGlzdDAwMSB7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtICN7JG5hdi13aWR0aH0pO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdC8vIEBpbmNsdWRlIHRyYW5zaXRpb25maXgoKTtcblx0XHRcdFx0bGVmdDogJG5hdi13aWR0aDtcblx0XHRcdFx0dHJhbnNpdGlvbjogei1pbmRleCAxLjVzIGVhc2UtaW47IC8v6IulbmF2LWxpc3TlpKrlpJrlj6/og73mnIPpnIDopoHoqr/mlbTnp5Lmlbhcblx0XHRcdFx0ei1pbmRleDogOTc7XG5cblx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuXHRcdFx0XHQmLS1ub25lIHtcblx0XHRcdFx0XHR6LWluZGV4OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHQuY2FyZF9yZXN1bWUge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtICN7JG5hdi13aWR0aH0pO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdG1hcmdpbi1sZWZ0OiN7JG5hdi13aWR0aH07XG5cblx0XHRcdC5yZXN1bWVfaW5mbyB7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuXHRcdFx0XHQuaW5mb190aXRsZSB7XG5cdFx0XHRcdFx0cGFkZGluZzogMzBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbmZvX2NvbnRlbnQge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgNDBweCAzMHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRjb2xvcjogJGNvbG9yLXRleHQ7XG5cblx0XHRcdFx0XHQmX2ludHJvZHVjZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cblx0XHRcdFx0XHRcdC5pbnRyb2R1Y2VfcGljIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAzMCU7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiRzY3JlZW4tc20tdGhhbi1wYWQpIHtcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucGljX3RleHQtdG9wIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogLTEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvci1ncmVlbi0wMTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiSGVsbG8sXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAtM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAtM3B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucGljX3RleHQtYm90dG9tIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICRmb250LXNpemUtaDg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46MTBweCAwIDIwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucGljX2ltYWdlLXNpemUge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAkY2FyZC1yYWRpdXM7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHRcdFx0XHRcdC5pbWFnZS1zaXplX2ltZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucGljX2xpbmsge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdFx0XHRcdFx0LmxpbmtfYmxvY2sge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQmX2ltZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaW50cm9kdWNlX2NvbnRlbnQge1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMwJSAtIDQwcHgpO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDokc2NyZWVuLXNtLXRoYW4tcGFkKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdCZfd2ViLWluZm8ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cblx0XHRcdFx0XHRcdC53ZWItaW5mb19jb21wb25lbnQge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiRzY3JlZW4tc20tdGhhbi1wYWQpIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250ZW50X2RldmljZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRmbGV4LWZsb3c6IHdyYXA7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cdFx0XHRcdFx0XHQuZGV2aWNlX3RhYmxlIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogODBweDtcblxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDokc2NyZWVuLXBhZCkge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMHB4IDBweCA1MHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnRhYmxlX2RldmljZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDE1dnc7XG5cblx0XHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDokc2NyZWVuLWxnLXBhZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogMzB2dztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQudGFibGVfaW1nIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNCUgOSUgMyU7XG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblxuXHRcdFx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZGV2aWNlX21vYmlsZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDI3JSAtIDgwcHgpO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDokc2NyZWVuLXBhZCkge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA3MCU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQubW9iaWxlX2RldmljZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Lm1vYmlsZV9pbWcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyOCUgNiU7XG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblxuXHRcdFx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuc2xpZGVyLWlubmVyIHtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLW1kbztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jb250ZW50LWJvb2sge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXG5cblxuXHRcdC5yZXN1bWUge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQ6IDNyZW0gLyAxLjIgXCJHb3R1XCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC4xcmVtO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzcmVtO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMXJlbTtcblxuXHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjgwcHgpIHtcblx0XHRcdFx0XHRmb250OiA1cmVtIC8gMS4yIFwiR290dVwiLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzcmVtO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jaGFyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Jl9fYmFja2dyb3VuZCB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuMzU7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAyJTtcblx0XHRcdFx0bWF4LXdpZHRoOiAzNHJlbTtcblx0XHRcdFx0bGVmdDogLTEwJTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC5zcGFnaGV0dGkge1xuXHRcdFx0LnJlc3VtZV9fYmFja2dyb3VuZCB7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG4vLyBoMiB7XG4vLyBcdGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbi8vIH0iLCIvL+W8leWFpeWPg+aVuOiIieS+i+iqquaYjlxuLy/otoXpgY7lm5vlrZfvvIzlvp7nrKzlm5vlrZfplovlp4suLi4g77ya5Y6f5a2X5aSn5bCP44CBNeWtl+eahOWvrOW6plxuLy/otoXpgY7lm5vlgIvlrZfvvIzlvp7nrKzkuInlrZfplovlp4suLi7vvJrjgIzljp/lrZflpKflsI/jgI3lsI/kuIDomZ/jgIE15a2X55qE5a+s5bqmXG5AbWl4aW4gd29yZC1saW1pdC13aWR0aCgkZm9udC1zaXplLCAkd29yZC1udW0pIHtcbiAgICB3aWR0aDpjYWxjKCN7JGZvbnQtc2l6ZX0gKiAjeyR3b3JkLW51bX0pO1xuICB9XG4gIFxuICBAbWl4aW4gd29yZC1saW1pdC1tYXgtd2lkdGgoJGZvbnQtc2l6ZSwgJHdvcmQtbnVtKSB7XG4gICAgbWF4LXdpZHRoOmNhbGMoI3skZm9udC1zaXplfSAqICN7JHdvcmQtbnVtfSk7XG4gIH1cblxuICBAbWl4aW4gdHJhbnNpdGlvbmZpeCgpIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApXG59XG4gIFxuICBcbi8vICAgQG1peGluIHdvcmQtbGltaXQtbGluZSgkbGluZS1udW0pIHtcbi8vICAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lLW51bTtcbi8vICAgfVxuICBcbiAgXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/component/home/home.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/component/home/home.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    let HomeComponent = class HomeComponent {
      constructor(db) {
        this.isClickMenu = false;
        this.menuChars = ['M', 'e', 'n', 'u'];
        this.menuList = ['簡歷', '保險專員系統', '醫院掛號系統', '銀行業官網維護', '大學線上作品集'];
        this.infoList = [{
          'imgSrc': 'assets/img/fixweb001.png',
          'webSrc': 'https://garden.decoder.com.tw/portal/demo/QuQu/megabank_event_2019/',
          'textTitle': '理財e把兆 - 豐享退活動',
          'textInfo': ' GA埋code、更改活動內容'
        }, {
          'imgSrc': 'assets/img/fixweb002.png',
          'webSrc': 'https://www.bankchb.com/frontend/taiwanpay/chbtp-1-1-1-1.html',
          'textTitle': '彰化銀行-台灣pay',
          'textInfo': '解決includehtml切換頁面時，Dom長出造成的抖動問題'
        }, {
          'imgSrc': 'assets/img/fixweb003.png',
          'webSrc': 'https://www.skbank.com.tw/index.html#!Loan',
          'textTitle': '新光銀行個金首頁',
          'textInfo': ' 修改＆新增功能'
        }];
        this.currentPage = 0;
        this.tableImg = db.collection('tableImg').valueChanges();
        this.mobileImg = db.collection('mobileImg').valueChanges();
        this.skhTableImg = db.collection('skhTable').valueChanges();
        this.skhMobileImg = db.collection('skhMobile').valueChanges();
      }

      ngOnInit() {}

      handleMenu() {
        this.isClickMenu = !this.isClickMenu;
      }

      clickMenuCard(index) {
        this.currentPage = index;
        this.isClickMenu = false;
        this.cardScroll.nativeElement.scrollTo(0, 0);
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardScroll', {
      static: false
    })], HomeComponent.prototype, "cardScroll", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/component/home/home.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/component/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/home/component/home/home.component.ts");

    const routes = [{
      path: '',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
    let HomeRoutingModule = class HomeRoutingModule {};
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home/home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/home/component/home/home.component.ts");
    /* harmony import */


    var _ui_customize_ui_customize_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ui-customize/ui-customize.module */
    "./src/app/ui-customize/ui-customize.module.ts");

    let HomeModule = class HomeModule {};
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ui_customize_ui_customize_module__WEBPACK_IMPORTED_MODULE_5__["UiCustomizeModule"], _home_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiContentInfo001UiContentInfo001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\n.ui-content-info001 {\n  width: 100%;\n  height: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #ffffff88;\n  border-radius: 2rem;\n  padding: 20px 0;\n}\n.ui-content-info001_img-size {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n}\n.ui-content-info001_img-size .img-size_img {\n  width: 100%;\n  height: 100%;\n  padding-top: 10px;\n}\n.ui-content-info001_img-size .img-size_img:hover {\n  opacity: 0.6;\n}\n.ui-content-info001_word-size {\n  height: 100%;\n  display: inline-block;\n  margin: 0 20px;\n}\n.ui-content-info001_word-size .text_link {\n  font-size: 1.5rem;\n  color: #212121;\n  text-decoration: none;\n  font-weight: bold;\n}\n.ui-content-info001_word-size .word-size_text {\n  padding-top: 10px;\n  font-size: 1rem;\n  color: #4a4a4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1jb250ZW50LWluZm8wMDEvdWktY29udGVudC1pbmZvMDAxLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2xheW91dC9fbGF5b3V0LnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9oZWxwZXIvX2V4dGVuZC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktY29udGVudC1pbmZvMDAxL3VpLWNvbnRlbnQtaW5mbzAwMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxZQUFBO0VBQ0EscUJDZ0RpQjtBRjlDbkI7QUNHQTtFQUNFLHdCQUFBO0FEQUY7QUNNQTtFQUNFLHFCQUFBO0VBQ0EsZUMyQ2E7QUY5Q2Y7QUNLRTtFQUNFLGtCQVJjO0FES2xCO0FDS0k7RUFDRSxpQkFBQTtBREhOO0FDUUk7RUFDRSxpQkFBQTtBRE5OO0FDVUU7RUFDRSx1QkFBQTtBRFJKO0FDWUE7RUFDRSxtQkNvRWE7RURuRWIsY0N2QmM7RUR3QmQsbUJDUWM7QUZqQmhCO0FDV0E7RUFDRSxrQkNrRWM7RURqRWQsY0N0QmE7QUZjZjtBQ1dBO0VBQ0UsOEJBQUE7QURSRjtBQ1VFO0VBQ0UsWUFBQTtFQUVBLGNDckNZO0VEc0NaLG9CQUFBO0FEVEo7QUNhQTtFQUNFLDhCQUFBO0FEVkY7QUNZRTtFQUNFLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNDakRZO0VEa0RaLGtCQzJDWTtFRDFDWixvQkFBQTtFQUNBLGNBQUE7QURWSjtBQ2VBO0VBQ0UsZ0JBQUE7QURaRjtBQ2VBO0VBQ0UsZ0JBQUE7QURaRjtBQ2tCQTtFQUNFLGtCQ29CYTtFRG5CYixjQ2hGYztFRGlGZCxtQkN2Q2M7RUR3Q2Qsd0JBQUE7QURmRjtBQ2lCQTtFQUNJLGVDaENXO0VEaUNYLGNDdEVXO0VEdUVYLHFCQzNDZTtBRjZCbkI7QUNlSTtFQUNFLGlCQUFBO0FEYk47QUNrQkE7RUFDRSxVQUFBO0VBQ0EseUJDaEdjO0FGaUZoQjtBQ2tCQTtFQUNFLHlCQ3pGYztBRjBFaEI7QUMyQkE7RUFDRSw4QkNqSGM7RURrSGQsNkJDdkdjO0VEd0dkLG9DQUFBO0VBQ0Esa0NDcEhjO0VEcUhkLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkN2SGM7RUR3SGQsNkJDN0djO0FGcUZoQjtBR3RHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FIeUdGO0FHdEdBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7QUh5R0Y7QUlqSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJGVlU7RUVXVixlQUFBO0FKb0hKO0FJbEhJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBSm9IUjtBSWpIUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBckJHO0FKd0lmO0FJbEhXO0VBQ0ssWUFBQTtBSm9IaEI7QUkvR0k7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FKZ0hSO0FJOUdRO0VBQ0ksaUJGOEJHO0VFN0JILGNGNUJJO0VFNkJKLHFCQUFBO0VBQ0EsaUJBQUE7QUpnSFo7QUk3R1E7RUFDSSxpQkExQ0c7RUEyQ0gsZUZlRztFRWRILGNGckJHO0FGb0lmIiwiZmlsZSI6InNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1jb250ZW50LWluZm8wMDEvdWktY29udGVudC1pbmZvMDAxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ucXVxdTIwMjAtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzKj1jaGlsZF0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzKj1jaGlsZF0gKyBbY2xhc3MqPWNoaWxkXSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIC5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4O1xufVxuXG4ubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogIzU5NmY2MjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLmxheW91dC1saXN0LW5vdGUwMDEge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNWE2YTcxO1xufVxuXG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xufVxuLmxheW91dC1saXN0LWNpcmNsZTAwMSBbY2xhc3MqPWNoaWxkXTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKXplwiO1xuICBjb2xvcjogIzU5NmY2MjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5sYXlvdXQtbGlzdC1zdHlsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcbn1cbi5sYXlvdXQtbGlzdC1zdHlsZTAwMSBbY2xhc3MqPWNoaWxkXTpiZWZvcmUge1xuICBjb3VudGVyLWluY3JlbWVudDogc3R5bGUwMDEtbnVtYmVyO1xuICBjb250ZW50OiBjb3VudGVyKHN0eWxlMDAxLW51bWJlcikgXCIuXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzU5NmY2MjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5sYXlvdXQtYmxvY2swMDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGF5b3V0LWJsb2NrMDAyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmxheW91dC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICNmZmZmZjM7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbn1cblxuLmxheW91dC1wb2ludC1zdHlsZTAwMSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM1YTZhNzE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5sYXlvdXQtcG9pbnQtc3R5bGUwMDEgKyAubGF5b3V0LXBvaW50LXN0eWxlMDAxIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zdHlsZV9zY3JvbGxiYXJfMDAxLCBib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMztcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl90aHVtYl8wMDEsIGJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E2NTYzO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAjZmZmZmYzO1xuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogIzdhNjU2MztcbiAgc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAjZmZmZmYzO1xuICBzY3JvbGxiYXItc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1iYXNlLWNvbG9yOiAjN2E2NTYzO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmQtbGltaXQtbGluZVR5cGUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG59XG5cbi51aS1jb250ZW50LWluZm8wMDEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4ODtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnVpLWNvbnRlbnQtaW5mbzAwMV9pbWctc2l6ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51aS1jb250ZW50LWluZm8wMDFfaW1nLXNpemUgLmltZy1zaXplX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnVpLWNvbnRlbnQtaW5mbzAwMV9pbWctc2l6ZSAuaW1nLXNpemVfaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuLnVpLWNvbnRlbnQtaW5mbzAwMV93b3JkLXNpemUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4udWktY29udGVudC1pbmZvMDAxX3dvcmQtc2l6ZSAudGV4dF9saW5rIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMjEyMTIxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVpLWNvbnRlbnQtaW5mbzAwMV93b3JkLXNpemUgLndvcmQtc2l6ZV90ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM0YTRhNGE7XG59IiwiYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLW5vcm1hbDtcbiAgO1xuXG59XG5cbi5xdXF1MjAyMC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4kbGF5b3V0LWxpc3QtbGVmdDoyMHB4O1xuXG4vL+WFseeUqGxheW91dCBsaXN0IHRleHQgc3R5bGVcbltjbGFzc149XCJsYXlvdXQtbGlzdC1cIl0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oODtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgIHBhZGRpbmctbGVmdDogJGxheW91dC1saXN0LWxlZnQ7XG5cbiAgICAmK1tjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICBbY2xhc3NePVwibGF5b3V0LWxpc3QtXCJdIHtcbiAgICBbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgICBwYWRkaW5nOiAkbGF5b3V0LWxpc3QtbGVmdCAkbGF5b3V0LWxpc3QtbGVmdCAtIDEwcHggJGxheW91dC1saXN0LWxlZnQgLSAxMHB4O1xuICB9XG59XG5cbi5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNztcbiAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLXN1Yjtcbn1cbi5sYXlvdXQtbGlzdC1ub3RlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgY29sb3I6ICRjb2xvci1ncmV5LTAxXG59XG5cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDI1RTZcIjtcbiAgICAvLyBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cblxuLmxheW91dC1saXN0LXN0eWxlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXTpiZWZvcmUge1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdHlsZTAwMS1udW1iZXI7XG4gICAgY29udGVudDogY291bnRlcihzdHlsZTAwMS1udW1iZXIpIFwiLlwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuXG4vL+WFseeUqGxheW91dCBibG9ja1xuLmxheW91dC1ibG9jazAwMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sYXlvdXQtYmxvY2swMDIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vLyBlbmQgLSDlhbHnlKhsYXlvdXQgYmxvY2tcblxuXG4ubGF5b3V0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg2O1xuICBjb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utc3ViO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG59XG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxe1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oODtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktMDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLW5vcm1hbDtcbiAgICArLmxheW91dC1wb2ludC1zdHlsZTAwMXtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLy8gc3R5bGVfc2Nyb2xsYmFyXG4uc3R5bGVfc2Nyb2xsYmFyXzAwMSB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl90aHVtYl8wMDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG59XG5cblxuYm9keSAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIEBleHRlbmQgLnN0eWxlX3Njcm9sbGJhcl8wMDEgIW9wdGlvbmFsO1xufVxuXG5ib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgQGV4dGVuZCAuc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSAhb3B0aW9uYWw7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbiAgc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xufSIsIiRjYXJkLXJhZGl1czogMnJlbTtcbiRjYXJkLXJhZGl1cy0wMjogMTAwJTtcblxuXG4vLzAxLTcuIGNvbG9yIGNvbW1vbiB1c2VcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci13aGl0ZS0wMTojZmZmZmYzO1xuXG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmxhY2stMDE6IzIxMjEyMTtcbiRjb2xvci1ibGFjay0wMjojMDYxODI2O1xuXG4kY29sb3ItcmVkLTAxOiAjZjRkNmNjO1xuXG4kY29sb3ItYmctbWRvOiNmNWY1ZjU7XG4kY29sb3ItZ3JlZW4tMDE6I0FCRDBDRTtcbiRjb2xvci1ncmVlbi0wMjojNTk2ZjYyO1xuJGNvbG9yLWJyb3duLTAxOiM3YTY1NjM7XG5cbiRjb2xvci10ZXh0OiAkY29sb3ItYmxhY2stMDI7XG4kY29sb3ItbWFpbjogJGNvbG9yLWdyZWVuLTAxO1xuLy8gJGNvbG9yLXN1YjogJGNvbG9yLXBpbmstMDE7XG4kY29sb3ItZ3JleS0wMTojNWE2YTcxO1xuJGNvbG9yLWdyZXktMDI6I2Q4ZDhkODtcbiRjb2xvci1ncmV5LTAzOiM0YTRhNGE7XG4kY29sb3ItZ3JleS0wNDojNzU3NTc1O1xuXG5cblxuJHNoYWRvdy1zdHlsZTE6MCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4kc2hhZG93LXN0eWxlMjowIDJweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcblxuLy8gPT09PT0gMDIgZm9udCBzZXR0aW5nID09PT09PVxuXG4vLyAwMi0xIGZvbnQgYmFzaWMgc2V0dGluZ1xuJGZvbnQtZmFtaWx5OiBcblwi5paH5rOJ6amb5q2j6buRXCIsXG5cIldlblF1YW5ZaSBaZW4gSGVpXCIsXG5cIuiYi+aWuS3nuYFcIixcblwiUGluZ0ZhbmcgVENcIixcblwi6buR6auULee5gVwiLFxuXCJIZWl0aSBUQ1wiLFxuXCLlhLfpu5EgUHJvXCIsXG5cIkxpSGVpIFByb1wiLFxuXCLlvq7ou5/mraPpu5Hpq5RcIixcblwiTWljcm9zb2Z0IEpoZW5nSGVpXCIsXG5zYW5zLXNlcmlmO1xuJGZvbnQtbGluZS1oZWlnaHQ6IDI4cHg7XG4kZm9udC1zcGFjZS1zdWI6M3B4O1xuJGZvbnQtc3BhY2UtbWFpbjo1cHg7XG4kZm9udC1zcGFjZS1ub3JtYWw6MC41cHg7XG5cbiRmb250LWxpbmUtaGVpZ2h0LW1kOiAxLjU7XG4kZm9udC1saW5lLWhlaWdodC1sZzogJGZvbnQtbGluZS1oZWlnaHQtbWQgKiAyO1xuXG4vLyAwMi0yIGZvbnQgYmFzZSAgd2hlbiB0ZXh0IHNtIDogYmFzZSA9IDE2IDsgdGV4dCBtZCA6IGJhc2UgPSAxODsgdGV4dCBsZyA6IGJhc2UgPSAyMFxuJGZvbnQtYmFzZS1udW06IDE2O1xuJGZvbnQtYmFzZS1udW0tbWQ6IDE4O1xuJGZvbnQtYmFzZS1udW0tbGc6IDIwO1xuJGZvbnQtc2l6ZS1tZDogMXJlbTsgLy8xNnB4XG5cbi8vIDAyLTMuYSB0aXRsZSBmb250IHNpemVcbiRmb250LXNpemUtbGc6NDhweDtcbiRmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDM2LyRmb250LWJhc2UtbnVtKTsgLy8zNnB4XG4kZm9udC1zaXplLWgzOiAkZm9udC1zaXplLW1kKigyOC8kZm9udC1iYXNlLW51bSk7IC8vMjhweDtcbiRmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtKTsgLy8yNnB4O1xuJGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pOyAvLzI0cHg7XG5cbi8vIDAyLTMuYiBzZXR0aW5nIGZvbnQgc2l6ZSAgKCBoYXMgaXQgb3duIHJ1bGUgYWJvdXQgc2NhbGUgZm9uIHNpemUsIG5vdCBmb2xsb3cgdGhlIHJ1bGUgb2YgYmFzZSByZW0pXG4kZm9udC1zaXplLWNvbmZpZzooZm9udC1zaXplX2xnIDooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bS1sZyksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtLWxnKSwgLy8yNnB4XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bS1sZykgLy8yNHB4XG4gICksXG4gIGZvbnQtc2l6ZV9tZCA6KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0tbWQpLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bS1tZCksIC8vIDI2cHhcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKSAvLyB1c2Ugc20gcmF0aW8gdG8gdGhlIGJhc2VcbiAgKSxcbiAgZm9udC1zaXplX3NtOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0pLCAvLzI2cHg7XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSkgLy8yNHB4O1xuICApKTtcblxuQGZ1bmN0aW9uIGdldC1mb250LXNpemUoJGtleSwgJHR5cGU6J2ZvbnQtc2l6ZV9zbScpIHtcblxuICBAZWFjaCAkZm9udC1uYW1lLFxuICAkZm9udC1zaXplIGluIG1hcC1nZXQoJGZvbnQtc2l6ZS1jb25maWcsICR0eXBlKSB7XG4gICAgQGlmKCRrZXk9PSRmb250LW5hbWUpIHtcbiAgICAgIEByZXR1cm4gJGZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSkge1xuICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9zbScpO1xuXG4gIC5mb250LXNpemVfbGcgJiB7XG4gICAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfbGcnKTtcbiAgfVxuXG4gIC5mb250LXNpemVfbWQgJiB7XG4gICAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfbWQnKTtcbiAgfVxufVxuXG4vLyAwMi00IGZvbnQgc2l6ZSBub3JtYWxcbiRmb250LXNpemUtaDY6ICRmb250LXNpemUtbWQqKDIwLyRmb250LWJhc2UtbnVtKTsgLy8yMHB4XG4kZm9udC1zaXplLWg3OiAkZm9udC1zaXplLW1kKigxOC8kZm9udC1iYXNlLW51bSk7IC8vMThweFxuJGZvbnQtc2l6ZS1oODogJGZvbnQtc2l6ZS1tZDsgLy8gMTZweFxuJGZvbnQtc2l6ZS1oOTogMXJlbSAqICgxNC8kZm9udC1iYXNlLW51bSk7IC8vIDE0cHhcbiRmb250LXNpemUtaDEwOiAkZm9udC1zaXplLW1kICooMTIvJGZvbnQtYmFzZS1udW0pOyAvLzEycHhcblxuXG4vLyA9PT09PT0gMDMgc2NyZWVuIHdpZHRoICA9PT09PT1cbiRzY3JlZW4tZGVza3RvcDogMTIwMHB4O1xuJHNjcmVlbi1zbS10aGFuLWRlc2t0b3A6IDExOTlweDtcbiRzY3JlZW4tcGFkLXBybzogMTM2NnB4O1xuJHNjcmVlbi1sZy10aGFuLW5iOiAxMDI1cHg7XG4kc2NyZWVuLW5iOiAxMDI0cHg7XG4kc2NyZWVuLXNtLXRoYW4tbmI6IDEwMjNweDtcbiRzY3JlZW4tbGctcGFkOiA5OTJweDtcbiRzY3JlZW4tbGctdGhhbi1wYWQ6IDc2OXB4O1xuJHNjcmVlbi1wYWQ6IDc2OHB4O1xuJHNjcmVlbi1zbS10aGFuLXBhZDogNzY3cHg7XG4kc2NyZWVuLWxnLW1vYmlsZTogNTAwcHg7XG4kc2NyZWVuLW1vYmlsZTogMzc1cHg7XG4kc2NyZWVuLXNtLXRoYW4tbW9iaWxlOiAzNzRweDtcbiRzY3JlZW4tc206IDMyMHB4O1xuXG5cbi8vIGxheW91dCBzaXplXG5cbiR3ZC1sb2dvLW1vYmlsZTogMjA0cHg7XG4kYm9hcmQtdGltZS1jYXJkLWhlaWdodDogMjIwcHg7XG4kYm9hcmQtdGltZS1jYXJkLXdpZHRoOiAxMzVweDtcblxuXG4vLyBmb3JtIHNldHRpbmcgZnJvbSBAbmV1eC91aVxuLy8g6KGo5Zau5Z+65pys6K6K5pW4XG4kZm9ybS1oZWlnaHQtdGV4dGFyZWE6IDc1cHg7XG5cbi8vIGZvcm0gY29sb3JcbiRjb2xvci1mb3JtLWVycm9yOiAjZTQ2MDA5ICFkZWZhdWx0O1xuLy8kY29sb3ItZm9ybS1kaXNhYmxlOiAkY29sb3ItZ3JleS1kYXJrICFkZWZhdWx0O1xuJGNvbG9yLWZvcm0tbm9ybWFsOiAkY29sb3ItdGV4dCAhZGVmYXVsdDtcbiRjb2xvci1jaGVja2JveC1pY29uOiAkY29sb3Itd2hpdGUgIWRlZmF1bHQ7IC8vIGNoZWNrYm94IGNvbG9yXG4kY29sb3ItZm9ybS1jaGVjay1ib3JkZXI6ICNlMGUwZTAgIWRlZmF1bHQ7IC8vIGNoZWNrYm94IGFuZCByYWRpbyBib3JkZXJcbiRjb2xvci1mb3JtLWFjdGl2ZTogJGNvbG9yLW1haW4gIWRlZmF1bHQ7XG4kY29sb3ItZm9ybS1kYXJrOiAjZTBlMGUwOyAvLyB1c2UgaW4gc2VhcmNoIGJveCBvbiBoZWFkZXJcbiRjb2xvci1iZy1mb3JtOiAkY29sb3Itd2hpdGU7XG4kY29sb3ItYmctZm9ybS1kYXJrOiAjZTBlMGUwO1xuXG5cbi8vIGJ0bjpcbiRuZXV4LXVpLWJ0bi0tc206MzBweDtcblxuLy9cbiRzcGFjZS1uYjogMzBweDtcbiRzcGFjZS1wYWQ6IDMwcHg7XG4kc3BhY2UtbW9iaWxlOiAyMHB4O1xuXG4vLyBsYXlvdXQ6IOWFp+mggXRpdGxlIOW3pumWk+i3nVxuJHNwYWNlLWlucGFnZS10aXRsZS1sZWZ0OiAxMHB4O1xuJGJyZWFkY3J1bWItYXJyb3ctY29sb3I6ICNiYmI7IC8vIOm6teWMheWxkeeuremgremhj+iJsuWQjOePvuihjOWumOe2slxuXG4kYmFubmVyLXNsaWRlci1oZWlnaHQ6NTUwcHg7XG4kYmFubmVyLXNsaWRlci1oZWlnaHQtbWI6MzEwcHg7IiwiLmZsZXgtY2VudGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmQtbGltaXQtbGluZVR5cGV7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwic3R5bGUtaW1wb3J0XCI7XG4kcGFkZGluZy1zdHlsZToxMHB4O1xuLnVpLWNvbnRlbnQtaW5mbzAwMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODg7XG4gICAgYm9yZGVyLXJhZGl1czogJGNhcmQtcmFkaXVzO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICZfaW1nLXNpemUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cblxuICAgICAgICAuaW1nLXNpemVfaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRwYWRkaW5nLXN0eWxlO1xuICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC42O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl93b3JkLXNpemUge1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xuXG4gICAgICAgIC50ZXh0X2xpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWg1O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ibGFjay0wMTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLndvcmQtc2l6ZV90ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkcGFkZGluZy1zdHlsZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oODtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS0wMztcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: UiContentInfo001Component */

  /***/
  function srcAppUiCustomizeComponentUiContentInfo001UiContentInfo001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiContentInfo001Component", function () {
      return UiContentInfo001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiContentInfo001Component = class UiContentInfo001Component {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiContentInfo001Component.prototype, "imgSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiContentInfo001Component.prototype, "webSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiContentInfo001Component.prototype, "textTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiContentInfo001Component.prototype, "textInfo", void 0);
    UiContentInfo001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-content-info001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-content-info001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-content-info001.component.scss */
      "./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.scss")).default]
    })], UiContentInfo001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiContentProject001UiContentProject001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui-content-project001 {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.ui-content-project001_point-block {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 50px;\n}\n.ui-content-project001_text-block {\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLWNvbnRlbnQtcHJvamVjdDAwMS91aS1jb250ZW50LXByb2plY3QwMDEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktY29udGVudC1wcm9qZWN0MDAxL3VpLWNvbnRlbnQtcHJvamVjdDAwMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNDUjtBREVJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLWNvbnRlbnQtcHJvamVjdDAwMS91aS1jb250ZW50LXByb2plY3QwMDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktY29udGVudC1wcm9qZWN0MDAxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJl9wb2ludC1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgICZfdGV4dC1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIi51aS1jb250ZW50LXByb2plY3QwMDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udWktY29udGVudC1wcm9qZWN0MDAxX3BvaW50LWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4udWktY29udGVudC1wcm9qZWN0MDAxX3RleHQtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: UiContentProject001Component */

  /***/
  function srcAppUiCustomizeComponentUiContentProject001UiContentProject001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiContentProject001Component", function () {
      return UiContentProject001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiContentProject001Component = class UiContentProject001Component {
      constructor() {}

      ngOnInit() {}

    };
    UiContentProject001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-content-project001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-content-project001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-content-project001.component.scss */
      "./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.scss")).default]
    })], UiContentProject001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-footer001/ui-footer001.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-footer001/ui-footer001.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiFooter001UiFooter001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktZm9vdGVyMDAxL3VpLWZvb3RlcjAwMS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-footer001/ui-footer001.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-footer001/ui-footer001.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UiFooter001Component */

  /***/
  function srcAppUiCustomizeComponentUiFooter001UiFooter001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiFooter001Component", function () {
      return UiFooter001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiFooter001Component = class UiFooter001Component {
      constructor() {}

      ngOnInit() {}

    };
    UiFooter001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-footer001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-footer001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-footer001/ui-footer001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-footer001.component.scss */
      "./src/app/ui-customize/component/ui-footer001/ui-footer001.component.scss")).default]
    })], UiFooter001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-header001/ui-header001.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-header001/ui-header001.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiHeader001UiHeader001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktaGVhZGVyMDAxL3VpLWhlYWRlcjAwMS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-header001/ui-header001.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-header001/ui-header001.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UiHeader001Component */

  /***/
  function srcAppUiCustomizeComponentUiHeader001UiHeader001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiHeader001Component", function () {
      return UiHeader001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiHeader001Component = class UiHeader001Component {
      constructor() {}

      ngOnInit() {}

    };
    UiHeader001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-header001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-header001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-header001/ui-header001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-header001.component.scss */
      "./src/app/ui-customize/component/ui-header001/ui-header001.component.scss")).default]
    })], UiHeader001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-map001/ui-map001.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-map001/ui-map001.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiMap001UiMap001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktbWFwMDAxL3VpLW1hcDAwMS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-map001/ui-map001.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-map001/ui-map001.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UiMap001Component */

  /***/
  function srcAppUiCustomizeComponentUiMap001UiMap001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiMap001Component", function () {
      return UiMap001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiMap001Component = class UiMap001Component {
      constructor() {}

      ngOnInit() {}

    };
    UiMap001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-map001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-map001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-map001/ui-map001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-map001.component.scss */
      "./src/app/ui-customize/component/ui-map001/ui-map001.component.scss")).default]
    })], UiMap001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiNavList001UiNavList001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType, .ui-nav-list001_card .card_content .content_title {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\n.ui-nav-list001 {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  overflow: auto;\n  padding-bottom: 150px;\n}\n.ui-nav-list001_card {\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.ui-nav-list001_card .card_content {\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid #7a6563;\n}\n.ui-nav-list001_card .card_content .content_title {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-items: flex-start;\n  color: #7a6563;\n  padding-left: 10px;\n  letter-spacing: 3px;\n  font-size: 1.25rem;\n  -webkit-line-clamp: 1;\n}\n.ui-nav-list001_card:first-child .card_content {\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1uYXYtbGlzdDAwMS91aS1uYXYtbGlzdDAwMS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9sYXlvdXQvX2xheW91dC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2hlbHBlci9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL19leHRlbmQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLW5hdi1saXN0MDAxL3VpLW5hdi1saXN0MDAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFlBQUE7RUFDQSxxQkNnRGlCO0FGOUNuQjtBQ0dBO0VBQ0Usd0JBQUE7QURBRjtBQ01BO0VBQ0UscUJBQUE7RUFDQSxlQzJDYTtBRjlDZjtBQ0tFO0VBQ0Usa0JBUmM7QURLbEI7QUNLSTtFQUNFLGlCQUFBO0FESE47QUNRSTtFQUNFLGlCQUFBO0FETk47QUNVRTtFQUNFLHVCQUFBO0FEUko7QUNZQTtFQUNFLG1CQ29FYTtFRG5FYixjQ3ZCYztFRHdCZCxtQkNRYztBRmpCaEI7QUNXQTtFQUNFLGtCQ2tFYztFRGpFZCxjQ3RCYTtBRmNmO0FDV0E7RUFDRSw4QkFBQTtBRFJGO0FDVUU7RUFDRSxZQUFBO0VBRUEsY0NyQ1k7RURzQ1osb0JBQUE7QURUSjtBQ2FBO0VBQ0UsOEJBQUE7QURWRjtBQ1lFO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqRFk7RURrRFosa0JDMkNZO0VEMUNaLG9CQUFBO0VBQ0EsY0FBQTtBRFZKO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDa0JBO0VBQ0Usa0JDb0JhO0VEbkJiLGNDaEZjO0VEaUZkLG1CQ3ZDYztFRHdDZCx3QkFBQTtBRGZGO0FDaUJBO0VBQ0ksZUNoQ1c7RURpQ1gsY0N0RVc7RUR1RVgscUJDM0NlO0FGNkJuQjtBQ2VJO0VBQ0UsaUJBQUE7QURiTjtBQ2tCQTtFQUNFLFVBQUE7RUFDQSx5QkNoR2M7QUZpRmhCO0FDa0JBO0VBQ0UseUJDekZjO0FGMEVoQjtBQzJCQTtFQUNFLDhCQ2pIYztFRGtIZCw2QkN2R2M7RUR3R2Qsb0NBQUE7RUFDQSxrQ0NwSGM7RURxSGQsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQ3ZIYztFRHdIZCw2QkM3R2M7QUZxRmhCO0FHdEdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUh5R0Y7QUd0R0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBSHlHRjtBSWpIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUpvSEo7QUk5R0k7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FKK0dSO0FJM0dRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0JGdEJFO0VFdUJGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsNkJBQUE7QUo0R1o7QUkxR1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNGdkJBO0VFd0JBLGtCQUFBO0VBQ0EsbUJGTUE7RUVMQSxrQkY4REQ7RUU1REMscUJBQUE7QUoyR2hCO0FJdEdZO0VBQ0ksZ0JBQUE7QUp3R2hCIiwiZmlsZSI6InNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1uYXYtbGlzdDAwMS91aS1uYXYtbGlzdDAwMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnF1cXUyMDIwLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbltjbGFzc149bGF5b3V0LWxpc3QtXSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdICsgW2NsYXNzKj1jaGlsZF0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzKj1jaGlsZF0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSAubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweDtcbn1cblxuLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5sYXlvdXQtbGlzdC1ub3RlMDAxIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzVhNmE3MTtcbn1cblxuLmxheW91dC1saXN0LWNpcmNsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcbn1cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEgW2NsYXNzKj1jaGlsZF06YmVmb3JlIHtcbiAgY29udGVudDogXCLil6ZcIjtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG59XG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEgW2NsYXNzKj1jaGlsZF06YmVmb3JlIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHN0eWxlMDAxLW51bWJlcjtcbiAgY29udGVudDogY291bnRlcihzdHlsZTAwMS1udW1iZXIpIFwiLlwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubGF5b3V0LWJsb2NrMDAxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxheW91dC1ibG9jazAwMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5sYXlvdXQtdGl0bGUwMDEge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjZmZmZmYzO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG59XG5cbi5sYXlvdXQtcG9pbnQtc3R5bGUwMDEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNWE2YTcxO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxICsgLmxheW91dC1wb2ludC1zdHlsZTAwMSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyXzAwMSwgYm9keSAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjM7XG59XG5cbi5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxLCBib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNjU2Mztcbn1cblxuYm9keSB7XG4gIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICM3YTY1NjM7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWhpZ2hsaWdodC1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAjZmZmZmYzO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogIzdhNjU2Mztcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkLWxpbWl0LWxpbmVUeXBlLCAudWktbmF2LWxpc3QwMDFfY2FyZCAuY2FyZF9jb250ZW50IC5jb250ZW50X3RpdGxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xufVxuXG4udWktbmF2LWxpc3QwMDEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuLnVpLW5hdi1saXN0MDAxX2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbn1cbi51aS1uYXYtbGlzdDAwMV9jYXJkIC5jYXJkX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2E2NTYzO1xufVxuLnVpLW5hdi1saXN0MDAxX2NhcmQgLmNhcmRfY29udGVudCAuY29udGVudF90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiAjN2E2NTYzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xufVxuLnVpLW5hdi1saXN0MDAxX2NhcmQ6Zmlyc3QtY2hpbGQgLmNhcmRfY29udGVudCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59IiwiYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLW5vcm1hbDtcbiAgO1xuXG59XG5cbi5xdXF1MjAyMC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4kbGF5b3V0LWxpc3QtbGVmdDoyMHB4O1xuXG4vL+WFseeUqGxheW91dCBsaXN0IHRleHQgc3R5bGVcbltjbGFzc149XCJsYXlvdXQtbGlzdC1cIl0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oODtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgIHBhZGRpbmctbGVmdDogJGxheW91dC1saXN0LWxlZnQ7XG5cbiAgICAmK1tjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICBbY2xhc3NePVwibGF5b3V0LWxpc3QtXCJdIHtcbiAgICBbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgICBwYWRkaW5nOiAkbGF5b3V0LWxpc3QtbGVmdCAkbGF5b3V0LWxpc3QtbGVmdCAtIDEwcHggJGxheW91dC1saXN0LWxlZnQgLSAxMHB4O1xuICB9XG59XG5cbi5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNztcbiAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLXN1Yjtcbn1cbi5sYXlvdXQtbGlzdC1ub3RlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgY29sb3I6ICRjb2xvci1ncmV5LTAxXG59XG5cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDI1RTZcIjtcbiAgICAvLyBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cblxuLmxheW91dC1saXN0LXN0eWxlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXTpiZWZvcmUge1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdHlsZTAwMS1udW1iZXI7XG4gICAgY29udGVudDogY291bnRlcihzdHlsZTAwMS1udW1iZXIpIFwiLlwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuXG4vL+WFseeUqGxheW91dCBibG9ja1xuLmxheW91dC1ibG9jazAwMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sYXlvdXQtYmxvY2swMDIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4vLyBlbmQgLSDlhbHnlKhsYXlvdXQgYmxvY2tcblxuXG4ubGF5b3V0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg2O1xuICBjb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utc3ViO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG59XG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxe1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oODtcbiAgICBjb2xvcjogJGNvbG9yLWdyZXktMDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLW5vcm1hbDtcbiAgICArLmxheW91dC1wb2ludC1zdHlsZTAwMXtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLy8gc3R5bGVfc2Nyb2xsYmFyXG4uc3R5bGVfc2Nyb2xsYmFyXzAwMSB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl90aHVtYl8wMDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG59XG5cblxuYm9keSAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIEBleHRlbmQgLnN0eWxlX3Njcm9sbGJhcl8wMDEgIW9wdGlvbmFsO1xufVxuXG5ib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgQGV4dGVuZCAuc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSAhb3B0aW9uYWw7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbiAgc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xufSIsIiRjYXJkLXJhZGl1czogMnJlbTtcbiRjYXJkLXJhZGl1cy0wMjogMTAwJTtcblxuXG4vLzAxLTcuIGNvbG9yIGNvbW1vbiB1c2VcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci13aGl0ZS0wMTojZmZmZmYzO1xuXG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYmxhY2stMDE6IzIxMjEyMTtcbiRjb2xvci1ibGFjay0wMjojMDYxODI2O1xuXG4kY29sb3ItcmVkLTAxOiAjZjRkNmNjO1xuXG4kY29sb3ItYmctbWRvOiNmNWY1ZjU7XG4kY29sb3ItZ3JlZW4tMDE6I0FCRDBDRTtcbiRjb2xvci1ncmVlbi0wMjojNTk2ZjYyO1xuJGNvbG9yLWJyb3duLTAxOiM3YTY1NjM7XG5cbiRjb2xvci10ZXh0OiAkY29sb3ItYmxhY2stMDI7XG4kY29sb3ItbWFpbjogJGNvbG9yLWdyZWVuLTAxO1xuLy8gJGNvbG9yLXN1YjogJGNvbG9yLXBpbmstMDE7XG4kY29sb3ItZ3JleS0wMTojNWE2YTcxO1xuJGNvbG9yLWdyZXktMDI6I2Q4ZDhkODtcbiRjb2xvci1ncmV5LTAzOiM0YTRhNGE7XG4kY29sb3ItZ3JleS0wNDojNzU3NTc1O1xuXG5cblxuJHNoYWRvdy1zdHlsZTE6MCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4kc2hhZG93LXN0eWxlMjowIDJweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcblxuLy8gPT09PT0gMDIgZm9udCBzZXR0aW5nID09PT09PVxuXG4vLyAwMi0xIGZvbnQgYmFzaWMgc2V0dGluZ1xuJGZvbnQtZmFtaWx5OiBcblwi5paH5rOJ6amb5q2j6buRXCIsXG5cIldlblF1YW5ZaSBaZW4gSGVpXCIsXG5cIuiYi+aWuS3nuYFcIixcblwiUGluZ0ZhbmcgVENcIixcblwi6buR6auULee5gVwiLFxuXCJIZWl0aSBUQ1wiLFxuXCLlhLfpu5EgUHJvXCIsXG5cIkxpSGVpIFByb1wiLFxuXCLlvq7ou5/mraPpu5Hpq5RcIixcblwiTWljcm9zb2Z0IEpoZW5nSGVpXCIsXG5zYW5zLXNlcmlmO1xuJGZvbnQtbGluZS1oZWlnaHQ6IDI4cHg7XG4kZm9udC1zcGFjZS1zdWI6M3B4O1xuJGZvbnQtc3BhY2UtbWFpbjo1cHg7XG4kZm9udC1zcGFjZS1ub3JtYWw6MC41cHg7XG5cbiRmb250LWxpbmUtaGVpZ2h0LW1kOiAxLjU7XG4kZm9udC1saW5lLWhlaWdodC1sZzogJGZvbnQtbGluZS1oZWlnaHQtbWQgKiAyO1xuXG4vLyAwMi0yIGZvbnQgYmFzZSAgd2hlbiB0ZXh0IHNtIDogYmFzZSA9IDE2IDsgdGV4dCBtZCA6IGJhc2UgPSAxODsgdGV4dCBsZyA6IGJhc2UgPSAyMFxuJGZvbnQtYmFzZS1udW06IDE2O1xuJGZvbnQtYmFzZS1udW0tbWQ6IDE4O1xuJGZvbnQtYmFzZS1udW0tbGc6IDIwO1xuJGZvbnQtc2l6ZS1tZDogMXJlbTsgLy8xNnB4XG5cbi8vIDAyLTMuYSB0aXRsZSBmb250IHNpemVcbiRmb250LXNpemUtbGc6NDhweDtcbiRmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDM2LyRmb250LWJhc2UtbnVtKTsgLy8zNnB4XG4kZm9udC1zaXplLWgzOiAkZm9udC1zaXplLW1kKigyOC8kZm9udC1iYXNlLW51bSk7IC8vMjhweDtcbiRmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtKTsgLy8yNnB4O1xuJGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pOyAvLzI0cHg7XG5cbi8vIDAyLTMuYiBzZXR0aW5nIGZvbnQgc2l6ZSAgKCBoYXMgaXQgb3duIHJ1bGUgYWJvdXQgc2NhbGUgZm9uIHNpemUsIG5vdCBmb2xsb3cgdGhlIHJ1bGUgb2YgYmFzZSByZW0pXG4kZm9udC1zaXplLWNvbmZpZzooZm9udC1zaXplX2xnIDooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bS1sZyksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtLWxnKSwgLy8yNnB4XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bS1sZykgLy8yNHB4XG4gICksXG4gIGZvbnQtc2l6ZV9tZCA6KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0tbWQpLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bS1tZCksIC8vIDI2cHhcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKSAvLyB1c2Ugc20gcmF0aW8gdG8gdGhlIGJhc2VcbiAgKSxcbiAgZm9udC1zaXplX3NtOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0pLCAvLzI2cHg7XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSkgLy8yNHB4O1xuICApKTtcblxuQGZ1bmN0aW9uIGdldC1mb250LXNpemUoJGtleSwgJHR5cGU6J2ZvbnQtc2l6ZV9zbScpIHtcblxuICBAZWFjaCAkZm9udC1uYW1lLFxuICAkZm9udC1zaXplIGluIG1hcC1nZXQoJGZvbnQtc2l6ZS1jb25maWcsICR0eXBlKSB7XG4gICAgQGlmKCRrZXk9PSRmb250LW5hbWUpIHtcbiAgICAgIEByZXR1cm4gJGZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSkge1xuICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9zbScpO1xuXG4gIC5mb250LXNpemVfbGcgJiB7XG4gICAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfbGcnKTtcbiAgfVxuXG4gIC5mb250LXNpemVfbWQgJiB7XG4gICAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfbWQnKTtcbiAgfVxufVxuXG4vLyAwMi00IGZvbnQgc2l6ZSBub3JtYWxcbiRmb250LXNpemUtaDY6ICRmb250LXNpemUtbWQqKDIwLyRmb250LWJhc2UtbnVtKTsgLy8yMHB4XG4kZm9udC1zaXplLWg3OiAkZm9udC1zaXplLW1kKigxOC8kZm9udC1iYXNlLW51bSk7IC8vMThweFxuJGZvbnQtc2l6ZS1oODogJGZvbnQtc2l6ZS1tZDsgLy8gMTZweFxuJGZvbnQtc2l6ZS1oOTogMXJlbSAqICgxNC8kZm9udC1iYXNlLW51bSk7IC8vIDE0cHhcbiRmb250LXNpemUtaDEwOiAkZm9udC1zaXplLW1kICooMTIvJGZvbnQtYmFzZS1udW0pOyAvLzEycHhcblxuXG4vLyA9PT09PT0gMDMgc2NyZWVuIHdpZHRoICA9PT09PT1cbiRzY3JlZW4tZGVza3RvcDogMTIwMHB4O1xuJHNjcmVlbi1zbS10aGFuLWRlc2t0b3A6IDExOTlweDtcbiRzY3JlZW4tcGFkLXBybzogMTM2NnB4O1xuJHNjcmVlbi1sZy10aGFuLW5iOiAxMDI1cHg7XG4kc2NyZWVuLW5iOiAxMDI0cHg7XG4kc2NyZWVuLXNtLXRoYW4tbmI6IDEwMjNweDtcbiRzY3JlZW4tbGctcGFkOiA5OTJweDtcbiRzY3JlZW4tbGctdGhhbi1wYWQ6IDc2OXB4O1xuJHNjcmVlbi1wYWQ6IDc2OHB4O1xuJHNjcmVlbi1zbS10aGFuLXBhZDogNzY3cHg7XG4kc2NyZWVuLWxnLW1vYmlsZTogNTAwcHg7XG4kc2NyZWVuLW1vYmlsZTogMzc1cHg7XG4kc2NyZWVuLXNtLXRoYW4tbW9iaWxlOiAzNzRweDtcbiRzY3JlZW4tc206IDMyMHB4O1xuXG5cbi8vIGxheW91dCBzaXplXG5cbiR3ZC1sb2dvLW1vYmlsZTogMjA0cHg7XG4kYm9hcmQtdGltZS1jYXJkLWhlaWdodDogMjIwcHg7XG4kYm9hcmQtdGltZS1jYXJkLXdpZHRoOiAxMzVweDtcblxuXG4vLyBmb3JtIHNldHRpbmcgZnJvbSBAbmV1eC91aVxuLy8g6KGo5Zau5Z+65pys6K6K5pW4XG4kZm9ybS1oZWlnaHQtdGV4dGFyZWE6IDc1cHg7XG5cbi8vIGZvcm0gY29sb3JcbiRjb2xvci1mb3JtLWVycm9yOiAjZTQ2MDA5ICFkZWZhdWx0O1xuLy8kY29sb3ItZm9ybS1kaXNhYmxlOiAkY29sb3ItZ3JleS1kYXJrICFkZWZhdWx0O1xuJGNvbG9yLWZvcm0tbm9ybWFsOiAkY29sb3ItdGV4dCAhZGVmYXVsdDtcbiRjb2xvci1jaGVja2JveC1pY29uOiAkY29sb3Itd2hpdGUgIWRlZmF1bHQ7IC8vIGNoZWNrYm94IGNvbG9yXG4kY29sb3ItZm9ybS1jaGVjay1ib3JkZXI6ICNlMGUwZTAgIWRlZmF1bHQ7IC8vIGNoZWNrYm94IGFuZCByYWRpbyBib3JkZXJcbiRjb2xvci1mb3JtLWFjdGl2ZTogJGNvbG9yLW1haW4gIWRlZmF1bHQ7XG4kY29sb3ItZm9ybS1kYXJrOiAjZTBlMGUwOyAvLyB1c2UgaW4gc2VhcmNoIGJveCBvbiBoZWFkZXJcbiRjb2xvci1iZy1mb3JtOiAkY29sb3Itd2hpdGU7XG4kY29sb3ItYmctZm9ybS1kYXJrOiAjZTBlMGUwO1xuXG5cbi8vIGJ0bjpcbiRuZXV4LXVpLWJ0bi0tc206MzBweDtcblxuLy9cbiRzcGFjZS1uYjogMzBweDtcbiRzcGFjZS1wYWQ6IDMwcHg7XG4kc3BhY2UtbW9iaWxlOiAyMHB4O1xuXG4vLyBsYXlvdXQ6IOWFp+mggXRpdGxlIOW3pumWk+i3nVxuJHNwYWNlLWlucGFnZS10aXRsZS1sZWZ0OiAxMHB4O1xuJGJyZWFkY3J1bWItYXJyb3ctY29sb3I6ICNiYmI7IC8vIOm6teWMheWxkeeuremgremhj+iJsuWQjOePvuihjOWumOe2slxuXG4kYmFubmVyLXNsaWRlci1oZWlnaHQ6NTUwcHg7XG4kYmFubmVyLXNsaWRlci1oZWlnaHQtbWI6MzEwcHg7IiwiLmZsZXgtY2VudGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndvcmQtbGltaXQtbGluZVR5cGV7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICdzdHlsZS1pbXBvcnQnO1xuXG4udWktbmF2LWxpc3QwMDEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDsgLy9hZHZvaWQgc2FmYXJpIGJhciBoaWRlIGVsZW1lbnRcblxuICAgIC8vICYuYWN0aXZlIHtcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAvLyB9XG5cbiAgICAmX2NhcmQge1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAvLyBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLWdyZXktMDE7XG5cbiAgICAgICAgLmNhcmRfY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6IDA7IC8v5YuV55Wr5pWI5p6cXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLWJyb3duLTAxO1xuXG4gICAgICAgICAgICAuY29udGVudF90aXRsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1zdWI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWg2O1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLndvcmQtbGltaXQtbGluZVR5cGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAuY2FyZF9jb250ZW50IHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UiNavList001Component */

  /***/
  function srcAppUiCustomizeComponentUiNavList001UiNavList001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiNavList001Component", function () {
      return UiNavList001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    let UiNavList001Component = class UiNavList001Component {
      constructor() {
        this.clickMenuPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      set isClickMenu(isClickMenu) {
        this._isClickMenu = isClickMenu;
      }

      get isClickMenu() {
        return this._isClickMenu;
      }

      set menuList(menuList) {
        this._menuList = menuList;
      }

      get menuList() {
        return this._menuList;
      }

      ngOnInit() {}

      clickMenuCard(i) {
        console.log('component say:', i);
        this.clickMenuPage.emit(i);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiNavList001Component.prototype, "isClickMenu", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiNavList001Component.prototype, "menuList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UiNavList001Component.prototype, "clickMenuPage", void 0);
    UiNavList001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-nav-list001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-nav-list001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [// state('*', style({
      //   opacity: 0,
      //   visibility: 'hidden',
      // })),
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        visibility: 'visible',
        transform: '*',
        background: 'white'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        visibility: 'hidden',
        transform: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.card_content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('.1s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: .5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })]))]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        visibility: 'visible',
        opacity: 1,
        background: 'white'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.card_content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.card_content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('.1s', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: .5,
        transform: 'translate3d(0,10px,0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        transform: 'translate3d(0,0,0)'
      })]))]))])])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-nav-list001.component.scss */
      "./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.scss")).default]
    })], UiNavList001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-nav001/ui-nav001.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-nav001/ui-nav001.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiNav001UiNav001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\n.ui-nav001 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n  background: #fff;\n  cursor: pointer;\n  height: 100vh;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.19);\n}\n@media (min-width: 768px) {\n  .ui-nav001 {\n    height: 90vh;\n  }\n}\n.ui-nav001_menu {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media (max-width: 767px) {\n  .ui-nav001_menu {\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n}\n.ui-nav001_menu .menu_hamburger {\n  margin-bottom: 20px;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 1, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 1, 1);\n}\n@media (max-width: 767px) {\n  .ui-nav001_menu .menu_hamburger {\n    margin-top: 10px;\n    margin-bottom: 0px;\n  }\n}\n.ui-nav001_menu .menu_hamburger .line {\n  width: 100%;\n  border-radius: 4px;\n  height: 4px;\n  background-color: #7a6563;\n  display: block;\n  margin: 6px auto;\n  -webkit-transform: translateY(0px) rotate(0deg);\n          transform: translateY(0px) rotate(0deg);\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);\n  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n}\n.ui-nav001_menu .menu_hamburger.active {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.ui-nav001_menu .menu_hamburger.active .line:nth-child(1) {\n  -webkit-transform: translateY(12px) rotate(45deg);\n  transform: translateY(12px) rotate(45deg);\n}\n.ui-nav001_menu .menu_hamburger.active .line:nth-child(2) {\n  -webkit-transition: none;\n  transition: none;\n  opacity: 0;\n}\n.ui-nav001_menu .menu_hamburger.active .line:nth-child(3) {\n  -webkit-transform: translateY(-11px) rotate(-45deg);\n  transform: translateY(-11px) rotate(-45deg);\n}\n.ui-nav001_menu .menu_char {\n  cursor: pointer;\n  font-size: 1.5rem;\n  line-height: 1.1;\n  word-break: break-all;\n  color: #7a6563;\n}\n@media (max-width: 767px) {\n  .ui-nav001_menu .menu_char {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes switchState {\n  from {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  to {\n    -webkit-transform: translateY(-11px);\n            transform: translateY(-11px);\n  }\n}\n@keyframes switchState {\n  from {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n  to {\n    -webkit-transform: translateY(-11px);\n            transform: translateY(-11px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1uYXYwMDEvdWktbmF2MDAxLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2xheW91dC9fbGF5b3V0LnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9oZWxwZXIvX2V4dGVuZC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXBwL3VpLWN1c3RvbWl6ZS9jb21wb25lbnQvdWktbmF2MDAxL3VpLW5hdjAwMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxZQUFBO0VBQ0EscUJDZ0RpQjtBRjlDbkI7QUNHQTtFQUNFLHdCQUFBO0FEQUY7QUNNQTtFQUNFLHFCQUFBO0VBQ0EsZUMyQ2E7QUY5Q2Y7QUNLRTtFQUNFLGtCQVJjO0FES2xCO0FDS0k7RUFDRSxpQkFBQTtBREhOO0FDUUk7RUFDRSxpQkFBQTtBRE5OO0FDVUU7RUFDRSx1QkFBQTtBRFJKO0FDWUE7RUFDRSxtQkNvRWE7RURuRWIsY0N2QmM7RUR3QmQsbUJDUWM7QUZqQmhCO0FDV0E7RUFDRSxrQkNrRWM7RURqRWQsY0N0QmE7QUZjZjtBQ1dBO0VBQ0UsOEJBQUE7QURSRjtBQ1VFO0VBQ0UsWUFBQTtFQUVBLGNDckNZO0VEc0NaLG9CQUFBO0FEVEo7QUNhQTtFQUNFLDhCQUFBO0FEVkY7QUNZRTtFQUNFLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNDakRZO0VEa0RaLGtCQzJDWTtFRDFDWixvQkFBQTtFQUNBLGNBQUE7QURWSjtBQ2VBO0VBQ0UsZ0JBQUE7QURaRjtBQ2VBO0VBQ0UsZ0JBQUE7QURaRjtBQ2tCQTtFQUNFLGtCQ29CYTtFRG5CYixjQ2hGYztFRGlGZCxtQkN2Q2M7RUR3Q2Qsd0JBQUE7QURmRjtBQ2lCQTtFQUNJLGVDaENXO0VEaUNYLGNDdEVXO0VEdUVYLHFCQzNDZTtBRjZCbkI7QUNlSTtFQUNFLGlCQUFBO0FEYk47QUNrQkE7RUFDRSxVQUFBO0VBQ0EseUJDaEdjO0FGaUZoQjtBQ2tCQTtFQUNFLHlCQ3pGYztBRjBFaEI7QUMyQkE7RUFDRSw4QkNqSGM7RURrSGQsNkJDdkdjO0VEd0dkLG9DQUFBO0VBQ0Esa0NDcEhjO0VEcUhkLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkN2SGM7RUR3SGQsNkJDN0djO0FGcUZoQjtBR3RHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FIeUdGO0FHdEdBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7QUh5R0Y7QUl6R0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JGVlU7RUVXVixlQUFBO0VBRUEsYUFBQTtFQUVBLHlDRlNXO0FGaUdmO0FJeEdJO0VBWko7SUFhUSxZQUFBO0VKMkdOO0FBQ0Y7QUl6R0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FKMkdSO0FJekdRO0VBUEo7SUFRUSx1QkFBQTtZQUFBLDJCQUFBO0VKNEdWO0FBQ0Y7QUl6R1E7RUFDSSxtQkFBQTtFQUNBLHFFQUFBO0VBQUEsNkRBQUE7RUFBQSxxREFBQTtFQUFBLHdHQUFBO0FKMkdaO0FJekdZO0VBSko7SUFLUSxnQkFBQTtJQUNBLGtCQUFBO0VKNEdkO0FBQ0Y7QUkxR1k7RUFDSSxXQUFBO0VBQ0Esa0JBOUNPO0VBK0NQLFdBL0NPO0VBZ0RQLHlCRmxDQTtFRW1DQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUVBLHVEQUFBO0VBQUEsK0NBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FKMkdoQjtBSXJHWTtFQUNJLGtDQUFBO1VBQUEsMEJBQUE7QUp1R2hCO0FJaEdnQjtFQUNJLGlEQUFBO0VBR0EseUNBQUE7QUprR3BCO0FJL0ZnQjtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0FKaUdwQjtBSTlGZ0I7RUFDSSxtREFBQTtFQUdBLDJDQUFBO0FKZ0dwQjtBSTNGUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjRmpGSTtBRjhLaEI7QUkzRlk7RUFQSjtJQVFRLGtCQUFBO0VKOEZkO0FBQ0Y7QUl4RkE7RUFDSTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUoyRk47RUl4RkU7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VKMEZOO0FBQ0Y7QUlqR0E7RUFDSTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUoyRk47RUl4RkU7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VKMEZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLW5hdjAwMS91aS1uYXYwMDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5xdXF1MjAyMC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5bY2xhc3NePWxheW91dC1saXN0LV0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSArIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHg7XG59XG5cbi5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4ubGF5b3V0LWxpc3Qtbm90ZTAwMSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM1YTZhNzE7XG59XG5cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG59XG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pemXCI7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmxheW91dC1saXN0LXN0eWxlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xufVxuLmxheW91dC1saXN0LXN0eWxlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdHlsZTAwMS1udW1iZXI7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3R5bGUwMDEtbnVtYmVyKSBcIi5cIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmxheW91dC1ibG9jazAwMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sYXlvdXQtYmxvY2swMDIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubGF5b3V0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI2ZmZmZmMztcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xufVxuXG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzVhNmE3MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmxheW91dC1wb2ludC1zdHlsZTAwMSArIC5sYXlvdXQtcG9pbnQtc3R5bGUwMDEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl8wMDEsIGJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYzO1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSwgYm9keSAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTY1NjM7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAjN2E2NTYzO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICM3YTY1NjM7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZC1saW1pdC1saW5lVHlwZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbn1cblxuLnVpLW5hdjAwMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLW5hdjAwMSB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICB9XG59XG4udWktbmF2MDAxX21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVpLW5hdjAwMV9tZW51IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi51aS1uYXYwMDFfbWVudSAubWVudV9oYW1idXJnZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWktbmF2MDAxX21lbnUgLm1lbnVfaGFtYnVyZ2VyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLnVpLW5hdjAwMV9tZW51IC5tZW51X2hhbWJ1cmdlciAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E2NTYzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2cHggYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG59XG4udWktbmF2MDAxX21lbnUgLm1lbnVfaGFtYnVyZ2VyLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnVpLW5hdjAwMV9tZW51IC5tZW51X2hhbWJ1cmdlci5hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KSByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpIHJvdGF0ZSg0NWRlZyk7XG59XG4udWktbmF2MDAxX21lbnUgLm1lbnVfaGFtYnVyZ2VyLmFjdGl2ZSAubGluZTpudGgtY2hpbGQoMikge1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuLnVpLW5hdjAwMV9tZW51IC5tZW51X2hhbWJ1cmdlci5hY3RpdmUgLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi51aS1uYXYwMDFfbWVudSAubWVudV9jaGFyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogIzdhNjU2Mztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWktbmF2MDAxX21lbnUgLm1lbnVfY2hhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dpdGNoU3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KTtcbiAgfVxufSIsImJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1ub3JtYWw7XG4gIDtcblxufVxuXG4ucXVxdTIwMjAtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuJGxheW91dC1saXN0LWxlZnQ6MjBweDtcblxuLy/lhbHnlKhsYXlvdXQgbGlzdCB0ZXh0IHN0eWxlXG5bY2xhc3NePVwibGF5b3V0LWxpc3QtXCJdIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDg7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICRsYXlvdXQtbGlzdC1sZWZ0O1xuXG4gICAgJitbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgW2NsYXNzXj1cImxheW91dC1saXN0LVwiXSB7XG4gICAgW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gICAgcGFkZGluZzogJGxheW91dC1saXN0LWxlZnQgJGxheW91dC1saXN0LWxlZnQgLSAxMHB4ICRsYXlvdXQtbGlzdC1sZWZ0IC0gMTBweDtcbiAgfVxufVxuXG4ubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDc7XG4gIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1zdWI7XG59XG4ubGF5b3V0LWxpc3Qtbm90ZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gIGNvbG9yOiAkY29sb3ItZ3JleS0wMVxufVxuXG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyNUU2XCI7XG4gICAgLy8gZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG5cbi5sYXlvdXQtbGlzdC1zdHlsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl06YmVmb3JlIHtcbiAgICBjb3VudGVyLWluY3JlbWVudDogc3R5bGUwMDEtbnVtYmVyO1xuICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3R5bGUwMDEtbnVtYmVyKSBcIi5cIjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cblxuLy/lhbHnlKhsYXlvdXQgYmxvY2tcbi5sYXlvdXQtYmxvY2swMDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGF5b3V0LWJsb2NrMDAyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLy8gZW5kIC0g5YWx55SobGF5b3V0IGJsb2NrXG5cblxuLmxheW91dC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNjtcbiAgY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLXN1YjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xufVxuLmxheW91dC1wb2ludC1zdHlsZTAwMXtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDg7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTAxO1xuICAgIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1ub3JtYWw7XG4gICAgKy5sYXlvdXQtcG9pbnQtc3R5bGUwMDF7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG59XG5cbi8vIHN0eWxlX3Njcm9sbGJhclxuLnN0eWxlX3Njcm9sbGJhcl8wMDEge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG59XG5cbi5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xufVxuXG5cbmJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBAZXh0ZW5kIC5zdHlsZV9zY3JvbGxiYXJfMDAxICFvcHRpb25hbDtcbn1cblxuYm9keSAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIEBleHRlbmQgLnN0eWxlX3Njcm9sbGJhcl90aHVtYl8wMDEgIW9wdGlvbmFsO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWhpZ2hsaWdodC1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbn0iLCIkY2FyZC1yYWRpdXM6IDJyZW07XG4kY2FyZC1yYWRpdXMtMDI6IDEwMCU7XG5cblxuLy8wMS03LiBjb2xvciBjb21tb24gdXNlXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3Itd2hpdGUtMDE6I2ZmZmZmMztcblxuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTAxOiMyMTIxMjE7XG4kY29sb3ItYmxhY2stMDI6IzA2MTgyNjtcblxuJGNvbG9yLXJlZC0wMTogI2Y0ZDZjYztcblxuJGNvbG9yLWJnLW1kbzojZjVmNWY1O1xuJGNvbG9yLWdyZWVuLTAxOiNBQkQwQ0U7XG4kY29sb3ItZ3JlZW4tMDI6IzU5NmY2MjtcbiRjb2xvci1icm93bi0wMTojN2E2NTYzO1xuXG4kY29sb3ItdGV4dDogJGNvbG9yLWJsYWNrLTAyO1xuJGNvbG9yLW1haW46ICRjb2xvci1ncmVlbi0wMTtcbi8vICRjb2xvci1zdWI6ICRjb2xvci1waW5rLTAxO1xuJGNvbG9yLWdyZXktMDE6IzVhNmE3MTtcbiRjb2xvci1ncmV5LTAyOiNkOGQ4ZDg7XG4kY29sb3ItZ3JleS0wMzojNGE0YTRhO1xuJGNvbG9yLWdyZXktMDQ6Izc1NzU3NTtcblxuXG5cbiRzaGFkb3ctc3R5bGUxOjAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuJHNoYWRvdy1zdHlsZTI6MCAycHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG5cbi8vID09PT09IDAyIGZvbnQgc2V0dGluZyA9PT09PT1cblxuLy8gMDItMSBmb250IGJhc2ljIHNldHRpbmdcbiRmb250LWZhbWlseTogXG5cIuaWh+aziempm+ato+m7kVwiLFxuXCJXZW5RdWFuWWkgWmVuIEhlaVwiLFxuXCLomIvmlrkt57mBXCIsXG5cIlBpbmdGYW5nIFRDXCIsXG5cIum7kemrlC3nuYFcIixcblwiSGVpdGkgVENcIixcblwi5YS36buRIFByb1wiLFxuXCJMaUhlaSBQcm9cIixcblwi5b6u6Luf5q2j6buR6auUXCIsXG5cIk1pY3Jvc29mdCBKaGVuZ0hlaVwiLFxuc2Fucy1zZXJpZjtcbiRmb250LWxpbmUtaGVpZ2h0OiAyOHB4O1xuJGZvbnQtc3BhY2Utc3ViOjNweDtcbiRmb250LXNwYWNlLW1haW46NXB4O1xuJGZvbnQtc3BhY2Utbm9ybWFsOjAuNXB4O1xuXG4kZm9udC1saW5lLWhlaWdodC1tZDogMS41O1xuJGZvbnQtbGluZS1oZWlnaHQtbGc6ICRmb250LWxpbmUtaGVpZ2h0LW1kICogMjtcblxuLy8gMDItMiBmb250IGJhc2UgIHdoZW4gdGV4dCBzbSA6IGJhc2UgPSAxNiA7IHRleHQgbWQgOiBiYXNlID0gMTg7IHRleHQgbGcgOiBiYXNlID0gMjBcbiRmb250LWJhc2UtbnVtOiAxNjtcbiRmb250LWJhc2UtbnVtLW1kOiAxODtcbiRmb250LWJhc2UtbnVtLWxnOiAyMDtcbiRmb250LXNpemUtbWQ6IDFyZW07IC8vMTZweFxuXG4vLyAwMi0zLmEgdGl0bGUgZm9udCBzaXplXG4kZm9udC1zaXplLWxnOjQ4cHg7XG4kZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKigzNi8kZm9udC1iYXNlLW51bSk7IC8vMzZweFxuJGZvbnQtc2l6ZS1oMzogJGZvbnQtc2l6ZS1tZCooMjgvJGZvbnQtYmFzZS1udW0pOyAvLzI4cHg7XG4kZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bSk7IC8vMjZweDtcbiRmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKTsgLy8yNHB4O1xuXG4vLyAwMi0zLmIgc2V0dGluZyBmb250IHNpemUgICggaGFzIGl0IG93biBydWxlIGFib3V0IHNjYWxlIGZvbiBzaXplLCBub3QgZm9sbG93IHRoZSBydWxlIG9mIGJhc2UgcmVtKVxuJGZvbnQtc2l6ZS1jb25maWc6KGZvbnQtc2l6ZV9sZyA6KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0tbGcpLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bS1sZyksIC8vMjZweFxuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0tbGcpIC8vMjRweFxuICApLFxuICBmb250LXNpemVfbWQgOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtLW1kKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0tbWQpLCAvLyAyNnB4XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSkgLy8gdXNlIHNtIHJhdGlvIHRvIHRoZSBiYXNlXG4gICksXG4gIGZvbnQtc2l6ZV9zbTooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bSksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtKSwgLy8yNnB4O1xuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pIC8vMjRweDtcbiAgKSk7XG5cbkBmdW5jdGlvbiBnZXQtZm9udC1zaXplKCRrZXksICR0eXBlOidmb250LXNpemVfc20nKSB7XG5cbiAgQGVhY2ggJGZvbnQtbmFtZSxcbiAgJGZvbnQtc2l6ZSBpbiBtYXAtZ2V0KCRmb250LXNpemUtY29uZmlnLCAkdHlwZSkge1xuICAgIEBpZigka2V5PT0kZm9udC1uYW1lKSB7XG4gICAgICBAcmV0dXJuICRmb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBnZXQtZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfc20nKTtcblxuICAuZm9udC1zaXplX2xnICYge1xuICAgIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX2xnJyk7XG4gIH1cblxuICAuZm9udC1zaXplX21kICYge1xuICAgIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX21kJyk7XG4gIH1cbn1cblxuLy8gMDItNCBmb250IHNpemUgbm9ybWFsXG4kZm9udC1zaXplLWg2OiAkZm9udC1zaXplLW1kKigyMC8kZm9udC1iYXNlLW51bSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1oNzogJGZvbnQtc2l6ZS1tZCooMTgvJGZvbnQtYmFzZS1udW0pOyAvLzE4cHhcbiRmb250LXNpemUtaDg6ICRmb250LXNpemUtbWQ7IC8vIDE2cHhcbiRmb250LXNpemUtaDk6IDFyZW0gKiAoMTQvJGZvbnQtYmFzZS1udW0pOyAvLyAxNHB4XG4kZm9udC1zaXplLWgxMDogJGZvbnQtc2l6ZS1tZCAqKDEyLyRmb250LWJhc2UtbnVtKTsgLy8xMnB4XG5cblxuLy8gPT09PT09IDAzIHNjcmVlbiB3aWR0aCAgPT09PT09XG4kc2NyZWVuLWRlc2t0b3A6IDEyMDBweDtcbiRzY3JlZW4tc20tdGhhbi1kZXNrdG9wOiAxMTk5cHg7XG4kc2NyZWVuLXBhZC1wcm86IDEzNjZweDtcbiRzY3JlZW4tbGctdGhhbi1uYjogMTAyNXB4O1xuJHNjcmVlbi1uYjogMTAyNHB4O1xuJHNjcmVlbi1zbS10aGFuLW5iOiAxMDIzcHg7XG4kc2NyZWVuLWxnLXBhZDogOTkycHg7XG4kc2NyZWVuLWxnLXRoYW4tcGFkOiA3NjlweDtcbiRzY3JlZW4tcGFkOiA3NjhweDtcbiRzY3JlZW4tc20tdGhhbi1wYWQ6IDc2N3B4O1xuJHNjcmVlbi1sZy1tb2JpbGU6IDUwMHB4O1xuJHNjcmVlbi1tb2JpbGU6IDM3NXB4O1xuJHNjcmVlbi1zbS10aGFuLW1vYmlsZTogMzc0cHg7XG4kc2NyZWVuLXNtOiAzMjBweDtcblxuXG4vLyBsYXlvdXQgc2l6ZVxuXG4kd2QtbG9nby1tb2JpbGU6IDIwNHB4O1xuJGJvYXJkLXRpbWUtY2FyZC1oZWlnaHQ6IDIyMHB4O1xuJGJvYXJkLXRpbWUtY2FyZC13aWR0aDogMTM1cHg7XG5cblxuLy8gZm9ybSBzZXR0aW5nIGZyb20gQG5ldXgvdWlcbi8vIOihqOWWruWfuuacrOiuiuaVuFxuJGZvcm0taGVpZ2h0LXRleHRhcmVhOiA3NXB4O1xuXG4vLyBmb3JtIGNvbG9yXG4kY29sb3ItZm9ybS1lcnJvcjogI2U0NjAwOSAhZGVmYXVsdDtcbi8vJGNvbG9yLWZvcm0tZGlzYWJsZTogJGNvbG9yLWdyZXktZGFyayAhZGVmYXVsdDtcbiRjb2xvci1mb3JtLW5vcm1hbDogJGNvbG9yLXRleHQgIWRlZmF1bHQ7XG4kY29sb3ItY2hlY2tib3gtaWNvbjogJGNvbG9yLXdoaXRlICFkZWZhdWx0OyAvLyBjaGVja2JveCBjb2xvclxuJGNvbG9yLWZvcm0tY2hlY2stYm9yZGVyOiAjZTBlMGUwICFkZWZhdWx0OyAvLyBjaGVja2JveCBhbmQgcmFkaW8gYm9yZGVyXG4kY29sb3ItZm9ybS1hY3RpdmU6ICRjb2xvci1tYWluICFkZWZhdWx0O1xuJGNvbG9yLWZvcm0tZGFyazogI2UwZTBlMDsgLy8gdXNlIGluIHNlYXJjaCBib3ggb24gaGVhZGVyXG4kY29sb3ItYmctZm9ybTogJGNvbG9yLXdoaXRlO1xuJGNvbG9yLWJnLWZvcm0tZGFyazogI2UwZTBlMDtcblxuXG4vLyBidG46XG4kbmV1eC11aS1idG4tLXNtOjMwcHg7XG5cbi8vXG4kc3BhY2UtbmI6IDMwcHg7XG4kc3BhY2UtcGFkOiAzMHB4O1xuJHNwYWNlLW1vYmlsZTogMjBweDtcblxuLy8gbGF5b3V0OiDlhafpoIF0aXRsZSDlt6bplpPot51cbiRzcGFjZS1pbnBhZ2UtdGl0bGUtbGVmdDogMTBweDtcbiRicmVhZGNydW1iLWFycm93LWNvbG9yOiAjYmJiOyAvLyDpurXljIXlsZHnrq3poK3poY/oibLlkIznj77ooYzlrpjntrJcblxuJGJhbm5lci1zbGlkZXItaGVpZ2h0OjU1MHB4O1xuJGJhbm5lci1zbGlkZXItaGVpZ2h0LW1iOjMxMHB4OyIsIi5mbGV4LWNlbnRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkLWxpbWl0LWxpbmVUeXBle1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnc3R5bGUtaW1wb3J0JztcbiRoYW1idXJnZXItYmFyLXdpZHRoOiAxMDAlO1xuJGhhbWJ1cmdlci1iYXItd2lkdGgtYW5pOjgwJTtcbiRoYW1idXJnZXItYmFyLWhlaWdodDogNHB4O1xuJGhhbWJ1cmdlci1iYXItc3BhY2luZzogMTBweDtcbiRuYXYtd2lkdGg6MTAwJTtcbiRtZW51LWxpbmstd2lkdGg6NDBweDtcbiRtZW51LWxpbmstcGFkZGluZzoxMHB4O1xuJGhhbWJ1cmdlci1hbmkgOiAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XG5cbi51aS1uYXYwMDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyB3aWR0aDogJG5hdi13aWR0aDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIG1pbi13aWR0aDogY2FsYygjeyRtZW51LWxpbmstd2lkdGh9ICsgKCN7JG1lbnUtbGluay1wYWRkaW5nfSAqIDIpKTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LXN0eWxlMTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXBhZCkge1xuICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgfVxuXG4gICAgJl9tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiRzY3JlZW4tc20tdGhhbi1wYWQpIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLm1lbnVfaGFtYnVyZ2VyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJGhhbWJ1cmdlci1hbmk7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiRzY3JlZW4tc20tdGhhbi1wYWQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpbmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRoYW1idXJnZXItYmFyLWhlaWdodDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRoYW1idXJnZXItYmFyLWhlaWdodDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTsgLy/liJ3lp4vljJZtZW51X2hhbWJ1cmdlcueahHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAuMnMgdHJhbnNmb3JtIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAkaGFtYnVyZ2VyLWFuaTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICAgICAgICAgICAgICAvLyAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG5cbiAgICAgICAgICAgICAgICAvLyAubGluZTpudGgtY2hpbGQoMSksXG4gICAgICAgICAgICAgICAgLy8gLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxpbmU6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubGluZTpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51X2NoYXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1icm93bi0wMTtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6JHNjcmVlbi1zbS10aGFuLXBhZCkge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHN3aXRjaFN0YXRlIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xuICAgIH1cbn1cblxuLy8gaGFtYnVyZ2VyIHN0eWxlIDFcbi8vIC5tZW51X2hhbWJ1cmdlciB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogJGhhbWJ1cmdlci1iYXItaGVpZ2h0O1xuLy8gICAgIHdpZHRoOiAkaGFtYnVyZ2VyLWJhci13aWR0aDtcbi8vICAgICBoZWlnaHQ6ICRoYW1idXJnZXItYmFyLWhlaWdodDtcbi8vICAgICBtYXgtd2lkdGg6IDQwcHg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkaGFtYnVyZ2VyLWJhci1zcGFjaW5nKTtcbi8vICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnJvd24tMDE7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4vLyAgICAgJjpiZWZvcmUsXG4vLyAgICAgJjphZnRlciB7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRoYW1idXJnZXItYmFyLWhlaWdodDtcbi8vICAgICAgICAgd2lkdGg6ICRoYW1idXJnZXItYmFyLXdpZHRoO1xuLy8gICAgICAgICBoZWlnaHQ6ICRoYW1idXJnZXItYmFyLWhlaWdodDtcbi8vICAgICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICBsZWZ0OiAwO1xuLy8gICAgICAgICByaWdodDogYXV0bztcbi8vICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJyb3duLTAxO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuLy8gICAgIH1cblxuLy8gICAgICY6YmVmb3JlIHtcbi8vICAgICAgICAgYm90dG9tOiAkaGFtYnVyZ2VyLWJhci1zcGFjaW5nO1xuLy8gICAgIH1cblxuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICB0b3A6ICRoYW1idXJnZXItYmFyLXNwYWNpbmc7XG4vLyAgICAgfVxuXG4vLyAgICAgJi5hY3RpdmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnJvd24tMDE7XG5cbi8vICAgICAgICAgJjpiZWZvcmUsXG4vLyAgICAgICAgICY6YWZ0ZXIge1xuLy8gICAgICAgICAgICAgLy8gd2lkdGg6ICRoYW1idXJnZXItYmFyLXdpZHRoLWFuaTtcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAmOmFmdGVyIHtcbi8vICAgICAgICAgICAgIHRvcDogN3B4O1xuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgJjpiZWZvcmUge1xuLy8gICAgICAgICAgICAgYm90dG9tOiA3cHg7XG4vLyAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-nav001/ui-nav001.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-nav001/ui-nav001.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UiNav001Component */

  /***/
  function srcAppUiCustomizeComponentUiNav001UiNav001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiNav001Component", function () {
      return UiNav001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiNav001Component = class UiNav001Component {
      constructor() {}

      set isClickMenu(isClickMenu) {
        this._isClickMenu = isClickMenu;
      }

      get isClickMenu() {
        return this._isClickMenu;
      }

      set menuChars(menuChars) {
        this._menuChars = menuChars;
      }

      get menuChars() {
        return this._menuChars;
      }

      ngOnInit() {}

      handelHambuger() {
        console.log("ClickMenu", this._isClickMenu);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiNav001Component.prototype, "isClickMenu", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiNav001Component.prototype, "menuChars", null);
    UiNav001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-nav001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-nav001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-nav001/ui-nav001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-nav001.component.scss */
      "./src/app/ui-customize/component/ui-nav001/ui-nav001.component.scss")).default]
    })], UiNav001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-slider001/ui-slider001.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-slider001/ui-slider001.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiSlider001UiSlider001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top;-webkit-transition:.2s transform,.2s top,.2s -webkit-transform;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left;-webkit-transition:.2s transform,.2s left,.2s -webkit-transform;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right;-webkit-transition:.2s transform,.2s right,.2s -webkit-transform;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\n.ui-slider001 {\n  height: 100%;\n  width: 100%;\n}\n.ui-slider001 .slider-inner {\n  width: 100%;\n}\n.ui-slider001 .swiper-button-prev {\n  background-image: url('back.svg');\n}\n.ui-slider001 .swiper-button-next {\n  background-image: url('next.svg');\n}\n@media (max-width: 767px) {\n  .ui-slider001 .swiper-button-prev, .ui-slider001 .swiper-button-next {\n    display: none;\n  }\n}\n.ui-slider001 .swiper-pagination-bullets {\n  bottom: 20px;\n}\n@media (max-width: 768px) {\n  .ui-slider001 .swiper-pagination-bullets {\n    bottom: 10px;\n  }\n}\n.ui-slider001 .swiper-pagination-bullet-active {\n  background: #4FBA6F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1zbGlkZXIwMDEvdWktc2xpZGVyMDAxLmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIubWluLmNzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9sYXlvdXQvX2xheW91dC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2hlbHBlci9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL19leHRlbmQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLXNsaWRlcjAwMS91aS1zbGlkZXIwMDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7O0VBVUU7QUFDRixrQkFBa0IsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUztBQUFDLDJDQUEyQyxVQUFVO0FBQUMsMkNBQTJDLDJCQUEyQixDQUFDLDRCQUE0QixDQUF5RCxxQkFBcUI7QUFBQyxnQkFBZ0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQTBDLFlBQVksQ0FBQyw2Q0FBNkMsQ0FBQyxxQ0FBcUMsQ0FBa0MsNkJBQTZCLENBQTdCLGdEQUE2QixDQUFDLCtDQUErQyxDQUFnQyxzQkFBc0I7QUFBQyx3REFBd0Qsb0NBQW9DLENBQUMsNEJBQTRCO0FBQUMsMkNBQXFGLGNBQWM7QUFBQyw0Q0FBNEMsMkNBQTJDLENBQXdDLG1DQUFtQyxDQUFDLGFBQWE7QUFBQyxjQUF3RCxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyw2Q0FBNkMsQ0FBQyxxQ0FBcUMsQ0FBa0MsNkJBQTZCLENBQTdCLGdEQUE2QixDQUFDLCtDQUErQztBQUFDLDhCQUE4QixpQkFBaUI7QUFBQyx3RUFBd0UsV0FBVztBQUFDLDZDQUE2Qyx1QkFBdUIsQ0FBcUQsc0JBQXNCLENBQUMsb0RBQW9ELENBQUMsNENBQTRDLENBQXlDLG9DQUFvQyxDQUFDLHNEQUFzRDtBQUFDLHFCQUFxQiwwQkFBMEIsQ0FBQyxrQkFBa0I7QUFBQywrU0FBK1MsbUNBQW1DLENBQUMsMkJBQTJCO0FBQUMsOExBQThMLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVO0FBQUMsK0NBQXdTLG9HQUFxRSxDQUFyRSxzRUFBc0U7QUFBQyxnREFBdVMsb0dBQXNFLENBQXRFLHVFQUF1RTtBQUFDLDhDQUEyUyxzR0FBb0UsQ0FBcEUscUVBQXFFO0FBQUMsaURBQXdTLHNHQUF1RSxDQUF2RSx3RUFBd0U7QUFBQyxrRkFBeUcsa0JBQWtCO0FBQUMsOEVBQXFHLGtCQUFrQjtBQUFDLHdDQUF3QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLDBCQUEwQixDQUFDLDJCQUEyQjtBQUFDLHNGQUFzRixXQUFXLENBQUMsV0FBVyxDQUFDLG1CQUFtQjtBQUFDLDhEQUE4RCxtUkFBbVIsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLDhEQUE4RCxtUkFBbVIsQ0FBQyxVQUFVLENBQUMsU0FBUztBQUFDLHNHQUFzRyxtUkFBbVI7QUFBQyxzR0FBc0csbVJBQW1SO0FBQUMsc0dBQXNHLG1SQUFtUjtBQUFDLHNHQUFzRyxtUkFBbVI7QUFBQyxvQkFBb0IsWUFBWTtBQUFDLG1CQUFtQixpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBMkIsc0JBQXNCLENBQUMsb0NBQW9DLENBQUMsNEJBQTRCLENBQUMsVUFBVTtBQUFDLDRDQUE0QyxTQUFTO0FBQUMsOEdBQThHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUFDLG1DQUFtQyxlQUFlLENBQUMsV0FBVztBQUFDLDZEQUE2RCw0QkFBNEIsQ0FBMEIsb0JBQW9CLENBQUMsaUJBQWlCO0FBQUMsb0VBQW9FLDBCQUEwQixDQUF3QixrQkFBa0I7QUFBQyx5RUFBeUUsMEJBQTBCLENBQXdCLGtCQUFrQjtBQUFDLHlFQUF5RSw0QkFBNEIsQ0FBMEIsb0JBQW9CO0FBQUMsOEVBQThFLDRCQUE0QixDQUEwQixvQkFBb0I7QUFBQyx5RUFBeUUsNEJBQTRCLENBQTBCLG9CQUFvQjtBQUFDLDhFQUE4RSw0QkFBNEIsQ0FBMEIsb0JBQW9CO0FBQUMsMEJBQTBCLFNBQVMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQVU7QUFBQyxnQ0FBZ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQXlCLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlO0FBQUMsdURBQXVELGNBQWM7QUFBQyxpQ0FBaUMsU0FBUyxDQUFDLGtCQUFrQjtBQUFDLHNEQUFzRCxVQUFVLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLCtCQUErQjtBQUFDLGdGQUFnRixZQUFZLENBQUMsYUFBYTtBQUFDLHdGQUF3RixPQUFPLENBQUMsa0NBQWtDLENBQWdDLDBCQUEwQixDQUFDLFNBQVM7QUFBQyxrSEFBa0gsb0JBQW9CLENBQUMsZ0RBQWdELENBQUMsd0NBQXdDLENBQXFDLHdDQUFnQyxDQUFoQyxnQ0FBZ0MsQ0FBQyw4REFBcUQsQ0FBckQsc0RBQXNEO0FBQUMsa0ZBQWtGLFlBQVk7QUFBQywwRkFBMEYsUUFBUSxDQUFDLGtDQUFrQyxDQUFnQywwQkFBMEIsQ0FBQyxrQkFBa0I7QUFBQyxvSEFBb0gsaURBQWlELENBQUMseUNBQXlDLENBQXNDLHlDQUFpQyxDQUFqQyxpQ0FBaUMsQ0FBQywrREFBc0QsQ0FBdEQsdURBQXVEO0FBQUMsK0dBQStHLGtEQUFrRCxDQUFDLDBDQUEwQyxDQUF1QywwQ0FBa0MsQ0FBbEMsa0NBQWtDLENBQUMsZ0VBQXVELENBQXZELHdEQUF3RDtBQUFDLCtCQUErQiwwQkFBMEIsQ0FBQyxpQkFBaUI7QUFBQyxtRUFBbUUsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUF3QixrQkFBa0IsQ0FBQyxpQ0FBaUMsQ0FBK0IseUJBQXlCO0FBQUMseUZBQXlGLGtDQUFrQyxDQUFnQywwQkFBMEI7QUFBQyw2SkFBNkosVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSztBQUFDLDZKQUE2SixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsMERBQTBELGVBQWU7QUFBQyx1REFBdUQsZ0NBQWdDO0FBQUMsMkZBQTJGLGVBQWU7QUFBQywwREFBMEQsZUFBZTtBQUFDLHVEQUF1RCwwQkFBMEI7QUFBQywyRkFBMkYsZUFBZTtBQUFDLHdCQUF3QixZQUFZO0FBQUMsa0JBQWtCLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QjtBQUFDLCtDQUErQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLHVCQUF1QixXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsOEJBQThCLFdBQVc7QUFBQyx1QkFBdUIsWUFBWTtBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUEwQyxZQUFZLENBQUMsdUJBQXVCLENBQXFELHNCQUFzQixDQUFDLHdCQUF3QixDQUFrRCxrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxvRkFBb0YsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0I7QUFBQyxxQkFBcUIsV0FBVztBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUEwQixvQkFBb0IsQ0FBQyxpRUFBaUUsQ0FBQyx5REFBeUQ7QUFBQyw2QkFBNkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHc3Q0FBdzdDLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCO0FBQUMsbUNBQW1DLHE3Q0FBcTdDO0FBQUMseUNBQXlDLEtBQUssZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7QUFBQyxpQ0FBaUMsS0FBSyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQztBQUFDLHVDQUF1QyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxhQUFhO0FBQUMsZ0VBQWdFLDJDQUEyQyxDQUF3QyxtQ0FBbUM7QUFBQyxxQ0FBcUMsbUJBQW1CLENBQUMsbUNBQW1DLENBQWdDLDJCQUEyQjtBQUFDLG1EQUFtRCxtQkFBbUI7QUFBQyw2R0FBNkcsbUJBQW1CO0FBQUMsdUJBQXVCLGdCQUFnQjtBQUFDLHFDQUFxQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsNEJBQTRCLENBQTBCLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxXQUFXO0FBQUMsbURBQW1ELG1CQUFtQjtBQUFDLDBEQUEwRCwrQkFBK0IsQ0FBNkIsdUJBQXVCO0FBQUMsNkdBQTZHLG1CQUFtQjtBQUFDLHdMQUF3TCxtQkFBbUIsQ0FBQyxrQkFBa0I7QUFBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjtBQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO0FBQUMsdUJBQXVCLGdCQUFnQjtBQUFDLHFDQUFxQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTO0FBQUMsbURBQW1ELG1CQUFtQjtBQUFDLDZHQUE2RyxtQkFBbUI7QUFBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjtBQUFDLDRDQUE0QyxzQkFBc0I7QUNYNWttQjtFQUNFLFlBQUE7RUFDQSxxQkNnRGlCO0FIN0NuQjtBRUVBO0VBQ0Usd0JBQUE7QUZDRjtBRUtBO0VBQ0UscUJBQUE7RUFDQSxlQzJDYTtBSDdDZjtBRUlFO0VBQ0Usa0JBUmM7QUZNbEI7QUVJSTtFQUNFLGlCQUFBO0FGRk47QUVPSTtFQUNFLGlCQUFBO0FGTE47QUVTRTtFQUNFLHVCQUFBO0FGUEo7QUVXQTtFQUNFLG1CQ29FYTtFRG5FYixjQ3ZCYztFRHdCZCxtQkNRYztBSGhCaEI7QUVVQTtFQUNFLGtCQ2tFYztFRGpFZCxjQ3RCYTtBSGVmO0FFVUE7RUFDRSw4QkFBQTtBRlBGO0FFU0U7RUFDRSxZQUFBO0VBRUEsY0NyQ1k7RURzQ1osb0JBQUE7QUZSSjtBRVlBO0VBQ0UsOEJBQUE7QUZURjtBRVdFO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqRFk7RURrRFosa0JDMkNZO0VEMUNaLG9CQUFBO0VBQ0EsY0FBQTtBRlRKO0FFY0E7RUFDRSxnQkFBQTtBRlhGO0FFY0E7RUFDRSxnQkFBQTtBRlhGO0FFaUJBO0VBQ0Usa0JDb0JhO0VEbkJiLGNDaEZjO0VEaUZkLG1CQ3ZDYztFRHdDZCx3QkFBQTtBRmRGO0FFZ0JBO0VBQ0ksZUNoQ1c7RURpQ1gsY0N0RVc7RUR1RVgscUJDM0NlO0FIOEJuQjtBRWNJO0VBQ0UsaUJBQUE7QUZaTjtBRWlCQTtFQUNFLFVBQUE7RUFDQSx5QkNoR2M7QUhrRmhCO0FFaUJBO0VBQ0UseUJDekZjO0FIMkVoQjtBRTBCQTtFQUNFLDhCQ2pIYztFRGtIZCw2QkN2R2M7RUR3R2Qsb0NBQUE7RUFDQSxrQ0NwSGM7RURxSGQsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQ3ZIYztFRHdIZCw2QkM3R2M7QUhzRmhCO0FJdkdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUowR0Y7QUl2R0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBSjBHRjtBS2pIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FMb0hKO0FLbEhJO0VBRUksV0FBQTtBTG1IUjtBS2hISTtFQUNJLGlDQUFBO0FMa0hSO0FLL0dJO0VBQ0ksaUNBQUE7QUxpSFI7QUs5R1E7RUFESjtJQUVRLGFBQUE7RUxpSFY7QUFDRjtBSzlHSTtFQUNJLFlBQUE7QUxnSFI7QUs5R1E7RUFISjtJQUlRLFlBQUE7RUxpSFY7QUFDRjtBSzlHSTtFQUNJLG1CQUFBO0FMZ0hSIiwiZmlsZSI6InNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS1zbGlkZXIwMDEvdWktc2xpZGVyMDAxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCAnfnN3aXBlci9kaXN0L2Nzcy9zd2lwZXIubWluLmNzcyc7XG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5xdXF1MjAyMC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5bY2xhc3NePWxheW91dC1saXN0LV0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3MqPWNoaWxkXSArIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5bY2xhc3NePWxheW91dC1saXN0LV0gLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHg7XG59XG5cbi5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4ubGF5b3V0LWxpc3Qtbm90ZTAwMSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICM1YTZhNzE7XG59XG5cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG59XG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pemXCI7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmxheW91dC1saXN0LXN0eWxlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xufVxuLmxheW91dC1saXN0LXN0eWxlMDAxIFtjbGFzcyo9Y2hpbGRdOmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzdHlsZTAwMS1udW1iZXI7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoc3R5bGUwMDEtbnVtYmVyKSBcIi5cIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTk2ZjYyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmxheW91dC1ibG9jazAwMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sYXlvdXQtYmxvY2swMDIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubGF5b3V0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI2ZmZmZmMztcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xufVxuXG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzVhNmE3MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmxheW91dC1wb2ludC1zdHlsZTAwMSArIC5sYXlvdXQtcG9pbnQtc3R5bGUwMDEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnN0eWxlX3Njcm9sbGJhcl8wMDEsIGJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYzO1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSwgYm9keSAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTY1NjM7XG59XG5cbmJvZHkge1xuICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAjN2E2NTYzO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICNmZmZmZjM7XG4gIHNjcm9sbGJhci1zaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItZGFya3NoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICM3YTY1NjM7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZC1saW1pdC1saW5lVHlwZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbn1cblxuLnVpLXNsaWRlcjAwMSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4udWktc2xpZGVyMDAxIC5zbGlkZXItaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi51aS1zbGlkZXIwMDEgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2suc3ZnKTtcbn1cbi51aS1zbGlkZXIwMDEgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL25leHQuc3ZnKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWktc2xpZGVyMDAxIC5zd2lwZXItYnV0dG9uLXByZXYsIC51aS1zbGlkZXIwMDEgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnVpLXNsaWRlcjAwMSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudWktc2xpZGVyMDAxIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cbn1cbi51aS1zbGlkZXIwMDEgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNEZCQTZGO1xufSIsIi8qKlxuICogU3dpcGVyIDQuNS4xXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxOSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBTZXB0ZW1iZXIgMTMsIDIwMTlcbiAqL1xuLnN3aXBlci1jb250YWluZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItbm8tZmxleGJveCAuc3dpcGVyLXNsaWRle2Zsb2F0OmxlZnR9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LnN3aXBlci1jb250YWluZXItbXVsdGlyb3c+LnN3aXBlci13cmFwcGVyey13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDttYXJnaW46MCBhdXRvfS5zd2lwZXItc2xpZGV7LXdlYmtpdC1mbGV4LXNocmluazowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItM2R7LXdlYmtpdC1wZXJzcGVjdGl2ZToxMjAwcHg7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixyaWdodCB0b3AsbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwwKSkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWwsLnN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWw+LnN3aXBlci13cmFwcGVyey1tcy10b3VjaC1hY3Rpb246cGFuLXg7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1idXR0b24tcHJldntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3dpZHRoOjI3cHg7aGVpZ2h0OjQ0cHg7bWFyZ2luLXRvcDotMjJweDt6LWluZGV4OjEwO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtc2l6ZToyN3B4IDQ0cHg7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCwuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWR7b3BhY2l0eTouMzU7Y3Vyc29yOmF1dG87cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWJ1dHRvbi1wcmV2LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0e2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcIik7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpO3JpZ2h0OjEwcHg7bGVmdDphdXRvfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRle2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyM2ZmZmZmZiclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFja3tiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDAwMDAnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjouM3Mgb3BhY2l0eTstby10cmFuc2l0aW9uOi4zcyBvcGFjaXR5O3RyYW5zaXRpb246LjNzIG9wYWNpdHk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6OHB4O2hlaWdodDo4cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czoxMDAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4yfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kOiMwMDdhZmZ9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjZweCAwO2Rpc3BsYXk6YmxvY2t9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6OHB4fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjouMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uOi4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wLC4ycyAtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgNHB4fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbjouMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnQsLjJzIC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjouMnMgcmlnaHQsLjJzIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb246LjJzIHJpZ2h0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodCwuMnMgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDdhZmY7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9LnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7d2lkdGg6NHB4O2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjI1KX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNre2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDB9LnN3aXBlci1wYWdpbmF0aW9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItc2Nyb2xsYmFye2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKX0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MSU7Ym90dG9tOjNweDt6LWluZGV4OjUwO2hlaWdodDo1cHg7d2lkdGg6OTglfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItc2Nyb2xsYmFye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjNweDt0b3A6MSU7ei1pbmRleDo1MDt3aWR0aDo1cHg7aGVpZ2h0Ojk4JX0uc3dpcGVyLXNjcm9sbGJhci1kcmFne2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtib3JkZXItcmFkaXVzOjEwcHg7bGVmdDowO3RvcDowfS5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFne2N1cnNvcjptb3ZlfS5zd2lwZXItc2Nyb2xsYmFyLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItem9vbS1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItem9vbS1jb250YWluZXI+Y2FudmFzLC5zd2lwZXItem9vbS1jb250YWluZXI+aW1nLC5zd2lwZXItem9vbS1jb250YWluZXI+c3Zne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufS5zd2lwZXItc2xpZGUtem9vbWVke2N1cnNvcjptb3ZlfS5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7d2lkdGg6NDJweDtoZWlnaHQ6NDJweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi1sZWZ0Oi0yMXB4O21hcmdpbi10b3A6LTIxcHg7ei1pbmRleDoxMDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJTstd2Via2l0LWFuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZTthbmltYXRpb246c3dpcGVyLXByZWxvYWRlci1zcGluIDFzIHN0ZXBzKDEyLGVuZCkgaW5maW5pdGV9LnN3aXBlci1sYXp5LXByZWxvYWRlcjphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6Jyc7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyMzZjNmM2YyclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZTphZnRlcntiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiKX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbnsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19LnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb257cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3otaW5kZXg6LTEwMDB9LnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eX0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmV7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3otaW5kZXg6MTt2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MTAwJSAwO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQrLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldntwb2ludGVyLWV2ZW50czphdXRvO3Zpc2liaWxpdHk6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjY7LXdlYmtpdC1maWx0ZXI6Ymx1cig1MHB4KTtmaWx0ZXI6Ymx1cig1MHB4KTt6LWluZGV4OjB9LnN3aXBlci1jb250YWluZXItZmxpcHtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItY292ZXJmbG93IC5zd2lwZXItd3JhcHBlcnstbXMtcGVyc3BlY3RpdmU6MTIwMHB4fSIsImJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1ub3JtYWw7XG4gIDtcblxufVxuXG4ucXVxdTIwMjAtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuJGxheW91dC1saXN0LWxlZnQ6MjBweDtcblxuLy/lhbHnlKhsYXlvdXQgbGlzdCB0ZXh0IHN0eWxlXG5bY2xhc3NePVwibGF5b3V0LWxpc3QtXCJdIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDg7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICRsYXlvdXQtbGlzdC1sZWZ0O1xuXG4gICAgJitbY2xhc3MqPVwiY2hpbGRcIl0ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgW2NsYXNzXj1cImxheW91dC1saXN0LVwiXSB7XG4gICAgW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYXlvdXQtbGlzdC10aXRsZTAwMSB7XG4gICAgcGFkZGluZzogJGxheW91dC1saXN0LWxlZnQgJGxheW91dC1saXN0LWxlZnQgLSAxMHB4ICRsYXlvdXQtbGlzdC1sZWZ0IC0gMTBweDtcbiAgfVxufVxuXG4ubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDc7XG4gIGNvbG9yOiAkY29sb3ItZ3JlZW4tMDI7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1zdWI7XG59XG4ubGF5b3V0LWxpc3Qtbm90ZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gIGNvbG9yOiAkY29sb3ItZ3JleS0wMVxufVxuXG4ubGF5b3V0LWxpc3QtY2lyY2xlMDAxIHtcbiAgY291bnRlci1yZXNldDogc3R5bGUwMDEtbnVtYmVyO1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyNUU2XCI7XG4gICAgLy8gZm9udC1zaXplOiAkZm9udC1zaXplLWgxMDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG5cbi5sYXlvdXQtbGlzdC1zdHlsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl06YmVmb3JlIHtcbiAgICBjb3VudGVyLWluY3JlbWVudDogc3R5bGUwMDEtbnVtYmVyO1xuICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3R5bGUwMDEtbnVtYmVyKSBcIi5cIjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cblxuLy/lhbHnlKhsYXlvdXQgYmxvY2tcbi5sYXlvdXQtYmxvY2swMDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGF5b3V0LWJsb2NrMDAyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLy8gZW5kIC0g5YWx55SobGF5b3V0IGJsb2NrXG5cblxuLmxheW91dC10aXRsZTAwMSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNjtcbiAgY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgbGV0dGVyLXNwYWNpbmc6ICRmb250LXNwYWNlLXN1YjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xufVxuLmxheW91dC1wb2ludC1zdHlsZTAwMXtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDg7XG4gICAgY29sb3I6ICRjb2xvci1ncmV5LTAxO1xuICAgIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1ub3JtYWw7XG4gICAgKy5sYXlvdXQtcG9pbnQtc3R5bGUwMDF7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG59XG5cbi8vIHN0eWxlX3Njcm9sbGJhclxuLnN0eWxlX3Njcm9sbGJhcl8wMDEge1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG59XG5cbi5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xufVxuXG5cbmJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBAZXh0ZW5kIC5zdHlsZV9zY3JvbGxiYXJfMDAxICFvcHRpb25hbDtcbn1cblxuYm9keSAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIEBleHRlbmQgLnN0eWxlX3Njcm9sbGJhcl90aHVtYl8wMDEgIW9wdGlvbmFsO1xufVxuXG5ib2R5IHtcbiAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWhpZ2hsaWdodC1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6IHRyYW5zcGFyZW50O1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLWJhc2UtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbn0iLCIkY2FyZC1yYWRpdXM6IDJyZW07XG4kY2FyZC1yYWRpdXMtMDI6IDEwMCU7XG5cblxuLy8wMS03LiBjb2xvciBjb21tb24gdXNlXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3Itd2hpdGUtMDE6I2ZmZmZmMztcblxuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWJsYWNrLTAxOiMyMTIxMjE7XG4kY29sb3ItYmxhY2stMDI6IzA2MTgyNjtcblxuJGNvbG9yLXJlZC0wMTogI2Y0ZDZjYztcblxuJGNvbG9yLWJnLW1kbzojZjVmNWY1O1xuJGNvbG9yLWdyZWVuLTAxOiNBQkQwQ0U7XG4kY29sb3ItZ3JlZW4tMDI6IzU5NmY2MjtcbiRjb2xvci1icm93bi0wMTojN2E2NTYzO1xuXG4kY29sb3ItdGV4dDogJGNvbG9yLWJsYWNrLTAyO1xuJGNvbG9yLW1haW46ICRjb2xvci1ncmVlbi0wMTtcbi8vICRjb2xvci1zdWI6ICRjb2xvci1waW5rLTAxO1xuJGNvbG9yLWdyZXktMDE6IzVhNmE3MTtcbiRjb2xvci1ncmV5LTAyOiNkOGQ4ZDg7XG4kY29sb3ItZ3JleS0wMzojNGE0YTRhO1xuJGNvbG9yLWdyZXktMDQ6Izc1NzU3NTtcblxuXG5cbiRzaGFkb3ctc3R5bGUxOjAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuJHNoYWRvdy1zdHlsZTI6MCAycHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG5cbi8vID09PT09IDAyIGZvbnQgc2V0dGluZyA9PT09PT1cblxuLy8gMDItMSBmb250IGJhc2ljIHNldHRpbmdcbiRmb250LWZhbWlseTogXG5cIuaWh+aziempm+ato+m7kVwiLFxuXCJXZW5RdWFuWWkgWmVuIEhlaVwiLFxuXCLomIvmlrkt57mBXCIsXG5cIlBpbmdGYW5nIFRDXCIsXG5cIum7kemrlC3nuYFcIixcblwiSGVpdGkgVENcIixcblwi5YS36buRIFByb1wiLFxuXCJMaUhlaSBQcm9cIixcblwi5b6u6Luf5q2j6buR6auUXCIsXG5cIk1pY3Jvc29mdCBKaGVuZ0hlaVwiLFxuc2Fucy1zZXJpZjtcbiRmb250LWxpbmUtaGVpZ2h0OiAyOHB4O1xuJGZvbnQtc3BhY2Utc3ViOjNweDtcbiRmb250LXNwYWNlLW1haW46NXB4O1xuJGZvbnQtc3BhY2Utbm9ybWFsOjAuNXB4O1xuXG4kZm9udC1saW5lLWhlaWdodC1tZDogMS41O1xuJGZvbnQtbGluZS1oZWlnaHQtbGc6ICRmb250LWxpbmUtaGVpZ2h0LW1kICogMjtcblxuLy8gMDItMiBmb250IGJhc2UgIHdoZW4gdGV4dCBzbSA6IGJhc2UgPSAxNiA7IHRleHQgbWQgOiBiYXNlID0gMTg7IHRleHQgbGcgOiBiYXNlID0gMjBcbiRmb250LWJhc2UtbnVtOiAxNjtcbiRmb250LWJhc2UtbnVtLW1kOiAxODtcbiRmb250LWJhc2UtbnVtLWxnOiAyMDtcbiRmb250LXNpemUtbWQ6IDFyZW07IC8vMTZweFxuXG4vLyAwMi0zLmEgdGl0bGUgZm9udCBzaXplXG4kZm9udC1zaXplLWxnOjQ4cHg7XG4kZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKigzNi8kZm9udC1iYXNlLW51bSk7IC8vMzZweFxuJGZvbnQtc2l6ZS1oMzogJGZvbnQtc2l6ZS1tZCooMjgvJGZvbnQtYmFzZS1udW0pOyAvLzI4cHg7XG4kZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bSk7IC8vMjZweDtcbiRmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKTsgLy8yNHB4O1xuXG4vLyAwMi0zLmIgc2V0dGluZyBmb250IHNpemUgICggaGFzIGl0IG93biBydWxlIGFib3V0IHNjYWxlIGZvbiBzaXplLCBub3QgZm9sbG93IHRoZSBydWxlIG9mIGJhc2UgcmVtKVxuJGZvbnQtc2l6ZS1jb25maWc6KGZvbnQtc2l6ZV9sZyA6KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0tbGcpLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bS1sZyksIC8vMjZweFxuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0tbGcpIC8vMjRweFxuICApLFxuICBmb250LXNpemVfbWQgOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtLW1kKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0tbWQpLCAvLyAyNnB4XG4gICAgZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSkgLy8gdXNlIHNtIHJhdGlvIHRvIHRoZSBiYXNlXG4gICksXG4gIGZvbnQtc2l6ZV9zbTooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bSksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtKSwgLy8yNnB4O1xuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pIC8vMjRweDtcbiAgKSk7XG5cbkBmdW5jdGlvbiBnZXQtZm9udC1zaXplKCRrZXksICR0eXBlOidmb250LXNpemVfc20nKSB7XG5cbiAgQGVhY2ggJGZvbnQtbmFtZSxcbiAgJGZvbnQtc2l6ZSBpbiBtYXAtZ2V0KCRmb250LXNpemUtY29uZmlnLCAkdHlwZSkge1xuICAgIEBpZigka2V5PT0kZm9udC1uYW1lKSB7XG4gICAgICBAcmV0dXJuICRmb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBnZXQtZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiBnZXQtZm9udC1zaXplKCRmb250LXNpemUsICdmb250LXNpemVfc20nKTtcblxuICAuZm9udC1zaXplX2xnICYge1xuICAgIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX2xnJyk7XG4gIH1cblxuICAuZm9udC1zaXplX21kICYge1xuICAgIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX21kJyk7XG4gIH1cbn1cblxuLy8gMDItNCBmb250IHNpemUgbm9ybWFsXG4kZm9udC1zaXplLWg2OiAkZm9udC1zaXplLW1kKigyMC8kZm9udC1iYXNlLW51bSk7IC8vMjBweFxuJGZvbnQtc2l6ZS1oNzogJGZvbnQtc2l6ZS1tZCooMTgvJGZvbnQtYmFzZS1udW0pOyAvLzE4cHhcbiRmb250LXNpemUtaDg6ICRmb250LXNpemUtbWQ7IC8vIDE2cHhcbiRmb250LXNpemUtaDk6IDFyZW0gKiAoMTQvJGZvbnQtYmFzZS1udW0pOyAvLyAxNHB4XG4kZm9udC1zaXplLWgxMDogJGZvbnQtc2l6ZS1tZCAqKDEyLyRmb250LWJhc2UtbnVtKTsgLy8xMnB4XG5cblxuLy8gPT09PT09IDAzIHNjcmVlbiB3aWR0aCAgPT09PT09XG4kc2NyZWVuLWRlc2t0b3A6IDEyMDBweDtcbiRzY3JlZW4tc20tdGhhbi1kZXNrdG9wOiAxMTk5cHg7XG4kc2NyZWVuLXBhZC1wcm86IDEzNjZweDtcbiRzY3JlZW4tbGctdGhhbi1uYjogMTAyNXB4O1xuJHNjcmVlbi1uYjogMTAyNHB4O1xuJHNjcmVlbi1zbS10aGFuLW5iOiAxMDIzcHg7XG4kc2NyZWVuLWxnLXBhZDogOTkycHg7XG4kc2NyZWVuLWxnLXRoYW4tcGFkOiA3NjlweDtcbiRzY3JlZW4tcGFkOiA3NjhweDtcbiRzY3JlZW4tc20tdGhhbi1wYWQ6IDc2N3B4O1xuJHNjcmVlbi1sZy1tb2JpbGU6IDUwMHB4O1xuJHNjcmVlbi1tb2JpbGU6IDM3NXB4O1xuJHNjcmVlbi1zbS10aGFuLW1vYmlsZTogMzc0cHg7XG4kc2NyZWVuLXNtOiAzMjBweDtcblxuXG4vLyBsYXlvdXQgc2l6ZVxuXG4kd2QtbG9nby1tb2JpbGU6IDIwNHB4O1xuJGJvYXJkLXRpbWUtY2FyZC1oZWlnaHQ6IDIyMHB4O1xuJGJvYXJkLXRpbWUtY2FyZC13aWR0aDogMTM1cHg7XG5cblxuLy8gZm9ybSBzZXR0aW5nIGZyb20gQG5ldXgvdWlcbi8vIOihqOWWruWfuuacrOiuiuaVuFxuJGZvcm0taGVpZ2h0LXRleHRhcmVhOiA3NXB4O1xuXG4vLyBmb3JtIGNvbG9yXG4kY29sb3ItZm9ybS1lcnJvcjogI2U0NjAwOSAhZGVmYXVsdDtcbi8vJGNvbG9yLWZvcm0tZGlzYWJsZTogJGNvbG9yLWdyZXktZGFyayAhZGVmYXVsdDtcbiRjb2xvci1mb3JtLW5vcm1hbDogJGNvbG9yLXRleHQgIWRlZmF1bHQ7XG4kY29sb3ItY2hlY2tib3gtaWNvbjogJGNvbG9yLXdoaXRlICFkZWZhdWx0OyAvLyBjaGVja2JveCBjb2xvclxuJGNvbG9yLWZvcm0tY2hlY2stYm9yZGVyOiAjZTBlMGUwICFkZWZhdWx0OyAvLyBjaGVja2JveCBhbmQgcmFkaW8gYm9yZGVyXG4kY29sb3ItZm9ybS1hY3RpdmU6ICRjb2xvci1tYWluICFkZWZhdWx0O1xuJGNvbG9yLWZvcm0tZGFyazogI2UwZTBlMDsgLy8gdXNlIGluIHNlYXJjaCBib3ggb24gaGVhZGVyXG4kY29sb3ItYmctZm9ybTogJGNvbG9yLXdoaXRlO1xuJGNvbG9yLWJnLWZvcm0tZGFyazogI2UwZTBlMDtcblxuXG4vLyBidG46XG4kbmV1eC11aS1idG4tLXNtOjMwcHg7XG5cbi8vXG4kc3BhY2UtbmI6IDMwcHg7XG4kc3BhY2UtcGFkOiAzMHB4O1xuJHNwYWNlLW1vYmlsZTogMjBweDtcblxuLy8gbGF5b3V0OiDlhafpoIF0aXRsZSDlt6bplpPot51cbiRzcGFjZS1pbnBhZ2UtdGl0bGUtbGVmdDogMTBweDtcbiRicmVhZGNydW1iLWFycm93LWNvbG9yOiAjYmJiOyAvLyDpurXljIXlsZHnrq3poK3poY/oibLlkIznj77ooYzlrpjntrJcblxuJGJhbm5lci1zbGlkZXItaGVpZ2h0OjU1MHB4O1xuJGJhbm5lci1zbGlkZXItaGVpZ2h0LW1iOjMxMHB4OyIsIi5mbGV4LWNlbnRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkLWxpbWl0LWxpbmVUeXBle1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnc3R5bGUtaW1wb3J0JztcbkBpbXBvcnQgJ35zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MnO1xuXG4udWktc2xpZGVyMDAxIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuc2xpZGVyLWlubmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5zdmcpO1xuICAgIH1cblxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9uZXh0LnN2Zyk7XG4gICAgfVxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYgLCAuc3dpcGVyLWJ1dHRvbi1uZXh0e1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDokc2NyZWVuLXNtLXRoYW4tcGFkKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgICAgICBib3R0b206IDIwcHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6JHNjcmVlbi1wYWQpIHtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzRGQkE2RjtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-slider001/ui-slider001.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-slider001/ui-slider001.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UiSlider001Component */

  /***/
  function srcAppUiCustomizeComponentUiSlider001UiSlider001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiSlider001Component", function () {
      return UiSlider001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiSlider001Component = class UiSlider001Component {
      constructor() {}

      ngOnInit() {
        setTimeout(() => {
          this.createConfig();
        }, 1500);
      }

      createConfig() {
        this.config = {
          initialSlide: 0,
          direction: 'horizontal',
          keyboard: true,
          scrollbar: false,
          navigation: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          loop: true,
          simulateTouch: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          preloadImages: true,
          updateOnImagesReady: true,
          observer: true,
          observeSlideChildren: true,
          slidesPerView: 1
        };
      }

    };
    UiSlider001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-slider001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-slider001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-slider001/ui-slider001.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-slider001.component.scss */
      "./src/app/ui-customize/component/ui-slider001/ui-slider001.component.scss")).default]
    })], UiSlider001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-title001/ui-title001.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-title001/ui-title001.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiCustomizeComponentUiTitle001UiTitle001ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  width: 100vw;\n  letter-spacing: 0.5px;\n}\n.ququ2020-none {\n  display: none !important;\n}\n[class^=layout-list-] {\n  list-style-type: none;\n  font-size: 1rem;\n}\n[class^=layout-list-] [class*=child] {\n  padding-left: 20px;\n}\n[class^=layout-list-] [class*=child] + [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] [class^=layout-list-] [class*=child] {\n  padding-top: 10px;\n}\n[class^=layout-list-] .layout-list-title001 {\n  padding: 20px 10px 10px;\n}\n.layout-list-title001 {\n  font-size: 1.125rem;\n  color: #596f62;\n  letter-spacing: 3px;\n}\n.layout-list-note001 {\n  font-size: 0.75rem;\n  color: #5a6a71;\n}\n.layout-list-circle001 {\n  counter-reset: style001-number;\n}\n.layout-list-circle001 [class*=child]:before {\n  content: \"◦\";\n  color: #596f62;\n  margin-right: 0.5rem;\n}\n.layout-list-style001 {\n  counter-reset: style001-number;\n}\n.layout-list-style001 [class*=child]:before {\n  counter-increment: style001-number;\n  content: counter(style001-number) \".\";\n  font-weight: bold;\n  color: #596f62;\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  line-height: 1;\n}\n.layout-block001 {\n  margin-top: 30px;\n}\n.layout-block002 {\n  margin-top: 50px;\n}\n.layout-title001 {\n  font-size: 1.25rem;\n  color: #fffff3;\n  letter-spacing: 3px;\n  border-bottom: 3px solid;\n}\n.layout-point-style001 {\n  font-size: 1rem;\n  color: #5a6a71;\n  letter-spacing: 0.5px;\n}\n.layout-point-style001 + .layout-point-style001 {\n  padding-top: 10px;\n}\n.style_scrollbar_001, body *::-webkit-scrollbar {\n  width: 6px;\n  background-color: #fffff3;\n}\n.style_scrollbar_thumb_001, body *::-webkit-scrollbar-thumb {\n  background-color: #7a6563;\n}\nbody {\n  scrollbar-arrow-color: #fffff3;\n  scrollbar-face-color: #7a6563;\n  scrollbar-3dlight-color: transparent;\n  scrollbar-highlight-color: #fffff3;\n  scrollbar-shadow-color: transparent;\n  scrollbar-darkshadow-color: transparent;\n  scrollbar-track-color: #fffff3;\n  scrollbar-base-color: #7a6563;\n}\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.word-limit-lineType {\n  display: -webkit-box;\n  overflow: hidden;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n}\n.ui-title001 {\n  color: #fff;\n}\n.ui-title001 .sub-title {\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n.ui-title001 .main-title {\n  font-size: 1.75rem;\n  letter-spacing: 5px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS10aXRsZTAwMS91aS10aXRsZTAwMS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2Fzc2V0cy9zdHlsZS9sYXlvdXQvX2xheW91dC5zY3NzIiwiL1VzZXJzL3F1eXVuL015Q29kZS9xdXF1MjAyMC9zcmMvYXNzZXRzL3N0eWxlL2hlbHBlci9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvcXV5dW4vTXlDb2RlL3F1cXUyMDIwL3NyYy9hc3NldHMvc3R5bGUvaGVscGVyL19leHRlbmQuc2NzcyIsIi9Vc2Vycy9xdXl1bi9NeUNvZGUvcXVxdTIwMjAvc3JjL2FwcC91aS1jdXN0b21pemUvY29tcG9uZW50L3VpLXRpdGxlMDAxL3VpLXRpdGxlMDAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFlBQUE7RUFDQSxxQkNnRGlCO0FGOUNuQjtBQ0dBO0VBQ0Usd0JBQUE7QURBRjtBQ01BO0VBQ0UscUJBQUE7RUFDQSxlQzJDYTtBRjlDZjtBQ0tFO0VBQ0Usa0JBUmM7QURLbEI7QUNLSTtFQUNFLGlCQUFBO0FESE47QUNRSTtFQUNFLGlCQUFBO0FETk47QUNVRTtFQUNFLHVCQUFBO0FEUko7QUNZQTtFQUNFLG1CQ29FYTtFRG5FYixjQ3ZCYztFRHdCZCxtQkNRYztBRmpCaEI7QUNXQTtFQUNFLGtCQ2tFYztFRGpFZCxjQ3RCYTtBRmNmO0FDV0E7RUFDRSw4QkFBQTtBRFJGO0FDVUU7RUFDRSxZQUFBO0VBRUEsY0NyQ1k7RURzQ1osb0JBQUE7QURUSjtBQ2FBO0VBQ0UsOEJBQUE7QURWRjtBQ1lFO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqRFk7RURrRFosa0JDMkNZO0VEMUNaLG9CQUFBO0VBQ0EsY0FBQTtBRFZKO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDZUE7RUFDRSxnQkFBQTtBRFpGO0FDa0JBO0VBQ0Usa0JDb0JhO0VEbkJiLGNDaEZjO0VEaUZkLG1CQ3ZDYztFRHdDZCx3QkFBQTtBRGZGO0FDaUJBO0VBQ0ksZUNoQ1c7RURpQ1gsY0N0RVc7RUR1RVgscUJDM0NlO0FGNkJuQjtBQ2VJO0VBQ0UsaUJBQUE7QURiTjtBQ2tCQTtFQUNFLFVBQUE7RUFDQSx5QkNoR2M7QUZpRmhCO0FDa0JBO0VBQ0UseUJDekZjO0FGMEVoQjtBQzJCQTtFQUNFLDhCQ2pIYztFRGtIZCw2QkN2R2M7RUR3R2Qsb0NBQUE7RUFDQSxrQ0NwSGM7RURxSGQsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQ3ZIYztFRHdIZCw2QkM3R2M7QUZxRmhCO0FHdEdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUh5R0Y7QUd0R0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBSHlHRjtBSWxIQTtFQUNJLFdGR1U7QUZrSGQ7QUluSEk7RUFDSSxlRnNETztFRXJEUCx5QkFBQTtFQUNBLG1CRnlDUTtBRjRFaEI7QUlsSEk7RUFDSSxrQkZxRE87RUVwRFAsbUJGcUNTO0VFcENULGlCQUFBO0FKb0hSIiwiZmlsZSI6InNyYy9hcHAvdWktY3VzdG9taXplL2NvbXBvbmVudC91aS10aXRsZTAwMS91aS10aXRsZTAwMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnF1cXUyMDIwLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbltjbGFzc149bGF5b3V0LWxpc3QtXSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuW2NsYXNzXj1sYXlvdXQtbGlzdC1dIFtjbGFzcyo9Y2hpbGRdICsgW2NsYXNzKj1jaGlsZF0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSBbY2xhc3NePWxheW91dC1saXN0LV0gW2NsYXNzKj1jaGlsZF0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbltjbGFzc149bGF5b3V0LWxpc3QtXSAubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweDtcbn1cblxuLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5sYXlvdXQtbGlzdC1ub3RlMDAxIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzVhNmE3MTtcbn1cblxuLmxheW91dC1saXN0LWNpcmNsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcbn1cbi5sYXlvdXQtbGlzdC1jaXJjbGUwMDEgW2NsYXNzKj1jaGlsZF06YmVmb3JlIHtcbiAgY29udGVudDogXCLil6ZcIjtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG59XG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEgW2NsYXNzKj1jaGlsZF06YmVmb3JlIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHN0eWxlMDAxLW51bWJlcjtcbiAgY29udGVudDogY291bnRlcihzdHlsZTAwMS1udW1iZXIpIFwiLlwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1OTZmNjI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubGF5b3V0LWJsb2NrMDAxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxheW91dC1ibG9jazAwMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5sYXlvdXQtdGl0bGUwMDEge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjZmZmZmYzO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG59XG5cbi5sYXlvdXQtcG9pbnQtc3R5bGUwMDEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNWE2YTcxO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ubGF5b3V0LXBvaW50LXN0eWxlMDAxICsgLmxheW91dC1wb2ludC1zdHlsZTAwMSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyXzAwMSwgYm9keSAqOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjM7XG59XG5cbi5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxLCBib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNjU2Mztcbn1cblxuYm9keSB7XG4gIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICM3YTY1NjM7XG4gIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWhpZ2hsaWdodC1jb2xvcjogI2ZmZmZmMztcbiAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAjZmZmZmYzO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogIzdhNjU2Mztcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53b3JkLWxpbWl0LWxpbmVUeXBlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xufVxuXG4udWktdGl0bGUwMDEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi51aS10aXRsZTAwMSAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLnVpLXRpdGxlMDAxIC5tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utbm9ybWFsO1xuICA7XG5cbn1cblxuLnF1cXUyMDIwLW5vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiRsYXlvdXQtbGlzdC1sZWZ0OjIwcHg7XG5cbi8v5YWx55SobGF5b3V0IGxpc3QgdGV4dCBzdHlsZVxuW2NsYXNzXj1cImxheW91dC1saXN0LVwiXSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg4O1xuXG4gIFtjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiAkbGF5b3V0LWxpc3QtbGVmdDtcblxuICAgICYrW2NsYXNzKj1cImNoaWxkXCJdIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIFtjbGFzc149XCJsYXlvdXQtbGlzdC1cIl0ge1xuICAgIFtjbGFzcyo9XCJjaGlsZFwiXSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICAubGF5b3V0LWxpc3QtdGl0bGUwMDEge1xuICAgIHBhZGRpbmc6ICRsYXlvdXQtbGlzdC1sZWZ0ICRsYXlvdXQtbGlzdC1sZWZ0IC0gMTBweCAkbGF5b3V0LWxpc3QtbGVmdCAtIDEwcHg7XG4gIH1cbn1cblxuLmxheW91dC1saXN0LXRpdGxlMDAxIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWg3O1xuICBjb2xvcjogJGNvbG9yLWdyZWVuLTAyO1xuICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utc3ViO1xufVxuLmxheW91dC1saXN0LW5vdGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICBjb2xvcjogJGNvbG9yLWdyZXktMDFcbn1cblxuLmxheW91dC1saXN0LWNpcmNsZTAwMSB7XG4gIGNvdW50ZXItcmVzZXQ6IHN0eWxlMDAxLW51bWJlcjtcblxuICBbY2xhc3MqPVwiY2hpbGRcIl06YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjVFNlwiO1xuICAgIC8vIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTA7XG4gICAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxufVxuXG4ubGF5b3V0LWxpc3Qtc3R5bGUwMDEge1xuICBjb3VudGVyLXJlc2V0OiBzdHlsZTAwMS1udW1iZXI7XG5cbiAgW2NsYXNzKj1cImNoaWxkXCJdOmJlZm9yZSB7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHN0eWxlMDAxLW51bWJlcjtcbiAgICBjb250ZW50OiBjb3VudGVyKHN0eWxlMDAxLW51bWJlcikgXCIuXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRjb2xvci1ncmVlbi0wMjtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtaDEwO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5cbi8v5YWx55SobGF5b3V0IGJsb2NrXG4ubGF5b3V0LWJsb2NrMDAxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxheW91dC1ibG9jazAwMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8vIGVuZCAtIOWFseeUqGxheW91dCBibG9ja1xuXG5cbi5sYXlvdXQtdGl0bGUwMDEge1xuICBmb250LXNpemU6ICRmb250LXNpemUtaDY7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1zdWI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbn1cbi5sYXlvdXQtcG9pbnQtc3R5bGUwMDF7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWg4O1xuICAgIGNvbG9yOiAkY29sb3ItZ3JleS0wMTtcbiAgICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utbm9ybWFsO1xuICAgICsubGF5b3V0LXBvaW50LXN0eWxlMDAxe1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4vLyBzdHlsZV9zY3JvbGxiYXJcbi5zdHlsZV9zY3JvbGxiYXJfMDAxIHtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xufVxuXG4uc3R5bGVfc2Nyb2xsYmFyX3RodW1iXzAwMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1icm93bi0wMTtcbn1cblxuXG5ib2R5ICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgQGV4dGVuZCAuc3R5bGVfc2Nyb2xsYmFyXzAwMSAhb3B0aW9uYWw7XG59XG5cbmJvZHkgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBAZXh0ZW5kIC5zdHlsZV9zY3JvbGxiYXJfdGh1bWJfMDAxICFvcHRpb25hbDtcbn1cblxuYm9keSB7XG4gIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogJGNvbG9yLXdoaXRlLTAxO1xuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGNvbG9yLWJyb3duLTAxO1xuICBzY3JvbGxiYXItM2RsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICRjb2xvci13aGl0ZS0wMTtcbiAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkY29sb3Itd2hpdGUtMDE7XG4gIHNjcm9sbGJhci1iYXNlLWNvbG9yOiAkY29sb3ItYnJvd24tMDE7XG59IiwiJGNhcmQtcmFkaXVzOiAycmVtO1xuJGNhcmQtcmFkaXVzLTAyOiAxMDAlO1xuXG5cbi8vMDEtNy4gY29sb3IgY29tbW9uIHVzZVxuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLXdoaXRlLTAxOiNmZmZmZjM7XG5cbiRjb2xvci1ibGFjazogIzAwMDtcbiRjb2xvci1ibGFjay0wMTojMjEyMTIxO1xuJGNvbG9yLWJsYWNrLTAyOiMwNjE4MjY7XG5cbiRjb2xvci1yZWQtMDE6ICNmNGQ2Y2M7XG5cbiRjb2xvci1iZy1tZG86I2Y1ZjVmNTtcbiRjb2xvci1ncmVlbi0wMTojQUJEMENFO1xuJGNvbG9yLWdyZWVuLTAyOiM1OTZmNjI7XG4kY29sb3ItYnJvd24tMDE6IzdhNjU2MztcblxuJGNvbG9yLXRleHQ6ICRjb2xvci1ibGFjay0wMjtcbiRjb2xvci1tYWluOiAkY29sb3ItZ3JlZW4tMDE7XG4vLyAkY29sb3Itc3ViOiAkY29sb3ItcGluay0wMTtcbiRjb2xvci1ncmV5LTAxOiM1YTZhNzE7XG4kY29sb3ItZ3JleS0wMjojZDhkOGQ4O1xuJGNvbG9yLWdyZXktMDM6IzRhNGE0YTtcbiRjb2xvci1ncmV5LTA0OiM3NTc1NzU7XG5cblxuXG4kc2hhZG93LXN0eWxlMTowIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiRzaGFkb3ctc3R5bGUyOjAgMnB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuXG4vLyA9PT09PSAwMiBmb250IHNldHRpbmcgPT09PT09XG5cbi8vIDAyLTEgZm9udCBiYXNpYyBzZXR0aW5nXG4kZm9udC1mYW1pbHk6IFxuXCLmlofms4npqZvmraPpu5FcIixcblwiV2VuUXVhbllpIFplbiBIZWlcIixcblwi6JiL5pa5Lee5gVwiLFxuXCJQaW5nRmFuZyBUQ1wiLFxuXCLpu5Hpq5Qt57mBXCIsXG5cIkhlaXRpIFRDXCIsXG5cIuWEt+m7kSBQcm9cIixcblwiTGlIZWkgUHJvXCIsXG5cIuW+rui7n+ato+m7kemrlFwiLFxuXCJNaWNyb3NvZnQgSmhlbmdIZWlcIixcbnNhbnMtc2VyaWY7XG4kZm9udC1saW5lLWhlaWdodDogMjhweDtcbiRmb250LXNwYWNlLXN1YjozcHg7XG4kZm9udC1zcGFjZS1tYWluOjVweDtcbiRmb250LXNwYWNlLW5vcm1hbDowLjVweDtcblxuJGZvbnQtbGluZS1oZWlnaHQtbWQ6IDEuNTtcbiRmb250LWxpbmUtaGVpZ2h0LWxnOiAkZm9udC1saW5lLWhlaWdodC1tZCAqIDI7XG5cbi8vIDAyLTIgZm9udCBiYXNlICB3aGVuIHRleHQgc20gOiBiYXNlID0gMTYgOyB0ZXh0IG1kIDogYmFzZSA9IDE4OyB0ZXh0IGxnIDogYmFzZSA9IDIwXG4kZm9udC1iYXNlLW51bTogMTY7XG4kZm9udC1iYXNlLW51bS1tZDogMTg7XG4kZm9udC1iYXNlLW51bS1sZzogMjA7XG4kZm9udC1zaXplLW1kOiAxcmVtOyAvLzE2cHhcblxuLy8gMDItMy5hIHRpdGxlIGZvbnQgc2l6ZVxuJGZvbnQtc2l6ZS1sZzo0OHB4O1xuJGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooMzYvJGZvbnQtYmFzZS1udW0pOyAvLzM2cHhcbiRmb250LXNpemUtaDM6ICRmb250LXNpemUtbWQqKDI4LyRmb250LWJhc2UtbnVtKTsgLy8yOHB4O1xuJGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0pOyAvLzI2cHg7XG4kZm9udC1zaXplLWg1OiAkZm9udC1zaXplLW1kKigyNC8kZm9udC1iYXNlLW51bSk7IC8vMjRweDtcblxuLy8gMDItMy5iIHNldHRpbmcgZm9udCBzaXplICAoIGhhcyBpdCBvd24gcnVsZSBhYm91dCBzY2FsZSBmb24gc2l6ZSwgbm90IGZvbGxvdyB0aGUgcnVsZSBvZiBiYXNlIHJlbSlcbiRmb250LXNpemUtY29uZmlnOihmb250LXNpemVfbGcgOihmb250LXNpemUtaDI6ICRmb250LXNpemUtbWQqKDQwLyRmb250LWJhc2UtbnVtLWxnKSwgLy8gNDBweFxuICAgIGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1tZCooMjYvJGZvbnQtYmFzZS1udW0tbGcpLCAvLzI2cHhcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtLWxnKSAvLzI0cHhcbiAgKSxcbiAgZm9udC1zaXplX21kIDooZm9udC1zaXplLWgyOiAkZm9udC1zaXplLW1kKig0MC8kZm9udC1iYXNlLW51bS1tZCksIC8vIDQwcHhcbiAgICBmb250LXNpemUtaDQ6ICRmb250LXNpemUtbWQqKDI2LyRmb250LWJhc2UtbnVtLW1kKSwgLy8gMjZweFxuICAgIGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1tZCooMjQvJGZvbnQtYmFzZS1udW0pIC8vIHVzZSBzbSByYXRpbyB0byB0aGUgYmFzZVxuICApLFxuICBmb250LXNpemVfc206KGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1tZCooNDAvJGZvbnQtYmFzZS1udW0pLCAvLyA0MHB4XG4gICAgZm9udC1zaXplLWg0OiAkZm9udC1zaXplLW1kKigyNi8kZm9udC1iYXNlLW51bSksIC8vMjZweDtcbiAgICBmb250LXNpemUtaDU6ICRmb250LXNpemUtbWQqKDI0LyRmb250LWJhc2UtbnVtKSAvLzI0cHg7XG4gICkpO1xuXG5AZnVuY3Rpb24gZ2V0LWZvbnQtc2l6ZSgka2V5LCAkdHlwZTonZm9udC1zaXplX3NtJykge1xuXG4gIEBlYWNoICRmb250LW5hbWUsXG4gICRmb250LXNpemUgaW4gbWFwLWdldCgkZm9udC1zaXplLWNvbmZpZywgJHR5cGUpIHtcbiAgICBAaWYoJGtleT09JGZvbnQtbmFtZSkge1xuICAgICAgQHJldHVybiAkZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogZ2V0LWZvbnQtc2l6ZSgkZm9udC1zaXplLCAnZm9udC1zaXplX3NtJyk7XG5cbiAgLmZvbnQtc2l6ZV9sZyAmIHtcbiAgICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9sZycpO1xuICB9XG5cbiAgLmZvbnQtc2l6ZV9tZCAmIHtcbiAgICBmb250LXNpemU6IGdldC1mb250LXNpemUoJGZvbnQtc2l6ZSwgJ2ZvbnQtc2l6ZV9tZCcpO1xuICB9XG59XG5cbi8vIDAyLTQgZm9udCBzaXplIG5vcm1hbFxuJGZvbnQtc2l6ZS1oNjogJGZvbnQtc2l6ZS1tZCooMjAvJGZvbnQtYmFzZS1udW0pOyAvLzIwcHhcbiRmb250LXNpemUtaDc6ICRmb250LXNpemUtbWQqKDE4LyRmb250LWJhc2UtbnVtKTsgLy8xOHB4XG4kZm9udC1zaXplLWg4OiAkZm9udC1zaXplLW1kOyAvLyAxNnB4XG4kZm9udC1zaXplLWg5OiAxcmVtICogKDE0LyRmb250LWJhc2UtbnVtKTsgLy8gMTRweFxuJGZvbnQtc2l6ZS1oMTA6ICRmb250LXNpemUtbWQgKigxMi8kZm9udC1iYXNlLW51bSk7IC8vMTJweFxuXG5cbi8vID09PT09PSAwMyBzY3JlZW4gd2lkdGggID09PT09PVxuJHNjcmVlbi1kZXNrdG9wOiAxMjAwcHg7XG4kc2NyZWVuLXNtLXRoYW4tZGVza3RvcDogMTE5OXB4O1xuJHNjcmVlbi1wYWQtcHJvOiAxMzY2cHg7XG4kc2NyZWVuLWxnLXRoYW4tbmI6IDEwMjVweDtcbiRzY3JlZW4tbmI6IDEwMjRweDtcbiRzY3JlZW4tc20tdGhhbi1uYjogMTAyM3B4O1xuJHNjcmVlbi1sZy1wYWQ6IDk5MnB4O1xuJHNjcmVlbi1sZy10aGFuLXBhZDogNzY5cHg7XG4kc2NyZWVuLXBhZDogNzY4cHg7XG4kc2NyZWVuLXNtLXRoYW4tcGFkOiA3NjdweDtcbiRzY3JlZW4tbGctbW9iaWxlOiA1MDBweDtcbiRzY3JlZW4tbW9iaWxlOiAzNzVweDtcbiRzY3JlZW4tc20tdGhhbi1tb2JpbGU6IDM3NHB4O1xuJHNjcmVlbi1zbTogMzIwcHg7XG5cblxuLy8gbGF5b3V0IHNpemVcblxuJHdkLWxvZ28tbW9iaWxlOiAyMDRweDtcbiRib2FyZC10aW1lLWNhcmQtaGVpZ2h0OiAyMjBweDtcbiRib2FyZC10aW1lLWNhcmQtd2lkdGg6IDEzNXB4O1xuXG5cbi8vIGZvcm0gc2V0dGluZyBmcm9tIEBuZXV4L3VpXG4vLyDooajllq7ln7rmnKzorormlbhcbiRmb3JtLWhlaWdodC10ZXh0YXJlYTogNzVweDtcblxuLy8gZm9ybSBjb2xvclxuJGNvbG9yLWZvcm0tZXJyb3I6ICNlNDYwMDkgIWRlZmF1bHQ7XG4vLyRjb2xvci1mb3JtLWRpc2FibGU6ICRjb2xvci1ncmV5LWRhcmsgIWRlZmF1bHQ7XG4kY29sb3ItZm9ybS1ub3JtYWw6ICRjb2xvci10ZXh0ICFkZWZhdWx0O1xuJGNvbG9yLWNoZWNrYm94LWljb246ICRjb2xvci13aGl0ZSAhZGVmYXVsdDsgLy8gY2hlY2tib3ggY29sb3JcbiRjb2xvci1mb3JtLWNoZWNrLWJvcmRlcjogI2UwZTBlMCAhZGVmYXVsdDsgLy8gY2hlY2tib3ggYW5kIHJhZGlvIGJvcmRlclxuJGNvbG9yLWZvcm0tYWN0aXZlOiAkY29sb3ItbWFpbiAhZGVmYXVsdDtcbiRjb2xvci1mb3JtLWRhcms6ICNlMGUwZTA7IC8vIHVzZSBpbiBzZWFyY2ggYm94IG9uIGhlYWRlclxuJGNvbG9yLWJnLWZvcm06ICRjb2xvci13aGl0ZTtcbiRjb2xvci1iZy1mb3JtLWRhcms6ICNlMGUwZTA7XG5cblxuLy8gYnRuOlxuJG5ldXgtdWktYnRuLS1zbTozMHB4O1xuXG4vL1xuJHNwYWNlLW5iOiAzMHB4O1xuJHNwYWNlLXBhZDogMzBweDtcbiRzcGFjZS1tb2JpbGU6IDIwcHg7XG5cbi8vIGxheW91dDog5YWn6aCBdGl0bGUg5bem6ZaT6LedXG4kc3BhY2UtaW5wYWdlLXRpdGxlLWxlZnQ6IDEwcHg7XG4kYnJlYWRjcnVtYi1hcnJvdy1jb2xvcjogI2JiYjsgLy8g6bq15YyF5bGR566t6aCt6aGP6Imy5ZCM54++6KGM5a6Y57ayXG5cbiRiYW5uZXItc2xpZGVyLWhlaWdodDo1NTBweDtcbiRiYW5uZXItc2xpZGVyLWhlaWdodC1tYjozMTBweDsiLCIuZmxleC1jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud29yZC1saW1pdC1saW5lVHlwZXtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgXCJzdHlsZS1pbXBvcnRcIjtcbi51aS10aXRsZTAwMXtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgLnN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWg4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogJGZvbnQtc3BhY2Utc3ViO1xuXG4gICAgfVxuICAgIC5tYWluLXRpdGxle1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtaDM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAkZm9udC1zcGFjZS1tYWluO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-customize/component/ui-title001/ui-title001.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-customize/component/ui-title001/ui-title001.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UiTitle001Component */

  /***/
  function srcAppUiCustomizeComponentUiTitle001UiTitle001ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiTitle001Component", function () {
      return UiTitle001Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UiTitle001Component = class UiTitle001Component {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiTitle001Component.prototype, "mainTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UiTitle001Component.prototype, "subTitle", void 0);
    UiTitle001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-title001',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-title001.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-customize/component/ui-title001/ui-title001.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-title001.component.scss */
      "./src/app/ui-customize/component/ui-title001/ui-title001.component.scss")).default]
    })], UiTitle001Component);
    /***/
  },

  /***/
  "./src/app/ui-customize/ui-customize.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-customize/ui-customize.module.ts ***!
    \*****************************************************/

  /*! exports provided: UiCustomizeModule */

  /***/
  function srcAppUiCustomizeUiCustomizeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiCustomizeModule", function () {
      return UiCustomizeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var _component_ui_footer001_ui_footer001_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/ui-footer001/ui-footer001.component */
    "./src/app/ui-customize/component/ui-footer001/ui-footer001.component.ts");
    /* harmony import */


    var _component_ui_map001_ui_map001_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/ui-map001/ui-map001.component */
    "./src/app/ui-customize/component/ui-map001/ui-map001.component.ts");
    /* harmony import */


    var _component_ui_header001_ui_header001_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/ui-header001/ui-header001.component */
    "./src/app/ui-customize/component/ui-header001/ui-header001.component.ts");
    /* harmony import */


    var _component_ui_nav001_ui_nav001_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/ui-nav001/ui-nav001.component */
    "./src/app/ui-customize/component/ui-nav001/ui-nav001.component.ts");
    /* harmony import */


    var _component_ui_slider001_ui_slider001_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/ui-slider001/ui-slider001.component */
    "./src/app/ui-customize/component/ui-slider001/ui-slider001.component.ts");
    /* harmony import */


    var _component_ui_nav_list001_ui_nav_list001_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/ui-nav-list001/ui-nav-list001.component */
    "./src/app/ui-customize/component/ui-nav-list001/ui-nav-list001.component.ts");
    /* harmony import */


    var _component_ui_content_project001_ui_content_project001_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/ui-content-project001/ui-content-project001.component */
    "./src/app/ui-customize/component/ui-content-project001/ui-content-project001.component.ts");
    /* harmony import */


    var _component_ui_title001_ui_title001_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/ui-title001/ui-title001.component */
    "./src/app/ui-customize/component/ui-title001/ui-title001.component.ts");
    /* harmony import */


    var _component_ui_content_info001_ui_content_info001_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/ui-content-info001/ui-content-info001.component */
    "./src/app/ui-customize/component/ui-content-info001/ui-content-info001.component.ts");

    const DEFAULT_SWIPER_CONFIG = {
      direction: 'horizontal',
      slidesPerView: 'auto',
      slideVisibleClass: 'visible'
    };
    let UiCustomizeModule = class UiCustomizeModule {};
    UiCustomizeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_ui_footer001_ui_footer001_component__WEBPACK_IMPORTED_MODULE_4__["UiFooter001Component"], _component_ui_map001_ui_map001_component__WEBPACK_IMPORTED_MODULE_5__["UiMap001Component"], _component_ui_header001_ui_header001_component__WEBPACK_IMPORTED_MODULE_6__["UiHeader001Component"], _component_ui_nav001_ui_nav001_component__WEBPACK_IMPORTED_MODULE_7__["UiNav001Component"], _component_ui_slider001_ui_slider001_component__WEBPACK_IMPORTED_MODULE_8__["UiSlider001Component"], _component_ui_nav_list001_ui_nav_list001_component__WEBPACK_IMPORTED_MODULE_9__["UiNavList001Component"], _component_ui_content_project001_ui_content_project001_component__WEBPACK_IMPORTED_MODULE_10__["UiContentProject001Component"], _component_ui_title001_ui_title001_component__WEBPACK_IMPORTED_MODULE_11__["UiTitle001Component"], _component_ui_content_info001_ui_content_info001_component__WEBPACK_IMPORTED_MODULE_12__["UiContentInfo001Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"]],
      exports: [_component_ui_footer001_ui_footer001_component__WEBPACK_IMPORTED_MODULE_4__["UiFooter001Component"], _component_ui_map001_ui_map001_component__WEBPACK_IMPORTED_MODULE_5__["UiMap001Component"], _component_ui_header001_ui_header001_component__WEBPACK_IMPORTED_MODULE_6__["UiHeader001Component"], _component_ui_nav001_ui_nav001_component__WEBPACK_IMPORTED_MODULE_7__["UiNav001Component"], _component_ui_slider001_ui_slider001_component__WEBPACK_IMPORTED_MODULE_8__["UiSlider001Component"], _component_ui_nav_list001_ui_nav_list001_component__WEBPACK_IMPORTED_MODULE_9__["UiNavList001Component"], _component_ui_content_project001_ui_content_project001_component__WEBPACK_IMPORTED_MODULE_10__["UiContentProject001Component"], _component_ui_title001_ui_title001_component__WEBPACK_IMPORTED_MODULE_11__["UiTitle001Component"], _component_ui_content_info001_ui_content_info001_component__WEBPACK_IMPORTED_MODULE_12__["UiContentInfo001Component"]],
      providers: [{
        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SWIPER_CONFIG"],
        useValue: DEFAULT_SWIPER_CONFIG
      }]
    })], UiCustomizeModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyDUZyeb2i7y4dkvwf4e8eKAQYRXusVw510",
        authDomain: "ququ2020-15a14.firebaseapp.com",
        databaseURL: "https://ququ2020-15a14.firebaseio.com",
        projectId: "ququ2020-15a14",
        storageBucket: "ququ2020-15a14.appspot.com",
        messagingSenderId: "750720524233",
        appId: "1:750720524233:web:6998cb8e18e2a02238d218",
        measurementId: "G-SL7BMBWNCF"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/quyun/MyCode/ququ2020/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map