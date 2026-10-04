const r = require("raylib");

function changeHorizontalEnd(start, width) {
    return start + width;
}
function changeVerticalEnd(start, height) {
    return start + height;
}

function changeStart(start, velocity) {
    return (start += velocity);
}

function outOfRange(start, end, window_start, window_end) {
    return end >= window_start || start <= window_end;
}

function changeDirection(start, end, width, constant, velocity) {
    return outOfRange(start, end, width, constant) ? -velocity : velocity;
}

function detectsParticle(
    start,
    end,
    particle1_start,
    particle1_end,
    particle2_start,
    particle2_end,
) {
    return (
        (end >= particle1_start && start <= particle1_end) ||
        (end >= particle2_start && start <= particle2_end)
    );
}

function changeColor(
    start,
    end,
    particle1_start,
    particle1_end,
    particle2_start,
    particle2_end,
) {
    return detectsParticle(
        start,
        end,
        particle1_start,
        particle1_end,
        particle2_start,
        particle2_end,
    )
        ? r.RED
        : r.WHITE;
}

function detectsHorizontalParticle(start, end, particle_start, particle_end) {
    return end >= particle_start && start <= particle_end;
}

function changeColorHorizontal(start, end, particle_start, particle_end) {
    return detectsHorizontalParticle(start, end, particle_start, particle_end)
        ? r.RED
        : r.WHITE;
}

module.exports = {
    changeHorizontalEnd,
    changeVerticalEnd,
    changeStart,
    detectsParticle,
    detectsHorizontalParticle,
    outOfRange,
    changeDirection,
    changeColor,
    changeColorHorizontal,
};
