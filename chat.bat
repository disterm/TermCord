@echo off
echo ========================
echo     TermCord - Send
echo ========================
goto Chat

:Chat
set /p message="> "
node client.js --token=%token% --msg=%message%
goto Chat
