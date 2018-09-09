module.exports = Phrase;

// Adds `reverse`to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Adds `blank`to all strings
String.prototype.blank = function () {
	if (this.length === 0 || !this.search(/^\s+$\s+/)) {
		return true;
	} else {
		return false;
	}
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function processor(string) {
		return string.toLowerCase();
	}

	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		let processedContent = this.content.toLowerCase();
		return this.processedContent() === this.processedContent().reverse();
	}

	// Returns letters in the content.
	// For example:
	//	new Prhase("Hello, world!").letters() === "Helloworld"
	this.letters = function letters() {
		return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}

	// Makes the phrase LOUDER.
	this.louder = function lauder() {
		return this.content.toUpperCase();
	}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();