const r = require("raylib");
let isSpaceKeyPressed = false;

function setup() {
    const world = {
        windowWidth: 800,
        windowHeight: 400,
        x1: 50,
        y1: 150,
        width1: 50,
        height1: 50,
        color1: r.BLUE,
        x2: 200,
        y2: 200,
        width2: 50,
        height2: 60,
        color2: r.RED,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.windowWidth, world.windowHeight, "Key Action");
    r.SetTargetFPS(60);

    return world;
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        world.x2,
        world.y2,
        world.width1,
        world.height1,
        world.color2,
    );
    r.DrawRectangle(
        world.x1,
        world.y1,
        world.width2,
        world.height2,
        world.color1,
    );

    r.EndDrawing();
}

function update(world) {
    if (r.IsKeyDown(r.KEY_RIGHT)) {
        world.x1++;
    }
    if (r.IsKeyDown(r.KEY_LEFT)) {
        world.x1--;
    }
    if (
        world.x2 === world.x1 + world.width1 &&
        world.y2 <= world.y1 + world.height1
    )
        world.color1 = r.PINK;
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        update(world);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
