let fs = require("fs");
const exec = require('child_process').execSync;

function execute(cmd) {
    exec(cmd, { stdio: 'inherit' });
}


function build_game() {
    execute(`/Applications/CocosCreator2.2.2.app/Contents/MacOS/CocosCreator --path ./ --build "platform=web-desktop;debug=true;previewWidth=720;previewHeight=1280"`)
    console.log("build game succeed.");
}

function main() {
    console.log("当前Jenkins的构建参数 = ",process.env.debug);
    build_game();
}

main();