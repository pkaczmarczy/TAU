/* global test, tau, equal */
module("core/widget/core/Graph", {});

test("API", function () {
	var widget;

	equal(typeof tau, "object", "Class tau exists");
	equal(typeof tau.widget, "object", "Class tau.widget exists");
	equal(typeof tau.widget.core, "object", "Class tau.widget.core exists");
	equal(typeof tau.widget.core.Graph, "function", "Class tau.widget.core.Graph exists");

	widget = new tau.widget.core.Graph();
	equal(typeof widget.configure, "function", "Method Graph.configure exists");
	equal(typeof widget.build, "function", "Method Graph.build exists");
	equal(typeof widget.init, "function", "Method Graph.init exists");
	equal(typeof widget.bindEvents, "function", "Method Graph.bindEvents exists");
	equal(typeof widget.destroy, "function", "Method Graph.destroy exists");
	equal(typeof widget.disable, "function", "Method Graph.disable exists");
	equal(typeof widget.enable, "function", "Method Graph.enable exists");
	equal(typeof widget.refresh, "function", "Method Graph.refresh exists");
	equal(typeof widget.option, "function", "Method Graph.option exists");
	equal(typeof widget.value, "function", "Method Graph.value exists");
});