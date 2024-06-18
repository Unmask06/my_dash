@echo off
echo Generating Tailwind CSS...

:: Assuming tailwindcss.exe is now in the bin directory at the project root
tailwindcss.exe -i .\my_dash\tailwind\styles.css -o .\my_dash\assets\tailwind.css --minify 

echo Tailwind CSS generated successfully.
pause
