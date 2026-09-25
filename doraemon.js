const windowWidth = 700;
const windowHeight = 500;

const r = require("raylib");
r.InitWindow(windowWidth, windowHeight, "Doraemon");
r.SetTargetFPS(60);
while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.LIGHTGRAY);

    //right hand 
    r.DrawCircle(177, 310, 24, r.BLACK)
    r.DrawCircle(177, 310, 21, r.WHITE)
    r.DrawTriangle(
        { x: 279, y: 202 },
        { x: 172, y: 286 },
        { x: 271, y: 255 },
        r.BLACK)
    r.DrawTriangle(
        { x: 284, y: 200 },
        { x: 176, y: 286 },
        { x: 275, y: 255 },
        r.BLUE)
    r.DrawTriangle(
        { x: 275, y: 254 },
        { x: 176, y: 290 },
        { x: 202, y: 318 },
        r.BLACK)
    r.DrawTriangle(
        { x: 275, y: 250 },
        { x: 176, y: 286 },
        { x: 202, y: 314 },
        r.BLUE)


    // ================= LEFT HAND =================

    r.DrawCircle(523, 310, 24, r.BLACK);
    r.DrawCircle(523, 310, 21, r.WHITE);

    r.DrawTriangle(
        { x: 421, y: 202 },
        { x: 429, y: 255 },
        { x: 528, y: 286 },
        r.BLACK
    );

    r.DrawTriangle(
        { x: 416, y: 200 },
        { x: 425, y: 255 },
        { x: 524, y: 286 },
        r.BLUE
    );

    r.DrawTriangle(
        { x: 425, y: 254 },
        { x: 498, y: 318 },
        { x: 524, y: 290 },
        r.BLACK
    );

    r.DrawTriangle(
        { x: 425, y: 250 },
        { x: 498, y: 314 },
        { x: 524, y: 286 },
        r.BLUE
    );


    r.DrawCircle(350, 120, 102, r.BLACK); //faceOutline
    r.DrawCircle(350, 120, 100, r.BLUE); //face
    r.DrawCircle(350, 278, 102, r.BLACK); //bottomOutline
    r.DrawCircle(350, 278, 100, r.BLUE); //bottom

    r.DrawCircle(350, 140, 82, r.BLACK); //whiteFaceOutline
    r.DrawCircle(350, 270, 82, r.BLACK); //whitebottomOutline
    r.DrawCircle(350, 140, 80, r.WHITE); //whiteFace
    r.DrawCircle(350, 270, 80, r.WHITE); //whiteBottom

    r.DrawEllipse(310, 375, 42, 22, r.BLACK)
    r.DrawEllipse(310, 375, 40, 20, r.WHITE)
    r.DrawEllipse(392, 375, 42, 22, r.BLACK)
    r.DrawEllipse(392, 375, 40, 20, r.WHITE)

    r.DrawCircle(350, 130, 50, r.BLACK); //mouthOl
    r.DrawCircle(350, 130, 47, r.RED); //mouth
    r.DrawCircle(350, 168, 25, r.ORANGE); //tongue
    r.DrawRectangle(324, 170, 52, 3, r.BLACK); //mergeLine

    r.DrawRectangle(320, 173, 80, 32, r.WHITE); //mouthBottomRectangle
    r.DrawRectangle(300, 80, 100, 50, r.BLACK); //upperLipOl
    r.DrawRectangle(300, 80, 100, 48, r.WHITE); //upperLip

    r.DrawCircle(351, 85, 9, r.BLACK); //noseOl
    r.DrawCircle(351, 85, 7, r.RED); //nose

    r.DrawRectangle(350, 94, 3, 34, r.BLACK); //mergeLine

    r.DrawCircle(350, 260, 50, r.BLACK); //pocketOl
    r.DrawCircle(350, 260, 47, r.WHITE); //pocket
    r.DrawRectangle(300, 210, 100, 50, r.BLACK); //upperPocketOl
    r.DrawRectangle(300, 210, 100, 48, r.WHITE); //upperPocket

    r.DrawLine(290, 120, 250, 80, r.BLACK); //rightline1
    r.DrawLine(290, 130, 245, 130, r.BLACK); //rightline2
    r.DrawLine(290, 140, 250, 170, r.BLACK); //rightline3
    r.DrawLine(410, 120, 450, 80, r.BLACK); //leftline1
    r.DrawLine(410, 130, 455, 130, r.BLACK); //leftline2
    r.DrawLine(410, 140, 450, 170, r.BLACK); //leftline3

    r.DrawCircle(330, 65, 22, r.BLACK); //rightEyeOl
    r.DrawCircle(372, 65, 22, r.BLACK); //leftEyeOl
    r.DrawCircle(330, 65, 20, r.WHITE); //rightEye
    r.DrawCircle(372, 65, 20, r.WHITE); //leftEye

    r.DrawCircle(338, 70, 5, r.BLACK); //rightEyeBall
    r.DrawCircle(380, 70, 5, r.BLACK); //leftEyeBall


    r.DrawRectangle(278, 198, 143, 14, r.BLACK); //beltOutline
    r.DrawRectangle(280, 200, 139, 10, r.RED); //belt

    r.DrawCircle(350, 205, 14, r.BLACK); //bellOl
    r.DrawCircle(350, 205, 12, r.YELLOW); //bellBG
    r.DrawRectangle(337, 203, 25, 2, r.BLACK); //bellLine
    r.DrawCircle(350, 210, 3, r.BLACK); //bellWhole
    r.DrawRectangle(349, 210, 2, 8, r.BLACK); //bellDesign

    r.EndDrawing();
}
r.CloseWindow();
