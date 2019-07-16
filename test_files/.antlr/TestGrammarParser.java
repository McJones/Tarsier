// Generated from /Users/McJones/Development/oscon-lang/test_files/TestGrammar.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TestGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, OP=3, NEWLINE=4, INT=5, STR=6, WS=7;
	public static final int
		RULE_entry = 0, RULE_thing = 1;
	public static final String[] ruleNames = {
		"entry", "thing"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'{'", "'}'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "OP", "NEWLINE", "INT", "STR", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TestGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TestGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class EntryContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TestGrammarParser.EOF, 0); }
		public List<ThingContext> thing() {
			return getRuleContexts(ThingContext.class);
		}
		public ThingContext thing(int i) {
			return getRuleContext(ThingContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TestGrammarParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TestGrammarParser.NEWLINE, i);
		}
		public EntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entry; }
	}

	public final EntryContext entry() throws RecognitionException {
		EntryContext _localctx = new EntryContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_entry);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(7); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(4);
				thing(0);
				setState(5);
				match(NEWLINE);
				}
				}
				setState(9); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << INT) | (1L << STR))) != 0) );
			setState(11);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThingContext extends ParserRuleContext {
		public List<ThingContext> thing() {
			return getRuleContexts(ThingContext.class);
		}
		public ThingContext thing(int i) {
			return getRuleContext(ThingContext.class,i);
		}
		public TerminalNode INT() { return getToken(TestGrammarParser.INT, 0); }
		public TerminalNode STR() { return getToken(TestGrammarParser.STR, 0); }
		public TerminalNode OP() { return getToken(TestGrammarParser.OP, 0); }
		public ThingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_thing; }
	}

	public final ThingContext thing() throws RecognitionException {
		return thing(0);
	}

	private ThingContext thing(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ThingContext _localctx = new ThingContext(_ctx, _parentState);
		ThingContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_thing, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				setState(14);
				match(T__0);
				setState(15);
				thing(0);
				setState(16);
				match(T__1);
				}
				break;
			case INT:
				{
				setState(18);
				match(INT);
				}
				break;
			case STR:
				{
				setState(19);
				match(STR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(27);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ThingContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_thing);
					setState(22);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(23);
					match(OP);
					setState(24);
					thing(4);
					}
					} 
				}
				setState(29);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return thing_sempred((ThingContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean thing_sempred(ThingContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\t!\4\2\t\2\4\3\t"+
		"\3\3\2\3\2\3\2\6\2\n\n\2\r\2\16\2\13\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\5\3\27\n\3\3\3\3\3\3\3\7\3\34\n\3\f\3\16\3\37\13\3\3\3\2\3\4\4\2\4"+
		"\2\2\2\"\2\t\3\2\2\2\4\26\3\2\2\2\6\7\5\4\3\2\7\b\7\6\2\2\b\n\3\2\2\2"+
		"\t\6\3\2\2\2\n\13\3\2\2\2\13\t\3\2\2\2\13\f\3\2\2\2\f\r\3\2\2\2\r\16\7"+
		"\2\2\3\16\3\3\2\2\2\17\20\b\3\1\2\20\21\7\3\2\2\21\22\5\4\3\2\22\23\7"+
		"\4\2\2\23\27\3\2\2\2\24\27\7\7\2\2\25\27\7\b\2\2\26\17\3\2\2\2\26\24\3"+
		"\2\2\2\26\25\3\2\2\2\27\35\3\2\2\2\30\31\f\5\2\2\31\32\7\5\2\2\32\34\5"+
		"\4\3\6\33\30\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36\5\3"+
		"\2\2\2\37\35\3\2\2\2\5\13\26\35";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}