import './app2.css'

import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget) //可以这样写
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')

    const index = $li.index()
    //不使用show、hide、css等jq的api，样式与行为分离
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

$tabBar.children().eq(0).trigger('click')