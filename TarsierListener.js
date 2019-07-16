// Generated from Tarsier.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TarsierParser.
function TarsierListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TarsierListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TarsierListener.prototype.constructor = TarsierListener;

// Enter a parse tree produced by TarsierParser#program.
TarsierListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#program.
TarsierListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#statement.
TarsierListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#statement.
TarsierListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#assignment_statement.
TarsierListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#assignment_statement.
TarsierListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#function_statement.
TarsierListener.prototype.enterFunction_statement = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#function_statement.
TarsierListener.prototype.exitFunction_statement = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#function_list.
TarsierListener.prototype.enterFunction_list = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#function_list.
TarsierListener.prototype.exitFunction_list = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#eqInt.
TarsierListener.prototype.enterEqInt = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#eqInt.
TarsierListener.prototype.exitEqInt = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#eqPar.
TarsierListener.prototype.enterEqPar = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#eqPar.
TarsierListener.prototype.exitEqPar = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#eqAdd.
TarsierListener.prototype.enterEqAdd = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#eqAdd.
TarsierListener.prototype.exitEqAdd = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#eqVar.
TarsierListener.prototype.enterEqVar = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#eqVar.
TarsierListener.prototype.exitEqVar = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#eqMul.
TarsierListener.prototype.enterEqMul = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#eqMul.
TarsierListener.prototype.exitEqMul = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#if_statement.
TarsierListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#if_statement.
TarsierListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#if_fragment.
TarsierListener.prototype.enterIf_fragment = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#if_fragment.
TarsierListener.prototype.exitIf_fragment = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#else_fragment.
TarsierListener.prototype.enterElse_fragment = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#else_fragment.
TarsierListener.prototype.exitElse_fragment = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#code_block.
TarsierListener.prototype.enterCode_block = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#code_block.
TarsierListener.prototype.exitCode_block = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#boolEq.
TarsierListener.prototype.enterBoolEq = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#boolEq.
TarsierListener.prototype.exitBoolEq = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#boolGt.
TarsierListener.prototype.enterBoolGt = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#boolGt.
TarsierListener.prototype.exitBoolGt = function(ctx) {
};


// Enter a parse tree produced by TarsierParser#boolLt.
TarsierListener.prototype.enterBoolLt = function(ctx) {
};

// Exit a parse tree produced by TarsierParser#boolLt.
TarsierListener.prototype.exitBoolLt = function(ctx) {
};



exports.TarsierListener = TarsierListener;