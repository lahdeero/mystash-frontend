module.exports = {
	"parser": "babel-eslint",
	"extends": "standard",
	"plugins": ["react"],
	"rules": {
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"no-undef": 1,
		"space-before-function-paren": 0,
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars":
			"error"
	}
};


