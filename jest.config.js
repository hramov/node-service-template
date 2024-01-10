module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.ts?$': 'ts-jest'
	},
	testRegex: '(\\.|/)(test|spec)\\.ts?$',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	collectCoverage: false,
	clearMocks: true,
	coverageDirectory: "coverage",
};