// Generated from ./MindLang.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly IDENTIFIER = 10;
	public static readonly NUMBER = 11;
	public static readonly STRING = 12;
	public static readonly PLUS = 13;
	public static readonly MINUS = 14;
	public static readonly MULT = 15;
	public static readonly DIV = 16;
	public static readonly MOD = 17;
	public static readonly ASSIGN = 18;
	public static readonly PLUS_ASSIGN = 19;
	public static readonly EQ = 20;
	public static readonly LT = 21;
	public static readonly GT = 22;
	public static readonly LE = 23;
	public static readonly GE = 24;
	public static readonly SEMICOLON = 25;
	public static readonly COMMA = 26;
	public static readonly LPAREN = 27;
	public static readonly RPAREN = 28;
	public static readonly LBRACE = 29;
	public static readonly RBRACE = 30;
	public static readonly LBRACKET = 31;
	public static readonly RBRACKET = 32;
	public static readonly DOT = 33;
	public static readonly INCREMENT = 34;
	public static readonly DECREMENT = 35;
	public static readonly LINE_COMMENT = 36;
	public static readonly BLOCK_COMMENT = 37;
	public static readonly WHITESPACE = 38;
	public static readonly RULE_program = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_statementOrBlock = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_variableDeclaration = 4;
	public static readonly RULE_assignmentStatement = 5;
	public static readonly RULE_printStatement = 6;
	public static readonly RULE_ifStatement = 7;
	public static readonly RULE_elseIfClause = 8;
	public static readonly RULE_elseClause = 9;
	public static readonly RULE_whileStatement = 10;
	public static readonly RULE_forStatement = 11;
	public static readonly RULE_functionDeclaration = 12;
	public static readonly RULE_functionCall = 13;
	public static readonly RULE_returnStatement = 14;
	public static readonly RULE_incrementDecrementStatement = 15;
	public static readonly RULE_breakStatement = 16;
	public static readonly RULE_expression = 17;
	public static readonly RULE_unaryExpression = 18;
	public static readonly RULE_primaryExpression = 19;
	public static readonly RULE_basePrimaryExpression = 20;
	public static readonly RULE_postfixOp = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "block", "statementOrBlock", "statement", "variableDeclaration", 
		"assignmentStatement", "printStatement", "ifStatement", "elseIfClause", 
		"elseClause", "whileStatement", "forStatement", "functionDeclaration", 
		"functionCall", "returnStatement", "incrementDecrementStatement", "breakStatement", 
		"expression", "unaryExpression", "primaryExpression", "basePrimaryExpression", 
		"postfixOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'while'", "'print'", "'if'", "'else'", "'function'", 
		"'for'", "'return'", "'break'", undefined, undefined, undefined, "'+'", 
		"'-'", "'*'", "'/'", "'%'", "'='", "'+='", "'=='", "'<'", "'>'", "'<='", 
		"'>='", "';'", "','", "'('", "')'", "'{'", "'}'", "'['", "']'", "'.'", 
		"'++'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LET", "WHILE", "PRINT", "IF", "ELSE", "FUNCTION", "FOR", "RETURN", 
		"BREAK", "IDENTIFIER", "NUMBER", "STRING", "PLUS", "MINUS", "MULT", "DIV", 
		"MOD", "ASSIGN", "PLUS_ASSIGN", "EQ", "LT", "GT", "LE", "GE", "SEMICOLON", 
		"COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
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
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.WHILE) | (1 << MindLangParser.PRINT) | (1 << MindLangParser.IF) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.FOR) | (1 << MindLangParser.RETURN) | (1 << MindLangParser.BREAK) | (1 << MindLangParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 44;
				this.statement();
				}
				}
				this.state = 49;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MindLangParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(MindLangParser.LBRACE);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.WHILE) | (1 << MindLangParser.PRINT) | (1 << MindLangParser.IF) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.FOR) | (1 << MindLangParser.RETURN) | (1 << MindLangParser.BREAK) | (1 << MindLangParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 51;
				this.statement();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
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
		this.enterRule(_localctx, 4, MindLangParser.RULE_statementOrBlock);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
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
			case MindLangParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
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
		this.enterRule(_localctx, 6, MindLangParser.RULE_statement);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 64;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 65;
				this.printStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 66;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 67;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 68;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 69;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 70;
				this.functionCall();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 71;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 72;
				this.incrementDecrementStatement();
				this.state = 73;
				this.match(MindLangParser.SEMICOLON);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 75;
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
		this.enterRule(_localctx, 8, MindLangParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(MindLangParser.LET);
			this.state = 79;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 80;
			this.match(MindLangParser.ASSIGN);
			this.state = 81;
			this.expression();
			this.state = 82;
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
		this.enterRule(_localctx, 10, MindLangParser.RULE_assignmentStatement);
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 84;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 85;
				this.match(MindLangParser.ASSIGN);
				this.state = 86;
				this.expression();
				this.state = 87;
				this.match(MindLangParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 90;
				this.match(MindLangParser.PLUS_ASSIGN);
				this.state = 91;
				this.expression();
				this.state = 92;
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
		this.enterRule(_localctx, 12, MindLangParser.RULE_printStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(MindLangParser.PRINT);
			this.state = 97;
			this.match(MindLangParser.LPAREN);
			this.state = 98;
			this.expression();
			this.state = 99;
			this.match(MindLangParser.RPAREN);
			this.state = 100;
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
		this.enterRule(_localctx, 14, MindLangParser.RULE_ifStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(MindLangParser.IF);
			this.state = 103;
			this.match(MindLangParser.LPAREN);
			this.state = 104;
			this.expression();
			this.state = 105;
			this.match(MindLangParser.RPAREN);
			this.state = 106;
			this.statementOrBlock();
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 107;
					this.elseIfClause();
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 113;
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
		this.enterRule(_localctx, 16, MindLangParser.RULE_elseIfClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(MindLangParser.ELSE);
			this.state = 117;
			this.match(MindLangParser.IF);
			this.state = 118;
			this.match(MindLangParser.LPAREN);
			this.state = 119;
			this.expression();
			this.state = 120;
			this.match(MindLangParser.RPAREN);
			this.state = 121;
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
		this.enterRule(_localctx, 18, MindLangParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(MindLangParser.ELSE);
			this.state = 124;
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
		this.enterRule(_localctx, 20, MindLangParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(MindLangParser.WHILE);
			this.state = 127;
			this.match(MindLangParser.LPAREN);
			this.state = 128;
			this.expression();
			this.state = 129;
			this.match(MindLangParser.RPAREN);
			this.state = 130;
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
		this.enterRule(_localctx, 22, MindLangParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(MindLangParser.FOR);
			this.state = 133;
			this.match(MindLangParser.LPAREN);
			this.state = 134;
			this.variableDeclaration();
			this.state = 135;
			this.expression();
			this.state = 136;
			this.match(MindLangParser.SEMICOLON);
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 137;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 138;
				this.incrementDecrementStatement();
				}
				break;
			}
			this.state = 141;
			this.match(MindLangParser.RPAREN);
			this.state = 142;
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
		this.enterRule(_localctx, 24, MindLangParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(MindLangParser.FUNCTION);
			this.state = 145;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 146;
			this.match(MindLangParser.LPAREN);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MindLangParser.IDENTIFIER) {
				{
				this.state = 147;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 148;
					this.match(MindLangParser.COMMA);
					this.state = 149;
					this.match(MindLangParser.IDENTIFIER);
					}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 157;
			this.match(MindLangParser.RPAREN);
			this.state = 158;
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
		this.enterRule(_localctx, 26, MindLangParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 161;
			this.match(MindLangParser.LPAREN);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.IDENTIFIER) | (1 << MindLangParser.NUMBER) | (1 << MindLangParser.STRING) | (1 << MindLangParser.MINUS) | (1 << MindLangParser.LPAREN) | (1 << MindLangParser.LBRACKET))) !== 0)) {
				{
				this.state = 162;
				this.expression();
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 163;
					this.match(MindLangParser.COMMA);
					this.state = 164;
					this.expression();
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 172;
			this.match(MindLangParser.RPAREN);
			this.state = 173;
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
		this.enterRule(_localctx, 28, MindLangParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(MindLangParser.RETURN);
			this.state = 176;
			this.expression();
			this.state = 177;
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
		this.enterRule(_localctx, 30, MindLangParser.RULE_incrementDecrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 180;
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
		this.enterRule(_localctx, 32, MindLangParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(MindLangParser.BREAK);
			this.state = 183;
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
		this.enterRule(_localctx, 34, MindLangParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.unaryExpression();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.PLUS) | (1 << MindLangParser.MINUS) | (1 << MindLangParser.MULT) | (1 << MindLangParser.DIV) | (1 << MindLangParser.MOD) | (1 << MindLangParser.EQ) | (1 << MindLangParser.LT) | (1 << MindLangParser.GT) | (1 << MindLangParser.LE) | (1 << MindLangParser.GE))) !== 0)) {
				{
				{
				this.state = 186;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.PLUS) | (1 << MindLangParser.MINUS) | (1 << MindLangParser.MULT) | (1 << MindLangParser.DIV) | (1 << MindLangParser.MOD) | (1 << MindLangParser.EQ) | (1 << MindLangParser.LT) | (1 << MindLangParser.GT) | (1 << MindLangParser.LE) | (1 << MindLangParser.GE))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 187;
				this.unaryExpression();
				}
				}
				this.state = 192;
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
		this.enterRule(_localctx, 36, MindLangParser.RULE_unaryExpression);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.match(MindLangParser.MINUS);
				this.state = 194;
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
				this.state = 195;
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
		this.enterRule(_localctx, 38, MindLangParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.basePrimaryExpression();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (MindLangParser.LPAREN - 27)) | (1 << (MindLangParser.LBRACKET - 27)) | (1 << (MindLangParser.DOT - 27)))) !== 0)) {
				{
				{
				this.state = 199;
				this.postfixOp();
				}
				}
				this.state = 204;
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
		this.enterRule(_localctx, 40, MindLangParser.RULE_basePrimaryExpression);
		let _la: number;
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.match(MindLangParser.NUMBER);
				}
				break;
			case MindLangParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.match(MindLangParser.STRING);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 208;
				this.match(MindLangParser.LPAREN);
				this.state = 209;
				this.expression();
				this.state = 210;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 212;
				this.match(MindLangParser.LBRACKET);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.IDENTIFIER) | (1 << MindLangParser.NUMBER) | (1 << MindLangParser.STRING) | (1 << MindLangParser.MINUS) | (1 << MindLangParser.LPAREN) | (1 << MindLangParser.LBRACKET))) !== 0)) {
					{
					this.state = 213;
					this.expression();
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 214;
						this.match(MindLangParser.COMMA);
						this.state = 215;
						this.expression();
						}
						}
						this.state = 220;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 223;
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
		this.enterRule(_localctx, 42, MindLangParser.RULE_postfixOp);
		let _la: number;
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(MindLangParser.DOT);
				this.state = 227;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(MindLangParser.LPAREN);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.IDENTIFIER) | (1 << MindLangParser.NUMBER) | (1 << MindLangParser.STRING) | (1 << MindLangParser.MINUS) | (1 << MindLangParser.LPAREN) | (1 << MindLangParser.LBRACKET))) !== 0)) {
					{
					this.state = 229;
					this.expression();
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 230;
						this.match(MindLangParser.COMMA);
						this.state = 231;
						this.expression();
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 239;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
				this.match(MindLangParser.LBRACKET);
				this.state = 241;
				this.expression();
				this.state = 242;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xF9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x03\x03\x03\x07\x037\n\x03" +
		"\f\x03\x0E\x03:\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04@\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05O\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07a\n\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\to\n\t\f\t\x0E\tr\v\t" +
		"\x03\t\x05\tu\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\x8E\n\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x99\n\x0E\f\x0E\x0E\x0E\x9C\v\x0E\x05" +
		"\x0E\x9E\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\xA8\n\x0F\f\x0F\x0E\x0F\xAB\v\x0F\x05\x0F\xAD\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07\x13\xBF\n\x13" +
		"\f\x13\x0E\x13\xC2\v\x13\x03\x14\x03\x14\x03\x14\x05\x14\xC7\n\x14\x03" +
		"\x15\x03\x15\x07\x15\xCB\n\x15\f\x15\x0E\x15\xCE\v\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\xDB\n\x16\f\x16\x0E\x16\xDE\v\x16\x05\x16\xE0\n\x16\x03\x16\x05" +
		"\x16\xE3\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17" +
		"\xEB\n\x17\f\x17\x0E\x17\xEE\v\x17\x05\x17\xF0\n\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\xF7\n\x17\x03\x17\x02\x02\x02\x18\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		"\x02\x04\x03\x02$%\x04\x02\x0F\x13\x16\x1A\x02\u0104\x021\x03\x02\x02" +
		"\x02\x044\x03\x02\x02\x02\x06?\x03\x02\x02\x02\bN\x03\x02\x02\x02\nP\x03" +
		"\x02\x02\x02\f`\x03\x02\x02\x02\x0Eb\x03\x02\x02\x02\x10h\x03\x02\x02" +
		"\x02\x12v\x03\x02\x02\x02\x14}\x03\x02\x02\x02\x16\x80\x03\x02\x02\x02" +
		"\x18\x86\x03\x02\x02\x02\x1A\x92\x03\x02\x02\x02\x1C\xA2\x03\x02\x02\x02" +
		"\x1E\xB1\x03\x02\x02\x02 \xB5\x03\x02\x02\x02\"\xB8\x03\x02\x02\x02$\xBB" +
		"\x03\x02\x02\x02&\xC6\x03\x02\x02\x02(\xC8\x03\x02\x02\x02*\xE2\x03\x02" +
		"\x02\x02,\xF6\x03\x02\x02\x02.0\x05\b\x05\x02/.\x03\x02\x02\x0203\x03" +
		"\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03\x02\x02\x02" +
		"31\x03\x02\x02\x0248\x07\x1F\x02\x0257\x05\b\x05\x0265\x03\x02\x02\x02" +
		"7:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02\x02\x02" +
		":8\x03\x02\x02\x02;<\x07 \x02\x02<\x05\x03\x02\x02\x02=@\x05\x04\x03\x02" +
		">@\x05\b\x05\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x07\x03\x02\x02" +
		"\x02AO\x05\n\x06\x02BO\x05\f\x07\x02CO\x05\x0E\b\x02DO\x05\x10\t\x02E" +
		"O\x05\x16\f\x02FO\x05\x18\r\x02GO\x05\x1A\x0E\x02HO\x05\x1C\x0F\x02IO" +
		"\x05\x1E\x10\x02JK\x05 \x11\x02KL\x07\x1B\x02\x02LO\x03\x02\x02\x02MO" +
		"\x05\"\x12\x02NA\x03\x02\x02\x02NB\x03\x02\x02\x02NC\x03\x02\x02\x02N" +
		"D\x03\x02\x02\x02NE\x03\x02\x02\x02NF\x03\x02\x02\x02NG\x03\x02\x02\x02" +
		"NH\x03\x02\x02\x02NI\x03\x02\x02\x02NJ\x03\x02\x02\x02NM\x03\x02\x02\x02" +
		"O\t\x03\x02\x02\x02PQ\x07\x03\x02\x02QR\x07\f\x02\x02RS\x07\x14\x02\x02" +
		"ST\x05$\x13\x02TU\x07\x1B\x02\x02U\v\x03\x02\x02\x02VW\x07\f\x02\x02W" +
		"X\x07\x14\x02\x02XY\x05$\x13\x02YZ\x07\x1B\x02\x02Za\x03\x02\x02\x02[" +
		"\\\x07\f\x02\x02\\]\x07\x15\x02\x02]^\x05$\x13\x02^_\x07\x1B\x02\x02_" +
		"a\x03\x02\x02\x02`V\x03\x02\x02\x02`[\x03\x02\x02\x02a\r\x03\x02\x02\x02" +
		"bc\x07\x05\x02\x02cd\x07\x1D\x02\x02de\x05$\x13\x02ef\x07\x1E\x02\x02" +
		"fg\x07\x1B\x02\x02g\x0F\x03\x02\x02\x02hi\x07\x06\x02\x02ij\x07\x1D\x02" +
		"\x02jk\x05$\x13\x02kl\x07\x1E\x02\x02lp\x05\x06\x04\x02mo\x05\x12\n\x02" +
		"nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"qt\x03\x02\x02\x02rp\x03\x02\x02\x02su\x05\x14\v\x02ts\x03\x02\x02\x02" +
		"tu\x03\x02\x02\x02u\x11\x03\x02\x02\x02vw\x07\x07\x02\x02wx\x07\x06\x02" +
		"\x02xy\x07\x1D\x02\x02yz\x05$\x13\x02z{\x07\x1E\x02\x02{|\x05\x06\x04" +
		"\x02|\x13\x03\x02\x02\x02}~\x07\x07\x02\x02~\x7F\x05\x06\x04\x02\x7F\x15" +
		"\x03\x02\x02\x02\x80\x81\x07\x04\x02\x02\x81\x82\x07\x1D\x02\x02\x82\x83" +
		"\x05$\x13\x02\x83\x84\x07\x1E\x02\x02\x84\x85\x05\x06\x04\x02\x85\x17" +
		"\x03\x02\x02\x02\x86\x87\x07\t\x02\x02\x87\x88\x07\x1D\x02\x02\x88\x89" +
		"\x05\n\x06\x02\x89\x8A\x05$\x13\x02\x8A\x8D\x07\x1B\x02\x02\x8B\x8E\x05" +
		"$\x13\x02\x8C\x8E\x05 \x11\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x07\x1E\x02\x02\x90\x91\x05\x06" +
		"\x04\x02\x91\x19\x03\x02\x02\x02\x92\x93\x07\b\x02\x02\x93\x94\x07\f\x02" +
		"\x02\x94\x9D\x07\x1D\x02\x02\x95\x9A\x07\f\x02\x02\x96\x97\x07\x1C\x02" +
		"\x02\x97\x99\x07\f\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9C\x03\x02\x02" +
		"\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02" +
		"\x02\x9C\x9A\x03\x02\x02\x02\x9D\x95\x03\x02\x02\x02\x9D\x9E\x03\x02\x02" +
		"\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x07\x1E\x02\x02\xA0\xA1\x05\x04\x03" +
		"\x02\xA1\x1B\x03\x02\x02\x02\xA2\xA3\x07\f\x02\x02\xA3\xAC\x07\x1D\x02" +
		"\x02\xA4\xA9\x05$\x13\x02\xA5\xA6\x07\x1C\x02\x02\xA6\xA8\x05$\x13\x02" +
		"\xA7\xA5\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02" +
		"\xA9\xAA\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02" +
		"\xAC\xA4\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xAF\x07\x1E\x02\x02\xAF\xB0\x07\x1B\x02\x02\xB0\x1D\x03\x02\x02\x02" +
		"\xB1\xB2\x07\n\x02\x02\xB2\xB3\x05$\x13\x02\xB3\xB4\x07\x1B\x02\x02\xB4" +
		"\x1F\x03\x02\x02\x02\xB5\xB6\x07\f\x02\x02\xB6\xB7\t\x02\x02\x02\xB7!" +
		"\x03\x02\x02\x02\xB8\xB9\x07\v\x02\x02\xB9\xBA\x07\x1B\x02\x02\xBA#\x03" +
		"\x02\x02\x02\xBB\xC0\x05&\x14\x02\xBC\xBD\t\x03\x02\x02\xBD\xBF\x05&\x14" +
		"\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xC1\x03\x02\x02\x02\xC1%\x03\x02\x02\x02\xC2\xC0\x03\x02\x02" +
		"\x02\xC3\xC4\x07\x10\x02\x02\xC4\xC7\x05&\x14\x02\xC5\xC7\x05(\x15\x02" +
		"\xC6\xC3\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\'\x03\x02\x02\x02" +
		"\xC8\xCC\x05*\x16\x02\xC9\xCB\x05,\x17\x02\xCA\xC9\x03\x02\x02\x02\xCB" +
		"\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD" +
		")\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xE3\x07\f\x02\x02\xD0\xE3" +
		"\x07\r\x02\x02\xD1\xE3\x07\x0E\x02\x02\xD2\xD3\x07\x1D\x02\x02\xD3\xD4" +
		"\x05$\x13\x02\xD4\xD5\x07\x1E\x02\x02\xD5\xE3\x03\x02\x02\x02\xD6\xDF" +
		"\x07!\x02\x02\xD7\xDC\x05$\x13\x02\xD8\xD9\x07\x1C\x02\x02\xD9\xDB\x05" +
		"$\x13\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03" +
		"\x02\x02\x02\xDF\xD7\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE3\x07\"\x02\x02\xE2\xCF\x03\x02\x02\x02\xE2\xD0\x03" +
		"\x02\x02\x02\xE2\xD1\x03\x02\x02\x02\xE2\xD2\x03\x02\x02\x02\xE2\xD6\x03" +
		"\x02\x02\x02\xE3+\x03\x02\x02\x02\xE4\xE5\x07#\x02\x02\xE5\xF7\x07\f\x02" +
		"\x02\xE6\xEF\x07\x1D\x02\x02\xE7\xEC\x05$\x13\x02\xE8\xE9\x07\x1C\x02" +
		"\x02\xE9\xEB\x05$\x13\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02" +
		"\x02\xEE\xEC\x03\x02\x02\x02\xEF\xE7\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF7\x07\x1E\x02\x02\xF2\xF3\x07!\x02" +
		"\x02\xF3\xF4\x05$\x13\x02\xF4\xF5\x07\"\x02\x02\xF5\xF7\x03\x02\x02\x02" +
		"\xF6\xE4\x03\x02\x02\x02\xF6\xE6\x03\x02\x02\x02\xF6\xF2\x03\x02\x02\x02" +
		"\xF7-\x03\x02\x02\x02\x1718?N`pt\x8D\x9A\x9D\xA9\xAC\xC0\xC6\xCC\xDC\xDF" +
		"\xE2\xEC\xEF\xF6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MindLangParser.__ATN) {
			MindLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MindLangParser._serializedATN));
		}

		return MindLangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
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


