// Generated from src/G4/MindLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MindLangListener } from "./MindLangListener";
import { MindLangVisitor } from "./MindLangVisitor";


export class MindLangParser extends Parser {
	public static readonly LET = 1;
	public static readonly WHILE = 2;
	public static readonly PRINT = 3;
	public static readonly IF = 4;
	public static readonly ELSE = 5;
	public static readonly FUNCTION = 6;
	public static readonly FOR = 7;
	public static readonly RETURN = 8;
	public static readonly BREAK = 9;
	public static readonly SWITCH = 10;
	public static readonly CASE = 11;
	public static readonly DEFAULT = 12;
	public static readonly ON = 13;
	public static readonly TRY = 14;
	public static readonly CATCH = 15;
	public static readonly THROW = 16;
	public static readonly PROCESSOR = 17;
	public static readonly IDENTIFIER = 18;
	public static readonly NUMBER = 19;
	public static readonly STRING = 20;
	public static readonly PLUS = 21;
	public static readonly MINUS = 22;
	public static readonly MULT = 23;
	public static readonly DIV = 24;
	public static readonly MOD = 25;
	public static readonly ASSIGN = 26;
	public static readonly PLUS_ASSIGN = 27;
	public static readonly EQ = 28;
	public static readonly LT = 29;
	public static readonly GT = 30;
	public static readonly LE = 31;
	public static readonly GE = 32;
	public static readonly SEMICOLON = 33;
	public static readonly COMMA = 34;
	public static readonly COLON = 35;
	public static readonly LPAREN = 36;
	public static readonly RPAREN = 37;
	public static readonly LBRACE = 38;
	public static readonly RBRACE = 39;
	public static readonly LBRACKET = 40;
	public static readonly RBRACKET = 41;
	public static readonly DOT = 42;
	public static readonly INCREMENT = 43;
	public static readonly DECREMENT = 44;
	public static readonly LINE_COMMENT = 45;
	public static readonly BLOCK_COMMENT = 46;
	public static readonly WHITESPACE = 47;
	public static readonly RULE_program = 0;
	public static readonly RULE_globalStatement = 1;
	public static readonly RULE_processorDeclaration = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementOrBlock = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_assignmentStatement = 7;
	public static readonly RULE_printStatement = 8;
	public static readonly RULE_ifStatement = 9;
	public static readonly RULE_elseIfClause = 10;
	public static readonly RULE_elseClause = 11;
	public static readonly RULE_whileStatement = 12;
	public static readonly RULE_forStatement = 13;
	public static readonly RULE_functionDeclaration = 14;
	public static readonly RULE_functionCall = 15;
	public static readonly RULE_returnStatement = 16;
	public static readonly RULE_incrementDecrementStatement = 17;
	public static readonly RULE_breakStatement = 18;
	public static readonly RULE_switchStatement = 19;
	public static readonly RULE_switchBlock = 20;
	public static readonly RULE_switchCase = 21;
	public static readonly RULE_defaultClause = 22;
	public static readonly RULE_eventHandler = 23;
	public static readonly RULE_tryCatch = 24;
	public static readonly RULE_throwStatement = 25;
	public static readonly RULE_expression = 26;
	public static readonly RULE_unaryExpression = 27;
	public static readonly RULE_primaryExpression = 28;
	public static readonly RULE_basePrimaryExpression = 29;
	public static readonly RULE_postfixOp = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "globalStatement", "processorDeclaration", "block", "statementOrBlock", 
		"statement", "variableDeclaration", "assignmentStatement", "printStatement", 
		"ifStatement", "elseIfClause", "elseClause", "whileStatement", "forStatement", 
		"functionDeclaration", "functionCall", "returnStatement", "incrementDecrementStatement", 
		"breakStatement", "switchStatement", "switchBlock", "switchCase", "defaultClause", 
		"eventHandler", "tryCatch", "throwStatement", "expression", "unaryExpression", 
		"primaryExpression", "basePrimaryExpression", "postfixOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'while'", "'print'", "'if'", "'else'", "'function'", 
		"'for'", "'return'", "'break'", "'switch'", "'case'", "'default'", "'on'", 
		"'try'", "'catch'", "'throw'", "'processor'", undefined, undefined, undefined, 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'+='", "'=='", "'<'", "'>'", 
		"'<='", "'>='", "';'", "','", "':'", "'('", "')'", "'{'", "'}'", "'['", 
		"']'", "'.'", "'++'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LET", "WHILE", "PRINT", "IF", "ELSE", "FUNCTION", "FOR", "RETURN", 
		"BREAK", "SWITCH", "CASE", "DEFAULT", "ON", "TRY", "CATCH", "THROW", "PROCESSOR", 
		"IDENTIFIER", "NUMBER", "STRING", "PLUS", "MINUS", "MULT", "DIV", "MOD", 
		"ASSIGN", "PLUS_ASSIGN", "EQ", "LT", "GT", "LE", "GE", "SEMICOLON", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
		"DOT", "INCREMENT", "DECREMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MindLangParser._LITERAL_NAMES, MindLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MindLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MindLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return MindLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MindLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MindLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MindLangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.PROCESSOR))) !== 0)) {
				{
				{
				this.state = 62;
				this.globalStatement();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalStatement(): GlobalStatementContext {
		let _localctx: GlobalStatementContext = new GlobalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MindLangParser.RULE_globalStatement);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.PROCESSOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.processorDeclaration();
				}
				break;
			case MindLangParser.FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.functionDeclaration();
				}
				break;
			case MindLangParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.variableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processorDeclaration(): ProcessorDeclarationContext {
		let _localctx: ProcessorDeclarationContext = new ProcessorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MindLangParser.RULE_processorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(MindLangParser.PROCESSOR);
			this.state = 74;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 75;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MindLangParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(MindLangParser.LBRACE);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.WHILE) | (1 << MindLangParser.PRINT) | (1 << MindLangParser.IF) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.FOR) | (1 << MindLangParser.RETURN) | (1 << MindLangParser.BREAK) | (1 << MindLangParser.SWITCH) | (1 << MindLangParser.ON) | (1 << MindLangParser.TRY) | (1 << MindLangParser.THROW) | (1 << MindLangParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 78;
				this.statement();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(MindLangParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementOrBlock(): StatementOrBlockContext {
		let _localctx: StatementOrBlockContext = new StatementOrBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MindLangParser.RULE_statementOrBlock);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.block();
				}
				break;
			case MindLangParser.LET:
			case MindLangParser.WHILE:
			case MindLangParser.PRINT:
			case MindLangParser.IF:
			case MindLangParser.FUNCTION:
			case MindLangParser.FOR:
			case MindLangParser.RETURN:
			case MindLangParser.BREAK:
			case MindLangParser.SWITCH:
			case MindLangParser.ON:
			case MindLangParser.TRY:
			case MindLangParser.THROW:
			case MindLangParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MindLangParser.RULE_statement);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.printStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 93;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 94;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 95;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 96;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 97;
				this.functionCall();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 98;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 99;
				this.incrementDecrementStatement();
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MindLangParser.SEMICOLON) {
					{
					this.state = 100;
					this.match(MindLangParser.SEMICOLON);
					}
				}

				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 103;
				this.switchStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 104;
				this.eventHandler();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 105;
				this.tryCatch();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 106;
				this.throwStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 107;
				this.breakStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MindLangParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(MindLangParser.LET);
			this.state = 111;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 112;
			this.match(MindLangParser.ASSIGN);
			this.state = 113;
			this.expression();
			this.state = 114;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MindLangParser.RULE_assignmentStatement);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 117;
				this.match(MindLangParser.ASSIGN);
				this.state = 118;
				this.expression();
				this.state = 119;
				this.match(MindLangParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 122;
				this.match(MindLangParser.PLUS_ASSIGN);
				this.state = 123;
				this.expression();
				this.state = 124;
				this.match(MindLangParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MindLangParser.RULE_printStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(MindLangParser.PRINT);
			this.state = 129;
			this.match(MindLangParser.LPAREN);
			this.state = 130;
			this.expression();
			this.state = 131;
			this.match(MindLangParser.RPAREN);
			this.state = 132;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MindLangParser.RULE_ifStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(MindLangParser.IF);
			this.state = 135;
			this.match(MindLangParser.LPAREN);
			this.state = 136;
			this.expression();
			this.state = 137;
			this.match(MindLangParser.RPAREN);
			this.state = 138;
			this.statementOrBlock();
			this.state = 142;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 139;
					this.elseIfClause();
					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIfClause(): ElseIfClauseContext {
		let _localctx: ElseIfClauseContext = new ElseIfClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MindLangParser.RULE_elseIfClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(MindLangParser.ELSE);
			this.state = 149;
			this.match(MindLangParser.IF);
			this.state = 150;
			this.match(MindLangParser.LPAREN);
			this.state = 151;
			this.expression();
			this.state = 152;
			this.match(MindLangParser.RPAREN);
			this.state = 153;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MindLangParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(MindLangParser.ELSE);
			this.state = 156;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MindLangParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(MindLangParser.WHILE);
			this.state = 159;
			this.match(MindLangParser.LPAREN);
			this.state = 160;
			this.expression();
			this.state = 161;
			this.match(MindLangParser.RPAREN);
			this.state = 162;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MindLangParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(MindLangParser.FOR);
			this.state = 165;
			this.match(MindLangParser.LPAREN);
			this.state = 166;
			this.variableDeclaration();
			this.state = 167;
			this.expression();
			this.state = 168;
			this.match(MindLangParser.SEMICOLON);
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 170;
				this.incrementDecrementStatement();
				}
				break;
			}
			this.state = 173;
			this.match(MindLangParser.RPAREN);
			this.state = 174;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MindLangParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(MindLangParser.FUNCTION);
			this.state = 177;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 178;
			this.match(MindLangParser.LPAREN);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MindLangParser.IDENTIFIER) {
				{
				this.state = 179;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 180;
					this.match(MindLangParser.COMMA);
					this.state = 181;
					this.match(MindLangParser.IDENTIFIER);
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 189;
			this.match(MindLangParser.RPAREN);
			this.state = 190;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MindLangParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 193;
			this.match(MindLangParser.LPAREN);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)))) !== 0)) {
				{
				this.state = 194;
				this.expression();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 195;
					this.match(MindLangParser.COMMA);
					this.state = 196;
					this.expression();
					}
					}
					this.state = 201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 204;
			this.match(MindLangParser.RPAREN);
			this.state = 205;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MindLangParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(MindLangParser.RETURN);
			this.state = 208;
			this.expression();
			this.state = 209;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementDecrementStatement(): IncrementDecrementStatementContext {
		let _localctx: IncrementDecrementStatementContext = new IncrementDecrementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MindLangParser.RULE_incrementDecrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 212;
			_la = this._input.LA(1);
			if (!(_la === MindLangParser.INCREMENT || _la === MindLangParser.DECREMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MindLangParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(MindLangParser.BREAK);
			this.state = 215;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MindLangParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(MindLangParser.SWITCH);
			this.state = 218;
			this.expression();
			this.state = 219;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MindLangParser.RULE_switchBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(MindLangParser.LBRACE);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MindLangParser.CASE) {
				{
				{
				this.state = 222;
				this.switchCase();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MindLangParser.DEFAULT) {
				{
				this.state = 228;
				this.defaultClause();
				}
			}

			this.state = 231;
			this.match(MindLangParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MindLangParser.RULE_switchCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(MindLangParser.CASE);
			this.state = 234;
			this.expression();
			this.state = 235;
			this.match(MindLangParser.COLON);
			this.state = 236;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MindLangParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(MindLangParser.DEFAULT);
			this.state = 239;
			this.match(MindLangParser.COLON);
			this.state = 240;
			this.statementOrBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventHandler(): EventHandlerContext {
		let _localctx: EventHandlerContext = new EventHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MindLangParser.RULE_eventHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(MindLangParser.ON);
			this.state = 243;
			this.match(MindLangParser.LPAREN);
			this.state = 244;
			this.match(MindLangParser.STRING);
			this.state = 245;
			this.match(MindLangParser.COMMA);
			this.state = 246;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 247;
			this.match(MindLangParser.RPAREN);
			this.state = 248;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatch(): TryCatchContext {
		let _localctx: TryCatchContext = new TryCatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MindLangParser.RULE_tryCatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(MindLangParser.TRY);
			this.state = 251;
			this.block();
			this.state = 252;
			this.match(MindLangParser.CATCH);
			this.state = 253;
			this.match(MindLangParser.LPAREN);
			this.state = 254;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 255;
			this.match(MindLangParser.RPAREN);
			this.state = 256;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MindLangParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(MindLangParser.THROW);
			this.state = 259;
			this.expression();
			this.state = 260;
			this.match(MindLangParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MindLangParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.unaryExpression();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (MindLangParser.PLUS - 21)) | (1 << (MindLangParser.MINUS - 21)) | (1 << (MindLangParser.MULT - 21)) | (1 << (MindLangParser.DIV - 21)) | (1 << (MindLangParser.MOD - 21)) | (1 << (MindLangParser.EQ - 21)) | (1 << (MindLangParser.LT - 21)) | (1 << (MindLangParser.GT - 21)) | (1 << (MindLangParser.LE - 21)) | (1 << (MindLangParser.GE - 21)))) !== 0)) {
				{
				{
				this.state = 263;
				_la = this._input.LA(1);
				if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (MindLangParser.PLUS - 21)) | (1 << (MindLangParser.MINUS - 21)) | (1 << (MindLangParser.MULT - 21)) | (1 << (MindLangParser.DIV - 21)) | (1 << (MindLangParser.MOD - 21)) | (1 << (MindLangParser.EQ - 21)) | (1 << (MindLangParser.LT - 21)) | (1 << (MindLangParser.GT - 21)) | (1 << (MindLangParser.LE - 21)) | (1 << (MindLangParser.GE - 21)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 264;
				this.unaryExpression();
				}
				}
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MindLangParser.RULE_unaryExpression);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.match(MindLangParser.MINUS);
				this.state = 271;
				this.unaryExpression();
				}
				break;
			case MindLangParser.IDENTIFIER:
			case MindLangParser.NUMBER:
			case MindLangParser.STRING:
			case MindLangParser.LPAREN:
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.primaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MindLangParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.basePrimaryExpression();
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (MindLangParser.LPAREN - 36)) | (1 << (MindLangParser.LBRACKET - 36)) | (1 << (MindLangParser.DOT - 36)))) !== 0)) {
				{
				{
				this.state = 276;
				this.postfixOp();
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basePrimaryExpression(): BasePrimaryExpressionContext {
		let _localctx: BasePrimaryExpressionContext = new BasePrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MindLangParser.RULE_basePrimaryExpression);
		let _la: number;
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.match(MindLangParser.NUMBER);
				}
				break;
			case MindLangParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 284;
				this.match(MindLangParser.STRING);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 285;
				this.match(MindLangParser.LPAREN);
				this.state = 286;
				this.expression();
				this.state = 287;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 289;
				this.match(MindLangParser.LBRACKET);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)))) !== 0)) {
					{
					this.state = 290;
					this.expression();
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 291;
						this.match(MindLangParser.COMMA);
						this.state = 292;
						this.expression();
						}
						}
						this.state = 297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 300;
				this.match(MindLangParser.RBRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixOp(): PostfixOpContext {
		let _localctx: PostfixOpContext = new PostfixOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MindLangParser.RULE_postfixOp);
		let _la: number;
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.match(MindLangParser.DOT);
				this.state = 304;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.match(MindLangParser.LPAREN);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)))) !== 0)) {
					{
					this.state = 306;
					this.expression();
					this.state = 311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 307;
						this.match(MindLangParser.COMMA);
						this.state = 308;
						this.expression();
						}
						}
						this.state = 313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 316;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 317;
				this.match(MindLangParser.LBRACKET);
				this.state = 318;
				this.expression();
				this.state = 319;
				this.match(MindLangParser.RBRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0146\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x07\x02B\n\x02" +
		"\f\x02\x0E\x02E\v\x02\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05R\n\x05\f\x05\x0E\x05U\v\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06[\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"h\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07o\n\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\x81\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x8F\n\v\f\v\x0E\v\x92\v\v\x03\v\x05" +
		"\v\x95\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAE\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xB9\n\x10" +
		"\f\x10\x0E\x10\xBC\v\x10\x05\x10\xBE\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xC8\n\x11\f\x11\x0E\x11\xCB" +
		"\v\x11\x05\x11\xCD\n\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\xE2\n\x16\f\x16\x0E\x16\xE5\v" +
		"\x16\x03\x16\x05\x16\xE8\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u010C\n\x1C\f\x1C\x0E\x1C\u010F\v\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u0114\n\x1D\x03\x1E\x03\x1E\x07\x1E\u0118\n\x1E" +
		"\f\x1E\x0E\x1E\u011B\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0128\n\x1F\f\x1F" +
		"\x0E\x1F\u012B\v\x1F\x05\x1F\u012D\n\x1F\x03\x1F\x05\x1F\u0130\n\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x03 \x07 \u0138\n \f \x0E \u013B\v \x05 \u013D\n" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u0144\n \x03 \x02\x02\x02!\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02\x04\x03\x02-.\x04\x02" +
		"\x17\x1B\x1E\"\x02\u0151\x02C\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06" +
		"K\x03\x02\x02\x02\bO\x03\x02\x02\x02\nZ\x03\x02\x02\x02\fn\x03\x02\x02" +
		"\x02\x0Ep\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x82\x03\x02\x02" +
		"\x02\x14\x88\x03\x02\x02\x02\x16\x96\x03\x02\x02\x02\x18\x9D\x03\x02\x02" +
		"\x02\x1A\xA0\x03\x02\x02\x02\x1C\xA6\x03\x02\x02\x02\x1E\xB2\x03\x02\x02" +
		"\x02 \xC2\x03\x02\x02\x02\"\xD1\x03\x02\x02\x02$\xD5\x03\x02\x02\x02&" +
		"\xD8\x03\x02\x02\x02(\xDB\x03\x02\x02\x02*\xDF\x03\x02\x02\x02,\xEB\x03" +
		"\x02\x02\x02.\xF0\x03\x02\x02\x020\xF4\x03\x02\x02\x022\xFC\x03\x02\x02" +
		"\x024\u0104\x03\x02\x02\x026\u0108\x03\x02\x02\x028\u0113\x03\x02\x02" +
		"\x02:\u0115\x03\x02\x02\x02<\u012F\x03\x02\x02\x02>\u0143\x03\x02\x02" +
		"\x02@B\x05\x04\x03\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02" +
		"\x02CD\x03\x02\x02\x02D\x03\x03\x02\x02\x02EC\x03\x02\x02\x02FJ\x05\x06" +
		"\x04\x02GJ\x05\x1E\x10\x02HJ\x05\x0E\b\x02IF\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02IH\x03\x02\x02\x02J\x05\x03\x02\x02\x02KL\x07\x13\x02\x02LM\x07" +
		"\x14\x02\x02MN\x05\b\x05\x02N\x07\x03\x02\x02\x02OS\x07(\x02\x02PR\x05" +
		"\f\x07\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03" +
		"\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07)\x02\x02W\t\x03" +
		"\x02\x02\x02X[\x05\b\x05\x02Y[\x05\f\x07\x02ZX\x03\x02\x02\x02ZY\x03\x02" +
		"\x02\x02[\v\x03\x02\x02\x02\\o\x05\x0E\b\x02]o\x05\x10\t\x02^o\x05\x12" +
		"\n\x02_o\x05\x14\v\x02`o\x05\x1A\x0E\x02ao\x05\x1C\x0F\x02bo\x05\x1E\x10" +
		"\x02co\x05 \x11\x02do\x05\"\x12\x02eg\x05$\x13\x02fh\x07#\x02\x02gf\x03" +
		"\x02\x02\x02gh\x03\x02\x02\x02ho\x03\x02\x02\x02io\x05(\x15\x02jo\x05" +
		"0\x19\x02ko\x052\x1A\x02lo\x054\x1B\x02mo\x05&\x14\x02n\\\x03\x02\x02" +
		"\x02n]\x03\x02\x02\x02n^\x03\x02\x02\x02n_\x03\x02\x02\x02n`\x03\x02\x02" +
		"\x02na\x03\x02\x02\x02nb\x03\x02\x02\x02nc\x03\x02\x02\x02nd\x03\x02\x02" +
		"\x02ne\x03\x02\x02\x02ni\x03\x02\x02\x02nj\x03\x02\x02\x02nk\x03\x02\x02" +
		"\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02o\r\x03\x02\x02\x02pq\x07\x03" +
		"\x02\x02qr\x07\x14\x02\x02rs\x07\x1C\x02\x02st\x056\x1C\x02tu\x07#\x02" +
		"\x02u\x0F\x03\x02\x02\x02vw\x07\x14\x02\x02wx\x07\x1C\x02\x02xy\x056\x1C" +
		"\x02yz\x07#\x02\x02z\x81\x03\x02\x02\x02{|\x07\x14\x02\x02|}\x07\x1D\x02" +
		"\x02}~\x056\x1C\x02~\x7F\x07#\x02\x02\x7F\x81\x03\x02\x02\x02\x80v\x03" +
		"\x02\x02\x02\x80{\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02\x82\x83\x07" +
		"\x05\x02\x02\x83\x84\x07&\x02\x02\x84\x85\x056\x1C\x02\x85\x86\x07\'\x02" +
		"\x02\x86\x87\x07#\x02\x02\x87\x13\x03\x02\x02\x02\x88\x89\x07\x06\x02" +
		"\x02\x89\x8A\x07&\x02\x02\x8A\x8B\x056\x1C\x02\x8B\x8C\x07\'\x02\x02\x8C" +
		"\x90\x05\n\x06\x02\x8D\x8F\x05\x16\f\x02\x8E\x8D\x03\x02\x02\x02\x8F\x92" +
		"\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x94" +
		"\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x95\x05\x18\r\x02\x94\x93" +
		"\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x15\x03\x02\x02\x02\x96\x97" +
		"\x07\x07\x02\x02\x97\x98\x07\x06\x02\x02\x98\x99\x07&\x02\x02\x99\x9A" +
		"\x056\x1C\x02\x9A\x9B\x07\'\x02\x02\x9B\x9C\x05\n\x06\x02\x9C\x17\x03" +
		"\x02\x02\x02\x9D\x9E\x07\x07\x02\x02\x9E\x9F\x05\n\x06\x02\x9F\x19\x03" +
		"\x02\x02\x02\xA0\xA1\x07\x04\x02\x02\xA1\xA2\x07&\x02\x02\xA2\xA3\x05" +
		"6\x1C\x02\xA3\xA4\x07\'\x02\x02\xA4\xA5\x05\n\x06\x02\xA5\x1B\x03\x02" +
		"\x02\x02\xA6\xA7\x07\t\x02\x02\xA7\xA8\x07&\x02\x02\xA8\xA9\x05\x0E\b" +
		"\x02\xA9\xAA\x056\x1C\x02\xAA\xAD\x07#\x02\x02\xAB\xAE\x056\x1C\x02\xAC" +
		"\xAE\x05$\x13\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB0\x07\'\x02\x02\xB0\xB1\x05\n\x06\x02\xB1\x1D" +
		"\x03\x02\x02\x02\xB2\xB3\x07\b\x02\x02\xB3\xB4\x07\x14\x02\x02\xB4\xBD" +
		"\x07&\x02\x02\xB5\xBA\x07\x14\x02\x02\xB6\xB7\x07$\x02\x02\xB7\xB9\x07" +
		"\x14\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03" +
		"\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03" +
		"\x02\x02\x02\xBD\xB5\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03" +
		"\x02\x02\x02\xBF\xC0\x07\'\x02\x02\xC0\xC1\x05\b\x05\x02\xC1\x1F\x03\x02" +
		"\x02\x02\xC2\xC3\x07\x14\x02\x02\xC3\xCC\x07&\x02\x02\xC4\xC9\x056\x1C" +
		"\x02\xC5\xC6\x07$\x02\x02\xC6\xC8\x056\x1C\x02\xC7\xC5\x03\x02\x02\x02" +
		"\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02" +
		"\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xC4\x03\x02\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07\'\x02\x02" +
		"\xCF\xD0\x07#\x02\x02\xD0!\x03\x02\x02\x02\xD1\xD2\x07\n\x02\x02\xD2\xD3" +
		"\x056\x1C\x02\xD3\xD4\x07#\x02\x02\xD4#\x03\x02\x02\x02\xD5\xD6\x07\x14" +
		"\x02\x02\xD6\xD7\t\x02\x02\x02\xD7%\x03\x02\x02\x02\xD8\xD9\x07\v\x02" +
		"\x02\xD9\xDA\x07#\x02\x02\xDA\'\x03\x02\x02\x02\xDB\xDC\x07\f\x02\x02" +
		"\xDC\xDD\x056\x1C\x02\xDD\xDE\x05*\x16\x02\xDE)\x03\x02\x02\x02\xDF\xE3" +
		"\x07(\x02\x02\xE0\xE2\x05,\x17\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03" +
		"\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE7\x03" +
		"\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE8\x05.\x18\x02\xE7\xE6\x03" +
		"\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07" +
		")\x02\x02\xEA+\x03\x02\x02\x02\xEB\xEC\x07\r\x02\x02\xEC\xED\x056\x1C" +
		"\x02\xED\xEE\x07%\x02\x02\xEE\xEF\x05\n\x06\x02\xEF-\x03\x02\x02\x02\xF0" +
		"\xF1\x07\x0E\x02\x02\xF1\xF2\x07%\x02\x02\xF2\xF3\x05\n\x06\x02\xF3/\x03" +
		"\x02\x02\x02\xF4\xF5\x07\x0F\x02\x02\xF5\xF6\x07&\x02\x02\xF6\xF7\x07" +
		"\x16\x02\x02\xF7\xF8\x07$\x02\x02\xF8\xF9\x07\x14\x02\x02\xF9\xFA\x07" +
		"\'\x02\x02\xFA\xFB\x05\b\x05\x02\xFB1\x03\x02\x02\x02\xFC\xFD\x07\x10" +
		"\x02\x02\xFD\xFE\x05\b\x05\x02\xFE\xFF\x07\x11\x02\x02\xFF\u0100\x07&" +
		"\x02\x02\u0100\u0101\x07\x14\x02\x02\u0101\u0102\x07\'\x02\x02\u0102\u0103" +
		"\x05\b\x05\x02\u01033\x03\x02\x02\x02\u0104\u0105\x07\x12\x02\x02\u0105" +
		"\u0106\x056\x1C\x02\u0106\u0107\x07#\x02\x02\u01075\x03\x02\x02\x02\u0108" +
		"\u010D\x058\x1D\x02\u0109\u010A\t\x03\x02\x02\u010A\u010C\x058\x1D\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03" +
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E7\x03\x02\x02\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u0110\u0111\x07\x18\x02\x02\u0111\u0114\x058\x1D" +
		"\x02\u0112\u0114\x05:\x1E\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0112" +
		"\x03\x02\x02\x02\u01149\x03\x02\x02\x02\u0115\u0119\x05<\x1F\x02\u0116" +
		"\u0118\x05> \x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02" +
		"\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A;\x03\x02" +
		"\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u0130\x07\x14\x02\x02\u011D" +
		"\u0130\x07\x15\x02\x02\u011E\u0130\x07\x16\x02\x02\u011F\u0120\x07&\x02" +
		"\x02\u0120\u0121\x056\x1C\x02\u0121\u0122\x07\'\x02\x02\u0122\u0130\x03" +
		"\x02\x02\x02\u0123\u012C\x07*\x02\x02\u0124\u0129\x056\x1C\x02\u0125\u0126" +
		"\x07$\x02\x02\u0126\u0128\x056\x1C\x02\u0127\u0125\x03\x02\x02\x02\u0128" +
		"\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02" +
		"\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C" +
		"\u0124\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u0130\x07+\x02\x02\u012F\u011C\x03\x02\x02\x02\u012F\u011D" +
		"\x03\x02\x02\x02\u012F\u011E\x03\x02\x02\x02\u012F\u011F\x03\x02\x02\x02" +
		"\u012F\u0123\x03\x02\x02\x02\u0130=\x03\x02\x02\x02\u0131\u0132\x07,\x02" +
		"\x02\u0132\u0144\x07\x14\x02\x02\u0133\u013C\x07&\x02\x02\u0134\u0139" +
		"\x056\x1C\x02\u0135\u0136\x07$\x02\x02\u0136\u0138\x056\x1C\x02\u0137" +
		"\u0135\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02" +
		"\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013C\u0134\x03\x02\x02\x02\u013C\u013D\x03\x02" +
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0144\x07\'\x02\x02\u013F\u0140" +
		"\x07*\x02\x02\u0140\u0141\x056\x1C\x02\u0141\u0142\x07+\x02\x02\u0142" +
		"\u0144\x03\x02\x02\x02\u0143\u0131\x03\x02\x02\x02\u0143\u0133\x03\x02" +
		"\x02\x02\u0143\u013F\x03\x02\x02\x02\u0144?\x03\x02\x02\x02\x1BCISZgn" +
		"\x80\x90\x94\xAD\xBA\xBD\xC9\xCC\xE3\xE7\u010D\u0113\u0119\u0129\u012C" +
		"\u012F\u0139\u013C\u0143";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MindLangParser.__ATN) {
			MindLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MindLangParser._serializedATN));
		}

		return MindLangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public globalStatement(): GlobalStatementContext[];
	public globalStatement(i: number): GlobalStatementContext;
	public globalStatement(i?: number): GlobalStatementContext | GlobalStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GlobalStatementContext);
		} else {
			return this.getRuleContext(i, GlobalStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_program; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalStatementContext extends ParserRuleContext {
	public processorDeclaration(): ProcessorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProcessorDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_globalStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterGlobalStatement) {
			listener.enterGlobalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitGlobalStatement) {
			listener.exitGlobalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitGlobalStatement) {
			return visitor.visitGlobalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessorDeclarationContext extends ParserRuleContext {
	public PROCESSOR(): TerminalNode { return this.getToken(MindLangParser.PROCESSOR, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_processorDeclaration; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterProcessorDeclaration) {
			listener.enterProcessorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitProcessorDeclaration) {
			listener.exitProcessorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitProcessorDeclaration) {
			return visitor.visitProcessorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MindLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MindLangParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_block; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementOrBlockContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_statementOrBlock; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterStatementOrBlock) {
			listener.enterStatementOrBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitStatementOrBlock) {
			listener.exitStatementOrBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitStatementOrBlock) {
			return visitor.visitStatementOrBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public printStatement(): PrintStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public incrementDecrementStatement(): IncrementDecrementStatementContext | undefined {
		return this.tryGetRuleContext(0, IncrementDecrementStatementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.SEMICOLON, 0); }
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public eventHandler(): EventHandlerContext | undefined {
		return this.tryGetRuleContext(0, EventHandlerContext);
	}
	public tryCatch(): TryCatchContext | undefined {
		return this.tryGetRuleContext(0, TryCatchContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(MindLangParser.LET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(MindLangParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	public PLUS_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.PLUS_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(MindLangParser.PRINT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_printStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterPrintStatement) {
			listener.enterPrintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitPrintStatement) {
			listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(MindLangParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	public elseIfClause(): ElseIfClauseContext[];
	public elseIfClause(i: number): ElseIfClauseContext;
	public elseIfClause(i?: number): ElseIfClauseContext | ElseIfClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfClauseContext);
		} else {
			return this.getRuleContext(i, ElseIfClauseContext);
		}
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(MindLangParser.ELSE, 0); }
	public IF(): TerminalNode { return this.getToken(MindLangParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_elseIfClause; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterElseIfClause) {
			listener.enterElseIfClause(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitElseIfClause) {
			listener.exitElseIfClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitElseIfClause) {
			return visitor.visitElseIfClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(MindLangParser.ELSE, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(MindLangParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(MindLangParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	public incrementDecrementStatement(): IncrementDecrementStatementContext | undefined {
		return this.tryGetRuleContext(0, IncrementDecrementStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(MindLangParser.FUNCTION, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.IDENTIFIER);
		} else {
			return this.getToken(MindLangParser.IDENTIFIER, i);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.COMMA);
		} else {
			return this.getToken(MindLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.COMMA);
		} else {
			return this.getToken(MindLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(MindLangParser.RETURN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementDecrementStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public INCREMENT(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.INCREMENT, 0); }
	public DECREMENT(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.DECREMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_incrementDecrementStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterIncrementDecrementStatement) {
			listener.enterIncrementDecrementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitIncrementDecrementStatement) {
			listener.exitIncrementDecrementStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitIncrementDecrementStatement) {
			return visitor.visitIncrementDecrementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(MindLangParser.BREAK, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(MindLangParser.SWITCH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MindLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MindLangParser.RBRACE, 0); }
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_switchBlock; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterSwitchBlock) {
			listener.enterSwitchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitSwitchBlock) {
			listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(MindLangParser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(MindLangParser.COLON, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_switchCase; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterSwitchCase) {
			listener.enterSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitSwitchCase) {
			listener.exitSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(MindLangParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(MindLangParser.COLON, 0); }
	public statementOrBlock(): StatementOrBlockContext {
		return this.getRuleContext(0, StatementOrBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventHandlerContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(MindLangParser.ON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public STRING(): TerminalNode { return this.getToken(MindLangParser.STRING, 0); }
	public COMMA(): TerminalNode { return this.getToken(MindLangParser.COMMA, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_eventHandler; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterEventHandler) {
			listener.enterEventHandler(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitEventHandler) {
			listener.exitEventHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitEventHandler) {
			return visitor.visitEventHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(MindLangParser.TRY, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public CATCH(): TerminalNode { return this.getToken(MindLangParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MindLangParser.IDENTIFIER, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_tryCatch; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterTryCatch) {
			listener.enterTryCatch(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitTryCatch) {
			listener.exitTryCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitTryCatch) {
			return visitor.visitTryCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(MindLangParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.PLUS);
		} else {
			return this.getToken(MindLangParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.MINUS);
		} else {
			return this.getToken(MindLangParser.MINUS, i);
		}
	}
	public MULT(): TerminalNode[];
	public MULT(i: number): TerminalNode;
	public MULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.MULT);
		} else {
			return this.getToken(MindLangParser.MULT, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.DIV);
		} else {
			return this.getToken(MindLangParser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.MOD);
		} else {
			return this.getToken(MindLangParser.MOD, i);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.LT);
		} else {
			return this.getToken(MindLangParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.GT);
		} else {
			return this.getToken(MindLangParser.GT, i);
		}
	}
	public LE(): TerminalNode[];
	public LE(i: number): TerminalNode;
	public LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.LE);
		} else {
			return this.getToken(MindLangParser.LE, i);
		}
	}
	public GE(): TerminalNode[];
	public GE(i: number): TerminalNode;
	public GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.GE);
		} else {
			return this.getToken(MindLangParser.GE, i);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.EQ);
		} else {
			return this.getToken(MindLangParser.EQ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_expression; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.MINUS, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public basePrimaryExpression(): BasePrimaryExpressionContext {
		return this.getRuleContext(0, BasePrimaryExpressionContext);
	}
	public postfixOp(): PostfixOpContext[];
	public postfixOp(i: number): PostfixOpContext;
	public postfixOp(i?: number): PostfixOpContext | PostfixOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostfixOpContext);
		} else {
			return this.getRuleContext(i, PostfixOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasePrimaryExpressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.IDENTIFIER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.STRING, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.RPAREN, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.RBRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.COMMA);
		} else {
			return this.getToken(MindLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_basePrimaryExpression; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterBasePrimaryExpression) {
			listener.enterBasePrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitBasePrimaryExpression) {
			listener.exitBasePrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitBasePrimaryExpression) {
			return visitor.visitBasePrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixOpContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.COMMA);
		} else {
			return this.getToken(MindLangParser.COMMA, i);
		}
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_postfixOp; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterPostfixOp) {
			listener.enterPostfixOp(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitPostfixOp) {
			listener.exitPostfixOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitPostfixOp) {
			return visitor.visitPostfixOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


