// Generated from Tarsier.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016w\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0005",
    "\u0011O\n\u0011\u0003\u0011\u0007\u0011R\n\u0011\f\u0011\u000e\u0011",
    "U\u000b\u0011\u0003\u0012\u0005\u0012X\n\u0012\u0003\u0012\u0006\u0012",
    "[\n\u0012\r\u0012\u000e\u0012\\\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013c\n\u0013\f\u0013\u000e\u0013f\u000b\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0006\u0014m",
    "\n\u0014\r\u0014\u000e\u0014n\u0003\u0015\u0006\u0015r\n\u0015\r\u0015",
    "\u000e\u0015s\u0003\u0015\u0003\u0015\u0003d\u0002\u0016\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\'\u0015)\u0016\u0003\u0002\u0007\u0004\u0002C",
    "\\c|\u0005\u0002//C\\c|\u0003\u00022;\u0004\u0002\f\f\u000f\u000f\u0004",
    "\u0002\u000b\u000b\"\"\u0002|\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u0005-\u0003\u0002\u0002",
    "\u0002\u0007/\u0003\u0002\u0002\u0002\t1\u0003\u0002\u0002\u0002\u000b",
    "3\u0003\u0002\u0002\u0002\r6\u0003\u0002\u0002\u0002\u000f;\u0003\u0002",
    "\u0002\u0002\u0011=\u0003\u0002\u0002\u0002\u0013?\u0003\u0002\u0002",
    "\u0002\u0015A\u0003\u0002\u0002\u0002\u0017C\u0003\u0002\u0002\u0002",
    "\u0019E\u0003\u0002\u0002\u0002\u001bG\u0003\u0002\u0002\u0002\u001d",
    "I\u0003\u0002\u0002\u0002\u001fK\u0003\u0002\u0002\u0002!N\u0003\u0002",
    "\u0002\u0002#W\u0003\u0002\u0002\u0002%^\u0003\u0002\u0002\u0002\'l",
    "\u0003\u0002\u0002\u0002)q\u0003\u0002\u0002\u0002+,\u0007<\u0002\u0002",
    ",\u0004\u0003\u0002\u0002\u0002-.\u0007*\u0002\u0002.\u0006\u0003\u0002",
    "\u0002\u0002/0\u0007+\u0002\u00020\b\u0003\u0002\u0002\u000212\u0007",
    ".\u0002\u00022\n\u0003\u0002\u0002\u000234\u0007k\u0002\u000245\u0007",
    "h\u0002\u00025\f\u0003\u0002\u0002\u000267\u0007g\u0002\u000278\u0007",
    "n\u0002\u000289\u0007u\u0002\u00029:\u0007g\u0002\u0002:\u000e\u0003",
    "\u0002\u0002\u0002;<\u0007}\u0002\u0002<\u0010\u0003\u0002\u0002\u0002",
    "=>\u0007\u007f\u0002\u0002>\u0012\u0003\u0002\u0002\u0002?@\u0007?\u0002",
    "\u0002@\u0014\u0003\u0002\u0002\u0002AB\u0007@\u0002\u0002B\u0016\u0003",
    "\u0002\u0002\u0002CD\u0007>\u0002\u0002D\u0018\u0003\u0002\u0002\u0002",
    "EF\u0007,\u0002\u0002F\u001a\u0003\u0002\u0002\u0002GH\u00071\u0002",
    "\u0002H\u001c\u0003\u0002\u0002\u0002IJ\u0007/\u0002\u0002J\u001e\u0003",
    "\u0002\u0002\u0002KL\u0007-\u0002\u0002L \u0003\u0002\u0002\u0002MO",
    "\t\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002OS\u0003\u0002\u0002\u0002",
    "PR\t\u0003\u0002\u0002QP\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002",
    "\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002T\"\u0003",
    "\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VX\u0007/\u0002\u0002WV",
    "\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002",
    "\u0002Y[\t\u0004\u0002\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]",
    "$\u0003\u0002\u0002\u0002^_\u00071\u0002\u0002_`\u00071\u0002\u0002",
    "`d\u0003\u0002\u0002\u0002ac\u000b\u0002\u0002\u0002ba\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002db\u0003\u0002",
    "\u0002\u0002eg\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\u0005",
    "\'\u0014\u0002hi\u0003\u0002\u0002\u0002ij\b\u0013\u0002\u0002j&\u0003",
    "\u0002\u0002\u0002km\t\u0005\u0002\u0002lk\u0003\u0002\u0002\u0002m",
    "n\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002o(\u0003\u0002\u0002\u0002pr\t\u0006\u0002\u0002qp\u0003\u0002",
    "\u0002\u0002rs\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\b\u0015\u0002\u0002v",
    "*\u0003\u0002\u0002\u0002\u000b\u0002NQSW\\dns\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TarsierLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TarsierLexer.prototype = Object.create(antlr4.Lexer.prototype);
TarsierLexer.prototype.constructor = TarsierLexer;

Object.defineProperty(TarsierLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TarsierLexer.EOF = antlr4.Token.EOF;
TarsierLexer.T__0 = 1;
TarsierLexer.T__1 = 2;
TarsierLexer.T__2 = 3;
TarsierLexer.T__3 = 4;
TarsierLexer.T__4 = 5;
TarsierLexer.T__5 = 6;
TarsierLexer.T__6 = 7;
TarsierLexer.T__7 = 8;
TarsierLexer.T__8 = 9;
TarsierLexer.T__9 = 10;
TarsierLexer.T__10 = 11;
TarsierLexer.MUL = 12;
TarsierLexer.DIV = 13;
TarsierLexer.SUB = 14;
TarsierLexer.ADD = 15;
TarsierLexer.ID = 16;
TarsierLexer.INT = 17;
TarsierLexer.COMMENT = 18;
TarsierLexer.NEWLINE = 19;
TarsierLexer.WS = 20;

TarsierLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TarsierLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TarsierLexer.prototype.literalNames = [ null, "':'", "'('", "')'", "','", 
                                        "'if'", "'else'", "'{'", "'}'", 
                                        "'='", "'>'", "'<'", "'*'", "'/'", 
                                        "'-'", "'+'" ];

TarsierLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         "MUL", "DIV", "SUB", "ADD", "ID", 
                                         "INT", "COMMENT", "NEWLINE", "WS" ];

TarsierLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "MUL", "DIV", "SUB", "ADD", 
                                     "ID", "INT", "COMMENT", "NEWLINE", 
                                     "WS" ];

TarsierLexer.prototype.grammarFileName = "Tarsier.g4";



exports.TarsierLexer = TarsierLexer;

