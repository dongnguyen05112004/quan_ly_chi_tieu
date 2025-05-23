<template>

    <div class="card radius-10 border-top border-5 border-0 border-info">
        <div class="card-header">
            <div class="row">
                <div class="col-lg-6 mt-2">
                    <h5>Báo cáo thống kê</h5>
                </div>
                <div class="col-lg-6 text-end"><button class="btn btn-info">Xem tất cả</button></div>
            </div>

        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <p class="mb-0 text-secondary">Tổng chi</p>
                                    <h4 class="my-1">$1105</h4>
                                    <p class="mb-0 font-13 text-success"><i
                                            class="bx bxs-down-arrow align-middle"></i>$34 from last week</p>
                                </div>
                                <div class="widgets-icons bg-light-success text-success ms-auto"><i
                                        class="bx bxs-wallet"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <p class="mb-0 text-secondary">Tổng thu</p>
                                    <h4 class="my-1">$4805</h4>
                                    <p class="mb-0 font-13 text-success"><i
                                            class="bx bxs-up-arrow align-middle"></i>$1038
                                        from last week</p>
                                </div>
                                <div class="widgets-icons bg-light-success text-success ms-auto"><i
                                        class="bx bxs-wallet"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card radius-10 overflow-hidden">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <p class="mb-0">Cảnh báo chi tiêu</p>
                                    <h5 class="mb-0">$52,945</h5>
                                </div>
                                <div class="ms-auto"> <i class="bx bx-wallet font-30"></i>
                                </div>
                            </div>
                            <div class="progress radius-10 mt-4" style="height:4.5px;">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 72%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-footer text-center">
            <button class="btn btn-danger">Xem báo cáo chi tiết</button>

        </div>
    </div>
    <div class="row">
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-body" style="position: relative;">
                        <div id="chart1" style="min-height: 375px;">
                            <div id="apexchartsrpw2jjqm"
                                class="apexcharts-canvas apexchartsrpw2jjqm apexcharts-theme-light"
                                style="width: 947px; height: 360px;"><svg id="SvgjsSvg2399" width="947" height="360"
                                    xmlns="http://www.w3.org/2000/svg" version="1.1"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                    class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                    style="background: transparent;">
                                    <g id="SvgjsG2401" class="apexcharts-inner apexcharts-graphical"
                                        transform="translate(47.23750019073486, 57.39999961853027)">
                                        <defs id="SvgjsDefs2400">
                                            <clipPath id="gridRectMaskrpw2jjqm">
                                                <rect id="SvgjsRect2424" width="898.7624998092651"
                                                    height="276.27999992370604" x="-4.5" y="-2.5" rx="0" ry="0"
                                                    opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"
                                                    fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="gridRectMarkerMaskrpw2jjqm">
                                                <rect id="SvgjsRect2425" width="909.7624998092651"
                                                    height="291.27999992370604" x="-10" y="-10" rx="0" ry="0"
                                                    opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"
                                                    fill="#fff"></rect>
                                            </clipPath>
                                            <linearGradient id="SvgjsLinearGradient2454" x1="0" y1="1" x2="1" y2="1">
                                                <stop id="SvgjsStop2455" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                    offset="0"></stop>
                                                <stop id="SvgjsStop2456" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                    offset="1"></stop>
                                                <stop id="SvgjsStop2457" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                    offset="1"></stop>
                                                <stop id="SvgjsStop2458" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                    offset="1"></stop>
                                            </linearGradient>
                                            <filter id="SvgjsFilter2460" filterUnits="userSpaceOnUse" width="200%"
                                                height="200%" x="-50%" y="-50%">
                                                <feFlood id="SvgjsFeFlood2461" flood-color="#000000" flood-opacity="0.1"
                                                    result="SvgjsFeFlood2461Out" in="SourceGraphic"></feFlood>
                                                <feComposite id="SvgjsFeComposite2462" in="SvgjsFeFlood2461Out"
                                                    in2="SourceAlpha" operator="in" result="SvgjsFeComposite2462Out">
                                                </feComposite>
                                                <feOffset id="SvgjsFeOffset2463" dx="14" dy="3"
                                                    result="SvgjsFeOffset2463Out" in="SvgjsFeComposite2462Out">
                                                </feOffset>
                                                <feGaussianBlur id="SvgjsFeGaussianBlur2464" stdDeviation="4 "
                                                    result="SvgjsFeGaussianBlur2464Out" in="SvgjsFeOffset2463Out">
                                                </feGaussianBlur>
                                                <feMerge id="SvgjsFeMerge2465" result="SvgjsFeMerge2465Out"
                                                    in="SourceGraphic">
                                                    <feMergeNode id="SvgjsFeMergeNode2466"
                                                        in="SvgjsFeGaussianBlur2464Out">
                                                    </feMergeNode>
                                                    <feMergeNode id="SvgjsFeMergeNode2467" in="[object Arguments]">
                                                    </feMergeNode>
                                                </feMerge>
                                                <feBlend id="SvgjsFeBlend2468" in="SourceGraphic"
                                                    in2="SvgjsFeMerge2465Out" mode="normal"
                                                    result="SvgjsFeBlend2468Out"></feBlend>
                                            </filter>
                                        </defs>
                                        <line id="SvgjsLine2409" x1="0" y1="0" x2="0" y2="271.27999992370604"
                                            stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0"
                                            y="0" width="1" height="271.27999992370604" fill="#b1b9c4" filter="none"
                                            fill-opacity="0.9" stroke-width="1"></line>
                                        <g id="SvgjsG2469" class="apexcharts-xaxis" transform="translate(0, 0)">
                                            <g id="SvgjsG2470" class="apexcharts-xaxis-texts-g"
                                                transform="translate(0, -4)"><text id="SvgjsText2472"
                                                    font-family="Helvetica, Arial, sans-serif" x="58.4321641665786"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2473">Feb '00</tspan>
                                                    <title>Feb '00</title>
                                                </text><text id="SvgjsText2475"
                                                    font-family="Helvetica, Arial, sans-serif" x="135.45638056797765"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2476">Mar '00</tspan>
                                                    <title>Mar '00</title>
                                                </text><text id="SvgjsText2478"
                                                    font-family="Helvetica, Arial, sans-serif" x="217.79261189361114"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2479">Apr '00</tspan>
                                                    <title>Apr '00</title>
                                                </text><text id="SvgjsText2481"
                                                    font-family="Helvetica, Arial, sans-serif" x="297.4728357571274"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2482">May '00</tspan>
                                                    <title>May '00</title>
                                                </text><text id="SvgjsText2484"
                                                    font-family="Helvetica, Arial, sans-serif" x="379.8090670827609"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2485">Jun '00</tspan>
                                                    <title>Jun '00</title>
                                                </text><text id="SvgjsText2487"
                                                    font-family="Helvetica, Arial, sans-serif" x="459.4892909462772"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2488">Jul '00</tspan>
                                                    <title>Jul '00</title>
                                                </text><text id="SvgjsText2490"
                                                    font-family="Helvetica, Arial, sans-serif" x="541.8255222719107"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2491">Aug '00</tspan>
                                                    <title>Aug '00</title>
                                                </text><text id="SvgjsText2493"
                                                    font-family="Helvetica, Arial, sans-serif" x="624.1617535975442"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2494">Sep '00</tspan>
                                                    <title>Sep '00</title>
                                                </text><text id="SvgjsText2496"
                                                    font-family="Helvetica, Arial, sans-serif" x="703.8419774610605"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2497">Oct '00</tspan>
                                                    <title>Oct '00</title>
                                                </text><text id="SvgjsText2499"
                                                    font-family="Helvetica, Arial, sans-serif" x="786.1782087866941"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2500">Nov '00</tspan>
                                                    <title>Nov '00</title>
                                                </text><text id="SvgjsText2502"
                                                    font-family="Helvetica, Arial, sans-serif" x="865.8584326502104"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="400" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2503">Dec '00</tspan>
                                                    <title>Dec '00</title>
                                                </text><text id="SvgjsText2505"
                                                    font-family="Helvetica, Arial, sans-serif" x="948.1946639758439"
                                                    y="300.27999992370604" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="12px" font-weight="600" fill="#9ba7b2"
                                                    class="apexcharts-text apexcharts-xaxis-label "
                                                    style="font-family: Helvetica, Arial, sans-serif;">
                                                    <tspan id="SvgjsTspan2506"></tspan>
                                                    <title></title>
                                                </text></g>
                                            <line id="SvgjsLine2507" x1="0" y1="272.27999992370604"
                                                x2="889.7624998092651" y2="272.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" stroke-width="1"></line>
                                        </g>
                                        <g id="SvgjsG2524" class="apexcharts-grid">
                                            <g id="SvgjsG2525" class="apexcharts-gridlines-horizontal">
                                                <line id="SvgjsLine2538" x1="0" y1="0" x2="889.7624998092651" y2="0"
                                                    stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline">
                                                </line>
                                                <line id="SvgjsLine2539" x1="0" y1="54.25599998474121"
                                                    x2="889.7624998092651" y2="54.25599998474121" stroke="#e0e0e0"
                                                    stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                <line id="SvgjsLine2540" x1="0" y1="108.51199996948242"
                                                    x2="889.7624998092651" y2="108.51199996948242" stroke="#e0e0e0"
                                                    stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                <line id="SvgjsLine2541" x1="0" y1="162.76799995422363"
                                                    x2="889.7624998092651" y2="162.76799995422363" stroke="#e0e0e0"
                                                    stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                <line id="SvgjsLine2542" x1="0" y1="217.02399993896483"
                                                    x2="889.7624998092651" y2="217.02399993896483" stroke="#e0e0e0"
                                                    stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                <line id="SvgjsLine2543" x1="0" y1="271.27999992370604"
                                                    x2="889.7624998092651" y2="271.27999992370604" stroke="#e0e0e0"
                                                    stroke-dasharray="0" class="apexcharts-gridline"></line>
                                            </g>
                                            <g id="SvgjsG2526" class="apexcharts-gridlines-vertical"></g>
                                            <line id="SvgjsLine2527" x1="58.4321641665786" y1="272.27999992370604"
                                                x2="58.4321641665786" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2528" x1="135.45638056797765" y1="272.27999992370604"
                                                x2="135.45638056797765" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2529" x1="217.79261189361114" y1="272.27999992370604"
                                                x2="217.79261189361114" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2530" x1="297.4728357571274" y1="272.27999992370604"
                                                x2="297.4728357571274" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2531" x1="379.8090670827609" y1="272.27999992370604"
                                                x2="379.8090670827609" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2532" x1="459.4892909462772" y1="272.27999992370604"
                                                x2="459.4892909462772" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2533" x1="541.8255222719107" y1="272.27999992370604"
                                                x2="541.8255222719107" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2534" x1="624.1617535975442" y1="272.27999992370604"
                                                x2="624.1617535975442" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2535" x1="703.8419774610605" y1="272.27999992370604"
                                                x2="703.8419774610605" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2536" x1="786.1782087866941" y1="272.27999992370604"
                                                x2="786.1782087866941" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2537" x1="865.8584326502104" y1="272.27999992370604"
                                                x2="865.8584326502104" y2="278.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                            <line id="SvgjsLine2545" x1="0" y1="271.27999992370604"
                                                x2="889.7624998092651" y2="271.27999992370604" stroke="transparent"
                                                stroke-dasharray="0"></line>
                                            <line id="SvgjsLine2544" x1="0" y1="1" x2="0" y2="271.27999992370604"
                                                stroke="transparent" stroke-dasharray="0"></line>
                                        </g>
                                        <g id="SvgjsG2427" class="apexcharts-line-series apexcharts-plot-series">
                                            <g id="SvgjsG2428" class="apexcharts-series" seriesName="Likes"
                                                data:longestSeries="true" rel="1" data:realIndex="0">
                                                <path id="SvgjsPath2459"
                                                    d="M 0 162.76799995422363C 28.81768096397172 162.76799995422363 53.51855036166177 248.0274285016741 82.33623132563349 248.0274285016741C 109.29470706612315 248.0274285016741 132.4019719865429 193.7714285169329 159.36044772703255 193.7714285169329C 188.17812869100428 193.7714285169329 212.87899808869432 201.5222856576102 241.69667905266604 201.5222856576102C 269.5847574048967 201.5222856576102 293.4888245639516 46.505142844063926 321.3769029161823 46.505142844063926C 350.194583880154 46.505142844063926 374.89545327784407 124.01371425083707 403.7131342418158 124.01371425083707C 431.6012125940465 124.01371425083707 455.5052797531014 100.7611428288051 483.3933581053321 100.7611428288051C 512.2110390693038 100.7611428288051 536.9119084669939 201.5222856576102 565.7295894309656 201.5222856576102C 594.5472703949373 201.5222856576102 619.2481397926274 178.26971423557825 648.0658207565991 178.26971423557825C 675.9538991088298 178.26971423557825 699.8579662678846 217.02399993896483 727.7460446201153 217.02399993896483C 756.563725584087 217.02399993896483 781.2645949817771 124.01371425083707 810.0822759457488 124.01371425083707C 837.9703542979795 124.01371425083707 861.8744214570345 232.52571422031946 889.7624998092651 232.52571422031946"
                                                    fill="none" fill-opacity="1" stroke="url(#SvgjsLinearGradient2454)"
                                                    stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                    stroke-dasharray="0" class="apexcharts-line" index="0"
                                                    clip-path="url(#gridRectMaskrpw2jjqm)"
                                                    filter="url(#SvgjsFilter2460)"
                                                    pathTo="M 0 162.76799995422363C 28.81768096397172 162.76799995422363 53.51855036166177 248.0274285016741 82.33623132563349 248.0274285016741C 109.29470706612315 248.0274285016741 132.4019719865429 193.7714285169329 159.36044772703255 193.7714285169329C 188.17812869100428 193.7714285169329 212.87899808869432 201.5222856576102 241.69667905266604 201.5222856576102C 269.5847574048967 201.5222856576102 293.4888245639516 46.505142844063926 321.3769029161823 46.505142844063926C 350.194583880154 46.505142844063926 374.89545327784407 124.01371425083707 403.7131342418158 124.01371425083707C 431.6012125940465 124.01371425083707 455.5052797531014 100.7611428288051 483.3933581053321 100.7611428288051C 512.2110390693038 100.7611428288051 536.9119084669939 201.5222856576102 565.7295894309656 201.5222856576102C 594.5472703949373 201.5222856576102 619.2481397926274 178.26971423557825 648.0658207565991 178.26971423557825C 675.9538991088298 178.26971423557825 699.8579662678846 217.02399993896483 727.7460446201153 217.02399993896483C 756.563725584087 217.02399993896483 781.2645949817771 124.01371425083707 810.0822759457488 124.01371425083707C 837.9703542979795 124.01371425083707 861.8744214570345 232.52571422031946 889.7624998092651 232.52571422031946"
                                                    pathFrom="M -1 271.27999992370604L -1 271.27999992370604L 82.33623132563349 271.27999992370604L 159.36044772703255 271.27999992370604L 241.69667905266604 271.27999992370604L 321.3769029161823 271.27999992370604L 403.7131342418158 271.27999992370604L 483.3933581053321 271.27999992370604L 565.7295894309656 271.27999992370604L 648.0658207565991 271.27999992370604L 727.7460446201153 271.27999992370604L 810.0822759457488 271.27999992370604L 889.7624998092651 271.27999992370604">
                                                </path>
                                                <g id="SvgjsG2429" class="apexcharts-series-markers-wrap"
                                                    data:realIndex="0">
                                                    <g id="SvgjsG2431" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2432" r="4" cx="0"
                                                            cy="162.76799995422363"
                                                            class="apexcharts-marker no-pointer-events wfwslun9p"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="0" j="0"
                                                            index="0" default-marker-size="4"></circle>
                                                        <circle id="SvgjsCircle2433" r="4" cx="82.33623132563349"
                                                            cy="248.0274285016741"
                                                            class="apexcharts-marker no-pointer-events w3p35vt5"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="1" j="1"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2434" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2435" r="4" cx="159.36044772703255"
                                                            cy="193.7714285169329"
                                                            class="apexcharts-marker no-pointer-events wqsxkupal"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="2" j="2"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2436" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2437" r="4" cx="241.69667905266604"
                                                            cy="201.5222856576102"
                                                            class="apexcharts-marker no-pointer-events wmklclk2e"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="3" j="3"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2438" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2439" r="4" cx="321.3769029161823"
                                                            cy="46.505142844063926"
                                                            class="apexcharts-marker no-pointer-events wseweklwk"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="4" j="4"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2440" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2441" r="4" cx="403.7131342418158"
                                                            cy="124.01371425083707"
                                                            class="apexcharts-marker no-pointer-events wqlxulxht"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="5" j="5"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2442" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2443" r="4" cx="483.3933581053321"
                                                            cy="100.7611428288051"
                                                            class="apexcharts-marker no-pointer-events wq0tm7p8oh"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="6" j="6"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2444" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2445" r="4" cx="565.7295894309656"
                                                            cy="201.5222856576102"
                                                            class="apexcharts-marker no-pointer-events w2uk087zg"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="7" j="7"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2446" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2447" r="4" cx="648.0658207565991"
                                                            cy="178.26971423557825"
                                                            class="apexcharts-marker no-pointer-events wstqpo5l1"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="8" j="8"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2448" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2449" r="4" cx="727.7460446201153"
                                                            cy="217.02399993896483"
                                                            class="apexcharts-marker no-pointer-events w1jizqz34"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="9" j="9"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2450" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2451" r="4" cx="810.0822759457488"
                                                            cy="124.01371425083707"
                                                            class="apexcharts-marker no-pointer-events wqwytrusi"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="10" j="10"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                    <g id="SvgjsG2452" class="apexcharts-series-markers"
                                                        clip-path="url(#gridRectMarkerMaskrpw2jjqm)">
                                                        <circle id="SvgjsCircle2453" r="4" cx="889.7624998092651"
                                                            cy="232.52571422031946"
                                                            class="apexcharts-marker no-pointer-events wthhxp6jxj"
                                                            stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                            stroke-width="2" stroke-opacity="0.9" rel="11" j="11"
                                                            index="0" default-marker-size="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="SvgjsG2430" class="apexcharts-datalabels" data:realIndex="0"></g>
                                        </g>
                                        <line id="SvgjsLine2546" x1="0" y1="0" x2="889.7624998092651" y2="0"
                                            stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                            class="apexcharts-ycrosshairs"></line>
                                        <line id="SvgjsLine2547" x1="0" y1="0" x2="889.7624998092651" y2="0"
                                            stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden">
                                        </line>
                                        <g id="SvgjsG2548" class="apexcharts-yaxis-annotations"></g>
                                        <g id="SvgjsG2549" class="apexcharts-xaxis-annotations"></g>
                                        <g id="SvgjsG2550" class="apexcharts-point-annotations"></g>
                                    </g><text id="SvgjsText2403" font-family="Helvetica, Arial, sans-serif" x="10"
                                        y="18.5" text-anchor="start" dominant-baseline="auto" font-size="16px"
                                        font-weight="900" fill="#666666" class="apexcharts-title-text"
                                        style="font-family: Helvetica, Arial, sans-serif; opacity: 1;">Line Chart</text>
                                    <rect id="SvgjsRect2408" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                        stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                    <g id="SvgjsG2508" class="apexcharts-yaxis" rel="0"
                                        transform="translate(17.237500190734863, 0)">
                                        <g id="SvgjsG2509" class="apexcharts-yaxis-texts-g"><text id="SvgjsText2510"
                                                font-family="Helvetica, Arial, sans-serif" x="20" y="58.89999961853027"
                                                text-anchor="end" dominant-baseline="auto" font-size="11px"
                                                font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2511">35</tspan>
                                            </text><text id="SvgjsText2512" font-family="Helvetica, Arial, sans-serif"
                                                x="20" y="113.15599960327148" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2513">28</tspan>
                                            </text><text id="SvgjsText2514" font-family="Helvetica, Arial, sans-serif"
                                                x="20" y="167.4119995880127" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2515">21</tspan>
                                            </text><text id="SvgjsText2516" font-family="Helvetica, Arial, sans-serif"
                                                x="20" y="221.6679995727539" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2517">14</tspan>
                                            </text><text id="SvgjsText2518" font-family="Helvetica, Arial, sans-serif"
                                                x="20" y="275.9239995574951" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2519">7</tspan>
                                            </text><text id="SvgjsText2520" font-family="Helvetica, Arial, sans-serif"
                                                x="20" y="330.1799995422363" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="400" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan2521">0</tspan>
                                            </text></g>
                                        <g id="SvgjsG2522" class="apexcharts-yaxis-title"><text id="SvgjsText2523"
                                                font-family="Helvetica, Arial, sans-serif" x="32.052245140075684"
                                                y="193.0399995803833" text-anchor="end" dominant-baseline="auto"
                                                font-size="11px" font-weight="900" fill="#9ba7b2"
                                                class="apexcharts-text apexcharts-yaxis-title-text "
                                                style="font-family: Helvetica, Arial, sans-serif;"
                                                transform="rotate(-90 -8.0205078125 188.63999319076538)">Engagement</text>
                                        </g>
                                    </g>
                                    <g id="SvgjsG2402" class="apexcharts-annotations"></g>
                                </svg>
                                <div class="apexcharts-legend"></div>
                                <div class="apexcharts-tooltip apexcharts-theme-light">
                                    <div class="apexcharts-tooltip-title"
                                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                                    <div class="apexcharts-tooltip-series-group"><span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(244, 17, 39);"></span>
                                        <div class="apexcharts-tooltip-text"
                                            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                            <div class="apexcharts-tooltip-y-group"><span
                                                    class="apexcharts-tooltip-text-label"></span><span
                                                    class="apexcharts-tooltip-text-value"></span></div>
                                            <div class="apexcharts-tooltip-z-group"><span
                                                    class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                    <div class="apexcharts-xaxistooltip-text"
                                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                                </div>
                                <div
                                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                    <div class="apexcharts-yaxistooltip-text"></div>
                                </div>
                                <div class="apexcharts-toolbar" style="top: 0px; right: 3px;">
                                    <div class="apexcharts-menu-icon" title="Menu"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                        </svg></div>

                                </div>
                            </div>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 980px; height: 408px;"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="card">
                    <img src="https://nbp.com.vn/img_data/images/QM85R288422810808.jpg" class="card-img-top" alt="...">
                    <div class="">
                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-10%</span></div>
                    </div>
                    <div class="card-body">
                        <h6 class="card-title cursor-pointer">Nest Shaped TV</h6>
                        <div class="clearfix">
                            <p class="mb-0 float-start"> Sales</p>
                            <p class="mb-0 float-end fw-bold"><span
                                    class="me-2 text-decoration-line-through text-secondary">$350</span><span>$240</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <img src="https://img.lovepik.com/bg/20240502/Creative-Mockup-or-Advertisement-Design-3D-Rendering-of-a-Modern_8480279_wh1200.jpg" class="card-img-top" alt="...">
                    <div class="">
                        <div class="position-absolute top-0 end-0 m-3 product-discount"><span class="">-50%</span></div>
                    </div>
                    <div class="card-body">
                        <h6 class="card-title cursor-pointer">Basic Sofa</h6>
                        <div class="clearfix">
                            <p class="mb-0 float-start"> Sales</p>
                            <p class="mb-0 float-end fw-bold"><span
                                    class="me-2 text-decoration-line-through text-secondary">$1350</span><span>$675</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>



</template>
<script>
export default {

}
</script>
<style></style>