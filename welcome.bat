@echo off
echo Welcome to TermCord!
echo Just put in a token, and you can talk and send messages as bots!
timeout 3 >nul
cls
echo.
echo Note: This is a client made by FireyJS and should not be used for illegal activity. If you see someone with this client doing illegal stuff, then report them to TOS, or just block the bot.
echo.
timeout 4 >nul
cls
echo.
echo =========================
echo    TermCord - Login
echo  =========================
set /p token="Token: "
cls
echo.
echo =========================
echo         TermCord
echo =========================
echo  Connecting...
goto Client

:Client
node client.js --token=%token%
goto Client
