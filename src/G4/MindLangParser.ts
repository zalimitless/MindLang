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
	public static readonly NOT = 45;
	public static readonly LINE_COMMENT = 46;
	public static readonly BLOCK_COMMENT = 47;
	public static readonly WHITESPACE = 48;
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
	public static readonly RULE_functionAccessStatement = 16;
	public static readonly RULE_returnStatement = 17;
	public static readonly RULE_notStatement = 18;
	public static readonly RULE_incrementDecrementStatement = 19;
	public static readonly RULE_breakStatement = 20;
	public static readonly RULE_switchStatement = 21;
	public static readonly RULE_switchBlock = 22;
	public static readonly RULE_switchCase = 23;
	public static readonly RULE_defaultClause = 24;
	public static readonly RULE_eventHandler = 25;
	public static readonly RULE_tryCatch = 26;
	public static readonly RULE_throwStatement = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_unaryExpression = 29;
	public static readonly RULE_primaryExpression = 30;
	public static readonly RULE_basePrimaryExpression = 31;
	public static readonly RULE_postfixOp = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "globalStatement", "processorDeclaration", "block", "statementOrBlock", 
		"statement", "variableDeclaration", "assignmentStatement", "printStatement", 
		"ifStatement", "elseIfClause", "elseClause", "whileStatement", "forStatement", 
		"functionDeclaration", "functionCall", "functionAccessStatement", "returnStatement", 
		"notStatement", "incrementDecrementStatement", "breakStatement", "switchStatement", 
		"switchBlock", "switchCase", "defaultClause", "eventHandler", "tryCatch", 
		"throwStatement", "expression", "unaryExpression", "primaryExpression", 
		"basePrimaryExpression", "postfixOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'while'", "'print'", "'if'", "'else'", "'function'", 
		"'for'", "'return'", "'break'", "'switch'", "'case'", "'default'", "'on'", 
		"'try'", "'catch'", "'throw'", "'processor'", undefined, undefined, undefined, 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'+='", "'=='", "'<'", "'>'", 
		"'<='", "'>='", "';'", "','", "':'", "'('", "')'", "'{'", "'}'", "'['", 
		"']'", "'.'", "'++'", "'--'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LET", "WHILE", "PRINT", "IF", "ELSE", "FUNCTION", "FOR", "RETURN", 
		"BREAK", "SWITCH", "CASE", "DEFAULT", "ON", "TRY", "CATCH", "THROW", "PROCESSOR", 
		"IDENTIFIER", "NUMBER", "STRING", "PLUS", "MINUS", "MULT", "DIV", "MOD", 
		"ASSIGN", "PLUS_ASSIGN", "EQ", "LT", "GT", "LE", "GE", "SEMICOLON", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
		"DOT", "INCREMENT", "DECREMENT", "NOT", "LINE_COMMENT", "BLOCK_COMMENT", 
		"WHITESPACE",
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
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.PROCESSOR))) !== 0)) {
				{
				{
				this.state = 66;
				this.globalStatement();
				}
				}
				this.state = 71;
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
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.PROCESSOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.processorDeclaration();
				}
				break;
			case MindLangParser.FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.functionDeclaration();
				}
				break;
			case MindLangParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
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
			this.state = 77;
			this.match(MindLangParser.PROCESSOR);
			this.state = 78;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 79;
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
			this.state = 81;
			this.match(MindLangParser.LBRACE);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MindLangParser.LET) | (1 << MindLangParser.WHILE) | (1 << MindLangParser.PRINT) | (1 << MindLangParser.IF) | (1 << MindLangParser.FUNCTION) | (1 << MindLangParser.FOR) | (1 << MindLangParser.RETURN) | (1 << MindLangParser.BREAK) | (1 << MindLangParser.SWITCH) | (1 << MindLangParser.ON) | (1 << MindLangParser.TRY) | (1 << MindLangParser.THROW) | (1 << MindLangParser.IDENTIFIER))) !== 0) || _la === MindLangParser.NOT) {
				{
				{
				this.state = 82;
				this.statement();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
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
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
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
			case MindLangParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
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
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.printStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 97;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 99;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 100;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 101;
				this.functionCall();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 102;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 103;
				this.incrementDecrementStatement();
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MindLangParser.SEMICOLON) {
					{
					this.state = 104;
					this.match(MindLangParser.SEMICOLON);
					}
				}

				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 107;
				this.switchStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 108;
				this.eventHandler();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 109;
				this.tryCatch();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 110;
				this.throwStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 111;
				this.breakStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 112;
				this.functionAccessStatement();
				this.state = 113;
				this.match(MindLangParser.SEMICOLON);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 115;
				this.notStatement();
				this.state = 116;
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MindLangParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(MindLangParser.LET);
			this.state = 121;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 122;
			this.match(MindLangParser.ASSIGN);
			this.state = 123;
			this.expression();
			this.state = 124;
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
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 127;
				this.match(MindLangParser.ASSIGN);
				this.state = 128;
				this.expression();
				this.state = 129;
				this.match(MindLangParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 132;
				this.match(MindLangParser.PLUS_ASSIGN);
				this.state = 133;
				this.expression();
				this.state = 134;
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
			this.state = 138;
			this.match(MindLangParser.PRINT);
			this.state = 139;
			this.match(MindLangParser.LPAREN);
			this.state = 140;
			this.expression();
			this.state = 141;
			this.match(MindLangParser.RPAREN);
			this.state = 142;
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
			this.state = 144;
			this.match(MindLangParser.IF);
			this.state = 145;
			this.match(MindLangParser.LPAREN);
			this.state = 146;
			this.expression();
			this.state = 147;
			this.match(MindLangParser.RPAREN);
			this.state = 148;
			this.statementOrBlock();
			this.state = 152;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 149;
					this.elseIfClause();
					}
					}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 155;
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
			this.state = 158;
			this.match(MindLangParser.ELSE);
			this.state = 159;
			this.match(MindLangParser.IF);
			this.state = 160;
			this.match(MindLangParser.LPAREN);
			this.state = 161;
			this.expression();
			this.state = 162;
			this.match(MindLangParser.RPAREN);
			this.state = 163;
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
			this.state = 165;
			this.match(MindLangParser.ELSE);
			this.state = 166;
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
			this.state = 168;
			this.match(MindLangParser.WHILE);
			this.state = 169;
			this.match(MindLangParser.LPAREN);
			this.state = 170;
			this.expression();
			this.state = 171;
			this.match(MindLangParser.RPAREN);
			this.state = 172;
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
			this.state = 174;
			this.match(MindLangParser.FOR);
			this.state = 175;
			this.match(MindLangParser.LPAREN);
			this.state = 176;
			this.variableDeclaration();
			this.state = 177;
			this.expression();
			this.state = 178;
			this.match(MindLangParser.SEMICOLON);
			this.state = 181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 180;
				this.incrementDecrementStatement();
				}
				break;
			}
			this.state = 183;
			this.match(MindLangParser.RPAREN);
			this.state = 184;
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
			this.state = 186;
			this.match(MindLangParser.FUNCTION);
			this.state = 187;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 188;
			this.match(MindLangParser.LPAREN);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MindLangParser.IDENTIFIER) {
				{
				this.state = 189;
				this.match(MindLangParser.IDENTIFIER);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 190;
					this.match(MindLangParser.COMMA);
					this.state = 191;
					this.match(MindLangParser.IDENTIFIER);
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 199;
			this.match(MindLangParser.RPAREN);
			this.state = 200;
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
			this.state = 202;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 203;
			this.match(MindLangParser.LPAREN);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)) | (1 << (MindLangParser.NOT - 18)))) !== 0)) {
				{
				this.state = 204;
				this.expression();
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 205;
					this.match(MindLangParser.COMMA);
					this.state = 206;
					this.expression();
					}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 214;
			this.match(MindLangParser.RPAREN);
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
	public functionAccessStatement(): FunctionAccessStatementContext {
		let _localctx: FunctionAccessStatementContext = new FunctionAccessStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MindLangParser.RULE_functionAccessStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 218;
			this.match(MindLangParser.DOT);
			this.state = 219;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 220;
			this.match(MindLangParser.LPAREN);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)) | (1 << (MindLangParser.NOT - 18)))) !== 0)) {
				{
				this.state = 221;
				this.expression();
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MindLangParser.COMMA) {
					{
					{
					this.state = 222;
					this.match(MindLangParser.COMMA);
					this.state = 223;
					this.expression();
					}
					}
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 231;
			this.match(MindLangParser.RPAREN);
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
		this.enterRule(_localctx, 34, MindLangParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(MindLangParser.RETURN);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)) | (1 << (MindLangParser.NOT - 18)))) !== 0)) {
				{
				this.state = 234;
				this.expression();
				}
			}

			this.state = 237;
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
	public notStatement(): NotStatementContext {
		let _localctx: NotStatementContext = new NotStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MindLangParser.RULE_notStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(MindLangParser.NOT);
			this.state = 240;
			this.match(MindLangParser.LPAREN);
			this.state = 241;
			this.expression();
			this.state = 242;
			this.match(MindLangParser.RPAREN);
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
		this.enterRule(_localctx, 38, MindLangParser.RULE_incrementDecrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 245;
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
		this.enterRule(_localctx, 40, MindLangParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(MindLangParser.BREAK);
			this.state = 248;
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
		this.enterRule(_localctx, 42, MindLangParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(MindLangParser.SWITCH);
			this.state = 251;
			this.expression();
			this.state = 252;
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
		this.enterRule(_localctx, 44, MindLangParser.RULE_switchBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(MindLangParser.LBRACE);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MindLangParser.CASE) {
				{
				{
				this.state = 255;
				this.switchCase();
				}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MindLangParser.DEFAULT) {
				{
				this.state = 261;
				this.defaultClause();
				}
			}

			this.state = 264;
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
		this.enterRule(_localctx, 46, MindLangParser.RULE_switchCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(MindLangParser.CASE);
			this.state = 267;
			this.expression();
			this.state = 268;
			this.match(MindLangParser.COLON);
			this.state = 269;
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
		this.enterRule(_localctx, 48, MindLangParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(MindLangParser.DEFAULT);
			this.state = 272;
			this.match(MindLangParser.COLON);
			this.state = 273;
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
		this.enterRule(_localctx, 50, MindLangParser.RULE_eventHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(MindLangParser.ON);
			this.state = 276;
			this.match(MindLangParser.LPAREN);
			this.state = 277;
			this.match(MindLangParser.STRING);
			this.state = 278;
			this.match(MindLangParser.COMMA);
			this.state = 279;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 280;
			this.match(MindLangParser.RPAREN);
			this.state = 281;
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
		this.enterRule(_localctx, 52, MindLangParser.RULE_tryCatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(MindLangParser.TRY);
			this.state = 284;
			this.block();
			this.state = 285;
			this.match(MindLangParser.CATCH);
			this.state = 286;
			this.match(MindLangParser.LPAREN);
			this.state = 287;
			this.match(MindLangParser.IDENTIFIER);
			this.state = 288;
			this.match(MindLangParser.RPAREN);
			this.state = 289;
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
		this.enterRule(_localctx, 54, MindLangParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(MindLangParser.THROW);
			this.state = 292;
			this.expression();
			this.state = 293;
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
		this.enterRule(_localctx, 56, MindLangParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.unaryExpression();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (MindLangParser.PLUS - 21)) | (1 << (MindLangParser.MINUS - 21)) | (1 << (MindLangParser.MULT - 21)) | (1 << (MindLangParser.DIV - 21)) | (1 << (MindLangParser.MOD - 21)) | (1 << (MindLangParser.EQ - 21)) | (1 << (MindLangParser.LT - 21)) | (1 << (MindLangParser.GT - 21)) | (1 << (MindLangParser.LE - 21)) | (1 << (MindLangParser.GE - 21)))) !== 0)) {
				{
				{
				this.state = 296;
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
				this.state = 297;
				this.unaryExpression();
				}
				}
				this.state = 302;
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
		this.enterRule(_localctx, 58, MindLangParser.RULE_unaryExpression);
		try {
			this.state = 308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.match(MindLangParser.NOT);
				this.state = 304;
				this.unaryExpression();
				}
				break;
			case MindLangParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.match(MindLangParser.MINUS);
				this.state = 306;
				this.unaryExpression();
				}
				break;
			case MindLangParser.IDENTIFIER:
			case MindLangParser.NUMBER:
			case MindLangParser.STRING:
			case MindLangParser.LPAREN:
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 307;
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
		this.enterRule(_localctx, 60, MindLangParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.basePrimaryExpression();
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (MindLangParser.LPAREN - 36)) | (1 << (MindLangParser.LBRACKET - 36)) | (1 << (MindLangParser.DOT - 36)))) !== 0)) {
				{
				{
				this.state = 311;
				this.postfixOp();
				}
				}
				this.state = 316;
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
		this.enterRule(_localctx, 62, MindLangParser.RULE_basePrimaryExpression);
		let _la: number;
		try {
			this.state = 336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 317;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.match(MindLangParser.NUMBER);
				}
				break;
			case MindLangParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this.match(MindLangParser.STRING);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 320;
				this.match(MindLangParser.LPAREN);
				this.state = 321;
				this.expression();
				this.state = 322;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 324;
				this.match(MindLangParser.LBRACKET);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)) | (1 << (MindLangParser.NOT - 18)))) !== 0)) {
					{
					this.state = 325;
					this.expression();
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 326;
						this.match(MindLangParser.COMMA);
						this.state = 327;
						this.expression();
						}
						}
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 335;
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
		this.enterRule(_localctx, 64, MindLangParser.RULE_postfixOp);
		let _la: number;
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MindLangParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.match(MindLangParser.DOT);
				this.state = 339;
				this.match(MindLangParser.IDENTIFIER);
				}
				break;
			case MindLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.match(MindLangParser.LPAREN);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (MindLangParser.IDENTIFIER - 18)) | (1 << (MindLangParser.NUMBER - 18)) | (1 << (MindLangParser.STRING - 18)) | (1 << (MindLangParser.MINUS - 18)) | (1 << (MindLangParser.LPAREN - 18)) | (1 << (MindLangParser.LBRACKET - 18)) | (1 << (MindLangParser.NOT - 18)))) !== 0)) {
					{
					this.state = 341;
					this.expression();
					this.state = 346;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MindLangParser.COMMA) {
						{
						{
						this.state = 342;
						this.match(MindLangParser.COMMA);
						this.state = 343;
						this.expression();
						}
						}
						this.state = 348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 351;
				this.match(MindLangParser.RPAREN);
				}
				break;
			case MindLangParser.LBRACKET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 352;
				this.match(MindLangParser.LBRACKET);
				this.state = 353;
				this.expression();
				this.state = 354;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u0169\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x07\x02F\n\x02\f\x02\x0E\x02I\v\x02\x03\x03\x03\x03\x03\x03\x05\x03N" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05V\n\x05" +
		"\f\x05\x0E\x05Y\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06_\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07l\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07y\n\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\x8B\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x99\n\v\f\v\x0E\v\x9C\v\v\x03\v\x05" +
		"\v\x9F\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xB8\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xC3\n\x10" +
		"\f\x10\x0E\x10\xC6\v\x10\x05\x10\xC8\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xD2\n\x11\f\x11\x0E\x11\xD5" +
		"\v\x11\x05\x11\xD7\n\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xE3\n\x12\f\x12\x0E\x12\xE6\v" +
		"\x12\x05\x12\xE8\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xEE\n\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x07\x18\u0103\n\x18\f\x18\x0E\x18\u0106\v\x18\x03\x18\x05\x18" +
		"\u0109\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u012D\n\x1E\f\x1E\x0E\x1E\u0130\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u0137\n\x1F\x03 \x03 \x07 \u013B\n \f \x0E \u013E" +
		"\v \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x07!\u014B" +
		"\n!\f!\x0E!\u014E\v!\x05!\u0150\n!\x03!\x05!\u0153\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x07\"\u015B\n\"\f\"\x0E\"\u015E\v\"\x05\"\u0160\n" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0167\n\"\x03\"\x02\x02\x02#\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02\x02\x04\x03" +
		"\x02-.\x04\x02\x17\x1B\x1E\"\x02\u0178\x02G\x03\x02\x02\x02\x04M\x03\x02" +
		"\x02\x02\x06O\x03\x02\x02\x02\bS\x03\x02\x02\x02\n^\x03\x02\x02\x02\f" +
		"x\x03\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x8A\x03\x02\x02\x02\x12\x8C" +
		"\x03\x02\x02\x02\x14\x92\x03\x02\x02\x02\x16\xA0\x03\x02\x02\x02\x18\xA7" +
		"\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xB0\x03\x02\x02\x02\x1E\xBC" +
		"\x03\x02\x02\x02 \xCC\x03\x02\x02\x02\"\xDB\x03\x02\x02\x02$\xEB\x03\x02" +
		"\x02\x02&\xF1\x03\x02\x02\x02(\xF6\x03\x02\x02\x02*\xF9\x03\x02\x02\x02" +
		",\xFC\x03\x02\x02\x02.\u0100\x03\x02\x02\x020\u010C\x03\x02\x02\x022\u0111" +
		"\x03\x02\x02\x024\u0115\x03\x02\x02\x026\u011D\x03\x02\x02\x028\u0125" +
		"\x03\x02\x02\x02:\u0129\x03\x02\x02\x02<\u0136\x03\x02\x02\x02>\u0138" +
		"\x03\x02\x02\x02@\u0152\x03\x02\x02\x02B\u0166\x03\x02\x02\x02DF\x05\x04" +
		"\x03\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02" +
		"\x02\x02H\x03\x03\x02\x02\x02IG\x03\x02\x02\x02JN\x05\x06\x04\x02KN\x05" +
		"\x1E\x10\x02LN\x05\x0E\b\x02MJ\x03\x02\x02\x02MK\x03\x02\x02\x02ML\x03" +
		"\x02\x02\x02N\x05\x03\x02\x02\x02OP\x07\x13\x02\x02PQ\x07\x14\x02\x02" +
		"QR\x05\b\x05\x02R\x07\x03\x02\x02\x02SW\x07(\x02\x02TV\x05\f\x07\x02U" +
		"T\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02" +
		"XZ\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07)\x02\x02[\t\x03\x02\x02\x02" +
		"\\_\x05\b\x05\x02]_\x05\f\x07\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02" +
		"_\v\x03\x02\x02\x02`y\x05\x0E\b\x02ay\x05\x10\t\x02by\x05\x12\n\x02cy" +
		"\x05\x14\v\x02dy\x05\x1A\x0E\x02ey\x05\x1C\x0F\x02fy\x05\x1E\x10\x02g" +
		"y\x05 \x11\x02hy\x05$\x13\x02ik\x05(\x15\x02jl\x07#\x02\x02kj\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02ly\x03\x02\x02\x02my\x05,\x17\x02ny\x054\x1B" +
		"\x02oy\x056\x1C\x02py\x058\x1D\x02qy\x05*\x16\x02rs\x05\"\x12\x02st\x07" +
		"#\x02\x02ty\x03\x02\x02\x02uv\x05&\x14\x02vw\x07#\x02\x02wy\x03\x02\x02" +
		"\x02x`\x03\x02\x02\x02xa\x03\x02\x02\x02xb\x03\x02\x02\x02xc\x03\x02\x02" +
		"\x02xd\x03\x02\x02\x02xe\x03\x02\x02\x02xf\x03\x02\x02\x02xg\x03\x02\x02" +
		"\x02xh\x03\x02\x02\x02xi\x03\x02\x02\x02xm\x03\x02\x02\x02xn\x03\x02\x02" +
		"\x02xo\x03\x02\x02\x02xp\x03\x02\x02\x02xq\x03\x02\x02\x02xr\x03\x02\x02" +
		"\x02xu\x03\x02\x02\x02y\r\x03\x02\x02\x02z{\x07\x03\x02\x02{|\x07\x14" +
		"\x02\x02|}\x07\x1C\x02\x02}~\x05:\x1E\x02~\x7F\x07#\x02\x02\x7F\x0F\x03" +
		"\x02\x02\x02\x80\x81\x07\x14\x02\x02\x81\x82\x07\x1C\x02\x02\x82\x83\x05" +
		":\x1E\x02\x83\x84\x07#\x02\x02\x84\x8B\x03\x02\x02\x02\x85\x86\x07\x14" +
		"\x02\x02\x86\x87\x07\x1D\x02\x02\x87\x88\x05:\x1E\x02\x88\x89\x07#\x02" +
		"\x02\x89\x8B\x03\x02\x02\x02\x8A\x80\x03\x02\x02\x02\x8A\x85\x03\x02\x02" +
		"\x02\x8B\x11\x03\x02\x02\x02\x8C\x8D\x07\x05\x02\x02\x8D\x8E\x07&\x02" +
		"\x02\x8E\x8F\x05:\x1E\x02\x8F\x90\x07\'\x02\x02\x90\x91\x07#\x02\x02\x91" +
		"\x13\x03\x02\x02\x02\x92\x93\x07\x06\x02\x02\x93\x94\x07&\x02\x02\x94" +
		"\x95\x05:\x1E\x02\x95\x96\x07\'\x02\x02\x96\x9A\x05\n\x06\x02\x97\x99" +
		"\x05\x16\f\x02\x98\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98" +
		"\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A" +
		"\x03\x02\x02\x02\x9D\x9F\x05\x18\r\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F" +
		"\x03\x02\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA1\x07\x07\x02\x02\xA1\xA2" +
		"\x07\x06\x02\x02\xA2\xA3\x07&\x02\x02\xA3\xA4\x05:\x1E\x02\xA4\xA5\x07" +
		"\'\x02\x02\xA5\xA6\x05\n\x06\x02\xA6\x17\x03\x02\x02\x02\xA7\xA8\x07\x07" +
		"\x02\x02\xA8\xA9\x05\n\x06\x02\xA9\x19\x03\x02\x02\x02\xAA\xAB\x07\x04" +
		"\x02\x02\xAB\xAC\x07&\x02\x02\xAC\xAD\x05:\x1E\x02\xAD\xAE\x07\'\x02\x02" +
		"\xAE\xAF\x05\n\x06\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\x07\t\x02\x02\xB1" +
		"\xB2\x07&\x02\x02\xB2\xB3\x05\x0E\b\x02\xB3\xB4\x05:\x1E\x02\xB4\xB7\x07" +
		"#\x02\x02\xB5\xB8\x05:\x1E\x02\xB6\xB8\x05(\x15\x02\xB7\xB5\x03\x02\x02" +
		"\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x07\'\x02" +
		"\x02\xBA\xBB\x05\n\x06\x02\xBB\x1D\x03\x02\x02\x02\xBC\xBD\x07\b\x02\x02" +
		"\xBD\xBE\x07\x14\x02\x02\xBE\xC7\x07&\x02\x02\xBF\xC4\x07\x14\x02\x02" +
		"\xC0\xC1\x07$\x02\x02\xC1\xC3\x07\x14\x02\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xBF\x03\x02\x02\x02" +
		"\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x07\'\x02\x02" +
		"\xCA\xCB\x05\b\x05\x02\xCB\x1F\x03\x02\x02\x02\xCC\xCD\x07\x14\x02\x02" +
		"\xCD\xD6\x07&\x02\x02\xCE\xD3\x05:\x1E\x02\xCF\xD0\x07$\x02\x02\xD0\xD2" +
		"\x05:\x1E\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3" +
		"\x03\x02\x02\x02\xD6\xCE\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xD9\x07\'\x02\x02\xD9\xDA\x07#\x02\x02\xDA!\x03\x02" +
		"\x02\x02\xDB\xDC\x07\x14\x02\x02\xDC\xDD\x07,\x02\x02\xDD\xDE\x07\x14" +
		"\x02\x02\xDE\xE7\x07&\x02\x02\xDF\xE4\x05:\x1E\x02\xE0\xE1\x07$\x02\x02" +
		"\xE1\xE3\x05:\x1E\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02" +
		"\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02" +
		"\xE6\xE4\x03\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02" +
		"\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07\'\x02\x02\xEA#\x03\x02\x02\x02\xEB" +
		"\xED\x07\n\x02\x02\xEC\xEE\x05:\x1E\x02\xED\xEC\x03\x02\x02\x02\xED\xEE" +
		"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x07#\x02\x02\xF0%\x03" +
		"\x02\x02\x02\xF1\xF2\x07/\x02\x02\xF2\xF3\x07&\x02\x02\xF3\xF4\x05:\x1E" +
		"\x02\xF4\xF5\x07\'\x02\x02\xF5\'\x03\x02\x02\x02\xF6\xF7\x07\x14\x02\x02" +
		"\xF7\xF8\t\x02\x02\x02\xF8)\x03\x02\x02\x02\xF9\xFA\x07\v\x02\x02\xFA" +
		"\xFB\x07#\x02\x02\xFB+\x03\x02\x02\x02\xFC\xFD\x07\f\x02\x02\xFD\xFE\x05" +
		":\x1E\x02\xFE\xFF\x05.\x18\x02\xFF-\x03\x02\x02\x02\u0100\u0104\x07(\x02" +
		"\x02\u0101\u0103\x050\x19\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\x05" +
		"2\x1A\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"\u010A\x03\x02\x02\x02\u010A\u010B\x07)\x02\x02\u010B/\x03\x02\x02\x02" +
		"\u010C\u010D\x07\r\x02\x02\u010D\u010E\x05:\x1E\x02\u010E\u010F\x07%\x02" +
		"\x02\u010F\u0110\x05\n\x06\x02\u01101\x03\x02\x02\x02\u0111\u0112\x07" +
		"\x0E\x02\x02\u0112\u0113\x07%\x02\x02\u0113\u0114\x05\n\x06\x02\u0114" +
		"3\x03\x02\x02\x02\u0115\u0116\x07\x0F\x02\x02\u0116\u0117\x07&\x02\x02" +
		"\u0117\u0118\x07\x16\x02\x02\u0118\u0119\x07$\x02\x02\u0119\u011A\x07" +
		"\x14\x02\x02\u011A\u011B\x07\'\x02\x02\u011B\u011C\x05\b\x05\x02\u011C" +
		"5\x03\x02\x02\x02\u011D\u011E\x07\x10\x02\x02\u011E\u011F\x05\b\x05\x02" +
		"\u011F\u0120\x07\x11\x02\x02\u0120\u0121\x07&\x02\x02\u0121\u0122\x07" +
		"\x14\x02\x02\u0122\u0123\x07\'\x02\x02\u0123\u0124\x05\b\x05\x02\u0124" +
		"7\x03\x02\x02\x02\u0125\u0126\x07\x12\x02\x02\u0126\u0127\x05:\x1E\x02" +
		"\u0127\u0128\x07#\x02\x02\u01289\x03\x02\x02\x02\u0129\u012E\x05<\x1F" +
		"\x02\u012A\u012B\t\x03\x02\x02\u012B\u012D\x05<\x1F\x02\u012C\u012A\x03" +
		"\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F;\x03\x02\x02\x02\u0130\u012E\x03\x02\x02" +
		"\x02\u0131\u0132\x07/\x02\x02\u0132\u0137\x05<\x1F\x02\u0133\u0134\x07" +
		"\x18\x02\x02\u0134\u0137\x05<\x1F\x02\u0135\u0137\x05> \x02\u0136\u0131" +
		"\x03\x02\x02\x02\u0136\u0133\x03\x02\x02\x02\u0136\u0135\x03\x02\x02\x02" +
		"\u0137=\x03\x02\x02\x02\u0138\u013C\x05@!\x02\u0139\u013B\x05B\"\x02\u013A" +
		"\u0139\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D?\x03\x02\x02\x02\u013E\u013C" +
		"\x03\x02\x02\x02\u013F\u0153\x07\x14\x02\x02\u0140\u0153\x07\x15\x02\x02" +
		"\u0141\u0153\x07\x16\x02\x02\u0142\u0143\x07&\x02\x02\u0143\u0144\x05" +
		":\x1E\x02\u0144\u0145\x07\'\x02\x02\u0145\u0153\x03\x02\x02\x02\u0146" +
		"\u014F\x07*\x02\x02\u0147\u014C\x05:\x1E\x02\u0148\u0149\x07$\x02\x02" +
		"\u0149\u014B\x05:\x1E\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014E\x03" +
		"\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0147\x03\x02" +
		"\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0153\x07+\x02\x02\u0152\u013F\x03\x02\x02\x02\u0152\u0140\x03\x02\x02" +
		"\x02\u0152\u0141\x03\x02\x02\x02\u0152\u0142\x03\x02\x02\x02\u0152\u0146" +
		"\x03\x02\x02\x02\u0153A\x03\x02\x02\x02\u0154\u0155\x07,\x02\x02\u0155" +
		"\u0167\x07\x14\x02\x02\u0156\u015F\x07&\x02\x02\u0157\u015C\x05:\x1E\x02" +
		"\u0158\u0159\x07$\x02\x02\u0159\u015B\x05:\x1E\x02\u015A\u0158\x03\x02" +
		"\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C" +
		"\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02" +
		"\x02\x02\u015F\u0157\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u0167\x07\'\x02\x02\u0162\u0163\x07*\x02" +
		"\x02\u0163\u0164\x05:\x1E\x02\u0164\u0165\x07+\x02\x02\u0165\u0167\x03" +
		"\x02\x02\x02\u0166\u0154\x03\x02\x02\x02\u0166\u0156\x03\x02\x02\x02\u0166" +
		"\u0162\x03\x02\x02\x02\u0167C\x03\x02\x02\x02\x1EGMW^kx\x8A\x9A\x9E\xB7" +
		"\xC4\xC7\xD3\xD6\xE4\xE7\xED\u0104\u0108\u012E\u0136\u013C\u014C\u014F" +
		"\u0152\u015C\u015F\u0166";
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
	public functionAccessStatement(): FunctionAccessStatementContext | undefined {
		return this.tryGetRuleContext(0, FunctionAccessStatementContext);
	}
	public notStatement(): NotStatementContext | undefined {
		return this.tryGetRuleContext(0, NotStatementContext);
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


export class FunctionAccessStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MindLangParser.IDENTIFIER);
		} else {
			return this.getToken(MindLangParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(MindLangParser.DOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
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
	public get ruleIndex(): number { return MindLangParser.RULE_functionAccessStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterFunctionAccessStatement) {
			listener.enterFunctionAccessStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitFunctionAccessStatement) {
			listener.exitFunctionAccessStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitFunctionAccessStatement) {
			return visitor.visitFunctionAccessStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(MindLangParser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(MindLangParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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


export class NotStatementContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(MindLangParser.NOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MindLangParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MindLangParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MindLangParser.RULE_notStatement; }
	// @Override
	public enterRule(listener: MindLangListener): void {
		if (listener.enterNotStatement) {
			listener.enterNotStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MindLangListener): void {
		if (listener.exitNotStatement) {
			listener.exitNotStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MindLangVisitor<Result>): Result {
		if (visitor.visitNotStatement) {
			return visitor.visitNotStatement(this);
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
	public NOT(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.NOT, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MindLangParser.MINUS, 0); }
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


