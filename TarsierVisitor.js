// Generated from Tarsier.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TarsierParser.

function TarsierVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TarsierVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TarsierVisitor.prototype.constructor = TarsierVisitor;

// Visit a parse tree produced by TarsierParser#program.
TarsierVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#statement.
TarsierVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#assignment_statement.
TarsierVisitor.prototype.visitAssignment_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#function_statement.
TarsierVisitor.prototype.visitFunction_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#function_list.
TarsierVisitor.prototype.visitFunction_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#eqInt.
TarsierVisitor.prototype.visitEqInt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#eqPar.
TarsierVisitor.prototype.visitEqPar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#eqAdd.
TarsierVisitor.prototype.visitEqAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#eqVar.
TarsierVisitor.prototype.visitEqVar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#eqMul.
TarsierVisitor.prototype.visitEqMul = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#if_statement.
TarsierVisitor.prototype.visitIf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#if_fragment.
TarsierVisitor.prototype.visitIf_fragment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#else_fragment.
TarsierVisitor.prototype.visitElse_fragment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#code_block.
TarsierVisitor.prototype.visitCode_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#boolEq.
TarsierVisitor.prototype.visitBoolEq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#boolGt.
TarsierVisitor.prototype.visitBoolGt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TarsierParser#boolLt.
TarsierVisitor.prototype.visitBoolLt = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TarsierVisitor = TarsierVisitor;