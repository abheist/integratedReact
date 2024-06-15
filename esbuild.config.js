const esbuild = require('esbuild');
const glob = require('glob');

// Find all entry points
const entryPoints = glob.sync('./frontend/src/pages/*.js').reduce((acc, path) => {
    const entryName = path.match(/\/(\w+)\.js$/)[1];
    acc[entryName] = path;
    return acc;
}, {});

const buildOptions = {
    entryPoints,
    bundle: true,
    outdir: 'static/dist',
    loader: {'.js': 'jsx'},
    minify: true,
    sourcemap: true,
    splitting: true,
    format: 'esm',
    target: ['es2015']
};

if (process.argv.includes('--watch')) {
    esbuild.context(buildOptions).then(context => {
        context.watch();
        console.log("Watching for changes...");
    }).catch(() => process.exit(1));
} else {
    esbuild.build(buildOptions).catch(() => process.exit(1));
}