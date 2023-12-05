module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/git',
		[
			'@semantic-release/npm',
			{
				pkgRoot: 'dist/libs/di-controls',
			},
		],
		'@semantic-release/github'
	],
};
