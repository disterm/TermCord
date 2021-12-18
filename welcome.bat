@echo off
echo Welcome to TermCord!
pause
cls
echo Note: This is a client made by FireyJS and should not be used for illegal activity. If you see someone with this client doing illegal stuff, then report them to TOS, or just block the bot.
echo.
timeout 2 >nul
cls
echo.
echo  Connecting...
goto Client

:Client
node client.js
