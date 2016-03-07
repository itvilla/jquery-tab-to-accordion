/***
 * @author itvilla <info.theitvilla.@gmail.com>
 * @link https://github.com/itvilla/jquery-tab-to-accordion
 * @copyright itvilla
 */
 
(function($) {

	"use strict";

	$.fn.t2a = function(config) {
		var self = this;
		var config = $.extend({
			mobile: 960,
			nodes: ['.tab-item', '.tab-title', '.tab-content']
		}, config);
		var t2a = {
			setActive: function(active) {
				$(self).find('.t2a__tabs ul li').each(function(index) {
					$(this).removeClass('active-tab');
					if (active == index) {
						$(this).addClass('active-tab');						
					}
				});
				$(self).find(config.nodes[1]).each(function(index) {
					$(this).removeClass('active-title');
					if (active == index) {
						$(this).addClass('active-title');						
					}
				});
			},
			init: function() {
				var tabs = "<div class=\"t2a__tabs\"><ul>";
				$(self).find(config.nodes[1]).each(function() {
					tabs += "<li>" + $(this).html() + "</li>";
				});
				tabs += "</ul></div>";
				$(self).prepend(tabs);
				this.hideAllContents();
				$($(self).find(config.nodes[2])[0]).show();
				this.setActive(0);
			},
			hideAllContents: function() {
				$(self).find(config.nodes[2]).hide();
			},
			showContent: function(index, toggle) {
				if (toggle) {
					$($(self).find(config.nodes[2])[index]).slideToggle();
				} else {
					$($(self).find(config.nodes[2])[index]).fadeIn();
				}
			},
			run: function(isTab) {
				if (isTab) {
					$(self.find('.t2a__tabs')).show();
				} else {
					$(self.find('.t2a__tabs')).hide();
				}
				$(self).find(config.nodes[1]).each(function(index) {
					if (isTab) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			},
			makeTab: function() {
				this.run(true);
			},
			makeAccordion: function() {
				this.run(false);
			},
		};

		var  triggerResponsive = function() {
			var windowWidth = $(window).width();
			if (windowWidth <= config.mobile) {
				t2a.makeAccordion();
			} else {
				t2a.makeTab();
			}

		};

		t2a.init();

		$(self).find('.t2a__tabs li').each(function(index) {
			$(this).on('click', function() {
				t2a.hideAllContents();
				t2a.showContent(index, false);
				t2a.setActive(index);
			});
		});

		$(self).find(config.nodes[1]).each(function(index) {
			$(this).on('click', function() {
				t2a.hideAllContents();
				t2a.showContent(index, true);
				t2a.setActive(index);
			});
		});

		$(window).on('resize', triggerResponsive);
		$(document).on('ready', triggerResponsive);
	};


})(jQuery);