function Tabs(options){

    var tabs = document.querySelector(options.el);
    var initCalled = false;
    var tabNavigation = tabs.querySelector(".c-tabs-nav");
    var tabNavigationLinks = tabs.querySelectorAll(".c-tabs-nav__link");
    var tabContentContainers = tabs.querySelectorAll(".c-tab");

    var marker = options.marker ? createNavMarker() : false;

    var activeIndex = 0;

    function init(){
        if (!initCalled){
            initCalled = true;

            for (var i = 0; i < tabNavigationLinks.length; i++){
                var link = tabNavigationLinks[i];
                clickHandlerSetup(link, i)
            }

            if (marker){
                setMarker(tabNavigationLinks[activeIndex]);
            }
        }
    }

    function clickHandlerSetup(link, index){
        link.addEventListener("click", function(e){
            e.preventDefault();
            goToTab(index);
        })
    }

    function goToTab(index){
        if (index >= 0 && index != activeIndex && index <= tabNavigationLinks.length){
            tabNavigationLinks[activeIndex].classList.remove('is-active');
            tabNavigationLinks[index].classList.add('is-active');

            tabContentContainers[activeIndex].classList.remove('is-active');
            tabContentContainers[index].classList.add('is-active');

            if (marker){
                setMarker(tabNavigationLinks[index]);
            }

            activeIndex = index;
        }
    }

    function createNavMarker(){

    }

    function setMarker(element){

    }

    return {
        init: init,
        goToTab: goToTab
    }
}


var m = new Tabs({
    el: "#tabs",
    marker: true
});

m.init();