// Generated from Tarsier.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TarsierListener = require('./TarsierListener').TarsierListener;
var TarsierVisitor = require('./TarsierVisitor').TarsierVisitor;

var grammarFileName = "Tarsier.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016x\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0006\u0002\u001a\n\u0002\r\u0002\u000e\u0002\u001b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005-\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00065\n\u0006",
    "\f\u0006\u000e\u00068\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007A\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007I\n\u0007\f\u0007\u000e\u0007L\u000b\u0007\u0003\b\u0003",
    "\b\u0003\b\u0005\bQ\n\b\u0003\t\u0003\t\u0003\t\u0005\tV\n\t\u0003\n",
    "\u0003\n\u0005\nZ\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005",
    "\u000b`\n\u000b\u0003\u000b\u0006\u000bc\n\u000b\r\u000b\u000e\u000b",
    "d\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\fv\n\f\u0003\f\u0002\u0003\f\r\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0002\u0004\u0003\u0002\u000e\u000f\u0003\u0002\u0010",
    "\u0011\u0002|\u0002\u0019\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002",
    "\u0002\u0002\u0006$\u0003\u0002\u0002\u0002\b)\u0003\u0002\u0002\u0002",
    "\n1\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002\u000eM\u0003",
    "\u0002\u0002\u0002\u0010R\u0003\u0002\u0002\u0002\u0012W\u0003\u0002",
    "\u0002\u0002\u0014]\u0003\u0002\u0002\u0002\u0016u\u0003\u0002\u0002",
    "\u0002\u0018\u001a\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0007\u0002\u0002\u0003\u001e\u0003\u0003\u0002\u0002",
    "\u0002\u001f#\u0005\u0006\u0004\u0002 #\u0005\b\u0005\u0002!#\u0005",
    "\u000e\b\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002",
    "\u0002\"!\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007",
    "\u0012\u0002\u0002%&\u0007\u0003\u0002\u0002&\'\u0005\f\u0007\u0002",
    "\'(\u0007\u0015\u0002\u0002(\u0007\u0003\u0002\u0002\u0002)*\u0007\u0012",
    "\u0002\u0002*,\u0007\u0004\u0002\u0002+-\u0005\n\u0006\u0002,+\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    "./\u0007\u0005\u0002\u0002/0\u0007\u0015\u0002\u00020\t\u0003\u0002",
    "\u0002\u000216\u0005\f\u0007\u000223\u0007\u0006\u0002\u000235\u0005",
    "\f\u0007\u000242\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u00026",
    "4\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u000b\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u00029:\b\u0007\u0001\u0002:;\u0007",
    "\u0004\u0002\u0002;<\u0005\f\u0007\u0002<=\u0007\u0005\u0002\u0002=",
    "A\u0003\u0002\u0002\u0002>A\u0007\u0012\u0002\u0002?A\u0007\u0013\u0002",
    "\u0002@9\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@?\u0003\u0002",
    "\u0002\u0002AJ\u0003\u0002\u0002\u0002BC\f\u0006\u0002\u0002CD\t\u0002",
    "\u0002\u0002DI\u0005\f\u0007\u0007EF\f\u0005\u0002\u0002FG\t\u0003\u0002",
    "\u0002GI\u0005\f\u0007\u0006HB\u0003\u0002\u0002\u0002HE\u0003\u0002",
    "\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003",
    "\u0002\u0002\u0002K\r\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002",
    "MN\u0005\u0010\t\u0002NP\u0005\u0014\u000b\u0002OQ\u0005\u0012\n\u0002",
    "PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u000f\u0003\u0002",
    "\u0002\u0002RS\u0007\u0007\u0002\u0002SU\u0005\u0016\f\u0002TV\u0007",
    "\u0015\u0002\u0002UT\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "V\u0011\u0003\u0002\u0002\u0002WY\u0007\b\u0002\u0002XZ\u0007\u0015",
    "\u0002\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0003",
    "\u0002\u0002\u0002[\\\u0005\u0014\u000b\u0002\\\u0013\u0003\u0002\u0002",
    "\u0002]_\u0007\t\u0002\u0002^`\u0007\u0015\u0002\u0002_^\u0003\u0002",
    "\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002ac\u0005",
    "\u0004\u0003\u0002ba\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002",
    "\u0002fg\u0007\n\u0002\u0002gh\u0007\u0015\u0002\u0002h\u0015\u0003",
    "\u0002\u0002\u0002ij\u0005\f\u0007\u0002jk\u0007\u000b\u0002\u0002k",
    "l\u0005\f\u0007\u0002lv\u0003\u0002\u0002\u0002mn\u0005\f\u0007\u0002",
    "no\u0007\f\u0002\u0002op\u0005\f\u0007\u0002pv\u0003\u0002\u0002\u0002",
    "qr\u0005\f\u0007\u0002rs\u0007\r\u0002\u0002st\u0005\f\u0007\u0002t",
    "v\u0003\u0002\u0002\u0002ui\u0003\u0002\u0002\u0002um\u0003\u0002\u0002",
    "\u0002uq\u0003\u0002\u0002\u0002v\u0017\u0003\u0002\u0002\u0002\u000f",
    "\u001b\",6@HJPUY_du"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'('", "')'", "','", "'if'", "'else'", 
                     "'{'", "'}'", "'='", "'>'", "'<'", "'*'", "'/'", "'-'", 
                     "'+'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, "MUL", "DIV", "SUB", "ADD", "ID", 
                      "INT", "COMMENT", "NEWLINE", "WS" ];

var ruleNames =  [ "program", "statement", "assignment_statement", "function_statement", 
                   "function_list", "expression", "if_statement", "if_fragment", 
                   "else_fragment", "code_block", "bool_expression" ];

function TarsierParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TarsierParser.prototype = Object.create(antlr4.Parser.prototype);
TarsierParser.prototype.constructor = TarsierParser;

Object.defineProperty(TarsierParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TarsierParser.EOF = antlr4.Token.EOF;
TarsierParser.T__0 = 1;
TarsierParser.T__1 = 2;
TarsierParser.T__2 = 3;
TarsierParser.T__3 = 4;
TarsierParser.T__4 = 5;
TarsierParser.T__5 = 6;
TarsierParser.T__6 = 7;
TarsierParser.T__7 = 8;
TarsierParser.T__8 = 9;
TarsierParser.T__9 = 10;
TarsierParser.T__10 = 11;
TarsierParser.MUL = 12;
TarsierParser.DIV = 13;
TarsierParser.SUB = 14;
TarsierParser.ADD = 15;
TarsierParser.ID = 16;
TarsierParser.INT = 17;
TarsierParser.COMMENT = 18;
TarsierParser.NEWLINE = 19;
TarsierParser.WS = 20;

TarsierParser.RULE_program = 0;
TarsierParser.RULE_statement = 1;
TarsierParser.RULE_assignment_statement = 2;
TarsierParser.RULE_function_statement = 3;
TarsierParser.RULE_function_list = 4;
TarsierParser.RULE_expression = 5;
TarsierParser.RULE_if_statement = 6;
TarsierParser.RULE_if_fragment = 7;
TarsierParser.RULE_else_fragment = 8;
TarsierParser.RULE_code_block = 9;
TarsierParser.RULE_bool_expression = 10;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(TarsierParser.EOF, 0);
};

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.ProgramContext = ProgramContext;

TarsierParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TarsierParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this.statement();
            this.state = 25; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TarsierParser.T__4 || _la===TarsierParser.ID);
        this.state = 27;
        this.match(TarsierParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.assignment_statement = function() {
    return this.getTypedRuleContext(Assignment_statementContext,0);
};

StatementContext.prototype.function_statement = function() {
    return this.getTypedRuleContext(Function_statementContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.StatementContext = StatementContext;

TarsierParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TarsierParser.RULE_statement);
    try {
        this.state = 32;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.assignment_statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.function_statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 31;
            this.if_statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Assignment_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_assignment_statement;
    return this;
}

Assignment_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_statementContext.prototype.constructor = Assignment_statementContext;

Assignment_statementContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};

Assignment_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Assignment_statementContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

Assignment_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterAssignment_statement(this);
	}
};

Assignment_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitAssignment_statement(this);
	}
};

Assignment_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitAssignment_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Assignment_statementContext = Assignment_statementContext;

TarsierParser.prototype.assignment_statement = function() {

    var localctx = new Assignment_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TarsierParser.RULE_assignment_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(TarsierParser.ID);
        this.state = 35;
        this.match(TarsierParser.T__0);
        this.state = 36;
        this.expression(0);
        this.state = 37;
        this.match(TarsierParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_function_statement;
    return this;
}

Function_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_statementContext.prototype.constructor = Function_statementContext;

Function_statementContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};

Function_statementContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

Function_statementContext.prototype.function_list = function() {
    return this.getTypedRuleContext(Function_listContext,0);
};

Function_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterFunction_statement(this);
	}
};

Function_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitFunction_statement(this);
	}
};

Function_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitFunction_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Function_statementContext = Function_statementContext;

TarsierParser.prototype.function_statement = function() {

    var localctx = new Function_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TarsierParser.RULE_function_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(TarsierParser.ID);
        this.state = 40;
        this.match(TarsierParser.T__1);
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TarsierParser.T__1) | (1 << TarsierParser.ID) | (1 << TarsierParser.INT))) !== 0)) {
            this.state = 41;
            this.function_list();
        }

        this.state = 44;
        this.match(TarsierParser.T__2);
        this.state = 45;
        this.match(TarsierParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_function_list;
    return this;
}

Function_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_listContext.prototype.constructor = Function_listContext;

Function_listContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterFunction_list(this);
	}
};

Function_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitFunction_list(this);
	}
};

Function_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitFunction_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Function_listContext = Function_listContext;

TarsierParser.prototype.function_list = function() {

    var localctx = new Function_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TarsierParser.RULE_function_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.expression(0);
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TarsierParser.T__3) {
            this.state = 48;
            this.match(TarsierParser.T__3);
            this.state = 49;
            this.expression(0);
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function EqIntContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqIntContext.prototype = Object.create(ExpressionContext.prototype);
EqIntContext.prototype.constructor = EqIntContext;

TarsierParser.EqIntContext = EqIntContext;

EqIntContext.prototype.INT = function() {
    return this.getToken(TarsierParser.INT, 0);
};
EqIntContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterEqInt(this);
	}
};

EqIntContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitEqInt(this);
	}
};

EqIntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqParContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqParContext.prototype = Object.create(ExpressionContext.prototype);
EqParContext.prototype.constructor = EqParContext;

TarsierParser.EqParContext = EqParContext;

EqParContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
EqParContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterEqPar(this);
	}
};

EqParContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitEqPar(this);
	}
};

EqParContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqPar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqAddContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqAddContext.prototype = Object.create(ExpressionContext.prototype);
EqAddContext.prototype.constructor = EqAddContext;

TarsierParser.EqAddContext = EqAddContext;

EqAddContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqAddContext.prototype.ADD = function() {
    return this.getToken(TarsierParser.ADD, 0);
};

EqAddContext.prototype.SUB = function() {
    return this.getToken(TarsierParser.SUB, 0);
};
EqAddContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterEqAdd(this);
	}
};

EqAddContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitEqAdd(this);
	}
};

EqAddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqVarContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqVarContext.prototype = Object.create(ExpressionContext.prototype);
EqVarContext.prototype.constructor = EqVarContext;

TarsierParser.EqVarContext = EqVarContext;

EqVarContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};
EqVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterEqVar(this);
	}
};

EqVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitEqVar(this);
	}
};

EqVarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqVar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqMulContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqMulContext.prototype = Object.create(ExpressionContext.prototype);
EqMulContext.prototype.constructor = EqMulContext;

TarsierParser.EqMulContext = EqMulContext;

EqMulContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqMulContext.prototype.MUL = function() {
    return this.getToken(TarsierParser.MUL, 0);
};

EqMulContext.prototype.DIV = function() {
    return this.getToken(TarsierParser.DIV, 0);
};
EqMulContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterEqMul(this);
	}
};

EqMulContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitEqMul(this);
	}
};

EqMulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqMul(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TarsierParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, TarsierParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TarsierParser.T__1:
            localctx = new EqParContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 56;
            this.match(TarsierParser.T__1);
            this.state = 57;
            this.expression(0);
            this.state = 58;
            this.match(TarsierParser.T__2);
            break;
        case TarsierParser.ID:
            localctx = new EqVarContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 60;
            this.match(TarsierParser.ID);
            break;
        case TarsierParser.INT:
            localctx = new EqIntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 61;
            this.match(TarsierParser.INT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 72;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 70;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new EqMulContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, TarsierParser.RULE_expression);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 65;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TarsierParser.MUL || _la===TarsierParser.DIV)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 66;
                    localctx.right = this.expression(5);
                    break;

                case 2:
                    localctx = new EqAddContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, TarsierParser.RULE_expression);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 68;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TarsierParser.SUB || _la===TarsierParser.ADD)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 69;
                    localctx.right = this.expression(4);
                    break;

                } 
            }
            this.state = 74;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.if_fragment = function() {
    return this.getTypedRuleContext(If_fragmentContext,0);
};

If_statementContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

If_statementContext.prototype.else_fragment = function() {
    return this.getTypedRuleContext(Else_fragmentContext,0);
};

If_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterIf_statement(this);
	}
};

If_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitIf_statement(this);
	}
};

If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.If_statementContext = If_statementContext;

TarsierParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TarsierParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.if_fragment();
        this.state = 76;
        this.code_block();
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.T__5) {
            this.state = 77;
            this.else_fragment();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_fragmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_if_fragment;
    return this;
}

If_fragmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_fragmentContext.prototype.constructor = If_fragmentContext;

If_fragmentContext.prototype.bool_expression = function() {
    return this.getTypedRuleContext(Bool_expressionContext,0);
};

If_fragmentContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

If_fragmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterIf_fragment(this);
	}
};

If_fragmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitIf_fragment(this);
	}
};

If_fragmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitIf_fragment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.If_fragmentContext = If_fragmentContext;

TarsierParser.prototype.if_fragment = function() {

    var localctx = new If_fragmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TarsierParser.RULE_if_fragment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(TarsierParser.T__4);
        this.state = 81;
        this.bool_expression();
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 82;
            this.match(TarsierParser.NEWLINE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Else_fragmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_else_fragment;
    return this;
}

Else_fragmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_fragmentContext.prototype.constructor = Else_fragmentContext;

Else_fragmentContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

Else_fragmentContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

Else_fragmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterElse_fragment(this);
	}
};

Else_fragmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitElse_fragment(this);
	}
};

Else_fragmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitElse_fragment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Else_fragmentContext = Else_fragmentContext;

TarsierParser.prototype.else_fragment = function() {

    var localctx = new Else_fragmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TarsierParser.RULE_else_fragment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(TarsierParser.T__5);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 86;
            this.match(TarsierParser.NEWLINE);
        }

        this.state = 89;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Code_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_code_block;
    return this;
}

Code_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Code_blockContext.prototype.constructor = Code_blockContext;

Code_blockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TarsierParser.NEWLINE);
    } else {
        return this.getToken(TarsierParser.NEWLINE, i);
    }
};


Code_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Code_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterCode_block(this);
	}
};

Code_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitCode_block(this);
	}
};

Code_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitCode_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Code_blockContext = Code_blockContext;

TarsierParser.prototype.code_block = function() {

    var localctx = new Code_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TarsierParser.RULE_code_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(TarsierParser.T__6);
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 92;
            this.match(TarsierParser.NEWLINE);
        }

        this.state = 96; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 95;
            this.statement();
            this.state = 98; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TarsierParser.T__4 || _la===TarsierParser.ID);
        this.state = 100;
        this.match(TarsierParser.T__7);
        this.state = 101;
        this.match(TarsierParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Bool_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_bool_expression;
    return this;
}

Bool_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_expressionContext.prototype.constructor = Bool_expressionContext;


 
Bool_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BoolLtContext(parser, ctx) {
	Bool_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Bool_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolLtContext.prototype = Object.create(Bool_expressionContext.prototype);
BoolLtContext.prototype.constructor = BoolLtContext;

TarsierParser.BoolLtContext = BoolLtContext;

BoolLtContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolLtContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterBoolLt(this);
	}
};

BoolLtContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitBoolLt(this);
	}
};

BoolLtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolLt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolGtContext(parser, ctx) {
	Bool_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Bool_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolGtContext.prototype = Object.create(Bool_expressionContext.prototype);
BoolGtContext.prototype.constructor = BoolGtContext;

TarsierParser.BoolGtContext = BoolGtContext;

BoolGtContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolGtContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterBoolGt(this);
	}
};

BoolGtContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitBoolGt(this);
	}
};

BoolGtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolEqContext(parser, ctx) {
	Bool_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Bool_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolEqContext.prototype = Object.create(Bool_expressionContext.prototype);
BoolEqContext.prototype.constructor = BoolEqContext;

TarsierParser.BoolEqContext = BoolEqContext;

BoolEqContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolEqContext.prototype.enterRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.enterBoolEq(this);
	}
};

BoolEqContext.prototype.exitRule = function(listener) {
    if(listener instanceof TarsierListener ) {
        listener.exitBoolEq(this);
	}
};

BoolEqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TarsierParser.Bool_expressionContext = Bool_expressionContext;

TarsierParser.prototype.bool_expression = function() {

    var localctx = new Bool_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TarsierParser.RULE_bool_expression);
    try {
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BoolEqContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            localctx.left = this.expression(0);
            this.state = 104;
            this.match(TarsierParser.T__8);
            this.state = 105;
            localctx.right = this.expression(0);
            break;

        case 2:
            localctx = new BoolGtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            localctx.left = this.expression(0);
            this.state = 108;
            this.match(TarsierParser.T__9);
            this.state = 109;
            localctx.right = this.expression(0);
            break;

        case 3:
            localctx = new BoolLtContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 111;
            localctx.left = this.expression(0);
            this.state = 112;
            this.match(TarsierParser.T__10);
            this.state = 113;
            localctx.right = this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


TarsierParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TarsierParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TarsierParser = TarsierParser;
