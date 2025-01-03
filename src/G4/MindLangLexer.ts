// Generated from src/G4/MindLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MindLangLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LET", "WHILE", "PRINT", "IF", "ELSE", "FUNCTION", "FOR", "RETURN", "BREAK", 
		"SWITCH", "CASE", "DEFAULT", "ON", "TRY", "CATCH", "THROW", "PROCESSOR", 
		"IDENTIFIER", "NUMBER", "STRING", "PLUS", "MINUS", "MULT", "DIV", "MOD", 
		"ASSIGN", "PLUS_ASSIGN", "EQ", "LT", "GT", "LE", "GE", "SEMICOLON", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
		"DOT", "INCREMENT", "DECREMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WHITESPACE",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MindLangLexer._LITERAL_NAMES, MindLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MindLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MindLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MindLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return MindLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MindLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MindLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MindLangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x021\u012F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\xC7" +
		"\n\x13\f\x13\x0E\x13\xCA\v\x13\x03\x14\x06\x14\xCD\n\x14\r\x14\x0E\x14" +
		"\xCE\x03\x15\x03\x15\x07\x15\xD3\n\x15\f\x15\x0E\x15\xD6\v\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x07.\u0114\n.\f.\x0E.\u0117\v.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x07/\u011F\n/\f/\x0E/\u0122\v/\x03/\x03/\x03/\x03/\x03/\x030\x06" +
		"0\u012A\n0\r0\x0E0\u012B\x030\x030\x04\xD4\u0120\x02\x021\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U" +
		"\x02,W\x02-Y\x02.[\x02/]\x020_\x021\x03\x02\x07\x05\x02C\\aac|\x06\x02" +
		"2;C\\aac|\x03\x022;\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x02\u0134" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
		"!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03" +
		"\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02" +
		"\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x02" +
		"5\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02" +
		"\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02" +
		"\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03" +
		"\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02" +
		"\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02" +
		"W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02" +
		"\x02\x02\x02_\x03\x02\x02\x02\x03a\x03\x02\x02\x02\x05e\x03\x02\x02\x02" +
		"\x07k\x03\x02\x02\x02\tq\x03\x02\x02\x02\vt\x03\x02\x02\x02\ry\x03\x02" +
		"\x02\x02\x0F\x82\x03\x02\x02\x02\x11\x86\x03\x02\x02\x02\x13\x8D\x03\x02" +
		"\x02\x02\x15\x93\x03\x02\x02\x02\x17\x9A\x03\x02\x02\x02\x19\x9F\x03\x02" +
		"\x02\x02\x1B\xA7\x03\x02\x02\x02\x1D\xAA\x03\x02\x02\x02\x1F\xAE\x03\x02" +
		"\x02\x02!\xB4\x03\x02\x02\x02#\xBA\x03\x02\x02\x02%\xC4\x03\x02\x02\x02" +
		"\'\xCC\x03\x02\x02\x02)\xD0\x03\x02\x02\x02+\xD9\x03\x02\x02\x02-\xDB" +
		"\x03\x02\x02\x02/\xDD\x03\x02\x02\x021\xDF\x03\x02\x02\x023\xE1\x03\x02" +
		"\x02\x025\xE3\x03\x02\x02\x027\xE5\x03\x02\x02\x029\xE8\x03\x02\x02\x02" +
		";\xEB\x03\x02\x02\x02=\xED\x03\x02\x02\x02?\xEF\x03\x02\x02\x02A\xF2\x03" +
		"\x02\x02\x02C\xF5\x03\x02\x02\x02E\xF7\x03\x02\x02\x02G\xF9\x03\x02\x02" +
		"\x02I\xFB\x03\x02\x02\x02K\xFD\x03\x02\x02\x02M\xFF\x03\x02\x02\x02O\u0101" +
		"\x03\x02\x02\x02Q\u0103\x03\x02\x02\x02S\u0105\x03\x02\x02\x02U\u0107" +
		"\x03\x02\x02\x02W\u0109\x03\x02\x02\x02Y\u010C\x03\x02\x02\x02[\u010F" +
		"\x03\x02\x02\x02]\u011A\x03\x02\x02\x02_\u0129\x03\x02\x02\x02ab\x07n" +
		"\x02\x02bc\x07g\x02\x02cd\x07v\x02\x02d\x04\x03\x02\x02\x02ef\x07y\x02" +
		"\x02fg\x07j\x02\x02gh\x07k\x02\x02hi\x07n\x02\x02ij\x07g\x02\x02j\x06" +
		"\x03\x02\x02\x02kl\x07r\x02\x02lm\x07t\x02\x02mn\x07k\x02\x02no\x07p\x02" +
		"\x02op\x07v\x02\x02p\b\x03\x02\x02\x02qr\x07k\x02\x02rs\x07h\x02\x02s" +
		"\n\x03\x02\x02\x02tu\x07g\x02\x02uv\x07n\x02\x02vw\x07u\x02\x02wx\x07" +
		"g\x02\x02x\f\x03\x02\x02\x02yz\x07h\x02\x02z{\x07w\x02\x02{|\x07p\x02" +
		"\x02|}\x07e\x02\x02}~\x07v\x02\x02~\x7F\x07k\x02\x02\x7F\x80\x07q\x02" +
		"\x02\x80\x81\x07p\x02\x02\x81\x0E\x03\x02\x02\x02\x82\x83\x07h\x02\x02" +
		"\x83\x84\x07q\x02\x02\x84\x85\x07t\x02\x02\x85\x10\x03\x02\x02\x02\x86" +
		"\x87\x07t\x02\x02\x87\x88\x07g\x02\x02\x88\x89\x07v\x02\x02\x89\x8A\x07" +
		"w\x02\x02\x8A\x8B\x07t\x02\x02\x8B\x8C\x07p\x02\x02\x8C\x12\x03\x02\x02" +
		"\x02\x8D\x8E\x07d\x02\x02\x8E\x8F\x07t\x02\x02\x8F\x90\x07g\x02\x02\x90" +
		"\x91\x07c\x02\x02\x91\x92\x07m\x02\x02\x92\x14\x03\x02\x02\x02\x93\x94" +
		"\x07u\x02\x02\x94\x95\x07y\x02\x02\x95\x96\x07k\x02\x02\x96\x97\x07v\x02" +
		"\x02\x97\x98\x07e\x02\x02\x98\x99\x07j\x02\x02\x99\x16\x03\x02\x02\x02" +
		"\x9A\x9B\x07e\x02\x02\x9B\x9C\x07c\x02\x02\x9C\x9D\x07u\x02\x02\x9D\x9E" +
		"\x07g\x02\x02\x9E\x18\x03\x02\x02\x02\x9F\xA0\x07f\x02\x02\xA0\xA1\x07" +
		"g\x02\x02\xA1\xA2\x07h\x02\x02\xA2\xA3\x07c\x02\x02\xA3\xA4\x07w\x02\x02" +
		"\xA4\xA5\x07n\x02\x02\xA5\xA6\x07v\x02\x02\xA6\x1A\x03\x02\x02\x02\xA7" +
		"\xA8\x07q\x02\x02\xA8\xA9\x07p\x02\x02\xA9\x1C\x03\x02\x02\x02\xAA\xAB" +
		"\x07v\x02\x02\xAB\xAC\x07t\x02\x02\xAC\xAD\x07{\x02\x02\xAD\x1E\x03\x02" +
		"\x02\x02\xAE\xAF\x07e\x02\x02\xAF\xB0\x07c\x02\x02\xB0\xB1\x07v\x02\x02" +
		"\xB1\xB2\x07e\x02\x02\xB2\xB3\x07j\x02\x02\xB3 \x03\x02\x02\x02\xB4\xB5" +
		"\x07v\x02\x02\xB5\xB6\x07j\x02\x02\xB6\xB7\x07t\x02\x02\xB7\xB8\x07q\x02" +
		"\x02\xB8\xB9\x07y\x02\x02\xB9\"\x03\x02\x02\x02\xBA\xBB\x07r\x02\x02\xBB" +
		"\xBC\x07t\x02\x02\xBC\xBD\x07q\x02\x02\xBD\xBE\x07e\x02\x02\xBE\xBF\x07" +
		"g\x02\x02\xBF\xC0\x07u\x02\x02\xC0\xC1\x07u\x02\x02\xC1\xC2\x07q\x02\x02" +
		"\xC2\xC3\x07t\x02\x02\xC3$\x03\x02\x02\x02\xC4\xC8\t\x02\x02\x02\xC5\xC7" +
		"\t\x03\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6" +
		"\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9&\x03\x02\x02\x02\xCA\xC8" +
		"\x03\x02\x02\x02\xCB\xCD\t\x04\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF(" +
		"\x03\x02\x02\x02\xD0\xD4\x07$\x02\x02\xD1\xD3\v\x02\x02\x02\xD2\xD1\x03" +
		"\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD4\xD2\x03" +
		"\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x07" +
		"$\x02\x02\xD8*\x03\x02\x02\x02\xD9\xDA\x07-\x02\x02\xDA,\x03\x02\x02\x02" +
		"\xDB\xDC\x07/\x02\x02\xDC.\x03\x02\x02\x02\xDD\xDE\x07,\x02\x02\xDE0\x03" +
		"\x02\x02\x02\xDF\xE0\x071\x02\x02\xE02\x03\x02\x02\x02\xE1\xE2\x07\'\x02" +
		"\x02\xE24\x03\x02\x02\x02\xE3\xE4\x07?\x02\x02\xE46\x03\x02\x02\x02\xE5" +
		"\xE6\x07-\x02\x02\xE6\xE7\x07?\x02\x02\xE78\x03\x02\x02\x02\xE8\xE9\x07" +
		"?\x02\x02\xE9\xEA\x07?\x02\x02\xEA:\x03\x02\x02\x02\xEB\xEC\x07>\x02\x02" +
		"\xEC<\x03\x02\x02\x02\xED\xEE\x07@\x02\x02\xEE>\x03\x02\x02\x02\xEF\xF0" +
		"\x07>\x02\x02\xF0\xF1\x07?\x02\x02\xF1@\x03\x02\x02\x02\xF2\xF3\x07@\x02" +
		"\x02\xF3\xF4\x07?\x02\x02\xF4B\x03\x02\x02\x02\xF5\xF6\x07=\x02\x02\xF6" +
		"D\x03\x02\x02\x02\xF7\xF8\x07.\x02\x02\xF8F\x03\x02\x02\x02\xF9\xFA\x07" +
		"<\x02\x02\xFAH\x03\x02\x02\x02\xFB\xFC\x07*\x02\x02\xFCJ\x03\x02\x02\x02" +
		"\xFD\xFE\x07+\x02\x02\xFEL\x03\x02\x02\x02\xFF\u0100\x07}\x02\x02\u0100" +
		"N\x03\x02\x02\x02\u0101\u0102\x07\x7F\x02\x02\u0102P\x03\x02\x02\x02\u0103" +
		"\u0104\x07]\x02\x02\u0104R\x03\x02\x02\x02\u0105\u0106\x07_\x02\x02\u0106" +
		"T\x03\x02\x02\x02\u0107\u0108\x070\x02\x02\u0108V\x03\x02\x02\x02\u0109" +
		"\u010A\x07-\x02\x02\u010A\u010B\x07-\x02\x02\u010BX\x03\x02\x02\x02\u010C" +
		"\u010D\x07/\x02\x02\u010D\u010E\x07/\x02\x02\u010EZ\x03\x02\x02\x02\u010F" +
		"\u0110\x071\x02\x02\u0110\u0111\x071\x02\x02\u0111\u0115\x03\x02\x02\x02" +
		"\u0112\u0114\n\x05\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0117\x03" +
		"\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116" +
		"\u0118\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119\b.\x02" +
		"\x02\u0119\\\x03\x02\x02\x02\u011A\u011B\x071\x02\x02\u011B\u011C\x07" +
		",\x02\x02\u011C\u0120\x03\x02\x02\x02\u011D\u011F\v\x02\x02\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u0121\x03\x02" +
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0123\u0124\x07,\x02\x02\u0124\u0125\x071\x02\x02" +
		"\u0125\u0126\x03\x02\x02\x02\u0126\u0127\b/\x02\x02\u0127^\x03\x02\x02" +
		"\x02\u0128\u012A\t\x06\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C\u012D\x03\x02\x02\x02\u012D\u012E\b0\x02\x02\u012E`\x03\x02\x02" +
		"\x02\t\x02\xC8\xCE\xD4\u0115\u0120\u012B\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MindLangLexer.__ATN) {
			MindLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MindLangLexer._serializedATN));
		}

		return MindLangLexer.__ATN;
	}

}

