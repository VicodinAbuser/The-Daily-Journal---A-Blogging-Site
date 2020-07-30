/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,a11yhelp,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,copyformatting,resize,elementspath,enterkey,entities,find,fakeobjects,flash,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,link,list,liststyle,magicline,maximize,pastetext,pastetools,preview,removeformat,save,selectall,specialchar,menubutton,scayt,stylescombo,undo,wsc,textmatch,autolink,autoembed,sourcedialog';
	config.skin = 'minimalist';
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
