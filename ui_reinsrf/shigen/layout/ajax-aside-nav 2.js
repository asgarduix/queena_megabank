menu = '<aside>\
	<div class="flexbox fjc" id="_menu_side_up">\
		<a href="index.html" class="nav-logo"></a>\
	</div>\
	<div class="scroll-box">\
		<div class="hide-box">\
			<div class="scroll-hidden">\
				<nav id="_menu_side">\
					<div class="list_layer">\
						<ul>\
							<li>\
									<div class="item_title">\
										<i class="fas fa-plus-square"></i>\
										<span>承保作業</span>\
									</div>\
							</li>\
							<li class="off">\
								<ul>\
									<li>\
										<a href="styleA.html">\
											<div>styleA</div>\
										</a>\
									</li>\
									<li>\
										<a href="styleB.html">\
											<div>styleB</div>\
										</a>\
									</li>\
									<li>\
										<a href="#">\
											<div>選單3</div>\
										</a>\
									</li>\
								</ul>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="create.html">\
								<div class="item_title">\
									<i class="fas fa-print"></i>\
									<span>旅平險鍵檔頁面</span>\
								</div>\
							</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="HAS301000.html">\
									<div class="item_title">\
										<i class="fas fa-folder-plus"></i>\
										<span>受理作業</span>\
									</div>\
								</a>\
							</li>\
                        </ul>\
						<ul>\
							<li>\
								<a href="#">\
								<div class="item_title">\
									<i class="fas fa-file-invoice-dollar"></i>\
									<span>批次列印作業</span>\
								</div>\
							</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
								<div class="item_title">\
									<i class="fas fa-briefcase"></i>\
									<span>保單資料轉出</span>\
								</div>\
							</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
									<div class="item_title">\
										<i class="fas fa-search-dollar"></i>\
										<span>日結作業</span>\
									</div>\
								</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
									<div class="item_title">\
										<i class="fas fa-exclamation-circle"></i>\
										<span>續保通知明細處理</span>\
									</div>\
								</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
									<div class="item_title">\
										<i class="fas fa-dice-d6"></i>\
										<span>續保到期通知單格式轉出</span>\
									</div>\
								</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
									<div class="item_title">\
										<i class="far fa-calendar-check"></i>\
										<span>保批單日報表</span>\
									</div>\
								</a>\
							</li>\
						</ul>\
						<ul>\
							<li>\
								<a href="#">\
									<div class="item_title">\
										<i class="fas fa-box"></i>\
										<span>續保狀態查詢</span>\
									</div>\
								</a>\
							</li>\
						</ul>\
					</div>\
				</nav>\
			</div>\
		</div>\
	</div>\
	<div class="nav-bt-box">\
		<div class="nav-bt-left"></div>\
		<div class="nav-bt-right off"></div>\
	</div>\
</aside>';


	$(document).ready(function () {


		/* 無限層選單：列表收合 */
		$(".list_layer .item_title").click(function () {
			$(this).parent().next().slideToggle(10);
		});


		/* 左側選單：關閉*/
		$(".nav-bt-left").click(function () {
			$("aside").animate({ left: "-200px" }, 500);
			$("section").animate({ paddingLeft: "20px", }, 500);
			$(this).hide();
			$(".nav-bt-right").show();
			$(".main-box").removeClass("mbnoshow");
			$(".content").removeClass("mbnoshow");
		});


		/* 左側選單：開啟*/
		$(".nav-bt-right").click(function () {
			$("aside").animate({ left: "0" }, 500);
			$("section").animate({ paddingLeft: "220px", }, 500);
			$(this).hide();
			$(".nav-bt-left").show();
			$(".main-box").addClass("mbnoshow");
			$(".content").addClass("mbnoshow");
		});

	});
document.write(menu);