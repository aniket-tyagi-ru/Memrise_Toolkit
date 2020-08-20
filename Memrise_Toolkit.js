// ==UserScript==
// @name         Memrise Toolkit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Garden Theme & Other
// @author       Aniket-Tyagi-RU
// @match        https://app.memrise.com/*
// @match        https://www.memrise.com/*
// @match        https://community.memrise.com/*
// ==/UserScript==

(function() {
    'use strict';

/* Insert Stylesheet */
(function customStylesheet() {
    var myStylesheet = document.createElement('style');
    myStylesheet.type = 'text/css';
    myStylesheet.id = 'myStylesheet';
    myStylesheet.innerHTML = 'body #content {'
                              + 'background-color: #f5f5f5}'
                            + '#content {'
                              + 'background-color: #f5f5f5}'
                            + 'body {'
                              + 'line-height: 1.4em;'
                              + 'background-color: #f6f6f6}'
                            /* NAVBAR */
                            + '.rebrand-header-container {'
                              + 'display: flex;' // Unchanged
                              + 'align-items: center;' // Unchanged
                              + 'justify-content: space-between;' // Unchanged
                              + 'padding-left: 16px;' // Unchanged
                              + 'padding-right: 16px;' // Unchanged
                              + 'padding-top: 6px;'
                              + 'padding-bottom: 6px;'
                              + 'width: 100%;' // Unchanged
                              + 'max-width: 960px;' // Unchanged
                              + 'margin-left: auto;' // Unchanged
                              + 'margin-right: auto;}' // Unchanged
                           + '.header-nav .header-nav-item:after {'
                              + 'position: absolute;' // Unchanged
                              + 'display: none;' // Unchanged
                              + 'content: \'\';' // Unchanged
                              + 'width: 100%;' // Unchanged
                              + 'height: 0.275rem;'
                              + 'transform: rotate(-2deg);'
                              + 'background-color: #FFFFFF;}'
                           + '.header-nav .header-nav-item.premium .nav-item-btn-text {'
                              + 'color: #ffffff;}'
                           + '.header-nav .header-nav-item.colored .nav-item-btn {'
                              + 'transition: none;' // Unchanged
                              + 'padding: 0px 18px;}'
                           + '.nav-item-btn {'
                              + 'transition: all 0s;' // Unchanged
                              + 'border-radius: 4px;' // Unchanged
                              + 'display: inline-block;' // Unchanged
                              + 'position: relative;' // Unchanged
                              + 'color: #fff;'
                              + 'padding: 12px 18px;'
                              + 'font: 13px/13px "Open Sans",Sans-Serif;'
                              + 'text-shadow: 0px 1px 3px rgba(0,0,0,0.2)}' // Unchanged
                          /* LOGIN */
                           + '.whitebox.spaced {'
                              + 'background-color: #f8f8f8;'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.1);}'
                           + 'input[type="submit"].btn-success {'
                              + 'background-color: #83ca38;}'
                           + 'input[type="submit"].btn-success:hover {'
                              + 'background-color: #83ca38;}'
                           + '.btn-block, .form-full-width input[type="submit"], .form-full-width input[type="button"], .form-full-width button, .btn.btn-block, .form-full-width input.btn[type="submit"], .form-full-width input.btn[type="button"], .form-full-width button.btn, button[type="submit"].btn-block, .form-full-width button[type="submit"] {'
                              + 'box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);}'
                          /* HOME */
                          + '#world {'
                              + 'display: block;'
                              + 'height: 210px;'
                              + 'background: linear-gradient(0deg,rgba(34,133,227,1) 10%, rgba(44,153,232,1) 40%,  #34a9ec 70%);'
                              + 'box-shadow: 0px 56px 10px 0px rgba(0,0,0,0.2) inset;}'
                          + '#forest {'
                              + 'display: block;'
                              + 'position: relative;'
                              + 'height: 210px;'
                              + 'width: 960px;'
                              + 'padding: 16px;'
                              + 'margin: auto;}'
                          + '#sun0 {'
                              + 'position: absolute; top: 90px; left: 220px;'
                              + 'height: 20px; width: 20px; border-radius: 100%;'
                              + 'background: #f6f22c;}'
                          + '#sun1 {'
                              + 'position: absolute; top: 81px; left: 211px;'
                              + 'height: 38px; width: 38px; border-radius: 100%;'
                              + 'background: radial-gradient(circle, rgba(34,133,227,0.5) 10%, rgba(234,236,52,0.20) 40%, rgba(234,236,52,0) 100%);}'
                          + '#sun2 {'
                              + 'position: absolute; top: 74px; left: 204px;'
                              + 'height: 52px; width: 52px; border-radius: 100%;'
                              + 'background: radial-gradient(circle, rgba(34,133,227,0.5) 10%, rgba(234,236,52,0.15) 35%, rgba(234,236,52,0) 100%);}'
                          + '#sun3 {'
                              + 'position: absolute; top: 67px; left: 197px;'
                              + 'height: 66px; width: 66px; border-radius: 100%;'
                              + 'background: radial-gradient(circle, rgba(34,133,227,0.5) 10%, rgba(234,236,52,0.10) 35%, rgba(234,236,52,0) 100%);}'
                          + '#sun4 {'
                              + 'position: absolute; top: 60px; left: 190px;'
                              + 'height: 80px; width: 80px; border-radius: 100%;'
                              + 'background: radial-gradient(circle, rgba(34,133,227,0.5) 10%, rgba(234,236,52,0.10) 35%, rgba(234,236,52,0) 100%);}'
                          /* Course Cards */
                          + '.course-card-container .course-progress-box {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16)}'
                          /* Course Cards: Daily Target */
                          + '.course-card-container .course-progress-box .card-top .card-main-container .simple-btn {'
                              + 'border-radius: 4px;'
                              + 'padding: 4px;' // Unchanged
                              + 'background: #ffffff;' //
                              + 'font-weight: 700;' // Unchanged
                              + 'font-size: 10px;' // Unchanged
                              + '12px/12px "Open Sans",Sans-Serif;'
                              + 'color: #2B3648;'
                              + 'text-align: center;' // Unchanged
                              + 'line-height: 12px;' // Unchanged
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);}'
                          + '.course-card-container .course-progress-box .card-top .card-main-container .simple-btn:hover {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);'
                              + 'transform: scale(1.02);'
                              + 'background-color: #f5f5f5;' // GREY DARKER
                              + 'color: black}'
                          + '.course-card-container .course-progress-box .onoff,.course-card-container .course-progress-box .points {'
                              + 'font-weight: 650;' // Unchanged
                              + 'color: #ffffff;}'
                          + '.course-card-container .course-progress-box .card-top .card-main-container .goal-setter-btn.active {'
                              + 'box-shadow: inset 0px 1px 3px 0px rgba(0,0,0,0.16);'
                              + 'background-color: #f8f8f8;'
                              + 'border-radius: 5px;}'
                          + '.course-card-container .course-progress-box .onoff, .course-card-container .course-progress-box .points {'
                              + 'color: black;}'
                          + '.course-card-container .course-progress-box .card-top .card-main-container .goal-setter-btn .orange, .course-card-container .course-progress-box .onoff .pts {'
                              + 'color: black;}'
                          /* Course Cards: Progress Bar */
                          + '.course-card-container .course-progress-box .card-top .card-image-col .img-crop {'
                              + 'border-radius: 7.5%}'
                          + '.sidebar-profile .profile-header .image-wrapper img {'
                              + 'border-radius: 100%}'
                          + '.course-card-container .course-progress-box .card-top .card-main-container .course-progress .progress-bar-container .progress-bar {'
                              + 'border-radius: 0px;' // Unchanged
                              + 'background-color: #7fcc2b}' // GREEN
                          + '.course-card-container .course-progress-box .card-top .card-main-container .course-progress .progress-bar-container {'
                              + 'border-radius: 4px;' // Unchanged
                              + 'box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.06) inset;' // Unchanged
                              + 'background-color: #f7f7f7;' // Unchanged
                              + 'height: 8px;'
                              + 'margin-bottom: 4px}' // Unchanged
                          /* Course Cards: Course Complete */
                          + '.course-card-container .course-progress-box .card-top .card-main-container .course-progress .left .course-complete-text {'
                              + 'box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.12);'
                              + 'background-color: #f8f8f8;'
                              + 'border-radius: 8px;'
                              + 'font-size: 12px;}'
                          /* Course Cards: Goal Setter */
                          + '.course-card-container .goal-setter {'
                              + 'box-shadow: inset 0px 1px 3px 0px rgba(0,0,0,0.16);'
                              + 'background-color: #f8f8f8;}'
                          /* CC Bottom */
                          + '.course-card-container .course-progress-box .card-bottom {'
                              + 'box-shadow: inset 0px 1px 3px 0px rgba(0,0,0,0.1);'
                              + 'background: #f8f8f8;'
                              + 'padding: 5px 20px;}'
                          /* CC Bottom Continue */
                          + 'a:hover, a:focus {'
                              + 'text-decoration-line: none;}'
                          + '.single-continue-button {'
                              + 'min-width: 180px;}'
                          + '.single-continue-button.single-continue-button {'
                              + 'max-width: 200px;'
                              + 'width: 150px;' // Narrower
                              + 'height: 34px;' // Shorter
                              + 'margin: 0;' // Unchanged
                              + 'margin-right: 16px;' // Unchanged
                              + 'order: 1;' // Unchanged
                              + 'background: linear-gradient(0deg, #69c3f4 50%, #6ec8f9 50%);' // MAIN BUTTON BLUE GRADIENT
                              + 'border: solid 1px #35b0ef;'
                              + 'box-shadow: 0px 2px 0px -1px rgba(255,255,255,0.2) inset;'
                              + 'font-weight: 700;' // Unchanged
                              + 'color: #2B3648;' // Unchanged
                              + 'border-radius: 6px;' // Rectangular
                              + 'margin-top: auto;'
                              + 'margin-bottom: auto;}'
                          + '.single-continue-button-icon {'
                              + 'width: 21px;'
                              + 'height: 21px;'
                              + 'top: 5px;'
                              + 'left: 8px;}'
                          + '.single-continue-button-label {'
                              + 'padding: 0;'
                              + 'margin: auto;}'
                          + '.single-continue-button.classic-review .single-continue-button-label {'
                              + 'padding-left: 0px;}'
                          + '.single-continue-button.learn .single-continue-button-label {'
                              + 'padding-left: 0px;}'
                          + '.single-continue-button.listening-skills .single-continue-button-label {'
                              + 'padding-left: 0px;}'
                          + '.single-continue-button.speed-review .single-continue-button-label {'
                              + 'padding-left: 0px;}'
                          + '.single-continue-button.difficult-words .single-continue-button-label {'
                              + 'padding-left: 0px;}'
                          + '.single-continue-button-text {'
                              + 'text-align: center;'
                              + 'text-transform: none;'
                              + 'font-family: "Open Sans",Sans-Serif;'
                              + 'font-size: 13px;'
                              + 'font-weight: 500;'
                              + 'text-shadow: 0 1px 3px rgba(0,0,0,0.16);'
                              + 'color: #ffffff;}'
                          /* CC Bottom More */
                          + '.mode-selector-button {'
                              + 'height: 34px;'
                              + 'width: 34px;}'
                          + '.mode-selector-button.mode-selector-button {'
                              + 'box-shadow: none;' // Unchanged
                              + 'cursor: pointer;' // Unchanged
                              + 'order: 2;' // Unchanged
                              + 'min-width: initial;' // Unchanged
                              + 'background-color: #f8f8f8;'
                              + 'border-radius: 100%;'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);'
                              + 'vertical-align: middle;'
                              + 'margin-top: auto;'
                              + 'margin-bottom: auto;}'
                          + '.mode-selector-button-icon {'
                              + 'height: 0px;'
                              + 'margin: 0px;'
                              + 'margin-left: 4px;'
                              + 'margin-right: 4px;'
                              + 'padding: 17px;'
                              + 'padding-left: 12px;'
                              + 'padding-right: 12px;'
                              + 'float: left;}' // Unchanged
                          + '.mode-selector-button-icon {'
                              + 'width: 0px;}'
                          /* CC More Learning Options */
                          + '.mode-selector-modal {'
                             + 'background-color: #2489e5}' // BLUE DARKER
                          + '.mode-icon.learn {'
                             + 'border: solid 2px white;'
                             + 'background-color: #7ec926;}' // GREEN LEARN
                          + '.mode-icon.classic_review {'
                             + 'border: solid 2px white;'
                             + 'background-color: #6ac6fa;}' // BLUE LIGHTER
                          + '.mode-icon.speed_review {'
                             + 'border: solid 2px white;'
                             + 'background-color: #f76757;}' // RED
                          + '.mode-icon.difficult_words {'
                             + 'border: solid 2px white;'
                             + 'background-color: #fe9a1b;}' // ORANGE
                          + '.mode-icon.listening_skills{'
                             + 'border: solid 2px white;'
                             + 'background-color: #b462c2;}' // PURPLE LIGHTER
                          + '.mode-selector-modal-content .single-continue-button.classic-review .single-continue-button-label {'
                              + 'padding-left: 0;}'
                          + '.mode-selector-modal-content .single-continue-button.learn .single-continue-button-label {'
                              + 'padding-left: 0;}'
                          + '.mode-selector-modal-content .single-continue-button.listening-skills .single-continue-button-label {'
                              + 'padding-left: 0;}'
                          + '.mode-selector-modal-content .single-continue-button.speed-review .single-continue-button-label {'
                              + 'padding-left: 0;}'
                          + '.mode-selector-modal-content .single-continue-button.difficult-words .single-continue-button-label {'
                              + 'padding-left: 0;}'
                          + '.mode-selector-modal-content .single-continue-button-text {'
                              + 'text-align: center;'
                              + 'max-width: 100%;}'
                          + '.mode-selector-modal-content .single-continue-button-icon {'
                              + 'width: 36px;'
                              + 'height: 36px;'
                              + 'top: 7px;'
                              + 'left: 12px;}'
                          + '.mode-selector-modal-content .single-continue-button.learn .single-continue-button-icon {'
                              + 'top: 7px;}'
                          + '.mode-selector-modal-content .single-continue-button.classic-review .single-continue-button-icon {'
                              + 'top: 7px;}'
                          + '.mode-selector-modal-content .single-continue-button.speed-review .single-continue-button-icon {'
                              + 'top: 7px;}'
                          + '.mode-selector-modal-content .single-continue-button.difficult-words .single-continue-button-icon {'
                              + 'top: 7px;}'
                          + '.mode-selector-modal-content .single-continue-button.listening-skills .single-continue-button-icon {'
                              + 'top: 7px;}'
                          + '.mode-icon learn {'
                              + 'background-color: #7fcc2b;}' // GREEN
                          /* Sidebar Containers */
                          /* Sidebar: Profile */
                          + '.sidebar-box {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);'
                              + 'border: none;}' // Unchanged
                          + '.sidebar-profile .profile-content .content-stats .left.number,.sidebar-profile .profile-content .content-stats .left .number, .sidebar-profile .profile-content .content-stats .left .number,.sidebar-profile .profile-content .content-stats .right .number {'
                              + 'color: #11a3ee;' // BLUE
                              + 'font-weight: 700}' // Unchanged
                          + '.sidebar-profile .profile-content .content-stats .left,.sidebar-profile .profile-content .content-stats .right {'
                              + 'padding-top: 4px;' // Unchanged
                              + 'padding-bottom: 4px;' // Unchanged
                              + 'color: #2B3648;' // #3ea6d7
                              + 'border-radius: 0px;'// Unchanged
                              + 'background: #f8f8f8 ;'// GREY 1
                              + 'font-size: 12px;' // Unchanged
                              + 'color: #2B3648;' // Unchanged
                              + 'text-align: center}' // Unchanged
                          + '.sidebar-profile .profile-content .content-stats .left, .sidebar-profile .profile-content .content-stats .right {'
                              + 'margin-right: 0px;'
                              + 'width: 92.5px}'
                          /* Sidebar: Streak Clock */
                          + '.countdown-body .countdown-duration .time-block {'
                              + 'background-color: #f5f5f5;}'
                          + '.countdown-body .countdown-duration .time-block .time-num {'
                              + 'color: #1fa3e8;}' // BLUE
                          /* Sidebar: Learning Stats */
                          + '.sidebar-premium .premium-upsell-btn {'
                              + 'background-color: #ffffff;'
                              + 'color: black;'
                              + 'font-size: 13px;'
                              + 'box-shadow: 0px 1px 4px 0px rgb(0,0,0,0.16);}'
                          /* Sidebar: Leadeboard */
                          + '.leaderboard .leaderboard-content .leaderboard-rows .leaderboard-row.current {'
                              + 'background-color: #6ac6fa;}'
                          /* Premium Popup */
                          + '#pro_chat-upsell-modal.modal .modal-content, #grammar_chat-upsell-modal.modal .modal-content, #meet_the_natives-upsell-modal.modal .modal-content, #listening_skills-upsell-modal.modal .modal-content, #difficult_words-upsell-modal.modal .modal-content, #stats-upsell-modal.modal .modal-content, #unlocked-upsell-modal.modal .modal-content, #promotion-modal.modal .modal-content {'
                              + 'background-color: #11a3ee}' // BLUE
                          + '#difficult_words-upsell-modal.modal .modal-footer .button {'
                              + 'background-color: #da326b;}' // CRIMSON
                          + '#difficult_words-upsell-modal.modal .modal-title {'
                              + 'color: #ffffff;}'
                          + '#difficult_words-upsell-modal.modal .modal-description {'
                              + 'color: #ffffff;}'
                          + '#difficult_words-upsell-modal.modal .modal-footer {'
                              + 'background-color: #11a3ee;}'
                          + '#difficult_words-upsell-modal.modal .modal-footer .full-pricing {'
                              + 'color: #ffffff;}'
                          /* COURSE PAGE */
                          + '.btn.btn-primary {'
                              + 'color: white;'
                              + 'background-color: #6ac6fa;}' // BLUE LIGHTER
                          /* CP: Upper Part */
                          + '.reverse-header-ruled #page-head {'
                              + 'background: linear-gradient(0deg,#2183e3 0%, rgba(44,153,232,1) 70%,  #34a9ec 100%);'
                              + 'box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2) inset;}'
                          + '.reverse-header-ruled #page-head a:not(.btn) {'
                              + 'font-weight: bold;'
                              + 'font-size: 12px;}'
                            //  + 'text-shadow: none;}'
                          + '.reverse-header-ruled #page-head .inner {}'
                            //  + 'color: #2B3648;}'
                          + '.course-header.course-header-fat .course-details .course-breadcrumb {'
                              + 'padding-bottom: 4px;'
                              + 'padding-top: 5px;}'
                          + '.course-header.course-header-fat .course-details .course-description {'
                              + 'font-size: 13px;}'
                          + '@media only screen and (max-width: 1039px) {'
                              + '#page-head .inner h1 {'
                              + 'margin: -3px 0 0px;'
                              + '}}'
                          + '.course-tabs-wrap .left, .course-tabs-wrap .right {'
                              + 'margin-bottom: 1px;}'
                          + '.btn-flacebook:focus, .btn-flacebook:active {'
                              + 'background-color: #6ac6fa;}' // BLUE LIGHTER
                          /* CP: Middle Part */
                          // 'Levels' button
                          + 'ul.nav-pills>li.active>a, .nav-pills>li.active>a, .nav.nav-pills>li.active>a {'
                              + 'background-color: #6ac6fa;' // BLUE LIGHTER
                              + 'color: #fff;'
                              + 'font-weight: 650;'
                              + 'text-shadow: 0 1px 3px rgba(0,0,0,0.16);'
                              + 'box-shadow: 0 1px 4px 0 rgba(0,0,0,0.16);}'
                          // Hover 'Levels' buttn
                          + 'ul.nav-pills>li:hover.active>a, ul.nav-pills>li.dropdown.open>a, .nav-pills>li:hover.active>a, .nav-pills>li.dropdown.open>a, .nav.nav-pills>li:hover.active>a, .nav.nav-pills>li.dropdown.open>a {'
                              + 'background-color: #6ac6fa;' // BLUE LIGHTER
                              + 'color: #fff;'
                              + 'font-weight: 650}'
                          // Hover 'Difficult Words' button
                          + 'ul.nav-pills>li:hover>a, .nav-pills>li:hover>a, .nav.nav-pills>li:hover>a {'
                              + 'background-color: #f2f2f2;'
                              + 'border-color: #f2f2f2;}'
                          /* CP: Lower Part */
                          + '.progress .bar.bar-success {'
                              + 'background-color: #7fcc2b;}' // GREEN
                          + '.leaderboard {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);}'
                          + '.btn-group .btn.active {'
                              + 'background-color: #6ac6fa;' // BLUE LIGHTER
                              + 'border-color: #6ac6fa;' // BLUE LIGHTER
                              + 'color: #fff;}'
                          + '.btn {'
                              + 'font-weight: 550;}'
                          + '.progress-box {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);}'
                          + 'body.levels .levels .level {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);}'
                          + '.btn.btn-light-blue, .btn.btn-light-blue:hover {'
                              + 'background: linear-gradient(0deg, #69c3f4 50%, #6ec8f9 50%);' // MAIN BUTTON BLUE GRADIENT
                              + 'border: solid 1px #35b0ef;'
                              + 'box-shadow: 0px 2px 0px -1px rgba(255,255,255,0.2) inset;'
                              //+ 'background-color: #6ac6fa;' // BLUE LIGHTER
                              + 'color: white;'
                              + 'font-size: 13px;}'
                             // + 'box-shadow: 0px 1px 4px 0px rgb(0,0,0,0.16);}'
                          + '.progress-box .actions.actions-right .btn {'
                              + 'font-weight: 550;}'
                          /* COURSE LEVELS */
                          + '.btn.btn-light-green {'
                              + 'background: linear-gradient(0deg, #7ec926 50%, #7ed11c 50%);' // BLUE LIGHTER
                              + 'color: #fff;'
                              + 'box-shadow: 0px 2px 0px -1px rgba(255,255,255,0.2) inset;'
                              + 'border: 1px solid #7fcc2b;'
                              + 'font-size: 13px;}'
                          + '.btn.btn-light-green:hover, .btn.btn-light-green:active, .btn.btn-light-green:focus {'
                              + 'background: linear-gradient(0deg, #7ec926 50%, #7ed11c 50%);' // GREEN GRADIENT
                              + 'box-shadow: 0px 2px 0px -1px rgba(255,255,255,0.2) inset;'
                              + 'border: 1px solid #7fcc2b;'
                              + 'color: #fff;}'
                          + '.things {'
                              + 'box-shadow: 0px 2px 4px 0px rgb(0,0,0,0.16);}'
                          + 'a.level-nav {'
                              + 'box-shadow: 0px 2px 4px 0px rgb(0,0,0,0.16);}'
                          /* SESSION */
                          /* Review Classic */
                          + '.session-header.review {'
                              + 'background: linear-gradient(0deg, #34a9ec 0%, #25a1f3 100%);' //#2297e4
                              + 'box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2)}'
                          + '.session-header .header-block.header-middle .course-details-wrapper .course-details .course-title {'
                              + 'font-size: 18px;'
                              + 'font-weight: 500;'
                              + 'color: #545a5ebf;}'
                          + '.session-header.review .header-block.header-middle .course-details-wrapper .course-details .course-info {'
                              + 'font-weight: 500;'
                              + 'color: #fff;'
                              + 'text-shadow: 0px 1px 3px rgba(0,0,0,0.2)}'
                          + '.session-header .header-block.header-middle .bar-wrapper .bar {'
                              + 'background-color: #85d82a;' // GREEN BRIGHTER
                              + 'box-shadow: 0px -1px 5px 0px #85d82a;}'
                          + '.btn {'
                              + 'box-shadow: 0px 2px 4px 0px rgb(0,0,0,0.16);}'
                          + '.btn:active, .btn:focus {'
                              + 'background-color: inherit;}'
                          + '.garden-box .keyboard a {'
                              + 'background-color: #fff;'
                              + 'box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2);}'
                          + '.garden-box .keyboard a:hover {'
                              + 'box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);}'
                          + 'button.next-button {'
                              + 'text-shadow: 0px 1px 3px rgba(0,0,0,0.2)}'
                          + 'button.next-button .next-text {'
                              + 'color: #fff;}'
                          + 'button.next-button.active, button.next-button:hover, button.next-button:focus {'
                              + 'background-color: #6ac6fa}'// BLUE LIGHTER
                          + '.btn.btn-secondary {'
                              + 'color: #2C3445;' //BLACK
                              + 'background-color: #fff;'
                              + 'border: solid 1px lightgrey;}'
                          + '.btn.btn-secondary:hover {'
                              + 'color: #2C3445;' //BLACK
                              + 'background-color: #f2f2f2;}'
                          + '.ico.ico-white, a.ico-white.audio-player {'
                              + 'background-image: url("https://static.memrise.com/img/sprites/icons-grey-dark.v5@2x.png");}'
                          + '@media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 1.5dppx) {'
                            +'.ico.ico-white,a.ico-white.audio-player {'
                              + 'background-image:url("https://static.memrise.com/img/sprites/icons-grey-dark.v5@2x.png");}}'
                          + '.ico-stop {'
                              + 'background-position: -108px -90px;}'
                          // Classic Session Complete
                          + '#page-header.review {'
                              + 'background-color: #25a2f4;}'
                          + '#session-complete-banner {'
                              + 'padding: 20px 0px 15px 0px;}'
                          + '#session-complete-banner p {'
                              + 'color: #fff;}'
                          + '.garden-box.end_of_session .next_btn {'
                              + 'background: linear-gradient(0deg, #69c3f4 50%,  #6ec8f9 50%);' // ORIGINAL BUTTON
                              + 'color: #fff;'
                              + 'border: solid 1px #35b0ef;'
                              + 'box-shadow: 0px 2px 0px -1px rgba(255,255,255,0.2) inset;}'
                          + '.whitebox {'
                              + 'box-shadow: 0px 1px 3px rgba(0,0,0,0.16);}'
                          + '.garden-box.end_of_session .course_box .top .levels {'
                              + 'background-color: #fff;'
                              + 'box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.16);}'
                          + '.garden-box.end_of_session .course_box .top .levels .text {'
                              + 'color: #2C3445;}'
                          + '.garden-box.end_of_session .course_box .top .image {'
                              + 'border-radius: 5px;'
                              + 'box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);}'
                          /* Speed Review */
                          + '.session-header.speed {'
                              + 'background-color: #f54339;}'
                          /* Learning Session */
                          + '.session-header.learn {'
                              + 'background: linear-gradient(0deg, #1fb841 0%, #22b73d 100%);}'
                          + '.garden-box.presentation .mempty-message .btn {'
                              + 'background-color: #fff;}'
                          + '.btn.btn-primary:hover, .btn.btn-primary:active, .btn.btn-primary:focus {'
                              + 'background-color: #6ac6fa;' // BLUE LIGHTER
                              + 'color: #fff;}'
                          + '.garden-box .shiny-box.active {'
                              + 'color: #fff;'
                              + 'background-color: #ab5f86;}'
                          + '#page-header.learn {'
                              + 'background-color: #13ba37;}'
                          /* PROFILE PAGE */
                          + '.sidebar-tabs.sidebar-tabs-green li.active a {'
                              + 'background-color: #7fcc2b;' // GREEN
                              + 'color: #fff;}'
                          + '.sidebar-tabs.sidebar-tabs-green li.active a .tail:before, .sidebar-tabs.sidebar-tabs-green li.active a .tail:after {'
                              + 'border-left: 23px solid #7fcc2b;}' // GREEN
                          /* FOOTER */
                          + '.footer-root {'
                              + 'background-color: #e6e6e6;'
                              + 'background-image: url(https://i.ibb.co/vBq2z88/22.png);'
                              + 'border-top: solid white 2px;'
                              + 'border-style: ridge;}'
                          + '.footer-link {'
                              + 'color: black;}'
                          /* FORUMS */
                          + '.d-header {'
                              + 'background-color: #11a3ee;}' // BLUE

    document.body.appendChild(myStylesheet);
}) ();

/* Need to take the href IFs outside instead of self running everything */

/* Spaghetti; need to move to stylesheet */
(function navbarGarden() {
    var navbarRoot = document.querySelector(".rebrand-header-root");
    if (navbarRoot) {
        navbarRoot.style.backgroundColor = "#11a3ee";
        /* Logo */
        var logo = navbarRoot.querySelector("img");
        logo.src = 'https://static.memrise.com/img/logo/head@2x.png?v=5d00e0';
        logo.style.maxHeight = '44px';
        /* Buttons */
        var navItem = document.querySelectorAll('.header-nav-item.plain');
        for (let item of navItem) {
            item.style.paddingBottom = '4px';
        }

        var navSignup = document.querySelector('.nav-item-btn.wider.rebrand-sign-up');
        if (navSignup) {
            navSignup.style.paddingTop = '10px';
            navSignup.style.paddingBottom = '12px';
            navSignup.style.backgroundColor = '#7fcc2b';
            navSignup.style.boxShadow = '0px 2px 3px 0px rgba(0, 0, 0, 0.1)';
            var navSignupTxt = document.querySelector('.rebrand-sign-up-text');
            navSignupTxt.style.color = '#ffffff';
        }

        var navSubscribe = document.querySelector('.header-nav-item.colored.premium');
        if (navSubscribe) {
            navSubscribe.style.paddingTop = '6px';
            navSubscribe.style.paddingBottom = '10px';
            navSubscribe.style.backgroundColor = '#da326b';
        }
    }
}) ();

/* Footer */
(function footerGarden() {
    var swoosh = document.querySelector('.footer-swoosh');
    if (swoosh) {
        swoosh = swoosh.querySelector('img').remove();
    }
    var footerLogo = document.querySelector('.footer-logo-container');
    if (footerLogo) {
        footerLogo = footerLogo.querySelector('img');
        footerLogo.src = "https://i.postimg.cc/76tMJ6MW/memrise-LOGO-new1.png";
    }
}) ();

/* Course Page */
(function courseGarden(){
    var url = location.href;
    if (location.href.match(/https:\/\/app\.memrise\.com\/course\/.*/)) {
        setTimeout(function() {
            var a = 0; var b; var c = 2;
            var buttons = document.querySelector('.actions.actions-right');
            if (buttons) {
                buttons = buttons.children;
                if (buttons.length == 4) {
                    b = 1;
                } else if (buttons.length == 3) {
                    c = 1;
                } else {a = null; b = null; c = null}

                if (c == 1 | c == 2){
                    buttons[c].style.background = "linear-gradient(0deg, #f0673f 50%, #f0673f 50%)";
                    buttons[c].style.border = 'solid 1px #f0673f';
                }
                if (b == 1) {
                    buttons[b].style.background = "linear-gradient(0deg, #c875d6 50%, #c875d6 50%)";
                    buttons[b].style.border = 'solid 1px #c875d6';
                }
                if (a === 0) {
                    buttons[a].style.background = "linear-gradient(0deg, #fbb963 50%, #fbb963 50%)"
                    buttons[a].style.border = 'solid 1px #fbb963';
                }
            }
        }, 100)
    }
}) ();

(function sessionReview() {
    if (location.href.match(/classic_review/)) {
        document.body.style.backgroundColor = '#fff';
        var myStylesheet = document.querySelector('[id=\'myStylesheet\']').sheet;
        myStylesheet.insertRule('body::before {'
                              + 'content: \'\';'
                              + 'background-image: url(https://webdesign-assistant.com/background-editor/transparant-textures/texture-9049.png);'
                              + 'opacity: 0.2;'
                              + 'position: absolute;'
                              + 'top: 0;'
                              + 'left: 0;'
                              + 'right: 0;'
                              + 'bottom: 0;}');
    }
}) ();

(function profileGarden() {
    if (location.href.match(/https:\/\/app.memrise.com\/user\/*/)) {
        var pageHead = document.querySelector('[id=\'page-head\']');
        pageHead.style.background = 'linear-gradient(0deg,#2183e3 0%, rgba(44,153,232,1) 70%,  #34a9ec 100%)';
        pageHead.style.boxShadow = '0px 2px 3px 0px rgba(0,0,0,0.2) inset'
        }
}) ();

(function homeGarden() {
    function repositionTitle() {
        var pageHead = document.querySelector('[id=\'page-head\']');
        var filterContainer = document.querySelector('.courses-filter-container');
        var titleContainer = document.querySelector('.title-container');
        pageHead.style.height = '0px';
        pageHead.style.padding = '0px';
        try {
            filterContainer.style.marginTop = '0px';
            console.log("Filter Repositioned")
        } catch(err) {console.log("Failed to Reposition Filter")}
        try {
            titleContainer.style.marginLeft = '0px';
            console.log("Title Repositioned")
        } catch(err) {console.log("Failed to Reposition Title")}
    }

    if (location.href.match(/https:\/\/app.memrise.com\/home\/*/)) {
        var pageHead = document.querySelector('[id=\'page-head\']');
        pageHead.style.marginTop = '0px';
        /* Reposition Title and Filter back into place */
        repositionTitle();
        const targetNode = document.querySelector('.tabbed-main.page.sel-dashboard');
        const config = {attributes: true, childList: true, subtree: true}
        const titleObserver = new MutationObserver(function (mutations) {
            titleObserver.disconnect();
            for (let mutation of mutations) {
                if ((mutation.type == "attributes" || "childList") && mutation.target == document.querySelector('.title-container')) {
                    console.log(mutation.attributeName);
                    repositionTitle();
                    }
            }
            titleObserver.observe(targetNode, config)
        });
        titleObserver.observe(targetNode, config)

        /* CLUSTERFUCK AHEAD (it's a drawing) */
        var world = document.createElement('div');
        world.id = "world";
        var forest = document.createElement('div');
        forest.id = "forest";
        var sun0 = document.createElement('div');
        var sun1 = document.createElement('div');
        var sun2 = document.createElement('div');
        var sun3 = document.createElement('div');
        var sun4 = document.createElement('div');
        sun0.id = "sun0";
        sun1.id = "sun1";
        sun2.id = "sun2";
        sun3.id = "sun3";
        sun4.id = "sun4";

        var treeA = document.createElement('img');
        var treeB1 = document.createElement('img');
        var treeB2 = document.createElement('img');
        var treeB3 = document.createElement('img');
        var treeB4 = document.createElement('img');
        var treeB5 = document.createElement('img');
        var treeB6 = document.createElement('img');
        var treeB7 = document.createElement('img');
        var treeB8 = document.createElement('img');
        var treeB = [treeB1, treeB2, treeB3, treeB4, treeB5, treeB6, treeB7, treeB8]
        var treeC1 = document.createElement('img');
        var treeC2 = document.createElement('img');
        var treeD1 = document.createElement('img');
        var treeD2 = document.createElement('img');
        var treeD3 = document.createElement('img');
        var treeD4 = document.createElement('img');
        var treeD5 = document.createElement('img');
        var treeD6 = document.createElement('img');
        var treeD7 = document.createElement('img');
        var treeD8 = document.createElement('img');
        var treeD9 = document.createElement('img');
        var treeD = [treeD1, treeD2, treeD3, treeD4, treeD5, treeD6, treeD7, treeD8, treeD9]
        var treeE1 = document.createElement('img');
        var treeE2 = document.createElement('img');
        var treeE3 = document.createElement('img');
        var treeE4 = document.createElement('img');
        var treeE5 = document.createElement('img');
        var treeE6 = document.createElement('img');
        var treeE7 = document.createElement('img');
        var treeE8 = document.createElement('img');
        var treeE9 = document.createElement('img');
        var treeE10 = document.createElement('img');
        var treeE11 = document.createElement('img');
        var treeE12 = document.createElement('img');
        var treeE13 = document.createElement('img');
        var treeE14 = document.createElement('img');
        var treeE15 = document.createElement('img');
        var treeE16 = document.createElement('img');
        var treeE17 = document.createElement('img');
        var treeE18 = document.createElement('img');
        var treeE19 = document.createElement('img');
        var treeE20 = document.createElement('img');
        var treeE1a = document.createElement('img');
        var treeE1b = document.createElement('img');
        var treeE1c = document.createElement('img');
        var treeE1d = document.createElement('img');
        var treeE1e = document.createElement('img');
        var treeE1f = document.createElement('img');
        var treeE = [treeE1, treeE2, treeE3, treeE4, treeE5, treeE6, treeE7, treeE8, treeE9, treeE10,
                    treeE11, treeE12, treeE13, treeE14, treeE15, treeE16, treeE17, treeE18, treeE19, treeE20,
                    treeE1a, treeE1b, treeE1c, treeE1d, treeE1e, treeE1f]
        treeA.src = "https://cms-assets.tutsplus.com/uploads/users/358/posts/23606/final_image/00-final-product.png";
        treeA.style.cssText = "position: absolute; bottom: 29px; left: 290px; height: 18px";
        for (let tree of treeB) {
            tree.src = "https://static.skillshare.com/uploads/discussion/tmp/187b7453";
        }
        treeB1.style.cssText = "position: absolute; bottom: 15px; left: 294px; height: 40px";
        treeB2.style.cssText = "position: absolute; bottom: 18px; left: 304px; height: 45px";
        treeB3.style.cssText = "position: absolute; bottom: 17px; left: 318px; height: 38px";
        treeB4.style.cssText = "position: absolute; bottom: 19px; left: 330px; height: 40px";
        treeB5.style.cssText = "position: absolute; bottom: 18px; left: 345px; height: 35px";
        treeB6.style.cssText = "position: absolute; bottom: 17px; left: 350px; height: 49px";
        treeB7.style.cssText = "position: absolute; bottom: 17px; left: 368px; height: 41px";
        treeB8.style.cssText = "position: absolute; bottom: 18px; left: 383px; height: 35px";
        treeC1.src = "https://static.dribbble.com/users/1973689/screenshots/4522980/trengle_tree.png";
        treeC2.src = "https://static.dribbble.com/users/1973689/screenshots/4522980/trengle_tree.png";
        treeC1.style.cssText = "position: absolute; bottom: 30px; left: 292px; height: 22px";
        treeC2.style.cssText = "position: absolute; bottom: 28px; left: 445px; height: 21px";
        for (let tree of treeD) {
            tree.src = "https://i.pinimg.com/originals/db/9e/9b/db9e9b45d65ef62782065aa76a5f912b.png";
        }
        treeD1.style.cssText = "position: absolute; bottom: 29px; left: 420px; height: 13px";
        treeD2.style.cssText = "position: absolute; bottom: 28px; left: 426px; height: 12px";
        treeD3.style.cssText = "position: absolute; bottom: 26px; left: 431px; height: 11px";
        treeD4.style.cssText = "position: absolute; bottom: 25px; left: 436px; height: 11px";
        treeD5.style.cssText = "position: absolute; bottom: 25px; left: 440px; height: 12px";
        treeD6.style.cssText = "position: absolute; bottom: 27px; left: 447px; height: 16px";
        treeD7.style.cssText = "position: absolute; bottom: 24px; left: 455px; height: 13px";
        treeD8.style.cssText = "position: absolute; bottom: 26px; left: 470px; height: 10px";
        treeD9.style.cssText = "position: absolute; bottom: 27px; left: 480px; height: 8px";
        for (let tree of treeE) {
            tree.src = "https://www.pngkit.com/png/full/14-143873_google-search-tree-render-tree-photoshop-pine-tree.png"
        }
        treeE1f.style.cssText = "position: absolute; bottom: 31px; left: 463px; height: 11px";
        treeE1e.style.cssText = "position: absolute; bottom: 31px; left: 466px; height: 8px";
        treeE1d.style.cssText = "position: absolute; bottom: 31px; left: 468px; height: 9px";
        treeE1c.style.cssText = "position: absolute; bottom: 30px; left: 469px; height: 8px";
        treeE1b.style.cssText = "position: absolute; bottom: 31px; left: 471px; height: 10px";
        treeE1a.style.cssText = "position: absolute; bottom: 31px; left: 473px; height: 8px";
        treeE1.style.cssText = "position: absolute; bottom: 31px; left: 475px; height: 8px";
        treeE2.style.cssText = "position: absolute; bottom: 30px; left: 477px; height: 9px";
        treeE3.style.cssText = "position: absolute; bottom: 31px; left: 478px; height: 8px";
        treeE4.style.cssText = "position: absolute; bottom: 31px; left: 479px; height: 7px";
        treeE5.style.cssText = "position: absolute; bottom: 30px; left: 480px; height: 7px";
        treeE6.style.cssText = "position: absolute; bottom: 30px; left: 481px; height: 6px";
        treeE7.style.cssText = "position: absolute; bottom: 31px; left: 483px; height: 7px";
        treeE8.style.cssText = "position: absolute; bottom: 31px; left: 485px; height: 9px";
        treeE9.style.cssText = "position: absolute; bottom: 31px; left: 487px; height: 8px";
        treeE10.style.cssText = "position: absolute; bottom: 30px; left: 490px; height: 8px";
        treeE11.style.cssText = "position: absolute; bottom: 30px; left: 492px; height: 8px";
        treeE12.style.cssText = "position: absolute; bottom: 31px; left: 494px; height: 8px";
        treeE13.style.cssText = "position: absolute; bottom: 30px; left: 497px; height: 7px";
        treeE14.style.cssText = "position: absolute; bottom: 31px; left: 499px; height: 8px";
        treeE15.style.cssText = "position: absolute; bottom: 30px; left: 501px; height: 8px";
        treeE16.style.cssText = "position: absolute; bottom: 30px; left: 503px; height: 7px";
        treeE17.style.cssText = "position: absolute; bottom: 31px; left: 505px; height: 7px";
        treeE18.style.cssText = "position: absolute; bottom: 31px; left: 507px; height: 6px";
        treeE19.style.cssText = "position: absolute; bottom: 31px; left: 509px; height: 6px";
        treeE20.style.cssText = "position: absolute; bottom: 31px; left: 512px; height: 6px";

        var gifFLOWER = document.createElement('img'); // Dancing FLOWER
        var gifSTUMP = document.createElement('img'); // Dancing STUMP
        var gifTOTORO = document.createElement('img'); // Big tree TOTORO
        var gifPLANESNAKE = document.createElement('img'); // Flying PLANESNAKE
        gifFLOWER.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29baea34-ae86-4d5e-b859-53cf8da2bf5d/d8itm1u-37bdab49-21dc-48c2-88b1-1d89732bc71f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjliYWVhMzQtYWU4Ni00ZDVlLWI4NTktNTNjZjhkYTJiZjVkXC9kOGl0bTF1LTM3YmRhYjQ5LTIxZGMtNDhjMi04OGIxLTFkODk3MzJiYzcxZi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.A3NFv1WCjHMSfa34PRuaW8JPYunJJuUr_Nw3d7IhLfY";
        gifFLOWER.style.cssText = "position: absolute; bottom: 42px; left: 410px; height: 10px;";
        gifSTUMP.src = "https://cdn.gamedevmarket.net/wp-content/uploads/20191203193341/c6ecdbbce9a5a87214e16404454cf901910413ba.gif";
        gifSTUMP.style.cssText = "position: absolute; bottom: 38px; left: 225px; height: 20px;";
        gifTOTORO.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2c1b4b5-0818-4170-81ad-e2a57f42f28f/d5srh9z-e8956766-4d0c-446b-b0ba-cc125b018a35.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjJjMWI0YjUtMDgxOC00MTcwLTgxYWQtZTJhNTdmNDJmMjhmXC9kNXNyaDl6LWU4OTU2NzY2LTRkMGMtNDQ2Yi1iMGJhLWNjMTI1YjAxOGEzNS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.O5veopYKyKEGEcfbIIxp_wzEM2TkcNc_S7WhQHzXQxI";
        gifTOTORO.style.cssText = "position: absolute; bottom: 26px; left: 250px; height: 80px;";
        gifPLANESNAKE.src = "https://31.media.tumblr.com/7cec225f4f82c766b3c21dd39228f091/tumblr_ms5vivHqeu1ra4iaeo2_500.gif";
        gifPLANESNAKE.style.cssText = "position: absolute; bottom: 61px; left: 303px; height: 40px;"

        var flowersA1 = document.createElement('img');
        var flowersA2 = document.createElement('img');
        var flowersA3 = document.createElement('img');
        var flowersA4 = document.createElement('img');
        var flowersA5 = document.createElement('img');
        var flowersA6 = document.createElement('img');
        var flowersA7 = document.createElement('img');
        var flowersA8 = document.createElement('img');
        var flowersA9 = document.createElement('img');
        var flowersA10 = document.createElement('img');
        var flowersA10a = document.createElement('img');
        var flowersA11 = document.createElement('img');
        var flowersA12 = document.createElement('img');
        var flowersA13 = document.createElement('img');
        var flowersA14 = document.createElement('img');
        var flowersA = [flowersA1, flowersA2, flowersA3, flowersA4, flowersA5, flowersA6, flowersA7, flowersA8, flowersA9, flowersA10,
                        flowersA10a, flowersA11, flowersA12, flowersA13, flowersA14]
        for (let flower of flowersA) {
            flower.src = "https://img2.pngio.com/field-of-flowers-transparent-png-clipart-free-download-yawd-field-rose-png-4000_1526.png";
        }
        flowersA1.style.cssText = "position: absolute; bottom: 22px; left: 455px; height: 7px";
        flowersA2.style.cssText = "position: absolute; bottom: 21px; left: 450px; height: 7px";
        flowersA3.style.cssText = "position: absolute; bottom: 20px; left: 445px; height: 7px";
        flowersA4.style.cssText = "position: absolute; bottom: 18px; left: 440px; height: 7px";
        flowersA5.style.cssText = "position: absolute; bottom: 18px; left: 437px; height: 7px";
        flowersA6.style.cssText = "position: absolute; bottom: 19px; left: 433px; height: 7px";
        flowersA7.style.cssText = "position: absolute; bottom: 17px; left: 430px; height: 7px";
        flowersA8.style.cssText = "position: absolute; bottom: 22px; left: 425px; height: 7px";
        flowersA9.style.cssText = "position: absolute; bottom: 19px; left: 422px; height: 7px";
        flowersA10.style.cssText = "position: absolute; bottom: 20px; left: 419px; height: 7px";
        flowersA10a.style.cssText = "position: absolute; bottom: 20px; left: 417px; height: 7px";
        flowersA11.style.cssText = "position: absolute; bottom: 22px; left: 415px; height: 7px";
        flowersA12.style.cssText = "position: absolute; bottom: 24px; left: 412px; height: 7px";
        flowersA13.style.cssText = "position: absolute; bottom: 27px; left: 409px; height: 7px";
        flowersA14.style.cssText = "position: absolute; bottom: 25px; left: 406px; height: 7px";
        // https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/6/67/Tall_Seagrass_JE1_BE2.gif/225px-Tall_Seagrass_JE1_BE2.gif?version=cc2389ea206a5ebf7543a20242d8a3fd

        var cloudA1 = document.createElement('img');
        var cloudA2 = document.createElement('img');
        var cloudB1 = document.createElement('img');
        var cloudB2 = document.createElement('img');
        var cloudB3 = document.createElement('img');
        var cloudB4 = document.createElement('img');
        var cloudB = [cloudB1, cloudB2, cloudB3, cloudB4]
        var cloudC1 = document.createElement('img');
        var cloudC2 = document.createElement('img');
        cloudA1.src = "https://images.squarespace-cdn.com/content/v1/5b67bd13ee1759e688f9168c/1568630726352-MFT3S219SEPRTYP5U60Q/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/newsroom.gif"
        cloudA1.style.cssText = "position: absolute; bottom: 90px; left: 300px; height: 30px; opacity: 0.8;";
        cloudA2.src = "https://images.squarespace-cdn.com/content/v1/5b67bd13ee1759e688f9168c/1568630726352-MFT3S219SEPRTYP5U60Q/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxq_kr5JmUSWzdbeQhVZ8KGVEAfgr0ybhloMHNIqvT8SMftTfHgE5YY4gbHxAHibYY/newsroom.gif"
        cloudA2.style.cssText = "position: absolute; bottom: 65px; left: 490px; height: 20px; opacity: 0.7;";
        for (let cloud of cloudB) {
            cloud.src = "https://www.cloudjournee.com/wp-content/uploads/2019/02/white-clouds-png-xw_medium_cloud-white-big.png.pagespeed.ic_.5HYAxMiTu_.png";
        }
        cloudB1.style.cssText = "position: absolute; bottom: 28px; left: 330px; height: 40px; opacity: 1;";
        cloudB2.style.cssText = "position: absolute; bottom: 28px; left: 300px; height: 35px; opacity: 0.8;";
        cloudB3.style.cssText = "position: absolute; bottom: 25px; left: 250px; height: 55px; opacity: 0.6;";
        cloudB4.style.cssText = "position: absolute; bottom: 25px; left: 210px; height: 35px; opacity: 0.4;";
        cloudC1.src = "https://images.vexels.com/media/users/3/154714/isolated/preview/3717a3b3e817ac0b6d489c872211926c-puffy-cloud-illustration-by-vexels.png";
        cloudC1.style.cssText = "position: absolute; bottom: 15px; left: 370px; height: 100px; opacity: 0.6;";
        cloudC2.src = "https://images.vexels.com/media/users/3/154714/isolated/preview/3717a3b3e817ac0b6d489c872211926c-puffy-cloud-illustration-by-vexels.png";
        cloudC2.style.cssText = "position: absolute; bottom: 10px; left: 415px; height: 95px; opacity: 0.6;";
        cloudC2.style.transform = "rotate(10deg)";

        var hillA = document.createElement('img');
        var hillB = document.createElement('img');
        var hillC = document.createElement('img');
        hillA.src = "https://freesvg.org/img/nicubunu_RPG_map_symbols_hill_2.png";
        hillA.style.cssText = "position: absolute; bottom: 21px; left: 300px; height: 45px";
        hillB.src = "https://cdn.pixabay.com/photo/2014/12/22/00/01/hill-576591_960_720.png";
        hillB.style.cssText = "position: absolute; bottom: 29px; left: 381px; height: 27px";
        hillC.src = "https://cdn.pixabay.com/photo/2014/12/22/00/01/hill-576591_960_720.png";
        hillC.style.cssText = "position: absolute; bottom: 29px; left: 215px; height: 25px";
        var mountainA = document.createElement('img');
        var mountainB = document.createElement('img');
        mountainA.src = "https://i.postimg.cc/nVYcsxLn/pngegg.png";
        mountainA.style.cssText = "position: absolute; bottom: 28px; left: 410px; height: 45px; opacity: 0.9;";
        mountainB.src = "https://i.pinimg.com/originals/80/83/93/80839372210a5f22e68a753822d3623e.png";
        mountainB.style.cssText = "position: absolute; bottom: 29px; left: 365px; height: 32px; opacity: 0.9;";
        var lakeA = document.createElement('img');
        lakeA.src = "https://cdn.fs.learnzillioncdn.com/hiZRcHFSreW31OgB3Luq?dl=true&policy=eyJjYWxsIjoicmVhZCxjb252ZXJ0IiwiaGFuZGxlIjoiaGlaUmNIRlNyZVczMU9nQjNMdXEiLCJleHBpcnkiOjE4OTM0NTYwMDB9&signature=04b3ba5a495e8fbdf335f1a739f22e164f5fca261681f1da0e62d379f359de9b";
        lakeA.style.cssText = "position: absolute; bottom: 24px; left: 512px; height: 14px";
        var waterfallA = document.createElement('img');
        waterfallA.src = "https://img.itch.zone/aW1hZ2UvMzY3MTM2LzE4MzgxNjQuZ2lm/original/slbMl%2F.gif";
        waterfallA.style.cssText = "position: absolute; bottom: 28px; left: 379px; height: 33px; opacity: 0.9;";
        // https://i.imgur.com/R7Nn660.gif
        var beanstalk = document.createElement('img');
        beanstalk.src = "https://vignette.wikia.nocookie.net/knightsandbrides/images/c/ca/Beanstalk_stage3.png/revision/latest?cb=20170920052748";
        beanstalk.style.cssText = "position: absolute; bottom: 28px; left: 395px; height: 90px; opacity: 0.7;";
        var pagoda = document.createElement('img');
        pagoda.src = "https://i.pinimg.com/originals/ab/49/66/ab49663c277146031f41fd98b7675ced.png";
        pagoda.style.cssText = "position: absolute; bottom: 34px; left: 293px; height: 40px; opacity: 0.7;";
        var airshipA = document.createElement('img');
        var airshipB = document.createElement('img');
        airshipA.src = "https://s3images.coroflot.com/user_files/individual_files/123038_HrVx6CLzghT65RWBBCPQ6tKxu.gif";
        airshipA.style.cssText = "position: absolute; bottom: 60px; left: 400px; height: 25px;";
        airshipB.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84541361-031d-4cdc-a8b5-b6c5211f066e/d4y1hy4-cc92734c-8b43-423f-8200-bb736a790213.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODQ1NDEzNjEtMDMxZC00Y2RjLWE4YjUtYjZjNTIxMWYwNjZlXC9kNHkxaHk0LWNjOTI3MzRjLThiNDMtNDIzZi04MjAwLWJiNzM2YTc5MDIxMy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.O8xUCqNk1_glcTIWWf-To-8gon_jNT6Ek4H3WDN8lEs";
        airshipB.style.cssText = "position: absolute; bottom: 38px; left: 472px; height: 15px;";

        var plantingA = document.createElement('img');
        plantingA.src = "https://appstickers-cdn.appadvice.com/1018795567/834970606/525e09c5087bf8962de79caf30cc9bf2-5.gif";
        plantingA.style.cssText = "position: absolute; bottom: 30px; left: 545px; height: 35px;";
        var constructionA = document.createElement('img'); // CONSTRUCTION SITE
        constructionA.src = "https://www.4syte.co.uk/wp-content/uploads/2019/02/Construction.png";
        constructionA.style.cssText = "position: absolute; bottom: 29px; left: 600px; height: 40px;";
        var constructionB = document.createElement('img'); // EXCAVATOR
        constructionB.src = "https://www.tomlinson.construction/img/sectors-education.gif";
        constructionB.style.cssText = "position: absolute; bottom: 29px; left: 665px; height: 20px;";
        var constructionC = document.createElement('img'); // BLACK SIGN WITH HAMMER GUY
        constructionC.src = "https://www.eddievan.com/images/under_construction_2.gif";
        constructionC.style.cssText = "position: absolute; bottom: 26px; left: 540px; height: 38px;";
        var constructionD = document.createElement('img'); // LARGE SIGN
        constructionD.src = "https://i.pinimg.com/originals/f9/28/e2/f928e27b6513d0d9c25a1b80293b12d1.png";
        constructionD.style.cssText = "position: absolute; bottom: 29px; left: 685px; height: 38px;";
        var constructionE = document.createElement('img'); // CONSTRUCTION SITE 2
        constructionE.src = "https://i0.wp.com/cad42.com/wp-content/uploads/2019/02/Fichier-13.png?w=1853&ssl=1";
        constructionE.style.cssText = "position: absolute; bottom: 21px; left: 725px; height: 38px;";
        var constructionF = document.createElement('img'); // Under Construction Sign Picachu
        constructionF.src = "https://numberless.net/wp-content/uploads/2020/02/pikaconstruction.gif";
        constructionF.style.cssText = "position: absolute; bottom: 29px; left: 570px; height: 15px;";
        var constructionG = document.createElement('img'); // Jackhammer Worker
        constructionG.src = "http://www.apbcon.co.uk/break_up_the_concrete_500_clr.gif";
        constructionG.style.cssText = "position: absolute; bottom: 22px; left: 760px; height: 10px;";

        // https://pixy.org/src/19/194900.png
        // https://cdn.pixabay.com/photo/2014/12/22/00/01/hill-576591_960_720.png
        // https://cdn.pixabay.com/photo/2014/12/22/00/01/hill-576593_960_720.png

        /* Bring images to front or back */
        gifSTUMP.style.zIndex = 10;
        gifTOTORO.style.zIndex = 9;
        gifFLOWER.style.zIndex = 9;
        flowersA1.style.zIndex = 12;
        flowersA2.style.zIndex = 12;
        flowersA3.style.zIndex = 12;
        flowersA4.style.zIndex = 12;
        flowersA5.style.zIndex = 12;
        flowersA6.style.zIndex = 12;
        flowersA7.style.zIndex = 12;
        flowersA8.style.zIndex = 12;
        flowersA9.style.zIndex = 12;
        flowersA10.style.zIndex = 12;
        flowersA10a.style.zIndex = 13;
        flowersA11.style.zIndex = 12;
        flowersA12.style.zIndex = 12;
        flowersA13.style.zIndex = 11;
        flowersA14.style.zIndex = 12;
        treeA.style.zIndex = 10;
        treeB1.style.zIndex = 10;
        treeB2.style.zIndex = 9;
        treeB3.style.zIndex = 10;
        treeB4.style.zIndex = 9;
        treeB5.style.zIndex = 10;
        treeB6.style.zIndex = 9;
        treeB7.style.zIndex = 10;
        treeB8.style.zIndex = 11;
        treeC1.style.zIndex = 8;
        treeC2.style.zIndex = 8;
        treeD1.style.zIndex = 9;
        treeD2.style.zIndex = 10;
        treeD3.style.zIndex = 11;
        treeD4.style.zIndex = 10;
        treeD5.style.zIndex = 9;
        treeD6.style.zIndex = 10;
        treeD7.style.zIndex = 9;
        treeD8.style.zIndex = 9;
        treeD9.style.zIndex = 9;
        cloudA1.style.zIndex = 4;
        cloudB1.style.zIndex = 4;
        cloudB2.style.zIndex = 3;
        cloudB3.style.zIndex = 2;
        cloudB4.style.zIndex = 1;
        cloudC1.style.zIndex = 0
        cloudC2.style.zIndex = 1
        beanstalk.style.zIndex = 1;
        hillA.style.zIndex = 5;
        hillB.style.zIndex = 7;
        hillC.style.zIndex = 7;
        mountainA.style.zIndex = 6;
        mountainB.style.zIndex = 6;
        waterfallA.style.zIndex = 7;
        pagoda.style.zIndex = 6;
        airshipA.style.zIndex = 2;
        airshipB.style.zIndex = 2;
        gifPLANESNAKE.style.zIndex = 3;
        treeE1f.style.zIndex = 7;
        treeE1e.style.zIndex = 7;
        treeE1d.style.zIndex = 7;
        treeE1c.style.zIndex = 7;
        treeE1b.style.zIndex = 7;
        treeE1a.style.zIndex = 7;
        treeE1.style.zIndex = 7;
        treeE2.style.zIndex = 7;
        treeE3.style.zIndex = 7;
        treeE4.style.zIndex = 7;
        treeE5.style.zIndex = 7;
        treeE6.style.zIndex = 7;
        treeE7.style.zIndex = 7;
        treeE8.style.zIndex = 7;
        treeE9.style.zIndex = 7;
        treeE10.style.zIndex = 7;
        treeE11.style.zIndex = 7;
        treeE12.style.zIndex = 7;
        treeE13.style.zIndex = 7;
        treeE14.style.zIndex = 7;
        treeE15.style.zIndex = 7;
        treeE16.style.zIndex = 7;
        treeE17.style.zIndex = 7;
        treeE18.style.zIndex = 7;
        treeE19.style.zIndex = 7;
        treeE20.style.zIndex = 7;
        plantingA.style.zIndex = 6;
        constructionC.style.zIndex = 7;
        /* List of all elements to attach to the DOM */
        var elements = [sun4, sun3, sun2, sun1, sun0, treeA, treeC1, treeC2, treeD1,
                        gifSTUMP, gifTOTORO, gifFLOWER,
                        cloudA1, cloudA2, cloudC1, cloudC2, airshipA, airshipB,
                        hillA, hillB, hillC, mountainA, mountainB, waterfallA,
                        constructionA, constructionB, constructionD,
                        constructionE, constructionF, constructionG]
        for (let tree of treeB) {
            elements.push(tree) // B Trees
        }
        for (let tree of treeD) {
            elements.push(tree) // C Trees
        }
        for (let tree of treeE) {
            elements.push(tree) // C Trees
        }
        for (let flower of flowersA) {
            elements.push(flower) // A flowers
        }
        for (let cloud of cloudB) {
            elements.push(cloud) // B Clouds
        }
        /* Attach all elements to container */
        for (let element of elements) {
            forest.appendChild(element)
        }
        world.appendChild(forest);
        document.querySelector('[id=\'header\']').appendChild(world);
    }
    }) ();

(function loginGarden() {
    if (location.href == "https://app.memrise.com/login/") {
        var background = document.querySelector(".content-container");
        background.style.backgroundColor = "#37a9d9";
        background.style.boxShadow = "0px 2px 5px 0px rgba(0,0,0,0.16) inset"
        var myStylesheet = document.querySelector('[id=\'myStylesheet\']').sheet;
        myStylesheet.insertRule('.content-container::before {'
                              + 'content: \'\';'
                              + 'background-image: url(https://webdesign-assistant.com/background-editor/transparant-textures/texture-9049.png);'
                              + 'opacity: 0.2;'
                              + 'position: absolute;'
                              + 'top: 0;'
                              + 'left: 0;'
                              + 'right: 0;'
                              + 'bottom: 0;}');
    }
}) ();

(function forumGarden() {
    console.log('frum gardn');
    console.log(location.href);
    if(location.href.match(/https:\/\/community.memrise.com\/*/)) {
        console.log('yees');
        var logo = document.querySelector('.d-header.clearfix').querySelector('img');
        logo.src = logo.src = 'https://static.memrise.com/img/logo/head@2x.png?v=5d00e0';
        logo.style.maxHeight = '44px';
    }
}) ();

})();
