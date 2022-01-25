const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.white(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.red(text) : chalk.bgKeyword(bgcolor)(text)
}

const biocolor = (text, bgcolor) => {
	return !bgcolor ? chalk.purple(text) : chalk.bgKeyword(bgcolor)(text)
}

const DEFFlog = (text, color) => {
	return !color ? chalk.blue('DEFF') + chalk.green(text) : chalk.yellow('BOT SEDANG SETUP ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	biocolor,
	DEFFlog
}
