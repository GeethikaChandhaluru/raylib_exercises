const r = require("raylib");
const d = require("./detectorFunctions");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const world = {};
    world.windowWidth = 600;
    world.windowHeight = 400;
    world.d1 = d.createHorizontalDetector(
        0,
        0,
        30,
        world.windowHeight,
        4,
        r.WHITE,
        world.windowWidth / 2,
        0,
    );
    world.d2 = d.createHorizontalDetector(
        world.windowWidth / 2,
        0,
        30,
        world.windowHeight,
        3,
        r.WHITE,
        world.windowWidth,
        world.windowWidth / 2,
    );
    world.d3 = d.createVerticalDetector(
        0,
        0,
        world.windowWidth,
        30,
        2,
        r.WHITE,
        world.windowHeight,
        0,
    );

    world.p1 = d.createHorizontalParticle(190, 0, 100, world.windowHeight);
    world.p2 = d.createHorizontalParticle(400, 0, 50, world.windowHeight);
    world.p3 = d.createVerticalParticle(0, 120, world.windowWidth, 30);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.windowWidth, world.windowHeight, "");
    r.SetTargetFPS(60);

    return world;
}

function update(world) {
    d.updateHorizontalDetector(world.d1, world.p1, world.p2);
    d.updateHorizontalDetector(world.d2, world.p1, world.p2);
    d.updateVerticalDetector(world.d3, world.p3);
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    d.drawParticle(world.p1);
    d.drawParticle(world.p2);
    d.drawParticle(world.p3);

    d.drawHorizontalDetector(world.d1);
    d.drawHorizontalDetector(world.d2);
    d.drawVerticalDetector(world.d3);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
